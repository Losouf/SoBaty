import type { Block } from 'payload'

export const Features: Block = {
  slug: 'features',
  labels: { singular: 'Features', plural: 'Features' },
  fields: [
    {
      name: 'preTitle',
      type: 'text',
      localized: true,
      defaultValue: 'Fonctionnalités',
    },
    {
      name: 'title',
      type: 'text',
      required: true,
      localized: true,
      admin: { description: 'Utilise **double-astérisques** pour les mots en surbrillance' },
    },
    {
      name: 'features',
      type: 'array',
      required: true,
      minRows: 1,
      labels: { singular: 'Feature', plural: 'Features' },
      fields: [
        {
          name: 'icon',
          type: 'text',
          required: true,
          admin: { description: 'Nom de l\'icône Lucide en PascalCase (ex: Zap, FileText, TrendingUp)' },
        },
        { name: 'title', type: 'text', required: true, localized: true },
        { name: 'description', type: 'textarea', required: true, localized: true },
        {
          name: 'points',
          type: 'array',
          label: 'Points clés',
          fields: [{ name: 'text', type: 'text', required: true, localized: true }],
        },
        {
          name: 'mockupVariant',
          type: 'select',
          label: 'Maquette visuelle (décoratif)',
          options: [
            { label: 'Aucune', value: 'none' },
            { label: 'Facturation', value: 'billing' },
            { label: 'Devis', value: 'quotes' },
            { label: 'Suivi', value: 'tracking' },
          ],
          defaultValue: 'none',
        },
      ],
    },
  ],
}
