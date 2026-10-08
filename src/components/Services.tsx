import { services, type ServiceCategory } from "@/data/content";
import { btnGold, container } from "@/lib/ui";
import { serviceMessage, whatsappLink } from "@/lib/whatsapp";
import { WhatsAppIcon } from "./icons";
import SectionHeading from "./SectionHeading";
import Link from "next/link";

function BookLink({ title, dark }: { title: string; dark?: boolean }) {
  const className = dark
    ? btnGold
    : "inline-flex min-h-11 items-center gap-2 font-medium text-plum-900 underline decoration-gold-500 decoration-2 underline-offset-[6px] transition-colors hover:decoration-plum-800";
  return (
    <Link
      href={whatsappLink(serviceMessage(`${title} Service`))}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      <WhatsAppIcon className="h-4 w-4" />
      <span>
        Book this service<span className="sr-only"> for {title}</span>
      </span>
    </Link>
  );
}

function ServiceCard({ category }: { category: ServiceCategory }) {
  const { title, description, items, icon: Icon, layout } = category;
  const feature = layout === "feature";
  const horizontal = layout !== "card";

  const wrapper = [
    "flex flex-col gap-8 rounded-3xl p-7 sm:p-9",
    feature
      ? "dark-surface bg-plum-900 text-cream shadow-lift md:col-span-2"
      : "bg-white shadow-soft",
    layout === "wide" ? "md:col-span-2 lg:col-span-3" : "",
    horizontal ? "md:flex-row md:items-start md:gap-14" : "",
  ].join(" ");

  return (
    <article className={wrapper}>
      <div className={horizontal ? "md:flex-1" : ""}>
        <div className="flex items-center gap-3.5">
          <span
            className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full ${
              feature
                ? "bg-gold-300/15 text-gold-300"
                : "bg-blush-100 text-plum-700"
            }`}
          >
            <Icon className="h-6 w-6" aria-hidden="true" />
          </span>
          <h3 className={`text-2xl ${feature ? "!text-cream" : ""}`}>
            {title}
          </h3>
        </div>
        <p
          className={`mt-4 leading-relaxed ${feature ? "text-cream/80" : "text-plum-700"}`}
        >
          {description}
        </p>
        {horizontal && (
          <div className="mt-6 hidden md:block">
            <BookLink title={title} dark={feature} />
          </div>
        )}
      </div>

      <div className={horizontal ? "md:flex-1" : "flex flex-1 flex-col"}>
        <ul
          className={`divide-y ${
            feature
              ? "divide-cream/15 text-cream"
              : "divide-blush-200 text-plum-800"
          }`}
        >
          {items.map((item) => (
            <li key={item} className="py-2.5">
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className={horizontal ? "md:hidden" : "mt-auto"}>
        <BookLink title={title} dark={feature} />
      </div>
    </article>
  );
}

export default function Services() {
  return (
    <section
      id="services"
      aria-labelledby="services-title"
      className="py-20 sm:py-28"
    >
      <div className={container}>
        <SectionHeading
          id="services-title"
          title="Services for the big day and every day"
          intro="Pick a category and message us. We'll confirm availability and help you choose what suits you best."
        />
        <div className="reveal mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((category) => (
            <ServiceCard key={category.title} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
}
