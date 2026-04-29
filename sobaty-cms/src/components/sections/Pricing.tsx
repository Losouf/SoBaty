import { Fragment } from 'react'
import Link from 'next/link'
import { Check } from 'lucide-react'
import HighlightedTitle from '../HighlightedTitle'
import styles from './Pricing.module.css'

type Plan = {
  id?: string | null
  name: string
  price: string
  priceSuffix: string
  note?: string | null
  features: { text: string; id?: string | null }[]
  cta?: {
    label?: string | null
    href?: string | null
    variant?: 'primary' | 'outline' | null
  } | null
  footnote?: string | null
  highlight?: boolean | null
  badge?: string | null
}

type PricingProps = {
  preTitle?: string | null
  title: string
  description?: string | null
  plans: Plan[]
  youngCompany?: {
    show?: boolean | null
    eyebrow?: string | null
    title?: string | null
    description?: string | null
    cta?: { label?: string | null; href?: string | null } | null
  } | null
  trustItems?: { text: string; id?: string | null }[] | null
}

function renderBoldMarkdown(text: string) {
  const parts = text.split(/\*\*(.+?)\*\*/g)
  return parts.map((part, i) =>
    i % 2 === 1 ? <strong key={i}>{part}</strong> : <Fragment key={i}>{part}</Fragment>,
  )
}

export default function Pricing({
  preTitle,
  title,
  description,
  plans,
  youngCompany,
  trustItems,
}: PricingProps) {
  return (
    <section className={styles.pricing}>
      <div className="container">
        <div className={styles.header}>
          {preTitle && <span className={styles.preTitle}>{preTitle}</span>}
          <HighlightedTitle text={title} className={styles.title} />
          {description && <p className={styles.description}>{description}</p>}
        </div>

        <div className={styles.plans}>
          {plans.map((plan, i) => {
            const variant = plan.cta?.variant || 'outline'
            return (
              <div
                key={i}
                className={`${styles.card} ${plan.highlight ? styles.cardHighlight : ''}`}
              >
                {plan.highlight && plan.badge && (
                  <span className={styles.badge}>{plan.badge}</span>
                )}
                <div className={styles.tier}>{plan.name}</div>
                <div className={styles.priceLine}>
                  <span className={styles.price}>{plan.price}</span>
                  <span className={styles.priceSuffix}>
                    {plan.priceSuffix} <sup>HT</sup>
                  </span>
                </div>
                {plan.note && (
                  <div className={styles.note}>{renderBoldMarkdown(plan.note)}</div>
                )}
                <div className={styles.divider} />
                <ul className={styles.features}>
                  {plan.features.map((f, j) => (
                    <li key={j} className={styles.feature}>
                      <Check size={16} strokeWidth={3} className={styles.featureIcon} />
                      {f.text}
                    </li>
                  ))}
                </ul>
                <div className={styles.spacer} />
                {plan.cta?.label && (
                  <Link
                    href={plan.cta.href || '/register'}
                    className={`${styles.cta} ${variant === 'primary' ? styles.ctaPrimary : styles.ctaOutline}`}
                  >
                    {plan.cta.label}
                  </Link>
                )}
                {plan.footnote && <div className={styles.footnote}>{plan.footnote}</div>}
              </div>
            )
          })}
        </div>

        {youngCompany?.show && (
          <div className={styles.youngBanner}>
            <div className={styles.youngContent}>
              {youngCompany.eyebrow && (
                <div className={styles.youngEyebrow}>{youngCompany.eyebrow}</div>
              )}
              {youngCompany.title && (
                <div className={styles.youngTitle}>{youngCompany.title}</div>
              )}
              {youngCompany.description && (
                <div className={styles.youngDesc}>
                  {renderBoldMarkdown(youngCompany.description)}
                </div>
              )}
            </div>
            {youngCompany.cta?.label && (
              <Link
                href={youngCompany.cta.href || '#'}
                className={styles.youngCta}
              >
                {youngCompany.cta.label}
              </Link>
            )}
          </div>
        )}

        {trustItems && trustItems.length > 0 && (
          <div className={styles.trustRow}>
            {trustItems.map((t, i) => (
              <div key={i} className={styles.trustItem}>
                <Check size={16} strokeWidth={3} className={styles.trustIcon} />
                {t.text}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
