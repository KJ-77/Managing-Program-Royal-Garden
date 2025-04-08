import CompanyCard from "../components/ui/CompanyCard";
import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "@/components/mode-toggle.tsx";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar.tsx";

function Home() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <SidebarProvider>
        <AppSidebar />
        <div className="min-h-screen text-white">
          <SidebarTrigger />
          <ModeToggle />
          {/* Root styling */}
          <div className="w-full mx-auto p-8 text-center">
            {/* App container */}
            <div className="max-w-7xl mx-auto">
              {/* Header */}
              <header className="mb-8">
                <h1>Royal Garden Management</h1>
              </header>

              {/* Cards container */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                <Card>
                  <h2 className="text-lg font-bold mb-4">Royal Garden</h2>
                  <p className="mb-4">
                    Manage and track all plants in the royal garden inventory.
                  </p>
                  <div className="flex justify-center">
                    <Button className="w-30">View Plants</Button>
                  </div>
                </Card>

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
      </SidebarProvider>
    </ThemeProvider>
  );
}

export default Home;
