import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { SidebarTrigger } from "@/components/sidebar-trigger";
import { AppSidebar } from "@/components/app-sidebar.tsx";
import { ModeToggle } from "@/components/mode-toggle.tsx";
import { LanguageToggle } from "@/components/languagebutton.tsx";
import { useTranslation } from "@/hooks/use-translation";

const Profile = () => {
  const { t } = useTranslation();

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

        <div className="mt-8 flex flex-col items-center">
          <Avatar className="h-24 w-24">
            <AvatarImage src="" alt="N/A" />
            <AvatarFallback>NG</AvatarFallback>
          </Avatar>
          <h2 className="mt-4 text-xl font-semibold">{t("userProfile")}</h2>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Profile;
