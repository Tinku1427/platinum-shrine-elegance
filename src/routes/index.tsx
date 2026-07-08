import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Mail, Phone, MapPin } from "lucide-react";

import { SiteLayout } from "@/components/site-layout";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import boutique from "@/assets/boutique.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Pure Platinum — Manufacturers of Pure Platinum Jewellery | Hyderabad" },
      { name: "description", content: "Pure Platinum is a Hyderabad-based manufacturer of authentic 95% pure platinum jewellery. Naturally rare. Exceptionally durable. Trusted by retailers and ateliers across India." },
      { property: "og:title", content: "Pure Platinum — Manufacturers of Pure Platinum Jewellery" },
      { property: "og:description", content: "Naturally rare. Exceptionally durable. Manufacturers of 95% pure platinum jewellery in Hyderabad." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Home,
});

const slides = [hero1, hero2, hero3];

function Home() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((s) => (s + 1) % slides.length), 6500);
    return () => clearInterval(t);
  }, []);

  return (
    <SiteLayout>
      {/* HERO CAROUSEL — SRJ style, full-bleed, side arrows */}
      <section className="relative w-full overflow-hidden bg-navy-mid">
        <div className="relative aspect-[16/10] md:aspect-[21/9] w-full">
          {slides.map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt=""
              className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-[1400ms] ease-in-out ${
                idx === i ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/50 via-transparent to-transparent pointer-events-none" />

          <button
            onClick={() => setI((s) => (s - 1 + slides.length) % slides.length)}
            className="absolute left-3 md:left-8 top-1/2 -translate-y-1/2 h-10 w-10 md:h-12 md:w-12 rounded-full border border-ivory/70 text-ivory hover:bg-ivory hover:text-navy-deep flex items-center justify-center transition-colors"
            aria-label="Previous"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={() => setI((s) => (s + 1) % slides.length)}
            className="absolute right-3 md:right-8 top-1/2 -translate-y-1/2 h-10 w-10 md:h-12 md:w-12 rounded-full border border-ivory/70 text-ivory hover:bg-ivory hover:text-navy-deep flex items-center justify-center transition-colors"
            aria-label="Next"
          >
            <ChevronRight size={18} />
          </button>

          <div className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setI(idx)}
                className={`h-[3px] transition-all duration-500 ${
                  idx === i ? "w-10 bg-platinum" : "w-4 bg-platinum/40"
                }`}
                aria-label={`Slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* OUR STORY — SRJ two-column */}
      <section className="py-20 md:py-32">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-start">
            <div className="md:col-span-4">
              <h2 className="font-display text-3xl md:text-5xl text-ivory tracking-wide">
                OUR STORY
              </h2>
              <div className="hairline w-20 mt-6" />
            </div>
            <div className="md:col-span-8 space-y-5 text-platinum/85 text-[15px] md:text-[17px] leading-[1.9] font-light">
              <p>
                Pure Platinum is a Hyderabad-based manufacturing house dedicated to the world's
                rarest precious metal. Rooted in the belief that a metal thirty times scarcer than
                gold deserves an equally rare standard of craftsmanship, our atelier crafts
                authentic 95% pure platinum jewellery for a curated network of retailers,
                bridal houses and private ateliers across India.
              </p>
              <p>
                Every piece we manufacture is naturally white, hypoallergenic and endlessly durable
                — cast, filed and finished by hand by karigars whose skill has been refined across
                generations. Our quiet PT950 hallmark is a promise: rarity, purity, and a legacy
                built to outlive its wearer.
              </p>
              <div className="pt-4">
                <Link
                  to="/about"
                  className="inline-flex items-center border border-platinum/70 px-8 py-3 text-[0.7rem] uppercase tracking-[0.4em] text-ivory hover:bg-platinum hover:text-navy-deep transition-colors"
                >
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT / REACH US strip — SRJ style */}
      <section className="py-16 md:py-24 bg-[oklch(0.15_0.065_265)] border-y border-platinum/10">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
            <div className="relative aspect-[4/3] overflow-hidden">
              <img src={boutique} alt="Pure Platinum atelier" loading="lazy" className="h-full w-full object-cover" />
            </div>
            <div>
              <h2 className="font-display text-3xl md:text-5xl text-ivory tracking-wide">
                REACH US
              </h2>
              <div className="hairline w-20 mt-6 mb-8" />

              <ul className="space-y-5 text-platinum/85 text-[15px] md:text-base font-light">
                <li className="flex items-start gap-3">
                  <MapPin size={16} className="mt-1 text-platinum-dark shrink-0" />
                  <span>MG Road, Secunderabad<br />Hyderabad · 500003 · India</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail size={16} className="text-platinum-dark shrink-0" />
                  <a href="mailto:info@pureplatinum.com" className="hover:text-ivory transition-colors">
                    info@pureplatinum.com
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Phone size={16} className="text-platinum-dark shrink-0" />
                  <span>Trade enquiries: <a href="tel:+917380009000" className="hover:text-ivory transition-colors">+91 73 8000 9000</a></span>
                </li>
              </ul>

              <div className="mt-10">
                <Link
                  to="/contact"
                  className="inline-flex items-center border border-platinum px-10 py-3.5 text-[0.7rem] uppercase tracking-[0.4em] text-ivory hover:bg-platinum hover:text-navy-deep transition-colors"
                >
                  Reach Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
