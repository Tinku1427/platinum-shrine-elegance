import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Hammer, Flame, Gem, ShieldCheck, Sparkles, Ruler, Play } from "lucide-react";
import { useRef, useState } from "react";
import { SiteLayout, PageHero } from "@/components/site-layout";
import hero from "@/assets/craftsmanship.jpg";
import boutique from "@/assets/boutique.jpg";
import atelierMasters from "@/assets/atelier-masters.jpg";
import atelierFilm from "@/assets/atelier-film.mp4.asset.json";
import productRing from "@/assets/product-ring-1.jpg";
import { SITE_URL, abs } from "@/lib/site";

export const Route = createFileRoute("/manufacturing")({
  head: () => ({
    meta: [
      { title: "Manufacturing — Pure Platinum Atelier, Mumbai" },
      { name: "description", content: "Inside the Pure Platinum atelier. From wax carving to final polish — how we manufacture 95% pure platinum jewellery by hand in Mumbai." },
      { property: "og:title", content: "Manufacturing — Pure Platinum" },
      { property: "og:description", content: "How we manufacture 95% pure platinum jewellery by hand in Mumbai." },
      { property: "og:image", content: abs(hero) },
      { property: "og:url", content: `${SITE_URL}/manufacturing` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/manufacturing` }],
  }),
  component: Manufacturing,
});

const steps = [
  { n: "01", icon: Ruler, t: "Design", d: "Every piece begins as a graphite sketch and a wax model, refined until the proportion is exact — sometimes across dozens of iterations." },
  { n: "02", icon: Flame, t: "Casting", d: "Wax is cast in solid PT950 platinum at 1,770°C — a temperature few workshops in the country are equipped to handle." },
  { n: "03", icon: Hammer, t: "Forging", d: "Cast pieces are hand-worked at the bench. Because platinum is denser than gold, every prong, every taper is set by hand." },
  { n: "04", icon: Gem, t: "Stone Setting", d: "Diamonds are hand-picked, matched for color and clarity, and set individually — most under 10× magnification." },
  { n: "05", icon: Sparkles, t: "Polishing", d: "A mirror finish is achieved over multiple polishing stages using progressively finer diamond compounds." },
  { n: "06", icon: ShieldCheck, t: "Hallmarking", d: "Every piece is hallmarked PT950 and issued a certificate of authenticity — signed and numbered before it leaves the atelier." },
];

function Manufacturing() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const handlePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    v.play().catch(() => {/* no source available yet */});
    setPlaying(true);
  };
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Manufacturing"
        title={<>Platinum is unforgiving.<br /><span className="italic text-platinum">That is why we chose it.</span></>}
        subtitle="Inside the Pure Platinum atelier — where the rarest metal is worked entirely by hand."
        image={hero}
      />

      {/* Intro */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-4xl px-6 lg:px-10 text-center">
          <div className="eyebrow mb-6">The Atelier</div>
          <h2 className="font-display text-4xl md:text-5xl leading-[1.05] text-ivory">
            Platinum demands precision,<br />
            <span className="italic text-platinum-dark">patience, and mastery.</span>
          </h2>
          <div className="hairline w-24 mx-auto my-10" />
          <p className="text-base md:text-lg text-platinum/80 leading-relaxed font-light">
            Every creation begins with a vision and is brought to life through exceptional
            design, advanced technology, and the skilled hands of our artisans. From intricate
            detailing to flawless finishing, every Pure Platinum creation reflects our
            commitment to craftsmanship and perfection. Because with platinum, excellence is
            not an aspiration — it is the standard.
          </p>
        </div>
      </section>

      {/* VIDEO — inside the atelier */}
      <section className="pb-24 md:pb-32">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <div className="text-center mb-10 md:mb-14">
            <div className="eyebrow mb-4">Inside the Atelier</div>
            <h2 className="font-display text-3xl md:text-5xl text-ivory">
              Watch how a piece <span className="italic text-platinum-dark">is made.</span>
            </h2>
          </div>

          <div className="relative aspect-video w-full overflow-hidden border border-platinum/15 shadow-[var(--shadow-luxe)] bg-navy-mid">
            <video
              ref={videoRef}
              poster={atelierMasters}
              controls={playing}
              playsInline
              preload="metadata"
              className="h-full w-full object-cover"
              src={atelierFilm.url}
            />

            {!playing && (
              <button
                onClick={handlePlay}
                className="absolute inset-0 flex items-center justify-center group"
                aria-label="Play atelier film"
              >
                <span className="absolute inset-0 bg-navy-deep/40 group-hover:bg-navy-deep/30 transition-colors" />
                <span className="relative flex h-20 w-20 md:h-24 md:w-24 items-center justify-center rounded-full border border-ivory/80 bg-navy-deep/40 backdrop-blur-sm group-hover:bg-platinum group-hover:text-navy-deep transition-all">
                  <Play size={30} className="ml-1 fill-current" />
                </span>
                <span className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[0.65rem] uppercase tracking-[0.4em] text-ivory/80">
                  Play film
                </span>
              </button>
            )}
          </div>
        </div>
      </section>

      {/* WHERE ENGINEERING MEETS ELEGANCE — designer collections */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-4xl px-6 lg:px-10 text-center">
          <div className="eyebrow mb-6">Where Engineering Meets Elegance</div>
          <h2 className="font-display text-4xl md:text-5xl leading-[1.05] text-ivory">
            Created for those who<br />
            <span className="italic text-platinum-dark">seek the exceptional.</span>
          </h2>
          <div className="hairline w-24 mx-auto my-10" />
          <p className="text-base md:text-lg text-platinum/80 leading-relaxed font-light">
            Jewellery is an expression of identity. Our designer platinum collections combine
            contemporary aesthetics with timeless elegance, creating pieces that are
            distinctive, sophisticated, and unforgettable — from everyday luxury to statement
            creations, every design reflects the beauty and brilliance of platinum.
          </p>
        </div>
      </section>

      {/* BESPOKE PLATINUM CREATIONS */}
      <section className="py-24 md:py-32 bg-navy-mid border-y border-champagne/15">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-center">
            <div className="md:col-span-5">
              <div className="eyebrow mb-5">Bespoke Platinum Creations</div>
              <h2 className="font-display font-light text-3xl md:text-5xl text-ivory leading-tight">
                Your vision. Our expertise.<br />
                <span className="italic text-platinum-dark">One extraordinary creation.</span>
              </h2>
            </div>
            <div className="md:col-span-7 space-y-5 text-platinum/85 text-[15px] md:text-[17px] leading-[1.9] font-light">
              <p>Some moments deserve something truly unique.</p>
              <p>
                Through our bespoke design services, we collaborate with jewellery brands,
                designers, and clients to bring exclusive platinum creations to life. From
                concept development to final craftsmanship, every detail is carefully refined
                to create jewellery that is truly one of a kind.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 md:py-24 bg-navy-radial border-y border-platinum/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="text-center mb-16">
            <div className="eyebrow mb-4">The Process</div>
            <h2 className="font-display text-3xl md:text-5xl text-ivory">Six stages. One standard.</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {steps.map((s) => (
              <div
                key={s.n}
                className="group relative border border-platinum/15 p-8 lg:p-10 bg-navy-deep/50 hover:bg-navy-mid/60 transition-colors"
              >
                <div className="absolute top-6 right-6 font-display text-4xl text-platinum-dark/40">{s.n}</div>
                <s.icon size={24} className="text-platinum-dark mb-6" />
                <div className="font-display text-2xl text-ivory mb-3">{s.t}</div>
                <p className="text-sm text-platinum/70 leading-relaxed font-light">{s.d}</p>
                <div className="mt-6 h-[1px] w-8 bg-platinum-dark transition-all duration-500 group-hover:w-20" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EMPOWERING JEWELLERY STARTUPS */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <div className="grid md:grid-cols-12 gap-10 md:gap-16">
            <div className="md:col-span-5">
              <div className="eyebrow mb-5">Empowering Jewellery Startups</div>
              <h2 className="font-display font-light text-3xl md:text-5xl text-ivory leading-tight">
                Helping new brands<br />
                <span className="italic text-platinum-dark">enter the world of platinum.</span>
              </h2>
              <div className="hairline w-20 mt-8" />
              <p className="mt-8 text-platinum/80 text-[15px] leading-[1.9] font-light">
                Entering platinum jewellery requires knowledge, expertise, and the right
                partner. We help jewellery entrepreneurs transform their vision into premium
                platinum collections — because every great jewellery brand deserves the
                opportunity to create something extraordinary.
              </p>
            </div>
            <div className="md:col-span-7">
              <ul className="grid sm:grid-cols-2 gap-5">
                {[
                  "Platinum sourcing solutions",
                  "Design guidance",
                  "Manufacturing expertise",
                  "Technical understanding of platinum",
                  "Production support",
                  "Quality assurance",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 border-t border-platinum/15 pt-5">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-champagne flex-shrink-0" />
                    <span className="text-platinum/85 text-[15px] font-light leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* PLATINUM MATERIALS */}
      <section className="py-24 md:py-32 bg-navy-radial border-y border-platinum/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="text-center mb-16">
            <div className="eyebrow mb-4">Platinum Materials</div>
            <h2 className="font-display text-3xl md:text-5xl text-ivory">
              The foundation of <span className="italic text-platinum-dark">exceptional creations.</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {[
              { t: "Platinum Bars", d: "Trusted platinum bars for businesses and individuals seeking the enduring value of one of the world's rarest precious metals." },
              { t: "Platinum Granules", d: "High-quality platinum granules for jewellery manufacturers and artisans who demand purity and reliability." },
            ].map((m) => (
              <div key={m.t} className="group relative border border-platinum/15 p-10 lg:p-12 bg-navy-deep/50 hover:bg-navy-mid/60 transition-colors">
                <div className="font-display text-2xl md:text-3xl text-ivory mb-4">{m.t}</div>
                <p className="text-sm md:text-base text-platinum/70 leading-relaxed font-light">{m.d}</p>
                <div className="mt-6 h-[1px] w-8 bg-champagne transition-all duration-500 group-hover:w-20" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Numbers */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="aspect-square overflow-hidden bg-navy-mid shadow-[var(--shadow-luxe)] flex items-center justify-center">
                <img src={productRing} alt="" className="w-3/4 h-3/4 object-contain" />
              </div>
              <div className="absolute -bottom-6 -right-6 w-40 h-40 border border-platinum/40 hidden md:block" />
            </div>
            <div className="order-1 lg:order-2">
              <div className="eyebrow mb-6">By the Numbers</div>
              <h2 className="font-display text-4xl md:text-5xl text-ivory leading-tight">
                A workshop measured<br />
                <span className="italic text-platinum-dark">by hand, not by hour.</span>
              </h2>
              <div className="hairline w-20 my-8" />

              <div className="grid grid-cols-2 gap-8 mt-10">
                {[
                  { n: "200+", l: "Hours per bridal piece" },
                  { n: "1,770°C", l: "Casting temperature" },
                  { n: "PT950", l: "Every hallmark, every piece" },
                  { n: "12+", l: "Master karigars in-house" },
                ].map((s) => (
                  <div key={s.l} className="border-t border-platinum/15 pt-5">
                    <div className="font-display text-3xl md:text-4xl text-ivory">{s.n}</div>
                    <div className="text-[0.65rem] uppercase tracking-[0.3em] text-platinum-dark mt-3 leading-relaxed">
                      {s.l}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY PURE PLATINUM */}
      <section className="pb-24 md:pb-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="text-center mb-16">
            <div className="eyebrow mb-4">Why Pure Platinum</div>
            <h2 className="font-display text-3xl md:text-5xl text-ivory">
              Expertise that goes <span className="italic text-platinum-dark">beyond jewellery.</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-6">
            {[
              { t: "Platinum Specialists", d: "Our dedicated focus on platinum allows us to understand its true potential." },
              { t: "Decades Of Experience", d: "Years of jewellery expertise translated into every creation." },
              { t: "Design Excellence", d: "Creating contemporary and timeless platinum designs." },
              { t: "Manufacturing Precision", d: "Combining advanced technology with skilled craftsmanship." },
              { t: "Trusted Partnerships", d: "Supporting retailers, designers, and emerging jewellery brands." },
            ].map((w) => (
              <div key={w.t} className="border-t border-platinum/15 pt-6">
                <div className="font-display text-lg md:text-xl text-ivory mb-3">{w.t}</div>
                <p className="text-sm text-platinum/70 leading-relaxed font-light">{w.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trade CTA banner */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={boutique} alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-navy-deep/85" />
        </div>
        <div className="relative py-24 md:py-32">
          <div className="mx-auto max-w-3xl px-6 lg:px-10 text-center">
            <div className="eyebrow mb-6">Manufacture with us</div>
            <h2 className="font-display text-3xl md:text-5xl text-ivory leading-tight">
              Custom orders. Private label.<br />
              <span className="italic text-platinum">Bridal collections.</span>
            </h2>
            <p className="mt-8 text-platinum/80 font-light max-w-xl mx-auto">
              We accept a limited number of custom manufacturing commissions each season for
              retailers, ateliers and private houses. Enquire for portfolio access and lead times.
            </p>
            <div className="mt-10">
              <Link to="/contact" className="inline-flex items-center gap-3 border border-platinum rounded-[2px] text-ivory px-10 py-4 text-[0.7rem] uppercase tracking-[0.35em] hover:bg-ivory hover:text-navy-deep transition-colors duration-700">
                Start a Commission <ArrowRight size={13} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
