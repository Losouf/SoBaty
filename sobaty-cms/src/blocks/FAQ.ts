import type { Block } from 'payload'
import { anchorField } from './shared'

export const FAQ: Block = {
  slug: 'faq',
  labels: { singular: 'FAQ', plural: 'FAQs' },
  fields: [
    anchorField,
    {
      name: 'preTitle',
      type: 'text',
      localized: true,
      defaultValue: 'FAQ',
    },
    {
      name: 'title',
      type: 'text',
      required: true,
      localized: true,
      admin: { description: 'Utilise **double-astérisques** pour les mots en surbrillance' },
    },
    {
      name: 'items',
      type: 'array',
      required: true,
      minRows: 1,
      labels: { singular: 'Question', plural: 'Questions' },
      fields: [
        { name: 'question', type: 'text', required: true, localized: true },
        {
          name: 'answer',
          type: 'textarea',
          required: true,
          localized: true,
          admin: { description: 'Utilise **double-astérisques** pour les mots à mettre en gras' },
        },
      ],
    },
    {
      name: 'contactLine',
      type: 'group',
      label: 'Ligne "Une autre question"',
      fields: [
        { name: 'show', type: 'checkbox', defaultValue: true },
        { name: 'text', type: 'text', localized: true, defaultValue: 'Une autre question ?' },
        {
          name: 'linkLabel',
          type: 'text',
          localized: true,
          defaultValue: 'Contactez notre équipe →',
        },
        { name: 'linkHref', type: 'text', defaultValue: '/contact' },
      ],
    },
  ],
}
