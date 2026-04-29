import { Check, X } from 'lucide-react'
import HighlightedTitle from '../HighlightedTitle'
import styles from './Comparison.module.css'

type Row = {
  id?: string | null
  before: string
  after: string
}

type Stat = {
  id?: string | null
  value: string
  label: string
  sub?: string | null
}

type ComparisonProps = {
  preTitle?: string | null
  title: string
  beforeLabel?: string | null
  afterLabel?: string | null
  beforeEyebrow?: string | null
  afterEyebrow?: string | null
  rows: Row[]
  stats?: Stat[] | null
}

export default function Comparison({
  preTitle,
  title,
  beforeLabel,
  afterLabel,
  beforeEyebrow,
  afterEyebrow,
  rows,
  stats,
}: ComparisonProps) {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.header}>
          {preTitle && <span className={styles.preTitle}>{preTitle}</span>}
          <HighlightedTitle text={title} className={styles.title} />
        </div>

        <div className={styles.grid}>
          <div className={styles.card}>
            <div className={styles.cardHead}>
              <div className={styles.iconBox}>
                <X size={18} color="#E5484D" strokeWidth={3} />
              </div>
              <div>
                <div className={styles.eyebrow}>{beforeEyebrow ?? 'AVANT'}</div>
                <div className={styles.cardTitle}>{beforeLabel ?? 'Sans SO BATY'}</div>
              </div>
            </div>
            <ul className={styles.list}>
              {rows.map((r, i) => (
                <li key={i} className={styles.item}>
                  <span className={styles.bullet}>
                    <X size={8} color="#E5484D" strokeWidth={4} />
                  </span>
                  {r.before}
                </li>
              ))}
            </ul>
          </div>

          <div className={`${styles.card} ${styles.cardAfter}`}>
            <div className={styles.cardHead}>
              <div className={`${styles.iconBox} ${styles.iconBoxAfter}`}>
                <Check size={20} color="#fff" strokeWidth={3} />
              </div>
              <div>
                <div className={`${styles.eyebrow} ${styles.eyebrowAfter}`}>
                  {afterEyebrow ?? 'APRÈS'}
                </div>
                <div className={`${styles.cardTitle} ${styles.cardTitleAfter}`}>
                  {afterLabel ?? 'Avec SO BATY'}
                </div>
              </div>
            </div>
            <ul className={styles.list}>
              {rows.map((r, i) => (
                <li key={i} className={`${styles.item} ${styles.itemAfter}`}>
                  <span className={`${styles.bullet} ${styles.bulletAfter}`}>
                    <Check size={9} color="#fff" strokeWidth={4} />
                  </span>
                  {r.after}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {stats && stats.length > 0 && (
          <div className={styles.statsCallout}>
            {stats.map((s, i) => (
              <div key={i} className={styles.statItem}>
                <div className={styles.statValue}>{s.value}</div>
                <div className={styles.statLabel}>{s.label}</div>
                {s.sub && <div className={styles.statSub}>{s.sub}</div>}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
