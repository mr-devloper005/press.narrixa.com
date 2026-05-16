import type { Metadata } from 'next'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { buildPageMetadata } from '@/lib/seo'

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata({ path: '/privacy', title: 'Privacy Policy — Press Narrixa', description: 'How we collect, use, and protect your information.' })
}

const C = { deep: '#42032C', orange: '#D36B00', sand: '#E6D2AA', parchment: '#F1EFDC', muted: '#7A4A3A', border: '#D4C9A8', cardBg: '#FAF8F0' }

const sections = [
  { title: 'Information We Collect', body: 'We collect information you provide directly to us, such as when you create an account, submit a press release, or contact us for support. This includes your name, email address, company name, and payment information. We also automatically collect certain information when you use our services, including log data, device information, and cookies.' },
  { title: 'How We Use Your Information', body: 'We use the information we collect to provide, maintain, and improve our services, process transactions, send you technical notices and support messages, respond to your comments and questions, and send you marketing communications (where permitted by law).' },
  { title: 'Information Sharing', body: 'We do not sell, trade, or otherwise transfer your personally identifiable information to third parties without your consent, except as described in this policy. We may share your information with trusted service providers who assist us in operating our platform, conducting our business, or servicing you.' },
  { title: 'Data Security', body: 'We implement appropriate technical and organisational measures to protect your personal information against unauthorised access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.' },
  { title: 'Your Rights & Choices', body: 'You have the right to access, update, or delete your personal information at any time. You can manage your email preferences and opt out of marketing communications. To exercise these rights, please contact us at privacy@press.narrixa.com.' },
  { title: 'Cookies', body: 'We use cookies and similar tracking technologies to track activity on our service and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.' },
  { title: 'Changes to This Policy', body: 'We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "last updated" date.' },
]

export default function PrivacyPage() {
  return (
    <div className="min-h-screen" style={{ background: C.parchment, color: C.deep }}>
      <NavbarShell />

      {/* Hero */}
      <section style={{ background: `linear-gradient(135deg, ${C.deep} 0%, #6B0A48 100%)` }} className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.22em]" style={{ background: 'rgba(230,210,170,0.15)', color: C.sand, border: '1px solid rgba(230,210,170,0.25)' }}>
            Legal
          </div>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl" style={{ color: C.parchment, fontFamily: 'var(--font-display, serif)' }}>
            Privacy Policy
          </h1>
          <p className="mt-4 text-base" style={{ color: 'rgba(230,210,170,0.75)' }}>
            Last updated: March 16, 2026
          </p>
        </div>
      </section>

      {/* Content */}
      <main className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
        <p className="mb-10 text-base leading-7" style={{ color: C.muted }}>
          At Press Narrixa, we take your privacy seriously. This policy describes how we collect, use, and protect your personal information when you use our press release distribution platform.
        </p>
        <div className="space-y-5">
          {sections.map((section, i) => (
            <div key={section.title} className="rounded-xl p-6" style={{ background: C.cardBg, border: `1px solid ${C.border}` }}>
              <div className="flex items-start gap-4">
                <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-bold" style={{ background: 'rgba(66,3,44,0.10)', color: C.deep }}>
                  {i + 1}
                </span>
                <div>
                  <h3 className="text-base font-semibold" style={{ color: C.deep }}>{section.title}</h3>
                  <p className="mt-2 text-sm leading-7" style={{ color: C.muted }}>{section.body}</p>
                </div>
              </div>
            </div>
          ))}
        </div>


      </main>

      <Footer />
    </div>
  )
}
