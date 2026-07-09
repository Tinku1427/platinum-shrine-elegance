import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import { Menu, X, Instagram, Facebook, Linkedin } from "lucide-react";
import logoWhite from "@/assets/pure-platinum-logo-white.asset.json";
import collectionRings from "@/assets/collection-rings.jpg";
import collectionEarrings from "@/assets/collection-earrings.jpg";
import collectionChains from "@/assets/collection-chains.jpg";
import collectionBracelets from "@/assets/collection-bracelets.jpg";
import productRing from "@/assets/product-ring-1.jpg";
import productEarring from "@/assets/product-earring-1.jpg";
import productChain from "@/assets/product-chain-1.jpg";
import productBracelet from "@/assets/product-bracelet-1.jpg";

const NAV = [
  { label: "Home", to: "/" as const },
  { label: "Our Story", to: "/about" as const },
  { label: "Collection", to: "/collection" as const },
  { label: "Manufacturing", to: "/manufacturing" as const },
  { label: "Contact", to: "/contact" as const },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const { location } = useRouterState();
  useEffect(() => { setOpen(false); }, [location.pathname]);

  return (
    <header className="relative z-50 bg-navy-deep border-b border-platinum/10">
      {/* Top: centered logo alone */}
      <div className="relative flex items-center justify-center px-5 py-6 md:py-10">
        {/* mobile menu button — absolute left */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden absolute left-5 top-1/2 -translate-y-1/2 text-ivory"
          aria-label="Menu"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Desktop: full horizontal wordmark (symbol + PURE PLATINUM + tagline) */}
        <Link to="/" className="hidden md:flex items-center gap-6 group" aria-label="Pure Platinum home">
          <img
            src={logoWhite.url}
            alt=""
            className="h-24 lg:h-28 w-auto object-contain transition-transform duration-500 group-hover:scale-105"
          />
          <div className="flex flex-col items-start leading-none">
            <span className="font-display text-[2.75rem] lg:text-[3.5rem] text-ivory tracking-[0.14em] font-light">
              PURE&nbsp;PLATINUM
            </span>
            <span className="mt-3 text-[0.7rem] lg:text-[0.75rem] uppercase tracking-[0.5em] text-platinum-dark">
              Naturally Rare · Since 2019
            </span>
          </div>
        </Link>

        {/* Mobile: bigger stacked mark (the logo asset already includes PURE PLATINUM text) */}
        <Link to="/" className="md:hidden flex items-center justify-center group" aria-label="Pure Platinum home">
          <img
            src={logoWhite.url}
            alt="Pure Platinum"
            className="h-32 w-auto object-contain"
          />
        </Link>
      </div>

      {/* Desktop nav row with pipe separators (SRJ style) */}
      <nav className="hidden md:flex items-center justify-center gap-0 pb-6">
        {NAV.map((l, idx) => (
          <span key={l.to} className="flex items-center">
            <Link
              to={l.to}
              className="px-5 lg:px-7 text-[0.75rem] uppercase tracking-[0.35em] text-platinum/70 hover:text-platinum-dark transition-colors"
              activeProps={{ className: "text-platinum-dark" }}
              activeOptions={{ exact: true }}
            >
              {l.label}
            </Link>
            {idx < NAV.length - 1 && <span className="text-platinum/25 select-none">|</span>}
          </span>
        ))}
      </nav>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden border-t border-platinum/10 bg-navy-deep">
          <nav className="flex flex-col px-6 py-4">
            {NAV.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="py-3.5 text-xs uppercase tracking-[0.35em] text-ivory border-b border-platinum/10 last:border-0 text-center"
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

const IG_TILES = [
  collectionRings, collectionEarrings, collectionChains, collectionBracelets,
  productRing, productEarring, productChain, productBracelet,
];

export function SiteFooter() {
  return (
    <footer className="bg-navy-deep">
      {/* Instagram strip */}
      <div className="bg-navy-mid/60 py-14 border-t border-platinum/10">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="flex justify-center mb-8"
            aria-label="Instagram"
          >
            <Instagram size={26} className="text-platinum hover:text-ivory transition-colors" />
          </a>
          <div className="grid grid-cols-4 md:grid-cols-8 gap-2 md:gap-3">
            {IG_TILES.map((src, i) => (
              <a
                key={i}
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="block aspect-square overflow-hidden group"
              >
                <img
                  src={src}
                  alt=""
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="py-14 border-t border-platinum/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 flex flex-col items-center gap-6">
          <Link to="/" aria-label="Pure Platinum home">
            <img
              src={logoWhite.url}
              alt="Pure Platinum"
              className="h-24 md:h-28 w-auto object-contain"
            />
          </Link>

          <div className="text-[0.65rem] uppercase tracking-[0.4em] text-platinum/70 text-center px-4">
            © {new Date().getFullYear()} Pure Platinum · All rights reserved
          </div>

          <div className="flex gap-4 mt-2">
            <a href="#" aria-label="Facebook" className="h-9 w-9 bg-navy-mid flex items-center justify-center text-platinum/80 hover:text-ivory transition-colors">
              <Facebook size={14} />
            </a>
            <a href="#" aria-label="LinkedIn" className="h-9 w-9 bg-navy-mid flex items-center justify-center text-platinum/80 hover:text-ivory transition-colors">
              <Linkedin size={14} />
            </a>
            <a href="#" aria-label="Instagram" className="h-9 w-9 bg-navy-mid flex items-center justify-center text-platinum/80 hover:text-ivory transition-colors">
              <Instagram size={14} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export function SiteLayout({ children }: { children: ReactNode; transparentHeader?: boolean }) {
  return (
    <div className="min-h-screen bg-navy-deep text-ivory flex flex-col">
      <SiteHeader />
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  subtitle,
  image,
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: string;
  image: string;
}) {
  return (
    <section className="relative h-[55vh] min-h-[380px] md:h-[70vh] md:min-h-[520px] w-full overflow-hidden">
      <div className="absolute inset-0">
        <img src={image} alt="" className="h-full w-full object-cover animate-ken-burns" />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/50 via-navy-deep/40 to-navy-deep" />
      </div>
      <div className="relative z-10 flex h-full items-end pb-14 md:pb-24">
        <div className="mx-auto max-w-7xl w-full px-6 lg:px-10">
          <div className="max-w-3xl animate-fade-up">
            {eyebrow && <div className="eyebrow text-platinum mb-4 md:mb-6">{eyebrow}</div>}
            <h1 className="font-display text-4xl md:text-7xl leading-[1.05] text-ivory font-light">
              {title}
            </h1>
            {subtitle && (
              <>
                <div className="hairline w-20 md:w-24 my-6 md:my-8" />
                <p className="text-sm md:text-lg text-platinum/80 max-w-xl font-light">{subtitle}</p>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
