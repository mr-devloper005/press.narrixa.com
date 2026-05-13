import type { Metadata } from 'next'
import Link from 'next/link'
import { Check, ArrowRight, Star, Users, Globe, BarChart, Zap, Shield, TrendingUp } from 'lucide-react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { buildPageMetadata } from '@/lib/seo'
import { siteContent } from '@/config/site.content'
import { SITE_CONFIG } from '@/lib/site-config'

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata({
    path: '/pricing',
    title: 'Pricing Plans - Reporterahead',
    description: 'Choose the perfect release media distribution plan for your needs. From startups to enterprises, we have options for every budget.',
    keywords: ['release media pricing', 'distribution plans', 'media outreach costs'],
  })
}

const pricingPlans = [
  {
    name: 'Basic',
    price: '$299',
    period: 'per release',
    description: 'Perfect for startups and small businesses',
    features: [
      'Distribution to 500+ media outlets',
      'Basic analytics report',
      '24-48 hour distribution',
      'Email support',
      '1 revision included'
    ],
    highlighted: false
  },
  {
    name: 'Pro',
    price: '$599',
    period: 'per release',
    description: 'Ideal for growing companies and agencies',
    features: [
      'Distribution to 2,000+ media outlets',
      'Advanced analytics & insights',
      '12-24 hour distribution',
      'Priority email & phone support',
      '3 revisions included',
      'SEO optimization',
      'Media monitoring'
    ],
    highlighted: true
  },
  {
    name: 'Premium',
    price: 'Custom',
    period: 'pricing',
    description: 'Enterprise solutions for large organizations',
    features: [
      'Distribution to 5,000+ media outlets',
      'Comprehensive analytics dashboard',
      'Same-day distribution option',
      'Dedicated account manager',
      'Unlimited revisions',
      'Advanced SEO & analytics',
      'Full media monitoring suite',
      'Custom targeting options',
      'White-label reporting'
    ],
    highlighted: false
  }
]

const addOns = [
  {
    name: 'Express Distribution',
    price: '$199',
    description: 'Get your release media distributed within 4 hours'
  },
  {
    name: 'Professional Writing',
    price: '$299',
    description: 'Our expert writers will craft your release media for maximum impact'
  },
  {
    name: 'Media Monitoring Plus',
    price: '$149',
    description: 'Extended monitoring for 30 days with detailed sentiment analysis'
  },
  {
    name: 'Translation Services',
    price: '$249',
    description: 'Professional translation into 5 additional languages'
  }
]

const faqs = [
  {
    question: 'Can I change plans anytime?',
    answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes will apply to future releases.'
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards, PayPal, and wire transfers for enterprise accounts.'
  },
  {
    question: 'Do you offer refunds?',
    answer: 'We offer a 100% satisfaction guarantee. If you\'re not satisfied with the distribution results, we\'ll provide a full refund or redistribute at no additional cost.'
  },
  {
    question: 'Can I purchase multiple releases at once?',
    answer: 'Yes, we offer bulk discounts for 5+ releases. Contact our sales team for custom pricing.'
  },
  {
    question: 'What\'s included in the analytics report?',
    answer: 'Analytics include media pickup numbers, geographic distribution, engagement metrics, and audience reach estimates.'
  },
  {
    question: 'Do you provide media contact lists?',
    answer: 'Yes, Pro and Premium plans include access to our verified media contact database.'
  }
]

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-white">
      <NavbarShell />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-50 to-orange-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Simple, Transparent Pricing
            </h1>
            <p className="mt-6 text-xl leading-8 text-gray-600">
              Choose the perfect plan for your release media distribution needs
            </p>
            <div className="mt-8 flex justify-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 fill-[#F78812] text-[#F78812]" />
              ))}
            </div>
            <p className="mt-2 text-lg text-gray-600">
              Trusted by 2,000+ companies worldwide
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-3">
            {pricingPlans.map((plan, index) => (
              <div 
                key={index}
                className={`rounded-2xl bg-white p-8 shadow-lg transition-all hover:shadow-xl ${
                  plan.highlighted 
                    ? 'ring-2 ring-[#E02401] scale-105' 
                    : 'border border-gray-200'
                }`}
              >
                {plan.highlighted && (
                  <div className="mb-4">
                    <span className="inline-flex items-center rounded-full bg-[#E02401] px-3 py-1 text-sm font-semibold text-white">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-gray-900">{plan.name}</h3>
                  <p className="mt-2 text-gray-600">{plan.description}</p>
                </div>
                
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                  <span className="text-gray-600">/{plan.period}</span>
                </div>
                
                <ul className="mb-8 space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#E02401]" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link
                  href={plan.name === 'Premium' ? '/contact' : '/signup'}
                  className={`block w-full rounded-lg px-6 py-3 text-center font-semibold transition-colors ${
                    plan.highlighted
                      ? 'bg-[#E02401] text-white hover:bg-[#C01E01]'
                      : 'border-2 border-[#E02401] text-[#E02401] hover:bg-[#E02401] hover:text-white'
                  }`}
                >
                  {plan.name === 'Premium' ? 'Contact Sales' : 'Get Started'}
                  <ArrowRight className="inline-block ml-2 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Comparison */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Compare Features
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              See exactly what's included in each plan
            </p>
          </div>
          
          <div className="mt-12 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-lg">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Feature</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Basic</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Pro</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Premium</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {[
                  { feature: 'Media Outlets', basic: '500+', pro: '2,000+', premium: '5,000+' },
                  { feature: 'Distribution Speed', basic: '24-48 hours', pro: '12-24 hours', premium: 'Same day' },
                  { feature: 'Analytics', basic: 'Basic', pro: 'Advanced', premium: 'Comprehensive' },
                  { feature: 'Support', basic: 'Email', pro: 'Priority Email & Phone', premium: 'Dedicated Manager' },
                  { feature: 'Revisions', basic: '1', pro: '3', premium: 'Unlimited' },
                  { feature: 'SEO Optimization', basic: '✗', pro: '✓', premium: '✓' },
                  { feature: 'Media Monitoring', basic: '✗', pro: '✓', premium: '✓' },
                  { feature: 'Custom Targeting', basic: '✗', pro: '✗', premium: '✓' }
                ].map((row, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">{row.feature}</td>
                    <td className="px-6 py-4 text-center text-sm text-gray-600">{row.basic}</td>
                    <td className="px-6 py-4 text-center text-sm text-gray-600">{row.pro}</td>
                    <td className="px-6 py-4 text-center text-sm text-gray-600">{row.premium}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Add-ons Section */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Enhance Your Distribution
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Add these powerful services to maximize your release media impact
            </p>
          </div>
          
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {addOns.map((addOn, index) => (
              <div key={index} className="rounded-xl border border-gray-200 bg-white p-6 shadow-lg">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{addOn.name}</h3>
                    <p className="mt-1 text-gray-600">{addOn.description}</p>
                  </div>
                  <span className="text-xl font-bold text-[#E02401]">{addOn.price}</span>
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
              Everything you need to know about our pricing
            </p>
          </div>
          
          <div className="mt-12 space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="rounded-xl bg-white p-6 shadow-lg">
                <h3 className="text-lg font-semibold text-gray-900">{faq.question}</h3>
                <p className="mt-2 text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-[#E02401] to-[#F78812] py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to Get Your Story Out There?
          </h2>
          <p className="mt-4 text-xl text-white/90">
            Join thousands of companies who trust Reporterahead for their release media distribution
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/signup"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-8 py-3 text-base font-semibold text-[#E02401] shadow-lg transition-all hover:bg-gray-100"
            >
              Start Distribution
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-white bg-transparent px-8 py-3 text-base font-semibold text-white transition-all hover:bg-white hover:text-[#E02401]"
            >
              Talk to Sales
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
