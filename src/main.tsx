import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider } from "@contexts/themeContext";
import { Customers } from "@pages/customers/customers.tsx";
// import { Dashboard } from "@pages/dashboard/dashboard.tsx";
import ErrorPage from "@pages/error-page/error-page.tsx";
import {
  customerDetailLoader,
  CustomerDetail,
} from "@pages/customer-detail/customer-detail.tsx";
import { composeDashboard } from "@pages/dashboard/compose.tsx";
const Dashboard = composeDashboard();

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
  // <React.StrictMode>
  <ThemeProvider>
    <div className="pageWrapper">
      <RouterProvider router={router} />
    </div>
  </ThemeProvider>
  // </React.StrictMode>
);
