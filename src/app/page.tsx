import FAQ from "@/components/FAQ";
import FinalCta from "@/components/FinalCta";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import JsonLd from "@/components/JsonLd";
import Location from "@/components/Location";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import WhyChooseUs from "@/components/WhyChooseUs";
import { faqJsonLd, salonJsonLd } from "@/lib/structured-data";

export default function HomePage() {
  return (
    <>
      <a
        href="#main"
        className="sr-only rounded-full bg-plum-900 px-4 py-2 text-cream focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60]"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <Services />
        <WhyChooseUs />
        <Gallery />
        <Testimonials />
        <FAQ />
        <Location />
        <FinalCta />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <JsonLd data={salonJsonLd()} />
      <JsonLd data={faqJsonLd()} />
    </>
  );
}
