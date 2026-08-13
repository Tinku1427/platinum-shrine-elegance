import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from "lucide-react";
import { SiteLayout, PageHero } from "@/components/site-layout";
import hero from "@/assets/boutique.jpg";
import { SITE_URL, abs } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Pure Platinum, Mumbai" },
      { name: "description", content: "Reach the Pure Platinum atelier. MIDC, Andheri (E), Mumbai. Trade enquiries, custom manufacturing and private appointments." },
      { property: "og:title", content: "Contact — Pure Platinum" },
      { property: "og:description", content: "Trade enquiries, custom manufacturing and private appointments." },
      { property: "og:image", content: abs(hero) },
      { property: "og:url", content: `${SITE_URL}/contact` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/contact` }],
  }),
  component: Contact,
});

const WHATSAPP = "919320556743";
const ENQUIRY_EMAIL = "info@pureplatinum.co.in";

function Contact() {
  const [form, setForm] = useState({ name: "", company: "", email: "", phone: "", type: "End Consumer", message: "" });
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`${form.type} enquiry — ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nCompany: ${form.company}\nEmail: ${form.email}\nPhone: ${form.phone}\nEnquiry type: ${form.type}\n\n${form.message}`,
    );
    window.location.href = `mailto:${ENQUIRY_EMAIL}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <SiteLayout>
      <PageHero
        eyebrow="Reach Us"
        title={<>Let's begin the<br /><span className="italic text-platinum">conversation.</span></>}
        subtitle="Trade enquiries, custom manufacturing commissions and private appointments — all handled personally by our atelier team."
        image={hero}
      />

      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid lg:grid-cols-5 gap-16">
            {/* Info column */}
            <div className="lg:col-span-2 space-y-10">
              <div>
                <div className="eyebrow mb-4">The Atelier</div>
                <h2 className="font-display text-3xl md:text-4xl text-ivory">
                  Pure Platinum<br /><span className="italic text-platinum-dark">Mumbai Atelier</span>
                </h2>
                <div className="hairline w-20 my-6" />
              </div>

              {[
                { icon: MapPin, label: "Visit", value: <>Unit E-1, Plot F11 &amp; F12<br />WICEL Compound, Marol Central Road<br />MIDC, Opp. SEEPZ Gate 1<br />Andheri (E), Mumbai · 400 093</> },
                { icon: Phone, label: "Call", value: <><a href="tel:+919320556743" className="hover:text-ivory">+91 93205 56743</a><br /><a href="tel:+02266367979" className="hover:text-ivory">022 6636 7979</a><br /><span className="text-platinum-dark text-xs">Trade &amp; bridal enquiries</span></> },
                { icon: Mail, label: "Email", value: <><a href={`mailto:${ENQUIRY_EMAIL}`} className="hover:text-ivory">{ENQUIRY_EMAIL}</a></> },
                { icon: Clock, label: "Hours", value: <>Monday — Saturday<br />11:00 AM – 6:00 PM</> },
              ].map((b) => (
                <div key={b.label} className="flex gap-5 items-start border-t border-platinum/10 pt-6">
                  <b.icon size={18} className="text-platinum-dark mt-1 flex-shrink-0" />
                  <div>
                    <div className="text-[0.6rem] uppercase tracking-[0.35em] text-platinum-dark mb-2">{b.label}</div>
                    <div className="text-ivory/90 font-light leading-relaxed">{b.value}</div>
                  </div>
                </div>
              ))}

<a
                href={`https://wa.me/${WHATSAPP}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 border border-platinum px-8 py-4 text-[0.7rem] uppercase tracking-[0.35em] text-ivory hover:bg-platinum hover:text-navy-deep transition-all"
              >
                <MessageCircle size={15} /> Message on WhatsApp
              </a>
            </div>

            {/* Form column */}
            <div className="lg:col-span-3">
              <div className="border border-platinum/15 bg-navy-mid/40 p-8 md:p-12">
                <div className="eyebrow mb-4">Enquiry Form</div>
                <h3 className="font-display text-3xl text-ivory">Tell us about your enquiry.</h3>
                <div className="hairline w-16 my-6" />

                {sent && (
                  <div className="mb-8 border border-platinum/30 bg-navy-deep/60 p-4 text-sm text-platinum">
                    Opening your email app to send this enquiry — our team will respond shortly.
                  </div>
                )}

                <form onSubmit={onSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <Field label="Name" required>
                      <input
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full bg-transparent border-b border-platinum/30 text-ivory py-3 focus:border-platinum outline-none transition-colors"
                      />
                    </Field>
                    <Field label="Company / Store">
                      <input
                        value={form.company}
                        onChange={(e) => setForm({ ...form, company: e.target.value })}
                        className="w-full bg-transparent border-b border-platinum/30 text-ivory py-3 focus:border-platinum outline-none transition-colors"
                      />
                    </Field>
                    <Field label="Email" required>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full bg-transparent border-b border-platinum/30 text-ivory py-3 focus:border-platinum outline-none transition-colors"
                      />
                    </Field>
                    <Field label="Phone">
                      <input
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="w-full bg-transparent border-b border-platinum/30 text-ivory py-3 focus:border-platinum outline-none transition-colors"
                      />
                    </Field>
                  </div>

                  <Field label="Enquiry type">
                    <select
                      value={form.type}
                      onChange={(e) => setForm({ ...form, type: e.target.value })}
                      className="w-full bg-transparent border-b border-platinum/30 text-ivory py-3 focus:border-platinum outline-none transition-colors [&>option]:bg-navy-deep"
                    >
                      <option>End Consumer</option>
                      <option>Wholesaler / Trader</option>
                    </select>
                  </Field>

                  <Field label="Message" required>
                    <textarea
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full bg-transparent border-b border-platinum/30 text-ivory py-3 focus:border-platinum outline-none transition-colors resize-none"
                    />
                  </Field>

                  <button
                    type="submit"
                    className="group inline-flex items-center gap-3 border border-platinum rounded-[2px] text-ivory px-10 py-4 text-[0.7rem] uppercase tracking-[0.35em] hover:bg-ivory hover:text-navy-deep transition-colors duration-700"
                  >
                    Send Enquiry <Send size={14} className="transition-transform group-hover:translate-x-1" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

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
