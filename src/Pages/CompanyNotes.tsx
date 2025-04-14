import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "@/hooks/use-translation";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

// Mock data for companies - in a real app, this would come from your API/database
const companyData = {
  "1": { name: "Royal Garden", notes: "" },
  "2": { name: "AD Tourism", notes: "" },
  "3": { name: "Company Three", notes: "" },
  "4": { name: "Company Four", notes: "" },
  "5": { name: "Company Five", notes: "" },
  "6": { name: "Company Six", notes: "" },
};

export default function CompanyNotes() {
  const { companyId } = useParams();
  const { t } = useTranslation();
  const [notes, setNotes] = useState("");
  const [company, setCompany] = useState<{
    name: string;
    notes: string;
  } | null>(null);

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
  );
}
