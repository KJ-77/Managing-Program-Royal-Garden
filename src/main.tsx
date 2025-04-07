import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Home from "./Pages/Home.tsx";
import Documents from "./Pages/Documents.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Bills from "./Pages/Bills.tsx";
import LoginPage from "./Pages/LoginPage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <StrictMode>
        <Home />
      </StrictMode>
    ),
  },
  {
    path: "/documents",
    element: (
      <Documents />
    ),
  },
    {
      path: "/bills",
      element: (
        <Bills />
      ),
    },
    {
      path: "/login",
      element: (
        <LoginPage />
      ),
    },
]);

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');
createRoot(rootElement).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
