import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Quote, Star, Users, Globe, BarChart, Shield, Zap, CheckCircle, TrendingUp, Award, Clock, Target, Building2 } from 'lucide-react'
import { ContentImage } from '@/components/shared/content-image'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { SchemaJsonLd } from '@/components/seo/schema-jsonld'
import { TaskPostCard } from '@/components/shared/task-post-card'
import { SITE_CONFIG, type TaskKey } from '@/lib/site-config'
import { buildPageMetadata } from '@/lib/seo'
import { fetchTaskPosts } from '@/lib/task-data'
import { siteContent } from '@/config/site.content'
import { getFactoryState } from '@/design/factory/get-factory-state'
import { getProductKind, type ProductKind } from '@/design/factory/get-product-kind'
import type { SitePost } from '@/lib/site-connector'
import { getHomeEditorialMockPosts, mergeEditorialPostsForHome } from '@/lib/home-editorial-mock'
import { HOME_PAGE_OVERRIDE_ENABLED, HomePageOverride } from '@/overrides/home-page'

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

function MediaPressReleaseHome({ primaryTask, posts }: { primaryTask?: any; posts: SitePost[] }) {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-50 to-orange-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
                Amplify Your Story Across Global Media
              </h1>
              <p className="mt-6 text-xl leading-8 text-gray-600">
                Connect with 50,000+ journalists and media outlets. Get your release media in front of the right audience and drive meaningful coverage for your brand.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link 
                  href="/pricing" 
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#E02401] px-8 py-4 text-base font-semibold text-white shadow-lg transition-all hover:bg-[#C01E01] hover:shadow-xl"
                >
                  Start Distribution
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <Link 
                  href="/press-releases" 
                  className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-[#E02401] bg-white px-8 py-4 text-base font-semibold text-[#E02401] transition-all hover:bg-[#E02401] hover:text-white"
                >
                  See Examples
                </Link>
              </div>
              <div className="mt-8 flex items-center gap-8">
                <div>
                  <div className="text-2xl font-bold text-gray-900">10,000+</div>
                  <div className="text-sm text-gray-600">Media Outlets</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">500M+</div>
                  <div className="text-sm text-gray-600">Monthly Readers</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">98%</div>
                  <div className="text-sm text-gray-600">Client Satisfaction</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-[#E02401]/20 to-[#F78812]/20 rounded-2xl flex items-center justify-center">
                <div className="text-center">
                  <Globe className="h-16 w-16 text-[#E02401] mx-auto mb-4" />
                  <div className="text-2xl font-bold text-gray-900">Global Reach</div>
                  <div className="text-gray-600 mt-2">150+ Countries</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Placement Section */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <div className="inline-flex items-center justify-center rounded-full bg-[#E02401]/10 p-3">
              <TrendingUp className="h-8 w-8 text-[#E02401]" />
            </div>
            <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Trusted by Industry Leaders
            </h2>
            <div className="mt-4 text-5xl font-bold text-[#E02401]">50,000+</div>
            <p className="mt-4 text-lg text-gray-600">
              Release media distributed for startups, Fortune 500 companies, and everything in between
            </p>
          </div>
          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {[
              { name: 'Tech Startups', stat: '15,000+', desc: 'Innovative companies sharing their breakthrough moments' },
              { name: 'Enterprise', stat: '25,000+', desc: 'Established businesses reaching global audiences' },
              { name: 'Non-Profits', stat: '10,000+', desc: 'Organizations making a difference through powerful storytelling' }
            ].map((segment, i) => (
              <div key={i} className="text-center p-6 rounded-xl bg-white shadow-lg">
                <div className="text-3xl font-bold text-[#E02401]">{segment.stat}</div>
                <div className="mt-2 text-lg font-semibold text-gray-900">{segment.name}</div>
                <div className="mt-2 text-sm text-gray-600">{segment.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Success Stories From Our Clients
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Real results from businesses that trust Reporterahead for their media distribution
            </p>
          </div>
          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {[
              {
                name: "Alexandra Chen",
                company: "NexusTech",
                role: "VP of Communications",
                avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&fit=crop&crop=face",
                content: "We saw a 300% increase in media pickup after switching to Reporterahead. Our product launch reached over 2 million readers through their network.",
                rating: 5
              },
              {
                name: "Marcus Williams",
                company: "GreenFuture Solutions",
                role: "CEO",
                avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=96&h=96&fit=crop&crop=face",
                content: "The targeted distribution helped us secure coverage in major environmental publications. Exactly what our sustainability initiative needed.",
                rating: 5
              },
              {
                name: "Jennifer Foster",
                company: "HealthBridge Medical",
                role: "Marketing Director",
                avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=96&h=96&fit=crop&crop=face",
                content: "From startup to industry leader in 6 months. Reporterahead's distribution was key to our rapid growth and credibility.",
                rating: 5
              }
            ].map((testimonial, i) => (
              <div key={i} className="rounded-xl bg-white p-8 shadow-lg">
                <Quote className="mb-4 h-8 w-8 text-[#F78812]" />
                <p className="text-lg text-gray-700">{testimonial.content}</p>
                <div className="mt-6 flex items-center">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="h-12 w-12 rounded-full object-cover"
                  />
                  <div className="ml-4">
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role} at {testimonial.company}</div>
                    <div className="flex mt-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-[#F78812] fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              How It Works
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Get your press release distributed in 4 simple steps
            </p>
          </div>
          <div className="mt-12 grid gap-8 lg:grid-cols-4">
            {[
              { icon: Target, title: "Pick where & when", desc: "Choose your target audience and distribution timing" },
              { icon: Zap, title: "Publish", desc: "Submit your release media with our easy-to-use platform" },
              { icon: Globe, title: "Be seen", desc: "Your story reaches thousands of journalists and media outlets" },
              { icon: BarChart, title: "Track results", desc: "Monitor performance with detailed analytics and reports" }
            ].map((step, i) => (
              <div key={i} className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#E02401] text-white">
                  <step.icon className="h-8 w-8" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-gray-900">{step.title}</h3>
                <p className="mt-2 text-gray-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Trusted by Industry Leaders
            </h2>
            <div className="mt-8 flex justify-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 fill-[#F78812] text-[#F78812]" />
              ))}
            </div>
            <p className="mt-4 text-lg text-gray-600">
              4.9/5 average rating from 2,000+ satisfied customers
            </p>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-6">
            {['Microsoft', 'Google', 'Amazon', 'Apple', 'Meta', 'Netflix'].map((company) => (
              <div key={company} className="flex items-center justify-center">
                <span className="text-sm font-medium text-gray-500">{company}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog / Academy Section */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Latest Insights
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Tips and best practices for effective release media distribution
            </p>
          </div>
          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {[
              { id: 1, title: 'TechStart Inc. Announces $50M Series C Funding Round', excerpt: 'Leading AI technology company secures major investment to expand global operations and develop next-generation machine learning platforms.', image: 'https://picsum.photos/seed/tech1/600/400', category: 'Technology' },
              { id: 2, title: 'Global Marketing Co. Launches Revolutionary Digital Campaign Platform', excerpt: 'New platform promises to transform how businesses connect with customers through AI-driven personalization and real-time analytics.', image: 'https://picsum.photos/seed/marketing2/600/400', category: 'Marketing' },
              { id: 3, title: 'Innovation Labs Partners with Major Universities for Research Initiative', excerpt: 'Strategic collaboration aims to advance sustainable technology solutions and create breakthrough innovations in renewable energy.', image: 'https://picsum.photos/seed/research3/600/400', category: 'Research' },
              { id: 4, title: 'EcoTech Solutions Unveils Carbon-Neutral Manufacturing Process', excerpt: 'Pioneering sustainable manufacturing method reduces carbon emissions by 90% while maintaining production efficiency and cost-effectiveness.', image: 'https://picsum.photos/seed/eco4/600/400', category: 'Sustainability' },
              { id: 5, title: 'HealthTech Startup Receives FDA Approval for Revolutionary Medical Device', excerpt: 'Breakthrough diagnostic technology promises early detection of diseases with unprecedented accuracy and non-invasive procedures.', image: 'https://picsum.photos/seed/health5/600/400', category: 'Healthcare' },
              { id: 6, title: 'FinTech Company Disrupts Traditional Banking with Digital-First Approach', excerpt: 'New mobile banking platform offers zero-fee transactions, AI-powered financial advice, and seamless international payments.', image: 'https://picsum.photos/seed/finance6/600/400', category: 'Finance' },
            ].map((item) => (
              <div key={item.id} className="group rounded-xl bg-white shadow-lg transition-all hover:shadow-xl overflow-hidden">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <span className="inline-flex items-center rounded-full bg-[#F78812]/10 px-3 py-1 text-xs font-semibold text-[#F78812]">
                    {item.category}
                  </span>
                  <h3 className="mt-3 text-lg font-semibold text-gray-900 group-hover:text-[#E02401] line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-600 line-clamp-2">
                    {item.excerpt}
                  </p>
                  <Link href={`/press-releases/${item.id}`} className="mt-4 inline-flex items-center text-[#E02401] hover:text-[#C01E01] text-sm font-medium">
                    Read more <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/press-releases"
              className="inline-flex items-center gap-2 rounded-lg bg-[#E02401] px-6 py-3 text-base font-semibold text-white transition-all hover:bg-[#C01E01]"
            >
              View All Release Media
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Customer Reviews Section */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Customer Reviews
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Real feedback from our valued customers
            </p>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {[
              { name: 'Alexandra Chen', role: 'VP of Communications, NexusTech', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=face', review: 'Reporterahead helped us reach over 2 million readers with our product launch. The distribution speed and media coverage exceeded all expectations.' },
              { name: 'Marcus Williams', role: 'CEO, GreenFuture Solutions', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face', review: 'We secured coverage in 50+ major publications within 24 hours. The targeted distribution to environmental media was exactly what we needed.' },
              { name: 'Jennifer Foster', role: 'Marketing Director, HealthBridge', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face', review: 'From startup to industry leader in 6 months. The analytics dashboard gave us clear visibility into every pickup and engagement metric.' },
              { name: 'David Park', role: 'Founder, FinEdge Capital', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face', review: 'The platform is incredibly easy to use. We submitted our funding announcement and it was live across 300+ outlets the same day. Outstanding.' },
              { name: 'Ryan Mitchell', role: 'Head of PR, CloudStack Inc.', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&h=80&fit=crop&crop=face', review: 'Best investment we made for our media strategy. The SEO boost from the distribution alone was worth every penny. Highly recommend.' },
              { name: 'Carlos Mendez', role: 'Communications Lead, AutoDrive', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&crop=face', review: 'Our EV launch got picked up by TechCrunch, Reuters, and Bloomberg — all through Reporterahead. The reach is genuinely global.' },
            ].map((item, i) => (
              <div key={i} className="rounded-xl bg-white p-6 shadow-lg">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="h-5 w-5 fill-[#F78812] text-[#F78812]" />
                  ))}
                </div>
                <p className="mt-4 text-gray-700">"{item.review}"</p>
                <div className="mt-6 flex items-center gap-3">
                  <img src={item.avatar} alt={item.name} className="h-10 w-10 rounded-full object-cover" />
                  <div>
                    <div className="font-semibold text-gray-900">{item.name}</div>
                    <div className="text-sm text-gray-600">{item.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Everything you need to know about our release media distribution service
            </p>
          </div>
          <div className="mt-12 space-y-4">
            {[
              {
                q: "How quickly will my release media be distributed?",
                a: "Once submitted, your release media is typically distributed within 24-48 hours to our extensive network of media outlets."
              },
              {
                q: "Can I target specific industries or regions?",
                a: "Yes, we offer targeted distribution options allowing you to reach specific industries, geographic regions, or media types."
              },
              {
                q: "Do you provide analytics and reporting?",
                a: "Absolutely! We provide detailed analytics including views, clicks, pickup by media outlets, and engagement metrics."
              },
              {
                q: "What's included in the distribution package?",
                a: "Our packages include distribution to thousands of journalists, media monitoring, analytics reports, and optimization recommendations."
              },
              {
                q: "Can I edit my release media after submission?",
                a: "Yes, you can make edits within the first 2 hours of submission. After distribution begins, changes require additional processing."
              },
              {
                q: "Do you offer writing assistance?",
                a: "Yes, we have professional writers who can help craft compelling release media that maximize media pickup."
              }
            ].map((faq, i) => (
              <div key={i} className="rounded-xl bg-white p-6 shadow-lg">
                <h3 className="text-lg font-semibold text-gray-900">{faq.q}</h3>
                <p className="mt-2 text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default async function HomePage() {
  if (HOME_PAGE_OVERRIDE_ENABLED) {
    return <HomePageOverride />
  }

  const enabledTasks = SITE_CONFIG.tasks.filter((task) => task.enabled)
  const { recipe } = getFactoryState()
  const primaryTask = enabledTasks.find((task) => task.key === recipe.primaryTask) || enabledTasks[0]
  
  const posts = await fetchTaskPosts('mediaDistribution', 6, { 
    allowMockFallback: true, 
    fresh: false, 
    revalidate: 120 
  })

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
    <div className="min-h-screen bg-background text-foreground">
      <NavbarShell />
      <SchemaJsonLd data={schemaData} />
      <MediaPressReleaseHome primaryTask={primaryTask} posts={posts} />
      <Footer />
    </div>
  )
}
