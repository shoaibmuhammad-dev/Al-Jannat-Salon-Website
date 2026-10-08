import {
  Crown,
  Eye,
  Feather,
  Gem,
  Hand,
  HeartHandshake,
  type LucideIcon,
  Scissors,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

/* -------------------------------------------------------------------------- */
/*  Navigation                                                                */
/* -------------------------------------------------------------------------- */

export const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Why us", href: "#why-us" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reviews", href: "#reviews" },
  { label: "FAQ", href: "#faq" },
  { label: "Visit us", href: "#visit" },
];

/* -------------------------------------------------------------------------- */
/*  Services                                                                  */
/*  layout: "feature" = large dark card, "wide" = full-width card,            */
/*          "card" = standard card                                            */
/* -------------------------------------------------------------------------- */

export type ServiceCategory = {
  title: string;
  description: string;
  items: string[];
  icon: LucideIcon;
  layout: "feature" | "wide" | "card";
};

export const services: ServiceCategory[] = [
  {
    title: "Lashes & Brows",
    description:
      "Eyelash extensions in Karachi that look natural, plus brows shaped to frame your face.",
    items: [
      "Eyelash extensions",
      "Lash lift",
      "Lash perms",
      "Eyebrow shaping",
      "Eyebrow threading",
      "Eyebrow beautification",
      "Microblading",
      "Permanent makeup",
    ],
    icon: Eye,
    layout: "feature",
  },
  {
    title: "Bridal & Makeup",
    description:
      "Bridal makeup in Karachi that photographs beautifully and lasts from the first rasam to the last photo. Book a trial, tell us your outfit and we'll build the look around you.",
    items: ["Bridal services", "Party makeups", "Make-up services"],
    icon: Crown,
    layout: "card",
  },
  {
    title: "Hair",
    description:
      "Colour, cuts and styling that suit your hair and your schedule, finished with a polish that holds all day.",
    items: [
      "Balayage",
      "Blow dry",
      "Hairstyling",
      "Hair extensions",
      "Perms",
      "Shampoo & conditioning",
    ],
    icon: Scissors,
    layout: "card",
  },

  {
    title: "Skin & Treatments",
    description:
      "Care for clearer, smoother skin, including acne treatments and laser hair removal in Karachi.",
    items: ["Acne treatments", "Laser hair removal", "Tanning", "Massage"],
    icon: Sparkles,
    layout: "card",
  },
  {
    title: "Hair Removal",
    description:
      "Smooth, comfortable results from careful, hygienic hair removal.",
    items: ["Waxing", "Body waxing", "Brazilian waxing", "Hair threading"],
    icon: Feather,
    layout: "card",
  },
  {
    title: "Hands & Feet",
    description:
      "Neat, polished hands and feet with a relaxing finish. A quick treat before an event or just because.",
    items: ["Manicure", "Pedicure"],
    icon: Hand,
    layout: "wide",
  },
];

/* -------------------------------------------------------------------------- */
/*  Why choose us                                                             */
/* -------------------------------------------------------------------------- */

export type Benefit = { title: string; text: string; icon: LucideIcon };

export const benefits: Benefit[] = [
  {
    title: "Hygiene first",
    text: "Clean, sanitised tools and a spotless studio for every client, every visit.",
    icon: ShieldCheck,
  },
  {
    title: "Skilled stylists",
    text: "Trained artists for bridal, hair, lashes and skin who listen before they start.",
    icon: Gem,
  },
  {
    title: "Quality products",
    text: "Professional products chosen to be kind to your skin and hair, and to last.",
    icon: Sparkles,
  },
  {
    title: "Made around you",
    text: "A calm, welcoming space and honest advice, with no pressure to add what you don't need.",
    icon: HeartHandshake,
  },
];

/* -------------------------------------------------------------------------- */
/*  Gallery                                                                   */
/*  PLACEHOLDERS: replace the files in /public/gallery with real photos       */
/*  (keep the same names, or update `src`) and adjust width/height.           */
/* -------------------------------------------------------------------------- */

export const heroImage = {
  src: "/gallery/hero.jpg",
  alt: "Bride with soft glowing makeup and styled hair at Al-Jannat Salon in Johar, Karachi",
  width: 960,
  height: 1200,
};

export const gallery = [
  {
    src: "/gallery/Bridal Glow_ Red and Gold Elegance.png",
    alt: "Bridal makeup with soft rose tones and defined eyes",
    width: 800,
    height: 1000,
  },

  {
    src: "/gallery/Warm Salon Makeup Session.png",
    alt: "Glowing, even skin after a facial treatment",
    width: 800,
    height: 1000,
  },

  {
    src: "/gallery/Candid Laughter at the Salon.png",
    alt: "Neatly shaped and defined eyebrows",
    width: 800,
    height: 800,
  },

  {
    src: "/gallery/Precision Eyelash Extension Procedure.png",
    alt: "Natural-looking eyelash extensions",
    width: 800,
    height: 1050,
  },

  {
    src: "/gallery/Warm Balayage Salon Session.png",
    alt: "Balayage hair colour with a glossy blow dry",
    width: 800,
    height: 800,
  },
  {
    src: "/gallery/Salon Glow and Glamorous Finishing Touches.png",
    alt: "Elegant party makeup look with a bold lip",
    width: 800,
    height: 1000,
  },
  // {
  //   src: "/gallery/Warm Spa Facial Treatment.png",
  //   alt: "Soft curls styled for a wedding event",
  //   width: 800,
  //   height: 1050,
  // },
  {
    src: "/gallery/Intimate Eyebrow Threading Session.png",
    alt: "Fresh manicure in a soft nude shade",
    width: 800,
    height: 800,
  },
];

/* -------------------------------------------------------------------------- */
/*  Testimonials                                                              */
/*  PLACEHOLDERS: replace with real client reviews (with permission) before   */
/*  launch. Publishing invented reviews as real ones can mislead customers.   */
/* -------------------------------------------------------------------------- */

export type Testimonial = {
  name: string;
  quote: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "Rabiya Khan",
    quote:
      "Amazing service, clean environment, and very professional staff. Loved my experience Highly satisfied!",
  },
  {
    name: "Tuba Jamil",
    quote:
      "Highly professional staff with excellent skills. The hygiene, customer care, and results were outstanding. I would definitely recommend this salon to everyone.",
  },
  {
    name: "Sana Arif",
    quote:
      "Loved the services everything was so relaxing and cozy the staff was very kind and friendly highly recommended",
  },

  {
    name: "Aiman Ahmed",
    quote:
      "The makeup is very good, the service is also very good and the behavior of the staff is very good, I have never experienced such a good massage anywhere, the name of the lady who did my facial is amazing.",
  },

  {
    name: "Sana Arif",
    quote:
      "Loved the services everything was so relaxing and cozy the staff was very kind and friendly highly recommended",
  },
];

/* -------------------------------------------------------------------------- */
/*  FAQ                                                                       */
/*  DRAFT answers: confirm each one matches your real salon policy.           */
/* -------------------------------------------------------------------------- */

export const faqs = [
  {
    question: "How do I book an appointment?",
    answer:
      "Tap any Book on WhatsApp button and send us the service you want and the day and time that suit you. We'll confirm your slot on WhatsApp. Walk-ins are welcome when a stylist is free, but booking ahead guarantees your time, especially on weekends and during wedding season.",
  },
  {
    question: "Can I book a bridal trial before my wedding?",
    answer:
      "Yes. We recommend booking your bridal trial two to four weeks before the wedding so you can try looks, finalise your style and make any changes. Bring pictures of the looks you love and your outfit colours.",
  },
  {
    question: "How much do your services cost?",
    answer:
      "Prices depend on the service, the stylist and any add-ons. Message us on WhatsApp with what you'd like and we'll share a clear price before you book, so there are no surprises on the day.",
  },
  {
    question: "How do you keep the salon hygienic?",
    answer:
      "Tools are cleaned and sanitised between clients, we use fresh disposable items where needed, and our stylists wash their hands before every service. If you have a sensitivity or allergy, tell us when you book and we'll plan around it.",
  },
  {
    question: "Do you offer bridal services for the whole family?",
    answer:
      "Yes. We can plan makeup and hair for the bride and for family members on the same day. Share how many people you'd like to book, and we'll suggest timings that work.",
  },
];
