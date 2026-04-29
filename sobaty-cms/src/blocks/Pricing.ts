import type { Block } from 'payload'

export const Pricing: Block = {
  slug: 'pricing',
  labels: { singular: 'Pricing', plural: 'Pricings' },
  fields: [
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
      name: 'monthlyLabel',
      type: 'text',
      localized: true,
      defaultValue: 'Mensuel',
    },
    {
      name: 'yearlyLabel',
      type: 'text',
      localized: true,
      defaultValue: 'Annuel',
    },
    {
      name: 'yearlyDiscountLabel',
      type: 'text',
      localized: true,
      defaultValue: '-20%',
      admin: { description: 'Badge de remise affiché sur les plans payants en mode annuel' },
    },
    {
      name: 'periodSuffix',
      type: 'text',
      localized: true,
      defaultValue: '/mois',
    },
    {
      name: 'popularBadge',
      type: 'text',
      localized: true,
      defaultValue: 'Le plus populaire',
    },
    {
      name: 'plans',
      type: 'array',
      required: true,
      minRows: 1,
      labels: { singular: 'Plan', plural: 'Plans' },
      fields: [
        {
          name: 'icon',
          type: 'text',
          required: true,
          admin: { description: 'Nom de l\'icône Lucide (ex: Zap, Star, Shield)' },
        },
        { name: 'name', type: 'text', required: true, localized: true },
        { name: 'description', type: 'text', localized: true },
        { name: 'priceMonthly', type: 'text', required: true, admin: { description: 'Prix sans devise (ex: 14.90)' } },
        { name: 'priceYearly', type: 'text', required: true },
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
          ],
        },
        { name: 'popular', type: 'checkbox', defaultValue: false, label: 'Mettre en avant' },
      ],
    },
  ],
}
