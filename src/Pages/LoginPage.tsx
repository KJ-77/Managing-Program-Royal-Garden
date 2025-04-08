import { LoginForm } from "@/components/login-form";
import { ModeToggle } from "@/components/mode-toggle";
import { LanguageToggle } from "@/components/languagebutton";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar.tsx";
import { SidebarTrigger } from "@/components/sidebar-trigger";

export default function LoginPage() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <div className="w-full mx-auto p-5">
        <div className="flex justify-between w-full mb-4">
          <div>
            <SidebarTrigger />
          </div>
          <div className="flex items-center">
            <LanguageToggle />
            <ModeToggle />
          </div>
        </div>

        <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
          <div className="w-full max-w-sm">
            <LoginForm />
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
}
