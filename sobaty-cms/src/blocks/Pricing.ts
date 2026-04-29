import type { Block } from 'payload'
import { anchorField } from './shared'

export const Pricing: Block = {
  slug: 'pricing',
  labels: { singular: 'Pricing', plural: 'Pricings' },
  fields: [
    anchorField,
    {
      name: 'preTitle',
      type: 'text',
      localized: true,
      defaultValue: 'Tarifs',
    },
    {
      name: 'title',
      type: 'text',
      required: true,
      localized: true,
      admin: { description: 'Utilise **double-astérisques** pour les mots en surbrillance' },
    },
    {
      name: 'description',
      type: 'textarea',
      localized: true,
    },
    {
      name: 'plans',
      type: 'array',
      required: true,
      minRows: 1,
      labels: { singular: 'Plan', plural: 'Plans' },
      fields: [
        { name: 'name', type: 'text', required: true, localized: true },
        {
          name: 'price',
          type: 'text',
          required: true,
          admin: { description: 'Prix affiché (ex: 0€, 19€, 25€)' },
        },
        {
          name: 'priceSuffix',
          type: 'text',
          required: true,
          localized: true,
          defaultValue: '/ mois',
          admin: { description: 'Suffixe à droite (ex: / mois, / 30 jours)' },
        },
        {
          name: 'note',
          type: 'textarea',
          localized: true,
          admin: {
            description:
              'Phrase descriptive sous le prix. Utilise **double-astérisques** pour mettre en gras.',
          },
        },
        {
          name: 'features',
          type: 'array',
          required: true,
          fields: [{ name: 'text', type: 'text', required: true, localized: true }],
        },
        {
          name: 'cta',
          type: 'group',
          fields: [
            { name: 'label', type: 'text', localized: true },
            { name: 'href', type: 'text', defaultValue: '/register' },
            {
              name: 'variant',
              type: 'select',
              defaultValue: 'outline',
              options: [
                { label: 'Primaire (rempli)', value: 'primary' },
                { label: 'Outline', value: 'outline' },
              ],
            },
          ],
        },
        { name: 'footnote', type: 'text', localized: true },
        {
          name: 'highlight',
          type: 'checkbox',
          defaultValue: false,
          label: 'Mettre en avant (badge orange + élévation)',
        },
        { name: 'badge', type: 'text', localized: true, admin: { description: 'Texte du badge orange' } },
      ],
    },
    {
      name: 'youngCompany',
      type: 'group',
      label: 'Bandeau "Jeune entreprise"',
      fields: [
        { name: 'show', type: 'checkbox', defaultValue: true },
        { name: 'eyebrow', type: 'text', localized: true, defaultValue: 'Offre jeune entreprise' },
        {
          name: 'title',
          type: 'text',
          localized: true,
          defaultValue: 'Votre entreprise a moins de 3 ans ?',
        },
        {
          name: 'description',
          type: 'text',
          localized: true,
          admin: { description: 'Utilise **double-astérisques** pour mettre en gras' },
          defaultValue:
            "Bénéficiez de **102€ d'économie** sur votre première année.",
        },
        {
          name: 'cta',
          type: 'group',
          fields: [
            { name: 'label', type: 'text', localized: true, defaultValue: "J'en profite →" },
            { name: 'href', type: 'text' },
          ],
        },
      ],
    },
    {
      name: 'trustItems',
      type: 'array',
      label: 'Trust row (bas de section)',
      labels: { singular: 'Élément', plural: 'Éléments' },
      fields: [{ name: 'text', type: 'text', required: true, localized: true }],
    },
  ],
}
