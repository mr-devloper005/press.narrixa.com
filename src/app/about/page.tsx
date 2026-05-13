import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Users, Globe, TrendingUp, Award, CheckCircle, Target, Zap, Shield } from 'lucide-react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { buildPageMetadata } from '@/lib/seo'

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata({
    path: '/about',
    title: 'About Us - Reporterahead',
    description: 'Learn about Reporterahead\'s mission to revolutionize release media distribution and connect companies with global media.',
    keywords: ['about', 'company', 'mission', 'release media distribution'],
  })
}

const stats = [
  { value: '50K+', label: 'release media Distributed' },
  { value: '10K+', label: 'Media Outlets' },
  { value: '125M+', label: 'Global Reach' },
  { value: '98%', label: 'Client Satisfaction' }
]

const values = [
  {
    icon: Target,
    title: 'Mission-Driven',
    description: 'We exist to help companies share their stories with the world through effective release media distribution.'
  },
  {
    icon: Zap,
    title: 'Speed & Efficiency',
    description: 'Our platform delivers your news quickly and efficiently, reaching the right audiences at the right time.'
  },
  {
    icon: Shield,
    title: 'Trust & Reliability',
    description: 'We build lasting relationships with our clients through transparent processes and consistent results.'
  },
  {
    icon: Globe,
    title: 'Global Reach',
    description: 'Connect with media outlets and journalists worldwide to maximize your release media impact.'
  }
]

const team = [
  {
    name: 'Sarah Johnson',
    role: 'CEO & Founder',
    bio: 'Former journalist turned tech entrepreneur with 15+ years in media and communications.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=160&h=160&fit=crop&crop=face'
  },
  {
    name: 'Michael Chen',
    role: 'CTO',
    bio: 'Tech visionary focused on building scalable distribution platforms and AI-powered analytics.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=160&h=160&fit=crop&crop=face'
  },
  {
    name: 'Emily Davis',
    role: 'Head of Media Relations',
    bio: 'PR expert with deep connections in journalism and extensive experience in crisis communications.',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=160&h=160&fit=crop&crop=face'
  },
  {
    name: 'Robert Green',
    role: 'VP of Operations',
    bio: 'Operations specialist ensuring seamless release media distribution and client success.',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=160&h=160&fit=crop&crop=face'
  }
]

const timeline = [
  {
    year: '2020',
    title: 'Founded',
    description: 'Reporterahead launches with a mission to democratize release media distribution.'
  },
  {
    year: '2021',
    title: 'Platform Expansion',
    description: 'Introduced AI-powered targeting and analytics dashboard for better distribution insights.'
  },
  {
    year: '2022',
    title: 'Global Growth',
    description: 'Expanded to 50+ countries and partnered with major media networks worldwide.'
  },
  {
    year: '2023',
    title: 'Innovation Leader',
    description: 'Launched real-time distribution and became the fastest-growing release media service.'
  },
  {
    year: '2024',
    title: 'Market Leader',
    description: 'Reached 50K+ release media distributed and 125M+ global audience reach.'
  }
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <NavbarShell />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-50 to-orange-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              About Reporterahead
            </h1>
            <p className="mt-6 text-xl leading-8 text-gray-600 max-w-3xl mx-auto">
              We're revolutionizing how companies share their stories with the world through innovative release media distribution and media connections.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-[#E02401]">{stat.value}</div>
                <div className="mt-2 text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Our Mission
          </h2>
          <p className="mt-6 text-xl leading-8 text-gray-600">
            To democratize release media distribution and empower every company, from startups to enterprises, to share their stories with global audiences effectively.
          </p>
          <div className="mt-8 flex justify-center">
            <Link 
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-[#E02401] px-6 py-3 font-semibold text-white transition-colors hover:bg-[#C01E01]"
            >
              Join Our Mission
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our Values
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {values.map((value, index) => (
              <div key={index} className="flex gap-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#F78812]/10 flex-shrink-0">
                  <value.icon className="h-6 w-6 text-[#F78812]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{value.title}</h3>
                  <p className="mt-2 text-gray-600">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our Journey
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              From startup to industry leader
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 h-full w-0.5 bg-[#E02401] transform -translate-x-1/2"></div>
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                    <div className="inline-flex items-center rounded-full bg-[#E02401] px-3 py-1 text-sm font-semibold text-white">
                      {item.year}
                    </div>
                    <h3 className="mt-2 text-xl font-semibold text-gray-900">{item.title}</h3>
                    <p className="mt-2 text-gray-600">{item.description}</p>
                  </div>
                  <div className="absolute left-1/2 h-4 w-4 rounded-full bg-[#E02401] transform -translate-x-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Leadership Team
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              The people behind our success
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {team.map((member, index) => (
              <div key={index} className="rounded-xl border border-gray-200 bg-white p-8 shadow-lg">
                <div className="flex items-center gap-6">
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="h-20 w-20 rounded-full object-cover ring-2 ring-gray-200 flex-shrink-0"
                  />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
                    <p className="text-[#F78812] font-medium">{member.role}</p>
                  </div>
                </div>
                <p className="mt-4 text-gray-600">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Powered by Innovation
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Our cutting-edge technology ensures your release media reach the right audience at the right time.
              </p>
              <div className="mt-8 space-y-4">
                {[
                  'AI-powered targeting and audience segmentation',
                  'Real-time analytics and performance tracking',
                  'Automated distribution to 10,000+ media outlets',
                  'Advanced SEO optimization for maximum visibility'
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-[#E02401]" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="overflow-hidden rounded-2xl shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=800&fit=crop"
                alt="Innovation and technology dashboard"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-[#E02401] to-[#F78812] py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to Share Your Story?
          </h2>
          <p className="mt-4 text-xl text-white/90">
            Join thousands of companies who trust Reporterahead for their release media distribution
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-white bg-transparent px-8 py-3 text-base font-semibold text-white transition-all hover:bg-white hover:text-[#E02401]"
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
