import type { GlobalConfig } from 'payload'

export const Header: GlobalConfig = {
  slug: 'header',
  label: 'Header',
  admin: { group: 'Layout' },
  fields: [
    {
      name: 'announcement',
      type: 'group',
      label: "Bandeau d'annonce",
      fields: [
        {
          name: 'enabled',
          type: 'checkbox',
          defaultValue: true,
          label: "Afficher le bandeau d'annonce",
        },
        {
          name: 'badge',
          type: 'text',
          localized: true,
          defaultValue: 'NOUVEAU',
          admin: { description: "Petite étiquette à gauche (ex: NOUVEAU, BÊTA)" },
        },
        {
          name: 'message',
          type: 'text',
          localized: true,
          admin: {
            description:
              'Message du bandeau. Utilise **double-astérisques** pour mettre des mots en gras.',
          },
        },
        {
          name: 'linkLabel',
          type: 'text',
          localized: true,
          defaultValue: 'En savoir plus →',
        },
        { name: 'linkHref', type: 'text' },
      ],
    },
    {
      name: 'logo',
      type: 'upload',
      relationTo: 'media',
      admin: { description: 'Logo affiché dans la barre de navigation' },
    },
    {
      name: 'logoAlt',
      type: 'text',
      defaultValue: 'SoBaty Logo',
      localized: true,
    },
    {
      name: 'navLinks',
      type: 'array',
      label: 'Liens de navigation',
      fields: [
        { name: 'label', type: 'text', required: true, localized: true },
        { name: 'href', type: 'text', required: true },
      ],
    },
    {
      name: 'secondaryCta',
      type: 'group',
      label: 'CTA secondaire (ex: Se connecter)',
      fields: [
        { name: 'label', type: 'text', localized: true },
        { name: 'href', type: 'text' },
      ],
    },
    {
      name: 'primaryCta',
      type: 'group',
      label: 'CTA principal (ex: Essai gratuit)',
      fields: [
        { name: 'label', type: 'text', localized: true },
        { name: 'href', type: 'text' },
      ],
    },
  ],
}
