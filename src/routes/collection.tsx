import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SiteLayout, PageHero } from "@/components/site-layout";
import hero from "@/assets/hero-3.jpg";
import collectionRings from "@/assets/collection-rings.jpg";
import collectionEarrings from "@/assets/collection-earrings.jpg";
import collectionChains from "@/assets/collection-chains.jpg";
import collectionBracelets from "@/assets/collection-bracelets.jpg";
import productRing from "@/assets/product-ring-1.jpg";
import productEarring from "@/assets/product-earring-1.jpg";
import productChain from "@/assets/product-chain-1.jpg";
import productBracelet from "@/assets/product-bracelet-1.jpg";

export const Route = createFileRoute("/collection")({
  head: () => ({
    meta: [
      { title: "Collection — Pure Platinum Jewellery" },
      { name: "description", content: "Explore the Pure Platinum collection — rings, earrings, chains and bracelets, all crafted in 95% pure platinum by our Hyderabad atelier." },
      { property: "og:title", content: "Collection — Pure Platinum" },
      { property: "og:description", content: "Rings, earrings, chains and bracelets — all in 95% pure platinum." },
      { property: "og:image", content: hero },
    ],
  }),
  component: Collection,
});

const categories = [
  {
    id: "rings",
    name: "Rings",
    tagline: "Solitaires, eternity bands & bridal.",
    hero: collectionRings,
    detail: productRing,
    description: "From the four-prong solitaire to full eternity bands — every ring is cast in solid PT950 platinum and hand-set with certified diamonds.",
    pieces: ["The Eternal Solitaire", "Bridal Eternity Band", "Signature Halo", "Twin-Stone Toi et Moi"],
  },
  {
    id: "earrings",
    name: "Earrings",
    tagline: "Studs, drops & chandeliers.",
    hero: collectionEarrings,
    detail: productEarring,
    description: "Pear-cut drops on platinum wire, hand-set halos and everyday diamond studs — engineered to catch light with the smallest movement.",
    pieces: ["Aurora Drop", "Solitaire Studs", "Cascade Chandelier", "Pavé Hoops"],
  },
  {
    id: "chains",
    name: "Chains",
    tagline: "Cable, box & pendant chains.",
    hero: collectionChains,
    detail: productChain,
    description: "Whisper-thin platinum cables and box chains — some finished with a single solitaire, others left pure to live on the skin every day.",
    pieces: ["Silhouette Solitaire", "Box Chain 1.2mm", "Rope Chain", "Curb Chain"],
  },
  {
    id: "bracelets",
    name: "Bracelets",
    tagline: "Tennis, bangles & cuffs.",
    hero: collectionBracelets,
    detail: productBracelet,
    description: "Articulated tennis bracelets set with matched brilliants, quiet cuffs and heirloom bangles — each secured with our invisible double-lock clasp.",
    pieces: ["Rivière Tennis", "Diamond Bangle", "Signature Cuff", "Link Bracelet"],
  },
];

function Collection() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="The Collection"
        title={<>Four categories.<br /><span className="italic text-platinum">One rare metal.</span></>}
        subtitle="Every piece cast in 95% pure platinum, hand-finished in our Hyderabad atelier."
        image={hero}
      />

      {/* Category strip */}
      <section className="sticky top-[76px] z-30 bg-navy-deep/95 backdrop-blur-md border-b border-platinum/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 flex overflow-x-auto gap-8 py-4 no-scrollbar">
          {categories.map((c) => (
            <a
              key={c.id}
              href={`#${c.id}`}
              className="text-[0.65rem] uppercase tracking-[0.35em] text-platinum/70 hover:text-ivory whitespace-nowrap"
            >
              {c.name}
            </a>
          ))}
        </div>
      </section>

      {categories.map((c, idx) => (
        <section
          key={c.id}
          id={c.id}
          className={`py-24 md:py-32 ${idx % 2 === 1 ? "bg-navy-mid" : ""}`}
        >
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${idx % 2 === 1 ? "lg:[direction:rtl]" : ""}`}>
              <div className="relative lg:[direction:ltr]">
                <div className="aspect-[4/5] overflow-hidden shadow-[var(--shadow-luxe)]">
                  <img src={c.hero} alt={c.name} className="h-full w-full object-cover" loading="lazy" />
                </div>
                <div className="hidden md:block absolute -bottom-8 -right-8 w-40 h-40 border border-platinum/40" />
                <div className="hidden md:block absolute -top-6 -left-6 w-32 h-32 bg-navy-mid p-4 shadow-[var(--shadow-soft)]">
                  <img src={c.detail} alt="" className="h-full w-full object-contain" />
                </div>
              </div>

              <div className="lg:[direction:ltr]">
                <div className="eyebrow mb-6">0{idx + 1} · Category</div>
                <h2 className="font-display text-5xl md:text-6xl text-ivory leading-tight">
                  {c.name}
                </h2>
                <p className="font-display italic text-xl text-platinum-dark mt-3">{c.tagline}</p>
                <div className="hairline w-20 my-8" />
                <p className="text-base md:text-lg text-platinum/80 leading-relaxed font-light">
                  {c.description}
                </p>

                <ul className="mt-10 space-y-3">
                  {c.pieces.map((p) => (
                    <li key={p} className="flex items-center gap-4 border-b border-platinum/10 pb-3">
                      <span className="text-[0.6rem] text-platinum-dark tracking-widest">◆</span>
                      <span className="font-display text-lg text-ivory">{p}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-10">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-3 border border-platinum px-8 py-4 text-[0.7rem] uppercase tracking-[0.35em] text-ivory hover:bg-platinum hover:text-navy-deep transition-all"
                  >
                    Enquire on this range <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Trade CTA */}
      <section className="py-24 bg-navy-radial border-t border-platinum/10">
        <div className="mx-auto max-w-3xl px-6 lg:px-10 text-center">
          <div className="eyebrow mb-6">For Retailers</div>
          <h2 className="font-display text-3xl md:text-4xl text-ivory">
            Full catalogue on request.
          </h2>
          <p className="mt-6 text-platinum/80 font-light">
            Retailers, bridal houses and private ateliers may request the complete Pure Platinum catalogue and wholesale terms.
          </p>
          <div className="mt-10">
            <Link to="/contact" className="inline-flex items-center gap-3 bg-champagne text-white px-10 py-4 text-[0.7rem] uppercase tracking-[0.35em] hover:bg-champagne-hover transition-colors">
              Request Catalogue <ArrowRight size={13} />
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
