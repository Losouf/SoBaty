import { getPayload } from 'payload'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'

import config from '@/payload.config'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import RenderBlocks from '@/components/RenderBlocks'

type Locale = 'fr' | 'en'
const SUPPORTED_LOCALES: Locale[] = ['fr', 'en']
const DEFAULT_LOCALE: Locale = 'fr'

function parseSegments(slug?: string[]): { locale: Locale; pageSlug: string } {
  const segments = slug || []
  let locale: Locale = DEFAULT_LOCALE
  let rest = segments

  if (segments[0] && SUPPORTED_LOCALES.includes(segments[0] as Locale)) {
    locale = segments[0] as Locale
    rest = segments.slice(1)
  }

  const pageSlug = rest.length === 0 ? 'home' : rest.join('/')
  return { locale, pageSlug }
}

type Props = {
  params: Promise<{ slug?: string[] }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const { locale, pageSlug } = parseSegments(slug)
  const payload = await getPayload({ config })

  const { docs } = await payload.find({
    collection: 'pages',
    where: { slug: { equals: pageSlug } },
    locale,
    limit: 1,
  })

  const page = docs[0]
  if (!page) return {}

  return {
    title: page.meta?.title || page.title,
    description: page.meta?.description || undefined,
    keywords: page.meta?.keywords || undefined,
  }
}

export default async function Page({ params }: Props) {
  const { slug } = await params
  const { locale, pageSlug } = parseSegments(slug)

  const payload = await getPayload({ config })

  const [pagesResult, header, footer] = await Promise.all([
    payload.find({
      collection: 'pages',
      where: { slug: { equals: pageSlug } },
      locale,
      limit: 1,
    }),
    payload.findGlobal({ slug: 'header', locale, depth: 2 }),
    payload.findGlobal({ slug: 'footer', locale, depth: 2 }),
  ])

  const page = pagesResult.docs[0]
  if (!page) notFound()

  return (
    <>
      <Navbar data={header} />
      <main>
        <RenderBlocks blocks={page.layout} />
      </main>
      <Footer data={footer} />
    </>
  )
}
