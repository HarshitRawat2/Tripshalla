import React from "react";
import { Phone, MessageCircle } from "lucide-react";

export default function StickyContactButtons() {
  const phoneNumber = "+91XXXXXXXXXX";
  const whatsappNumber = "91XXXXXXXXXX";
  const whatsappMessage = "Hi, I want details about Uttarakhand adventures.";

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 flex md:hidden">
      {/* Call */}
      <a
        href={`tel:${phoneNumber}`}
        className="flex-1 flex items-center justify-center gap-2 py-4 bg-emerald-700 text-white font-bold"
      >
        <Phone size={20} />
        Call
      </a>

      {/* WhatsApp */}
      <a
        href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
          whatsappMessage,
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex items-center justify-center gap-2 py-4 bg-lime-400 text-emerald-900 font-bold"
      >
        <MessageCircle size={20} />
        WhatsApp
      </a>
    </div>
  );
}
