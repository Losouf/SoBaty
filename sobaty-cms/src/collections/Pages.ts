import type { CollectionConfig } from 'payload'

import { Hero } from '../blocks/Hero'
import { LogoStrip } from '../blocks/LogoStrip'
import { Features } from '../blocks/Features'
import { Comparison } from '../blocks/Comparison'
import { Pricing } from '../blocks/Pricing'
import { Testimonials } from '../blocks/Testimonials'
import { FAQ } from '../blocks/FAQ'
import { FinalCTA } from '../blocks/FinalCTA'

export const Pages: CollectionConfig = {
  slug: 'pages',
  labels: { singular: 'Page', plural: 'Pages' },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'slug', 'updatedAt'],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      localized: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      index: true,
      admin: {
        description: 'Identifiant URL (ex: "home" pour la page d\'accueil, "about" pour /about)',
      },
    },
    {
      name: 'meta',
      type: 'group',
      label: 'SEO',
      fields: [
        { name: 'title', type: 'text', localized: true },
        { name: 'description', type: 'textarea', localized: true },
        { name: 'keywords', type: 'text', localized: true },
      ],
    },
    {
      name: 'layout',
      type: 'blocks',
      required: true,
      blocks: [Hero, LogoStrip, Features, Comparison, Pricing, Testimonials, FAQ, FinalCTA],
    },
  ],
}
