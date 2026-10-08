import Image from "next/image";
import { siteConfig } from "@/config/site";
import { gallery } from "@/data/content";
import { container } from "@/lib/ui";
import { InstagramIcon } from "./icons";
import SectionHeading from "./SectionHeading";

export default function Gallery() {
  return (
    <section id="gallery" aria-labelledby="gallery-title" className="py-20 sm:py-28">
      <div className={container}>
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            id="gallery-title"
            title="The Al-Jannat finish"
            intro="Soft, polished and made to last. A few looks from our chairs."
          />
          <a
            href={siteConfig.social.instagram}
            className="inline-flex min-h-11 items-center gap-2 font-medium text-plum-900 underline decoration-gold-500 decoration-2 underline-offset-[6px] hover:decoration-plum-800"
          >
            <InstagramIcon className="h-5 w-5" />
            See more on Instagram
          </a>
        </div>

        <ul className="mt-12 columns-2 gap-3 md:columns-3 md:gap-4">
          {gallery.map((img) => (
            <li key={img.src} className="mb-3 break-inside-avoid md:mb-4">
              <div className="group overflow-hidden rounded-2xl bg-blush-100">
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={img.width}
                  height={img.height}
                  sizes="(min-width: 1152px) 360px, (min-width: 768px) 33vw, 50vw"
                  className="h-auto w-full transition-transform duration-500 ease-out group-hover:scale-[1.04] motion-reduce:transition-none"
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
