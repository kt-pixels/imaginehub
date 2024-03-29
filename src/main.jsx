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

import { FavoritesProvider } from "./components/Context/ImageSaveContext.jsx";
import { OpenedImageProvider } from "./components/Context/ClickImageContext.jsx";
import {
  AllCtg,
  Birds,
  Boys,
  Cars,
  ClickImage,
  Flowers,
  Food,
  Footer,
  Girls,
  Header,
  Home,
  ImageSaver,
  Insects,
  // Signup,
  // Private,
  // Login,
} from "./components/index.js";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      {/* <Route element={<Private />}> */}
      <Route path="" element={<App />}>
        <Route path="/" element={<Home />} />
        <Route path=":id" element={<ClickImage />} />
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
      {/* </Route> */}
      {/* <Route path="/sign-up" element={<Signup />} /> */}
      {/* <Route path="/login" element={<Login />} /> */}
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FavoritesProvider>
      <OpenedImageProvider>
        <RouterProvider router={router} />
      </OpenedImageProvider>
    </FavoritesProvider>
  </React.StrictMode>
);

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Main />);
