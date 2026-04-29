import type { Block } from 'payload'

export const Testimonials: Block = {
  slug: 'testimonials',
  labels: { singular: 'Testimonials', plural: 'Testimonials' },
  fields: [
    {
      name: 'preTitle',
      type: 'text',
      localized: true,
      defaultValue: 'Témoignages',
    },
    {
      name: 'title',
      type: 'text',
      required: true,
      localized: true,
      admin: { description: 'Utilise **double-astérisques** pour les mots en surbrillance' },
    },
    {
      name: 'reviews',
      type: 'array',
      required: true,
      minRows: 1,
      labels: { singular: 'Avis', plural: 'Avis' },
      fields: [
        { name: 'name', type: 'text', required: true },
        { name: 'role', type: 'text', required: true, localized: true },
        { name: 'content', type: 'textarea', required: true, localized: true },
        {
          name: 'stars',
          type: 'number',
          required: true,
          min: 1,
          max: 5,
          defaultValue: 5,
        },
        {
          name: 'size',
          type: 'select',
          required: true,
          options: [
            { label: 'Petit', value: 'small' },
            { label: 'Moyen', value: 'medium' },
            { label: 'Grand', value: 'large' },
          ],
          defaultValue: 'medium',
        },
        { name: 'tag', type: 'text', localized: true },
      ],
    },
  ],
}
