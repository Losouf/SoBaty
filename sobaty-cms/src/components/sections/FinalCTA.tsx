import { Check } from 'lucide-react'
import { Fragment } from 'react'
import styles from './FinalCTA.module.css'

type Cta = { label?: string | null; href?: string | null } | null

type FinalCTAProps = {
  title: string
  description?: string | null
  primaryCta?: Cta
  secondaryCta?: Cta
  fineprint?: string | null
  trustItems?: { text: string; id?: string | null }[] | null
}

export default function FinalCTA({
  title,
  description,
  primaryCta,
  secondaryCta,
  fineprint,
  trustItems,
}: FinalCTAProps) {
  const lines = title.split(/\\n|\n/)

  return (
    <section className={styles.section}>
      <div className={styles.blobA} aria-hidden />
      <div className={styles.blobB} aria-hidden />

      <div className={styles.inner}>
        <h2 className={styles.title}>
          {lines.map((line, i) => (
            <Fragment key={i}>
              {line}
              {i < lines.length - 1 && <br />}
            </Fragment>
          ))}
        </h2>

        {description && <p className={styles.description}>{description}</p>}

        {(primaryCta?.label || secondaryCta?.label) && (
          <div className={styles.actions}>
            {primaryCta?.label && (
              <a
                href={primaryCta.href || '#'}
                className={`${styles.btn} ${styles.btnPrimary}`}
              >
                {primaryCta.label}
              </a>
            )}
            {secondaryCta?.label && (
              <a
                href={secondaryCta.href || '#'}
                className={`${styles.btn} ${styles.btnSecondary}`}
              >
                {secondaryCta.label}
              </a>
            )}
          </div>
        )}

        {fineprint && <div className={styles.fineprint}>{fineprint}</div>}

        {trustItems && trustItems.length > 0 && (
          <div className={styles.trust}>
            {trustItems.map((t, i) => (
              <div key={i} className={styles.trustItem}>
                <Check size={16} color="#fff" strokeWidth={3} />
                {t.text}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
