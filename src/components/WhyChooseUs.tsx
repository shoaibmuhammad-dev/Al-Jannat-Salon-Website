import { benefits } from "@/data/content";
import { container } from "@/lib/ui";
import SectionHeading from "./SectionHeading";

export default function WhyChooseUs() {
  return (
    <section
      id="why-us"
      aria-labelledby="why-title"
      className="dark-surface bg-plum-900 py-20 sm:py-28"
    >
      <div className={container}>
        <SectionHeading
          id="why-title"
          tone="dark"
          title="Care you can feel from the moment you walk in"
          intro="Whether it's your wedding or a Friday blow dry, you get the same attention to detail."
        />
        <ul className="reveal mt-14 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map(({ title, text, icon: Icon }) => (
            <li key={title} className="border-t border-gold-400/40 pt-6">
              <Icon className="h-7 w-7 text-gold-300" aria-hidden="true" />
              <h3 className="mt-5 text-xl !text-cream">{title}</h3>
              <p className="mt-3 leading-relaxed text-cream/75">{text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
