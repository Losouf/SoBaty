import type { GlobalConfig } from 'payload'

export const Footer: GlobalConfig = {
  slug: 'footer',
  label: 'Footer',
  admin: { group: 'Layout' },
  fields: [
    {
      name: 'logo',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'logoAlt',
      type: 'text',
      defaultValue: 'SoBaty Logo',
      localized: true,
    },
    {
      name: 'tagline',
      type: 'textarea',
      localized: true,
    },
    {
      name: 'contacts',
      type: 'array',
      label: 'Coordonnées',
      labels: { singular: 'Coordonnée', plural: 'Coordonnées' },
      fields: [
        {
          name: 'icon',
          type: 'text',
          required: true,
          admin: { description: 'Nom de l\'icône Lucide (ex: Mail, Phone, MapPin)' },
        },
        { name: 'value', type: 'text', required: true },
      ],
    },
    {
      name: 'columns',
      type: 'array',
      label: 'Colonnes de liens',
      labels: { singular: 'Colonne', plural: 'Colonnes' },
      fields: [
        { name: 'title', type: 'text', required: true, localized: true },
        {
          name: 'links',
          type: 'array',
          fields: [
            { name: 'label', type: 'text', required: true, localized: true },
            { name: 'href', type: 'text', required: true },
          ],
        },
      ],
    },
    {
      name: 'newsletter',
      type: 'group',
      label: 'Newsletter',
      fields: [
        { name: 'title', type: 'text', localized: true, defaultValue: 'Restez informé' },
        { name: 'description', type: 'text', localized: true },
        { name: 'placeholder', type: 'text', localized: true, defaultValue: 'Votre email' },
      ],
    },
    {
      name: 'socials',
      type: 'array',
      label: 'Réseaux sociaux',
      fields: [
        {
          name: 'platform',
          type: 'select',
          required: true,
          options: [
            { label: 'LinkedIn', value: 'linkedin' },
            { label: 'Twitter / X', value: 'twitter' },
            { label: 'Facebook', value: 'facebook' },
            { label: 'Instagram', value: 'instagram' },
            { label: 'YouTube', value: 'youtube' },
            { label: 'GitHub', value: 'github' },
          ],
        },
        { name: 'href', type: 'text', required: true },
      ],
    },
    {
      name: 'copyright',
      type: 'text',
      localized: true,
      admin: { description: 'Utilise {year} pour insérer l\'année courante' },
      defaultValue: '© {year} SoBaty. Fait avec passion pour les bâtisseurs.',
    },
    {
      name: 'legalLinks',
      type: 'array',
      label: 'Liens légaux',
      fields: [
        { name: 'label', type: 'text', required: true, localized: true },
        { name: 'href', type: 'text', required: true },
      ],
    },
  ],
}
