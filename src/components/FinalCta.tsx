import { siteConfig } from "@/config/site";
import { btnGold, container } from "@/lib/ui";
import { whatsappLink } from "@/lib/whatsapp";
import { WhatsAppIcon } from "./icons";
import Image from "next/image";

export default function FinalCta() {
  return (
    <section aria-labelledby="cta-title" className="py-20 sm:py-28">
      <div className={container}>
        <div className="dark-surface reveal relative overflow-hidden rounded-[2rem] bg-plum-900 px-7 py-14 sm:px-14 sm:py-20">
          {/* Decorative arches echo the hero */}
          {/* <div
            aria-hidden="true"
            className="absolute -right-10 top-1/2 hidden h-[130%] w-72 -translate-y-1/2 rounded-t-[999px] border border-gold-400/50 md:block"
          /> */}
          <Image
            src={"/Warm Balayage Salon Session.png"}
            alt="Warm Balayage Salon Session"
            width={300}
            height={250}
            className="absolute right-6 top-1/2 hidden h-[100%] w-56 -translate-y-1/2 rounded-t-[999px] border border-gold-400/30 md:block"
          />
          <div
            aria-hidden="true"
            className="absolute right-6 top-1/2 hidden h-[100%] w-56 -translate-y-1/2 rounded-t-[999px] border border-gold-400/30 md:block"
          />

          <div className="relative max-w-xl">
            <h2
              id="cta-title"
              className="text-balance text-3xl leading-tight !text-cream sm:text-5xl"
            >
              Ready for your new look?
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-cream/80">
              Tell us the service and the day that works for you. We'll confirm
              your slot on WhatsApp.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className={btnGold}
              >
                <WhatsAppIcon className="h-5 w-5" />
                Book on WhatsApp
              </a>
              <a
                href={`tel:${siteConfig.phoneTel}`}
                className="inline-flex min-h-12 items-center text-cream underline decoration-gold-400 decoration-2 underline-offset-[6px]"
              >
                Or call {siteConfig.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
