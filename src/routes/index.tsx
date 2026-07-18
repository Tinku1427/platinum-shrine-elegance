import { createFileRoute, Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";

import { SiteLayout } from "@/components/site-layout";
import heroImage from "@/assets/hero-2.jpg";
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
      {/* HERO — full-bleed image with editorial overlay */}
      <section className="relative w-full h-screen min-h-[640px] overflow-hidden">
        <img
          src={heroImage}
          alt="Platinum jewellery worn on the hand"
          className="absolute inset-0 h-full w-full object-cover animate-ken-burns"
        />
        {/* Keep the image visible — light overlays only for legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/35 via-black/10 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

        <div className="relative z-10 h-full mx-auto max-w-7xl px-6 sm:px-10 lg:px-16 flex items-center">
          <div className="animate-fade-up max-w-2xl pt-24">
            <div className="text-[14px] font-medium uppercase tracking-[0.2em] text-[#F4EFE6]/80 pl-[0.2em] mb-8">
              European Platinum Manufacture — Est. 1987
            </div>
            <h1
              className="font-display text-[#F7F2EA] leading-[1.0] tracking-[-0.02em] text-6xl sm:text-7xl lg:text-8xl"
              style={{ textShadow: "0 2px 40px rgba(0,0,0,0.35)" }}
            >
              Form Follows
              <br />
              <span className="italic">Precision</span>
            </h1>
            <p className="mt-8 text-[#F4EFE6]/90 text-[18px] leading-[1.7] max-w-md">
              Supplying Europe's finest jewellery houses with 950 platinum. Crafted with the
              precision of the hand.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-8 md:gap-12">
              <Link
                to="/collection"
                className="group inline-flex items-center gap-3 text-[14px] font-semibold uppercase tracking-[0.08em] text-[#F7F2EA] border-b border-[#F7F2EA]/70 pb-1.5 hover:border-[#F7F2EA] transition-colors"
              >
                View Collection
                <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/manufacturing"
                className="text-[14px] font-medium uppercase tracking-[0.2em] text-[#F4EFE6]/75 hover:text-[#EAD9CE] transition-colors"
              >
                Our Atelier
              </Link>
            </div>
          </div>
        </div>

        <div className="hidden md:block absolute right-8 bottom-16 text-[11px] tracking-[0.35em] uppercase text-[#F4EFE6]/60 [writing-mode:vertical-rl]">
          Scroll
        </div>
      </section>

      {/* WHERE ENGINEERING MEETS ELEGANCE — navy band */}
      <section className="bg-navy-mid py-24 md:py-36 border-y border-champagne/15">
        <div className="mx-auto max-w-4xl px-6 lg:px-10 text-center">
          <div className="text-[0.7rem] uppercase tracking-[0.5em] text-champagne pl-[0.5em] mb-6">
            The House
          </div>
          <h2 className="font-display font-light text-3xl md:text-5xl text-ivory tracking-[0.18em] pl-[0.18em] leading-tight">
            WHERE ENGINEERING<br />MEETS ELEGANCE
          </h2>
          <div className="mx-auto mt-7 h-px w-16 bg-champagne/60" />
          <div className="mt-10 space-y-5 text-platinum/85 text-[15px] md:text-[17px] leading-[1.9] font-light">
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
              className="btn-gold hover:btn-gold-hover"
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
