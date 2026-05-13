import type { Metadata } from 'next'
import { Send } from 'lucide-react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { buildPageMetadata } from '@/lib/seo'

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata({
    path: '/contact',
    title: 'Contact Us - Reporterahead',
    description: 'Get in touch with the Reporterahead team for release media distribution, media inquiries, and partnership opportunities.',
    keywords: ['contact', 'support', 'media inquiries', 'partnerships'],
  })
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <NavbarShell />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-50 to-orange-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Get in Touch
            </h1>
            <p className="mt-6 text-xl leading-8 text-gray-600">
              We're here to help with your release media distribution and media needs
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Send Us a Message
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Fill out the form below and we'll get back to you within 24 hours
            </p>
          </div>

          <div className="rounded-xl bg-white p-8 shadow-lg">
            <form className="space-y-6">
              <div className="grid gap-6 lg:grid-cols-2">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-[#E02401] focus:ring-[#E02401]"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-[#E02401] focus:ring-[#E02401]"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-[#E02401] focus:ring-[#E02401]"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-[#E02401] focus:ring-[#E02401]"
                  placeholder="Acme Corporation"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject *
                </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-[#E02401] focus:ring-[#E02401]"
                >
                  <option value="">Select a topic</option>
                  <option value="media-distribution">release media distribution</option>
                  <option value="media-inquiry">Media Inquiry</option>
                  <option value="partnership">Partnership Opportunity</option>
                  <option value="technical-support">Technical Support</option>
                  <option value="billing">Billing Question</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-[#E02401] focus:ring-[#E02401]"
                  placeholder="Tell us more about how we can help you..."
                />
              </div>

              <div className="flex items-center justify-between">
                <p className="text-sm text-gray-600">
                  <span className="font-medium">Response time:</span> Within 24 hours
                </p>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-lg bg-[#E02401] px-6 py-3 font-semibold text-white transition-colors hover:bg-[#C01E01]"
                >
                  <Send className="h-4 w-4" />
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Quick answers to common questions
            </p>
          </div>

          <div className="space-y-4">
            {[
              { question: 'How quickly can you distribute my release media?', answer: 'Standard distribution takes 24-48 hours. We also offer express distribution within 4 hours for urgent releases.' },
              { question: 'What types of companies do you work with?', answer: 'We work with companies of all sizes, from startups to Fortune 500 corporations, across all industries.' },
              { question: 'Can I track the performance of my release media?', answer: 'Yes, all our plans include detailed analytics showing media pickup, views, engagement, and geographic distribution.' },
              { question: 'Do you offer writing services for release media?', answer: 'Yes, we have professional writers who can help craft compelling release media that maximize media coverage.' },
              { question: "What is your refund policy?", answer: "We offer a 100% satisfaction guarantee. If you're not satisfied with the distribution results, we'll provide a full refund or redistribute at no additional cost." }
            ].map((faq, index) => (
              <div key={index} className="rounded-xl bg-white p-6 shadow-lg">
                <h3 className="text-lg font-semibold text-gray-900">{faq.question}</h3>
                <p className="mt-2 text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
