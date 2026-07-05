import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { ArrowLeft, Menu, X, MessageCircle, Sparkles, ShieldCheck, Gem, ChevronRight } from "lucide-react";

import logo from "@/assets/pure-platinum-logo.asset.json";
import { products, productList } from "@/data/products";

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
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:image", content: p.images[0] },
      ],
    };
  },
  component: ProductPage,
  notFoundComponent: () => (
    <div className="min-h-screen flex items-center justify-center bg-background text-navy-deep">
      <div className="text-center">
        <div className="eyebrow mb-4">404</div>
        <h1 className="font-display text-4xl mb-6">Piece not found</h1>
        <Link to="/" className="text-xs uppercase tracking-[0.3em] border-b border-navy-deep pb-1">
          Return home
        </Link>
      </div>
    </div>
  ),
});

const WHATSAPP_NUMBER = "917380009000";

function ProductPage() {
  const { product } = Route.useLoaderData();
  const [activeImg, setActiveImg] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
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
    `Hello Pure Platinum, I'd like to enquire about the "${product.name}" (${product.category}). Could you share more details and availability?`,
  );
  const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`;

  // Ring rotation tied to scroll for cinematic reveal
  const rotate = Math.min(scrollY * 0.4, 360);
  const scale = Math.max(1 - scrollY * 0.0005, 0.85);
  const lift = -Math.min(scrollY * 0.15, 60);

  const related = productList.filter((p) => p.id !== product.id).slice(0, 3);

  return (
    <div className="min-h-screen bg-background text-navy-deep relative overflow-hidden">
      {/* Watermark logo backdrop */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-0 flex items-center justify-center opacity-[0.035]"
      >
        <img src={logo.url} alt="" className="w-[80vmin] max-w-[900px] object-contain" />
      </div>

      {/* NAV */}
      <header className="fixed inset-x-0 top-0 z-50 bg-background/85 backdrop-blur-md border-b border-border">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
          <Link to="/" className="flex items-center gap-3">
            <img src={logo.url} alt="Pure Platinum" className="h-11 w-11 object-contain" />
            <div className="hidden sm:block leading-tight">
              <div className="font-display text-lg tracking-[0.25em] text-navy-deep">PURE PLATINUM</div>
              <div className="text-[0.6rem] tracking-[0.4em] text-platinum-dark">BE RARE</div>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-10">
            <Link to="/" className="text-xs uppercase tracking-[0.25em] text-navy-deep/80 hover:text-navy-deep">Home</Link>
            <Link to="/" hash="collection" className="text-xs uppercase tracking-[0.25em] text-navy-deep/80 hover:text-navy-deep">Collection</Link>
            <Link to="/" hash="story" className="text-xs uppercase tracking-[0.25em] text-navy-deep/80 hover:text-navy-deep">Story</Link>
            <Link to="/" hash="contact" className="text-xs uppercase tracking-[0.25em] text-navy-deep/80 hover:text-navy-deep">Boutique</Link>
          </nav>

          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:inline-flex items-center gap-2 border border-navy-deep px-5 py-3 text-[0.65rem] uppercase tracking-[0.3em] text-navy-deep transition-all hover:bg-navy-deep hover:text-ivory"
          >
            <MessageCircle size={14} /> Enquire
          </a>

          <button onClick={() => setMenuOpen((v) => !v)} className="lg:hidden text-navy-deep" aria-label="Menu">
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
        {menuOpen && (
          <div className="lg:hidden border-t border-border bg-background/95 backdrop-blur-md">
            <nav className="flex flex-col px-6 py-6">
              <Link to="/" onClick={() => setMenuOpen(false)} className="py-3 text-xs uppercase tracking-[0.3em] text-navy-deep border-b border-border/60">Home</Link>
              <Link to="/" hash="collection" onClick={() => setMenuOpen(false)} className="py-3 text-xs uppercase tracking-[0.3em] text-navy-deep border-b border-border/60">Collection</Link>
              <Link to="/" hash="contact" onClick={() => setMenuOpen(false)} className="py-3 text-xs uppercase tracking-[0.3em] text-navy-deep">Boutique</Link>
            </nav>
          </div>
        )}
      </header>

      {/* Breadcrumb */}
      <div className="relative z-10 pt-28 pb-4">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="flex items-center gap-2 text-[0.65rem] uppercase tracking-[0.3em] text-platinum-dark">
            <Link to="/" className="hover:text-navy-deep flex items-center gap-2">
              <ArrowLeft size={12} /> Home
            </Link>
            <ChevronRight size={12} />
            <Link to="/" hash="collection" className="hover:text-navy-deep">{product.category}</Link>
            <ChevronRight size={12} />
            <span className="text-navy-deep">{product.name}</span>
          </div>
        </div>
      </div>

      {/* HERO — Product with rotating image on scroll */}
      <section ref={heroRef} className="relative z-10 pb-24 md:pb-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Rotating product visual */}
            <div className="lg:sticky lg:top-28">
              <div className="relative aspect-square bg-gradient-to-br from-secondary via-background to-secondary rounded-sm overflow-hidden shadow-[var(--shadow-luxe)]">
                {/* Radial glow */}
                <div
                  aria-hidden
                  className="absolute inset-0 opacity-70"
                  style={{
                    background:
                      "radial-gradient(circle at 50% 45%, oklch(0.98 0.005 90 / 1) 0%, oklch(0.92 0.008 260 / 0.6) 50%, transparent 75%)",
                  }}
                />
                {/* Watermark inside frame */}
                <img
                  src={logo.url}
                  alt=""
                  aria-hidden
                  className="absolute inset-0 m-auto w-3/4 opacity-[0.05] object-contain"
                />
                {/* Rotating product image */}
                <div
                  className="absolute inset-0 flex items-center justify-center transition-transform duration-100 ease-out will-change-transform"
                  style={{
                    transform: `translateY(${lift}px) scale(${scale}) rotate(${rotate}deg)`,
                  }}
                >
                  <img
                    src={product.images[activeImg]}
                    alt={product.name}
                    className="w-[78%] h-[78%] object-contain drop-shadow-[0_30px_40px_rgba(15,27,61,0.25)]"
                  />
                </div>
                {/* Sparkle marks */}
                <Sparkles className="absolute top-8 right-8 text-platinum-dark animate-shimmer" size={16} />
                <Sparkles className="absolute bottom-10 left-10 text-platinum-dark animate-shimmer" size={12} style={{ animationDelay: "1s" }} />
              </div>

              {/* Thumbnails */}
              {product.images.length > 1 && (
                <div className="mt-6 flex gap-3">
                  {product.images.map((img: string, i: number) => (
                    <button
                      key={i}
                      onClick={() => setActiveImg(i)}
                      className={`h-20 w-20 overflow-hidden border transition-all ${
                        i === activeImg ? "border-navy-deep" : "border-border opacity-60 hover:opacity-100"
                      }`}
                      aria-label={`View ${i + 1}`}
                    >
                      <img src={img} alt="" className="h-full w-full object-cover" />
                    </button>
                  ))}
                </div>
              )}

              <p className="mt-6 text-center text-[0.65rem] uppercase tracking-[0.3em] text-platinum-dark">
                Scroll to rotate · view every facet
              </p>
            </div>

            {/* Details */}
            <div className="pt-4 lg:pt-0">
              <div className="eyebrow mb-4">{product.category}</div>
              <h1 className="font-display text-5xl md:text-6xl leading-[1.05] text-navy-deep">
                {product.name}
              </h1>
              <p className="font-display italic text-xl md:text-2xl text-platinum-dark mt-4">
                {product.tagline}
              </p>
              <div className="hairline w-20 my-8" />

              <p className="text-navy/80 leading-relaxed font-light text-base md:text-lg">
                {product.description}
              </p>

              <div className="mt-10 flex items-baseline justify-between border-y border-border py-6">
                <div>
                  <div className="text-[0.65rem] uppercase tracking-[0.3em] text-platinum-dark mb-1">Investment</div>
                  <div className="font-display text-2xl text-navy-deep">{product.price}</div>
                </div>
                <div className="text-right">
                  <div className="text-[0.65rem] uppercase tracking-[0.3em] text-platinum-dark mb-1">Numbered</div>
                  <div className="font-display text-2xl text-navy-deep">01 / 01</div>
                </div>
              </div>

              {/* CTAs */}
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-3 bg-navy-deep px-8 py-4 text-[0.7rem] uppercase tracking-[0.3em] text-ivory transition-all hover:bg-navy flex-1"
                >
                  <MessageCircle size={16} className="transition-transform group-hover:scale-110" />
                  Enquire on WhatsApp
                </a>
                <a
                  href="#specifications"
                  className="inline-flex items-center justify-center border border-navy-deep px-8 py-4 text-[0.7rem] uppercase tracking-[0.3em] text-navy-deep transition-all hover:bg-navy-deep hover:text-ivory"
                >
                  View Details
                </a>
              </div>

              {/* Assurance strip */}
              <div className="mt-10 grid grid-cols-3 gap-4">
                {[
                  { icon: Gem, label: "95% Pure Platinum" },
                  { icon: ShieldCheck, label: "Certified Diamonds" },
                  { icon: Sparkles, label: "Hand Finished" },
                ].map((a) => (
                  <div key={a.label} className="text-center">
                    <a.icon className="mx-auto text-platinum-dark mb-2" size={18} />
                    <div className="text-[0.6rem] uppercase tracking-[0.25em] text-navy/70 leading-tight">
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
      <section id="specifications" className="relative z-10 bg-navy-deep text-ivory py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <div className="text-center mb-16">
            <div className="eyebrow text-platinum mb-6">The Certificate</div>
            <h2 className="font-display text-4xl md:text-5xl">
              Purity, in <span className="italic text-platinum">every measure.</span>
            </h2>
            <div className="hairline w-20 mx-auto my-8" />
          </div>

          <div className="grid md:grid-cols-2 gap-x-16 gap-y-1">
            {Object.entries(product.specs).map(([k, v]) => (
              <div
                key={k}
                className="flex justify-between items-baseline py-5 border-b border-platinum/15"
              >
                <div className="text-[0.7rem] uppercase tracking-[0.3em] text-platinum">
                  {k.replace(/([A-Z])/g, " $1").trim()}
                </div>
                <div className="font-display text-lg md:text-xl text-ivory text-right">
                  {v as string}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 max-w-2xl mx-auto text-center">
            <p className="font-display italic text-2xl text-ivory/90 leading-relaxed">
              "{product.story}"
            </p>
          </div>

          <div className="mt-12 flex justify-center">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 border border-platinum px-10 py-4 text-[0.7rem] uppercase tracking-[0.3em] text-ivory transition-all hover:bg-platinum hover:text-navy-deep"
            >
              <MessageCircle size={16} /> Reserve on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* RELATED */}
      <section className="relative z-10 py-24 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="flex items-end justify-between mb-12">
            <div>
              <div className="eyebrow mb-4">Also Rare</div>
              <h2 className="font-display text-3xl md:text-4xl text-navy-deep">
                Companion pieces
              </h2>
            </div>
            <Link
              to="/"
              hash="collection"
              className="hidden md:inline-flex text-[0.65rem] uppercase tracking-[0.3em] border-b border-navy-deep pb-1 text-navy-deep hover:text-platinum-dark"
            >
              View all
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {related.map((r) => (
              <Link
                key={r.id}
                to="/product/$id"
                params={{ id: r.id }}
                className="group block bg-secondary/40 overflow-hidden"
              >
                <div className="aspect-[4/5] overflow-hidden bg-secondary flex items-center justify-center">
                  <img
                    src={r.images[0]}
                    alt={r.name}
                    loading="lazy"
                    className="w-4/5 h-4/5 object-contain transition-transform duration-700 group-hover:scale-105 group-hover:rotate-12"
                  />
                </div>
                <div className="p-6">
                  <div className="text-[0.6rem] uppercase tracking-[0.3em] text-platinum-dark mb-2">
                    {r.category}
                  </div>
                  <div className="font-display text-xl text-navy-deep">{r.name}</div>
                  <div className="mt-3 h-[1px] w-8 bg-platinum-dark transition-all duration-500 group-hover:w-16" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Floating WhatsApp button */}
      <a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-navy-deep text-ivory pl-4 pr-5 py-3 rounded-full shadow-[var(--shadow-luxe)] hover:bg-navy transition-all hover:scale-105 group"
        aria-label="Enquire on WhatsApp"
      >
        <span className="relative flex h-9 w-9 items-center justify-center rounded-full bg-platinum text-navy-deep">
          <MessageCircle size={18} />
          <span className="absolute inset-0 rounded-full bg-platinum/40 animate-ping" />
        </span>
        <span className="hidden sm:inline text-[0.65rem] uppercase tracking-[0.3em]">Enquire</span>
      </a>

      {/* Minimal footer */}
      <footer className="relative z-10 bg-navy-deep border-t border-platinum/10 text-ivory/70 py-8">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-[0.65rem] uppercase tracking-[0.35em]">© {new Date().getFullYear()} Pure Platinum · Be Rare</div>
          <Link to="/" className="text-[0.65rem] uppercase tracking-[0.3em] hover:text-platinum">Return home</Link>
        </div>
      </footer>
    </div>
  );
}
