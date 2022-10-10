import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home";
import Root from "../components/Root";
import About from "../components/About";
import ErrorPage from "../components/ErrorPage";
import Shop from "../components/Shop";
import Cart from "../components/Cart";
import { productsAndCartData } from "../Loaders/getCart&ProductsData.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,

    errorElement: <ErrorPage />,
    loader: productsAndCartData,

    children: [
      { path: "/", element: <Home /> },
      { path: "/home", element: <Home /> },
      { path: "/shop", element: <Shop /> },
      { path: "/about", element: <About /> },
      { path: "/cart", element: <Cart /> },
    ],
  },
]);
export default router;
