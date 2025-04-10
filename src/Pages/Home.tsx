import { ModeToggle } from "@/components/mode-toggle.tsx";
import { LanguageToggle } from "@/components/languagebutton.tsx";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SidebarProvider } from "@/components/ui/sidebar";
import { SidebarTrigger } from "@/components/sidebar-trigger";
import { AppSidebar } from "@/components/app-sidebar.tsx";
import { useTranslation } from "@/hooks/use-translation";
import { Link } from "react-router-dom";

// Company data for the cards
const companies = [
  { id: "1", name: "Company One" },
  { id: "2", name: "Company Two" },
  { id: "3", name: "Company Three" },
  { id: "4", name: "Company Four" },
  { id: "5", name: "Company Five" },
  { id: "6", name: "Company Six" }
];

function Home() {
  const { t } = useTranslation();

  return (
    <SidebarProvider defaultOpen={false}>
      <AppSidebar />
      <div className="w-full mx-auto p-5 text-center">
        <div className="flex justify-between w-full mb-4">
          <div>
            <SidebarTrigger />
          </div>
          <div className="flex items-center">
            <LanguageToggle />
            <ModeToggle />
          </div>
        </div>

        <div className="max-w-7xl mx-auto">
          <header className="mb-8">
            <h1>{t("royalGardenManagement")}</h1>
          </header>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {companies.map((company, index) => (
              <Card key={company.id}>
                {index === 0 && (
                  <div className="flex justify-center mb-4">
                    <div className="w-[150px] h-[150px] rounded-full overflow-hidden">
                      <img
                        src="unnamed (1).jpg"
                        alt="RG Icon"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                )}
                <h2 className="text-lg font-bold mb-4">{company.name}</h2>
                <p className="mb-4">{t("managePlants")}</p>
                <div className="flex justify-center">
                  <Button className="w-30" asChild>
                    <Link to={`/company/${company.id}/notes`}>{t("viewPlants")}</Link>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
}

export default Home;