import type { Block } from 'payload'
import { anchorField } from './shared'

export const FinalCTA: Block = {
  slug: 'finalCta',
  labels: { singular: 'Final CTA', plural: 'Final CTAs' },
  fields: [
    anchorField,
    {
      name: 'title',
      type: 'text',
      required: true,
      localized: true,
      admin: {
        description:
          "Saute une ligne avec \\n pour forcer un retour à la ligne dans le titre",
      },
    },
    {
      name: 'description',
      type: 'textarea',
      localized: true,
    },
    {
      name: 'primaryCta',
      type: 'group',
      label: 'CTA principal',
      fields: [
        { name: 'label', type: 'text', localized: true },
        { name: 'href', type: 'text' },
      ],
    },
    {
      name: 'secondaryCta',
      type: 'group',
      label: 'CTA secondaire',
      fields: [
        { name: 'label', type: 'text', localized: true },
        { name: 'href', type: 'text' },
      ],
    },
    {
      name: 'fineprint',
      type: 'text',
      localized: true,
      defaultValue: '30 jours • sans CB • sans engagement',
    },
    {
      name: 'trustItems',
      type: 'array',
      label: 'Éléments de confiance',
      labels: { singular: 'Élément', plural: 'Éléments' },
      fields: [{ name: 'text', type: 'text', required: true, localized: true }],
    },
  ],
}
