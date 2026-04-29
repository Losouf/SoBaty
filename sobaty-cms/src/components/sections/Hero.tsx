import { Fragment } from 'react'
import {
  Check,
  Play,
  LayoutDashboard,
  FileText,
  Receipt,
  Users,
  Package,
  Settings,
} from 'lucide-react'
import HighlightedTitle from '../HighlightedTitle'
import styles from './Hero.module.css'

type HeroProps = {
  badgePrefix?: string | null
  badge?: string | null
  title: string
  description?: string | null
  bullets?: { text: string; id?: string | null }[] | null
  primaryCta?: { label?: string | null; href?: string | null } | null
  secondaryCta?: { label?: string | null; href?: string | null } | null
  fineprint?: string | null
  stats?:
    | { value: string; label: string; showStars?: boolean | null; id?: string | null }[]
    | null
  showMockup?: boolean | null
  mockBadgeTop?: {
    show?: boolean | null
    eyebrow?: string | null
    title?: string | null
  } | null
  mockBadgeBottom?: {
    show?: boolean | null
    title?: string | null
    subtitle?: string | null
  } | null
}

function renderMultiline(text: string) {
  const parts = text.split(/\\n|\n/)
  return parts.map((part, i) => (
    <Fragment key={i}>
      {part}
      {i < parts.length - 1 && <br />}
    </Fragment>
  ))
}

export default function Hero({
  badgePrefix,
  badge,
  title,
  description,
  bullets,
  primaryCta,
  secondaryCta,
  fineprint,
  stats,
  showMockup = true,
  mockBadgeTop,
  mockBadgeBottom,
}: HeroProps) {
  return (
    <section className={styles.hero}>
      <div className={styles.blobA} aria-hidden />
      <div className={styles.blobB} aria-hidden />

      <div className={`container ${styles.container} animate-in`}>
        <div className={styles.content}>
          {(badge || badgePrefix) && (
            <div className={styles.eyebrow}>
              {badgePrefix && <span className={styles.eyebrowPrefix}>{badgePrefix}</span>}
              {badge && <span>{badge}</span>}
            </div>
          )}

          <HighlightedTitle as="h1" text={title} className={styles.title} />

          {description && <p className={styles.description}>{description}</p>}

          {bullets && bullets.length > 0 && (
            <ul className={styles.bullets}>
              {bullets.map((b, i) => (
                <li key={i} className={styles.bullet}>
                  <span className={styles.bulletIcon}>
                    <Check size={12} strokeWidth={3.5} />
                  </span>
                  {b.text}
                </li>
              ))}
            </ul>
          )}

          {(primaryCta?.label || secondaryCta?.label) && (
            <div className={styles.actions}>
              {primaryCta?.label && (
                <a href={primaryCta.href || '#'} className={styles.primaryBtn}>
                  {primaryCta.label}
                </a>
              )}
              {secondaryCta?.label && (
                <a href={secondaryCta.href || '#'} className={styles.secondaryBtn}>
                  <span className={styles.playIcon}>
                    <Play size={12} fill="#2B6BFF" stroke="#2B6BFF" />
                  </span>
                  {secondaryCta.label}
                </a>
              )}
            </div>
          )}

          {fineprint && <div className={styles.fineprint}>{fineprint}</div>}

          {stats && stats.length > 0 && (
            <div className={styles.statsRow}>
              {stats.map((s, i) => (
                <Fragment key={i}>
                  {i > 0 && <div className={styles.statSep} aria-hidden />}
                  <div className={styles.statItem}>
                    <div className={styles.statValueRow}>
                      <span className={styles.statValue}>{s.value}</span>
                      {s.showStars && <span className={styles.statStars}>★★★★★</span>}
                    </div>
                    <div className={styles.statLabel}>{s.label}</div>
                  </div>
                </Fragment>
              ))}
            </div>
          )}
        </div>

        {showMockup && (
          <div className={styles.visual}>
            <DevisMock />
            {mockBadgeTop?.show && (
              <div className={`${styles.floatTop} sb-float-a`}>
                <div className={styles.floatTopIcon}>
                  <Check size={20} color="#fff" strokeWidth={3.5} />
                </div>
                <div>
                  {mockBadgeTop.eyebrow && (
                    <div className={styles.floatTopEyebrow}>{mockBadgeTop.eyebrow}</div>
                  )}
                  {mockBadgeTop.title && (
                    <div className={styles.floatTopTitle}>
                      {renderMultiline(mockBadgeTop.title)}
                    </div>
                  )}
                </div>
              </div>
            )}
            {mockBadgeBottom?.show && (
              <div className={`${styles.floatBottom} sb-float-b`}>
                <div className={`${styles.floatBottomDot} sb-pulse-dot`}>
                  <Check size={14} color="#1FB378" strokeWidth={3} />
                </div>
                <div>
                  {mockBadgeBottom.title && (
                    <div className={styles.floatBottomTitle}>{mockBadgeBottom.title}</div>
                  )}
                  {mockBadgeBottom.subtitle && (
                    <div className={styles.floatBottomSub}>{mockBadgeBottom.subtitle}</div>
                  )}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  )
}

function DevisMock() {
  const sideItems: { label: string; icon: React.ReactElement; active?: boolean }[] = [
    { label: 'Tableau de bord', icon: <LayoutDashboard size={13} /> },
    { label: 'Devis', icon: <FileText size={13} />, active: true },
    { label: 'Factures', icon: <Receipt size={13} /> },
    { label: 'Clients', icon: <Users size={13} /> },
    { label: 'Catalogue', icon: <Package size={13} /> },
    { label: 'Réglages', icon: <Settings size={13} /> },
  ]
  const rows: [string, string, string, string][] = [
    ['Dépose ancienne baignoire', '1', '180 €', '180 €'],
    ['Pose receveur de douche extra-plat', '1', '420 €', '420 €'],
    ['Carrelage mural 30×60 (m²)', '12', '65 €', '780 €'],
    ['Robinetterie thermostatique', '1', '295 €', '295 €'],
    ["Main d'œuvre (forfait)", '1', '1 250 €', '1 250 €'],
  ]

  return (
    <div className={styles.mock}>
      <div className={styles.mockChrome}>
        <div className={styles.mockDots}>
          <span /><span /><span />
        </div>
        <div className={styles.mockUrl}>app.sobaty.fr / devis / DEV-2026-0142</div>
      </div>
      <div className={styles.mockBody}>
        <div className={styles.mockSide}>
          <div className={styles.mockSideBrand}>
            <div className={styles.mockSideBrandLogo}>SB</div>
            <span className={styles.mockSideBrandName}>SOBATY</span>
          </div>
          {sideItems.map((it) => (
            <div
              key={it.label}
              className={`${styles.mockSideItem} ${it.active ? styles.mockSideItemActive : ''}`}
            >
              {it.icon}
              <span>{it.label}</span>
            </div>
          ))}
        </div>
        <div className={styles.mockMain}>
          <div className={styles.mockHead}>
            <div>
              <div className={styles.mockEyebrow}>DEVIS N° DEV-2026-0142</div>
              <div className={styles.mockTitle}>Rénovation salle de bain</div>
              <div className={styles.mockClient}>Client : M. Bertrand Dubois</div>
            </div>
            <span className={styles.signedPill}>● Signé électroniquement</span>
          </div>
          <div className={styles.mockTable}>
            <div className={styles.mockTableHead}>
              <span>DÉSIGNATION</span>
              <span>QTÉ</span>
              <span>PU HT</span>
              <span>TOTAL</span>
            </div>
            {rows.map((r, i) => (
              <div key={i} className={styles.mockTableRow}>
                <span>{r[0]}</span>
                <span className={styles.qty}>{r[1]}</span>
                <span className={styles.pu}>{r[2]}</span>
                <span className={styles.total}>{r[3]}</span>
              </div>
            ))}
          </div>
          <div className={styles.mockTotals}>
            <div className={styles.mockTotalsInner}>
              <div className={styles.totLine}>
                <span>Total HT</span>
                <span>2 925,00 €</span>
              </div>
              <div className={styles.totLine}>
                <span>TVA 10%</span>
                <span>292,50 €</span>
              </div>
              <div className={styles.totGrand}>
                <span>Total TTC</span>
                <span>3 217,50 €</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
