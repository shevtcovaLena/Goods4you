import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./styles/index.css";
import Root from "./routes/root.tsx";
import { ErrorPage, Catalog, ProductPage, Cart, Auth } from "./routes/";
import { Provider } from "react-redux";
import { store } from "./redux/store.ts";
import { ProtectedRouteAuth } from "./routes/ProtectedRoute/ProtectedRouteAuth.tsx";
import { ProtectedRouteUnauth } from "./routes/ProtectedRoute/ProtectedRouteUnauth.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <ProtectedRouteAuth element={<Catalog />} /> },
      {
        path: "product/:productId",
        element: <ProtectedRouteAuth element={<ProductPage />} />,
      },
      {
        path: "cart",
        element: <ProtectedRouteAuth element={<Cart />} />,
      },
      {
        path: "login",
        element: <ProtectedRouteUnauth element={<Auth />} />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
