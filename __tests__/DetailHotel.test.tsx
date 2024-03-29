import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import HotelPage from "@/pages/details/[hotelId]";
import { hotelsData } from "@/data/hotelsData";

describe("Hotel page", () => {
  it("renders hotel's detail page", () => {
    render(<HotelPage hotel={hotelsData[0]} />);

    expect(screen.getByText(hotelsData[0].name)).toBeInTheDocument();
    expect(screen.getByText(hotelsData[0].description)).toBeInTheDocument();
    expect(screen.getByText(hotelsData[0].rate)).toBeInTheDocument();
    expect(
      screen.getByText(`$${hotelsData[0].price_per_night.toString()}`)
    ).toBeInTheDocument();
  });
});
