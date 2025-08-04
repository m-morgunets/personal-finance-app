import MealIcon from "@/public/meal.svg";
import ProductsIcon from "@/public/products.svg";
import PersonIcon from "@/public/person.svg";
import СonnectionIcon from "@/public/connection.svg";
import HouseIcon from "@/public/house.svg";
import MedicineIcon from "@/public/medicine.svg";
import TransportIcon from "@/public/transport.svg";
import ClothesIcon from "@/public/clothes.svg";
import GamesIcon from "@/public/games.svg";

import { v4 as uuidv4 } from "uuid";
import { Categories, DataTable } from "./types";

export const DATA: DataTable[] = [
  {
    id: uuidv4(),
    category: "meal",
    name: "Обед в бистро",
    date: new Date(2025, 6, 30),
    amount: -500,
  },
  {
    id: uuidv4(),
    category: "products",
    name: "Покупка продуктов в пятёрочке",
    date: new Date(2025, 6, 29),
    amount: -1432.5,
  },
  {
    id: uuidv4(),
    category: "transport",
    name: "Метро",
    date: new Date(2025, 6, 28),
    amount: -60,
  },
  {
    id: uuidv4(),
    category: "games",
    name: "Кино",
    date: new Date(2025, 6, 28),
    amount: -700,
  },
  {
    id: uuidv4(),
    category: "meal",
    name: "Доставка суши",
    date: new Date(2025, 6, 27),
    amount: -1200,
  },
  {
    id: uuidv4(),
    category: "products",
    name: "Лента — недельный запас",
    date: new Date(2025, 6, 26),
    amount: -2300,
  },
  {
    id: uuidv4(),
    category: "clothes",
    name: "Футболка в H&M",
    date: new Date(2025, 6, 25),
    amount: -999,
  },
  {
    id: uuidv4(),
    category: "meal",
    name: "Кофе и круассан",
    date: new Date(2025, 6, 25),
    amount: -350,
  },
  {
    id: uuidv4(),
    category: "transport",
    name: "Такси до дома",
    date: new Date(2025, 6, 24),
    amount: -450,
  },
  {
    id: uuidv4(),
    category: "house",
    name: "Оплата ЖКХ",
    date: new Date(2025, 6, 23),
    amount: -5400,
  },
  {
    id: uuidv4(),
    category: "medicine",
    name: "Аптека",
    date: new Date(2025, 6, 22),
    amount: -860,
  },
  {
    id: uuidv4(),
    category: "house",
    name: "Покупка посуды в Икеа",
    date: new Date(2025, 6, 21),
    amount: -1800,
  },
  {
    id: uuidv4(),
    category: "person",
    name: "Моргунец Михаил",
    date: new Date(2025, 6, 20),
    amount: 300,
  },
  {
    id: uuidv4(),
    category: "connection",
    name: "Мобильная связь",
    date: new Date(2025, 6, 20),
    amount: -300,
  },

  // Новые записи (20 шт)
  {
    id: uuidv4(),
    category: "meal",
    name: "Пицца на вечер",
    date: new Date(2025, 6, 19),
    amount: -1100,
  },
  {
    id: uuidv4(),
    category: "products",
    name: "Фрукты на рынке",
    date: new Date(2025, 6, 18),
    amount: -670,
  },
  {
    id: uuidv4(),
    category: "transport",
    name: "Пополнение транспортной карты",
    date: new Date(2025, 6, 17),
    amount: -1000,
  },
  {
    id: uuidv4(),
    category: "games",
    name: "Steam — игра",
    date: new Date(2025, 6, 17),
    amount: -1200,
  },
  {
    id: uuidv4(),
    category: "clothes",
    name: "Кроссовки",
    date: new Date(2025, 6, 16),
    amount: -4500,
  },
  {
    id: uuidv4(),
    category: "meal",
    name: "Обед в столовой",
    date: new Date(2025, 6, 15),
    amount: -300,
  },
  {
    id: uuidv4(),
    category: "products",
    name: "Закупка на выходные",
    date: new Date(2025, 6, 14),
    amount: -1800,
  },
  {
    id: uuidv4(),
    category: "transport",
    name: "Такси на вокзал",
    date: new Date(2025, 6, 13),
    amount: -700,
  },
  {
    id: uuidv4(),
    category: "house",
    name: "Моющее средство и тряпки",
    date: new Date(2025, 6, 13),
    amount: -450,
  },
  {
    id: uuidv4(),
    category: "medicine",
    name: "Витамины",
    date: new Date(2025, 6, 12),
    amount: -950,
  },
  {
    id: uuidv4(),
    category: "connection",
    name: "Интернет",
    date: new Date(2025, 6, 11),
    amount: -650,
  },
  {
    id: uuidv4(),
    category: "person",
    name: "Подарок другу",
    date: new Date(2025, 6, 11),
    amount: -1500,
  },
  {
    id: uuidv4(),
    category: "games",
    name: "Кинотеатр IMAX",
    date: new Date(2025, 6, 10),
    amount: -1000,
  },
  {
    id: uuidv4(),
    category: "clothes",
    name: "Штаны в Заре",
    date: new Date(2025, 6, 9),
    amount: -2300,
  },
  {
    id: uuidv4(),
    category: "meal",
    name: "Шаурма",
    date: new Date(2025, 6, 8),
    amount: -250,
  },
  {
    id: uuidv4(),
    category: "transport",
    name: "Автобус до дачи",
    date: new Date(2025, 6, 7),
    amount: -200,
  },
  {
    id: uuidv4(),
    category: "house",
    name: "Оплата интернета",
    date: new Date(2025, 6, 6),
    amount: -900,
  },
  {
    id: uuidv4(),
    category: "medicine",
    name: "Капли для носа",
    date: new Date(2025, 6, 5),
    amount: -300,
  },
  {
    id: uuidv4(),
    category: "connection",
    name: "Дополнительный пакет интернета",
    date: new Date(2025, 6, 4),
    amount: -100,
  },
  {
    id: uuidv4(),
    category: "person",
    name: "Перевод родителям",
    date: new Date(2025, 6, 3),
    amount: -5000,
  },
];

export const CATEGORIES: Categories = {
  meal: { name: "Кафе", iconSrc: MealIcon, color: "#277C77" },
  products: { name: "Продукты", iconSrc: ProductsIcon, color: "#916751" },
  person: { name: "Перевод", iconSrc: PersonIcon, color: "#82C8D7" },
  connection: { name: "Связь", iconSrc: СonnectionIcon, color: "#CCB267" },
  house: { name: "Дом", iconSrc: HouseIcon, color: "#8289D7" },
  medicine: { name: "Медицина", iconSrc: MedicineIcon, color: "#F0ABAB" },
  transport: { name: "Транспорт", iconSrc: TransportIcon, color: "#313867" },
  clothes: { name: "Одежда", iconSrc: ClothesIcon, color: "#6ED571" },
  games: { name: "Развлечения", iconSrc: GamesIcon, color: "#625F70" },
};
