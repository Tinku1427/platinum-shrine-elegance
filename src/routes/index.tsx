import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Menu, X, MapPin, Phone, Mail, Clock, Instagram, Facebook } from "lucide-react";

import logo from "@/assets/pure-platinum-logo.asset.json";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import collectionRings from "@/assets/collection-rings.jpg";
import collectionChains from "@/assets/collection-chains.jpg";
import collectionEarrings from "@/assets/collection-earrings.jpg";
import collectionBracelets from "@/assets/collection-bracelets.jpg";
import craftsmanship from "@/assets/craftsmanship.jpg";
import boutique from "@/assets/boutique.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

const heroSlides = [
  {
    image: hero1,
    eyebrow: "The Solitaire Edit",
    title: "Rare by nature.\nEternal by design.",
    caption: "Platinum settings hand-finished to reveal every facet of light.",
  },
  {
    image: hero2,
    eyebrow: "Bridal Atelier",
    title: "A promise, forged\nin the rarest metal.",
    caption: "Engagement rings crafted from 95% pure platinum.",
  },
  {
    image: hero3,
    eyebrow: "Everyday Essentials",
    title: "Understated.\nUnmistakably rare.",
    caption: "Chains and pendants that live with you, quietly luminous.",
  },
];

const collections = [
  { image: collectionRings, name: "Rings", count: "The Solitaire & Eternity Edit", productId: "solitaire-eternal" },
  { image: collectionEarrings, name: "Earrings", count: "Studs, Drops & Chandeliers", productId: "aurora-drops" },
  { image: collectionChains, name: "Chains", count: "Everyday & Statement", productId: "silhouette-chain" },
  { image: collectionBracelets, name: "Bracelets", count: "Tennis, Bangles & Cuffs", productId: "riviera-tennis" },
];


const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Story", href: "#story" },
  { label: "Collection", href: "#collection" },
  { label: "Craftsmanship", href: "#craft" },
  { label: "Boutique", href: "#contact" },
];

function Index() {
  const [slide, setSlide] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const t = setInterval(() => setSlide((s) => (s + 1) % heroSlides.length), 6000);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled ? "bg-background/90 backdrop-blur-md border-b border-border" : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
          <a href="#home" className="flex items-center gap-3">
            <img src={logo.url} alt="Pure Platinum" className="h-12 w-12 object-contain" />
            <div className="hidden sm:block leading-tight">
              <div className="font-display text-lg tracking-[0.25em] text-navy-deep">PURE PLATINUM</div>
              <div className="text-[0.6rem] tracking-[0.4em] text-platinum-dark">BE RARE</div>
            </div>
          </a>

          <nav className="hidden lg:flex items-center gap-10">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-xs uppercase tracking-[0.25em] text-navy-deep/80 transition-colors hover:text-navy-deep"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="hidden lg:inline-flex items-center border border-navy-deep px-6 py-3 text-[0.65rem] uppercase tracking-[0.3em] text-navy-deep transition-all hover:bg-navy-deep hover:text-ivory"
          >
            Book Appointment
          </a>

          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="lg:hidden text-navy-deep"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {menuOpen && (
          <div className="lg:hidden border-t border-border bg-background/95 backdrop-blur-md">
            <nav className="flex flex-col px-6 py-6">
              {navLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setMenuOpen(false)}
                  className="py-3 text-xs uppercase tracking-[0.3em] text-navy-deep border-b border-border/60 last:border-0"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="mt-6 inline-flex justify-center border border-navy-deep px-6 py-3 text-[0.65rem] uppercase tracking-[0.3em] text-navy-deep"
              >
                Book Appointment
              </a>
            </nav>
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="home" className="relative h-screen w-full overflow-hidden bg-navy-deep">
        {heroSlides.map((s, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-[1400ms] ease-in-out ${
              i === slide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={s.image}
              alt=""
              className="h-full w-full object-cover animate-ken-burns"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-navy-deep/80 via-navy-deep/40 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/70 via-transparent to-navy-deep/30" />
          </div>
        ))}

        <div className="relative z-10 flex h-full items-center">
          <div className="mx-auto max-w-7xl w-full px-6 lg:px-10">
            <div className="max-w-2xl text-ivory">
              <div key={slide} className="animate-fade-up">
                <div className="eyebrow text-platinum mb-6">{heroSlides[slide].eyebrow}</div>
                <h1 className="whitespace-pre-line text-5xl md:text-7xl leading-[1.02] font-light">
                  {heroSlides[slide].title}
                </h1>
                <div className="hairline my-8 w-24" />
                <p className="text-base md:text-lg text-ivory/80 max-w-md font-light">
                  {heroSlides[slide].caption}
                </p>
                <div className="mt-10 flex flex-wrap gap-4">
                  <a
                    href="#collection"
                    className="inline-flex items-center border border-platinum px-8 py-4 text-[0.7rem] uppercase tracking-[0.3em] text-ivory transition-all hover:bg-platinum hover:text-navy-deep"
                  >
                    Explore Collection
                  </a>
                  <a
                    href="#contact"
                    className="inline-flex items-center px-8 py-4 text-[0.7rem] uppercase tracking-[0.3em] text-platinum transition-colors hover:text-ivory"
                  >
                    Visit Boutique →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Controls */}
        <button
          onClick={() => setSlide((s) => (s - 1 + heroSlides.length) % heroSlides.length)}
          className="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-10 h-12 w-12 rounded-full border border-platinum/40 text-platinum hover:bg-platinum/10 flex items-center justify-center transition-all"
          aria-label="Previous"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={() => setSlide((s) => (s + 1) % heroSlides.length)}
          className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-10 h-12 w-12 rounded-full border border-platinum/40 text-platinum hover:bg-platinum/10 flex items-center justify-center transition-all"
          aria-label="Next"
        >
          <ChevronRight size={20} />
        </button>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex gap-3">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => setSlide(i)}
              className={`h-[2px] transition-all duration-500 ${
                i === slide ? "w-12 bg-platinum" : "w-6 bg-platinum/30"
              }`}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      </section>

      {/* STORY */}
      <section id="story" className="py-24 md:py-40 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5">
              <div className="eyebrow mb-6">Our Story</div>
              <h2 className="text-4xl md:text-5xl leading-tight text-navy-deep">
                Rarer than gold.<br/>
                <span className="italic text-platinum-dark">Made to outlive us.</span>
              </h2>
              <div className="hairline w-20 my-8" />
            </div>
            <div className="lg:col-span-7 space-y-6 text-navy/80 text-base md:text-lg leading-relaxed font-light">
              <p>
                Pure Platinum is a house dedicated to a single, uncompromising material — the rarest
                precious metal on earth. Thirty times scarcer than gold, denser, purer, and naturally
                white, platinum is the only metal worthy of a lifetime.
              </p>
              <p>
                Every piece we create is finished by hand in our atelier, cast in 95% pure platinum
                and set with responsibly-sourced diamonds and rare gemstones. Nothing is mass-made.
                Nothing is repeated. Each piece is quietly numbered and destined for one wearer.
              </p>
              <p className="font-display italic text-2xl text-navy-deep pt-4">
                "Be rare."
              </p>
              <div className="pt-6">
                <a
                  href="#craft"
                  className="inline-flex items-center border-b border-navy-deep pb-1 text-xs uppercase tracking-[0.3em] text-navy-deep hover:text-platinum-dark hover:border-platinum-dark transition-colors"
                >
                  Read the philosophy
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COLLECTIONS */}
      <section id="collection" className="py-24 md:py-40 bg-navy-deep text-ivory">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <div className="eyebrow text-platinum mb-6">The Collection</div>
            <h2 className="text-4xl md:text-5xl leading-tight">
              Four categories.<br/>
              <span className="italic text-platinum">Infinite provenance.</span>
            </h2>
            <div className="hairline w-20 mx-auto my-8" />
            <p className="text-ivory/70 font-light">
              Every collection is finished in solid platinum and hand-set with diamonds
              graded to the highest standards of colour and clarity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {collections.map((c) => (
              <a
                key={c.name}
                href="#contact"
                className="group relative block overflow-hidden bg-navy"
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={c.image}
                    alt={c.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/30 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500" />
                </div>
                <div className="absolute bottom-0 inset-x-0 p-6 lg:p-8">
                  <div className="text-[0.6rem] uppercase tracking-[0.35em] text-platinum mb-3">
                    {c.count}
                  </div>
                  <div className="font-display text-3xl text-ivory">{c.name}</div>
                  <div className="mt-4 h-[1px] w-8 bg-platinum transition-all duration-500 group-hover:w-16" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CRAFTSMANSHIP */}
      <section id="craft" className="py-24 md:py-40 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="relative">
              <div className="aspect-[4/5] overflow-hidden shadow-[var(--shadow-luxe)]">
                <img
                  src={craftsmanship}
                  alt="Master craftsman at work"
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -right-4 lg:-right-16 w-40 h-40 border border-platinum-dark hidden md:block" />
            </div>
            <div>
              <div className="eyebrow mb-6">Craftsmanship</div>
              <h2 className="text-4xl md:text-5xl leading-tight text-navy-deep">
                200 hours.<br/>
                <span className="italic text-platinum-dark">One piece.</span>
              </h2>
              <div className="hairline w-20 my-8" />
              <div className="space-y-6 text-navy/80 leading-relaxed font-light">
                <p>
                  Platinum is unforgiving. Denser and harder than gold, it demands the steadiest
                  hand and the most patient eye. Each of our pieces passes through the workbenches
                  of our master karigars — some of the last of their kind in India.
                </p>
                <p>
                  From wax carving to polishing, over two hundred hours may pass before a single
                  ring earns our maker's mark.
                </p>
              </div>

              <div className="mt-12 grid grid-cols-3 gap-6 border-t border-border pt-8">
                {[
                  { n: "95%", l: "Pure Platinum" },
                  { n: "VVS+", l: "Diamond Grade" },
                  { n: "1/1", l: "Numbered" },
                ].map((s) => (
                  <div key={s.l}>
                    <div className="font-display text-3xl md:text-4xl text-navy-deep">{s.n}</div>
                    <div className="text-[0.65rem] uppercase tracking-[0.25em] text-platinum-dark mt-2">
                      {s.l}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BOUTIQUE / CONTACT */}
      <section id="contact" className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={boutique} alt="" className="h-full w-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-navy-deep/85" />
        </div>

        <div className="relative py-24 md:py-40">
          <div className="mx-auto max-w-7xl px-6 lg:px-10 text-ivory">
            <div className="text-center max-w-2xl mx-auto mb-20">
              <div className="eyebrow text-platinum mb-6">The Boutique</div>
              <h2 className="text-4xl md:text-5xl leading-tight">
                Come see it<br/>
                <span className="italic text-platinum">in the light.</span>
              </h2>
              <div className="hairline w-20 mx-auto my-8" />
              <p className="text-ivory/70 font-light">
                Every appointment is private. Every showing, personal.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-10 md:gap-16 max-w-4xl mx-auto">
              <div className="text-center">
                <MapPin className="mx-auto text-platinum mb-4" size={22} />
                <div className="text-[0.65rem] uppercase tracking-[0.3em] text-platinum mb-3">Visit</div>
                <p className="text-sm text-ivory/85 leading-relaxed font-light">
                  Pure Platinum Atelier<br/>
                  1-6-56, MG Road<br/>
                  Secunderabad, 500003
                </p>
              </div>
              <div className="text-center">
                <Phone className="mx-auto text-platinum mb-4" size={22} />
                <div className="text-[0.65rem] uppercase tracking-[0.3em] text-platinum mb-3">Enquire</div>
                <p className="text-sm text-ivory/85 leading-relaxed font-light">
                  <a href="tel:+917380009000" className="hover:text-ivory">+91 73 8000 9000</a><br/>
                  <a href="mailto:hello@pureplatinum.com" className="hover:text-ivory">hello@pureplatinum.com</a>
                </p>
              </div>
              <div className="text-center">
                <Clock className="mx-auto text-platinum mb-4" size={22} />
                <div className="text-[0.65rem] uppercase tracking-[0.3em] text-platinum mb-3">Hours</div>
                <p className="text-sm text-ivory/85 leading-relaxed font-light">
                  Monday — Saturday<br/>
                  10:30 AM — 8:00 PM<br/>
                  Sundays by appointment
                </p>
              </div>
            </div>

            <div className="mt-16 flex justify-center">
              <a
                href="mailto:hello@pureplatinum.com"
                className="inline-flex items-center border border-platinum px-10 py-4 text-[0.7rem] uppercase tracking-[0.3em] text-ivory transition-all hover:bg-platinum hover:text-navy-deep"
              >
                Book a Private Appointment
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-navy-deep border-t border-platinum/10 text-ivory/70 py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img src={logo.url} alt="Pure Platinum" className="h-8 w-8 object-contain brightness-0 invert opacity-70" />
            <div className="text-[0.65rem] uppercase tracking-[0.35em]">Pure Platinum · Be Rare</div>
          </div>
          <div className="flex items-center gap-6">
            <a href="#" aria-label="Instagram" className="hover:text-platinum transition-colors"><Instagram size={16} /></a>
            <a href="#" aria-label="Facebook" className="hover:text-platinum transition-colors"><Facebook size={16} /></a>
            <a href="mailto:hello@pureplatinum.com" aria-label="Email" className="hover:text-platinum transition-colors"><Mail size={16} /></a>
          </div>
          <div className="text-[0.65rem] uppercase tracking-[0.3em]">
            © {new Date().getFullYear()} Pure Platinum
          </div>
        </div>
      </footer>
    </div>
  );
}
