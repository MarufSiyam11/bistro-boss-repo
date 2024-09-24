import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu";
import Order from "../Pages/Order/Order/Order";
import Secret from "../Pages/Shared/Secret/Secret";
import AddToCartSection from "../components/AddToCartSection/AddToCartSection";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "menu",
        element: <Menu></Menu>,
      },
      {
        path: "order/:category",
        element: <Order></Order>,
      },
      {
        path: "/AddToCartSection",
        element: <AddToCartSection></AddToCartSection>,
      },

      {
        path: "secret",
        element: <Secret></Secret>,
      },
    ],
  },
]);
