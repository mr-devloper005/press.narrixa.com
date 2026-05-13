import type { Metadata } from 'next'
import Link from 'next/link'
import { Search, Filter, Calendar, ArrowRight, Eye } from 'lucide-react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { buildPageMetadata } from '@/lib/seo'
import { SITE_CONFIG } from '@/lib/site-config'

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata({
    path: '/press-releases',
    title: 'Release Media - Reporterahead',
    description: 'Browse the latest release media and media updates from companies worldwide.',
    keywords: ['release media', 'media updates', 'company news', 'announcements'],
  })
}

const mockPressReleases = [
  { id: 1, title: 'TechStart Inc. Announces $50M Series C Funding Round', excerpt: 'Leading AI technology company secures major investment to expand global operations and develop next-generation machine learning platforms.', category: 'Technology', author: 'Sarah Johnson', views: '12.5K', image: 'https://picsum.photos/seed/tech1/600/400' },
  { id: 2, title: 'Global Marketing Co. Launches Revolutionary Digital Campaign Platform', excerpt: 'New platform promises to transform how businesses connect with customers through AI-driven personalization and real-time analytics.', category: 'Marketing', author: 'Michael Chen', views: '8.2K', image: 'https://picsum.photos/seed/marketing2/600/400' },
  { id: 3, title: 'Innovation Labs Partners with Major Universities for Research Initiative', excerpt: 'Strategic collaboration aims to advance sustainable technology solutions and create breakthrough innovations in renewable energy.', category: 'Research', author: 'Emily Davis', views: '6.7K', image: 'https://picsum.photos/seed/research3/600/400' },
  { id: 4, title: 'EcoTech Solutions Unveils Carbon-Neutral Manufacturing Process', excerpt: 'Pioneering sustainable manufacturing method reduces carbon emissions by 90% while maintaining production efficiency and cost-effectiveness.', category: 'Sustainability', author: 'Robert Green', views: '15.3K', image: 'https://picsum.photos/seed/eco4/600/400' },
  { id: 5, title: 'HealthTech Startup Receives FDA Approval for Revolutionary Medical Device', excerpt: 'Breakthrough diagnostic technology promises early detection of diseases with unprecedented accuracy and non-invasive procedures.', category: 'Healthcare', author: 'Dr. Lisa Wang', views: '22.1K', image: 'https://picsum.photos/seed/health5/600/400' },
  { id: 6, title: 'FinTech Company Disrupts Traditional Banking with Digital-First Approach', excerpt: 'New mobile banking platform offers zero-fee transactions, AI-powered financial advice, and seamless international payments.', category: 'Finance', author: 'James Miller', views: '9.8K', image: 'https://picsum.photos/seed/finance6/600/400' },
  { id: 7, title: 'Retail Giant Implements AI-Powered Supply Chain Optimization', excerpt: 'Advanced machine learning algorithms reduce delivery times by 40% and improve inventory management across global locations.', category: 'Retail', author: 'Amanda Foster', views: '7.4K', image: 'https://picsum.photos/seed/retail7/600/400' },
  { id: 8, title: 'Education Technology Platform Reaches 10 Million Users Worldwide', excerpt: 'Online learning platform celebrates milestone with new features including virtual classrooms and AI-powered personalized learning paths.', category: 'Education', author: 'Thomas Brown', views: '11.2K', image: 'https://picsum.photos/seed/edu8/600/400' },
  { id: 9, title: 'Automotive Startup Unveils Electric Vehicle with 500-Mile Range', excerpt: 'Revolutionary battery technology and aerodynamic design set new standards for electric vehicle performance and sustainability.', category: 'Automotive', author: 'Carlos Rodriguez', views: '18.9K', image: 'https://picsum.photos/seed/auto9/600/400' },
]

const categories = ['All', 'Technology', 'Marketing', 'Research', 'Sustainability', 'Healthcare', 'Finance', 'Retail', 'Education', 'Automotive']

export default function PressReleasesPage() {
  return (
    <div className="min-h-screen bg-white">
      <NavbarShell />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-50 to-orange-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Latest Release Media
            </h1>
            <p className="mt-6 text-xl leading-8 text-gray-600">
              Stay updated with the latest news and announcements from companies worldwide
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="border-b border-gray-200 bg-white py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search release media..."
                  className="w-full rounded-lg border border-gray-300 pl-10 pr-4 py-3 focus:border-[#E02401] focus:ring-[#E02401]"
                />
              </div>
            </div>
            <div className="flex gap-4">
              <div className="relative">
                <Filter className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                <select className="appearance-none rounded-lg border border-gray-300 pl-10 pr-8 py-3 focus:border-[#E02401] focus:ring-[#E02401]">
                  <option>All Categories</option>
                  {categories.slice(1).map((category) => (
                    <option key={category}>{category}</option>
                  ))}
                </select>
              </div>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                <select className="appearance-none rounded-lg border border-gray-300 pl-10 pr-8 py-3 focus:border-[#E02401] focus:ring-[#E02401]">
                  <option>All Time</option>
                  <option>Last 24 Hours</option>
                  <option>Last Week</option>
                  <option>Last Month</option>
                  <option>Last Year</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Press Releases Grid */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex items-center justify-between">
            <p className="text-gray-600">
              Showing <span className="font-semibold">9</span> release media
            </p>
            <div className="flex gap-2">
              <button className="rounded-lg bg-[#E02401] px-4 py-2 text-white">Grid</button>
              <button className="rounded-lg border border-gray-300 px-4 py-2 text-gray-600">List</button>
            </div>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {mockPressReleases.map((release) => (
              <article key={release.id} className="group rounded-xl bg-white shadow-lg transition-all hover:shadow-xl">
                <div className="aspect-video overflow-hidden rounded-t-xl bg-gray-200">
                  <img
                    src={release.image}
                    alt={release.title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span className="inline-flex items-center gap-1">
                      <Eye className="h-4 w-4" />
                      {release.views}
                    </span>
                  </div>
                  
                  <div className="mt-3">
                    <span className="inline-flex items-center rounded-full bg-[#F78812]/10 px-3 py-1 text-xs font-semibold text-[#F78812]">
                      {release.category}
                    </span>
                  </div>
                  
                  <h3 className="mt-3 text-xl font-semibold text-gray-900 group-hover:text-[#E02401]">
                    <Link href={`/press-releases/${release.id}`}>
                      {release.title}
                    </Link>
                  </h3>
                  
                  <p className="mt-3 text-gray-600 line-clamp-3">
                    {release.excerpt}
                  </p>
                  
                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="h-8 w-8 rounded-full bg-gray-200"></div>
                      <span className="text-sm text-gray-600">{release.author}</span>
                    </div>
                    <Link 
                      href={`/press-releases/${release.id}`}
                      className="inline-flex items-center gap-1 text-sm font-semibold text-[#E02401] hover:text-[#C01E01]"
                    >
                      Read more
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-12 flex items-center justify-center gap-2">
            <button className="rounded-lg border border-gray-300 px-4 py-2 text-gray-600 hover:bg-gray-50">
              Previous
            </button>
            <button className="rounded-lg bg-[#E02401] px-4 py-2 text-white">1</button>
            <button className="rounded-lg border border-gray-300 px-4 py-2 text-gray-600 hover:bg-gray-50">2</button>
            <button className="rounded-lg border border-gray-300 px-4 py-2 text-gray-600 hover:bg-gray-50">3</button>
            <span className="px-4 py-2 text-gray-600">...</span>
            <button className="rounded-lg border border-gray-300 px-4 py-2 text-gray-600 hover:bg-gray-50">12</button>
            <button className="rounded-lg border border-gray-300 px-4 py-2 text-gray-600 hover:bg-gray-50">
              Next
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Stay Updated with Latest News
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Get the latest release media delivered directly to your inbox
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <input
              type="email"
              placeholder="Enter your email address"
              className="rounded-lg border border-gray-300 px-6 py-3 focus:border-[#E02401] focus:ring-[#E02401]"
            />
            <button className="rounded-lg bg-[#E02401] px-8 py-3 font-semibold text-white transition-colors hover:bg-[#C01E01]">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
