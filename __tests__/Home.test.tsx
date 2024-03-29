import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Home from "@/pages";
import { hotelsData } from "@/data/hotelsData";

describe("Home Page", () => {
  it("renders a heading with correct text", () => {
    render(<Home response={{ data: hotelsData }} />);

    const heading = screen.getByText("HotelHub");

    expect(heading).toBeInTheDocument();
  });

  it("renders a collection of Hotel's cards", () => {
    const { getByText } = render(<Home response={{ data: hotelsData }} />);

    hotelsData.forEach((hotel) => {
      // Only name and description are validated but we can do the same for all the data that is shown
      const hotelName = getByText(hotel.name);
      const hotelDescription = getByText(hotel.description);

      expect(hotelName).toBeInTheDocument();
      expect(hotelDescription).toBeInTheDocument();
    });
  });
});
