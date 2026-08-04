import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import { Menu, X, Instagram, Facebook, Linkedin } from "lucide-react";
import logoDark from "@/assets/pure-platinum-mark-dark.png";
import logoWhite from "@/assets/pure-platinum-mark-white.png";
import lockupDark from "@/assets/pure-platinum-logo-dark.png";
import lockupWhite from "@/assets/pure-platinum-logo-white.png";

const NAV = [
  { label: "Home", to: "/" as const },
  { label: "Our Story", to: "/about" as const },
  { label: "Collection", to: "/collection" as const },
  { label: "Manufacturing", to: "/manufacturing" as const },
  { label: "Contact", to: "/contact" as const },
];

// Instagram profile — update handle to the brand's live account.
const IG_URL = "https://www.instagram.com/pureplatinum_";

/**
 * Brand logo. `lockup` renders the full mark + PURE PLATINUM wordmark;
 * without it you get the monogram mark on its own.
 */
function BrandLogo({
  className = "h-14 w-14 md:h-16 md:w-16",
  variant = "dark",
  lockup = false,
}: {
  className?: string;
  variant?: "dark" | "white";
  lockup?: boolean;
}) {
  return (
    <Link
      to="/"
      aria-label="Pure Platinum — home"
      className="group inline-flex items-center justify-center"
    >
      <img
        src={
          lockup
            ? variant === "white" ? lockupWhite : lockupDark
            : variant === "white" ? logoWhite : logoDark
        }
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
      {/* Logo bar — full brand lockup (mark + wordmark) */}
      <div className="relative z-40 bg-[#FBF8F2] border-b border-[#DCD3C0]">
        <div className="relative flex items-center justify-center px-14 py-6 md:py-7">
          <button
            onClick={() => setOpen(true)}
            className="md:hidden absolute left-5 top-1/2 -translate-y-1/2 text-[#0F1F3D]/80 hover:text-[#0F1F3D] transition-colors"
            aria-label="Open menu"
          >
            <Menu size={24} strokeWidth={1.25} />
          </button>
          <BrandLogo variant="dark" lockup className="h-12 md:h-16" />
        </div>
      </div>

      {/* Sticky nav — one centred row, all items */}
      <div className="sticky top-0 z-50 hidden md:block bg-[#FBF8F2]/90 backdrop-blur-md border-b border-[#DCD3C0]">
        <nav className="flex items-center justify-center py-4">
          {NAV.map((l, idx) => (
            <span key={l.to} className="flex items-center">
              <Link
                to={l.to}
                className="px-5 lg:px-7 text-[13px] font-medium uppercase tracking-[0.2em] text-[#0F1F3D]/75 hover:text-[#B08D57] transition-colors"
                activeProps={{ className: "text-[#0F1F3D]" }}
                activeOptions={{ exact: true }}
              >
                {l.label}
              </Link>
              {idx < NAV.length - 1 && (
                <span className="text-[#0F1F3D]/25 select-none" aria-hidden="true">
                  ·
                </span>
              )}
            </span>
          ))}
        </nav>
      </div>

      {/* Mobile drawer — charcoal; mark only */}
      {open && (
        <div className="md:hidden fixed inset-0 z-[60] bg-[#10233F]">
          <div className="flex items-center justify-between px-5 py-5 border-b border-white/10">
            <img src={lockupWhite} alt="Pure Platinum" className="h-10 w-auto object-contain" />
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
                className="py-4 text-[14px] font-medium uppercase tracking-[0.2em] text-white/85 hover:text-[#D9C08F] border-b border-white/10 last:border-0 text-center transition-colors"
                activeProps={{ className: "text-[#D9C08F]" }}
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

export function SiteFooter() {
  return (
    <footer className="bg-navy-deep border-t border-platinum/15">
      {/* Instagram — link to the live profile. A real auto-updating feed can be
          dropped in here later; a static grid of product shots was removed because
          it never reflected new posts. */}
      <div className="bg-navy-mid py-12 border-t border-platinum/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 flex flex-col items-center gap-5 text-center">
          <div className="text-[0.6rem] uppercase tracking-[0.4em] text-platinum-dark pl-[0.4em]">
            Follow our latest work
          </div>
          <a
            href={IG_URL}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center justify-center gap-3 border border-platinum px-9 py-3.5 text-[0.65rem] uppercase tracking-[0.35em] text-ivory hover:bg-platinum hover:text-navy-deep transition-colors duration-500"
            aria-label="Follow Pure Platinum on Instagram"
          >
            <Instagram size={15} strokeWidth={1.4} className="shrink-0" />
            <span className="pl-[0.35em]">@pureplatinum_</span>
          </a>
        </div>
      </div>

      {/* Bottom */}
      <div className="py-14 border-t border-platinum/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 flex flex-col items-center gap-7">
          <BrandLogo variant="dark" className="h-16 w-16 md:h-20 md:w-20" />

          <div className="text-[0.62rem] uppercase tracking-[0.4em] text-platinum-dark text-center px-4">
            © {new Date().getFullYear()} Pure Platinum · All rights reserved
          </div>

          <div className="flex gap-4 mt-1">
            <a
              href={IG_URL}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="h-9 w-9 border border-platinum/30 flex items-center justify-center text-platinum hover:text-ivory hover:border-platinum transition-colors"
            >
              <Instagram size={14} strokeWidth={1.5} />
            </a>
            <a
              href="#"
              aria-label="Facebook"
              className="h-9 w-9 border border-platinum/30 flex items-center justify-center text-platinum hover:text-ivory hover:border-platinum transition-colors"
            >
              <Facebook size={14} strokeWidth={1.5} />
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="h-9 w-9 border border-platinum/30 flex items-center justify-center text-platinum hover:text-ivory hover:border-platinum transition-colors"
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
    <section className="w-full">
      <div className="grid md:grid-cols-[1.5fr_1fr] md:items-stretch">
        {/* Text column — left on desktop, below the image on mobile */}
        <div className="order-2 md:order-1 flex items-center bg-navy-deep px-6 lg:px-16 py-14 md:py-0">
          <div className="max-w-xl animate-fade-up mx-auto md:mx-0">
            {eyebrow && <div className="eyebrow text-champagne mb-4 md:mb-6">{eyebrow}</div>}
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl leading-[1.05] text-ivory font-light">
              {title}
            </h1>
            {subtitle && (
              <>
                <div className="hairline-solid w-20 md:w-24 my-6 md:my-8" />
                <p className="text-sm md:text-lg text-platinum/85 max-w-xl font-light">{subtitle}</p>
              </>
            )}
          </div>
        </div>

        {/* Image column — right on desktop, on top on mobile */}
        <div className="order-1 md:order-2 relative aspect-[3/4] overflow-hidden">
          {/* Container is locked to the photographs' own 3:4 ratio and the zoom is
              removed, so the full frame shows on every screen — nothing is cropped. */}
          <img
            src={image}
            alt=""
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
          {/* Blend fade — desktop only. On mobile a bottom fade sat directly over
              the necklace line, so it is deliberately omitted. */}
          <div className="hidden md:block absolute inset-y-0 left-0 w-24 lg:w-32 bg-gradient-to-r from-navy-deep to-transparent pointer-events-none" />
        </div>
      </div>
    </section>
  );
}
