import { MapPin, Phone } from "lucide-react";
import { siteConfig } from "@/config/site";
import { navLinks } from "@/data/content";
import { container } from "@/lib/ui";
import { whatsappLink } from "@/lib/whatsapp";
import { FacebookIcon, InstagramIcon, WhatsAppIcon } from "./icons";
import Logo from "./Logo";
import Link from "next/link";

export default function Footer() {
  const socialClass =
    "flex h-11 w-11 items-center justify-center rounded-full border border-plum-800/20 text-plum-800 transition-colors hover:bg-plum-800 hover:text-cream";

  return (
    <footer className="border-t border-blush-200 bg-blush-100 pb-28 pt-16 sm:pb-12">
      <div className={`${container} grid gap-12 md:grid-cols-2 lg:grid-cols-4`}>
        <div className="lg:col-span-1">
          <Logo />
          <p className="mt-5 max-w-xs leading-relaxed text-plum-700">
            Bridal makeup, hair, lashes, brows and skin care in
            Gulistan-e-Johar, Karachi.
          </p>
        </div>

        <div>
          <h2 className="text-lg">Contact</h2>
          <ul className="mt-4 space-y-3 text-plum-800">
            <li className="flex items-start gap-3">
              <Phone
                className="mt-1 h-4 w-4 shrink-0 text-gold-600"
                aria-hidden="true"
              />
              <Link
                href={`tel:${siteConfig.phoneTel}`}
                className="hover:underline"
              >
                {siteConfig.phoneDisplay}
              </Link>
            </li>
            <li className="flex items-start gap-3">
              <WhatsAppIcon className="mt-1 h-4 w-4 shrink-0 text-gold-600" />
              <Link
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Chat on WhatsApp
              </Link>
            </li>
            <li className="flex items-start gap-3">
              <MapPin
                className="mt-1 h-4 w-4 shrink-0 text-gold-600"
                aria-hidden="true"
              />
              <Link
                href={
                  "https://www.google.com/maps/search/?api=1&query=Al-Jannat%20Salon%20%26%20Studio%2C%20A-135%20Long%20Life%20Bungalow%2C%20Block%2017%20Gulistan-e-Johar%2C%20Karachi%2C%20Pakistan"
                }
                target="_blank"
                className="leading-relaxed hover:underline"
              >
                {siteConfig.address.full}
              </Link>
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
                <Link
                  href={link.href}
                  className="inline-block py-1 hover:underline"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex gap-3">
            <Link
              href={siteConfig.social.instagram}
              aria-label="Al-Jannat Salon on Instagram"
              className={socialClass}
              target="_blank"
            >
              <InstagramIcon className="h-5 w-5" />
            </Link>
            <Link
              href={siteConfig.social.facebook}
              aria-label="Al-Jannat Salon on Facebook"
              className={socialClass}
              target="_blank"
            >
              <FacebookIcon className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>

      <div
        className={`${container} mt-12 border-t border-blush-200 pt-6 text-sm text-plum-700`}
      >
        © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
      </div>
    </footer>
  );
}
