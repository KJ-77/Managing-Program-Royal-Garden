import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Profile = () => {
  return (
    <div>
      <Avatar>
        <AvatarImage src="" alt="N/A" />
        <AvatarFallback>NG</AvatarFallback>
      </Avatar>
    </div>
  );
};

export default Profile;
