import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import { Menu, X, Instagram, Facebook, Linkedin } from "lucide-react";
import logoDark from "@/assets/pure-platinum-mark-dark.png";
import logoWhite from "@/assets/pure-platinum-mark-white.png";
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
 * Brand logo — the Pure Platinum monogram mark only (no wordmark, no tagline).
 * One consistent scale across desktop and mobile.
 */
function BrandLogo({
  className = "h-14 w-14 md:h-16 md:w-16",
  variant = "dark",
}: {
  className?: string;
  variant?: "dark" | "white";
}) {
  return (
    <Link
      to="/"
      aria-label="Pure Platinum — home"
      className="group inline-flex items-center justify-center"
    >
      <img
        src={variant === "white" ? logoWhite : logoDark}
        alt="Pure Platinum"
        className={`${className} w-auto object-contain transition-transform duration-500 group-hover:scale-105`}
      />
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
      {/* Logo bar — navy, white logo (matches Forevermark's top bar before scrolling) */}
      <div className="relative z-40 bg-[#10193A] border-b border-[#0A1229]">
        <div className="relative flex items-center justify-center px-14 py-6 md:py-7">
          <button
            onClick={() => setOpen(true)}
            className="md:hidden absolute left-5 top-1/2 -translate-y-1/2 text-white/80 hover:text-white transition-colors"
            aria-label="Open menu"
          >
            <Menu size={24} strokeWidth={1.25} />
          </button>
          <BrandLogo variant="white" className="h-12 w-12 md:h-14 md:w-14" />
        </div>
      </div>

      {/* Sticky nav — white, navy text (matches Forevermark's compact bar once scrolled) */}
      <div className="sticky top-0 z-50 hidden md:block bg-[#FFFFFF]/95 backdrop-blur-md border-b border-[#E3DDD0]">
        <nav className="flex items-center justify-center py-4">
          {NAV.map((l, idx) => (
            <span key={l.to} className="flex items-center">
              <Link
                to={l.to}
                className="px-5 lg:px-7 text-[13px] font-medium uppercase tracking-[0.2em] text-[#10193A]/75 hover:text-[#16234A] transition-colors"
                activeProps={{ className: "text-[#10193A]" }}
                activeOptions={{ exact: true }}
              >
                {l.label}
              </Link>
              {idx < NAV.length - 1 && (
                <span className="text-[#10193A]/25 select-none" aria-hidden="true">
                  ·
                </span>
              )}
            </span>
          ))}
        </nav>
      </div>

      {/* Mobile drawer — white, navy text */}
      {open && (
        <div className="md:hidden fixed inset-0 z-[60] bg-[#FFFFFF]">
          <div className="flex items-center justify-between px-5 py-5 border-b border-[#E3DDD0]">
            <img src={logoDark} alt="Pure Platinum" className="h-9 w-auto object-contain" />
            <button
              onClick={() => setOpen(false)}
              className="text-[#10193A]/80 hover:text-[#10193A] transition-colors"
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
                className="py-4 text-[14px] font-medium uppercase tracking-[0.2em] text-[#10193A]/80 hover:text-[#16234A] border-b border-[#E3DDD0] last:border-0 text-center transition-colors"
                activeProps={{ className: "text-[#16234A]" }}
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
    <footer className="bg-[#FFFFFF]">
      {/* Instagram gallery — each tile links to the profile */}
      <div className="bg-[#F1E7D8] py-14 border-t border-[#E3DDD0]">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <a
            href={IG_URL}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-3 mb-8 text-[#10193A]/80 hover:text-[#10193A] transition-colors"
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
      <div className="py-14 border-t border-[#E3DDD0]">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 flex flex-col items-center gap-7">
          <BrandLogo variant="dark" className="h-16 w-16 md:h-20 md:w-20" />

          <div className="text-[0.62rem] uppercase tracking-[0.4em] text-[#10193A]/55 text-center px-4">
            © {new Date().getFullYear()} Pure Platinum · All rights reserved
          </div>

          <div className="flex gap-4 mt-1">
            <a
              href={IG_URL}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="h-9 w-9 border border-[#10193A]/20 flex items-center justify-center text-[#10193A]/80 hover:text-[#10193A] hover:border-[#10193A]/50 transition-colors"
            >
              <Instagram size={14} strokeWidth={1.5} />
            </a>
            <a
              href="#"
              aria-label="Facebook"
              className="h-9 w-9 border border-[#10193A]/20 flex items-center justify-center text-[#10193A]/80 hover:text-[#10193A] hover:border-[#10193A]/50 transition-colors"
            >
              <Facebook size={14} strokeWidth={1.5} />
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="h-9 w-9 border border-[#10193A]/20 flex items-center justify-center text-[#10193A]/80 hover:text-[#10193A] hover:border-[#10193A]/50 transition-colors"
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
