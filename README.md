# Al-Jannat Salon & Studio (Johar Branch)

One-page, mobile-first website built with Next.js (App Router), TypeScript and Tailwind CSS.
Goal: turn visitors into WhatsApp bookings.

## Setup

```bash
npm install
cp .env.example .env.local   # then set NEXT_PUBLIC_SITE_URL to your live domain
npm run dev                  # http://localhost:3000
```

Production check:

```bash
npm run build
npm run start
```

`next/font` downloads Inter and Playfair Display at build time, so the first build needs an internet connection.

## Deploy to Vercel

1. Push the project to GitHub.
2. In Vercel, click **Add New > Project** and import the repo (framework: Next.js is detected automatically).
3. Under **Environment Variables**, add `NEXT_PUBLIC_SITE_URL` with your final domain, for example `https://www.aljannatsalon.com`.
4. Click **Deploy**. Add your custom domain under **Settings > Domains**.

## Where to edit things

| What | File |
| --- | --- |
| WhatsApp number, phone, address, hours, social links, map | `src/config/site.ts` |
| Services, benefits, gallery, reviews, FAQs, nav links | `src/data/content.ts` |
| Colours | `tailwind.config.ts` |
| WhatsApp message wording | `src/lib/whatsapp.ts` |
| Gallery and hero photos | `public/gallery/` |

## Before you launch (checklist)

- [ ] Set `NEXT_PUBLIC_SITE_URL` to the real domain.
- [ ] Replace the placeholder photos in `public/gallery/` (same file names, or update `src/data/content.ts`). Update each `alt` text to describe the real photo, and adjust `width`/`height` to the real aspect ratio.
- [ ] Replace the 3 placeholder testimonials with real client reviews (with permission).
- [ ] Replace `trustedClients` in `src/config/site.ts` with an honest number.
- [ ] Check the FAQ answers match your real policies (walk-ins, bridal trials, hygiene).
- [ ] Replace the approximate `geo` coordinates in `src/config/site.ts` with the exact ones from Google Maps.
- [ ] Replace the `"/"` social links with your Instagram and Facebook URLs.
- [ ] If the Google Maps embed doesn't pin the right spot, change `mapsQuery` in `src/config/site.ts` to your exact listing name.
- [ ] Run Lighthouse on the deployed mobile site.

## Structure

```
src/
  app/        layout, page, sitemap, robots, share images, favicon, global CSS
  components/ Navbar, Hero, Services, WhyChooseUs, Gallery, Testimonials, FAQ, Location, FinalCta, Footer, FloatingWhatsApp
  config/     site.ts (business details)
  data/       content.ts (copy and lists)
  lib/        whatsapp links, structured data, shared styles
public/gallery/ placeholder images
```
# Al-Jannat-Salon-Website
