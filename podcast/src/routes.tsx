import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import PreviewList from "./components/PreviewList";
import GenreList from "./components/GenreList";
import ShowDetails from "./components/ShowDetails";
import { previewsLoader, genreLoader, showLoader } from "./loaders";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "previews",
        element: <PreviewList />,
        loader: previewsLoader,
      },
      {
        path: "genre/:genreId",
        element: <GenreList />,
        loader: genreLoader,
      },
      {
        path: "show/:showId",
        element: <ShowDetails />,
        loader: showLoader,
      },
    ],
  },
]);

const Routes: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default Routes;
