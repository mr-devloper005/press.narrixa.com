import type { Metadata } from 'next'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { buildPageMetadata } from '@/lib/seo'
import { SITE_CONFIG } from '@/lib/site-config'

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata({ path: '/terms', title: 'Terms of Service — Press Narrixa', description: `The rules and guidelines for using ${SITE_CONFIG.name}.` })
}

const C = { deep: '#42032C', orange: '#D36B00', sand: '#E6D2AA', parchment: '#F1EFDC', muted: '#7A4A3A', border: '#D4C9A8', cardBg: '#FAF8F0' }

const sections = [
  { title: 'Acceptance of Terms', body: 'By accessing or using Press Narrixa, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services. We reserve the right to update these terms at any time, and your continued use of the platform constitutes acceptance of any changes.' },
  { title: 'Account Registration', body: 'To use certain features of our platform, you must register for an account. You agree to provide accurate, current, and complete information during registration and to update such information to keep it accurate. You are responsible for maintaining the confidentiality of your account credentials.' },
  { title: 'Content Ownership', body: 'You retain ownership of all content you submit, post, or display on or through our services. By submitting content, you grant Press Narrixa a worldwide, non-exclusive, royalty-free licence to use, reproduce, and distribute your content for the purpose of providing our services.' },
  { title: 'Acceptable Use', body: 'You agree not to use our services to submit false or misleading press releases, spam, harass other users, violate any applicable laws, infringe on intellectual property rights, or distribute malware or harmful content. Violations may result in immediate account termination.' },
  { title: 'Distribution Services', body: 'Press Narrixa provides press release distribution services on an "as is" basis. While we strive to distribute your content to our network of media outlets, we cannot guarantee specific placement, pickup, or coverage by any particular publication or journalist.' },
  { title: 'Payment & Refunds', body: 'Fees for our services are charged as described on our pricing page. All payments are processed securely. We offer a satisfaction guarantee — if you are not satisfied with your distribution results, contact us within 7 days for a review and potential refund or redistribution.' },
  { title: 'Limitation of Liability', body: 'To the maximum extent permitted by law, Press Narrixa shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use our services.' },
  { title: 'Termination', body: 'We reserve the right to suspend or terminate your account at any time for violations of these terms. You may also terminate your account at any time by contacting our support team.' },
]

export default function TermsPage() {
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
            Terms of Service
          </h1>
          <p className="mt-4 text-base" style={{ color: 'rgba(230,210,170,0.75)' }}>
            Last updated: March 16, 2026
          </p>
        </div>
      </section>

      {/* Content */}
      <main className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
        <p className="mb-10 text-base leading-7" style={{ color: C.muted }}>
          Please read these Terms of Service carefully before using {SITE_CONFIG.name}. These terms govern your use of our press release distribution platform and services.
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
