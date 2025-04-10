import {
  Home,
  FileText,
  ReceiptText,
  User,
  KeyRound,
} from "lucide-react";
import { useTranslation } from "@/hooks/use-translation";
import { useLanguage } from "@/components/language-provider";
import { Link } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

export function AppSidebar() {
  const { t } = useTranslation();
  const { language } = useLanguage();

  // Set the sidebar side based on the current language
  const sidebarSide = language === "arabic" ? "right" : "left";

  // Menu items with translation keys
  const items = [
    {
      key: "home",
      url: "/",
      icon: Home,
    },
    {
      key: "bills",
      url: "/bills",
      icon: ReceiptText,
    },
    {
      key: "documents",
      url: "/documents",
      icon: FileText,
    },
    {
      key: "profile",
      url: "/profile",
      icon: User,
    },
    {
      key: "login",
      url: "/login",
      icon: KeyRound,
    },
  ];

  return (
    <Sidebar side={sidebarSide}>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>{t("royalGarden")}</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.key}>
                  <SidebarMenuButton asChild>
                    <Link to={item.url}>
                      <item.icon />
                      <span>{t(item.key)}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
