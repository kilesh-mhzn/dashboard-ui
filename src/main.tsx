import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider } from "@contexts/themeContext";
import { Customers } from "@pages/customers/customers.tsx";
import ErrorPage from "@pages/error-page/error-page.tsx";
import { composeDashboard } from "@pages/dashboard/compose.tsx";
import {
  composeCustomerDetail,
  customerDetailLoader,
} from "@pages/customer-detail/compose.tsx";

// eslint-disable-next-line react-refresh/only-export-components
const Dashboard = composeDashboard();

// eslint-disable-next-line react-refresh/only-export-components
const CustomerDetail = composeCustomerDetail();

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
