import Image from "next/image";
import { Clock, Crown, Star } from "lucide-react";
import { siteConfig } from "@/config/site";
import { btnPrimary, btnSecondary, container } from "@/lib/ui";
import { whatsappLink } from "@/lib/whatsapp";
import { WhatsAppIcon } from "./icons";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      className="relative overflow-hidden bg-gradient-to-b from-blush-100 to-cream"
    >
      <div
        className={`${container} grid items-center gap-12 py-12 sm:py-16 lg:grid-cols-12 lg:gap-8 lg:py-24`}
      >
        <div className="lg:col-span-7">
          <h1
            id="hero-title"
            className="text-balance text-4xl leading-[1.1] tracking-tight sm:text-5xl lg:text-[3.5rem]"
          >
            Bridal glow, flawless hair and lashes that last. Right here in
            Johar.
          </h1>

          <p
            className="mt-6 max-w-xl animate-rise text-lg leading-relaxed text-plum-700 motion-reduce:animate-none"
            style={{ animationDelay: "120ms" }}
          >
            {siteConfig.shortName} is a beauty salon in Johar, Karachi for
            bridal makeup, party looks, hair, lashes, brows and skin care.
            Skilled stylists, a spotless studio and a look that is completely
            yours.
          </p>

          <div
            className="mt-8 flex flex-col gap-3 sm:flex-row animate-rise motion-reduce:animate-none"
            style={{ animationDelay: "220ms" }}
          >
            <Link
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className={btnPrimary}
            >
              <WhatsAppIcon className="h-5 w-5" />
              Book on WhatsApp
            </Link>
            <Link href="#services" className={btnSecondary}>
              View services
            </Link>
          </div>

          <ul
            className="mt-9 flex flex-col gap-3 text-[0.95rem] text-plum-700 sm:flex-row sm:flex-wrap sm:gap-x-8 animate-rise motion-reduce:animate-none"
            style={{ animationDelay: "320ms" }}
          >
            <li className="flex items-center gap-2.5">
              <span className="flex" aria-hidden="true">
                {[0, 1, 2, 3, 4].map((i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-gold-500 text-gold-500 relative lg:-top-0.5"
                  />
                ))}
              </span>
              <span>
                Trusted by {siteConfig.trustedClients} women across Gulshan and
                Johar
              </span>
            </li>
            <li className="flex items-center gap-2.5">
              <Clock className="h-4 w-4 text-gold-600" aria-hidden="true" />
              <span>Open 7 days, {siteConfig.hours.display}</span>
            </li>
          </ul>
        </div>

        {/* Arch-framed photo: the one memorable shape on the page */}
        <div
          className="animate-rise motion-reduce:animate-none lg:col-span-5"
          style={{ animationDelay: "180ms" }}
        >
          <div className="relative mx-auto w-full max-w-sm">
            <div
              aria-hidden="true"
              className="absolute inset-0 translate-x-3 translate-y-3 rounded-b-3xl rounded-t-[999px] border border-gold-500"
            />
            <div className="relative aspect-[4/5] overflow-hidden rounded-b-3xl rounded-t-[999px] bg-blush-200 shadow-lift group">
              <Image
                src={"/Bridal Glow_ Red and Gold Elegance.png"}
                alt={"Bridal Glow_ Red and Gold Elegance"}
                fill
                priority
                sizes="(min-width: 1024px) 384px, (min-width: 640px) 384px, 90vw"
                className="object-cover brightness-90 group-hover:scale-105 transition-all duration-500"
              />
            </div>
            <div className="absolute -bottom-4 left-0 flex items-center gap-2.5 rounded-full bg-cream px-4 py-2.5 shadow-soft sm:-left-4">
              <Crown className="h-5 w-5 text-gold-600" aria-hidden="true" />
              <span className="text-sm font-medium text-plum-900">
                Bridal trials available
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
