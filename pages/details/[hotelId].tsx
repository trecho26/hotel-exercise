import { Hotel } from "@/constants/hotelDefinitions";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import Layout from "../Layout";
import Image from "next/image";
import Services from "@/components/Services";
import StarIcon from "@/components/Icons/StarIcon";

export default function HotelPage({
  hotel,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Layout>
      <div className="mt-4">
        <Image
          width={500}
          height={500}
          src={hotel.image}
          alt={`Image of hotel ${hotel.id}`}
          className="h-[400px] w-full rounded-md object-cover"
        />
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-4 mt-4">
              <h1 className="font-bold text-3xl">{hotel.name}</h1>
              <span className="flex gap-1 font-medium">
                <StarIcon /> {hotel.rate}
              </span>
            </div>
            <h2 className="my-2">{hotel.description}</h2>
            <span className="text-sm">
              Available rooms: {hotel.available_rooms}
            </span>
          </div>
          <div>
            <p className="font-bold text-4xl">${hotel.price_per_night}</p>
            <span className="text-xs text-gray-500 text-center block">
              per night
            </span>
          </div>
        </div>

        <span className="flex items-center my-5">
          <span className="pr-6">Available services</span>
          <span className="h-px flex-1 bg-slate-400"></span>
        </span>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-4 text-xs">
          <div className="flex items-center gap-8">
            <Services services={hotel.services} detailView={true} />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  // Call an external API endpoint to get hotels
  const res = await fetch(`${process.env.BASEURL}/api/hotels`);
  const response = await res.json();

  // Get the paths we want to pre-render based on hotels response
  const paths = response.data.map((hotel: Hotel) => ({
    params: { hotelId: hotel.id },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}

export const getStaticProps = (async ({ params }) => {
  // params contains the hotel `id`.
  // If the route is like /posts/1, then params.id is 1
  const res = await fetch(
    `${process.env.BASEURL}/api/hotels/${params?.hotelId}`
  );
  const hotel = await res.json();

  // Pass hotel data to the page via props
  return { props: { hotel } };
}) satisfies GetStaticProps<{
  hotel: Hotel;
}>;
