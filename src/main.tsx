import { ThemeProvider } from "@contexts/themeContext";
import { customerDetailLoader } from "@pages/customer-detail/compose.tsx";
import { Customers } from "@pages/customers/customers.tsx";
import ErrorPage from "@pages/error-page/error-page.tsx";
import { CustomerDetail, Dashboard } from "@pages/composePages.tsx";
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <Dashboard />,
      },
      {
        path: "/customers",
        element: <Customers />,
      },
      {
        path: "/customers/:id",
        element: <CustomerDetail />,
        loader: customerDetailLoader,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider>
      <div className="pageWrapper">
        <RouterProvider router={router} />
      </div>
    </ThemeProvider>
  </React.StrictMode>
);
