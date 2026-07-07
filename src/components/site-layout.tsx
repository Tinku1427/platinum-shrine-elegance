import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import { Menu, X, Instagram, Facebook, Mail, Phone, MapPin, Clock } from "lucide-react";
import logoWhite from "@/assets/pure-platinum-logo-white.asset.json";

const NAV = [
  { label: "Home", to: "/" as const },
  { label: "Our Story", to: "/about" as const },
  { label: "Collection", to: "/collection" as const },
  { label: "Manufacturing", to: "/manufacturing" as const },
  { label: "Contact", to: "/contact" as const },
];

export function SiteHeader({ transparent = false }: { transparent?: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { location } = useRouterState();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [location.pathname]);

  const solid = !transparent || scrolled;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        solid
          ? "bg-[oklch(0.13_0.06_265/0.9)] backdrop-blur-md border-b border-platinum/10"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
        <Link to="/" className="flex items-center gap-3 group">
          <img
            src={logoWhite.url}
            alt="Pure Platinum"
            className="h-11 w-11 object-contain transition-transform duration-500 group-hover:scale-105"
          />
          <div className="hidden sm:block leading-tight">
            <div className="font-display text-base tracking-[0.35em] text-ivory">PURE PLATINUM</div>
            <div className="text-[0.55rem] tracking-[0.5em] text-platinum-dark mt-0.5">MANUFACTURERS · SINCE 2019</div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-9">
          {NAV.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-[0.7rem] uppercase tracking-[0.3em] text-platinum/80 hover:text-ivory transition-colors relative py-1"
              activeProps={{ className: "text-ivory" }}
              activeOptions={{ exact: true }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <Link
          to="/contact"
          className="hidden lg:inline-flex items-center border border-platinum/60 px-6 py-3 text-[0.65rem] uppercase tracking-[0.35em] text-ivory hover:bg-platinum hover:text-navy-deep transition-all"
        >
          Trade Enquiry
        </Link>

        <button
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden text-ivory"
          aria-label="Menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-platinum/10 bg-navy-deep/95 backdrop-blur-md">
          <nav className="flex flex-col px-6 py-6">
            {NAV.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="py-3 text-xs uppercase tracking-[0.35em] text-ivory border-b border-platinum/10 last:border-0"
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="mt-6 inline-flex justify-center border border-platinum px-6 py-3 text-[0.65rem] uppercase tracking-[0.35em] text-ivory"
            >
              Trade Enquiry
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="relative bg-[oklch(0.13_0.06_265)] text-platinum/80 border-t border-platinum/10">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20">
        <div className="grid md:grid-cols-4 gap-12 lg:gap-16">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
              <img src={logoWhite.url} alt="" className="h-10 w-10 object-contain" />
              <div className="leading-tight">
                <div className="font-display text-base tracking-[0.35em] text-ivory">PURE PLATINUM</div>
                <div className="text-[0.55rem] tracking-[0.5em] text-platinum-dark mt-0.5">NATURALLY RARE · EXCEPTIONALLY DURABLE</div>
              </div>
            </div>
            <p className="mt-6 max-w-md text-sm leading-relaxed font-light">
              A Hyderabad-based manufacturer of pure platinum jewellery, supplying trusted
              retailers, ateliers and private houses across India with heirloom-grade craftsmanship.
            </p>
            <div className="mt-8 flex gap-3">
              <a href="#" aria-label="Instagram" className="h-10 w-10 border border-platinum/25 flex items-center justify-center hover:bg-platinum hover:text-navy-deep transition-colors">
                <Instagram size={15} />
              </a>
              <a href="#" aria-label="Facebook" className="h-10 w-10 border border-platinum/25 flex items-center justify-center hover:bg-platinum hover:text-navy-deep transition-colors">
                <Facebook size={15} />
              </a>
              <a href="mailto:info@pureplatinum.com" aria-label="Email" className="h-10 w-10 border border-platinum/25 flex items-center justify-center hover:bg-platinum hover:text-navy-deep transition-colors">
                <Mail size={15} />
              </a>
            </div>
          </div>

          <div>
            <div className="eyebrow mb-5">Navigate</div>
            <ul className="space-y-3 text-sm font-light">
              {NAV.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="hover:text-ivory transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="eyebrow mb-5">Atelier</div>
            <ul className="space-y-3 text-sm font-light">
              <li className="flex items-start gap-2">
                <MapPin size={13} className="mt-1 text-platinum-dark flex-shrink-0" />
                <span>MG Road, Secunderabad<br />Hyderabad · 500003</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={13} className="text-platinum-dark" />
                <a href="tel:+917380009000" className="hover:text-ivory">+91 73 8000 9000</a>
              </li>
              <li className="flex items-center gap-2">
                <Clock size={13} className="text-platinum-dark" />
                <span>Mon–Sat · 10:30 – 20:00</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-platinum/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-[0.6rem] uppercase tracking-[0.35em] text-platinum-dark">
            © {new Date().getFullYear()} Pure Platinum · All rights reserved
          </div>
          <div className="text-[0.6rem] uppercase tracking-[0.35em] text-platinum-dark">
            Naturally Rare · Made in India
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
  eyebrow: string;
  title: ReactNode;
  subtitle?: string;
  image: string;
}) {
  return (
    <section className="relative h-[70vh] min-h-[520px] w-full overflow-hidden">
      <div className="absolute inset-0">
        <img src={image} alt="" className="h-full w-full object-cover animate-ken-burns" />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/70 via-navy-deep/60 to-navy-deep" />
      </div>
      <div className="relative z-10 flex h-full items-end pb-24">
        <div className="mx-auto max-w-7xl w-full px-6 lg:px-10">
          <div className="max-w-3xl animate-fade-up">
            <div className="eyebrow text-platinum mb-6">{eyebrow}</div>
            <h1 className="font-display text-5xl md:text-7xl leading-[1.02] text-ivory font-light">
              {title}
            </h1>
            {subtitle && (
              <>
                <div className="hairline w-24 my-8" />
                <p className="text-base md:text-lg text-platinum/80 max-w-xl font-light">
                  {subtitle}
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
