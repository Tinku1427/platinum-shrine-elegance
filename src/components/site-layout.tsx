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

// Split around the centred logo (Home is reached via the logo)
const NAV_LEFT = [
  { label: "Our Story", to: "/about" as const },
  { label: "Collection", to: "/collection" as const },
];
const NAV_RIGHT = [
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

function Wordmark({ dark = true, size = "text-[1.15rem]" }: { dark?: boolean; size?: string }) {
  return (
    <Link to="/" aria-label="Pure Platinum — home" className="group inline-flex items-center gap-3">
      <img src={dark ? logoDark : logoWhite} alt="" className="h-6 w-6 object-contain" aria-hidden="true" />
      <span
        className={`font-display ${size} tracking-[0.32em] pl-[0.32em] ${dark ? "text-[#2A2521]" : "text-white"}`}
      >
        PURE&nbsp;PLATINUM
      </span>
    </Link>
  );
}

export function SiteHeader({ transparent = false }: { transparent?: boolean }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { location } = useRouterState();
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);
  useEffect(() => {
    if (!transparent) return;
    const onScroll = () => setScrolled(window.scrollY > 48);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [transparent]);

  const solid = !transparent || scrolled;
  const navLink =
    "text-[14px] font-medium uppercase tracking-[0.2em] text-[#2A2521]/80 hover:text-[#A08D84] transition-colors duration-300";

  return (
    <>
      <header
        className={`${transparent ? "absolute" : "sticky"} top-0 left-0 right-0 z-50 transition-colors duration-500 ${
          solid ? "bg-[#F4F0E7]/90 backdrop-blur-md border-b border-[#D8D0C6]" : "bg-transparent"
        }`}
      >
        {/* Desktop: centred logo with the nav split around it */}
        <div className="hidden md:grid grid-cols-[1fr_auto_1fr] items-center px-10 lg:px-16 py-6">
          <nav className="flex items-center gap-8 lg:gap-12">
            {NAV_LEFT.map((l) => (
              <Link key={l.to} to={l.to} className={navLink} activeProps={{ className: "text-[#2A2521]" }}>
                {l.label}
              </Link>
            ))}
          </nav>
          <div className="justify-self-center">
            <Wordmark dark />
          </div>
          <nav className="flex items-center gap-8 lg:gap-12 justify-self-end">
            {NAV_RIGHT.map((l) => (
              <Link key={l.to} to={l.to} className={navLink} activeProps={{ className: "text-[#2A2521]" }}>
                {l.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Mobile: hamburger left, centred wordmark */}
        <div className="md:hidden relative flex items-center justify-center px-5 py-5">
          <button
            onClick={() => setOpen(true)}
            className="absolute left-5 top-1/2 -translate-y-1/2 text-[#2A2521]/80 hover:text-[#2A2521] transition-colors"
            aria-label="Open menu"
          >
            <Menu size={24} strokeWidth={1.25} />
          </button>
          <Wordmark dark size="text-[0.95rem]" />
        </div>
      </header>

      {/* Mobile drawer — charcoal; single source of navigation on mobile */}
      {open && (
        <div className="md:hidden fixed inset-0 z-[60] bg-[#1B1B1B]">
          <div className="flex items-center justify-between px-5 py-5 border-b border-white/10">
            <Wordmark dark={false} size="text-[0.95rem]" />
            <button
              onClick={() => setOpen(false)}
              className="text-white/90 hover:text-white transition-colors"
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
                className="py-4 text-[14px] font-medium uppercase tracking-[0.2em] text-white/85 hover:text-[#C8B7AE] border-b border-white/10 last:border-0 text-center transition-colors"
                activeProps={{ className: "text-[#C8B7AE]" }}
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
    <footer className="bg-[#111111]">
      {/* Instagram gallery — each tile links to the profile */}
      <div className="bg-[#1B1B1B] py-14 border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <a
            href={IG_URL}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-3 mb-8 text-white/80 hover:text-white transition-colors"
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
      <div className="py-14 border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 flex flex-col items-center gap-7">
          <BrandLogo variant="white" className="h-16 w-16 md:h-20 md:w-20" />

          <div className="text-[0.62rem] uppercase tracking-[0.4em] text-white/55 text-center px-4">
            © {new Date().getFullYear()} Pure Platinum · All rights reserved
          </div>

          <div className="flex gap-4 mt-1">
            <a
              href={IG_URL}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="h-9 w-9 border border-white/20 flex items-center justify-center text-white/80 hover:text-white hover:border-white/50 transition-colors"
            >
              <Instagram size={14} strokeWidth={1.5} />
            </a>
            <a
              href="#"
              aria-label="Facebook"
              className="h-9 w-9 border border-white/20 flex items-center justify-center text-white/80 hover:text-white hover:border-white/50 transition-colors"
            >
              <Facebook size={14} strokeWidth={1.5} />
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="h-9 w-9 border border-white/20 flex items-center justify-center text-white/80 hover:text-white hover:border-white/50 transition-colors"
            >
              <Linkedin size={14} strokeWidth={1.5} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export function SiteLayout({
  children,
  transparentHeader = false,
}: {
  children: ReactNode;
  transparentHeader?: boolean;
}) {
  return (
    <div className="min-h-screen bg-navy-deep text-ivory flex flex-col">
      <SiteHeader transparent={transparentHeader} />
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
