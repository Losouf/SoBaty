'use client'

import { Fragment, useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { ChevronDown } from 'lucide-react'
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
  items: FAQItem[]
  contactLine?: {
    show?: boolean | null
    text?: string | null
    linkLabel?: string | null
    linkHref?: string | null
  } | null
}

function renderBoldMarkdown(text: string) {
  const parts = text.split(/\*\*(.+?)\*\*/g)
  return parts.map((part, i) =>
    i % 2 === 1 ? <strong key={i}>{part}</strong> : <Fragment key={i}>{part}</Fragment>,
  )
}

function FAQItemRow({
  question,
  answer,
  open,
  onToggle,
}: {
  question: string
  answer: string
  open: boolean
  onToggle: () => void
}) {
  const innerRef = useRef<HTMLDivElement>(null)
  const [maxH, setMaxH] = useState(0)

  useEffect(() => {
    if (open && innerRef.current) {
      setMaxH(innerRef.current.scrollHeight)
    } else {
      setMaxH(0)
    }
  }, [open, answer])

  return (
    <div className={`${styles.item} ${open ? styles.itemOpen : ''}`}>
      <button className={styles.question} onClick={onToggle} aria-expanded={open}>
        <span className={styles.questionText}>{question}</span>
        <span className={styles.chevron}>
          <ChevronDown size={14} strokeWidth={3} />
        </span>
      </button>
      <div className={styles.answerWrap} style={{ maxHeight: maxH }}>
        <div ref={innerRef} className={styles.answer}>
          {renderBoldMarkdown(answer)}
        </div>
      </div>
    </div>
  )
}

export default function FAQ({ preTitle, title, items, contactLine }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className={styles.faq}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.header}>
          {preTitle && <span className={styles.preTitle}>{preTitle}</span>}
          <HighlightedTitle text={title} className={styles.title} />
        </div>

        <div className={styles.list}>
          {items.map((item, i) => (
            <FAQItemRow
              key={i}
              question={item.question}
              answer={item.answer}
              open={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>

        {contactLine?.show && (contactLine.text || contactLine.linkLabel) && (
          <div className={styles.contactLine}>
            {contactLine.text}
            {contactLine.linkLabel && (
              <Link href={contactLine.linkHref || '#'} className={styles.contactLink}>
                {contactLine.linkLabel}
              </Link>
            )}
          </div>
        )}
      </div>
    </section>
  )
}
