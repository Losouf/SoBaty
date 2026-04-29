'use client'

import { useState, useEffect, useId } from 'react'
import Link from 'next/link'
import { Check } from 'lucide-react'
import Icon from '../Icon'
import HighlightedTitle from '../HighlightedTitle'
import styles from './Pricing.module.css'

type Plan = {
  id?: string | null
  icon: string
  name: string
  description?: string | null
  priceMonthly: string
  priceYearly: string
  features: { text: string; id?: string | null }[]
  cta?: { label?: string | null; href?: string | null } | null
  popular?: boolean | null
}

type PricingProps = {
  preTitle?: string | null
  title: string
  monthlyLabel?: string | null
  yearlyLabel?: string | null
  yearlyDiscountLabel?: string | null
  periodSuffix?: string | null
  popularBadge?: string | null
  plans: Plan[]
}

export default function Pricing({
  preTitle,
  title,
  monthlyLabel = 'Mensuel',
  yearlyLabel = 'Annuel',
  yearlyDiscountLabel = '-20%',
  periodSuffix = '/mois',
  popularBadge = 'Le plus populaire',
  plans,
}: PricingProps) {
  const [isYearly, setIsYearly] = useState(false)
  const toggleId = useId()

  useEffect(() => {
    const saved = sessionStorage.getItem('billingCycle')
    if (saved) setIsYearly(saved === 'yearly')
  }, [])

  const handleToggle = () => {
    const newValue = !isYearly
    setIsYearly(newValue)
    sessionStorage.setItem('billingCycle', newValue ? 'yearly' : 'monthly')
  }

  return (
    <section id="pricing" className={styles.pricing}>
      <div className="container">
        <div className={styles.header}>
          {preTitle && <span className={styles.preTitle}>{preTitle}</span>}
          <HighlightedTitle text={title} className={styles.title} />

          <div className={styles.toggleWrapper}>
            <div className={styles.segmentedToggle}>
              <input
                type="checkbox"
                id={toggleId}
                className={styles.toggleInput}
                checked={isYearly}
                onChange={handleToggle}
              />
              <label htmlFor={toggleId} className={styles.toggleLabel}>
                <span className={`${styles.toggleOption} ${!isYearly ? styles.active : ''}`}>{monthlyLabel}</span>
                <span className={`${styles.toggleOption} ${isYearly ? styles.active : ''}`}>{yearlyLabel}</span>
                <div className={styles.toggleSlider} />
              </label>
            </div>
          </div>
        </div>

        <div className={styles.flexGrid}>
          {plans.map((plan, index) => {
            const isFree = parseFloat(plan.priceMonthly) === 0
            return (
              <div key={index} className={`${styles.card} ${plan.popular ? styles.popularCard : ''}`}>
                {plan.popular && (
                  <>
                    <div className={styles.popularBadge}>{popularBadge}</div>
                    <div className={styles.shimmer} />
                  </>
                )}

                <div className={styles.cardHeader}>
                  <div className={styles.titleRow}>
                    <div className={styles.iconWrapper}>
                      <Icon name={plan.icon} size={20} />
                    </div>
                    <h3>{plan.name}</h3>
                  </div>
                  {plan.description && <p>{plan.description}</p>}
                </div>

                <div className={styles.priceContainer}>
                  <div className={styles.odometer}>
                    <span className={styles.currency}>€</span>
                    <div className={styles.odometerWrapper}>
                      <div className={`${styles.odometerValue} ${isYearly ? styles.rollUp : ''}`}>
                        <span className={styles.priceStr}>{plan.priceMonthly}</span>
                        <span className={styles.priceStr}>{plan.priceYearly}</span>
                      </div>
                    </div>
                    <span className={styles.period}>{periodSuffix}</span>

                    {isYearly && !isFree && yearlyDiscountLabel && (
                      <span className={styles.cardDiscount}>{yearlyDiscountLabel}</span>
                    )}
                  </div>
                </div>

                <ul className={styles.features}>
                  {plan.features.map((feature, fIndex) => (
                    <li key={fIndex}>
                      <Check size={18} className={styles.checkIcon} />
                      {feature.text}
                    </li>
                  ))}
                </ul>

                <div className={styles.spacer} />

                {plan.cta?.label && (
                  <Link
                    href={plan.cta.href || '/register'}
                    className={`${styles.cta} ${plan.popular ? styles.popularCta : ''}`}
                  >
                    {plan.cta.label}
                  </Link>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
