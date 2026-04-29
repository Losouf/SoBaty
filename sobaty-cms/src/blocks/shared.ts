import type { Field } from 'payload'

/**
 * Champ « ancre » à inclure dans chaque bloc.
 * Permet de cibler la section depuis un lien de menu (ex: href = "#tarifs").
 */
export const anchorField: Field = {
  name: 'anchor',
  type: 'text',
  admin: {
    description:
      'Ancre HTML pour cibler la section depuis un lien de menu (sans le #). Ex: tarifs, fonctionnalites, faq.',
    placeholder: 'tarifs',
  },
}
