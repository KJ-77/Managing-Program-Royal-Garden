import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Home from "./Pages/Home.tsx";
import Documents from "./Pages/Documents.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Bills from "./Pages/Bills.tsx";
import LoginPage from "./Pages/LoginPage.tsx";
import Profile from "./Pages/Profile.tsx";
import { ThemeProvider } from "./components/theme-provider.tsx";
import { LanguageProvider } from "./components/language-provider.tsx";
import CompanyNotes from "./Pages/CompanyNotes";
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
    element: <Documents />,
  },
  {
    path: "/bills",
    element: <Bills />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/company/:companyId/notes", // Dynamic route with parameter
    element: <CompanyNotes />
  }
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
