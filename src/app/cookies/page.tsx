import type { Metadata } from 'next'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { buildPageMetadata } from '@/lib/seo'

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata({ path: '/cookies', title: 'Cookie Policy — Press Narrixa', description: 'Details about the cookies we use and how to manage them.' })
}

const C = { deep: '#42032C', orange: '#D36B00', sand: '#E6D2AA', parchment: '#F1EFDC', muted: '#7A4A3A', border: '#D4C9A8', cardBg: '#FAF8F0' }

const sections = [
  { title: 'What Are Cookies?', body: 'Cookies are small text files that are placed on your device when you visit a website. They are widely used to make websites work more efficiently and to provide information to the website owners. Cookies help us remember your preferences and improve your experience on our platform.' },
  { title: 'Essential Cookies', body: 'These cookies are necessary for the website to function properly. They enable core functionality such as security, network management, and account authentication. You cannot opt out of these cookies as the website cannot function properly without them.' },
  { title: 'Analytics Cookies', body: 'We use analytics cookies to understand how visitors interact with our website. These cookies help us measure traffic, identify popular pages, and improve our services. The data collected is aggregated and anonymous. We use tools such as Google Analytics for this purpose.' },
  { title: 'Preference Cookies', body: 'Preference cookies allow our website to remember information that changes the way the site behaves or looks, such as your preferred language, region, or saved filters. These cookies make your experience more personalised and convenient.' },
  { title: 'Marketing Cookies', body: 'Marketing cookies are used to track visitors across websites. The intention is to display ads that are relevant and engaging for the individual user. We only use these cookies with your explicit consent, which you can withdraw at any time.' },
  { title: 'Third-Party Cookies', body: 'Some cookies on our site are set by third-party services that appear on our pages, such as embedded social media buttons or payment processors. These third parties have their own privacy policies and we have no control over their cookies.' },
  { title: 'Managing Your Cookies', body: 'You can control and manage cookies in your browser settings. Most browsers allow you to refuse cookies or delete existing ones. Please note that disabling certain cookies may affect the functionality of our website. You can also use our cookie preference centre to manage your choices.' },
]

export default function CookiesPage() {
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
            Cookie Policy
          </h1>
          <p className="mt-4 text-base" style={{ color: 'rgba(230,210,170,0.75)' }}>
            Last updated: March 16, 2026
          </p>
        </div>
      </section>

      {/* Content */}
      <main className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
        <p className="mb-10 text-base leading-7" style={{ color: C.muted }}>
          This Cookie Policy explains how Press Narrixa uses cookies and similar tracking technologies when you visit our platform. By continuing to use our site, you consent to our use of cookies as described in this policy.
        </p>

        {/* Cookie type summary badges */}
        <div className="mb-8 flex flex-wrap gap-3">
          {[
            { label: 'Essential', color: C.deep },
            { label: 'Analytics', color: C.orange },
            { label: 'Preferences', color: '#7A4A3A' },
            { label: 'Marketing', color: '#5C0840' },
          ].map((badge) => (
            <span
              key={badge.label}
              className="inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em]"
              style={{ background: 'rgba(66,3,44,0.08)', color: badge.color, border: `1px solid rgba(66,3,44,0.12)` }}
            >
              {badge.label}
            </span>
          ))}
        </div>

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
