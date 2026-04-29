'use client'

import { useState } from 'react'
import { ChevronDown, HelpCircle } from 'lucide-react'
import HighlightedTitle from '../HighlightedTitle'
import styles from './FAQ.module.css'

type FAQItem = {
  id?: string | null
  question: string
  answer: string
}

type FAQProps = {
  preTitle?: string | null
  title: string
  subtitle?: string | null
  items: FAQItem[]
}

export default function FAQ({ preTitle, title, subtitle, items }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="help" className={styles.faq}>
      <div className="container">
        <div className={styles.header}>
          {preTitle && <span className={styles.preTitle}>{preTitle}</span>}
          <HighlightedTitle text={title} className={styles.title} />
          {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        </div>

        <div className={styles.accordion}>
          {items.map((item, index) => (
            <div key={index} className={`${styles.item} ${openIndex === index ? styles.active : ''}`}>
              <button
                className={styles.question}
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
              >
                <span className={styles.questionText}>
                  <HelpCircle size={18} className={styles.icon} />
                  {item.question}
                </span>
                <ChevronDown size={20} className={styles.chevron} />
              </button>

              <div className={styles.answerWrapper}>
                <div className={styles.answer}>
                  <p>{item.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
