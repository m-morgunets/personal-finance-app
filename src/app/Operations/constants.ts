import {
  MealIcon,
  ClothesIcon,
  GamesIcon,
  HouseIcon,
  MedicineIcon,
  PersonIcon,
  ProductsIcon,
  TransportIcon,
  СonnectionIcon,
} from "assets";
import { DataTable } from "./types";

export const DATA: DataTable[] = [
  {
    category: "meal",
    name: "Обед в бистро",
    date: new Date(2025, 5, 30),
    amount: -500,
  },
  {
    category: "products",
    name: "Покупка продуктов в пятёрочке",
    date: new Date(2025, 5, 29),
    amount: -1432.5,
  },
  {
    category: "transport",
    name: "Метро",
    date: new Date(2025, 5, 28),
    amount: -60,
  },
  {
    category: "games",
    name: "Кино",
    date: new Date(2025, 5, 28),
    amount: -700,
  },
  {
    category: "meal",
    name: "Доставка суши",
    date: new Date(2025, 5, 27),
    amount: -1200,
  },
  {
    category: "products",
    name: "Лента — недельный запас",
    date: new Date(2025, 5, 26),
    amount: -2300,
  },
  {
    category: "clothes",
    name: "Футболка в H&M",
    date: new Date(2025, 5, 25),
    amount: -999,
  },
  {
    category: "meal",
    name: "Кофе и круассан",
    date: new Date(2025, 5, 25),
    amount: -350,
  },
  {
    category: "transport",
    name: "Такси до дома",
    date: new Date(2025, 5, 24),
    amount: -450,
  },
  {
    category: "house",
    name: "Оплата ЖКХ",
    date: new Date(2025, 5, 23),
    amount: -5400,
  },
  {
    category: "medicine",
    name: "Аптека",
    date: new Date(2025, 5, 22),
    amount: -860,
  },
  {
    category: "house",
    name: "Покупка посуды в Икеа",
    date: new Date(2025, 5, 21),
    amount: -1800,
  },
  {
    category: "person",
    name: "Моргунец Михаил",
    date: new Date(2025, 5, 20),
    amount: 300,
  },
  {
    category: "connection",
    name: "Мобильная связь",
    date: new Date(2025, 5, 20),
    amount: -300,
  },
];

export const CATEGORIES = {
  meal: { name: "Кафе", Icon: MealIcon, color: "#277C77" },
  products: { name: "Продукты", Icon: ProductsIcon, color: "#916751" },
  person: { name: "Перевод", Icon: PersonIcon, color: "#82C8D7" },
  connection: { name: "Связь", Icon: СonnectionIcon, color: "#CCB267" },
  house: { name: "Дом", Icon: HouseIcon, color: "#8289D7" },
  medicine: { name: "Медицина", Icon: MedicineIcon, color: "#F0ABAB" },
  transport: { name: "Транспорт", Icon: TransportIcon, color: "#313867" },
  clothes: { name: "Одежда", Icon: ClothesIcon, color: "#6ED571" },
  games: { name: "Развлечения", Icon: GamesIcon, color: "#625F70" },
};
