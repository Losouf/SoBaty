import Hero from './sections/Hero'
import Features from './sections/Features'
import Pricing from './sections/Pricing'
import Testimonials from './sections/Testimonials'
import FAQ from './sections/FAQ'
import type { Page } from '@/payload-types'

type Block = NonNullable<Page['layout']>[number]

export default function RenderBlocks({ blocks }: { blocks?: Block[] | null }) {
  if (!blocks || blocks.length === 0) return null

  return (
    <>
      {blocks.map((block, i) => {
        switch (block.blockType) {
          case 'hero':
            return <Hero key={i} {...block} />
          case 'features':
            return <Features key={i} {...block} />
          case 'pricing':
            return <Pricing key={i} {...block} />
          case 'testimonials':
            return <Testimonials key={i} {...block} />
          case 'faq':
            return <FAQ key={i} {...block} />
          default:
            return null
        }
      })}
    </>
  )
}
