import { LucideIcon } from "lucide-react";

declare global {
  interface Steps {
    icon: LucideIcon;
    label: string;
    description: string;
  }
}
