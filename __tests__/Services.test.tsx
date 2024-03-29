import "@testing-library/jest-dom";
import { getByTestId, render, screen } from "@testing-library/react";

import { hotelsData } from "@/data/hotelsData";
import Services from "@/components/Services";
import { ServicesEnum } from "@/constants/hotelDefinitions";
import { titleCase } from "@/utils/strHelpers";

const mockServices = [
  ServicesEnum.WIFI,
  ServicesEnum.GYM,
  ServicesEnum.POOL,
  ServicesEnum.SPA,
  ServicesEnum.BREAKFAST,
];

const mockServices2 = [
  ServicesEnum.WIFI,
  ServicesEnum.GYM,
  ServicesEnum.POOL,
  ServicesEnum.SPA,
  ServicesEnum.RESTAURANT,
  ServicesEnum.TRANSPORTATION,
  ServicesEnum.BREAKFAST,
];

describe("Services", () => {
  it("renders services correctly for detail view", () => {
    const { getByText } = render(
      <Services services={mockServices} detailView={true} />
    );

    mockServices.forEach((service) => {
      const serviceName = getByText(titleCase(service));
      expect(serviceName).toBeInTheDocument();
    });
  });

  it("renders services correctly for no detail view (5 services)", () => {
    const { getByText, getByTestId } = render(
      <Services services={mockServices} detailView={false} />
    );

    // Only shows the first 3 services and add "N more" services if exists
    // Example: 5 services in total, only shows the first 3 and adds a "2 more" label
    mockServices.slice(0, 3).forEach((service) => {
      const serviceName = getByText(titleCase(service));
      expect(serviceName).toBeInTheDocument();
    });

    const additionalServices = getByTestId("additional-services");

    expect(additionalServices.textContent).toBe("2more");
  });

  it("renders services correctly for no detail view (7 services)", () => {
    const { getByText, getByTestId } = render(
      <Services services={mockServices2} detailView={false} />
    );

    // Only shows the first 3 services and add "N more" services if exists
    // Example: 7 services in total, only shows the first 3 and adds a "4 more" label or
    mockServices2.slice(0, 3).forEach((service) => {
      const serviceName = getByText(titleCase(service));
      expect(serviceName).toBeInTheDocument();
    });

    const additionalServices = getByTestId("additional-services");

    expect(additionalServices.textContent).toBe("4more");
  });
});
