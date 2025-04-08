import { PanelLeftIcon, PanelRightIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useSidebar } from "@/components/ui/sidebar";
import { useLanguage } from "@/components/language-provider";
import { cn } from "@/lib/utils";

export function SidebarTrigger({
  className,
  onClick,
  ...props
}: React.ComponentProps<typeof Button>) {
  const { toggleSidebar } = useSidebar();
  const { language } = useLanguage();

  // Use PanelRightIcon for Arabic, PanelLeftIcon for English
  const Icon = language === "arabic" ? PanelRightIcon : PanelLeftIcon;

  return (
    <Button
      data-sidebar="trigger"
      data-slot="sidebar-trigger"
      variant="ghost"
      size="icon"
      className={cn("size-7", className)}
      onClick={(event) => {
        onClick?.(event);
        toggleSidebar();
      }}
      {...props}
    >
      <Icon />
      <span className="sr-only">Toggle Sidebar</span>
    </Button>
  );
}
