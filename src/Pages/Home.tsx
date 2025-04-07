import CompanyCard from "../components/ui/CompanyCard";
import HamburgerMenu from "../components/ui/HamburgerMenu";
import COLORS from "../styles/colorPalette.ts";
import React from "react";
import { ThemeProvider } from "@/components/theme-provider"
import { ModeToggle } from "@/components/mode-toggle.tsx";

function Home() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <ModeToggle />
    <div
      style={{ backgroundColor: COLORS.first }}
      className="min-h-screen text-white"
    >
      {/* Root styling */}
      <div className="w-full mx-auto p-8 text-center">
        {/* App container */}
        <div className="max-w-7xl mx-auto">
          <HamburgerMenu />

          {/* Header */}
          <header className="mb-8">
            <h1>Royal Garden Management</h1>
          </header>

          {/* Cards container */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <CompanyCard
              name="Plants"
              desc="Manage and track all plants in the royal garden inventory."
            />

            <CompanyCard
              name="Staff"
              desc="Manage garden staff, schedules, and assignments."
            />

            <CompanyCard
              name="Events"
              desc="Schedule and manage garden events and tours."
            />

            <CompanyCard
              name="Inventory"
              desc="Track garden supplies, tools, and equipment."
            />

            <CompanyCard
              name="Reports"
              desc="Generate reports on garden activities and status."
            />

            <CompanyCard
              name="Reports"
              desc="Generate reports on garden activities and status."
            />
          </div>
        </div>
      </div>
    </div>
    </ThemeProvider>
  );
}

export default Home;
