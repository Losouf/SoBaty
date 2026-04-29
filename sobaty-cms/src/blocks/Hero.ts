import type { Block } from 'payload'
import { anchorField } from './shared'

export const Hero: Block = {
  slug: 'hero',
  labels: { singular: 'Hero', plural: 'Heros' },
  fields: [
    anchorField,
    {
      name: 'badgePrefix',
      type: 'text',
      localized: true,
      admin: { description: "Mini-tag à gauche de l'eyebrow (ex: BTP, BÊTA)" },
    },
    {
      name: 'badge',
      type: 'text',
      localized: true,
      admin: { description: "Texte de l'eyebrow (ex: « Pensé par et pour les artisans »)" },
    },
    {
      name: 'title',
      type: 'text',
      required: true,
      localized: true,
      admin: {
        description:
          'Entoure les mots à mettre en surbrillance avec **double-astérisques**. Saute une ligne avec \\n.',
      },
    },
    {
      name: 'description',
      type: 'textarea',
      localized: true,
    },
    {
      name: 'bullets',
      type: 'array',
      label: 'Points clés (sous le hero)',
      maxRows: 6,
      fields: [{ name: 'text', type: 'text', required: true, localized: true }],
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
      label: 'CTA secondaire (avec icône lecture)',
      fields: [
        { name: 'label', type: 'text', localized: true },
        { name: 'href', type: 'text' },
      ],
    },
    {
      name: 'fineprint',
      type: 'text',
      localized: true,
      admin: { description: 'Petit texte sous les boutons (ex: 30 jours • sans CB • sans engagement)' },
    },
    {
      name: 'stats',
      type: 'array',
      label: 'Statistiques (rangée du bas)',
      maxRows: 3,
      fields: [
        { name: 'value', type: 'text', required: true, localized: true },
        { name: 'label', type: 'text', required: true, localized: true },
        {
          name: 'showStars',
          type: 'checkbox',
          defaultValue: false,
          label: "Afficher les étoiles à côté de la valeur (notation type 4,8★)",
        },
      ],
    },
    {
      name: 'showMockup',
      type: 'checkbox',
      label: 'Afficher la maquette éditeur de devis',
      defaultValue: true,
    },
    {
      name: 'mockBadgeTop',
      type: 'group',
      label: 'Badge flottant (haut/gauche)',
      fields: [
        { name: 'show', type: 'checkbox', defaultValue: true },
        { name: 'eyebrow', type: 'text', localized: true, defaultValue: 'SOLUTION AGRÉÉE' },
        { name: 'title', type: 'text', localized: true, defaultValue: 'Facturation\\nélectronique 2026' },
      ],
    },
    {
      name: 'mockBadgeBottom',
      type: 'group',
      label: 'Toast flottant (bas/droite)',
      fields: [
        { name: 'show', type: 'checkbox', defaultValue: true },
        { name: 'title', type: 'text', localized: true, defaultValue: 'Devis signé !' },
        { name: 'subtitle', type: 'text', localized: true, defaultValue: 'il y a quelques secondes' },
      ],
    },
  ],
}
