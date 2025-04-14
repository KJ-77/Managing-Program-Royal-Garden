import { Outlet } from "react-router-dom";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { SidebarTrigger } from "@/components/sidebar-trigger";
import { LanguageToggle } from "@/components/languagebutton";
import { ModeToggle } from "@/components/mode-toggle";

const SidebarLayout = () => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <div className="w-full mx-auto">
        {/* Header with sidebar trigger and toggles */}
        <div className="flex justify-between w-full p-5 mb-4">
          <div>
            <SidebarTrigger />
          </div>
          <div className="flex items-center">
            <LanguageToggle />
            <ModeToggle />
          </div>
        </div>

        {/* Main content area - will render the current page */}
        <div className="p-5 pt-0">
          <Outlet />
        </div>
      </div>
    </SidebarProvider>
  );
};

export default SidebarLayout;
