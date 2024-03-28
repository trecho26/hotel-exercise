import { HotelData } from "@/constants/hotelDefinitions";
import { hotelsData } from "@/data/hotelsData";
import type { NextApiRequest, NextApiResponse } from "next";

type Error = {
  msg: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<HotelData | Error>
) {
  const searchByName = req.query.name;

  if (searchByName) {
    const results = hotelsData.filter((hotel) =>
      hotel.name.includes(searchByName as string)
    );
    if (results.length > 0) {
      return res.status(200).json({ data: results });
    } else {
      return res.status(404).json({ msg: "Not found" });
    }
  }

  res.status(200).json({ data: hotelsData });
}
