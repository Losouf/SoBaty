import { Check } from 'lucide-react'
import HighlightedTitle from '../HighlightedTitle'
import styles from './Features.module.css'

type Point = { id?: string | null; title: string; desc?: string | null }

type Feature = {
  id?: string | null
  eyebrow: string
  title: string
  accent?: string | null
  description: string
  points?: Point[] | null
  mockupVariant?: 'none' | 'devis' | 'signature' | 'dashboard' | null
  reverse?: boolean | null
}

type FeaturesProps = {
  preTitle?: string | null
  title: string
  description?: string | null
  features: Feature[]
}

export default function Features({ preTitle, title, description, features }: FeaturesProps) {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.header}>
          {preTitle && <span className={styles.preTitle}>{preTitle}</span>}
          <HighlightedTitle text={title} className={styles.title} />
          {description && <p className={styles.description}>{description}</p>}
        </div>

        {features.map((feature, idx) => (
          <div
            key={idx}
            className={`${styles.block} ${feature.reverse ? styles.blockReverse : styles.blockNormal}`}
          >
            <div className={styles.blockText}>
              <div className={styles.blockEyebrow}>{feature.eyebrow}</div>
              <h3 className={styles.blockTitle}>
                {feature.title}
                {feature.accent && <> <span className={styles.accent}>{feature.accent}</span></>}
              </h3>
              <p className={styles.blockBody}>{feature.description}</p>
              {feature.points && feature.points.length > 0 && (
                <ul className={styles.points}>
                  {feature.points.map((p, i) => (
                    <li key={i} className={styles.point}>
                      <span className={styles.pointIcon}>
                        <Check size={12} strokeWidth={3.5} />
                      </span>
                      <span>
                        <strong>{p.title}</strong>
                        {p.desc && <span className={styles.pointDesc}> — {p.desc}</span>}
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <div className={styles.blockMock}>
              {feature.mockupVariant === 'devis' && <DevisLiveMock />}
              {feature.mockupVariant === 'signature' && <PhoneSignatureMock />}
              {feature.mockupVariant === 'dashboard' && <DashboardMock />}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

function DevisLiveMock() {
  const rows: [string, string, string][] = [
    ['Dépose ancienne baignoire', '1', '180 €'],
    ['Receveur de douche extra-plat', '1', '420 €'],
    ['Carrelage mural 30×60', '12', '780 €'],
    ['Robinetterie thermostatique', '1', '295 €'],
  ]
  return (
    <div className={styles.mockDevis}>
      <div className={styles.mockDevisChrome}>
        <div className={styles.mockDevisLive}>Aperçu en temps réel</div>
      </div>
      <div className={styles.mockDevisBody}>
        <div className={styles.mockDevisForm}>
          <div className={styles.mockDevisFormHead}>NOUVELLE LIGNE</div>
          <div className={styles.mockField}>
            <div className={styles.mockFieldLabel}>Désignation</div>
            <div className={`${styles.mockFieldInput} ${styles.mockFieldFocused}`}>
              Pose carrelage 30×60 — salle de bain
            </div>
          </div>
          <div className={styles.mockFieldsRow}>
            <div>
              <div className={styles.mockFieldLabel}>Quantité</div>
              <div className={styles.mockFieldInput}>12 m²</div>
            </div>
            <div>
              <div className={styles.mockFieldLabel}>Prix HT</div>
              <div className={styles.mockFieldInput}>65 €</div>
            </div>
            <div>
              <div className={styles.mockFieldLabel}>TVA</div>
              <div className={styles.mockFieldInput}>10%</div>
            </div>
          </div>
          <div className={styles.mockSuggest} style={{ marginTop: 10 }}>
            <span className={styles.mockSuggestTag}>IA</span>
            Suggestion : ajouter « Préparation support » (12 m² × 18 €)
          </div>
          <button className={styles.mockAddBtn}>+ Ajouter au devis</button>
        </div>
        <div className={styles.mockPdfWrap}>
          <div className={styles.mockPdf}>
            <div className={styles.mockPdfHead}>
              <div>
                <div className={styles.mockPdfCo}>BÂTI MARTIN SARL</div>
                <div className={styles.mockPdfMeta}>
                  12 rue des Artisans • 75011 Paris
                  <br />
                  SIRET 812 345 678 00012
                </div>
              </div>
              <div>
                <div className={styles.mockPdfTag}>DEVIS</div>
                <div className={styles.mockPdfMeta} style={{ textAlign: 'right' }}>
                  N° DEV-2026-0142
                  <br />
                  15 avr. 2026
                </div>
              </div>
            </div>
            {rows.map((r, i) => (
              <div key={i} className={styles.mockPdfRow}>
                <span>{r[0]}</span>
                <span>{r[1]}</span>
                <span>{r[2]}</span>
              </div>
            ))}
            <div className={styles.mockPdfTotal}>
              <span>Total TTC</span>
              <span>1 953,00 €</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function PhoneSignatureMock() {
  return (
    <div className={styles.mockPhoneWrap}>
      <div className={styles.mockPhone}>
        <div className={styles.mockPhoneScreen}>
          <div className={styles.mockPhoneStatus}>
            <span>9:41</span>
            <span>•••</span>
          </div>
          <div className={styles.mockPhoneBody}>
            <div className={styles.mockPhoneFrom}>Devis reçu de</div>
            <div className={styles.mockPhoneCo}>Bâti Martin SARL</div>
            <div className={styles.mockPhoneCard}>
              <div className={styles.mockPhoneCardLabel}>Rénovation salle de bain</div>
              <div className={styles.mockPhoneAmount}>3 217,50 €</div>
              <div className={styles.mockPhoneSub}>TTC • 5 lignes</div>
            </div>
            <div className={styles.mockPhoneCard}>
              <div className={styles.mockPhoneSign}>Votre signature</div>
              <div className={styles.mockPhoneSignPad}>
                <svg width="100" height="40" viewBox="0 0 100 40" fill="none" stroke="#2B6BFF" strokeWidth="2" strokeLinecap="round">
                  <path d="M5,30 Q15,10 25,25 T50,20 Q60,35 75,15 T95,25" />
                </svg>
              </div>
            </div>
            <button className={styles.mockPhoneCta}>Accepter et signer</button>
          </div>
        </div>
      </div>
    </div>
  )
}

function DashboardMock() {
  const kpis = [
    { label: 'Devis envoyés', value: '47', change: '+12%', color: '#2B6BFF' },
    { label: 'Devis acceptés', value: '31', change: '+18%', color: '#1FB378' },
    { label: 'CA facturé', value: '82 450 €', change: '+24%', color: '#2B6BFF' },
    { label: 'À encaisser', value: '12 800 €', change: '3 factures', color: '#FF8A2B' },
  ]
  return (
    <div className={styles.mockDashboard}>
      <div className={styles.mockDashHead}>Mon activité — Avril 2026</div>
      <div className={styles.mockKpis}>
        {kpis.map((k, i) => (
          <div key={i} className={styles.mockKpi}>
            <div className={styles.mockKpiLabel}>{k.label}</div>
            <div className={styles.mockKpiValue}>{k.value}</div>
            <div className={styles.mockKpiChange} style={{ color: k.color }}>
              ↑ {k.change}
            </div>
          </div>
        ))}
      </div>
      <div className={styles.mockChartWrap}>
        <div className={styles.mockChartTitle}>Évolution du CA</div>
        <svg width="100%" height="100" viewBox="0 0 360 100" style={{ display: 'block' }}>
          <defs>
            <linearGradient id="features-grad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#2B6BFF" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#2B6BFF" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            d="M0,80 L40,70 L80,75 L120,55 L160,60 L200,40 L240,45 L280,30 L320,25 L360,15 L360,100 L0,100 Z"
            fill="url(#features-grad)"
          />
          <path
            d="M0,80 L40,70 L80,75 L120,55 L160,60 L200,40 L240,45 L280,30 L320,25 L360,15"
            fill="none"
            stroke="#2B6BFF"
            strokeWidth="2.5"
          />
          {[
            [40, 70],
            [80, 75],
            [120, 55],
            [160, 60],
            [200, 40],
            [240, 45],
            [280, 30],
            [320, 25],
            [360, 15],
          ].map(([x, y], i) => (
            <circle key={i} cx={x} cy={y} r="3" fill="#fff" stroke="#2B6BFF" strokeWidth="2" />
          ))}
        </svg>
      </div>
    </div>
  )
}
