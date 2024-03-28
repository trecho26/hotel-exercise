import { Hotel, ServicesEnum } from "@/constants/hotelDefinitions";

export const hotelsData: Hotel[] = [
  {
    id: "1",
    name: "Hotel A",
    description: "A luxurious hotel in the heart of the city",
    image: "/images/hotel_01.webp",
    rate: "4.5",
    services: [
      ServicesEnum.WIFI,
      ServicesEnum.GYM,
      ServicesEnum.POOL,
      ServicesEnum.RESTAURANT,
      ServicesEnum.TRANSPORTATION,
    ],
    available_rooms: "50",
    all_inclusive: false,
    price_per_night: 150,
  },
  {
    id: "2",
    name: "Hotel B",
    description: "A cozy hotel near the beach",
    image: "/images/hotel_02.webp",
    rate: "3.8",
    services: [
      ServicesEnum.WIFI,
      ServicesEnum.RESTAURANT,
      ServicesEnum.TRANSPORTATION,
    ],
    available_rooms: "20",
    all_inclusive: true,
    price_per_night: 230,
  },
  {
    id: "3",
    name: "Hotel C",
    description: "A modern hotel with stunning views",
    image: "/images/hotel_03.webp",
    rate: "4.2",
    services: [
      ServicesEnum.WIFI,
      ServicesEnum.GYM,
      ServicesEnum.POOL,
      ServicesEnum.RESTAURANT,
      ServicesEnum.TRANSPORTATION,
      ServicesEnum.SPA,
    ],
    available_rooms: "35",
    all_inclusive: false,
    price_per_night: 185,
  },
  {
    id: "4",
    name: "Hotel D",
    description: "A boutique hotel with personalized service",
    image: "/images/hotel_04.webp",
    rate: "4.7",
    services: [ServicesEnum.WIFI, ServicesEnum.GYM],
    available_rooms: "10",
    all_inclusive: false,
    price_per_night: 100,
  },
  {
    id: "5",
    name: "Hotel E",
    description: "A budget-friendly hotel for travelers",
    image: "/images/hotel_05.webp",
    rate: "3.2",
    services: [ServicesEnum.WIFI, ServicesEnum.GYM, ServicesEnum.SPA],
    available_rooms: "45",
    all_inclusive: false,
    price_per_night: 350,
  },
  {
    id: "6",
    name: "Hotel F",
    description: "A family-friendly hotel with entertainment",
    image: "/images/hotel_06.webp",
    rate: "4.0",
    services: [ServicesEnum.WIFI, ServicesEnum.POOL],
    available_rooms: "30",
    all_inclusive: true,
    price_per_night: 400,
  },
  {
    id: "7",
    name: "Hotel G",
    description: "A historic hotel with elegant decor",
    image: "/images/hotel_07.webp",
    rate: "4.6",
    services: [
      ServicesEnum.WIFI,
      ServicesEnum.POOL,
      ServicesEnum.SPA,
      ServicesEnum.BREAKFAST,
    ],
    available_rooms: "5",
    all_inclusive: false,
    price_per_night: 300,
  },
  {
    id: "8",
    name: "Hotel H",
    description: "A pet-friendly hotel with walking trails",
    image: "/images/hotel_08.webp",
    rate: "4.3",
    services: [ServicesEnum.WIFI],
    available_rooms: "15",
    all_inclusive: false,
    price_per_night: 80,
  },
  {
    id: "9",
    name: "Hotel I",
    description: "A business hotel with conference facilities",
    image: "/images/hotel_09.webp",
    rate: "4.1",
    services: [ServicesEnum.WIFI, ServicesEnum.GYM, ServicesEnum.SPA],
    available_rooms: "25",
    all_inclusive: false,
    price_per_night: 75,
  },
  {
    id: "10",
    name: "Hotel J",
    description: "A beachfront hotel with water sports",
    image: "/images/hotel_10.webp",
    rate: "4.4",
    services: [ServicesEnum.WIFI],
    available_rooms: "40",
    all_inclusive: true,
    price_per_night: 435,
  },
  {
    id: "11",
    name: "Hotel K",
    description: "A mountain resort with outdoor activities",
    image: "/images/hotel_11.webp",
    rate: "5",
    services: [
      ServicesEnum.WIFI,
      ServicesEnum.GYM,
      ServicesEnum.POOL,
      ServicesEnum.RESTAURANT,
      ServicesEnum.TRANSPORTATION,
      ServicesEnum.SPA,
    ],
    available_rooms: "8",
    all_inclusive: true,
    price_per_night: 800,
  },
  {
    id: "12",
    name: "Hotel L",
    description: "A romantic hotel with candlelit dinners",
    image: "/images/hotel_12.webp",
    rate: "4.9",
    services: [
      ServicesEnum.WIFI,
      ServicesEnum.POOL,
      ServicesEnum.SPA,
      ServicesEnum.BREAKFAST,
    ],
    available_rooms: "12",
    all_inclusive: false,
    price_per_night: 320,
  },
  {
    id: "13",
    name: "Hotel M",
    description: "A ski-in/ski-out hotel in a popular resort",
    image: "/images/hotel_13.webp",
    rate: "4.3",
    services: [ServicesEnum.WIFI],
    available_rooms: "18",
    all_inclusive: false,
    price_per_night: 280,
  },
  {
    id: "14",
    name: "Hotel N",
    description: "A eco-friendly hotel with sustainable practices",
    image: "/images/hotel_14.webp",
    rate: "4.2",
    services: [
      ServicesEnum.WIFI,
      ServicesEnum.POOL,
      ServicesEnum.SPA,
      ServicesEnum.BREAKFAST,
    ],
    available_rooms: "22",
    all_inclusive: false,
    price_per_night: 140,
  },
];