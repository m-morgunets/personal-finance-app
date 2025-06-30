import React from "react";
import { Routes } from "react-router-dom";

import * as App from "app";

import { AppRoutePage, RouteConfig } from "./types";

import { generateRoutes } from "./utils";

const routesConfig: RouteConfig[] = [
  {
    id: AppRoutePage.HomePage,
    element: <App.HomePage />,
  },
  {
    id: AppRoutePage.Operations,
    element: <App.Operations />,
  },
  {
    id: AppRoutePage.Budgets,
    element: <App.Budgets />,
  },
  {
    id: AppRoutePage.Savings,
    element: <App.Savings />,
  },
];

export const AppRouter = () => {
  return <Routes>{generateRoutes(routesConfig)}</Routes>;
};
