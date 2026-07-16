import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import { Menu, X, Instagram, Facebook, Linkedin } from "lucide-react";
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

// Instagram profile — update handle to the brand's live account.
const IG_URL = "https://www.instagram.com/pureplatinum";

/**
 * Diamond line-icon mark — thin, brilliant-cut outline in platinum.
 * Scales identically at any size; no external image dependency.
 */
function DiamondMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 44 38"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinejoin="round"
      strokeLinecap="round"
      aria-hidden="true"
      className={className}
    >
      <path d="M11 3 H33 L41 14 L22 35 L3 14 Z" />
      <path d="M3 14 H41" />
      <path d="M11 3 L16 14" />
      <path d="M33 3 L28 14" />
      <path d="M16 14 L22 35" />
      <path d="M28 14 L22 35" />
    </svg>
  );
}

/**
 * Unified brand logo — diamond mark + PURE PLATINUM wordmark + SINCE 2010.
 * Rendered at one consistent scale across desktop and mobile.
 */
function BrandLogo() {
  return (
    <Link
      to="/"
      aria-label="Pure Platinum — home"
      className="group flex flex-col items-center text-center leading-none text-ivory"
    >
      <DiamondMark className="h-7 w-7 md:h-8 md:w-8 text-platinum transition-transform duration-500 group-hover:scale-105" />
      <span className="mt-3 font-display font-light tracking-[0.34em] text-ivory text-[1.35rem] md:text-[1.7rem]">
        PURE&nbsp;PLATINUM
      </span>
      <span className="mt-2 text-champagne uppercase tracking-[0.55em] text-[0.5rem] md:text-[0.58rem] pl-[0.55em]">
        Since 2010
      </span>
    </Link>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const { location } = useRouterState();
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <>
      {/* Logo bar — one centered logo, identical on all breakpoints */}
      <div className="relative z-40 bg-navy-deep border-b border-platinum/10">
        <div className="relative flex items-center justify-center px-14 py-7 md:py-9">
          {/* Mobile: the single menu trigger, vertically centered with the logo */}
          <button
            onClick={() => setOpen(true)}
            className="md:hidden absolute left-5 top-1/2 -translate-y-1/2 text-ivory/90 hover:text-ivory transition-colors"
            aria-label="Open menu"
          >
            <Menu size={24} strokeWidth={1.25} />
          </button>

          <BrandLogo />
        </div>
      </div>

      {/* Sticky nav — desktop only; mobile navigation lives in the drawer */}
      <div className="sticky top-0 z-50 hidden md:block bg-navy-deep/95 backdrop-blur-sm border-b border-platinum/10">
        <nav className="flex items-center justify-center py-5">
          {NAV.map((l, idx) => (
            <span key={l.to} className="flex items-center">
              <Link
                to={l.to}
                className="px-5 lg:px-7 text-[0.72rem] uppercase tracking-[0.34em] text-platinum/70 hover:text-champagne transition-colors"
                activeProps={{ className: "text-champagne" }}
                activeOptions={{ exact: true }}
              >
                {l.label}
              </Link>
              {idx < NAV.length - 1 && (
                <span className="text-platinum/20 select-none" aria-hidden="true">
                  ·
                </span>
              )}
            </span>
          ))}
        </nav>
      </div>

      {/* Mobile drawer — single source of navigation on mobile */}
      {open && (
        <div className="md:hidden fixed inset-0 z-[60] bg-navy-deep">
          <div className="flex items-center justify-between px-5 py-6 border-b border-platinum/10">
            <span className="text-champagne uppercase tracking-[0.5em] text-[0.55rem] pl-[0.5em]">
              Pure Platinum
            </span>
            <button
              onClick={() => setOpen(false)}
              className="text-ivory/90 hover:text-ivory transition-colors"
              aria-label="Close menu"
            >
              <X size={24} strokeWidth={1.25} />
            </button>
          </div>
          <nav className="flex flex-col px-8 pt-6">
            {NAV.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="py-4 text-[0.8rem] uppercase tracking-[0.38em] text-ivory/90 hover:text-champagne border-b border-platinum/10 last:border-0 text-center transition-colors"
                activeProps={{ className: "text-champagne" }}
                activeOptions={{ exact: true }}
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </>
  );
}

const IG_TILES = [
  collectionRings,
  collectionEarrings,
  collectionChains,
  collectionBracelets,
  productRing,
  productEarring,
  productChain,
  productBracelet,
];

export function SiteFooter() {
  return (
    <footer className="bg-navy-deep">
      {/* Instagram gallery — each tile links to the profile */}
      <div className="bg-navy-mid/60 py-14 border-t border-platinum/10">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <a
            href={IG_URL}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-3 mb-8 text-platinum hover:text-champagne transition-colors"
            aria-label="Follow Pure Platinum on Instagram"
          >
            <Instagram size={18} strokeWidth={1.25} />
            <span className="uppercase tracking-[0.4em] text-[0.6rem] pl-[0.4em]">Follow us</span>
          </a>
          <div className="grid grid-cols-4 md:grid-cols-8 gap-2 md:gap-3">
            {IG_TILES.map((src, i) => (
              <a
                key={i}
                href={IG_URL}
                target="_blank"
                rel="noreferrer"
                className="block aspect-square overflow-hidden group"
                aria-label="View on Instagram"
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
        <div className="mx-auto max-w-7xl px-6 lg:px-10 flex flex-col items-center gap-7">
          <BrandLogo />

          <div className="text-[0.62rem] uppercase tracking-[0.4em] text-platinum/60 text-center px-4">
            © {new Date().getFullYear()} Pure Platinum · All rights reserved
          </div>

          <div className="flex gap-4 mt-1">
            <a
              href={IG_URL}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="h-9 w-9 border border-platinum/20 flex items-center justify-center text-platinum/80 hover:text-champagne hover:border-champagne/40 transition-colors"
            >
              <Instagram size={14} strokeWidth={1.5} />
            </a>
            <a
              href="#"
              aria-label="Facebook"
              className="h-9 w-9 border border-platinum/20 flex items-center justify-center text-platinum/80 hover:text-champagne hover:border-champagne/40 transition-colors"
            >
              <Facebook size={14} strokeWidth={1.5} />
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="h-9 w-9 border border-platinum/20 flex items-center justify-center text-platinum/80 hover:text-champagne hover:border-champagne/40 transition-colors"
            >
              <Linkedin size={14} strokeWidth={1.5} />
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
