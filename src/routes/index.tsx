import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, ArrowRight, ShieldCheck, Sparkles, Award, Gem } from "lucide-react";

import { SiteLayout } from "@/components/site-layout";
import logoWhite from "@/assets/pure-platinum-logo-white.asset.json";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import collectionRings from "@/assets/collection-rings.jpg";
import collectionChains from "@/assets/collection-chains.jpg";
import collectionEarrings from "@/assets/collection-earrings.jpg";
import collectionBracelets from "@/assets/collection-bracelets.jpg";
import craftsmanship from "@/assets/craftsmanship.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Pure Platinum — Manufacturers of Pure Platinum Jewellery | Hyderabad" },
      { name: "description", content: "Pure Platinum is a Hyderabad-based manufacturer of authentic platinum jewellery. Naturally rare. Exceptionally durable. Trusted by retailers and ateliers across India." },
      { property: "og:title", content: "Pure Platinum — Manufacturers of Pure Platinum Jewellery" },
      { property: "og:description", content: "Naturally rare. Exceptionally durable. Manufacturers of 95% pure platinum jewellery in Hyderabad." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Home,
});

const slides = [
  { image: hero1, eyebrow: "Volume I · 2026", title: "Pure by nature.\nEternal by design.", caption: "Manufacturers of 95% pure platinum jewellery for India's most trusted retailers." },
  { image: hero2, eyebrow: "The Bridal Foundry", title: "A promise, forged\nin the rarest metal.", caption: "Solitaire and eternity settings finished by hand in our Hyderabad atelier." },
  { image: hero3, eyebrow: "Trade & Retail Supply", title: "Naturally rare.\nExceptionally durable.", caption: "Wholesale platinum manufacturing — designed for the houses that define luxury." },
];

function Home() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((s) => (s + 1) % slides.length), 6500);
    return () => clearInterval(t);
  }, []);

  return (
    <SiteLayout transparentHeader>
      {/* HERO */}
      <section className="relative h-screen w-full overflow-hidden bg-navy-deep">
        {slides.map((s, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-[1600ms] ease-in-out ${
              idx === i ? "opacity-100" : "opacity-0"
            }`}
          >
            <img src={s.image} alt="" className="h-full w-full object-cover animate-ken-burns" />
            <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/60 to-navy-deep/20" />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/95 via-transparent to-navy-deep/40" />
          </div>
        ))}

        <div className="relative z-10 flex h-full items-center">
          <div className="mx-auto max-w-7xl w-full px-6 lg:px-10">
            <div className="max-w-2xl">
              <div key={i} className="animate-fade-up">
                <div className="eyebrow text-platinum mb-6">{slides[i].eyebrow}</div>
                <h1 className="whitespace-pre-line text-5xl md:text-7xl leading-[1.02] font-light text-ivory">
                  {slides[i].title}
                </h1>
                <div className="hairline my-8 w-24" />
                <p className="text-base md:text-lg text-platinum/80 max-w-md font-light">
                  {slides[i].caption}
                </p>
                <div className="mt-10 flex flex-wrap gap-4">
                  <Link
                    to="/collection"
                    className="group inline-flex items-center gap-3 border border-platinum px-8 py-4 text-[0.7rem] uppercase tracking-[0.35em] text-ivory hover:bg-platinum hover:text-navy-deep transition-all"
                  >
                    View Collection
                    <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                  </Link>
                  <Link
                    to="/manufacturing"
                    className="inline-flex items-center px-4 py-4 text-[0.7rem] uppercase tracking-[0.35em] text-platinum hover:text-ivory transition-colors"
                  >
                    Our Manufacturing →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <button
          onClick={() => setI((s) => (s - 1 + slides.length) % slides.length)}
          className="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-10 h-11 w-11 rounded-full border border-platinum/30 text-platinum hover:bg-platinum/10 flex items-center justify-center"
          aria-label="Previous"
        >
          <ChevronLeft size={18} />
        </button>
        <button
          onClick={() => setI((s) => (s + 1) % slides.length)}
          className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-10 h-11 w-11 rounded-full border border-platinum/30 text-platinum hover:bg-platinum/10 flex items-center justify-center"
          aria-label="Next"
        >
          <ChevronRight size={18} />
        </button>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex gap-3">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setI(idx)}
              className={`h-[2px] transition-all duration-500 ${
                idx === i ? "w-14 bg-platinum" : "w-6 bg-platinum/25"
              }`}
              aria-label={`Slide ${idx + 1}`}
            />
          ))}
        </div>
      </section>

      {/* OUR STORY */}
      <section className="py-24 md:py-40 bg-navy-radial relative">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <div className="text-center max-w-3xl mx-auto">
            <div className="eyebrow mb-6">Our Story</div>
            <h2 className="font-display text-4xl md:text-6xl leading-[1.05] text-ivory font-light">
              Rarer than gold.<br />
              <span className="italic text-platinum">Made to outlive us.</span>
            </h2>
            <div className="hairline w-24 mx-auto my-10" />
            <p className="text-base md:text-lg text-platinum/80 leading-relaxed font-light">
              Pure Platinum is a manufacturing house dedicated to the world's rarest precious metal.
              From our Hyderabad atelier we supply trusted retailers, private ateliers and
              bridal houses across India — with pieces cast in 95% pure platinum, hand-finished
              by karigars whose craft has been refined across generations.
            </p>
            <div className="mt-10">
              <Link
                to="/about"
                className="inline-flex items-center gap-3 border-b border-platinum pb-1 text-[0.7rem] uppercase tracking-[0.35em] text-ivory hover:text-platinum-dark hover:border-platinum-dark transition-colors"
              >
                Read Our Story <ArrowRight size={12} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* DUAL FEATURE — Collection & Manufacturing (like shreeraj) */}
      <section className="py-16 md:py-24 bg-navy-deep">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            <Link
              to="/collection"
              className="group relative block overflow-hidden aspect-[4/5] md:aspect-[3/4]"
            >
              <img
                src={collectionRings}
                alt=""
                className="h-full w-full object-cover transition-transform duration-[1600ms] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/40 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-8 md:p-12">
                <div className="eyebrow text-platinum mb-4">Explore</div>
                <div className="font-display text-4xl md:text-5xl text-ivory italic">Collection</div>
                <div className="mt-6 flex items-center gap-3">
                  <div className="h-[1px] w-10 bg-platinum transition-all duration-500 group-hover:w-20" />
                  <span className="text-[0.6rem] uppercase tracking-[0.4em] text-platinum">View →</span>
                </div>
              </div>
            </Link>

            <Link
              to="/manufacturing"
              className="group relative block overflow-hidden aspect-[4/5] md:aspect-[3/4]"
            >
              <img
                src={craftsmanship}
                alt=""
                className="h-full w-full object-cover transition-transform duration-[1600ms] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/40 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-8 md:p-12">
                <div className="eyebrow text-platinum mb-4">Inside</div>
                <div className="font-display text-4xl md:text-5xl text-ivory italic">Manufacturing</div>
                <div className="mt-6 flex items-center gap-3">
                  <div className="h-[1px] w-10 bg-platinum transition-all duration-500 group-hover:w-20" />
                  <span className="text-[0.6rem] uppercase tracking-[0.4em] text-platinum">View →</span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CATEGORIES STRIP */}
      <section className="py-24 md:py-32 bg-[oklch(0.15_0.065_265)]">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-14 gap-6">
            <div>
              <div className="eyebrow mb-4">The Collection</div>
              <h2 className="font-display text-3xl md:text-5xl text-ivory">
                Four categories. <span className="italic text-platinum-dark">One material.</span>
              </h2>
            </div>
            <Link
              to="/collection"
              className="inline-flex items-center gap-2 text-[0.65rem] uppercase tracking-[0.35em] border-b border-platinum pb-1 text-ivory hover:text-platinum-dark hover:border-platinum-dark self-start md:self-auto"
            >
              View All <ArrowRight size={12} />
            </Link>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {[
              { img: collectionRings, name: "Rings" },
              { img: collectionEarrings, name: "Earrings" },
              { img: collectionChains, name: "Chains" },
              { img: collectionBracelets, name: "Bracelets" },
            ].map((c) => (
              <Link
                key={c.name}
                to="/collection"
                hash={c.name.toLowerCase()}
                className="group block overflow-hidden bg-navy-mid"
              >
                <div className="aspect-[4/5] overflow-hidden relative">
                  <img
                    src={c.img}
                    alt={c.name}
                    className="h-full w-full object-cover transition-transform duration-[1400ms] group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/80 via-transparent to-transparent" />
                </div>
                <div className="p-5 text-center border-t border-platinum/10">
                  <div className="font-display text-xl text-ivory">{c.name}</div>
                  <div className="mt-2 h-[1px] w-6 bg-platinum-dark mx-auto transition-all duration-500 group-hover:w-16" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* WHY PLATINUM — assurance strip */}
      <section className="py-24 md:py-32 bg-navy-deep border-y border-platinum/10">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <img src={logoWhite.url} alt="" className="h-16 w-16 mx-auto opacity-80 mb-6" />
            <div className="eyebrow mb-4">Why Platinum</div>
            <h2 className="font-display text-3xl md:text-4xl text-ivory">
              The metal of legacies.
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-6">
            {[
              { icon: Gem, n: "95%", label: "Pure Platinum" },
              { icon: ShieldCheck, n: "PT950", label: "Hallmarked" },
              { icon: Sparkles, n: "30×", label: "Rarer than Gold" },
              { icon: Award, n: "Pan-India", label: "Trade Supply" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <s.icon size={22} className="mx-auto text-platinum-dark mb-4" />
                <div className="font-display text-3xl md:text-4xl text-ivory">{s.n}</div>
                <div className="text-[0.65rem] uppercase tracking-[0.35em] text-platinum-dark mt-3">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA STRIP */}
      <section className="py-24 md:py-32 bg-navy-radial">
        <div className="mx-auto max-w-4xl px-6 lg:px-10 text-center">
          <div className="eyebrow mb-6">Trade & Wholesale</div>
          <h2 className="font-display text-4xl md:text-5xl leading-[1.05] text-ivory">
            Partner with the manufacturer<br />
            <span className="italic text-platinum">retailers trust.</span>
          </h2>
          <div className="hairline w-24 mx-auto my-10" />
          <p className="text-base md:text-lg text-platinum/80 max-w-xl mx-auto font-light">
            We supply select retailers and bridal ateliers across India with custom-manufactured
            platinum jewellery. Reach out for catalogue access, private appointments and bespoke commissions.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 bg-platinum text-navy-deep px-10 py-4 text-[0.7rem] uppercase tracking-[0.35em] hover:bg-ivory transition-colors"
            >
              Request Trade Access <ArrowRight size={14} />
            </Link>
            <Link
              to="/manufacturing"
              className="inline-flex items-center border border-platinum/50 px-10 py-4 text-[0.7rem] uppercase tracking-[0.35em] text-ivory hover:bg-platinum hover:text-navy-deep transition-all"
            >
              Tour the Atelier
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
