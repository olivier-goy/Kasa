import React from "react";
import ReactDOM from "react-dom/client";
import "../src/Styles/index.css";
import { RouterProvider, BrowserRouter } from "react-router-dom";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import routes from "./routes";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <header>
        <Header />
      </header>
    </BrowserRouter>
    <main>
      <RouterProvider router={routes} />
    </main>
    <footer>
      <Footer />
    </footer>
  </React.StrictMode>
);
