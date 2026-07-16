import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { ArrowLeft, MessageCircle, Sparkles, ShieldCheck, Gem, ChevronRight } from "lucide-react";

import logoWhite from "@/assets/pure-platinum-logo-white.asset.json";
import { products, productList } from "@/data/products";
import { SiteLayout } from "@/components/site-layout";

export const Route = createFileRoute("/product/$id")({
  loader: ({ params }) => {
    const product = products[params.id];
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Piece not found · Pure Platinum" }, { name: "robots", content: "noindex" }] };
    }
    const p = loaderData.product;
    return {
      meta: [
        { title: `${p.name} — Pure Platinum` },
        { name: "description", content: `${p.name}. ${p.description.slice(0, 140)}` },
        { property: "og:title", content: `${p.name} — Pure Platinum` },
        { property: "og:description", content: p.tagline },
        { property: "og:image", content: p.images[0] },
        { property: "og:type", content: "product" },
      ],
    };
  },
  component: ProductPage,
  notFoundComponent: () => (
    <SiteLayout>
      <div className="min-h-[70vh] flex items-center justify-center">
        <div className="text-center">
          <div className="eyebrow mb-4">404</div>
          <h1 className="font-display text-4xl mb-6 text-ivory">Piece not found</h1>
          <Link to="/collection" className="text-xs uppercase tracking-[0.3em] border-b border-platinum text-ivory pb-1">
            View collection
          </Link>
        </div>
      </div>
    </SiteLayout>
  ),
});

const WHATSAPP_NUMBER = "917380009000";

function ProductPage() {
  const { product } = Route.useLoaderData();
  const [activeImg, setActiveImg] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [product.id]);

  const whatsappMessage = encodeURIComponent(
    `Hello Pure Platinum, I'd like to enquire about the "${product.name}" (${product.category}). Please share catalogue details, availability and trade pricing.`,
  );
  const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`;

  const rotate = Math.min(scrollY * 0.4, 360);
  const scale = Math.max(1 - scrollY * 0.0005, 0.85);
  const lift = -Math.min(scrollY * 0.15, 60);

  const related = productList.filter((p) => p.id !== product.id).slice(0, 3);

  return (
    <SiteLayout>
      {/* Watermark logo backdrop */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-0 flex items-center justify-center opacity-[0.03]"
      >
        <img src={logoWhite.url} alt="" className="w-[80vmin] max-w-[900px] object-contain" />
      </div>

      {/* Breadcrumb */}
      <div className="relative z-10 pt-28 pb-4">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="flex items-center gap-2 text-[0.6rem] uppercase tracking-[0.35em] text-platinum-dark">
            <Link to="/" className="hover:text-ivory flex items-center gap-2">
              <ArrowLeft size={11} /> Home
            </Link>
            <ChevronRight size={11} />
            <Link to="/collection" className="hover:text-ivory">{product.category}</Link>
            <ChevronRight size={11} />
            <span className="text-ivory">{product.name}</span>
          </div>
        </div>
      </div>

      {/* HERO */}
      <section ref={heroRef} className="relative z-10 pb-24 md:pb-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div className="lg:sticky lg:top-28">
              <div className="relative aspect-square bg-gradient-to-br from-navy-mid via-navy to-navy-mid overflow-hidden shadow-[var(--shadow-luxe)]">
                <div
                  aria-hidden
                  className="absolute inset-0 opacity-40"
                  style={{
                    background:
                      "radial-gradient(circle at 50% 45%, oklch(0.92 0.005 260 / 0.5) 0%, oklch(0.28 0.10 266 / 0.4) 50%, transparent 75%)",
                  }}
                />
                <img
                  src={logoWhite.url}
                  alt=""
                  aria-hidden
                  className="absolute inset-0 m-auto w-3/4 opacity-[0.05] object-contain"
                />
                <div
                  className="absolute inset-0 flex items-center justify-center transition-transform duration-100 ease-out will-change-transform"
                  style={{
                    transform: `translateY(${lift}px) scale(${scale}) rotate(${rotate}deg)`,
                  }}
                >
                  <img
                    src={product.images[activeImg]}
                    alt={product.name}
                    className="w-[78%] h-[78%] object-contain drop-shadow-[0_30px_40px_rgba(0,0,0,0.5)]"
                  />
                </div>
                <Sparkles className="absolute top-8 right-8 text-platinum animate-shimmer" size={16} />
                <Sparkles className="absolute bottom-10 left-10 text-platinum animate-shimmer" size={12} style={{ animationDelay: "1s" }} />
              </div>

              {product.images.length > 1 && (
                <div className="mt-6 flex gap-3">
                  {product.images.map((img: string, i: number) => (
                    <button
                      key={i}
                      onClick={() => setActiveImg(i)}
                      className={`h-20 w-20 overflow-hidden border transition-all ${
                        i === activeImg ? "border-platinum" : "border-platinum/20 opacity-60 hover:opacity-100"
                      }`}
                    >
                      <img src={img} alt="" className="h-full w-full object-cover" />
                    </button>
                  ))}
                </div>
              )}

              <p className="mt-6 text-center text-[0.6rem] uppercase tracking-[0.35em] text-platinum-dark">
                Scroll to rotate · view every facet
              </p>
            </div>

            <div className="pt-4 lg:pt-0">
              <div className="eyebrow mb-4">{product.category}</div>
              <h1 className="font-display text-5xl md:text-6xl leading-[1.05] text-ivory">
                {product.name}
              </h1>
              <p className="font-display italic text-xl md:text-2xl text-platinum-dark mt-4">
                {product.tagline}
              </p>
              <div className="hairline w-20 my-8" />

              <p className="text-platinum/85 leading-relaxed font-light text-base md:text-lg">
                {product.description}
              </p>

              <div className="mt-10 flex items-baseline justify-between border-y border-platinum/15 py-6">
                <div>
                  <div className="text-[0.6rem] uppercase tracking-[0.35em] text-platinum-dark mb-1">Availability</div>
                  <div className="font-display text-xl text-ivory">Made to Order</div>
                </div>
                <div className="text-right">
                  <div className="text-[0.6rem] uppercase tracking-[0.35em] text-platinum-dark mb-1">Reference</div>
                  <div className="font-display text-xl text-ivory">{product.id.toUpperCase()}</div>
                </div>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-3 bg-champagne text-white px-8 py-4 text-[0.7rem] uppercase tracking-[0.35em] hover:bg-champagne-hover transition-all flex-1"
                >
                  <MessageCircle size={15} />
                  Trade Enquiry
                </a>
                <a
                  href="#specifications"
                  className="inline-flex items-center justify-center border border-platinum/50 px-8 py-4 text-[0.7rem] uppercase tracking-[0.35em] text-ivory hover:bg-platinum hover:text-navy-deep transition-all"
                >
                  Specifications
                </a>
              </div>

              <div className="mt-10 grid grid-cols-3 gap-4">
                {[
                  { icon: Gem, label: "95% Pure Platinum" },
                  { icon: ShieldCheck, label: "PT950 Hallmark" },
                  { icon: Sparkles, label: "Hand Finished" },
                ].map((a) => (
                  <div key={a.label} className="text-center">
                    <a.icon className="mx-auto text-platinum-dark mb-2" size={18} />
                    <div className="text-[0.6rem] uppercase tracking-[0.3em] text-platinum/80 leading-tight">
                      {a.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SPECIFICATIONS */}
      <section id="specifications" className="relative z-10 bg-navy-radial border-y border-platinum/10 py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <div className="text-center mb-16">
            <div className="eyebrow mb-6">The Certificate</div>
            <h2 className="font-display text-4xl md:text-5xl text-ivory">
              Purity, in <span className="italic text-platinum">every measure.</span>
            </h2>
            <div className="hairline w-20 mx-auto my-8" />
          </div>

          <div className="grid md:grid-cols-2 gap-x-16 gap-y-1">
            {Object.entries(product.specs).map(([k, v]) => (
              <div key={k} className="flex justify-between items-baseline py-5 border-b border-platinum/15">
                <div className="text-[0.65rem] uppercase tracking-[0.35em] text-platinum-dark">
                  {k.replace(/([A-Z])/g, " $1").trim()}
                </div>
                <div className="font-display text-lg md:text-xl text-ivory text-right">{v as string}</div>
              </div>
            ))}
          </div>

          <div className="mt-16 max-w-2xl mx-auto text-center">
            <p className="font-display italic text-2xl text-ivory/90 leading-relaxed">"{product.story}"</p>
          </div>
        </div>
      </section>

      {/* RELATED */}
      <section className="relative z-10 py-24 bg-navy-deep">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="flex items-end justify-between mb-12">
            <div>
              <div className="eyebrow mb-4">Also Rare</div>
              <h2 className="font-display text-3xl md:text-4xl text-ivory">Companion pieces</h2>
            </div>
            <Link to="/collection" className="hidden md:inline-flex text-[0.65rem] uppercase tracking-[0.35em] border-b border-platinum pb-1 text-ivory hover:text-platinum-dark hover:border-platinum-dark">
              View all
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {related.map((r) => (
              <Link
                key={r.id}
                to="/product/$id"
                params={{ id: r.id }}
                className="group block bg-navy-mid/40 overflow-hidden border border-platinum/10"
              >
                <div className="aspect-[4/5] overflow-hidden bg-navy-mid flex items-center justify-center">
                  <img
                    src={r.images[0]}
                    alt={r.name}
                    loading="lazy"
                    className="w-4/5 h-4/5 object-contain transition-transform duration-700 group-hover:scale-105 group-hover:rotate-12"
                  />
                </div>
                <div className="p-6">
                  <div className="text-[0.6rem] uppercase tracking-[0.35em] text-platinum-dark mb-2">
                    {r.category}
                  </div>
                  <div className="font-display text-xl text-ivory">{r.name}</div>
                  <div className="mt-3 h-[1px] w-8 bg-platinum-dark transition-all duration-500 group-hover:w-16" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Floating WhatsApp */}
      <a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-champagne text-white pl-4 pr-5 py-3 rounded-full shadow-[var(--shadow-luxe)] hover:bg-champagne-hover transition-all hover:scale-105 group"
        aria-label="Enquire on WhatsApp"
      >
        <span className="relative flex h-9 w-9 items-center justify-center rounded-full bg-navy-deep text-platinum">
          <MessageCircle size={16} />
          <span className="absolute inset-0 rounded-full bg-navy-deep/40 animate-ping" />
        </span>
        <span className="hidden sm:inline text-[0.65rem] uppercase tracking-[0.35em]">Enquire</span>
      </a>
    </SiteLayout>
  );
}
