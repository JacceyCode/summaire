import { LucideIcon } from "lucide-react";

declare global {
  interface Steps {
    icon: LucideIcon;
    label: string;
    description: string;
  }

  interface Plans {
    id: string;
    name: string;
    price: number;
    items: string[];
    description: string;
    paymentLink: string;
    priceId: string;
  }
}
