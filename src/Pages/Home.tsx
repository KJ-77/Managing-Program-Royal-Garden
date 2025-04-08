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
        <SidebarTrigger className= "p-8"/>
        <div className="w-full mx-auto p-5 text-center">
        <ModeToggle />
          <div className="max-w-7xl mx-auto">
            <header className="mb-8">
              <h1>Royal Garden Management</h1>
            </header>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

                <Card>
                <div className="flex justify-center mb-4">
                  <div className="w-[150px] h-[150px] rounded-full overflow-hidden">
                  <img
                    src="public/unnamed (1).jpg"
                    alt="RG Icon"
                    className="w-full h-full object-cover"
                  />
                  </div>
                </div>
                <h2 className="text-lg font-bold mb-4">Royal Garden</h2>
                <p className="mb-4">
                  Manage and track all plants in the royal garden inventory.
                </p>
                <div className="flex justify-center">
                  <Button className="w-30">View Plants</Button>
                </div>
                </Card>

              <Card>
                <h2 className="text-lg font-bold mb-4">Royal Garden</h2>
                <p className="mb-4">
                  Manage and track all plants in the royal garden inventory.
                </p>
                <div className="flex justify-center">
                  <Button className="w-30">View Plants</Button>
                </div>
              </Card>

              <Card>
                <h2 className="text-lg font-bold mb-4">Royal Garden</h2>
                <p className="mb-4">
                  Manage and track all plants in the royal garden inventory.
                </p>
                <div className="flex justify-center">
                  <Button className="w-30">View Plants</Button>
                </div>
              </Card>

              <Card>
                <h2 className="text-lg font-bold mb-4">Royal Garden</h2>
                <p className="mb-4">
                  Manage and track all plants in the royal garden inventory.
                </p>
                <div className="flex justify-center">
                  <Button className="w-30">View Plants</Button>
                </div>
              </Card>

              <Card>
                <h2 className="text-lg font-bold mb-4">Royal Garden</h2>
                <p className="mb-4">
                  Manage and track all plants in the royal garden inventory.
                </p>
                <div className="flex justify-center">
                  <Button className="w-30">View Plants</Button>
                </div>
              </Card>

              <Card>
                <h2 className="text-lg font-bold mb-4">Royal Garden</h2>
                <p className="mb-4">
                  Manage and track all plants in the royal garden inventory.
                </p>
                <div className="flex justify-center">
                  <Button className="w-30">View Plants</Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </SidebarProvider>
    </ThemeProvider>
  );
}

export default Home;
