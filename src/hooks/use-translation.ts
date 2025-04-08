import { useLanguage } from "@/components/language-provider";
import { translations } from "@/lib/translations";

export function useTranslation() {
  const { language } = useLanguage();

  const t = (key: string): string => {
    if (translations[key]) {
      return translations[key][language];
    }

    // Return the key if translation is missing
    console.warn(`Translation missing for key: ${key}`);
    return key;
  };

  return { t };
}
