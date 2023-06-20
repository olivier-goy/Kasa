import { createBrowserRouter } from "react-router-dom";
import Housing from "./Pages/Housing/Housing";
import About from "./Pages/About/About";
import Error from "./Pages/404/404";
import App from "./Pages/App/App";

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


export default routes;

