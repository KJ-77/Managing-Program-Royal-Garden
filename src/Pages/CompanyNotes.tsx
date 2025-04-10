import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { SidebarProvider } from "@/components/ui/sidebar";
import { SidebarTrigger } from "@/components/sidebar-trigger";
import { AppSidebar } from "@/components/app-sidebar.tsx";
import { ModeToggle } from "@/components/mode-toggle.tsx";
import { LanguageToggle } from "@/components/languagebutton.tsx";
import { useTranslation } from "@/hooks/use-translation";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

// Mock data for companies - in a real app, this would come from your API/database
const companyData = {
  "1": { name: "Company One", notes: "" },
  "2": { name: "Company Two", notes: "" },
  "3": { name: "Company Three", notes: "" },
  "4": { name: "Company Four", notes: "" },
  "5": { name: "Company Five", notes: "" },
  "6": { name: "Company Six", notes: "" }
};

export default function CompanyNotes() {
  const { companyId } = useParams();
  const { t } = useTranslation();
  const [notes, setNotes] = useState("");
  const [company, setCompany] = useState<{ name: string; notes: string } | null>(null);

  // In a real app, you would fetch this from an API
  useEffect(() => {
    if (companyId && companyId in companyData) {
      setCompany(companyData[companyId as keyof typeof companyData]);
      setNotes(companyData[companyId as keyof typeof companyData].notes);
    }
  }, [companyId]);

  const handleSaveNotes = () => {
    // In a real app, you would send this to your API
    console.log(`Saving notes for company ${companyId}: ${notes}`);
    // Update local state for demo purposes
    if (companyId) {
      companyData[companyId as keyof typeof companyData].notes = notes;
    }
    alert(t("notesSavedSuccessfully"));
  };

  if (!company) {
    return <div>{t("companyNotFound")}</div>;
  }

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

        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl font-bold mb-6">{company.name}</h1>
          
          <div className="mb-4">
            <label htmlFor="notes" className="block mb-2 text-sm font-medium">
              {t("notes")}
            </label>
            <Textarea
              id="notes"
              placeholder={t("enterNotesAboutCompany")}
              className="min-h-[200px]"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
            />
          </div>
          
          <Button onClick={handleSaveNotes}>{t("saveNotes")}</Button>
        </div>
      </div>
    </SidebarProvider>
  );
}