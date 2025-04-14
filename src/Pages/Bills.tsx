import { useTranslation } from "@/hooks/use-translation";

const Bills = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">{t("bills")}</h1>
      {/* Bills content */}
    </div>
  );
};

export default Bills;
