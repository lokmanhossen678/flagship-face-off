import React from "react";
import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import MainLayout from "../layout/MainLayout";
import About from "../Pages/About";
import PhonDetailes from "../Pages/PhonDetailes";
import ErrorPages from "../Pages/ErrorPages";
import Favorites from "../Pages/Favorites";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    errorElement: <ErrorPages />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader:()=>fetch('phones.json'),
      },
      {
        path: "/Favorites",
        Component: Favorites,
      },
      {
        path: "/about",
        Component: About,
      },
      {
        path: "/phonDeitailes",
        Component: PhonDetailes,
      },
    ],
  },
]);

export default router;
