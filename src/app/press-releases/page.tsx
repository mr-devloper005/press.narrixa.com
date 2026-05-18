import type { Metadata } from 'next'
import Link from 'next/link'
import { Search, Filter, Calendar, ArrowRight, Eye, Newspaper } from 'lucide-react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { buildPageMetadata } from '@/lib/seo'

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata({
    path: '/press-releases',
    title: 'Press Releases — Press Narrixa',
    description: 'Browse the latest press releases and media announcements from companies worldwide.',
    keywords: ['press releases', 'media announcements', 'company news', 'newsroom'],
  })
}

// Brand colors
const C = {
  deep:      '#42032C',
  orange:    '#D36B00',
  sand:      '#E6D2AA',
  parchment: '#F1EFDC',
  muted:     '#7A4A3A',
  border:    '#D4C9A8',
  cardBg:    '#FAF8F0',
}

const mockPressReleases = [
  { id: 1, title: 'TechStart Inc. Announces $50M Series C Funding Round', excerpt: 'Leading AI technology company secures major investment to expand global operations and develop next-generation machine learning platforms.', category: 'Technology', author: 'Sarah Johnson', views: '12.5K', image: 'https://picsum.photos/seed/tech1/600/400', date: 'May 14, 2026' },
  { id: 2, title: 'Global Marketing Co. Launches Revolutionary Digital Campaign Platform', excerpt: 'New platform promises to transform how businesses connect with customers through AI-driven personalization and real-time analytics.', category: 'Marketing', author: 'Michael Chen', views: '8.2K', image: 'https://picsum.photos/seed/marketing2/600/400', date: 'May 13, 2026' },
  { id: 3, title: 'Innovation Labs Partners with Major Universities for Research Initiative', excerpt: 'Strategic collaboration aims to advance sustainable technology solutions and create breakthrough innovations in renewable energy.', category: 'Research', author: 'Emily Davis', views: '6.7K', image: 'https://picsum.photos/seed/research3/600/400', date: 'May 12, 2026' },
  { id: 4, title: 'EcoTech Solutions Unveils Carbon-Neutral Manufacturing Process', excerpt: 'Pioneering sustainable manufacturing method reduces carbon emissions by 90% while maintaining production efficiency and cost-effectiveness.', category: 'Sustainability', author: 'Robert Green', views: '15.3K', image: 'https://picsum.photos/seed/eco4/600/400', date: 'May 11, 2026' },
  { id: 5, title: 'HealthTech Startup Receives FDA Approval for Revolutionary Medical Device', excerpt: 'Breakthrough diagnostic technology promises early detection of diseases with unprecedented accuracy and non-invasive procedures.', category: 'Healthcare', author: 'Dr. Lisa Wang', views: '22.1K', image: 'https://picsum.photos/seed/health5/600/400', date: 'May 10, 2026' },
  { id: 6, title: 'FinTech Company Disrupts Traditional Banking with Digital-First Approach', excerpt: 'New mobile banking platform offers zero-fee transactions, AI-powered financial advice, and seamless international payments.', category: 'Finance', author: 'James Miller', views: '9.8K', image: 'https://picsum.photos/seed/finance6/600/400', date: 'May 9, 2026' },
  { id: 7, title: 'Retail Giant Implements AI-Powered Supply Chain Optimization', excerpt: 'Advanced machine learning algorithms reduce delivery times by 40% and improve inventory management across global locations.', category: 'Retail', author: 'Amanda Foster', views: '7.4K', image: 'https://picsum.photos/seed/retail7/600/400', date: 'May 8, 2026' },
  { id: 8, title: 'Education Technology Platform Reaches 10 Million Users Worldwide', excerpt: 'Online learning platform celebrates milestone with new features including virtual classrooms and AI-powered personalized learning paths.', category: 'Education', author: 'Thomas Brown', views: '11.2K', image: 'https://picsum.photos/seed/edu8/600/400', date: 'May 7, 2026' },
  { id: 9, title: 'Automotive Startup Unveils Electric Vehicle with 500-Mile Range', excerpt: 'Revolutionary battery technology and aerodynamic design set new standards for electric vehicle performance and sustainability.', category: 'Automotive', author: 'Carlos Rodriguez', views: '18.9K', image: 'https://picsum.photos/seed/auto9/600/400', date: 'May 6, 2026' },
]

const categories = ['All', 'Technology', 'Marketing', 'Research', 'Sustainability', 'Healthcare', 'Finance', 'Retail', 'Education', 'Automotive']

export default function PressReleasesPage() {
  return (
    <div className="min-h-screen" style={{ background: C.parchment }}>
      <NavbarShell />

      {/* Page header */}
      <section
        style={{ background: `linear-gradient(135deg, ${C.deep} 0%, #6B0A48 100%)` }}
        className="py-16"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <div
              className="flex h-10 w-10 items-center justify-center rounded-lg"
              style={{ background: 'rgba(211,107,0,0.25)' }}
            >
              <Newspaper className="h-5 w-5" style={{ color: C.sand }} />
            </div>
            <span
              className="text-xs font-semibold uppercase tracking-[0.22em]"
              style={{ color: 'rgba(230,210,170,0.70)' }}
            >
              Newsroom
            </span>
          </div>
          <h1
            className="text-4xl font-bold tracking-tight sm:text-5xl"
            style={{ color: C.parchment, fontFamily: 'var(--font-display, serif)' }}
          >
            Latest Press Releases
          </h1>
          <p className="mt-4 max-w-2xl text-lg" style={{ color: 'rgba(230,210,170,0.80)' }}>
            Stay updated with the latest news and announcements from companies worldwide
          </p>
        </div>
      </section>

      {/* Search & filters */}
      <section style={{ background: C.sand, borderBottom: `1px solid ${C.border}` }} className="py-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex-1 max-w-xl">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2" style={{ color: C.muted }} />
                <input
                  type="text"
                  placeholder="Search press releases..."
                  className="w-full rounded-lg border py-3 pl-10 pr-4 text-sm outline-none focus:ring-2"
                  style={{
                    background: C.parchment,
                    borderColor: C.border,
                    color: C.deep,
                  }}
                />
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              <div className="relative">
                <Filter className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2" style={{ color: C.muted }} />
                <select
                  className="appearance-none rounded-lg border py-3 pl-10 pr-8 text-sm outline-none"
                  style={{ background: C.parchment, borderColor: C.border, color: C.deep }}
                >
                  <option>All Categories</option>
                  {categories.slice(1).map((cat) => (
                    <option key={cat}>{cat}</option>
                  ))}
                </select>
              </div>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2" style={{ color: C.muted }} />
                <select
                  className="appearance-none rounded-lg border py-3 pl-10 pr-8 text-sm outline-none"
                  style={{ background: C.parchment, borderColor: C.border, color: C.deep }}
                >
                  <option>All Time</option>
                  <option>Last 24 Hours</option>
                  <option>Last Week</option>
                  <option>Last Month</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-6 flex items-center justify-between">
            <p className="text-sm" style={{ color: C.muted }}>
              Showing <span className="font-semibold" style={{ color: C.deep }}>9</span> press releases
            </p>
          </div>

          <div className="grid gap-7 lg:grid-cols-3">
            {mockPressReleases.map((release) => (
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
                <div className="p-6">
                  <div className="flex items-center justify-between gap-3 text-xs" style={{ color: C.muted }}>
                    <span
                      className="inline-flex items-center rounded-full px-2.5 py-0.5 font-semibold uppercase tracking-[0.12em]"
                      style={{ background: 'rgba(211,107,0,0.10)', color: C.orange }}
                    >
                      {release.category}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Eye className="h-3.5 w-3.5" />
                      {release.views}
                    </span>
                  </div>

                  <h3
                    className="mt-3 text-base font-semibold leading-snug line-clamp-2 transition-colors group-hover:opacity-80"
                    style={{ color: C.deep }}
                  >
                    <Link href={`/press-releases/${release.id}`}>{release.title}</Link>
                  </h3>

                  <p className="mt-2 text-sm leading-6 line-clamp-3" style={{ color: C.muted }}>
                    {release.excerpt}
                  </p>

                  <div className="mt-5 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div
                        className="h-7 w-7 rounded-full"
                        style={{ background: C.sand }}
                      />
                      <span className="text-xs font-medium" style={{ color: C.deep }}>{release.author}</span>
                    </div>
                    <Link
                      href={`/press-releases/${release.id}`}
                      className="inline-flex items-center gap-1 text-xs font-semibold transition-colors hover:opacity-80"
                      style={{ color: C.orange }}
                    >
                      Read <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-12 flex items-center justify-center gap-2">
            {['Previous', '1', '2', '3', '...', '12', 'Next'].map((item) => (
              <button
                key={item}
                className="rounded-lg px-4 py-2 text-sm font-medium transition-colors"
                style={
                  item === '1'
                    ? { background: C.deep, color: C.parchment }
                    : { background: C.parchment, color: C.deep, border: `1px solid ${C.border}` }
                }
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section style={{ background: C.sand }} className="py-16">
        <div className="mx-auto max-w-2xl px-4 text-center sm:px-6">
          <h2
            className="text-3xl font-bold tracking-tight"
            style={{ color: C.deep, fontFamily: 'var(--font-display, serif)' }}
          >
            Stay Updated
          </h2>
          <p className="mt-4 text-base" style={{ color: C.muted }}>
            Get the latest press releases delivered directly to your inbox
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <input
              type="email"
              placeholder="Enter your email address"
              className="rounded-lg border px-5 py-3 text-sm outline-none focus:ring-2"
              style={{ background: C.parchment, borderColor: C.border, color: C.deep, minWidth: '260px' }}
            />
            <button
              className="rounded-lg px-7 py-3 text-sm font-semibold transition-all hover:opacity-90"
              style={{ background: C.orange, color: C.parchment }}
            >
              Subscribe
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
