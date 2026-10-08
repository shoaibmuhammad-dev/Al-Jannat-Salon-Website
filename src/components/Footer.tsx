import { MapPin, Phone } from "lucide-react";
import { siteConfig } from "@/config/site";
import { navLinks } from "@/data/content";
import { container } from "@/lib/ui";
import { whatsappLink } from "@/lib/whatsapp";
import { FacebookIcon, InstagramIcon, WhatsAppIcon } from "./icons";
import Logo from "./Logo";

export default function Footer() {
  const socialClass =
    "flex h-11 w-11 items-center justify-center rounded-full border border-plum-800/20 text-plum-800 transition-colors hover:bg-plum-800 hover:text-cream";

  return (
    <footer className="border-t border-blush-200 bg-blush-100 pb-28 pt-16 sm:pb-12">
      <div className={`${container} grid gap-12 md:grid-cols-2 lg:grid-cols-4`}>
        <div className="lg:col-span-1">
          <Logo />
          <p className="mt-5 max-w-xs leading-relaxed text-plum-700">
            Bridal makeup, hair, lashes, brows and skin care in Gulistan-e-Johar, Karachi.
          </p>
        </div>

        <div>
          <h2 className="text-lg">Contact</h2>
          <ul className="mt-4 space-y-3 text-plum-800">
            <li className="flex items-start gap-3">
              <Phone className="mt-1 h-4 w-4 shrink-0 text-gold-600" aria-hidden="true" />
              <a href={`tel:${siteConfig.phoneTel}`} className="hover:underline">
                {siteConfig.phoneDisplay}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <WhatsAppIcon className="mt-1 h-4 w-4 shrink-0 text-gold-600" />
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Chat on WhatsApp
              </a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="mt-1 h-4 w-4 shrink-0 text-gold-600" aria-hidden="true" />
              <span className="leading-relaxed">{siteConfig.address.full}</span>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg">Opening hours</h2>
          <p className="mt-4 text-plum-800">
            {siteConfig.hours.days}
            <br />
            {siteConfig.hours.display}
          </p>
        </div>

        <div>
          <h2 className="text-lg">Explore</h2>
          <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2 text-plum-800">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="inline-block py-1 hover:underline">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex gap-3">
            <a href={siteConfig.social.instagram} aria-label="Al-Jannat Salon on Instagram" className={socialClass}>
              <InstagramIcon className="h-5 w-5" />
            </a>
            <a href={siteConfig.social.facebook} aria-label="Al-Jannat Salon on Facebook" className={socialClass}>
              <FacebookIcon className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>

      <div className={`${container} mt-12 border-t border-blush-200 pt-6 text-sm text-plum-700`}>
        © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
      </div>
    </footer>
  );
}
