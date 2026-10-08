import { Star } from "lucide-react";
import { testimonials } from "@/data/content";
import { container } from "@/lib/ui";
import SectionHeading from "./SectionHeading";

export default function Testimonials() {
  return (
    <section
      id="reviews"
      aria-labelledby="reviews-title"
      className="bg-blush-100 py-20 sm:py-28"
    >
      <div className={container}>
        <SectionHeading
          id="reviews-title"
          title="Kind words from our clients"
          intro="Brides, party-goers and regulars from Gulshan-e-Iqbal, Johar and beyond."
        />
        <div className="reveal mt-12 grid gap-5 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col rounded-3xl bg-cream p-7 shadow-soft"
            >
              <div
                className="flex gap-1"
                role="img"
                aria-label="5 out of 5 stars"
              >
                {[0, 1, 2, 3, 4].map((i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-gold-500 text-gold-500"
                    aria-hidden="true"
                  />
                ))}
              </div>
              <blockquote className="mt-5 flex-1 font-serif text-lg leading-relaxed text-plum-900">
                {t.quote}
              </blockquote>
              <figcaption className="mt-6 border-t border-blush-200 pt-4">
                <span className="block font-medium text-plum-900">
                  {t.name}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
