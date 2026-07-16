import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { SiteLayout, PageHero } from "@/components/site-layout";
import hero from "@/assets/hero-2.jpg";
import atelierMasters from "@/assets/atelier-masters.jpg";
import craftsmanship from "@/assets/craftsmanship.jpg";
import boutique from "@/assets/boutique.jpg";
import handsDetail from "@/assets/hands-detail.jpg";
// Placeholder founder portrait — swap this asset for the real portrait when supplied.
import founderPortrait from "@/assets/atelier-masters.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Our Story — Pure Platinum Manufacturers, Hyderabad" },
      { name: "description", content: "The story of Pure Platinum — a Hyderabad manufacturing house dedicated to authentic 95% pure platinum jewellery, crafted for retailers and bridal houses across India." },
      { property: "og:title", content: "Our Story — Pure Platinum" },
      { property: "og:description", content: "A Hyderabad manufacturing house dedicated to authentic 95% pure platinum jewellery." },
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
        title={<>Rarer than gold.<br /><span className="italic text-platinum">Made to outlive us.</span></>}
        image={hero}
      />

      {/* OUR STORY — SRJ two-column */}
      <section className="py-20 md:py-32">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-start">
            <div className="md:col-span-4">
              <h2 className="font-display font-light text-3xl md:text-5xl text-ivory tracking-[0.2em] pl-[0.2em]">
                OUR STORY
              </h2>
              <div className="hairline w-20 mt-6" />
            </div>
            <div className="md:col-span-8 space-y-5 text-platinum/85 text-[15px] md:text-[17px] leading-[1.9] font-light">
              <p>
                Pure Platinum was founded on a single conviction — that the rarest metal on earth
                deserves an equally rare standard of craftsmanship. Thirty times scarcer than
                gold, naturally white, hypoallergenic and remarkably enduring, platinum is the only
                precious metal designed by nature to outlive its wearer.
              </p>
              <p>
                From our atelier in Hyderabad, we manufacture authentic platinum jewellery for a
                trusted network of retailers, bridal houses and private ateliers across India.
                Nothing leaves our workshop until it earns our maker's mark — the quiet PT950
                hallmark that assures 95% pure platinum and one hundred percent intent.
              </p>
              <p>
                Every ring, chain, earring and bracelet is cast, filed, polished and set by hand
                by karigars whose skill has been refined across generations. We work in a single
                metal, to a single standard, so that every piece we release into the world stands
                the test of the next hundred years.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOUNDER JOURNEY — full-width alternating image / text block */}
      <section className="bg-navy-radial border-y border-platinum/10 py-20 md:py-32">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <div className="text-center mb-14 md:mb-20">
            <div className="eyebrow mb-5">The Founder</div>
            <h2 className="font-display font-light text-3xl md:text-5xl text-ivory tracking-[0.18em] pl-[0.18em]">
              FOUNDER JOURNEY
            </h2>
            <div className="hairline w-20 mt-6 mx-auto" />
          </div>

          <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-center">
            {/* Portrait — placeholder until client provides the final image */}
            <div className="md:col-span-5">
              <div className="relative overflow-hidden aspect-[4/5] border border-platinum/15 shadow-[var(--shadow-luxe)]">
                <img
                  src={founderPortrait}
                  alt="Founder of Pure Platinum"
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-navy-deep/15" />
              </div>
              <div className="mt-5 text-center">
                <div className="font-display text-lg text-ivory tracking-wide">[ Founder Name ]</div>
                <div className="text-[0.62rem] uppercase tracking-[0.4em] text-champagne mt-2 pl-[0.4em]">
                  Founder &amp; Custodian of the Craft
                </div>
              </div>
            </div>

            <div className="md:col-span-7 space-y-5 text-platinum/85 text-[15px] md:text-[17px] leading-[1.9] font-light">
              <p>
                From a family legacy in fine craftsmanship to founding Pure Platinum in 2012,
                [Founder Name]'s vision was to bring the world's rarest precious metal to India's
                finest jewellery houses — and to do so without compromise. What began as a single
                bench has grown into a dedicated platinum atelier trusted by retailers, bridal
                houses and private ateliers across the country.
              </p>
              <p>
                Raised among master karigars, the founder learned early that platinum rewards
                patience and punishes shortcuts. That conviction became the house philosophy: work
                in one metal, hold to one standard, and let every piece speak quietly for itself.
                Each commission is treated less as a product and more as an heirloom in waiting.
              </p>
              <p>
                Today, that founding vision endures in every PT950 hallmark we strike — a promise
                of rarity, purity, and craftsmanship built to outlive its wearer.
              </p>
              <blockquote className="border-l-2 border-champagne/70 pl-6 mt-8 font-display italic text-xl md:text-2xl text-ivory leading-snug">
                "We do not chase trends. We manufacture pieces meant to be inherited."
              </blockquote>
              <p className="text-[0.62rem] uppercase tracking-[0.35em] text-platinum-dark pt-2">
                Placeholder copy — to be replaced with client-provided founder narrative.
              </p>
            </div>
          </div>

          {/* Premium heritage timeline */}
          <div className="mt-20 md:mt-28">
            <div className="text-center mb-14 md:mb-20">
              <div className="eyebrow mb-4">The Journey</div>
              <h3 className="font-display font-light text-2xl md:text-4xl text-ivory tracking-[0.16em] pl-[0.16em]">
                A HERITAGE IN THE MAKING
              </h3>
            </div>
            <FounderTimeline />
          </div>
        </div>
      </section>

      {/* NOTE FROM FOUNDERS — SRJ style */}
      <section className="pb-24 md:pb-32">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <h2 className="font-display font-light text-3xl md:text-5xl text-ivory tracking-[0.18em] pl-[0.18em] leading-tight">
            NOTE FROM<br />OUR FOUNDERS
          </h2>
          <div className="hairline w-20 mt-6 mb-12" />

          <div className="grid md:grid-cols-12 gap-10 md:gap-14 items-start">
            <div className="md:col-span-5">
              <div className="relative overflow-hidden aspect-[4/5] border border-platinum/15 shadow-[var(--shadow-luxe)]">
                <img
                  src={atelierMasters}
                  alt="Master jewellers at the Pure Platinum atelier"
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="mt-5 text-center">
                <div className="font-display text-lg text-ivory tracking-wide">THE PURE PLATINUM ATELIER</div>
                <div className="text-[0.65rem] uppercase tracking-[0.4em] text-platinum-dark mt-2">
                  Masters of the rarest metal
                </div>
              </div>
            </div>

            <div className="md:col-span-7 space-y-5 text-platinum/85 text-[15px] md:text-[17px] leading-[1.9] font-light">
              <p>
                We built Pure Platinum with a quiet promise — to work in one metal, and to work in
                it honestly. From our first piece to our thousandth, every ring, chain and bracelet
                is cast in 95% pure platinum, hand-finished at our bench, and released only when
                it earns our maker's mark.
              </p>
              <p>
                Platinum is a metal of legacies. It does not tarnish, it does not fade, and it does
                not compromise. We hold ourselves to the same standard — for our retail partners,
                our bridal clients, and every family who chooses a Pure Platinum piece as an
                heirloom.
              </p>
              <blockquote className="border-l-2 border-platinum pl-6 mt-8 font-display italic text-xl md:text-2xl text-ivory leading-snug">
                "To manufacture platinum jewellery of the highest purity, delivered with
                uncompromising craftsmanship — building trust that becomes a legacy."
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY — atelier interiors, like SRJ */}
      <section className="pb-24 md:pb-32">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            <div className="aspect-[4/5] overflow-hidden">
              <img src={boutique} alt="" loading="lazy" className="h-full w-full object-cover" />
            </div>
            <div className="aspect-[4/5] overflow-hidden">
              <img src={craftsmanship} alt="" loading="lazy" className="h-full w-full object-cover" />
            </div>
            <div className="aspect-[4/5] overflow-hidden">
              <img src={handsDetail} alt="" loading="lazy" className="h-full w-full object-cover" />
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

/* ---------- Founder heritage timeline (scroll-reveal) ---------- */

const TIMELINE = [
  { year: "2012", title: "The Beginning", body: "Pure Platinum is founded on a single conviction — that the rarest metal on earth deserves an equally rare standard of craftsmanship." },
  { year: "2016", title: "First Platinum Collection", body: "Our first full collection of PT950 jewellery leaves the atelier, cast, filed and finished entirely by hand." },
  { year: "2020", title: "Expansion", body: "The workshop grows into a dedicated platinum manufacturing house, trusted by retailers and bridal partners across India." },
  { year: "2026", title: "Global Manufacturing", body: "Today Pure Platinum manufactures for a curated network of retailers, bridal houses and private ateliers — with an eye on the world." },
];

function FounderTimeline() {
  return (
    <div className="relative mx-auto max-w-3xl">
      {/* vertical spine */}
      <div className="absolute left-[19px] md:left-1/2 top-2 bottom-2 w-px bg-platinum/20 md:-translate-x-1/2" aria-hidden="true" />
      <ol className="space-y-14 md:space-y-20">
        {TIMELINE.map((item, idx) => (
          <TimelineNode key={item.year} item={item} idx={idx} />
        ))}
      </ol>
    </div>
  );
}

function TimelineNode({
  item,
  idx,
}: {
  item: { year: string; title: string; body: string };
  idx: number;
}) {
  const ref = useRef<HTMLLIElement>(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.35 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const left = idx % 2 === 0;

  return (
    <li ref={ref} className={`reveal ${shown ? "reveal-in" : ""} relative pl-14 md:pl-0`}>
      {/* node marker */}
      <span className="absolute left-[13px] md:left-1/2 top-1.5 h-3 w-3 rounded-full bg-champagne ring-4 ring-navy-deep md:-translate-x-1/2" aria-hidden="true" />
      <div className={`md:grid md:grid-cols-2 md:gap-12 ${left ? "" : "md:[direction:rtl]"}`}>
        <div className={`md:[direction:ltr] ${left ? "md:text-right md:pr-12" : "md:pl-12"}`}>
          <div className="font-display text-4xl md:text-5xl text-champagne leading-none">{item.year}</div>
          <h4 className="mt-3 text-[0.7rem] uppercase tracking-[0.4em] text-platinum pl-[0.4em] md:pl-0">
            {item.title}
          </h4>
        </div>
        <div className={`mt-3 md:mt-0 md:[direction:ltr] ${left ? "md:pl-12" : "md:text-right md:pr-12"}`}>
          <p className="text-[15px] md:text-base text-platinum/75 leading-relaxed font-light max-w-sm md:inline-block">
            {item.body}
          </p>
        </div>
      </div>
    </li>
  );
}
