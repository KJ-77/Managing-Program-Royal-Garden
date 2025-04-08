import { SidebarProvider } from "@/components/ui/sidebar";
import { SidebarTrigger } from "@/components/sidebar-trigger";
import { AppSidebar } from "@/components/app-sidebar.tsx";
import { ModeToggle } from "@/components/mode-toggle.tsx";
import { LanguageToggle } from "@/components/languagebutton.tsx";
import { useTranslation } from "@/hooks/use-translation";

const Documents = () => {
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
        <div>
          <h1 className="text-2xl font-bold mb-4">{t("documents")}</h1>
          {/* Documents content */}
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Documents;
