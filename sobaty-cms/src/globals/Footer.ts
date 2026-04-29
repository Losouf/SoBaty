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
      admin: { description: 'Logo affiché dans le footer (variante claire / blanche)' },
    },
    {
      name: 'logoAlt',
      type: 'text',
      defaultValue: 'SO BATY Logo',
      localized: true,
    },
    {
      name: 'tagline',
      type: 'textarea',
      localized: true,
      defaultValue:
        'Le logiciel de devis et factures pensé pour les artisans du BTP. Vos devis faciles.',
    },
    {
      name: 'rating',
      type: 'group',
      label: 'Notation (Google)',
      fields: [
        { name: 'show', type: 'checkbox', defaultValue: true },
        { name: 'score', type: 'text', defaultValue: '4,8/5' },
        { name: 'platform', type: 'text', localized: true, defaultValue: 'sur Google' },
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
      name: 'copyright',
      type: 'text',
      localized: true,
      admin: { description: 'Utilise {year} pour insérer l\'année courante' },
      defaultValue:
        '© {year} SOBATY SAS — Tous droits réservés. SIRET 912 345 678 00012.',
    },
    {
      name: 'madeWith',
      type: 'text',
      localized: true,
      defaultValue: 'Fait avec ♥ à Lyon, pour les artisans du BTP.',
      admin: { description: 'Le ♥ sera remplacé par une icône cœur rouge.' },
    },
  ],
}
