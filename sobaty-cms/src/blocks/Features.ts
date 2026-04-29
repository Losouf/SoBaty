import type { Block } from 'payload'
import { anchorField } from './shared'

export const Features: Block = {
  slug: 'features',
  labels: { singular: 'Features', plural: 'Features' },
  fields: [
    anchorField,
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
      name: 'description',
      type: 'textarea',
      localized: true,
    },
    {
      name: 'features',
      type: 'array',
      required: true,
      minRows: 1,
      labels: { singular: 'Feature', plural: 'Features' },
      fields: [
        { name: 'eyebrow', type: 'text', required: true, localized: true },
        {
          name: 'title',
          type: 'text',
          required: true,
          localized: true,
          admin: { description: 'Première partie du titre (en noir)' },
        },
        {
          name: 'accent',
          type: 'text',
          localized: true,
          admin: { description: 'Suite du titre, mise en bleu' },
        },
        { name: 'description', type: 'textarea', required: true, localized: true },
        {
          name: 'points',
          type: 'array',
          label: 'Points clés',
          fields: [
            { name: 'title', type: 'text', required: true, localized: true },
            { name: 'desc', type: 'text', localized: true },
          ],
        },
        {
          name: 'mockupVariant',
          type: 'select',
          label: 'Maquette visuelle',
          options: [
            { label: 'Aucune', value: 'none' },
            { label: 'Éditeur de devis (PDF live)', value: 'devis' },
            { label: 'Signature mobile', value: 'signature' },
            { label: 'Dashboard / KPI', value: 'dashboard' },
          ],
          defaultValue: 'devis',
        },
        {
          name: 'reverse',
          type: 'checkbox',
          label: 'Inverser (mock à gauche)',
          defaultValue: false,
        },
      ],
    },
  ],
}
