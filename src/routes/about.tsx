import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { SiteLayout, PageHero } from "@/components/site-layout";
import hero from "@/assets/hero-2.jpg";
import atelierMasters from "@/assets/atelier-masters.jpg";
import galleryRing from "@/assets/product-ring-1.jpg";
import galleryEarring from "@/assets/product-earring-1.jpg";
import galleryChain from "@/assets/product-chain-1.jpg";
import founderPortrait from "@/assets/founder-vijay-pokharna.jpg";
import { SITE_URL, abs } from "@/lib/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Our Story — Pure Platinum Manufacturers, Mumbai" },
      { name: "description", content: "The story of Pure Platinum — founded by Vijay Pokharna on the belief that platinum deserves specialists. A Mumbai manufacturing house dedicated to authentic platinum jewellery, design, and manufacturing partnerships." },
      { property: "og:title", content: "Our Story — Pure Platinum" },
      { property: "og:description", content: "Founded by Vijay Pokharna on the belief that platinum deserves specialists." },
      { property: "og:image", content: abs(hero) },
      { property: "og:type", content: "article" },
      { property: "og:url", content: `${SITE_URL}/about` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/about` }],
  }),
  component: About,
});

function About() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Our Story"
        title={<>Because mastery<br /><span className="italic text-platinum">comes from focus.</span></>}
        subtitle="Platinum demands patience. Platinum demands precision. Platinum demands perfection. And that is exactly why we chose it."
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
                Every great journey begins with a belief. Ours began with the belief that
                platinum deserves specialists who understand its rarity, complexity, and beauty.
              </p>
              <p>
                For decades, we have been immersed in the jewellery industry, learning every
                dimension of the craft — from consumer emotions to design development, from
                manufacturing precision to the evolving needs of jewellery businesses. This
                experience shaped our philosophy: luxury is not just about what you create. It
                is about how deeply you understand your craft.
              </p>
              <p>
                When Pure Platinum was established, the vision was clear — to create a world
                where platinum is not only admired but experienced, through exceptional
                jewellery, innovative designs, and meaningful partnerships. Unlike traditional
                jewellery houses that work across multiple metals, our expertise is dedicated
                entirely to platinum.
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
            {/* Founder portrait — real photo supplied by client */}
            <div className="md:col-span-5">
              <div className="relative overflow-hidden aspect-[4/5] border border-platinum/15 shadow-[var(--shadow-luxe)]">
                <img
                  src={founderPortrait}
                  alt="Vijay Pokharna, Founder & CEO of Pure Platinum"
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-navy-deep/15" />
              </div>
              <div className="mt-5 text-center">
                <div className="font-display text-lg text-ivory tracking-wide">Vijay Pokharna</div>
                <div className="text-[0.62rem] uppercase tracking-[0.4em] text-champagne mt-2 pl-[0.4em]">
                  Founder &amp; CEO
                </div>
              </div>
            </div>

            <div className="md:col-span-7 space-y-5 text-platinum/85 text-[15px] md:text-[17px] leading-[1.9] font-light">
              <p className="font-display italic text-xl md:text-2xl text-ivory leading-snug">
                Some journeys begin with a dream. Ours began with curiosity.
              </p>
              <p>
                In 1994, Vijay Pokharna entered the jewellery industry — not to build a business,
                but to understand the craft. He learned from retail counters, workshops, and
                countless conversations with customers. Every experience added another layer to
                his understanding of what jewellery truly represents: not ornamentation, but
                emotion.
              </p>
              <p>
                Years later, he founded Pure Platinum, carrying a simple yet powerful belief —
                that platinum deserves specialists. Not because it is rare. But because every
                story entrusted to it is rare.
              </p>
              <p>
                Today, that belief continues to shape every decision, every partnership, and
                every creation that bears the Pure Platinum name.
              </p>
              <blockquote className="border-l-2 border-champagne/70 pl-6 mt-8 font-display italic text-xl md:text-2xl text-ivory leading-snug">
                "Platinum is not just a metal we work with. It is a craft we have dedicated
                ourselves to mastering."
              </blockquote>
              <p className="text-[0.62rem] uppercase tracking-[0.35em] text-platinum-dark pt-2">
                Vijay Pokharna, Founder &amp; CEO
              </p>
            </div>
          </div>

          {/* Founder's vision */}
          <div className="mt-16 md:mt-24 mx-auto max-w-3xl text-center">
            <div className="eyebrow mb-5">Founder's Vision</div>
            <p className="font-display italic text-2xl md:text-3xl text-ivory leading-snug">
              "To establish Pure Platinum as the most trusted platinum destination by creating
              exceptional jewellery, enabling innovation, and empowering jewellery businesses
              with platinum expertise."
            </p>
          </div>

          {/* Premium heritage timeline */}
          <div className="mt-20 md:mt-28">
            <div className="text-center mb-14 md:mb-20">
              <div className="eyebrow mb-4">The Journey</div>
              <h3 className="font-display font-light text-2xl md:text-4xl text-ivory tracking-[0.16em] pl-[0.16em]">
                A HERITAGE IN THE MAKING
              </h3>
            </div>
            <FounderTimeline items={TIMELINE} />
          </div>

          {/* Awards & Recognition */}
          <div className="mt-24 md:mt-32">
            <div className="text-center mb-14 md:mb-20">
              <div className="eyebrow mb-4">Recognition</div>
              <h3 className="font-display font-light text-2xl md:text-4xl text-ivory tracking-[0.16em] pl-[0.16em]">
                AWARDS &amp; RECOGNITION
              </h3>
            </div>
            <FounderTimeline items={AWARDS} />
          </div>
        </div>
      </section>

      {/* NOTE FROM THE FOUNDER — SRJ style */}
      <section className="pb-24 md:pb-32">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <h2 className="font-display font-light text-3xl md:text-5xl text-ivory tracking-[0.18em] pl-[0.18em] leading-tight">
            NOTE FROM<br />OUR FOUNDER
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
              <p>Dear Friends and Partners,</p>
              <p>
                For me, jewellery has always been more than a craft. It has been a journey of
                passion, relationships, and creating moments that last forever.
              </p>
              <p>
                Choosing platinum was a promise to honour a metal that represents purity, rarity,
                and timeless beauty. Every Pure Platinum creation carries our dedication, our
                values, and the love of everyone who brings it to life.
              </p>
              <p>
                I am grateful to everyone who has trusted us on this journey. Together, we
                continue to create something truly rare.
              </p>
              <blockquote className="border-l-2 border-platinum pl-6 mt-8 font-display italic text-xl md:text-2xl text-ivory leading-snug">
                Vijay Pokharna
              </blockquote>
              <p className="text-[0.62rem] uppercase tracking-[0.35em] text-platinum-dark">
                Founder &amp; CEO, Pure Platinum
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY — atelier interiors, like SRJ */}
      <section className="pb-24 md:pb-32">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            <div className="aspect-[4/5] overflow-hidden">
              <img src={galleryRing} alt="Platinum solitaire ring" loading="lazy" className="h-full w-full object-cover" />
            </div>
            <div className="aspect-[4/5] overflow-hidden">
              <img src={galleryEarring} alt="Platinum diamond earrings" loading="lazy" className="h-full w-full object-cover" />
            </div>
            <div className="aspect-[4/5] overflow-hidden">
              <img src={galleryChain} alt="Platinum chain with solitaire pendant" loading="lazy" className="h-full w-full object-cover" />
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

/* ---------- Founder heritage timeline (scroll-reveal) ---------- */

type TimelineItem = { year?: string; title: string; body: string };

const TIMELINE: TimelineItem[] = [
  { year: "1994", title: "The Beginning", body: "Started the journey in the jewellery industry by working in a retail jewellery store, building a strong foundation in craftsmanship, customer service, and industry expertise." },
  { year: "1999–2006", title: "Sales & Marketing", body: "Built extensive experience in jewellery sales and marketing, gaining deep market knowledge, industry insights, and strong relationships across the trade." },
  { year: "2006", title: "Founding Disha Gold", body: "Established Disha Gold in Zaveri Bazaar, Mumbai, marking the beginning of an independent entrepreneurial journey driven by trust, quality, and excellence." },
  { year: "2008", title: "The Platinum Journey", body: "Began working with platinum, recognising its rarity and immense potential, and took the first step towards specialising in premium platinum jewellery." },
  { year: "2010", title: "IIJS Exhibition", body: "Participated in the prestigious India International Jewellery Show (IIJS), strengthening the brand's presence and expanding its industry network." },
  { year: "2010", title: "Birth of Pure Platinum", body: "The vision of Pure Platinum came to life with a commitment to redefining platinum jewellery through innovation, purity, and exceptional craftsmanship." },
  { year: "2012", title: "Manufacturing Excellence", body: "Started fully automated platinum manufacturing, which later evolved into a dedicated industrial facility focused exclusively on platinum jewellery production." },
  { year: "2019", title: "PGI Certified Manufacturer", body: "Became a PGI Certified Manufacturer, reinforcing Pure Platinum's commitment to international standards of quality, authenticity, and manufacturing excellence." },
];

const AWARDS: TimelineItem[] = [
  { year: "2015", title: "First in India with Swarovski", body: "Became the first Indian company to manufacture platinum jewellery with Swarovski, setting a new benchmark for innovation in the Indian jewellery industry." },
  { year: "2015", title: "Swarovski Award", body: "Received the Swarovski Award in recognition of excellence in platinum jewellery craftsmanship and innovation." },
  { title: "IJ Jewellers' Choice Award", body: "Honoured for outstanding jewellery design and manufacturing excellence." },
  { title: "National Jewellery Award", body: "Received for excellence in jewellery craftsmanship and manufacturing." },
  { title: "Artisan Award", body: "Honoured for exceptional creativity, innovation, and excellence in jewellery design." },
];

function FounderTimeline({ items }: { items: TimelineItem[] }) {
  return (
    <div className="relative mx-auto max-w-3xl">
      {/* vertical spine */}
      <div className="absolute left-[19px] md:left-1/2 top-2 bottom-2 w-px bg-platinum/20 md:-translate-x-1/2" aria-hidden="true" />
      <ol className="space-y-14 md:space-y-20">
        {items.map((item, idx) => (
          <TimelineNode key={`${item.year ?? "n"}-${item.title}`} item={item} idx={idx} />
        ))}
      </ol>
    </div>
  );
}

function TimelineNode({
  item,
  idx,
}: {
  item: TimelineItem;
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
          {item.year && (
            <div className={`font-display leading-none text-champagne ${item.year.length > 6 ? "text-xl md:text-2xl" : "text-4xl md:text-5xl"}`}>{item.year}</div>
          )}
          <h4 className={`text-[0.7rem] uppercase tracking-[0.4em] text-platinum pl-[0.4em] md:pl-0 ${item.year ? "mt-3" : ""}`}>
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
