import { createFileRoute, Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";

import { SiteLayout } from "@/components/site-layout";
import heroImage from "@/assets/lifestyle-pendant-2.jpg";
import lifestyleRing from "@/assets/lifestyle-ring.jpg";
import lifestyleEarrings from "@/assets/lifestyle-earrings.jpg";
import lifestylePendant from "@/assets/lifestyle-pendant-1.jpg";
import lifestyleBracelet from "@/assets/lifestyle-bracelet.jpg";
import { SITE_URL, abs } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Pure Platinum — Platinum Jewellery Designer & Manufacturer" },
      { name: "description", content: "Pure Platinum is a trusted platinum jewellery designer, manufacturer and platinum partner — working with retailers, designers, entrepreneurs and businesses across India." },
      { property: "og:title", content: "Pure Platinum — Platinum Jewellery Designer & Manufacturer" },
      { property: "og:description", content: "A trusted platinum jewellery designer, manufacturer and platinum partner, creating extraordinary possibilities in platinum." },
      { property: "og:type", content: "website" },
      { property: "og:image", content: abs(heroImage) },
      { property: "og:url", content: SITE_URL },
    ],
    links: [{ rel: "canonical", href: SITE_URL }],
  }),
  component: Home,
});

const COLLECTIONS = [
  { id: "rings" as const, name: "Rings", image: lifestyleRing },
  { id: "earrings" as const, name: "Earrings", image: lifestyleEarrings },
  { id: "chains" as const, name: "Chains & Pendants", image: lifestylePendant },
  { id: "bracelets" as const, name: "Bracelets", image: lifestyleBracelet },
];

const ECOSYSTEM = [
  { t: "Platinum Jewellery", d: "Exclusive designs crafted for those who appreciate rarity, elegance, and timeless beauty." },
  { t: "Designer Platinum Creations", d: "Unique, statement-making pieces created with imagination, precision, and exceptional craftsmanship." },
  { t: "Platinum Manufacturing", d: "Advanced manufacturing expertise combined with skilled craftsmanship to bring extraordinary designs to life." },
  { t: "Platinum For Jewellery Startups", d: "Helping emerging jewellery brands and designers enter the world of platinum with expert guidance, sourcing support, and manufacturing capabilities." },
  { t: "Platinum Bars", d: "Providing trusted platinum bars for those who value the enduring worth of one of the world's rarest precious metals." },
  { t: "Platinum Granules", d: "Supplying quality platinum granules for jewellery manufacturers and artisans who create exceptional pieces." },
];

function Home() {
  return (
    <SiteLayout>
      {/* HERO — split layout: text left, image right */}
      <section className="w-full">
        <div className="grid md:grid-cols-[1.5fr_1fr] md:items-stretch">
          {/* Text column */}
          <div className="order-2 md:order-1 flex items-center bg-navy-deep px-6 sm:px-10 lg:px-16 py-16 md:py-0">
            <div className="animate-fade-up max-w-xl mx-auto md:mx-0">
              <div className="text-[14px] font-medium uppercase tracking-[0.2em] text-[#7A8699] pl-[0.2em] mb-8">
                Platinum Jewellery Designer &amp; Manufacturer
              </div>
              <h1 className="font-display text-[#0F1F3D] leading-[1.0] tracking-[-0.02em] text-5xl sm:text-6xl lg:text-7xl">
                The World
                <br />
                <span className="italic">of Platinum</span>
              </h1>
              <p className="mt-8 text-[#3B4759] text-[18px] leading-[1.7] max-w-md">
                Platinum is not just a precious metal. It is a symbol of rarity, purity, and
                timeless elegance. As a trusted platinum jewellery designer, manufacturer, and
                platinum solutions partner, we help transform visions into creations designed
                to last forever.
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-8 md:gap-12">
                <Link
                  to="/collection"
                  className="group inline-flex items-center gap-3 text-[14px] font-semibold uppercase tracking-[0.08em] text-[#0F1F3D] border-b border-[#0F1F3D]/60 pb-1.5 hover:border-[#0F1F3D] transition-colors"
                >
                  View Collection
                  <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  to="/manufacturing"
                  className="text-[14px] font-medium uppercase tracking-[0.2em] text-[#0F1F3D]/70 hover:text-[#B08D57] transition-colors"
                >
                  Our Atelier
                </Link>
              </div>
            </div>
          </div>

          {/* Image column */}
          <div className="order-1 md:order-2 relative aspect-[3/4] overflow-hidden">
            <img
              src={heroImage}
              alt="A platinum diamond ring"
              className="absolute inset-0 h-full w-full object-cover object-center"
            />
            {/* Blend fade — softens the seam so the image reads as part of the same section as the text */}
            <div className="hidden md:block absolute inset-y-0 left-0 w-24 lg:w-32 bg-gradient-to-r from-navy-deep to-transparent pointer-events-none" />
          </div>
        </div>
      </section>

      {/* CRAFTING THE EXTRAORDINARY — navy band */}
      <section className="bg-navy-mid py-24 md:py-36 border-y border-champagne/15">
        <div className="mx-auto max-w-4xl px-6 lg:px-10 text-center">
          <div className="text-[0.7rem] uppercase tracking-[0.5em] text-champagne pl-[0.5em] mb-6">
            Pure Platinum
          </div>
          <h2 className="font-display font-light text-3xl md:text-5xl text-ivory tracking-[0.18em] pl-[0.18em] leading-tight">
            CRAFTING THE EXTRAORDINARY<br />IN PLATINUM
          </h2>
          <div className="mx-auto mt-7 h-px w-16 bg-champagne/60" />
          <div className="mt-10 space-y-5 text-platinum/85 text-[15px] md:text-[17px] leading-[1.9] font-light">
            <p>
              Every platinum creation begins with a vision. A vision that requires precision.
              A vision that demands expertise. A vision that deserves perfection.
            </p>
            <p>
              With years of experience in understanding platinum's unique character, Pure
              Platinum creates jewellery that reflects exceptional craftsmanship, contemporary
              design, and timeless sophistication — from intricate designer collections to
              bespoke creations, every piece crafted with an uncompromising commitment to
              excellence.
            </p>
          </div>
          <div className="pt-11">
            <Link
              to="/about"
              className="btn-gold hover:btn-gold-hover"
            >
              Read More <ArrowRight size={13} />
            </Link>
          </div>
        </div>
      </section>

      {/* MORE THAN JEWELLERY — complete platinum ecosystem */}
      <section className="py-20 md:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="text-center mb-14 md:mb-20 max-w-3xl mx-auto">
            <div className="eyebrow mb-5">A Complete Platinum Ecosystem</div>
            <h2 className="font-display font-light text-3xl md:text-5xl text-ivory tracking-[0.1em] leading-tight">
              More Than Jewellery.
            </h2>
            <div className="hairline w-20 mt-6 mx-auto" />
            <p className="mt-8 text-platinum/80 font-light leading-relaxed">
              Pure Platinum represents the complete world of platinum.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {ECOSYSTEM.map((item) => (
              <div
                key={item.t}
                className="group border border-platinum/15 p-8 lg:p-10 bg-navy-deep/50 hover:bg-navy-mid/60 transition-colors"
              >
                <div className="font-display text-2xl text-ivory mb-3">{item.t}</div>
                <p className="text-sm text-platinum/70 leading-relaxed font-light">{item.d}</p>
                <div className="mt-6 h-[1px] w-8 bg-champagne transition-all duration-500 group-hover:w-20" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COLLECTIONS STRIP — four categories, each a lifestyle tile */}
      <section className="pb-16 md:pb-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-10">
          <div className="text-center mb-12 md:mb-16">
            <div className="eyebrow mb-5">Pure Platinum Collections</div>
            <h2 className="font-display font-light text-3xl md:text-5xl text-ivory tracking-[0.1em] leading-tight">
              Explore the collection.
            </h2>
            <div className="hairline w-20 mt-6 mx-auto" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
            {COLLECTIONS.map((c) => (
              <Link
                key={c.id}
                to="/collection"
                hash={c.id}
                className="group relative block overflow-hidden aspect-[3/4]"
              >
                <img
                  src={c.image}
                  alt={c.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1600ms] group-hover:scale-110"
                />
                {/* Dark scrim keeps the cream type legible over the navy photography */}
                <div className="absolute inset-0 bg-ivory/30 group-hover:bg-ivory/45 transition-colors duration-500" />
                <div className="absolute inset-x-0 bottom-0 flex flex-col items-center px-4 pb-9 text-center">
                  <span className="font-display text-2xl md:text-[1.65rem] text-navy-deep leading-tight drop-shadow-lg">
                    {c.name}
                  </span>
                  <span className="mt-5 inline-flex items-center justify-center border border-navy-deep/85 px-7 py-3 text-[0.58rem] uppercase tracking-[0.32em] text-navy-deep transition-colors duration-500 group-hover:bg-navy-deep group-hover:text-ivory">
                    <span className="pl-[0.32em]">View</span>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ATELIER BAND — text-only editorial band. Deliberately image-free: the
          only atelier photography available is AI-generated, and every real
          photograph is already working elsewhere on this page. */}
      <section className="pb-20 md:pb-32">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-10">
          <Link
            to="/manufacturing"
            className="group block bg-navy-mid border border-platinum/15 px-8 py-16 md:px-16 md:py-24 text-center transition-colors duration-700 hover:bg-navy"
          >
            <div className="eyebrow mb-6">The Atelier</div>
            <h2 className="font-display text-3xl md:text-5xl text-ivory leading-[1.15] max-w-2xl mx-auto">
              Crafted by hand.<br />
              <span className="italic text-platinum">Worn for a lifetime.</span>
            </h2>
            <div className="hairline w-16 my-8 mx-auto" />
            <p className="text-[15px] md:text-base text-platinum/85 font-light leading-relaxed max-w-xl mx-auto">
              Every Pure Platinum piece is cast, forged and finished by our own karigars
              in Mumbai — because platinum rewards patience, and nothing here is rushed.
            </p>
            <span className="mt-10 inline-flex items-center justify-center border border-ivory/70 px-9 py-3.5 text-[0.62rem] uppercase tracking-[0.35em] text-ivory transition-colors duration-500 group-hover:bg-ivory group-hover:text-navy-deep">
              <span className="pl-[0.35em]">Inside the atelier</span>
            </span>
          </Link>
        </div>
      </section>

      {/* CONTACT / REACH US strip — SRJ style */}
      <section className="py-16 md:py-24 bg-navy-mid border-y border-platinum/10">
        <div className="mx-auto max-w-5xl px-6 lg:px-10 text-center">
          <h2 className="font-display font-light text-3xl md:text-5xl text-ivory tracking-[0.22em] pl-[0.22em]">
            REACH US
          </h2>
          <div className="hairline w-20 mt-6 mb-10 mx-auto" />

          <ul className="grid md:grid-cols-3 gap-8 md:gap-10 text-platinum/85 text-[15px] md:text-base font-light">
            <li className="flex flex-col items-center gap-3">
              <MapPin size={20} className="text-platinum-dark" />
              <span>
                Unit E-1, Plot F11 &amp; F12<br />
                WICEL Compound, Marol Central Road<br />
                MIDC, Opp. SEEPZ Gate 1<br />
                Andheri (E), Mumbai · 400 093
              </span>
            </li>
            <li className="flex flex-col items-center gap-3">
              <Mail size={20} className="text-platinum-dark" />
              <a href="mailto:info@pureplatinum.in" className="hover:text-ivory transition-colors">
                info@pureplatinum.in
              </a>
            </li>
            <li className="flex flex-col items-center gap-3">
              <Phone size={20} className="text-platinum-dark" />
              <span>
                <a href="tel:+919122663797" className="hover:text-ivory transition-colors">+91 91226 63797</a>
                <br />
                <span className="text-platinum-dark text-xs">Trade enquiries</span>
              </span>
            </li>
          </ul>

          <div className="mt-12">
            <Link
              to="/contact"
              className="inline-flex items-center border border-platinum px-10 py-3.5 text-[0.7rem] uppercase tracking-[0.4em] text-ivory hover:bg-platinum hover:text-navy-deep transition-colors"
            >
              Reach Us
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
