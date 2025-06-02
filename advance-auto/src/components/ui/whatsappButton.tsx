import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

interface WhatsAppButtonProps {
  message?: string;
  className?: string;
  variant?: "default" | "outline" | "ghost";
  size?: "sm" | "default" | "lg";
  showIcon?: boolean;
  children?: React.ReactNode;
}

export default function WhatsAppButton({
  message = "Hi, I'd like to book a service appointment",
  className = "",
  variant = "default",
  size = "default",
  showIcon = true,
  children,
}: WhatsAppButtonProps) {
  // const phoneNumber = import.meta.env.VITE_WHATSAPP_NUMBER || "1234567890";
  const phoneNumber = "1234567890";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  const handleClick = () => {
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <Button
      onClick={handleClick}
      className={`success hover:success/90 ${className} bg-[#005f70]`}
      variant={variant}
      size={size}
    >
      {showIcon && <MessageCircle className="w-4 h-4 mr-2" />}
      {children || "Book on WhatsApp"}
    </Button>
  );
}
