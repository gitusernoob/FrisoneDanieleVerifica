import { createBrowserRouter } from "react-router-dom";

import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />
  },
  {
    path: "/dashboard",
    element: <Dashboard />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/signup",
    element: <div>sign up</div>
  }
]);
