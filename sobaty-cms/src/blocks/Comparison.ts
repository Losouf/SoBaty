import type { Block } from 'payload'
import { anchorField } from './shared'

export const Comparison: Block = {
  slug: 'comparison',
  labels: { singular: 'Comparison', plural: 'Comparisons' },
  fields: [
    anchorField,
    {
      name: 'preTitle',
      type: 'text',
      localized: true,
      defaultValue: 'Comparatif',
    },
    {
      name: 'title',
      type: 'text',
      required: true,
      localized: true,
      admin: { description: 'Utilise **double-astérisques** pour les mots en surbrillance' },
    },
    {
      name: 'beforeLabel',
      type: 'text',
      localized: true,
      defaultValue: 'Sans SO BATY',
    },
    {
      name: 'afterLabel',
      type: 'text',
      localized: true,
      defaultValue: 'Avec SO BATY',
    },
    {
      name: 'beforeEyebrow',
      type: 'text',
      localized: true,
      defaultValue: 'AVANT',
    },
    {
      name: 'afterEyebrow',
      type: 'text',
      localized: true,
      defaultValue: 'APRÈS',
    },
    {
      name: 'rows',
      type: 'array',
      required: true,
      minRows: 1,
      labels: { singular: 'Ligne', plural: 'Lignes' },
      fields: [
        { name: 'before', type: 'text', required: true, localized: true },
        { name: 'after', type: 'text', required: true, localized: true },
      ],
    },
    {
      name: 'stats',
      type: 'array',
      label: 'Statistiques en bas',
      maxRows: 3,
      labels: { singular: 'Stat', plural: 'Stats' },
      fields: [
        { name: 'value', type: 'text', required: true, localized: true },
        { name: 'label', type: 'text', required: true, localized: true },
        { name: 'sub', type: 'text', localized: true },
      ],
    },
  ],
}
