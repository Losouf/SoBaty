import type { Block } from 'payload'

export const Hero: Block = {
  slug: 'hero',
  labels: { singular: 'Hero', plural: 'Heros' },
  fields: [
    {
      name: 'badge',
      type: 'text',
      localized: true,
      admin: { description: 'Petit badge en haut du Hero (laisser vide pour le masquer)' },
    },
    {
      name: 'title',
      type: 'text',
      required: true,
      localized: true,
      admin: { description: 'Entoure les mots à mettre en surbrillance avec **double-astérisques**' },
    },
    {
      name: 'description',
      type: 'textarea',
      localized: true,
    },
    {
      name: 'primaryCta',
      type: 'group',
      label: 'CTA primaire',
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
      name: 'stats',
      type: 'array',
      label: 'Statistiques',
      labels: { singular: 'Stat', plural: 'Stats' },
      fields: [
        { name: 'value', type: 'text', required: true, localized: true },
        { name: 'label', type: 'text', required: true, localized: true },
      ],
    },
    {
      name: 'showMockup',
      type: 'checkbox',
      label: 'Afficher la maquette dashboard décorative',
      defaultValue: true,
    },
  ],
}
