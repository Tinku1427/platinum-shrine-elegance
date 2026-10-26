import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, Send, Check } from "lucide-react";
import { SiteLayout, PageHero } from "@/components/site-layout";
import hero from "@/assets/boutique.jpg";
import { SITE_URL, abs } from "@/lib/site";

export const Route = createFileRoute("/partner")({
  head: () => ({
    meta: [
      { title: "Partner With Us — Pure Platinum" },
      {
        name: "description",
        content:
          "Partner with Pure Platinum and explore a platinum jewellery retail opportunity. Dedicated retailer onboarding, product portfolio guidance and a structured partnership process across India.",
      },
      { property: "og:title", content: "Partner With Us — Pure Platinum" },
      {
        property: "og:description",
        content: "Be a part of India's growing platinum jewellery retail network.",
      },
      { property: "og:image", content: abs(hero) },
      { property: "og:url", content: `${SITE_URL}/partner` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/partner` }],
  }),
  component: Partner,
});

// Web3Forms — free form delivery to your inbox. Get a key at https://web3forms.com
// (enter info@pureplatinum.co.in there), then paste it below. Submissions are emailed automatically.
const WEB3FORMS_ACCESS_KEY = "58ed30da-4825-4e64-a4a3-54a0dd98a42a";

const HIGHLIGHTS = [
  "Dedicated Retailer Onboarding Support",
  "Personalised Business Empowerment Program",
  "Product Portfolio Guidance",
  "Structured Partnership Process",
];

const CONNECT = [
  {
    n: "01",
    t: "Explore the Product Portfolio",
    d: "Discover Pure Platinum's jewellery portfolio and understand the available product and partnership information.",
  },
  {
    n: "02",
    t: "Discuss Your Business Requirements",
    d: "Connect with our team to discuss your showroom, customer base, business objectives, and interest in platinum jewellery.",
  },
  {
    n: "03",
    t: "Understand the Partnership Process",
    d: "Get clarity on the onboarding process, commercial terms, pricing, and relevant retailer policies.",
  },
  {
    n: "04",
    t: "Take the Next Step with Confidence",
    d: "Once your requirements and the partnership terms are aligned, explore the next steps toward retailer onboarding.",
  },
];

const AUDIENCE = [
  { t: "Independent Jewellery Retailers", d: "Explore opportunities to expand your existing jewellery portfolio." },
  { t: "Jewellery Showroom Owners", d: "Discuss potential product and retail partnership opportunities." },
  { t: "Multi-Location Jewellery Businesses", d: "Explore partnership discussions for your retail locations." },
  { t: "Jewellery Business Entrepreneurs", d: "Understand the requirements for entering or expanding within the platinum jewellery category." },
];

const STEPS = [
  { n: "Step 1", t: "Register Your Interest", d: "Submit your business details through the Become Our Partner form." },
  { n: "Step 2", t: "Connect with Our Team", d: "Our business executive will reach out to understand your requirements and interest in Pure Platinum." },
  { n: "Step 3", t: "Discuss Products and Commercials", d: "Learn about the product portfolio, pricing, partnership terms, and applicable retailer policies." },
  { n: "Step 4", t: "Explore Onboarding", d: "Discuss the next steps based on mutual suitability and the agreed partnership terms." },
  { n: "Step 5", t: "Move Forward with Clarity", d: "Our team will help coordinate follow-ups and guide you through the relevant onboarding discussions." },
];

const BENEFITS = [
  "Understand the available platinum jewellery portfolio.",
  "Discuss your business needs directly with our team.",
  "Explore retailer partnership requirements and commercial terms.",
  "Get clarity on the onboarding process.",
  "Evaluate the opportunity before deciding on the next steps.",
];

const FAQ = [
  {
    q: "Who can apply to become a Pure Platinum retail partner?",
    a: "Jewellery retailers and jewellery businesses interested in exploring a partnership with Pure Platinum can submit an inquiry. Our team will discuss the relevant requirements with you.",
  },
  {
    q: "How do I learn about the product portfolio?",
    a: "Register your interest through the form. Our team can discuss the available product information and help you understand the portfolio.",
  },
  {
    q: "What are the commercial terms for retailers?",
    a: "Pricing, commercial terms, and applicable retailer policies can be discussed directly with the Pure Platinum team during the partnership conversation.",
  },
  {
    q: "How does the retailer onboarding process work?",
    a: "The process begins with your inquiry, followed by a business discussion, requirement assessment, and review of the relevant partnership details.",
  },
  {
    q: "Can retailers from different cities apply?",
    a: "Retailers can submit their details and express interest in partnering with Pure Platinum. The team can discuss opportunities based on the business requirements and expansion priorities.",
  },
  {
    q: "Is submitting the form a commitment to become a partner?",
    a: "Submitting the form expresses your interest in learning more. The partnership decision and next steps can be discussed after reviewing the relevant requirements and terms.",
  },
];

function Partner() {
  const [form, setForm] = useState({
    name: "",
    business: "",
    mobile: "",
    email: "",
    city: "",
    state: "",
    type: "Retail Store (1-3 Stores)",
    outlets: "",
    selling: "Ready Stock",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `Retail Partnership enquiry — ${form.business || form.name}`,
          from_name: "Pure Platinum — Partner Form",
          "Full Name": form.name,
          "Business / Store": form.business,
          "Mobile Number": form.mobile,
          "Business Email": form.email,
          City: form.city,
          State: form.state,
          "Type of Retailer": form.type,
          "Retail Outlets": form.outlets,
          "Platinum Business": form.selling,
          Message: form.message,
        }),
      });
      const data = await res.json();
      setStatus(data?.success ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  };

  return (
    <SiteLayout>
      <PageHero
        eyebrow="Partner With Us"
        title={
          <>
            Be a part of India's
            <br />
            <span className="italic text-platinum">growing platinum network.</span>
          </>
        }
        subtitle="Partner with Pure Platinum and explore a business opportunity in the platinum jewellery market — discover our product portfolio, understand the retailer partnership process, and grow your jewellery business."
        image={hero}
      />

      {/* INTRO — Become Our Partner + highlights */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-start">
            <div className="md:col-span-5">
              <div className="eyebrow mb-5">Become Our Partner</div>
              <h2 className="font-display text-3xl md:text-4xl text-ivory leading-tight">
                For jewellery retailers exploring platinum partnerships.
              </h2>
              <div className="hairline w-20 mt-6" />
            </div>
            <div className="md:col-span-7">
              <ul className="space-y-4">
                {HIGHLIGHTS.map((h) => (
                  <li key={h} className="flex items-start gap-4 border-b border-platinum/15 pb-4">
                    <Check size={16} className="text-champagne mt-1 flex-shrink-0" />
                    <span className="text-ivory/90 text-[15px] md:text-base">{h}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-9">
                <a href="#partner-form" className="btn-gold hover:btn-gold-hover">
                  Become Our Partner <ArrowRight size={14} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* THE OPPORTUNITY */}
      <section className="bg-navy-mid py-20 md:py-28 border-y border-champagne/15">
        <div className="mx-auto max-w-4xl px-6 lg:px-10 text-center">
          <div className="eyebrow mb-5">Introduction — The Opportunity</div>
          <h2 className="font-display text-3xl md:text-5xl text-ivory leading-tight">
            Platinum. Potential. Partnership.
          </h2>
          <div className="mx-auto mt-6 h-px w-16 bg-champagne/60" />
          <div className="mt-9 space-y-5 text-platinum/85 text-[15px] md:text-[17px] leading-[1.9]">
            <p>
              Explore what's possible when your jewellery business connects with Pure Platinum. The
              jewellery market continues to evolve, creating opportunities for retailers to explore
              new product categories and expand their offerings.
            </p>
            <p>
              Pure Platinum is building a strong retail partner network across India, connecting with
              jewellery retailers who want to explore platinum jewellery and discuss potential
              business partnerships. Whether you operate an established showroom or are exploring new
              opportunities, our team is here to understand your requirements and guide you through
              the partnership process.
            </p>
          </div>
        </div>
      </section>

      {/* WHY CONNECT — 4 steps */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <div className="text-center mb-14 md:mb-16">
            <div className="eyebrow mb-4">Why Connect With Pure Platinum</div>
            <h2 className="font-display text-3xl md:text-4xl text-ivory">
              A partnership journey built around your business.
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
            {CONNECT.map((c) => (
              <div key={c.n} className="border border-platinum/15 bg-[var(--surface-white)] p-8 lg:p-10">
                <div className="font-display text-3xl text-champagne mb-5">{c.n}</div>
                <div className="font-display text-xl text-ivory mb-3">{c.t}</div>
                <p className="text-[15px] text-platinum/80 leading-relaxed">{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHO SHOULD PARTNER */}
      <section className="bg-navy-mid py-20 md:py-28 border-y border-champagne/15">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <div className="text-center mb-14 md:mb-16">
            <div className="eyebrow mb-4">Who Should Partner With Us?</div>
            <h2 className="font-display text-3xl md:text-4xl text-ivory">
              Ready to explore platinum jewellery for your business?
            </h2>
            <p className="mt-5 text-platinum/80 max-w-2xl mx-auto">
              Pure Platinum welcomes conversations with jewellery retailers interested in exploring a
              potential partnership. This opportunity may be relevant for:
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
            {AUDIENCE.map((a) => (
              <div key={a.t} className="border-t border-champagne/30 pt-6">
                <div className="font-display text-xl text-ivory mb-2">{a.t}</div>
                <p className="text-[15px] text-platinum/80 leading-relaxed">{a.d}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <a href="#partner-form" className="btn-gold hover:btn-gold-hover">
              Become Our Partner <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </section>

      {/* ONBOARDING PROCESS */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-5xl px-6 lg:px-10">
          <div className="text-center mb-14 md:mb-16">
            <div className="eyebrow mb-4">Our Retailer Onboarding Process</div>
            <h2 className="font-display text-3xl md:text-4xl text-ivory">
              From first conversation to partnership discussion.
            </h2>
          </div>
          <ol className="space-y-8">
            {STEPS.map((s) => (
              <li key={s.n} className="grid md:grid-cols-[160px_1fr] gap-4 md:gap-10 border-b border-platinum/15 pb-8 last:border-0">
                <div className="font-display text-xl text-champagne">{s.n}</div>
                <div>
                  <div className="font-display text-xl text-ivory mb-2">{s.t}</div>
                  <p className="text-[15px] text-platinum/80 leading-relaxed">{s.d}</p>
                </div>
              </li>
            ))}
          </ol>
          <div className="text-center mt-12">
            <a href="#partner-form" className="btn-gold hover:btn-gold-hover">
              Begin Your Onboarding Journey <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </section>

      {/* WHY REGISTER */}
      <section className="bg-navy-mid py-20 md:py-28 border-y border-champagne/15">
        <div className="mx-auto max-w-5xl px-6 lg:px-10">
          <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-start">
            <div className="md:col-span-5">
              <div className="eyebrow mb-5">Why Register Your Interest?</div>
              <h2 className="font-display text-3xl md:text-4xl text-ivory leading-tight">
                Your next business opportunity could start with one conversation.
              </h2>
              <div className="hairline w-20 mt-6" />
            </div>
            <div className="md:col-span-7">
              <p className="text-platinum/85 text-[15px] md:text-base leading-relaxed mb-7">
                Choosing the right jewellery partner requires more than browsing a product catalogue —
                it requires a clear understanding of the products, commercial terms, and how a
                partnership could fit your business. By connecting with Pure Platinum, you can:
              </p>
              <ul className="space-y-4">
                {BENEFITS.map((b) => (
                  <li key={b} className="flex items-start gap-4 border-b border-platinum/15 pb-4">
                    <Check size={16} className="text-champagne mt-1 flex-shrink-0" />
                    <span className="text-ivory/90 text-[15px] md:text-base">{b}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-7 font-display italic text-xl text-platinum">
                No pressure. Just a business conversation to help you make an informed decision.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* LEAD CAPTURE FORM */}
      <section id="partner-form" className="py-20 md:py-28 scroll-mt-28">
        <div className="mx-auto max-w-3xl px-6 lg:px-10">
          <div className="text-center mb-12">
            <div className="eyebrow mb-4">Retailer Lead Capture</div>
            <h2 className="font-display text-3xl md:text-5xl text-ivory">Let's explore a partnership.</h2>
            <p className="mt-5 text-platinum/80">
              Tell us a little about your jewellery business. Our team will connect with you to
              discuss the opportunity.
            </p>
          </div>

          {status === "sent" ? (
            <div className="border border-champagne/40 bg-[var(--surface-white)] p-8 md:p-12 text-center">
              <Check size={28} className="text-champagne mx-auto mb-5" />
              <h3 className="font-display text-2xl text-ivory mb-3">Thank you for your interest in Pure Platinum!</h3>
              <p className="text-platinum/80 leading-relaxed">
                Your inquiry has been received. Our team will connect with you to understand your
                requirements and discuss potential retailer partnership opportunities.
              </p>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <Field label="Full Name" required>
                  <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className={inputCls} />
                </Field>
                <Field label="Business / Jewellery Store Name" required>
                  <input required value={form.business} onChange={(e) => setForm({ ...form, business: e.target.value })} className={inputCls} />
                </Field>
                <Field label="Mobile Number" required>
                  <input required value={form.mobile} onChange={(e) => setForm({ ...form, mobile: e.target.value })} className={inputCls} />
                </Field>
                <Field label="Business Email" required>
                  <input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className={inputCls} />
                </Field>
                <Field label="Number of Retail Outlets">
                  <input value={form.outlets} onChange={(e) => setForm({ ...form, outlets: e.target.value })} className={inputCls} />
                </Field>
                <Field label="City" required>
                  <input required value={form.city} onChange={(e) => setForm({ ...form, city: e.target.value })} className={inputCls} />
                </Field>
                <Field label="State" required>
                  <input required value={form.state} onChange={(e) => setForm({ ...form, state: e.target.value })} className={inputCls} />
                </Field>
              </div>

              <Field label="Type of Retailers">
                <select value={form.type} onChange={(e) => setForm({ ...form, type: e.target.value })} className={`${inputCls} [&>option]:bg-navy-deep`}>
                  <option>Retail Store (1-3 Stores)</option>
                  <option>Multi Store Retailer (More than 3 Stores)</option>
                  <option>Others</option>
                </select>
              </Field>

              <Field label="Describe your current Platinum Jewellery Business?">
                <select value={form.selling} onChange={(e) => setForm({ ...form, selling: e.target.value })} className={`${inputCls} [&>option]:bg-navy-deep`}>
                  <option>Ready Stock</option>
                  <option>Order Only</option>
                  <option>Exploring the Category</option>
                </select>
              </Field>

              <Field label="What would you like to know about Pure Platinum?">
                <textarea rows={4} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className={`${inputCls} resize-none`} />
              </Field>

              <button
                type="submit"
                disabled={status === "sending"}
                className="group inline-flex items-center gap-3 border border-platinum rounded-[2px] text-ivory px-10 py-4 text-[0.7rem] uppercase tracking-[0.35em] hover:bg-ivory hover:text-navy-deep transition-colors duration-700 disabled:opacity-60 disabled:pointer-events-none"
              >
                {status === "sending" ? "Sending…" : "Apply for Retail Partnership"}
                <Send size={14} className="transition-transform group-hover:translate-x-1" />
              </button>
              {status === "error" && (
                <p className="text-[0.8rem] text-[#A34D4D] pt-1">
                  Something went wrong sending your enquiry. Please try again, or email us directly at{" "}
                  <a href="mailto:info@pureplatinum.co.in" className="underline">info@pureplatinum.co.in</a>.
                </p>
              )}
              <p className="text-[0.7rem] uppercase tracking-[0.25em] text-platinum-dark pt-2">
                Our team will review your inquiry and contact you to discuss the next steps.
              </p>
            </form>
          )}
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-navy-mid py-20 md:py-28 border-y border-champagne/15">
        <div className="mx-auto max-w-4xl px-6 lg:px-10">
          <div className="text-center mb-14">
            <div className="eyebrow mb-4">Frequently Asked Questions</div>
            <h2 className="font-display text-3xl md:text-4xl text-ivory">
              Everything you need to know before getting started.
            </h2>
          </div>
          <div className="divide-y divide-platinum/15 border-y border-platinum/15">
            {FAQ.map((f) => (
              <details key={f.q} className="group py-6">
                <summary className="flex items-center justify-between cursor-pointer list-none font-display text-lg md:text-xl text-ivory">
                  {f.q}
                  <span className="text-champagne text-2xl font-light transition-transform group-open:rotate-45 ml-6">+</span>
                </summary>
                <p className="mt-4 text-[15px] text-platinum/80 leading-relaxed max-w-3xl">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CLOSING CTA */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-3xl px-6 lg:px-10 text-center">
          <div className="eyebrow mb-6">Partner With Pure Platinum</div>
          <h2 className="font-display text-3xl md:text-5xl text-ivory leading-tight">
            Let's build India's stronger platinum retail network together.
          </h2>
          <p className="mt-7 text-platinum/80 leading-relaxed">
            Your next step toward exploring platinum jewellery opportunities starts with a
            conversation. Connect with Pure Platinum to discover the product portfolio, discuss your
            business requirements, and explore the possibility of becoming a retail partner.
          </p>
          <div className="mt-10">
            <a href="#partner-form" className="btn-gold hover:btn-gold-hover">
              Register Your Interest <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

const inputCls =
  "w-full bg-transparent border-b border-platinum/30 text-ivory py-3 focus:border-platinum outline-none transition-colors";

function Field({ label, children, required }: { label: string; children: React.ReactNode; required?: boolean }) {
  return (
    <label className="block">
      <div className="text-[0.6rem] uppercase tracking-[0.35em] text-platinum-dark mb-2">
        {label} {required && <span className="text-platinum">*</span>}
      </div>
      {children}
    </label>
  );
}
