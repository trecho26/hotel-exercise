import React from "react";
import { ServicesEnum } from "@/constants/hotelDefinitions";
import GymIcon from "./Icons/GymIcon";
import WifiIcon from "./Icons/WifiIcon";
import PoolIcon from "./Icons/PoolIcon";
import BreakfastIcon from "./Icons/BreakfastIcon";
import TransportationIcon from "./Icons/TransportationIcon";
import SpaIcon from "./Icons/SpaIcon";
import RestaurantIcon from "./Icons/RestaurantIcon";
import DefaultService from "./Icons/DefaultService";
import { titleCase } from "@/utils/strHelpers";

type Props = {
  services: ServicesEnum[];
  detailView: boolean;
};

const renderIcon = (service: ServicesEnum) => {
  switch (service) {
    case ServicesEnum.WIFI:
      return <WifiIcon />;
    case ServicesEnum.GYM:
      return <GymIcon />;
    case ServicesEnum.POOL:
      return <PoolIcon />;
    case ServicesEnum.BREAKFAST:
      return <BreakfastIcon />;
    case ServicesEnum.TRANSPORTATION:
      return <TransportationIcon />;
    case ServicesEnum.SPA:
      return <SpaIcon />;
    case ServicesEnum.RESTAURANT:
      return <RestaurantIcon />;
    default:
      return <DefaultService />;
  }
};

const Services = ({ services, detailView }: Props) => {
  if (detailView) {
    return (
      <div className="flex items-center gap-8">
        {services.map((service) => (
          <div key={service} className="flex flex-col items-center">
            {renderIcon(service)}
            <div>
              <p className="font-medium">{titleCase(service)}</p>
            </div>
          </div>
        ))}
      </div>
    );
  } else {
    return (
      <div className="flex items-center gap-4">
        {services.slice(0, 3).map((service) => (
          <div key={service} className="flex flex-col items-center">
            {renderIcon(service)}
            <div>
              <p className="font-medium">{titleCase(service)}</p>
            </div>
          </div>
        ))}
        {services.length > 3 && (
          <div
            data-testid="additional-services"
            className="flex flex-col items-center ms-auto"
          >
            <span className="flex w-[24px] h-[24px] justify-center items-center border-2 border-indigo-700 rounded text-indigo-700 font-medium">
              {services.length - 3}
            </span>
            <div>
              <p className="font-medium">more</p>
            </div>
          </div>
        )}
      </div>
    );
  }
};

export default Services;
