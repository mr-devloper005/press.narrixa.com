import type { Metadata } from 'next'
import Link from 'next/link'
import { Send, ArrowRight } from 'lucide-react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { buildPageMetadata } from '@/lib/seo'

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata({
    path: '/contact',
    title: 'Contact Us — Press Narrixa',
    description: 'Get in touch with the Press Narrixa team for press release distribution, media inquiries, and partnership opportunities.',
    keywords: ['contact', 'support', 'media inquiries', 'partnerships'],
  })
}

const C = {
  deep:      '#42032C',
  orange:    '#D36B00',
  sand:      '#E6D2AA',
  parchment: '#F1EFDC',
  muted:     '#7A4A3A',
  border:    '#D4C9A8',
  cardBg:    '#FAF8F0',
}

const faqs = [
  { q: 'How quickly can you distribute my press release?',   a: 'Standard distribution takes 24–48 hours. We also offer express distribution within 4 hours for urgent releases.' },
  { q: 'What types of companies do you work with?',          a: 'We work with companies of all sizes, from startups to Fortune 500 corporations, across all industries.' },
  { q: 'Can I track the performance of my press release?',   a: 'Yes, all our plans include detailed analytics showing media pickup, views, engagement, and geographic distribution.' },
  { q: 'Do you offer writing services for press releases?',  a: 'Yes, we have professional writers who can help craft compelling press releases that maximise media coverage.' },
  { q: 'What is your refund policy?',                        a: "We offer a 100% satisfaction guarantee. If you're not satisfied with the distribution results, we'll provide a full refund or redistribute at no additional cost." },
]

export default function ContactPage() {
  return (
    <div className="min-h-screen" style={{ background: C.parchment, color: C.deep }}>
      <NavbarShell />

      {/* Hero */}
      <section
        style={{ background: `linear-gradient(135deg, ${C.deep} 0%, #6B0A48 100%)` }}
        className="py-20"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <div
            className="mb-5 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.22em]"
            style={{ background: 'rgba(230,210,170,0.15)', color: C.sand, border: '1px solid rgba(230,210,170,0.25)' }}
          >
            Get In Touch
          </div>
          <h1
            className="text-4xl font-bold tracking-tight sm:text-5xl"
            style={{ color: C.parchment, fontFamily: 'var(--font-display, serif)' }}
          >
            Contact Us
          </h1>
          <p className="mt-5 mx-auto max-w-2xl text-lg leading-8" style={{ color: 'rgba(230,210,170,0.80)' }}>
            We're here to help with your press release distribution and media needs.
          </p>
        </div>
      </section>

      {/* Contact form */}
      <section className="py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12">

            {/* Form */}
            <div
              className="rounded-xl p-8"
              style={{ background: C.cardBg, border: `1px solid ${C.border}` }}
            >
              <h2
                className="text-2xl font-bold"
                style={{ color: C.deep, fontFamily: 'var(--font-display, serif)' }}
              >
                Send Us a Message
              </h2>
              <p className="mt-2 text-sm" style={{ color: C.muted }}>
                Fill in the form below and we'll get back to you within 24 hours.
              </p>

              <form className="mt-8 space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="firstName" className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.16em]" style={{ color: C.muted }}>
                      First Name *
                    </label>
                    <input
                      type="text" id="firstName" name="firstName" required placeholder="John"
                      className="w-full rounded-lg border px-4 py-3 text-sm outline-none"
                      style={{ background: C.parchment, borderColor: C.border, color: C.deep }}
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.16em]" style={{ color: C.muted }}>
                      Last Name *
                    </label>
                    <input
                      type="text" id="lastName" name="lastName" required placeholder="Doe"
                      className="w-full rounded-lg border px-4 py-3 text-sm outline-none"
                      style={{ background: C.parchment, borderColor: C.border, color: C.deep }}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.16em]" style={{ color: C.muted }}>
                    Email Address *
                  </label>
                  <input
                    type="email" id="email" name="email" required placeholder="john@company.com"
                    className="w-full rounded-lg border px-4 py-3 text-sm outline-none"
                    style={{ background: C.parchment, borderColor: C.border, color: C.deep }}
                  />
                </div>

                <div>
                  <label htmlFor="company" className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.16em]" style={{ color: C.muted }}>
                    Company
                  </label>
                  <input
                    type="text" id="company" name="company" placeholder="Acme Corporation"
                    className="w-full rounded-lg border px-4 py-3 text-sm outline-none"
                    style={{ background: C.parchment, borderColor: C.border, color: C.deep }}
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.16em]" style={{ color: C.muted }}>
                    Subject *
                  </label>
                  <select
                    id="subject" name="subject" required
                    className="w-full rounded-lg border px-4 py-3 text-sm outline-none"
                    style={{ background: C.parchment, borderColor: C.border, color: C.deep }}
                  >
                    <option value="">Select a topic…</option>
                    <option>Press Release Distribution</option>
                    <option>Media Inquiry</option>
                    <option>Partnership Opportunity</option>
                    <option>Technical Support</option>
                    <option>Billing Question</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.16em]" style={{ color: C.muted }}>
                    Message *
                  </label>
                  <textarea
                    id="message" name="message" required rows={5}
                    placeholder="Tell us how we can help…"
                    className="w-full resize-none rounded-lg border px-4 py-3 text-sm outline-none"
                    style={{ background: C.parchment, borderColor: C.border, color: C.deep }}
                  />
                </div>

                <div className="flex items-center justify-between gap-4">
                  <p className="text-xs" style={{ color: C.muted }}>
                    Response time: <span className="font-semibold" style={{ color: C.deep }}>within 24 hours</span>
                  </p>
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold transition-all hover:opacity-90"
                    style={{ background: C.deep, color: C.parchment }}
                  >
                    <Send className="h-4 w-4" />
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: C.sand }} className="py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <h2
              className="text-3xl font-bold tracking-tight sm:text-4xl"
              style={{ color: C.deep, fontFamily: 'var(--font-display, serif)' }}
            >
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-base" style={{ color: C.muted }}>Quick answers to common questions</p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div
                key={faq.q}
                className="rounded-xl p-6"
                style={{ background: C.parchment, border: `1px solid ${C.border}` }}
              >
                <h3 className="text-base font-semibold" style={{ color: C.deep }}>{faq.q}</h3>
                <p className="mt-2 text-sm leading-6" style={{ color: C.muted }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div
            className="flex flex-col items-center justify-between gap-6 rounded-xl px-8 py-8 sm:flex-row"
            style={{ background: `linear-gradient(135deg, ${C.deep} 0%, #6B0A48 100%)` }}
          >
            <div>
              <p className="text-lg font-semibold" style={{ color: C.sand }}>
                Ready to distribute your press release?
              </p>
              <p className="mt-1 text-sm" style={{ color: 'rgba(230,210,170,0.72)' }}>
                Reach 10,000+ media outlets with a single submission.
              </p>
            </div>
            <Link
              href="/press-releases"
              className="inline-flex shrink-0 items-center gap-2 rounded-lg px-7 py-3 text-sm font-semibold transition-all hover:opacity-90"
              style={{ background: C.orange, color: C.parchment }}
            >
              Submit a Release <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
