import { useCallback } from "react";
import "./App.css";
import { Footer, Header, ScrollBtn } from "./components";
import { Outlet, useNavigate } from "react-router-dom";

function App() {
  return (
    <>
      <main>
        <Header />
        <Outlet />
        <ScrollBtn/>
        <Footer />
      </main>
    </>
  );
}

export default App;
