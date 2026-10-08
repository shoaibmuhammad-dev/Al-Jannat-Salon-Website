import { whatsappLink } from "@/lib/whatsapp";
import { WhatsAppIcon } from "./icons";

export default function FloatingWhatsApp() {
  return (
    <div
      className="fixed bottom-5 right-5 z-50 sm:bottom-6 sm:right-6"
      style={{ marginBottom: "env(safe-area-inset-bottom)" }}
    >
      <a
        href={whatsappLink()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-white shadow-lift transition-transform duration-200 hover:scale-105 hover:bg-whatsapp-dark motion-reduce:transition-none"
      >
        <span
          aria-hidden="true"
          className="absolute inset-0 -z-10 rounded-full bg-whatsapp animate-pulse-ring motion-reduce:animate-none"
        />
        <WhatsAppIcon className="h-7 w-7" />
        <span
          aria-hidden="true"
          className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-full bg-plum-900 px-3.5 py-2 text-sm text-cream opacity-0 shadow-soft transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100"
        >
          Chat with us
        </span>
      </a>
    </div>
  );
}
