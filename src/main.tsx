import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./styles/index.css";
import Root from "./routes/root.tsx";
import { ErrorPage, Catalog, ProductPage } from "./routes/";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Catalog /> },
      {
        path: "product/:productId",
        element: <ProductPage />,
        // loader: contactLoader,
        // action: contactAction,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
