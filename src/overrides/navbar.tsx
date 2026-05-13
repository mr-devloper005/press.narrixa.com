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
  { label: 'Release media', href: '/press-releases' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

export function NavbarOverride() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Top announcement bar — brand red */}
      <div className="bg-[#E02401] px-4 py-2 text-center text-sm font-medium text-white/90">
        {SITE_CONFIG.tagline}&nbsp;·&nbsp;Media intelligence
      </div>

      {/* Main nav bar — white */}
      <div className="border-b border-gray-200 bg-white shadow-sm">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">

          {/* Logo */}
          <Link href="/" className="flex shrink-0 items-center">
            <img
              src="/logo.png"
              alt={SITE_CONFIG.name}
              className="h-10 w-auto object-contain"
            />
          </Link>

          {/* Desktop nav links */}
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
                    'rounded-full px-4 py-2 text-sm font-medium transition-colors',
                    isActive
                      ? 'bg-[#E02401] text-white'
                      : 'text-gray-700 hover:bg-red-50 hover:text-[#E02401]'
                  )}
                >
                  {link.label}
                </Link>
              )
            })}
          </nav>

          {/* Right side: search + CTAs */}
          <div className="flex items-center gap-2">
            {/* Search icon */}
            <Link
              href="/search"
              className="hidden rounded-full p-2 text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-900 sm:flex"
              aria-label="Search"
            >
              <Search className="h-4 w-4" />
            </Link>

            {/* CTA buttons */}
            <div className="hidden items-center gap-2 md:flex">
              <Link
                href="/press-releases"
                className="rounded-full bg-[#E02401] px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#C01E01]"
              >
                Release media
              </Link>
            </div>

            {/* Mobile menu toggle */}
            <button
              className="rounded-full p-2 text-gray-600 hover:bg-gray-100 lg:hidden"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="border-t border-gray-200 bg-white px-4 pb-4 pt-2 lg:hidden">
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
                    className={cn(
                      'rounded-lg px-3 py-2 text-sm font-medium transition-colors',
                      isActive
                        ? 'bg-[#E02401] text-white'
                        : 'text-gray-700 hover:bg-red-50 hover:text-[#E02401]'
                    )}
                  >
                    {link.label}
                  </Link>
                )
              })}
            </nav>
            <div className="mt-4 flex flex-col gap-2 border-t border-gray-200 pt-4">
              <Link
                href="/press-releases"
                onClick={() => setMobileOpen(false)}
                className="rounded-full bg-[#E02401] px-4 py-2 text-center text-sm font-semibold text-white hover:bg-[#C01E01]"
              >
                Release media
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
