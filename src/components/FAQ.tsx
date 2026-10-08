import { ChevronDown } from "lucide-react";
import { faqs } from "@/data/content";
import { btnSecondary, container } from "@/lib/ui";
import { whatsappLink } from "@/lib/whatsapp";
import { WhatsAppIcon } from "./icons";
import SectionHeading from "./SectionHeading";

export default function FAQ() {
  return (
    <section id="faq" aria-labelledby="faq-title" className="py-20 sm:py-28">
      <div className={`${container} grid gap-12 lg:grid-cols-12`}>
        <div className="lg:col-span-5">
          <SectionHeading
            id="faq-title"
            title="Questions before you book?"
            intro="Quick answers to what clients ask us most. Anything else, we're one message away."
          />
          <div className="mt-8">
            <a
              href={whatsappLink("Hi, I have a question about your services at Al-Jannat Salon")}
              target="_blank"
              rel="noopener noreferrer"
              className={btnSecondary}
            >
              <WhatsAppIcon className="h-5 w-5" />
              Ask on WhatsApp
            </a>
          </div>
        </div>

        <div className="lg:col-span-7">
          {faqs.map((faq) => (
            <details key={faq.question} className="group border-b border-blush-200 first:border-t">
              <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 py-4 font-serif text-lg text-plum-900">
                {faq.question}
                <ChevronDown
                  className="h-5 w-5 shrink-0 text-gold-600 transition-transform duration-200 group-open:rotate-180 motion-reduce:transition-none"
                  aria-hidden="true"
                />
              </summary>
              <p className="pb-6 pr-8 leading-relaxed text-plum-700">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
