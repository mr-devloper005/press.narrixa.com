'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Search, Menu, X } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/site-config'
import { cn } from '@/lib/utils'

export const NAVBAR_OVERRIDE_ENABLED = true

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Press Releases', href: '/press-releases' },
  { label: 'Newsroom', href: '/press' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

export function NavbarOverride() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Top ticker bar */}
      <div
        style={{ background: '#42032C' }}
        className="px-4 py-2 text-center text-xs font-semibold tracking-[0.18em] uppercase text-[#E6D2AA]"
      >
        {SITE_CONFIG.tagline}&nbsp;·&nbsp;Independent Media Intelligence
      </div>

      {/* Main nav */}
      <div
        style={{ background: '#F1EFDC', borderBottom: '1px solid #D4C9A8' }}
        className="shadow-sm"
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">

          {/* Logo */}
          <Link href="/" className="flex shrink-0 items-center gap-3">
            <img
              src="/logo.svg"
              alt={SITE_CONFIG.name}
              className="h-9 w-auto object-contain"
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => {
              const isActive =
                link.href === '/'
                  ? pathname === '/'
                  : pathname.startsWith(link.href)
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'rounded-md px-4 py-2 text-sm font-medium transition-colors',
                    isActive
                      ? 'text-[#F1EFDC]'
                      : 'text-[#42032C] hover:bg-[#E6D2AA]'
                  )}
                  style={isActive ? { background: '#42032C' } : {}}
                >
                  {link.label}
                </Link>
              )
            })}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-2">
            <Link
              href="/search"
              className="hidden rounded-full p-2 transition-colors hover:bg-[#E6D2AA] sm:flex"
              style={{ color: '#42032C' }}
              aria-label="Search"
            >
              <Search className="h-4 w-4" />
            </Link>

            <div className="hidden items-center gap-2 md:flex">
              <Link
                href="/press-releases"
                className="rounded-md px-4 py-2 text-sm font-semibold transition-all hover:opacity-90"
                style={{ background: '#D36B00', color: '#F1EFDC' }}
              >
                Submit Release
              </Link>
            </div>

            <button
              className="rounded-full p-2 transition-colors hover:bg-[#E6D2AA] lg:hidden"
              style={{ color: '#42032C' }}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div
            style={{ borderTop: '1px solid #D4C9A8', background: '#F1EFDC' }}
            className="px-4 pb-4 pt-2 lg:hidden"
          >
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => {
                const isActive =
                  link.href === '/'
                    ? pathname === '/'
                    : pathname.startsWith(link.href)
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="rounded-md px-3 py-2 text-sm font-medium transition-colors"
                    style={
                      isActive
                        ? { background: '#42032C', color: '#F1EFDC' }
                        : { color: '#42032C' }
                    }
                  >
                    {link.label}
                  </Link>
                )
              })}
            </nav>
            <div
              style={{ borderTop: '1px solid #D4C9A8' }}
              className="mt-4 flex flex-col gap-2 pt-4"
            >
              <Link
                href="/press-releases"
                onClick={() => setMobileOpen(false)}
                className="rounded-md px-4 py-2 text-center text-sm font-semibold transition-all hover:opacity-90"
                style={{ background: '#D36B00', color: '#F1EFDC' }}
              >
                Submit Release
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
