import { useTranslation } from "@/hooks/use-translation";

const Documents = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">{t("documents")}</h1>
      {/* Documents content */}
    </div>
  );
};

export default Documents;
