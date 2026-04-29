import type { Block } from 'payload'
import { anchorField } from './shared'

export const LogoStrip: Block = {
  slug: 'logoStrip',
  labels: { singular: 'Logo Strip', plural: 'Logo Strips' },
  fields: [
    anchorField,
    {
      name: 'eyebrow',
      type: 'text',
      localized: true,
      defaultValue: 'Plus de 9 481 artisans nous font confiance',
      admin: { description: 'Petit texte affiché au-dessus du bandeau de logos' },
    },
    {
      name: 'clients',
      type: 'array',
      required: true,
      minRows: 1,
      labels: { singular: 'Client', plural: 'Clients' },
      fields: [
        { name: 'name', type: 'text', required: true },
        {
          name: 'weight',
          type: 'select',
          defaultValue: '700',
          options: [
            { label: 'Regular (400)', value: '400' },
            { label: 'Medium (500)', value: '500' },
            { label: 'Semibold (600)', value: '600' },
            { label: 'Bold (700)', value: '700' },
            { label: 'Extra Bold (800)', value: '800' },
          ],
        },
        {
          name: 'italic',
          type: 'checkbox',
          defaultValue: false,
        },
        {
          name: 'tracking',
          type: 'select',
          label: 'Espacement des lettres',
          defaultValue: 'normal',
          options: [
            { label: 'Serré', value: 'tight' },
            { label: 'Normal', value: 'normal' },
            { label: 'Large', value: 'wide' },
          ],
        },
      ],
    },
  ],
}
