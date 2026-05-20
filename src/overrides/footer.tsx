import Link from 'next/link'
import { Twitter, Linkedin, Mail } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/site-config'
import { fetchTaskPosts } from '@/lib/task-data'
import { CATEGORY_OPTIONS, normalizeCategory } from '@/lib/categories'

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

export async function FooterOverride() {
  const posts = await fetchTaskPosts('mediaDistribution', 100, { fresh: false })
  const categorySlugs = Array.from(
    new Set(
      posts
        .map((post) => normalizeCategory(post.category || ''))
        .filter(Boolean),
    ),
  )
  const categories = categorySlugs
    .map((slug) => CATEGORY_OPTIONS.find((category) => category.slug === slug))
    .filter((category): category is (typeof CATEGORY_OPTIONS)[number] => Boolean(category))

  return (
    <footer style={{ background: '#42032C', color: '#E6D2AA' }}>
      {/* Main footer body */}
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">

          {/* Brand column */}
          <div>
            <Link href="/" className="flex items-center gap-3">
              <img
                src="/logo-icon.svg"
                alt={SITE_CONFIG.name}
                className="h-10 w-10 object-contain"
              />
              <span
                style={{ fontFamily: 'var(--font-display, serif)', color: '#F1EFDC' }}
                className="text-xl font-bold"
              >
                {SITE_CONFIG.name}
              </span>
            </Link>
            <p className="mt-5 max-w-xs text-sm leading-7" style={{ color: '#C4A98A' }}>
              {SITE_CONFIG.description}
            </p>
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

        {categories.length ? (
          <div className="mt-8 border-t border-current/10 pt-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] opacity-70">Categories</p>
            <div className="mt-3 flex flex-wrap gap-3 text-sm">
              {categories.map((category) => (
                <Link
                  key={category.slug}
                  href={`/updates?category=${category.slug}`}
                  className="opacity-80 underline-offset-4 transition hover:opacity-100 hover:underline"
                >
                  {category.name}
                </Link>
              ))}
            </div>
          </div>
        ) : null}

      </div>
    </footer>
  )
}
