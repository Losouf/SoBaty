import Hero from './sections/Hero'
import LogoStrip from './sections/LogoStrip'
import Features from './sections/Features'
import Comparison from './sections/Comparison'
import Pricing from './sections/Pricing'
import Testimonials from './sections/Testimonials'
import FAQ from './sections/FAQ'
import FinalCTA from './sections/FinalCTA'
import type { Page } from '@/payload-types'

type Block = NonNullable<Page['layout']>[number]

function withAnchor(node: React.ReactNode, anchor?: string | null) {
  if (!anchor) return node
  return (
    <div id={anchor} style={{ scrollMarginTop: 100 }}>
      {node}
    </div>
  )
}

export default function RenderBlocks({ blocks }: { blocks?: Block[] | null }) {
  if (!blocks || blocks.length === 0) return null

  return (
    <>
      {blocks.map((block, i) => {
        const anchor = (block as { anchor?: string | null }).anchor
        let node: React.ReactNode = null
        switch (block.blockType) {
          case 'hero':
            node = <Hero {...block} />
            break
          case 'logoStrip':
            node = <LogoStrip {...block} />
            break
          case 'features':
            node = <Features {...block} />
            break
          case 'comparison':
            node = <Comparison {...block} />
            break
          case 'pricing':
            node = <Pricing {...block} />
            break
          case 'testimonials':
            node = <Testimonials {...block} />
            break
          case 'faq':
            node = <FAQ {...block} />
            break
          case 'finalCta':
            node = <FinalCTA {...block} />
            break
          default:
            return null
        }
        return <div key={i}>{withAnchor(node, anchor)}</div>
      })}
    </>
  )
}
