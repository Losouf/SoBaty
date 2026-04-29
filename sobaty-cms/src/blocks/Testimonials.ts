import type { Block } from 'payload'
import { anchorField } from './shared'

export const Testimonials: Block = {
  slug: 'testimonials',
  labels: { singular: 'Testimonials', plural: 'Testimonials' },
  fields: [
    anchorField,
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
      name: 'googleRating',
      type: 'group',
      label: 'Encart "Note Google"',
      fields: [
        { name: 'show', type: 'checkbox', defaultValue: true },
        {
          name: 'label',
          type: 'text',
          localized: true,
          defaultValue: 'Excellent — 4,8 / 5',
        },
        {
          name: 'sub',
          type: 'text',
          localized: true,
          defaultValue: 'Basé sur 1 240 avis Google',
        },
      ],
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
        { name: 'trade', type: 'text', localized: true, admin: { description: 'Métier (ex: Rénovation, Plomberie)' } },
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
          name: 'avatarColor',
          type: 'select',
          defaultValue: 'blue',
          options: [
            { label: 'Bleu primaire', value: 'blue' },
            { label: 'Bleu foncé', value: 'darken' },
            { label: 'Bleu clair', value: 'lighten' },
          ],
        },
      ],
    },
  ],
}
