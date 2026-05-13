'use client'

import { useMemo, useState } from 'react'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Search, Menu, X, User, FileText, Building2, LayoutGrid, Tag, Image as ImageIcon, ChevronRight, Sparkles, MapPin, Plus, BarChart, Mail, Users, Globe } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useAuth } from '@/lib/auth-context'
import { SITE_CONFIG, type TaskKey } from '@/lib/site-config'
import { cn } from '@/lib/utils'
import { siteContent } from '@/config/site.content'
import { getFactoryState } from '@/design/factory/get-factory-state'
import { NAVBAR_OVERRIDE_ENABLED, NavbarOverride } from '@/overrides/navbar'

const NavbarAuthControls = dynamic(() => import('@/components/shared/navbar-auth-controls').then((mod) => mod.NavbarAuthControls), {
  ssr: false,
  loading: () => null,
})

const taskIcons: Record<TaskKey, any> = {
  article: FileText,
  listing: Building2,
  sbm: LayoutGrid,
  classified: Tag,
  image: ImageIcon,
  profile: User,
  social: LayoutGrid,
  pdf: FileText,
  org: Building2,
  comment: FileText,
  mediaDistribution: FileText,
}

const variantClasses = {
  'compact-bar': {
    shell: 'border-b border-gray-200 bg-white text-gray-900 shadow-sm',
    logo: 'rounded-lg border-2 border-[#E02401] bg-white shadow-lg',
    active: 'bg-[#E02401] text-white',
    idle: 'text-gray-700 hover:text-[#E02401] font-medium',
    cta: 'rounded-full bg-[#E02401] text-white hover:bg-[#C01E01] shadow-lg',
    mobile: 'border-t border-gray-200 bg-white',
  },
  'editorial-bar': {
    shell: 'border-b border-gray-200 bg-white text-gray-900 shadow-sm',
    logo: 'rounded-lg border-2 border-[#E02401] bg-white shadow-lg',
    active: 'bg-[#E02401] text-white',
    idle: 'text-gray-700 hover:text-[#E02401] font-medium',
    cta: 'rounded-full bg-[#E02401] text-white hover:bg-[#C01E01] shadow-lg',
    mobile: 'border-t border-gray-200 bg-white',
  },
  'floating-bar': {
    shell: 'border-b border-gray-200 bg-white text-gray-900 shadow-sm',
    logo: 'rounded-lg border-2 border-[#E02401] bg-white shadow-lg',
    active: 'bg-[#E02401] text-white',
    idle: 'text-gray-700 hover:text-[#E02401] font-medium',
    cta: 'rounded-full bg-[#E02401] text-white hover:bg-[#C01E01] shadow-lg',
    mobile: 'border-t border-gray-200 bg-white',
  },
  'utility-bar': {
    shell: 'border-b border-gray-200 bg-white text-gray-900 shadow-sm',
    logo: 'rounded-lg border-2 border-[#E02401] bg-white shadow-lg',
    active: 'bg-[#E02401] text-white',
    idle: 'text-gray-700 hover:text-[#E02401] font-medium',
    cta: 'rounded-full bg-[#E02401] text-white hover:bg-[#C01E01] shadow-lg',
    mobile: 'border-t border-gray-200 bg-white',
  },
} as const

const directoryPalette = {
  'directory-clean': {
    shell: 'border-b border-slate-200 bg-white/94 text-slate-950 shadow-[0_1px_0_rgba(15,23,42,0.04)] backdrop-blur-xl',
    logo: 'rounded-2xl border border-slate-200 bg-slate-50',
    nav: 'text-slate-600 hover:text-slate-950',
    search: 'border border-slate-200 bg-slate-50 text-slate-600',
    cta: 'bg-slate-950 text-white hover:bg-slate-800',
    post: 'border border-slate-200 bg-white text-slate-950 hover:bg-slate-50',
    mobile: 'border-t border-slate-200 bg-white',
  },
  'market-utility': {
    shell: 'border-b border-[#d7deca] bg-[#f4f6ef]/96 text-[#1f2617] shadow-[0_1px_0_rgba(64,76,34,0.06)] backdrop-blur-xl',
    logo: 'rounded-xl border border-[#d7deca] bg-white',
    nav: 'text-[#56604b] hover:text-[#1f2617]',
    search: 'border border-[#d7deca] bg-white text-[#56604b]',
    cta: 'bg-[#1f2617] text-[#edf5dc] hover:bg-[#2f3a24]',
    post: 'border border-[#d7deca] bg-white text-[#1f2617] hover:bg-[#eef2e4]',
    mobile: 'border-t border-[#d7deca] bg-[#f4f6ef]',
  },
} as const

export function Navbar() {
  if (NAVBAR_OVERRIDE_ENABLED) {
    return <NavbarOverride />
  }

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const { isAuthenticated } = useAuth()
  const { recipe } = getFactoryState()

  // Custom navigation for Reporterahead with specific pages
  const customNavigation = [
    { name: 'Home', href: '/', key: 'home', label: 'Home', route: '/' },
    { name: 'Release Media', href: '/press-releases', key: 'press-releases', label: 'Release Media', route: '/press-releases' },
    { name: 'Pricing', href: '/pricing', key: 'pricing', label: 'Pricing', route: '/pricing' },
    { name: 'About', href: '/about', key: 'about', label: 'About', route: '/about' },
    { name: 'Blog', href: '/blog', key: 'blog', label: 'Blog', route: '/blog' },
    { name: 'Contact', href: '/contact', key: 'contact', label: 'Contact', route: '/contact' }
  ]

  const navigation = useMemo(() => SITE_CONFIG.tasks.filter((task) => task.enabled && task.key !== 'profile'), [])
  const primaryNavigation = customNavigation
  const mobileNavigation = customNavigation.map((item) => ({
    name: item.name,
    href: item.href,
    icon: item.key === 'press-releases' ? FileText : item.key === 'pricing' ? BarChart : item.key === 'contact' ? Mail : item.key === 'about' ? Users : item.key === 'blog' ? FileText : Globe,
  }))
  const primaryTask = SITE_CONFIG.tasks.find((task) => task.key === recipe.primaryTask && task.enabled) || navigation[0]
  const isDirectoryProduct = recipe.homeLayout === 'listing-home' || recipe.homeLayout === 'classified-home'

  if (isDirectoryProduct) {
    const palette = directoryPalette[(recipe.brandPack === 'market-utility' ? 'market-utility' : 'directory-clean') as keyof typeof directoryPalette]

    return (
      <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-200">
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center">
                <img src="/favicon.png?v=20260401" alt={`${SITE_CONFIG.name} logo`} width="32" height="32" className="h-full w-full object-contain" />
              </div>
              <span className="text-xl font-bold text-gray-900">{SITE_CONFIG.name}</span>
            </Link>

            <div className="hidden lg:flex items-center gap-8">
              {customNavigation.map((task) => {
                const isActive = pathname === task.route || (task.route !== '/' && pathname.startsWith(task.route))
                return (
                  <Link 
                    key={task.key} 
                    href={task.route} 
                    className={cn(
                      'text-sm font-medium transition-colors hover:text-[#E02401]',
                      isActive ? 'text-[#E02401]' : 'text-gray-600'
                    )}
                  >
                    {task.label}
                  </Link>
                )
              })}
            </div>
          </div>

          <div className="flex items-center gap-4">
            {isAuthenticated ? (
              <NavbarAuthControls />
            ) : (
              <div className="hidden md:flex items-center gap-3">
                <Button variant="ghost" size="sm" asChild className="text-gray-700 hover:text-[#E02401]">
                  <Link href="/login">Sign In</Link>
                </Button>
                <Button size="sm" asChild className="bg-[#E02401] text-white hover:bg-[#C01E01] rounded-full">
                  <Link href="/pricing">Get Started</Link>
                </Button>
              </div>
            )}

            <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </nav>

        {isMobileMenuOpen && (
          <div className="border-t border-gray-200 bg-white">
            <div className="px-4 py-4 space-y-2">
              {customNavigation.map((item) => {
                const isActive = pathname === item.route || (item.route !== '/' && pathname.startsWith(item.route))
                return (
                  <Link 
                    key={item.key} 
                    href={item.route} 
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={cn(
                      'block px-3 py-2 text-sm font-medium transition-colors rounded-lg',
                      isActive 
                        ? 'bg-[#E02401] text-white' 
                        : 'text-gray-700 hover:text-[#E02401] hover:bg-gray-50'
                    )}
                  >
                    {item.label}
                  </Link>
                )
              })}
              
              {!isAuthenticated && (
                <div className="pt-4 border-t border-gray-200 space-y-2">
                  <Link 
                    href="/login" 
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block px-3 py-2 text-sm font-medium text-gray-700 hover:text-[#E02401]"
                  >
                    Sign In
                  </Link>
                  <Link 
                    href="/pricing" 
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block px-3 py-2 text-sm font-medium text-white bg-[#E02401] rounded-lg hover:bg-[#C01E01]"
                  >
                    Get Started
                  </Link>
                </div>
              )}
            </div>
          </div>
        )}
      </header>
    )
  }

  const style = variantClasses[recipe.navbar]
  const isFloating = recipe.navbar === 'floating-bar'
  const isEditorial = recipe.navbar === 'editorial-bar'
  const isUtility = recipe.navbar === 'utility-bar'

  return (
    <header className={cn('sticky top-0 z-50 w-full', style.shell)}>
      <nav className={cn('mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8 py-4')}>
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-3">
            <div className={cn('flex h-10 w-10 items-center justify-center overflow-hidden', style.logo)}>
              <img src="/favicon.png?v=20260401" alt={`${SITE_CONFIG.name} logo`} width="40" height="40" className="h-full w-full object-contain" />
            </div>
            <div>
              <span className="block text-lg font-bold text-gray-900">{SITE_CONFIG.name}</span>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-6">
            {primaryNavigation.map((task) => {
              const isActive = pathname === task.route || (task.route !== '/' && pathname.startsWith(task.route))
              return (
                <Link 
                  key={task.key} 
                  href={task.route} 
                  className={cn(
                    'text-sm font-medium transition-colors px-3 py-2 rounded-lg',
                    isActive 
                      ? 'bg-[#E02401] text-white' 
                      : 'text-gray-700 hover:text-[#E02401] hover:bg-gray-50'
                  )}
                >
                  {task.label}
                </Link>
              )
            })}
          </div>
        </div>

        <div className="flex items-center gap-4">
          {isAuthenticated ? (
            <NavbarAuthControls />
          ) : (
            <div className="hidden md:flex items-center gap-3">
              <Button variant="ghost" size="sm" asChild className="text-gray-700 hover:text-[#E02401]">
                <Link href="/login">Sign In</Link>
              </Button>
              <Button size="sm" asChild className={style.cta}>
                <Link href="/pricing">Get Started</Link>
              </Button>
            </div>
          )}

          <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div className="border-t border-gray-200 bg-white">
          <div className="px-4 py-4 space-y-2">
            {primaryNavigation.map((task) => {
              const isActive = pathname === task.route || (task.route !== '/' && pathname.startsWith(task.route))
              return (
                <Link 
                  key={task.key} 
                  href={task.route} 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    'flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors',
                    isActive 
                      ? 'bg-[#E02401] text-white' 
                      : 'text-gray-700 hover:text-[#E02401] hover:bg-gray-50'
                  )}
                >
                  <span>{task.label}</span>
                </Link>
              )
            })}
            
            {!isAuthenticated && (
              <div className="pt-4 border-t border-gray-200 space-y-2">
                <Link 
                  href="/login" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-3 py-2 text-sm font-medium text-gray-700 hover:text-[#E02401]"
                >
                  Sign In
                </Link>
                <Link 
                  href="/pricing" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-3 py-2 text-sm font-medium text-white bg-[#E02401] rounded-lg hover:bg-[#C01E01]"
                >
                  Get Started
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  )}
