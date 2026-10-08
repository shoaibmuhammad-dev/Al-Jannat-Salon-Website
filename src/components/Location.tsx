import { Clock, MapPin, Phone } from "lucide-react";
import { siteConfig } from "@/config/site";
import { btnPrimary, btnSecondary, container } from "@/lib/ui";
import SectionHeading from "./SectionHeading";
import Link from "next/link";
import MapEmbed from "./MapEmbed";

export default function Location() {
  return (
    <section
      id="visit"
      aria-labelledby="visit-title"
      className="bg-blush-100 py-20 sm:py-28"
    >
      <div
        className={`${container} grid gap-12 lg:grid-cols-2 lg:items-center`}
      >
        <div>
          <SectionHeading
            id="visit-title"
            title="Visit us in Gulistan-e-Johar"
            intro="Easy to reach from Johar and Gulshan-e-Iqbal. Drop in, or message first to reserve your time."
          />

          <dl className="mt-10 space-y-6">
            <div className="flex gap-4">
              <dt className="mt-0.5">
                <MapPin className="h-6 w-6 text-gold-600" aria-hidden="true" />
                <span className="sr-only">Address</span>
              </dt>
              <dd className="text-plum-900">
                <address className="not-italic leading-relaxed">
                  {siteConfig.name} ({siteConfig.branch})
                  <br />
                  {siteConfig.address.full}
                </address>
              </dd>
            </div>
            <div className="flex gap-4">
              <dt className="mt-0.5">
                <Clock className="h-6 w-6 text-gold-600" aria-hidden="true" />
                <span className="sr-only">Opening hours</span>
              </dt>
              <dd className="text-plum-900">
                {siteConfig.hours.days}, {siteConfig.hours.display}
              </dd>
            </div>
            <div className="flex gap-4">
              <dt className="mt-0.5">
                <Phone className="h-6 w-6 text-gold-600" aria-hidden="true" />
                <span className="sr-only">Phone</span>
              </dt>
              <dd>
                <Link
                  href={`tel:${siteConfig.phoneTel}`}
                  className="text-plum-900 underline decoration-gold-500 decoration-2 underline-offset-4"
                >
                  {siteConfig.phoneDisplay}
                </Link>
              </dd>
            </div>
          </dl>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link href={`tel:${siteConfig.phoneTel}`} className={btnPrimary}>
              <Phone className="h-5 w-5" aria-hidden="true" />
              Call now
            </Link>
            <Link
              href={siteConfig.mapsDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={btnSecondary}
            >
              <MapPin className="h-5 w-5" aria-hidden="true" />
              Get directions
            </Link>
          </div>
        </div>

        {/* <div className="reveal aspect-[4/3] overflow-hidden rounded-3xl bg-blush-200 shadow-soft">
          <iframe
            title="Map showing Al-Jannat Salon & Studio in Gulistan-e-Johar, Karachi"
            src={siteConfig.mapsEmbedUrl}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
            className="h-full w-full border-0"
          />
        </div> */}
        <div className="reveal">
          <MapEmbed
            src={siteConfig.mapsEmbedUrl}
            title="Map showing Al-Jannat Salon & Studio in Gulistan-e-Johar, Karachi"
            directionsUrl={siteConfig.mapsDirectionsUrl}
          />
        </div>
      </div>
    </section>
  );
}
