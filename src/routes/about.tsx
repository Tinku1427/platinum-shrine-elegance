import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site-layout";
import hero from "@/assets/hero-2.jpg";
import atelierMasters from "@/assets/atelier-masters.jpg";
import craftsmanship from "@/assets/craftsmanship.jpg";
import boutique from "@/assets/boutique.jpg";
import handsDetail from "@/assets/hands-detail.jpg";

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
              <h2 className="font-display text-3xl md:text-5xl text-ivory tracking-wide">
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

      {/* NOTE FROM FOUNDERS — SRJ style */}
      <section className="pb-24 md:pb-32">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <h2 className="font-display text-3xl md:text-5xl text-ivory tracking-wide leading-tight">
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
