import Link from 'next/link'
import { Twitter, Linkedin, Mail, ArrowRight } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/site-config'

export const FOOTER_OVERRIDE_ENABLED = true

const footerNav = {
  company: [
    { label: 'About Us', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ],
  services: [
    { label: 'Press Releases', href: '/press-releases' },
    { label: 'Newsroom', href: '/press' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
    { label: 'Cookie Policy', href: '/cookies' },
  ],
}

const socialLinks = [
  { label: 'Twitter', href: 'https://twitter.com', icon: Twitter },
  { label: 'LinkedIn', href: 'https://linkedin.com', icon: Linkedin },
  { label: 'Email', href: 'mailto:contact@press.narrixa.com', icon: Mail },
]

export function FooterOverride() {
  return (
    <footer style={{ background: '#42032C', color: '#E6D2AA' }}>
      {/* Main footer body */}
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">

          {/* Brand column */}
          <div>
            <Link href="/" className="flex items-center gap-3">
              <img
                src="/logo.svg"
                alt={SITE_CONFIG.name}
                className="h-10 w-auto object-contain brightness-0 invert"
              />
            </Link>
            <p className="mt-5 max-w-xs text-sm leading-7" style={{ color: '#C4A98A' }}>
              {SITE_CONFIG.description}
            </p>
            {/* Newsletter mini-form */}
            <div className="mt-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: '#E6D2AA' }}>
                Stay informed
              </p>
              <div className="mt-3 flex gap-0">
                <input
                  type="email"
                  placeholder="Your email"
                  className="h-10 flex-1 rounded-l-md border-0 px-3 text-sm outline-none"
                  style={{ background: 'rgba(241,239,220,0.12)', color: '#F1EFDC' }}
                />
                <button
                  style={{ background: '#D36B00', color: '#F1EFDC' }}
                  className="flex h-10 w-10 items-center justify-center rounded-r-md transition-opacity hover:opacity-90"
                  aria-label="Subscribe"
                >
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
            {/* Social links */}
            <div className="mt-6 flex gap-3">
              {socialLinks.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full transition-colors hover:bg-[#D36B00]"
                  style={{ border: '1px solid rgba(230,210,170,0.25)', color: '#E6D2AA' }}
                >
                  <item.icon className="h-4 w-4" />
                </Link>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <h4
              className="text-xs font-semibold uppercase tracking-[0.22em]"
              style={{ color: '#E6D2AA' }}
            >
              Company
            </h4>
            <ul className="mt-4 space-y-3">
              {footerNav.company.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm transition-colors hover:text-[#D36B00]"
                    style={{ color: '#C4A98A' }}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4
              className="text-xs font-semibold uppercase tracking-[0.22em]"
              style={{ color: '#E6D2AA' }}
            >
              Services
            </h4>
            <ul className="mt-4 space-y-3">
              {footerNav.services.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm transition-colors hover:text-[#D36B00]"
                    style={{ color: '#C4A98A' }}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4
              className="text-xs font-semibold uppercase tracking-[0.22em]"
              style={{ color: '#E6D2AA' }}
            >
              Legal
            </h4>
            <ul className="mt-4 space-y-3">
              {footerNav.legal.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm transition-colors hover:text-[#D36B00]"
                    style={{ color: '#C4A98A' }}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: '1px solid rgba(230,210,170,0.15)' }}>
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-5 text-xs sm:px-6 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <p style={{ color: '#C4A98A' }}>
            &copy; {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved.
          </p>
          <p style={{ color: '#C4A98A' }}>
            Independent media distribution platform
          </p>
        </div>
      </div>
    </footer>
  )
}
