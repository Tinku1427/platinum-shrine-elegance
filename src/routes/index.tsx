import { createFileRoute, Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";

import { SiteLayout } from "@/components/site-layout";
import heroRing from "@/assets/product-ring-1.jpg";
import craftsmanship from "@/assets/craftsmanship.jpg";
import handsDetail from "@/assets/hands-detail.jpg";

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

function Home() {
  return (
    <SiteLayout>
      {/* HERO — split: statement left, a single platinum ring right */}
      <section className="relative w-full overflow-hidden bg-navy-deep">
        <div className="grid lg:grid-cols-2 min-h-[78vh]">
          {/* Left — statement */}
          <div className="flex items-center order-2 lg:order-1 px-6 sm:px-10 lg:px-16 py-16 lg:py-0">
            <div className="animate-fade-up max-w-xl">
              <div className="eyebrow text-platinum-dark mb-6 md:mb-8">Platinum Manufacturers · Est. 1998</div>
              <h1 className="font-display font-light text-ivory leading-[0.98] text-5xl sm:text-6xl lg:text-7xl xl:text-8xl tracking-[0.02em]">
                CRAFTING<br />PLATINUM<br />
                <span className="text-platinum">SINCE 1998</span>
              </h1>
              <p className="mt-8 md:mt-10 text-platinum/80 font-light text-[15px] md:text-base leading-relaxed max-w-md">
                Manufacturing exceptional platinum jewellery for premium jewellery houses worldwide.
              </p>
              <div className="mt-9 md:mt-11">
                <Link to="/manufacturing" className="btn-gold hover:btn-gold-hover">
                  Explore Craftsmanship <ArrowRight size={13} />
                </Link>
              </div>
            </div>
          </div>

          {/* Right — one platinum ring on charcoal */}
          <div className="relative order-1 lg:order-2 min-h-[42vh] lg:min-h-full overflow-hidden bg-navy-mid">
            <img
              src={heroRing}
              alt="A single platinum band"
              className="absolute inset-0 h-full w-full object-cover animate-ken-burns"
            />
            <div className="absolute inset-0 bg-navy-deep/30" />
            <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-navy-deep to-transparent hidden lg:block" />
          </div>
        </div>
      </section>

      {/* WHERE ENGINEERING MEETS ELEGANCE — light section (alternating rhythm) */}
      <section className="section-light py-24 md:py-36">
        <div className="mx-auto max-w-4xl px-6 lg:px-10 text-center">
          <div className="text-[0.7rem] uppercase tracking-[0.5em] text-[#7C8792] pl-[0.5em] mb-6">
            The House
          </div>
          <h2 className="font-display font-light text-3xl md:text-5xl text-[#0F1113] tracking-[0.18em] pl-[0.18em] leading-tight">
            WHERE ENGINEERING<br />MEETS ELEGANCE
          </h2>
          <div className="mx-auto mt-7 h-px w-16 bg-[#0F1113]/25" />
          <div className="mt-10 space-y-5 text-[#545A63] text-[15px] md:text-[17px] leading-[1.9] font-light">
            <p>
              Pure Platinum is a manufacturing house devoted to the world's rarest precious metal.
              Rooted in the belief that a metal thirty times scarcer than gold deserves an equally
              rare standard of craftsmanship, we manufacture authentic 95% pure platinum jewellery
              for premium jewellery houses worldwide.
            </p>
            <p>
              Naturally white, hypoallergenic and endlessly durable — every piece is cast, filed
              and finished by hand, then struck with our quiet PT950 hallmark: a promise of rarity,
              purity, and precision built to outlive its wearer.
            </p>
          </div>
          <div className="pt-11">
            <Link
              to="/about"
              className="inline-flex items-center gap-3 border border-[#0F1113]/40 rounded-[2px] px-9 py-3.5 text-[0.7rem] uppercase tracking-[0.4em] pl-[0.4em] text-[#0F1113] hover:bg-[#0F1113] hover:text-[#F7F7F5] transition-colors duration-700"
            >
              Read More <ArrowRight size={13} />
            </Link>
          </div>
        </div>
      </section>

      {/* DUAL TILES — Collection & Manufacturing (SRJ style) */}
      <section className="pb-20 md:pb-32">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <Link to="/collection" className="group relative block overflow-hidden aspect-square">
              <img
                src={handsDetail}
                alt="Explore the Pure Platinum collection"
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[1600ms] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-navy-deep/45 group-hover:bg-navy-deep/55 transition-colors" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
                <span className="font-display text-3xl md:text-4xl text-ivory leading-tight max-w-xs drop-shadow-lg">
                  Explore the Pure Platinum collection
                </span>
                <span className="mt-6 text-champagne uppercase tracking-[0.4em] text-[0.6rem] pl-[0.4em] opacity-90">
                  View
                </span>
              </div>
            </Link>

            <Link to="/manufacturing" className="group relative block overflow-hidden aspect-square">
              <img
                src={craftsmanship}
                alt="Inside the Pure Platinum atelier"
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[1600ms] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-navy-deep/50 group-hover:bg-navy-deep/60 transition-colors" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
                <span className="font-display text-3xl md:text-4xl text-ivory leading-tight max-w-xs drop-shadow-lg">
                  Inside the Pure Platinum atelier
                </span>
                <span className="mt-6 text-champagne uppercase tracking-[0.4em] text-[0.6rem] pl-[0.4em] opacity-90">
                  Discover
                </span>
              </div>
            </Link>
          </div>
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
              <a href="mailto:sales@pureplatinum.co.in" className="hover:text-ivory transition-colors">
                sales@pureplatinum.co.in
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
