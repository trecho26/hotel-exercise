import type { InferGetStaticPropsType, GetStaticProps } from "next";
import Layout from "./Layout";
import { Hotel, HotelData } from "@/constants/hotelDefinitions";
import HotelCard from "@/components/HotelCard";
import SearchInput from "@/components/SearchInput";
import { useState } from "react";

export const getStaticProps = (async (context) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/api/hotels`);
  const response = await res.json();
  return { props: { response } };
}) satisfies GetStaticProps<{
  response: HotelData;
}>;

export default function Home({
  response,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const [hotelsData, sethotelsData] = useState(response.data);

  const handleSearch = async (search: string) => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API_URL}/api/hotels?name=${search}`
    );
    const response = await res.json();
    sethotelsData(response.data);
  };

  return (
    <Layout>
      <h1 className="mb-4 font-bold text-center text-4xl">HotelHub</h1>
      <SearchInput handleSearch={handleSearch} />
      <div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-4">
        {hotelsData.map((hotel: Hotel) => (
          <HotelCard key={hotel.id} hotel={hotel} />
        ))}
      </div>
    </Layout>
  );
}
