import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Home from "./Pages/Home.tsx";
import Documents from "./Pages/Documents.tsx";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import Bills from "./Pages/Bills.tsx";
import LoginPage from "./Pages/LoginPage.tsx";
import Profile from "./Pages/Profile.tsx";
import CompanyNotes from "./Pages/CompanyNotes.tsx";
import { ThemeProvider } from "./components/theme-provider.tsx";
import { LanguageProvider } from "./components/language-provider.tsx";
import SidebarLayout from "./Layouts/SidebarLayout.tsx";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    // SidebarLayout will be applied to all routes within this path
    path: "/",
    element: <SidebarLayout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "documents",
        element: <Documents />,
      },
      {
        path: "bills",
        element: <Bills />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "company/:companyId/notes",
        element: <CompanyNotes />,
      },
    ],
  },
  {
    path: "*",
    element: <Navigate to="/" replace />,
  },
]);

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Failed to find the root element");
createRoot(rootElement).render(
  <StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <LanguageProvider defaultLanguage="english" storageKey="vite-ui-language">
        <RouterProvider router={router} />
      </LanguageProvider>
    </ThemeProvider>
  </StrictMode>
);
