import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, Eye, Share2, Facebook, Twitter, Linkedin, Mail, Tag } from 'lucide-react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { buildPageMetadata } from '@/lib/seo'
import { SITE_CONFIG } from '@/lib/site-config'

// Mock data - in real app this would come from API
const mockPressRelease = {
  id: 1,
  title: 'TechStart Inc. Announces $50M Series C Funding Round',
  subtitle: 'Leading AI technology company secures major investment to expand global operations and develop next-generation machine learning platforms',
  author: 'Sarah Johnson',
  authorTitle: 'CEO',
  date: 'January 15, 2024',
  time: '9:00 AM EST',
  category: 'Technology',
  tags: ['AI', 'Funding', 'Machine Learning', 'Innovation'],
  views: '12.5K',
  featuredImage: 'https://picsum.photos/seed/tech1/1200/600',
  content: `
    <p>SAN FRANCISCO, CA - TechStart Inc., a leading artificial intelligence technology company, today announced the successful completion of its $50 million Series C funding round, led by prominent venture capital firm Global Ventures with participation from existing investors including Innovation Capital and Tech Fund.</p>

    <p>The latest funding round brings TechStart's total raised capital to $120 million and values the company at $500 million, according to sources familiar with the matter. The investment will be used to accelerate the company's global expansion plans and advance development of its next-generation machine learning platforms.</p>

    <blockquote>
      <p>"This significant investment validates our vision of democratizing AI technology for businesses of all sizes," said Sarah Johnson, CEO of TechStart Inc. "With these resources, we can scale our operations globally and continue developing innovative solutions that help organizations leverage the power of artificial intelligence."</p>
    </blockquote>

    <p>TechStart's flagship product, an enterprise AI platform that enables businesses to deploy machine learning models without extensive technical expertise, has seen rapid adoption since its launch 18 months ago. The company currently serves over 500 enterprise customers across 25 countries.</p>

    <h3>Strategic Growth Plans</h3>
    <p>The Series C funding will support several key initiatives:</p>
    <ul>
      <li>Expansion into European and Asian markets with new regional offices planned in London, Tokyo, and Singapore</li>
      <li>Hiring of 200 additional engineers and data scientists over the next 18 months</li>
      <li>Development of specialized AI solutions for healthcare, finance, and manufacturing industries</li>
      <li>Enhancement of the company's proprietary machine learning algorithms and infrastructure</li>
    </ul>

    <h3>Market Impact and Future Outlook</h3>
    <p>The AI technology market is projected to reach $500 billion by 2030, and TechStart is well-positioned to capture a significant share of this growth. The company's revenue has grown 300% year-over-year, with strong enterprise adoption across multiple industries.</p>

    <p>"TechStart has demonstrated exceptional growth and technological innovation in the AI space," noted Michael Chen, Partner at Global Ventures. "Their enterprise-focused approach and proven track record of delivering value to customers make them an attractive investment opportunity in the rapidly expanding AI market."</p>

    <h3>About TechStart Inc.</h3>
    <p>TechStart Inc. is a leading artificial intelligence technology company founded in 2020 with headquarters in San Francisco, California. The company specializes in developing enterprise AI platforms that enable businesses to deploy machine learning solutions without requiring extensive technical expertise. TechStart's mission is to democratize AI technology and make it accessible to organizations of all sizes.</p>

    <p>For more information about TechStart Inc. and their AI solutions, visit www.techstart.com or contact their press office at press@techstart.com.</p>
  `
}

const relatedArticles = [
  { id: 2, title: 'Global Marketing Co. Launches Revolutionary Digital Campaign Platform', excerpt: 'New platform promises to transform how businesses connect with customers through AI-driven personalization.', category: 'Marketing', image: 'https://picsum.photos/seed/marketing2/600/400' },
  { id: 3, title: 'Innovation Labs Partners with Major Universities for Research Initiative', excerpt: 'Strategic collaboration aims to advance sustainable technology solutions and create breakthrough innovations.', category: 'Research', image: 'https://picsum.photos/seed/research3/600/400' },
  { id: 4, title: 'EcoTech Solutions Unveils Carbon-Neutral Manufacturing Process', excerpt: 'Pioneering sustainable manufacturing method reduces carbon emissions by 90% while maintaining efficiency.', category: 'Sustainability', image: 'https://picsum.photos/seed/eco4/600/400' },
]

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata({
    path: '/press-releases/1',
    title: mockPressRelease.title,
    description: mockPressRelease.subtitle,
    keywords: mockPressRelease.tags,
  })
}

export default function PressReleasePage() {
  return (
    <div className="min-h-screen bg-white">
      <NavbarShell />
      
      {/* Breadcrumb */}
      <section className="border-b border-gray-200 bg-gray-50">
        <div className="mx-auto max-w-4xl px-4 py-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-[#E02401]">Home</Link>
            <span>/</span>
            <Link href="/press-releases" className="hover:text-[#E02401]">Release Media</Link>
            <span>/</span>
            <span className="text-gray-900">{mockPressRelease.title}</span>
          </nav>
        </div>
      </section>

      {/* Article Header */}
      <article className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Link 
            href="/press-releases" 
            className="inline-flex items-center gap-2 text-gray-600 hover:text-[#E02401]"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Release Media
          </Link>
        </div>

        <header className="mb-8">
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
            <span className="inline-flex items-center gap-1">
              <Eye className="h-4 w-4" />
              {mockPressRelease.views} views
            </span>
          </div>

          <div className="mb-4">
            <span className="inline-flex items-center rounded-full bg-[#F78812]/10 px-3 py-1 text-sm font-semibold text-[#F78812]">
              {mockPressRelease.category}
            </span>
          </div>

          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            {mockPressRelease.title}
          </h1>
          
          <p className="mt-4 text-xl leading-8 text-gray-600">
            {mockPressRelease.subtitle}
          </p>

          <div className="mt-6 flex items-center justify-between border-b border-gray-200 pb-6">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-gray-200"></div>
              <div>
                <div className="font-semibold text-gray-900">{mockPressRelease.author}</div>
                <div className="text-sm text-gray-600">{mockPressRelease.authorTitle}</div>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <button className="inline-flex items-center gap-2 rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
                <Share2 className="h-4 w-4" />
                Share
              </button>
            </div>
          </div>
        </header>

        {/* Featured Image */}
        <div className="mb-8">
          <div className="aspect-video overflow-hidden rounded-xl bg-gray-200">
            <img
              src={mockPressRelease.featuredImage}
              alt={mockPressRelease.title}
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        {/* Tags */}
        <div className="mb-8 flex flex-wrap gap-2">
          {mockPressRelease.tags.map((tag) => (
            <span key={tag} className="inline-flex items-center gap-1 rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700">
              <Tag className="h-3 w-3" />
              {tag}
            </span>
          ))}
        </div>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none">
          <div dangerouslySetInnerHTML={{ __html: mockPressRelease.content }} />
        </div>

        {/* Share Section */}
        <section className="mt-12 border-t border-gray-200 pt-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Share this release media</h3>
          <div className="flex flex-wrap gap-3">
            <button className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
              <Facebook className="h-4 w-4" />
              Facebook
            </button>
            <button className="inline-flex items-center gap-2 rounded-lg bg-sky-500 px-4 py-2 text-white hover:bg-sky-600">
              <Twitter className="h-4 w-4" />
              Twitter
            </button>
            <button className="inline-flex items-center gap-2 rounded-lg bg-blue-700 px-4 py-2 text-white hover:bg-blue-800">
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </button>
            <button className="inline-flex items-center gap-2 rounded-lg border border-gray-300 px-4 py-2 text-gray-700 hover:bg-gray-50">
              <Mail className="h-4 w-4" />
              Email
            </button>
          </div>
        </section>

        {/* Related Articles */}
        <section className="mt-16 border-t border-gray-200 pt-12">
          <h3 className="text-2xl font-bold tracking-tight text-gray-900 mb-8">
            More Release Media
          </h3>
          <div className="grid gap-6 lg:grid-cols-3">
            {relatedArticles.map((article) => (
              <article key={article.id} className="group rounded-xl border border-gray-200 bg-white overflow-hidden transition-all hover:shadow-lg">
                <div className="aspect-video overflow-hidden bg-gray-200">
                  <img src={article.image} alt={article.title} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" />
                </div>
                <div className="p-6">
                  <span className="inline-flex items-center rounded-full bg-[#F78812]/10 px-3 py-1 text-xs font-semibold text-[#F78812] mb-3">
                    {article.category}
                  </span>
                  <h4 className="text-lg font-semibold text-gray-900 group-hover:text-[#E02401] mb-2">
                    <Link href={`/press-releases/${article.id}`}>{article.title}</Link>
                  </h4>
                  <p className="text-gray-600 text-sm line-clamp-2 mb-4">{article.excerpt}</p>
                  <Link href={`/press-releases/${article.id}`} className="inline-flex items-center gap-1 text-sm font-semibold text-[#E02401] hover:text-[#C01E01]">
                    Read more <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>
      </article>

      <Footer />
    </div>
  )
}
