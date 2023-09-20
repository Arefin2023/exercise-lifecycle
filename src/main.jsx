import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RootLayout } from "../pages/RootLayout";
import { HomePage } from "../pages/HomePage";
import { MoviesPage } from "../pages/MoviesPage";
import { MoviesDetailPage } from "../pages/MoviesDetailPage";

import { ActorsDetailPage } from "../pages/ActorsDetailPage";
import "./index.css";
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "movies",
        children: [
          {
            index: true,
            element: <MoviesPage />,
          },
          {
            path: ":movieId",
            element: <MoviesDetailPage />,
          },
        ],
      },
      {
        path: "actors/:actorId",
        element: <ActorsDetailPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
