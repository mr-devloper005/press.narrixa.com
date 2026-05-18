import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Globe, Target, Zap, Shield, CheckCircle } from 'lucide-react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { buildPageMetadata } from '@/lib/seo'

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata({
    path: '/about',
    title: 'About Us — Press Narrixa',
    description: 'Learn about Press Narrixa\'s mission to revolutionize press release distribution and connect companies with global media.',
    keywords: ['about', 'company', 'mission', 'press release distribution'],
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

const stats = [
  { value: '50K+', label: 'Releases Distributed' },
  { value: '10K+', label: 'Media Outlets' },
  { value: '125M+', label: 'Global Reach' },
  { value: '98%',  label: 'Client Satisfaction' },
]

const values = [
  { icon: Target, title: 'Mission-Driven',    description: 'We exist to help companies share their stories with the world through effective press release distribution.' },
  { icon: Zap,    title: 'Speed & Efficiency', description: 'Our platform delivers your news quickly and efficiently, reaching the right audiences at the right time.' },
  { icon: Shield, title: 'Trust & Reliability', description: 'We build lasting relationships with our clients through transparent processes and consistent results.' },
  { icon: Globe,  title: 'Global Reach',       description: 'Connect with media outlets and journalists worldwide to maximise your press release impact.' },
]

const team = [
  { name: 'Sarah Johnson',  role: 'CEO & Founder',          bio: 'Former journalist turned tech entrepreneur with 15+ years in media and communications.', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=160&h=160&fit=crop&crop=face' },
  { name: 'Michael Chen',   role: 'CTO',                    bio: 'Tech visionary focused on building scalable distribution platforms and AI-powered analytics.', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=160&h=160&fit=crop&crop=face' },
  { name: 'Emily Davis',    role: 'Head of Media Relations', bio: 'PR expert with deep connections in journalism and extensive experience in crisis communications.', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=160&h=160&fit=crop&crop=face' },
  { name: 'Robert Green',   role: 'VP of Operations',       bio: 'Operations specialist ensuring seamless press release distribution and client success.', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=160&h=160&fit=crop&crop=face' },
]

const timeline = [
  { year: '2020', title: 'Founded',          description: 'Press Narrixa launches with a mission to democratise press release distribution.' },
  { year: '2021', title: 'Platform Expansion', description: 'Introduced AI-powered targeting and analytics dashboard for better distribution insights.' },
  { year: '2022', title: 'Global Growth',    description: 'Expanded to 50+ countries and partnered with major media networks worldwide.' },
  { year: '2023', title: 'Innovation Leader', description: 'Launched real-time distribution and became the fastest-growing press release service.' },
  { year: '2024', title: 'Market Leader',    description: 'Reached 50K+ releases distributed and 125M+ global audience reach.' },
]

export default function AboutPage() {
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
            Our Story
          </div>
          <h1
            className="text-4xl font-bold tracking-tight sm:text-5xl"
            style={{ color: C.parchment, fontFamily: 'var(--font-display, serif)' }}
          >
            About Press Narrixa
          </h1>
          <p className="mt-6 mx-auto max-w-3xl text-lg leading-8" style={{ color: 'rgba(230,210,170,0.82)' }}>
            We're revolutionising how companies share their stories with the world through innovative press release distribution and media connections.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section style={{ background: C.sand }} className="py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl font-bold" style={{ color: C.deep, fontFamily: 'var(--font-display, serif)' }}>{stat.value}</div>
                <div className="mt-2 text-sm font-medium" style={{ color: C.muted }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section style={{ background: C.parchment }} className="py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <div
            className="mb-4 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.22em]"
            style={{ background: 'rgba(66,3,44,0.08)', color: C.deep, border: `1px solid rgba(66,3,44,0.12)` }}
          >
            Our Mission
          </div>
          <h2
            className="text-3xl font-bold tracking-tight sm:text-4xl"
            style={{ color: C.deep, fontFamily: 'var(--font-display, serif)' }}
          >
            Democratising Media Distribution
          </h2>
          <p className="mt-6 text-lg leading-8" style={{ color: C.muted }}>
            To empower every company — from startups to enterprises — to share their stories with global audiences effectively and affordably.
          </p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg px-7 py-3.5 text-sm font-semibold transition-all hover:opacity-90"
              style={{ background: C.orange, color: C.parchment }}
            >
              Get in Touch <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Values */}
      <section style={{ background: C.sand }} className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2
              className="text-3xl font-bold tracking-tight sm:text-4xl"
              style={{ color: C.deep, fontFamily: 'var(--font-display, serif)' }}
            >
              Our Values
            </h2>
            <p className="mt-4 text-lg" style={{ color: C.muted }}>The principles that guide everything we do</p>
          </div>
          <div className="grid gap-8 lg:grid-cols-2">
            {values.map((v) => (
              <div
                key={v.title}
                className="flex gap-5 rounded-xl p-6"
                style={{ background: C.parchment, border: `1px solid ${C.border}` }}
              >
                <div
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg"
                  style={{ background: 'rgba(66,3,44,0.08)' }}
                >
                  <v.icon className="h-6 w-6" style={{ color: C.deep }} />
                </div>
                <div>
                  <h3 className="text-base font-semibold" style={{ color: C.deep }}>{v.title}</h3>
                  <p className="mt-2 text-sm leading-6" style={{ color: C.muted }}>{v.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section style={{ background: C.parchment }} className="py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2
              className="text-3xl font-bold tracking-tight sm:text-4xl"
              style={{ color: C.deep, fontFamily: 'var(--font-display, serif)' }}
            >
              Our Journey
            </h2>
            <p className="mt-4 text-lg" style={{ color: C.muted }}>From startup to industry leader</p>
          </div>
          <div className="relative">
            <div
              className="absolute left-1/2 h-full w-0.5 -translate-x-1/2"
              style={{ background: `linear-gradient(180deg, ${C.deep}, ${C.orange})` }}
            />
            <div className="space-y-12">
              {timeline.map((item, i) => (
                <div key={item.year} className={`relative flex items-start ${i % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  <div className={`w-5/12 ${i % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <span
                      className="inline-flex items-center rounded-full px-3 py-1 text-xs font-bold uppercase tracking-[0.16em]"
                      style={{ background: C.deep, color: C.sand }}
                    >
                      {item.year}
                    </span>
                    <h3 className="mt-2 text-base font-semibold" style={{ color: C.deep }}>{item.title}</h3>
                    <p className="mt-1 text-sm leading-6" style={{ color: C.muted }}>{item.description}</p>
                  </div>
                  <div
                    className="absolute left-1/2 h-4 w-4 -translate-x-1/2 rounded-full ring-4"
                    style={{ background: C.orange, ringColor: C.parchment, top: '4px' }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section style={{ background: C.sand }} className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2
              className="text-3xl font-bold tracking-tight sm:text-4xl"
              style={{ color: C.deep, fontFamily: 'var(--font-display, serif)' }}
            >
              Leadership Team
            </h2>
            <p className="mt-4 text-lg" style={{ color: C.muted }}>The people behind our success</p>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            {team.map((member) => (
              <div
                key={member.name}
                className="flex gap-5 rounded-xl p-6"
                style={{ background: C.parchment, border: `1px solid ${C.border}` }}
              >
                <img
                  src={member.avatar}
                  alt={member.name}
                  className="h-16 w-16 shrink-0 rounded-full object-cover"
                  style={{ outline: `3px solid ${C.sand}` }}
                />
                <div>
                  <h3 className="text-base font-semibold" style={{ color: C.deep }}>{member.name}</h3>
                  <p className="text-sm font-medium" style={{ color: C.orange }}>{member.role}</p>
                  <p className="mt-2 text-sm leading-6" style={{ color: C.muted }}>{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology */}
      <section style={{ background: C.parchment }} className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <div
                className="mb-4 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.22em]"
                style={{ background: 'rgba(211,107,0,0.10)', color: C.orange, border: `1px solid rgba(211,107,0,0.18)` }}
              >
                Technology
              </div>
              <h2
                className="text-3xl font-bold tracking-tight sm:text-4xl"
                style={{ color: C.deep, fontFamily: 'var(--font-display, serif)' }}
              >
                Powered by Innovation
              </h2>
              <p className="mt-4 text-lg" style={{ color: C.muted }}>
                Our cutting-edge technology ensures your press releases reach the right audience at the right time.
              </p>
              <div className="mt-8 space-y-4">
                {[
                  'AI-powered targeting and audience segmentation',
                  'Real-time analytics and performance tracking',
                  'Automated distribution to 10,000+ media outlets',
                  'Advanced SEO optimisation for maximum visibility',
                ].map((feat) => (
                  <div key={feat} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 shrink-0" style={{ color: C.orange }} />
                    <span className="text-sm" style={{ color: C.deep }}>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="overflow-hidden rounded-2xl" style={{ border: `1px solid ${C.border}` }}>
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop"
                alt="Analytics dashboard"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        style={{ background: `linear-gradient(135deg, ${C.deep} 0%, #6B0A48 100%)` }}
        className="py-20"
      >
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2
            className="text-3xl font-bold tracking-tight sm:text-4xl"
            style={{ color: C.parchment, fontFamily: 'var(--font-display, serif)' }}
          >
            Ready to Share Your Story?
          </h2>
          <p className="mt-4 text-lg" style={{ color: 'rgba(230,210,170,0.82)' }}>
            Join thousands of companies who trust Press Narrixa for their press release distribution.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/press-releases"
              className="inline-flex items-center gap-2 rounded-lg px-8 py-3.5 text-sm font-semibold transition-all hover:opacity-90"
              style={{ background: C.orange, color: C.parchment }}
            >
              Submit a Release <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg px-8 py-3.5 text-sm font-semibold transition-all"
              style={{ background: 'rgba(241,239,220,0.12)', color: C.sand, border: '1px solid rgba(230,210,170,0.28)' }}
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
