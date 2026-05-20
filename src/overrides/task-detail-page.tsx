import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Newspaper, Search, ArrowLeft, ChevronRight } from 'lucide-react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { ContentImage } from '@/components/shared/content-image'
import { fetchTaskPostBySlug, fetchTaskPosts, buildPostUrl } from '@/lib/task-data'
import type { TaskKey } from '@/lib/site-config'
import type { SitePost } from '@/lib/site-connector'
import { SITE_CONFIG } from '@/lib/site-config'
import { formatRichHtml, RichContent } from '@/components/shared/rich-content'
import { CATEGORY_OPTIONS, normalizeCategory } from '@/lib/categories'

export const TASK_DETAIL_PAGE_OVERRIDE_ENABLED = true

const C = {
  deep:      '#42032C',
  orange:    '#D36B00',
  sand:      '#E6D2AA',
  parchment: '#F1EFDC',
  muted:     '#7A4A3A',
  border:    '#D4C9A8',
  cardBg:    '#FAF8F0',
}

export async function TaskDetailPageOverride({ slug }: { task: TaskKey; slug: string }) {
  const post = await fetchTaskPostBySlug('mediaDistribution', slug)
  if (!post) notFound()

  const recent = (await fetchTaskPosts('mediaDistribution', 8, { fresh: true }))
    .filter((item) => item.slug !== slug)
    .slice(0, 5)

  const content = (post.content || {}) as Record<string, unknown>
  const hero =
    typeof content.image === 'string'
      ? content.image
      : typeof content.imageUrl === 'string'
        ? content.imageUrl
        : typeof content.coverImage === 'string'
          ? content.coverImage
          : post.imageUrl || null
  const category = String((content as any)?.category || 'Update')
  const html = formatRichHtml(
    (content.body as string) || post.summary || '',
    'Post body will appear here.'
  )

  const publishedDate = new Date(post.publishedAt || Date.now()).toLocaleDateString('en-US', {
    month: 'long', day: 'numeric', year: 'numeric',
  })

  return (
    <div className="min-h-screen" style={{ background: C.parchment, color: C.deep }}>
      <NavbarShell />

      {/* Hero header */}
      <section
        style={{ background: `linear-gradient(135deg, ${C.deep} 0%, #6B0A48 100%)` }}
        className="py-16"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="mb-6 flex items-center gap-2 text-xs" style={{ color: 'rgba(230,210,170,0.65)' }}>
            <Link href="/" className="transition-opacity hover:opacity-80" style={{ color: 'rgba(230,210,170,0.65)' }}>Home</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <Link href="/press" className="transition-opacity hover:opacity-80" style={{ color: 'rgba(230,210,170,0.65)' }}>Newsroom</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="truncate max-w-xs" style={{ color: C.sand }}>{post.title}</span>
          </nav>

          {/* Category badge */}
          <div className="mb-4">
            <span
              className="inline-flex items-center rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em]"
              style={{ background: 'rgba(211,107,0,0.25)', color: C.sand }}
            >
              {category}
            </span>
          </div>

          {/* Title */}
          <h1
            className="max-w-4xl text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl"
            style={{ color: C.parchment, fontFamily: 'var(--font-display, serif)' }}
          >
            {post.title}
          </h1>

          {/* Meta */}
          <div className="mt-5 flex flex-wrap items-center gap-4 text-sm" style={{ color: 'rgba(230,210,170,0.75)' }}>
            <span>by {post.authorName || 'Editorial Desk'}</span>
          </div>
        </div>
      </section>

      {/* Main content */}
      <main className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[minmax(0,1fr)_300px]">

        {/* Article */}
        <article>
          {/* Article body */}
          <div
            className="rounded-xl p-7 prose prose-lg max-w-none
              prose-headings:font-bold prose-headings:tracking-tight
              prose-a:underline prose-a:underline-offset-2"
            style={{
              background: C.cardBg,
              border: `1px solid ${C.border}`,
              '--tw-prose-body': C.muted,
              '--tw-prose-headings': C.deep,
              '--tw-prose-links': C.orange,
              '--tw-prose-bold': C.deep,
              '--tw-prose-counters': C.muted,
              '--tw-prose-bullets': C.orange,
              '--tw-prose-hr': C.border,
              '--tw-prose-quotes': C.deep,
              '--tw-prose-quote-borders': C.orange,
              '--tw-prose-code': C.deep,
              '--tw-prose-pre-bg': C.sand,
            } as React.CSSProperties}
          >
            <RichContent html={html} />
          </div>

          {/* Prev / Next */}
          {recent.slice(0, 2).length > 0 && (
            <div
              className="mt-10 grid gap-0 overflow-hidden rounded-xl md:grid-cols-2"
              style={{ border: `1px solid ${C.border}` }}
            >
              {recent.slice(0, 2).map((item, index) => (
                <Link
                  key={item.id}
                  href={`/updates/${item.slug}`}
                  className="block p-6 transition-colors hover:opacity-80"
                  style={{
                    background: C.cardBg,
                    borderRight: index === 0 ? `1px solid ${C.border}` : undefined,
                  }}
                >
                  <p
                    className="text-xs font-semibold uppercase tracking-[0.18em]"
                    style={{ color: C.orange }}
                  >
                    {index === 0 ? '← Previous Post' : 'Next Post →'}
                  </p>
                  <p className="mt-2 text-sm font-medium leading-6" style={{ color: C.deep }}>
                    {item.title}
                  </p>
                </Link>
              ))}
            </div>
          )}

          {/* Back link */}
          <div className="mt-8">
            <Link
              href="/press"
              className="inline-flex items-center gap-2 text-sm font-medium transition-opacity hover:opacity-75"
              style={{ color: C.muted }}
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Newsroom
            </Link>
          </div>
        </article>

        {/* Sidebar */}
        <aside className="space-y-6">
          {/* Search */}
          <div
            className="rounded-xl p-5"
            style={{ background: C.cardBg, border: `1px solid ${C.border}` }}
          >
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: C.muted }}>
              Search
            </p>
            <div className="flex">
              <input
                className="h-11 flex-1 rounded-l-lg border px-4 text-sm outline-none"
                style={{ background: C.parchment, borderColor: C.border, color: C.deep }}
                placeholder="Search updates…"
              />
              <button
                className="flex h-11 w-11 items-center justify-center rounded-r-lg transition-opacity hover:opacity-90"
                style={{ background: C.deep, color: C.sand }}
                aria-label="Search"
              >
                <Search className="h-4 w-4" />
              </button>
            </div>

            {hero ? (
              <div className="relative mt-10 aspect-[16/9] w-full overflow-hidden rounded-[1.25rem] border border-border bg-muted shadow-sm">
                <ContentImage src={hero} alt={post.title} fill className="object-cover" priority />
              </div>
            ) : null}

            <RichContent html={html} className="article-content mt-10 max-w-none text-[1.05rem] leading-[1.75] text-foreground/90" />
          </div>

          {/* Recent posts */}
          <div
            className="rounded-xl p-5"
            style={{ background: C.cardBg, border: `1px solid ${C.border}` }}
          >
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: C.muted }}>
              Recent Posts
            </p>
            <div className="space-y-4">
              {recent.map((item) => (
                <Link
                  key={item.id}
                  href={`/updates/${item.slug}`}
                  className="block border-b pb-4 last:border-b-0 last:pb-0 transition-opacity hover:opacity-75"
                  style={{ borderColor: C.border }}
                >
                  <span
                    className="mb-1 inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.14em]"
                    style={{ background: 'rgba(211,107,0,0.10)', color: C.orange }}
                  >
                    {String((item.content as any)?.category || 'Update')}
                  </span>
                  <p className="text-sm font-medium leading-5" style={{ color: C.deep }}>
                    {item.title}
                  </p>
                </Link>
              ))}
            </div>
          </div>

          {/* Submit CTA */}
          <div
            className="rounded-xl p-5 text-center"
            style={{ background: `linear-gradient(135deg, ${C.deep} 0%, #6B0A48 100%)` }}
          >
            <Newspaper className="mx-auto mb-3 h-7 w-7" style={{ color: C.sand }} />
            <p className="text-sm font-semibold" style={{ color: C.sand }}>
              Have a story to share?
            </p>
            <p className="mt-1 text-xs" style={{ color: 'rgba(230,210,170,0.70)' }}>
              Submit your press release and reach thousands of journalists.
            </p>
            <Link
              href="/press-releases"
              className="mt-4 inline-flex items-center gap-1.5 rounded-lg px-5 py-2.5 text-xs font-semibold transition-all hover:opacity-90"
              style={{ background: C.orange, color: C.parchment }}
            >
              Submit a Release
            </Link>
          </div>
        </aside>
      </main>

      <Footer />
    </div>
  )
}
