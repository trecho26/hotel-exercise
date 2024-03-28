import { Hotel } from "@/constants/hotelDefinitions";
import { hotelsData } from "@/data/hotelsData";
import type { NextApiRequest, NextApiResponse } from "next";

type Error = {
  msg: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Hotel | Error>
) {
  const hotelId = req.query.hotelId;

  const hotel = hotelsData.find((hotel) => hotel.id === hotelId);

  if (!hotel) {
    return res.status(404).json({ msg: "Not found" });
  }

  res.status(200).json(hotel);
}
