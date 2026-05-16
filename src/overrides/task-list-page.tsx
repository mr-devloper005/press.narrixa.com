import Link from 'next/link'
import { Newspaper, Search } from 'lucide-react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { fetchTaskPosts } from '@/lib/task-data'
import type { TaskKey } from '@/lib/site-config'

export const TASK_LIST_PAGE_OVERRIDE_ENABLED = true

const C = {
  deep:      '#42032C',
  orange:    '#D36B00',
  sand:      '#E6D2AA',
  parchment: '#F1EFDC',
  muted:     '#7A4A3A',
  border:    '#D4C9A8',
  cardBg:    '#FAF8F0',
}

function excerpt(text?: string | null) {
  const value = (text || '').trim()
  if (!value) return 'Read the full post for the complete update.'
  return value.length > 220 ? value.slice(0, 217).trimEnd() + '...' : value
}

export async function TaskListPageOverride(_: { task: TaskKey; category?: string }) {
  const posts = await fetchTaskPosts('mediaDistribution', 24, { fresh: true })
  const recent = posts.slice(0, 6)

  return (
    <div className="min-h-screen" style={{ background: C.parchment, color: C.deep }}>
      <NavbarShell />

      {/* Page header */}
      <section
        style={{ background: `linear-gradient(135deg, ${C.deep} 0%, #6B0A48 100%)` }}
        className="py-16"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <div
              className="flex h-10 w-10 items-center justify-center rounded-lg"
              style={{ background: 'rgba(211,107,0,0.25)' }}
            >
              <Newspaper className="h-5 w-5" style={{ color: C.sand }} />
            </div>
            <span
              className="text-xs font-semibold uppercase tracking-[0.22em]"
              style={{ color: 'rgba(230,210,170,0.70)' }}
            >
              Newsroom
            </span>
          </div>
          <h1
            className="text-4xl font-bold tracking-tight sm:text-5xl"
            style={{ color: C.parchment, fontFamily: 'var(--font-display, serif)' }}
          >
            Latest Updates
          </h1>
          <p className="mt-3 text-lg" style={{ color: 'rgba(230,210,170,0.78)' }}>
            Press releases, announcements, and newsroom updates
          </p>
        </div>
      </section>

      {/* Content */}
      <main className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[minmax(0,1fr)_300px]">

        {/* Articles */}
        <div className="space-y-10">
          {posts.map((post) => (
            <article
              key={post.id}
              className="rounded-xl p-7"
              style={{ background: C.cardBg, border: `1px solid ${C.border}` }}
            >
              {/* Category */}
              <span
                className="inline-flex items-center rounded-full px-3 py-0.5 text-[11px] font-semibold uppercase tracking-[0.18em]"
                style={{ background: 'rgba(211,107,0,0.10)', color: C.orange }}
              >
                {String((post.content as any)?.category || 'Update')}
              </span>

              {/* Title */}
              <h2
                className="mt-3 text-2xl font-bold leading-snug sm:text-3xl"
                style={{ color: C.deep, fontFamily: 'var(--font-display, serif)' }}
              >
                <Link
                  href={`/updates/${post.slug}`}
                  className="transition-opacity hover:opacity-75"
                >
                  {post.title}
                </Link>
              </h2>

              {/* Meta */}
              <div className="mt-3 flex flex-wrap items-center gap-3 text-xs" style={{ color: C.muted }}>
                <span
                  className="rounded px-2.5 py-1 text-xs font-medium"
                  style={{ background: 'rgba(66,3,44,0.08)', color: C.deep }}
                >
                  {new Date(post.publishedAt || Date.now()).toLocaleDateString('en-US', {
                    month: 'long', day: 'numeric', year: 'numeric',
                  })}
                </span>
                <span>by {post.authorName || 'Editorial Desk'}</span>
              </div>

              {/* Excerpt */}
              <p className="mt-4 text-base leading-7" style={{ color: C.muted }}>
                {excerpt(post.summary)}
              </p>

              {/* CTA */}
              <div className="mt-6">
                <Link
                  href={`/updates/${post.slug}`}
                  className="inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold transition-all hover:opacity-90"
                  style={{ background: C.deep, color: C.parchment }}
                >
                  Continue Reading
                </Link>
              </div>
            </article>
          ))}
        </div>

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
                style={{
                  background: C.parchment,
                  borderColor: C.border,
                  color: C.deep,
                }}
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
              {recent.map((post) => (
                <Link
                  key={post.id}
                  href={`/updates/${post.slug}`}
                  className="block border-b pb-4 last:border-b-0 last:pb-0 transition-opacity hover:opacity-75"
                  style={{ borderColor: C.border }}
                >
                  <span
                    className="mb-1 inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.14em]"
                    style={{ background: 'rgba(211,107,0,0.10)', color: C.orange }}
                  >
                    {String((post.content as any)?.category || 'Update')}
                  </span>
                  <p className="text-sm font-medium leading-5" style={{ color: C.deep }}>
                    {post.title}
                  </p>
                  <p className="mt-1 text-xs" style={{ color: C.muted }}>
                    {new Date(post.publishedAt || Date.now()).toLocaleDateString('en-US', {
                      month: 'short', day: 'numeric', year: 'numeric',
                    })}
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
