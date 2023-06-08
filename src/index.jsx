import React from "react";
import ReactDOM from "react-dom/client";
import "../src/Styles/index.css";
import App from "./Pages/App/App";
import { createBrowserRouter, RouterProvider, BrowserRouter } from "react-router-dom";
import Housing from "./Pages/Housing/Housing";
import About from "./Pages/About/About";
import Error from "./Pages/404/404";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/logements/:id",
    element: <Housing />,
  },
  {
    path: "/a-propos",
    element: <About />,
  },
  {
    path: "/*",
    element: <Error />,
  },
]);

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
