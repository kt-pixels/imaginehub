import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  Home,
  ImageSaver,
  AllCtg,
  Boys,
  Girls,
  Flowers,
  Birds,
  Insects,
  Cars,
  Food,
  Signup,
  Private,
  Login,
} from "./components/index.js";
import { FavoritesProvider } from "./components/Context/ImageSaveContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FavoritesProvider>
      <Router>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            <Route path="animals" element={<AllCtg />} />
            <Route path="boys" element={<Boys />} />
            <Route path="girls" element={<Girls />} />
            <Route path="flowers" element={<Flowers />} />
            <Route path="birds" element={<Birds />} />
            <Route path="insects" element={<Insects />} />
            <Route path="cars" element={<Cars />} />
            <Route path="food" element={<Food />} />
            <Route path="favourite" element={<ImageSaver />} />
            <Route path="sign-up" element={<Signup />} />
            <Route path="login" element={<Login />} />
            <Route path="private" element={<Private />} />
            {/* Add more routes as needed */}
          </Route>
        </Routes>
      </Router>
    </FavoritesProvider>
  </React.StrictMode>
);
