import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import Login from "./pages/login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home";
import SingleProduct from "./pages/single-product";
import About from "./pages/about";
import Products from "./pages/product";
import ProductList from "./pages/products-list";
import Layout from "./components/layout/layout";
import AllProducts from "./pages/pages-dashboard/all-products";
import CreateProduct from "./pages/pages-dashboard/create-product";
import UpdateProduct from "./pages/pages-dashboard/update-product";
import DeleteProduct from "./pages/pages-dashboard/delete-product";
import LayoutDashboard from "./components/layout/layout-dashboard";
import App from "./App";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Login />,
//   },
//   {
//     path: "/",
//     element: <LayoutDashboard />,
//     children: [
//       {
//         path: "/allproduct",
//         element: <AllProducts />,
//       },
//       {
//         path: "/createproduct",
//         element: <CreateProduct />,
//       },
//       {
//         path: "/updateproduct",
//         element: <UpdateProduct />,
//       },
//       {
//         path: "/deleteproduct",
//         element: <DeleteProduct />,
//       },
//     ],
//   },
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       {
//         path: "/home",
//         element: <Home />,
//       },
//       {
//         path: "/about",
//         element: <About />,
//       },
//       {
//         path: "/products",
//         element: <Products />,
//         children: [
//           {
//             path: "",
//             element: <ProductList />,
//           },
//           {
//             path: ":id",
//             element: <SingleProduct />,
//           },
//         ],
//       },
//     ],
//   },
// ]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
