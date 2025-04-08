import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar.tsx";
import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "@/components/mode-toggle.tsx";
import { ButtonDemo } from "@/components/languagebutton";

const Profile = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <SidebarProvider>
        <AppSidebar />
        <div className="w-full mx-auto p-5">
          <div className="flex justify-between w-full mb-4">
            <div>
              <SidebarTrigger />
            </div>
            <div>
              <ModeToggle />
            </div>
          </div>

          <div className="mt-8 flex flex-col items-center">
            <Avatar className="h-24 w-24">
              <AvatarImage src="" alt="N/A" />
              <AvatarFallback>NG</AvatarFallback>
            </Avatar>
            <h2 className="mt-4 text-xl font-semibold">User Profile</h2>
          </div>
          <ButtonDemo />
        </div>
      </SidebarProvider>
    </ThemeProvider>
  );
};

export default Profile;
