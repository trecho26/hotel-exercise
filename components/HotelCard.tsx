import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Hotel } from "@/constants/hotelDefinitions";
import Services from "./Services";
import StarIcon from "./Icons/StarIcon";

type Props = {
  hotel: Hotel;
};

const HotelCard = ({ hotel }: Props) => {
  return (
    <Link
      href={`/details/${hotel.id}`}
      className="block rounded-lg p-4 shadow-sm border-[1px] hover:border-[1px] hover:border-indigo-700"
    >
      <div className="relative">
        <Image
          width={500}
          height={500}
          src={hotel.image}
          alt={`Image of hotel ${hotel.id}`}
          className="h-56 w-full rounded-md object-cover"
        />
        {hotel.all_inclusive && (
          <span className="absolute bottom-2 right-2 shadow-md bg-indigo-700 text-white text-sm rounded px-2 py-1">
            All Inclusive
          </span>
        )}
      </div>

      <div className="mt-2 flex flex-col min-h-[150px] justify-between">
        <dl>
          <div className="flex items-center justify-between">
            <div>
              <dt className="sr-only">Hotel name</dt>

              <dd className="font-medium">{hotel.name}</dd>
            </div>

            <div>
              <dt className="sr-only">Hotel rate</dt>

              <dd className="font-medium">
                <span className="flex gap-1 font-medium">
                  <StarIcon /> {hotel.rate}
                </span>
              </dd>
            </div>
          </div>

          <div>
            <dt className="sr-only">Hotel description</dt>

            <dd className="text-sm text-gray-500">{hotel.description}</dd>
          </div>
        </dl>

        <div className="flex flex-col gap-2 text-xs">
          <dl>
            <div>
              <dt className="sr-only">Available services</dt>

              <dd className="font-medium">Available services</dd>
            </div>
          </dl>
          <Services services={hotel.services} detailView={false} />
        </div>
      </div>
    </Link>
  );
};

export default HotelCard;
