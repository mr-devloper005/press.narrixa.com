import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowRight, Quote, Star, Globe, BarChart, Shield, Zap,
  CheckCircle, TrendingUp, Clock, Target, Newspaper,
  Users, Award, FileText, ChevronRight,
} from 'lucide-react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { SchemaJsonLd } from '@/components/seo/schema-jsonld'
import { SITE_CONFIG } from '@/lib/site-config'
import { buildPageMetadata } from '@/lib/seo'
import { fetchTaskPosts } from '@/lib/task-data'
import { siteContent } from '@/config/site.content'

export const revalidate = 300

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata({
    path: '/',
    title: siteContent.home.metadata.title,
    description: siteContent.home.metadata.description,
    openGraphTitle: siteContent.home.metadata.openGraphTitle,
    openGraphDescription: siteContent.home.metadata.openGraphDescription,
    image: SITE_CONFIG.defaultOgImage,
    keywords: [...siteContent.home.metadata.keywords],
  })
}

// ─── Color tokens ────────────────────────────────────────────────────────────
const C = {
  deep:      '#42032C',
  orange:    '#D36B00',
  sand:      '#E6D2AA',
  parchment: '#F1EFDC',
  deepHover: '#5C0840',
  orangeHover: '#B85E00',
  muted:     '#7A4A3A',
  border:    '#D4C9A8',
  cardBg:    '#FAF8F0',
}

// ─── Hero ─────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section
      style={{
        background: `linear-gradient(135deg, ${C.deep} 0%, #6B0A48 60%, #8B1A5A 100%)`,
      }}
      className="relative overflow-hidden py-24 lg:py-32"
    >
      {/* Decorative circles */}
      <div
        className="pointer-events-none absolute -right-32 -top-32 h-[500px] w-[500px] rounded-full opacity-10"
        style={{ background: C.orange }}
      />
      <div
        className="pointer-events-none absolute -bottom-24 -left-24 h-[360px] w-[360px] rounded-full opacity-8"
        style={{ background: C.sand }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          {/* Left copy */}
          <div>
            <div
              className="mb-6 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.22em]"
              style={{ background: 'rgba(230,210,170,0.15)', color: C.sand, border: `1px solid rgba(230,210,170,0.25)` }}
            >
              <Newspaper className="h-3.5 w-3.5" />
              Media Distribution Platform
            </div>

            <h1
              className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl"
              style={{ color: C.parchment, fontFamily: 'var(--font-display, serif)' }}
            >
              Amplify Your Story{' '}
              <span style={{ color: C.sand }}>Across Global Media</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8" style={{ color: 'rgba(230,210,170,0.85)' }}>
              Connect with 50,000+ journalists and media outlets. Get your press release in front of the right audience and drive meaningful coverage for your brand.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/press-releases"
                className="inline-flex items-center gap-2 rounded-lg px-7 py-3.5 text-sm font-semibold transition-all hover:opacity-90"
                style={{ background: C.orange, color: C.parchment }}
              >
                Submit a Release
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/press"
                className="inline-flex items-center gap-2 rounded-lg px-7 py-3.5 text-sm font-semibold transition-all"
                style={{ background: 'rgba(241,239,220,0.12)', color: C.sand, border: `1px solid rgba(230,210,170,0.30)` }}
              >
                Browse Newsroom
              </Link>
            </div>

            {/* Stats row */}
            <div className="mt-12 flex flex-wrap gap-8">
              {[
                { value: '10,000+', label: 'Media Outlets' },
                { value: '500M+', label: 'Monthly Readers' },
                { value: '98%', label: 'Client Satisfaction' },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl font-bold" style={{ color: C.sand }}>{stat.value}</div>
                  <div className="mt-0.5 text-xs uppercase tracking-[0.18em]" style={{ color: 'rgba(230,210,170,0.65)' }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right visual card */}
          <div className="hidden lg:block">
            <div
              className="rounded-2xl p-8"
              style={{ background: 'rgba(241,239,220,0.08)', border: `1px solid rgba(230,210,170,0.18)` }}
            >
              <div className="mb-6 flex items-center gap-3">
                <div
                  className="flex h-10 w-10 items-center justify-center rounded-lg"
                  style={{ background: C.orange }}
                >
                  <Globe className="h-5 w-5 text-[#F1EFDC]" />
                </div>
                <div>
                  <p className="text-sm font-semibold" style={{ color: C.sand }}>Global Distribution</p>
                  <p className="text-xs" style={{ color: 'rgba(230,210,170,0.6)' }}>150+ Countries Covered</p>
                </div>
              </div>
              {[
                { label: 'Press Release Submitted', time: '2 min ago', status: 'Live' },
                { label: 'Picked up by Reuters', time: '14 min ago', status: 'Coverage' },
                { label: 'Featured in TechCrunch', time: '1 hr ago', status: 'Featured' },
                { label: 'Bloomberg syndication', time: '3 hr ago', status: 'Syndicated' },
              ].map((item) => (
                <div
                  key={item.label}
                  className="mb-3 flex items-center justify-between rounded-lg px-4 py-3"
                  style={{ background: 'rgba(241,239,220,0.07)', border: `1px solid rgba(230,210,170,0.10)` }}
                >
                  <div>
                    <p className="text-sm font-medium" style={{ color: C.sand }}>{item.label}</p>
                    <p className="text-xs" style={{ color: 'rgba(230,210,170,0.55)' }}>{item.time}</p>
                  </div>
                  <span
                    className="rounded-full px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.14em]"
                    style={{ background: 'rgba(211,107,0,0.25)', color: C.sand }}
                  >
                    {item.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── How It Works ─────────────────────────────────────────────────────────────
function HowItWorks() {
  const steps = [
    { icon: Target, title: 'Pick Your Audience', desc: 'Choose target industries, regions, and media types for precise distribution.' },
    { icon: FileText, title: 'Write & Submit', desc: 'Craft your release using our guided editor and submit in minutes.' },
    { icon: Globe, title: 'Reach the World', desc: 'Your story reaches thousands of journalists and media outlets instantly.' },
    { icon: BarChart, title: 'Track Results', desc: 'Monitor pickups, views, and engagement with real-time analytics.' },
  ]

  return (
    <section style={{ background: C.parchment }} className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div
            className="mb-4 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.22em]"
            style={{ background: 'rgba(66,3,44,0.08)', color: C.deep, border: `1px solid rgba(66,3,44,0.12)` }}
          >
            Simple Process
          </div>
          <h2
            className="text-3xl font-bold tracking-tight sm:text-4xl"
            style={{ color: C.deep, fontFamily: 'var(--font-display, serif)' }}
          >
            How It Works
          </h2>
          <p className="mt-4 text-lg" style={{ color: C.muted }}>
            Get your press release distributed in 4 simple steps
          </p>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <div key={step.title} className="relative text-center">
              {i < steps.length - 1 && (
                <div
                  className="absolute left-[calc(50%+2.5rem)] top-6 hidden h-px w-[calc(100%-5rem)] lg:block"
                  style={{ background: `linear-gradient(90deg, ${C.orange}, transparent)` }}
                />
              )}
              <div
                className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-xl"
                style={{ background: C.deep }}
              >
                <step.icon className="h-6 w-6" style={{ color: C.sand }} />
              </div>
              <div
                className="mb-1 text-xs font-bold uppercase tracking-[0.2em]"
                style={{ color: C.orange }}
              >
                Step {i + 1}
              </div>
              <h3 className="text-base font-semibold" style={{ color: C.deep }}>{step.title}</h3>
              <p className="mt-2 text-sm leading-6" style={{ color: C.muted }}>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Stats / Trust Band ───────────────────────────────────────────────────────
function TrustBand() {
  const stats = [
    { value: '50,000+', label: 'Releases Distributed' },
    { value: '10,000+', label: 'Media Outlets' },
    { value: '150+', label: 'Countries Reached' },
    { value: '4.9/5', label: 'Average Rating' },
  ]

  return (
    <section style={{ background: C.sand }} className="py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div
                className="text-3xl font-bold"
                style={{ color: C.deep, fontFamily: 'var(--font-display, serif)' }}
              >
                {stat.value}
              </div>
              <div className="mt-1 text-sm font-medium" style={{ color: C.muted }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Features ─────────────────────────────────────────────────────────────────
function Features() {
  const features = [
    {
      icon: Globe,
      title: 'Global Reach',
      desc: 'Distribute to 10,000+ media outlets across 150+ countries with a single submission.',
    },
    {
      icon: Zap,
      title: 'Instant Distribution',
      desc: 'Your release goes live within hours, not days. Real-time syndication to top wire services.',
    },
    {
      icon: BarChart,
      title: 'Detailed Analytics',
      desc: 'Track every pickup, view, and engagement metric through a clean, real-time dashboard.',
    },
    {
      icon: Shield,
      title: 'Editorial Standards',
      desc: 'Our editorial team reviews every release to ensure quality and maximize media pickup.',
    },
    {
      icon: Target,
      title: 'Targeted Distribution',
      desc: 'Reach the right journalists by industry, beat, geography, and publication type.',
    },
    {
      icon: TrendingUp,
      title: 'SEO Amplification',
      desc: 'Permanent indexed links from high-authority domains boost your search visibility.',
    },
  ]

  return (
    <section style={{ background: C.parchment }} className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div
            className="mb-4 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.22em]"
            style={{ background: 'rgba(211,107,0,0.10)', color: C.orange, border: `1px solid rgba(211,107,0,0.18)` }}
          >
            Why Choose Us
          </div>
          <h2
            className="text-3xl font-bold tracking-tight sm:text-4xl"
            style={{ color: C.deep, fontFamily: 'var(--font-display, serif)' }}
          >
            Everything You Need to Get Covered
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg" style={{ color: C.muted }}>
            A complete media distribution platform built for modern communications teams.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feat) => (
            <div
              key={feat.title}
              className="rounded-xl p-6 transition-shadow hover:shadow-lg"
              style={{ background: C.cardBg, border: `1px solid ${C.border}` }}
            >
              <div
                className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg"
                style={{ background: 'rgba(66,3,44,0.08)' }}
              >
                <feat.icon className="h-5 w-5" style={{ color: C.deep }} />
              </div>
              <h3 className="text-base font-semibold" style={{ color: C.deep }}>{feat.title}</h3>
              <p className="mt-2 text-sm leading-6" style={{ color: C.muted }}>{feat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Testimonials ─────────────────────────────────────────────────────────────
function Testimonials() {
  const testimonials = [
    {
      name: 'Alexandra Chen',
      role: 'VP of Communications',
      company: 'NexusTech',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&fit=crop&crop=face',
      content: 'We saw a 300% increase in media pickup after switching to Press Narrixa. Our product launch reached over 2 million readers through their network.',
      rating: 5,
    },
    {
      name: 'Marcus Williams',
      role: 'CEO',
      company: 'GreenFuture Solutions',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=96&h=96&fit=crop&crop=face',
      content: 'The targeted distribution helped us secure coverage in major environmental publications. Exactly what our sustainability initiative needed.',
      rating: 5,
    },
    {
      name: 'Jennifer Foster',
      role: 'Marketing Director',
      company: 'HealthBridge Medical',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=96&h=96&fit=crop&crop=face',
      content: 'From startup to industry leader in 6 months. Press Narrixa\'s distribution was key to our rapid growth and credibility.',
      rating: 5,
    },
  ]

  return (
    <section style={{ background: C.sand }} className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2
            className="text-3xl font-bold tracking-tight sm:text-4xl"
            style={{ color: C.deep, fontFamily: 'var(--font-display, serif)' }}
          >
            Success Stories
          </h2>
          <p className="mt-4 text-lg" style={{ color: C.muted }}>
            Real results from businesses that trust us for their media distribution
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="rounded-xl p-8"
              style={{ background: C.parchment, border: `1px solid ${C.border}` }}
            >
              <Quote className="mb-4 h-7 w-7" style={{ color: C.orange }} />
              <p className="text-base leading-7" style={{ color: C.deep }}>{t.content}</p>
              <div className="mt-6 flex items-center gap-3">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="h-11 w-11 rounded-full object-cover"
                />
                <div>
                  <div className="text-sm font-semibold" style={{ color: C.deep }}>{t.name}</div>
                  <div className="text-xs" style={{ color: C.muted }}>{t.role} · {t.company}</div>
                  <div className="mt-1 flex gap-0.5">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} className="h-3.5 w-3.5 fill-current" style={{ color: C.orange }} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Latest Releases ──────────────────────────────────────────────────────────
const mockReleases = [
  { id: 1, title: 'TechStart Inc. Announces $50M Series C Funding Round', category: 'Technology', author: 'Sarah Johnson', image: 'https://picsum.photos/seed/tech1/600/400', excerpt: 'Leading AI technology company secures major investment to expand global operations.' },
  { id: 2, title: 'Global Marketing Co. Launches Revolutionary Digital Campaign Platform', category: 'Marketing', author: 'Michael Chen', image: 'https://picsum.photos/seed/marketing2/600/400', excerpt: 'New platform promises to transform how businesses connect with customers.' },
  { id: 3, title: 'EcoTech Solutions Unveils Carbon-Neutral Manufacturing Process', category: 'Sustainability', author: 'Robert Green', image: 'https://picsum.photos/seed/eco4/600/400', excerpt: 'Pioneering sustainable manufacturing method reduces carbon emissions by 90%.' },
  { id: 4, title: 'HealthTech Startup Receives FDA Approval for Medical Device', category: 'Healthcare', author: 'Dr. Lisa Wang', image: 'https://picsum.photos/seed/health5/600/400', excerpt: 'Breakthrough diagnostic technology promises early detection of diseases.' },
  { id: 5, title: 'FinTech Company Disrupts Traditional Banking with Digital-First Approach', category: 'Finance', author: 'James Miller', image: 'https://picsum.photos/seed/finance6/600/400', excerpt: 'New mobile banking platform offers zero-fee transactions and AI-powered advice.' },
  { id: 6, title: 'Automotive Startup Unveils Electric Vehicle with 500-Mile Range', category: 'Automotive', author: 'Carlos Rodriguez', image: 'https://picsum.photos/seed/auto9/600/400', excerpt: 'Revolutionary battery technology sets new standards for EV performance.' },
]

function LatestReleases() {
  return (
    <section style={{ background: C.parchment }} className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between">
          <div>
            <div
              className="mb-3 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.22em]"
              style={{ background: 'rgba(66,3,44,0.08)', color: C.deep, border: `1px solid rgba(66,3,44,0.12)` }}
            >
              Latest News
            </div>
            <h2
              className="text-3xl font-bold tracking-tight sm:text-4xl"
              style={{ color: C.deep, fontFamily: 'var(--font-display, serif)' }}
            >
              Recent Press Releases
            </h2>
          </div>
          <Link
            href="/press-releases"
            className="hidden items-center gap-2 text-sm font-semibold transition-colors hover:opacity-80 sm:flex"
            style={{ color: C.orange }}
          >
            View all <ChevronRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {mockReleases.map((release) => (
            <article
              key={release.id}
              className="group overflow-hidden rounded-xl transition-shadow hover:shadow-lg"
              style={{ background: C.cardBg, border: `1px solid ${C.border}` }}
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={release.image}
                  alt={release.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <span
                  className="inline-flex items-center rounded-full px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-[0.14em]"
                  style={{ background: 'rgba(211,107,0,0.10)', color: C.orange }}
                >
                  {release.category}
                </span>
                <h3
                  className="mt-3 text-base font-semibold leading-snug transition-colors group-hover:opacity-80 line-clamp-2"
                  style={{ color: C.deep }}
                >
                  <Link href={`/press-releases/${release.id}`}>{release.title}</Link>
                </h3>
                <p className="mt-2 text-sm leading-6 line-clamp-2" style={{ color: C.muted }}>
                  {release.excerpt}
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-xs" style={{ color: C.muted }}>{release.author}</span>
                  <Link
                    href={`/press-releases/${release.id}`}
                    className="inline-flex items-center gap-1 text-xs font-semibold transition-colors hover:opacity-80"
                    style={{ color: C.orange }}
                  >
                    Read more <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 text-center sm:hidden">
          <Link
            href="/press-releases"
            className="inline-flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold transition-all hover:opacity-90"
            style={{ background: C.deep, color: C.parchment }}
          >
            View All Releases <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}

// ─── FAQ ──────────────────────────────────────────────────────────────────────
function FAQ() {
  const faqs = [
    { q: 'How quickly will my press release be distributed?', a: 'Once submitted and approved, your release is typically distributed within 24–48 hours to our full network of media outlets.' },
    { q: 'Can I target specific industries or regions?', a: 'Yes. We offer targeted distribution options allowing you to reach specific industries, geographic regions, or media types.' },
    { q: 'Do you provide analytics and reporting?', a: 'Absolutely. We provide detailed analytics including views, clicks, pickup by media outlets, and engagement metrics.' },
    { q: 'Can I edit my release after submission?', a: 'You can make edits within the first 2 hours of submission. After distribution begins, changes require additional processing.' },
    { q: 'Do you offer writing assistance?', a: 'Yes. Our professional writers can help craft compelling press releases that maximize media pickup.' },
    { q: 'What formats are supported?', a: 'We support plain text, rich HTML, and PDF uploads. Images and multimedia attachments are also accepted.' },
  ]

  return (
    <section style={{ background: C.sand }} className="py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2
            className="text-3xl font-bold tracking-tight sm:text-4xl"
            style={{ color: C.deep, fontFamily: 'var(--font-display, serif)' }}
          >
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg" style={{ color: C.muted }}>
            Everything you need to know about our press release distribution service
          </p>
        </div>

        <div className="mt-12 space-y-4">
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
  )
}

// ─── CTA Banner ───────────────────────────────────────────────────────────────
function CTABanner() {
  return (
    <section
      style={{ background: `linear-gradient(135deg, ${C.deep} 0%, #6B0A48 100%)` }}
      className="py-20"
    >
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2
          className="text-3xl font-bold tracking-tight sm:text-4xl"
          style={{ color: C.parchment, fontFamily: 'var(--font-display, serif)' }}
        >
          Ready to Amplify Your Story?
        </h2>
        <p className="mt-5 text-lg" style={{ color: 'rgba(230,210,170,0.80)' }}>
          Join thousands of companies that trust Press Narrixa for their media distribution needs.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            href="/press-releases"
            className="inline-flex items-center gap-2 rounded-lg px-8 py-3.5 text-sm font-semibold transition-all hover:opacity-90"
            style={{ background: C.orange, color: C.parchment }}
          >
            Submit Your Release
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-lg px-8 py-3.5 text-sm font-semibold transition-all"
            style={{ background: 'rgba(241,239,220,0.12)', color: C.sand, border: `1px solid rgba(230,210,170,0.28)` }}
          >
            Talk to Sales
          </Link>
        </div>
      </div>
    </section>
  )
}

// ─── Page export ──────────────────────────────────────────────────────────────
export default async function HomePage() {
  const schemaData = [
    {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.baseUrl,
      logo: `${SITE_CONFIG.baseUrl.replace(/\/$/, '')}${SITE_CONFIG.defaultOgImage}`,
      sameAs: [],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.baseUrl,
      potentialAction: {
        '@type': 'SearchAction',
        target: `${SITE_CONFIG.baseUrl.replace(/\/$/, '')}/search?q={search_term_string}`,
        'query-input': 'required name=search_term_string',
      },
    },
  ]

  return (
    <div className="min-h-screen" style={{ background: C.parchment, color: C.deep }}>
      <NavbarShell />
      <SchemaJsonLd data={schemaData} />
      <Hero />
      <TrustBand />
      <HowItWorks />
      <Features />
      <LatestReleases />
      <Testimonials />
      <FAQ />
      <CTABanner />
      <Footer />
    </div>
  )
}
