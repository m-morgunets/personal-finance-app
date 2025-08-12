import MealIcon from "@/public/meal.svg";
import ProductsIcon from "@/public/products.svg";
import PersonIcon from "@/public/person.svg";
import СonnectionIcon from "@/public/connection.svg";
import HouseIcon from "@/public/house.svg";
import MedicineIcon from "@/public/medicine.svg";
import TransportIcon from "@/public/transport.svg";
import ClothesIcon from "@/public/clothes.svg";
import GamesIcon from "@/public/games.svg";

import { Category } from "./types";

export const CATEGORIES: Category[] = [
  {
    key: "meal",
    name: "Кафе",
    iconSrc: MealIcon,
    color: "#277C77",
  },
  {
    key: "products",
    name: "Продукты",
    iconSrc: ProductsIcon,
    color: "#916751",
    budget: 15000,
  },
  {
    key: "person",
    name: "Перевод",
    iconSrc: PersonIcon,
    color: "#82C8D7",
  },
  {
    key: "connection",
    name: "Связь",
    iconSrc: СonnectionIcon,
    color: "#CCB267",
  },
  {
    key: "house",
    name: "Дом",
    iconSrc: HouseIcon,
    color: "#8289D7",
  },
  {
    key: "medicine",
    name: "Медицина",
    iconSrc: MedicineIcon,
    color: "#F0ABAB",
  },
  {
    key: "transport",
    name: "Транспорт",
    iconSrc: TransportIcon,
    color: "#313867",
  },
  {
    key: "clothes",
    name: "Одежда",
    iconSrc: ClothesIcon,
    color: "#6ED571",
  },
  {
    key: "games",
    name: "Развлечения",
    iconSrc: GamesIcon,
    color: "#625F70",
    budget: 4000,
  },
];
