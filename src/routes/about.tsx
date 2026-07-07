import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SiteLayout, PageHero } from "@/components/site-layout";
import hero from "@/assets/hero-2.jpg";
import craftsmanship from "@/assets/craftsmanship.jpg";
import boutique from "@/assets/boutique.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Our Story — Pure Platinum Manufacturers, Hyderabad" },
      { name: "description", content: "The story of Pure Platinum — a Hyderabad-based manufacturing house dedicated to authentic 95% pure platinum jewellery." },
      { property: "og:title", content: "Our Story — Pure Platinum" },
      { property: "og:description", content: "A Hyderabad-based manufacturing house dedicated to authentic platinum jewellery." },
      { property: "og:image", content: hero },
      { property: "og:type", content: "article" },
    ],
  }),
  component: About,
});

function About() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Our Story"
        title={<>Rarer than gold. <span className="italic text-platinum">Made to outlive us.</span></>}
        subtitle="A Hyderabad manufacturing house dedicated to the world's rarest precious metal."
        image={hero}
      />

      {/* Origin */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-14 lg:gap-20 items-start">
            <div className="lg:col-span-5">
              <div className="eyebrow mb-6">Origin</div>
              <h2 className="font-display text-4xl md:text-5xl text-ivory leading-tight">
                One metal.<br /><span className="italic text-platinum-dark">One promise.</span>
              </h2>
              <div className="hairline w-20 my-8" />
            </div>
            <div className="lg:col-span-7 space-y-6 text-platinum/80 text-base md:text-lg leading-relaxed font-light">
              <p>
                Pure Platinum was founded on a single conviction — that the rarest metal on earth
                deserves an equally rare standard of craftsmanship. Thirty times scarcer than gold,
                naturally white, hypoallergenic and endlessly durable, platinum is the only metal
                designed by nature to outlive its wearer.
              </p>
              <p>
                From our Hyderabad atelier, we manufacture pure platinum jewellery for a curated
                network of retailers, bridal houses and private ateliers across India. Nothing
                leaves our workshop until it earns our maker's mark — the quiet PT950 hallmark
                that assures 95% platinum, and 100% intent.
              </p>
              <p className="font-display italic text-2xl text-ivory pt-4">
                "Be rare."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 md:py-32 bg-navy-radial border-y border-platinum/10">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <div className="text-center mb-16">
            <div className="eyebrow mb-4">What we stand for</div>
            <h2 className="font-display text-3xl md:text-5xl text-ivory">The house code.</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              { n: "01", t: "Authenticity", d: "Every piece hallmarked PT950 — 95% pure platinum, no compromise." },
              { n: "02", t: "Craftsmanship", d: "Hand-finished by master karigars whose skill spans generations." },
              { n: "03", t: "Transparency", d: "Traceable sourcing, honest weight, certificates on every piece." },
              { n: "04", t: "Legacy", d: "Designed to be inherited — engineered to last a hundred years." },
            ].map((v) => (
              <div key={v.n} className="border-t border-platinum/20 pt-6">
                <div className="font-display text-3xl text-platinum-dark mb-4">{v.n}</div>
                <div className="font-display text-xl text-ivory mb-3">{v.t}</div>
                <p className="text-sm text-platinum/70 leading-relaxed font-light">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision / Mission */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            <div className="relative overflow-hidden aspect-[4/5] md:aspect-auto">
              <img src={craftsmanship} alt="" className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-navy-deep/40" />
              <div className="absolute inset-0 p-10 md:p-14 flex flex-col justify-end">
                <div className="eyebrow text-platinum mb-4">Our Vision</div>
                <p className="font-display text-2xl md:text-3xl text-ivory italic leading-snug">
                  To be the most trusted name in platinum jewellery — where rarity meets timeless craftsmanship.
                </p>
              </div>
            </div>
            <div className="relative overflow-hidden aspect-[4/5] md:aspect-auto">
              <img src={boutique} alt="" className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-navy-deep/50" />
              <div className="absolute inset-0 p-10 md:p-14 flex flex-col justify-end">
                <div className="eyebrow text-platinum mb-4">Our Mission</div>
                <p className="font-display text-2xl md:text-3xl text-ivory italic leading-snug">
                  To craft authentic platinum jewellery that inspires trust, celebrates individuality, and becomes a legacy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 bg-[oklch(0.15_0.065_265)]">
        <div className="mx-auto max-w-3xl px-6 lg:px-10 text-center">
          <div className="eyebrow mb-6">Continue</div>
          <h2 className="font-display text-3xl md:text-4xl text-ivory">
            See the collection, or step inside the atelier.
          </h2>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link to="/collection" className="inline-flex items-center gap-3 border border-platinum px-10 py-4 text-[0.7rem] uppercase tracking-[0.35em] text-ivory hover:bg-platinum hover:text-navy-deep transition-all">
              Collection <ArrowRight size={13} />
            </Link>
            <Link to="/manufacturing" className="inline-flex items-center gap-3 border border-platinum/40 px-10 py-4 text-[0.7rem] uppercase tracking-[0.35em] text-platinum hover:text-ivory transition-all">
              Manufacturing <ArrowRight size={13} />
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
