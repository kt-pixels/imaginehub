import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import {
  Home,
  ImageSaver,
  AllCtg,
  Boys,
  Girls,
  ClickImage,
  Flowers,
  Birds,
  Insects,
  Cars,
  Food,
} from "./components/index.js";
import { FavoritesProvider } from "./components/Context/ImageSaveContext.jsx";
import { ClickOnImageProvider } from "./components/Context/ClickImageContext.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="" element={<App />}>
      <Route path="/" element={<Home />} />
      <Route path="/singleImage" element={<ClickImage />} />
      <Route path="/animals" element={<AllCtg />} />
      <Route path="/boys" element={<Boys />} />
      <Route path="/girls" element={<Girls />} />
      <Route path="/flowers" element={<Flowers />} />
      <Route path="/birds" element={<Birds />} />
      <Route path="/insects" element={<Insects />} />
      <Route path="/cars" element={<Cars />} />
      <Route path="/food" element={<Food />} />
      <Route path="/favourite" element={<ImageSaver />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FavoritesProvider>
      <ClickOnImageProvider>
        <RouterProvider router={router} />
      </ClickOnImageProvider>
    </FavoritesProvider>
  </React.StrictMode>
);
