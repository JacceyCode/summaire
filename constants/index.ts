import { BrainCircuit, FileOutput, FileText } from "lucide-react";

export const steps: Steps[] = [
  {
    icon: FileText,
    label: "Upload your PDF",
    description: "Simply drag and drop your PDF document or click to upload",
  },
  {
    icon: BrainCircuit,
    label: "AI Analysis",
    description:
      "Our advanced AI processes and analyzes your document instantly",
  },
  {
    icon: FileOutput,
    label: "Get Summary",
    description: "Receive a clear, concise summary of your document",
  },
];

export const plans: Plans[] = [
  {
    id: "basic",
    name: "basic",
    price: 9,
    items: [
      "5 PDF summaries per month",
      "Standard processing speed",
      "Email support",
    ],
    description: "Perfect for occasional use",
    paymentLink: "",
    priceId: "",
  },
  {
    id: "pro",
    name: "Pro",
    price: 19,
    items: [
      "Unlimited PDF summaries",
      "Priority processing",
      "24/7 priority support",
      "Markdown Export",
    ],
    description: "For professionals and teams",
    paymentLink: "",
    priceId: "",
  },
];
