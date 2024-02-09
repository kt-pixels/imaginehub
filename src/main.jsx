import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
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
} from "./components/index.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FavoritesProvider>
      <OpenedImageProvider>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:id" element={<ClickImage />} />
            <Route path="/animals" element={<AllCtg />} />
            <Route path="/boys" element={<Boys />} />
            <Route path="/girls" element={<Girls />} />
            <Route path="/flowers" element={<Flowers />} />
            <Route path="/birds" element={<Birds />} />
            <Route path="/insects" element={<Insects />} />
            <Route path="/cars" element={<Cars />} />
            <Route path="/food" element={<Food />} />
            <Route path="/favourite" element={<ImageSaver />} />
            {/* Catch-all route for handling undefined routes */}
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
          <Footer />
        </Router>
      </OpenedImageProvider>
    </FavoritesProvider>
  </React.StrictMode>
);

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Main />);
