import type { Metadata } from 'next'
import Link from 'next/link'
import { Calendar, Clock, ArrowRight, Search, Filter, Tag } from 'lucide-react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { buildPageMetadata } from '@/lib/seo'

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata({
    path: '/blog',
    title: 'Blog - Reporterahead',
    description: 'Latest insights, tips, and best practices for press release distribution and media relations.',
    keywords: ['blog', 'press release tips', 'media relations', 'PR strategies'],
  })
}

const blogPosts = [
  {
    id: 1,
    title: 'How to Write a Press Release That Gets Noticed',
    excerpt: 'Learn the essential elements of crafting compelling press releases that capture media attention and drive results.',
    date: '2024-01-15',
    author: 'Sarah Johnson',
    category: 'Writing Tips',
    readTime: '5 min read',
    featured: true,
    image: '/placeholder-blog-1.jpg'
  },
  {
    id: 2,
    title: 'The Ultimate Guide to Press Release Distribution',
    excerpt: 'Everything you need to know about distributing your press releases effectively to reach your target audience.',
    date: '2024-01-12',
    author: 'Michael Chen',
    category: 'Distribution',
    readTime: '8 min read',
    featured: false,
    image: '/placeholder-blog-2.jpg'
  },
  {
    id: 3,
    title: 'Media Relations 101: Building Lasting Relationships',
    excerpt: 'Discover proven strategies for building and maintaining strong relationships with journalists and media outlets.',
    date: '2024-01-10',
    author: 'Emily Davis',
    category: 'Media Relations',
    readTime: '6 min read',
    featured: false,
    image: '/placeholder-blog-3.jpg'
  },
  {
    id: 4,
    title: 'Measuring PR Success: Key Metrics to Track',
    excerpt: 'Learn which metrics matter most when evaluating the effectiveness of your press release campaigns.',
    date: '2024-01-08',
    author: 'Robert Green',
    category: 'Analytics',
    readTime: '7 min read',
    featured: false,
    image: '/placeholder-blog-4.jpg'
  },
  {
    id: 5,
    title: 'Crisis Communications: When to Issue a Press Release',
    excerpt: 'Understanding the timing and strategy behind press releases during crisis situations and sensitive announcements.',
    date: '2024-01-05',
    author: 'Lisa Wang',
    category: 'Crisis Management',
    readTime: '9 min read',
    featured: false,
    image: '/placeholder-blog-5.jpg'
  },
  {
    id: 6,
    title: 'SEO Best Practices for Press Releases',
    excerpt: 'Optimize your press releases for search engines to increase visibility and reach more journalists.',
    date: '2024-01-03',
    author: 'James Miller',
    category: 'SEO',
    readTime: '6 min read',
    featured: false,
    image: '/placeholder-blog-6.jpg'
  }
]

const categories = ['All', 'Writing Tips', 'Distribution', 'Media Relations', 'Analytics', 'Crisis Management', 'SEO']

export default function BlogPage() {
  const featuredPost = blogPosts.find(post => post.featured)
  const regularPosts = blogPosts.filter(post => !post.featured)

  return (
    <div className="min-h-screen bg-white">
      <NavbarShell />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-50 to-orange-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Latest Insights
            </h1>
            <p className="mt-6 text-xl leading-8 text-gray-600">
              Tips, strategies, and best practices for effective press release distribution and media relations
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-2xl bg-white shadow-xl overflow-hidden">
              <div className="grid gap-8 lg:grid-cols-2">
                <div className="aspect-video lg:aspect-square bg-gradient-to-br from-[#E02401]/20 to-[#F78812]/20"></div>
                <div className="p-8 lg:p-12">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                    <span className="inline-flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {featuredPost.date}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {featuredPost.readTime}
                    </span>
                  </div>
                  
                  <span className="inline-flex items-center rounded-full bg-[#F78812]/10 px-3 py-1 text-sm font-semibold text-[#F78812]">
                    {featuredPost.category}
                  </span>
                  
                  <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    <Link href={`/blog/${featuredPost.id}`} className="hover:text-[#E02401]">
                      {featuredPost.title}
                    </Link>
                  </h2>
                  
                  <p className="mt-4 text-lg text-gray-600">{featuredPost.excerpt}</p>
                  
                  <div className="mt-6 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-gray-200"></div>
                      <div>
                        <div className="font-semibold text-gray-900">{featuredPost.author}</div>
                        <div className="text-sm text-gray-600">Contributor</div>
                      </div>
                    </div>
                    <Link 
                      href={`/blog/${featuredPost.id}`}
                      className="inline-flex items-center gap-2 text-lg font-semibold text-[#E02401] hover:text-[#C01E01]"
                    >
                      Read more
                      <ArrowRight className="h-5 w-5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Search and Filters */}
      <section className="border-b border-gray-200 bg-white py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search articles..."
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
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex items-center justify-between">
            <p className="text-gray-600">
              Showing <span className="font-semibold">{regularPosts.length}</span> articles
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {regularPosts.map((post) => (
              <article key={post.id} className="group rounded-xl bg-white shadow-lg transition-all hover:shadow-xl">
                <div className="aspect-video overflow-hidden rounded-t-xl bg-gray-200">
                  <div className="h-full w-full bg-gradient-to-br from-[#E02401]/10 to-[#F78812]/10"></div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                    <span className="inline-flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {post.date}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {post.readTime}
                    </span>
                  </div>
                  
                  <span className="inline-flex items-center rounded-full bg-[#F78812]/10 px-3 py-1 text-xs font-semibold text-[#F78812]">
                    {post.category}
                  </span>
                  
                  <h3 className="mt-3 text-xl font-semibold text-gray-900 group-hover:text-[#E02401]">
                    <Link href={`/blog/${post.id}`}>
                      {post.title}
                    </Link>
                  </h3>
                  
                  <p className="mt-3 text-gray-600 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="h-8 w-8 rounded-full bg-gray-200"></div>
                      <span className="text-sm text-gray-600">{post.author}</span>
                    </div>
                    <Link 
                      href={`/blog/${post.id}`}
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
            Stay Updated with PR Insights
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Get the latest tips and strategies delivered directly to your inbox
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
