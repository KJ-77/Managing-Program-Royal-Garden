import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useTranslation } from "@/hooks/use-translation";

const Profile = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-center">
      <Avatar className="h-24 w-24">
        <AvatarImage src="" alt="N/A" />
        <AvatarFallback>NG</AvatarFallback>
      </Avatar>
      <h2 className="mt-4 text-xl font-semibold">{t("userProfile")}</h2>
    </div>
  );
};

export default Profile;
