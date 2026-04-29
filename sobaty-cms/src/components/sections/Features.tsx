'use client'

import { useEffect, useState, useRef } from 'react'
import { CheckCircle2, ShieldCheck, LayoutDashboard, FileText, Users, PieChart } from 'lucide-react'
import Icon from '../Icon'
import HighlightedTitle from '../HighlightedTitle'
import styles from './Features.module.css'

type Feature = {
  id?: string | null
  icon: string
  title: string
  description: string
  points?: { text: string; id?: string | null }[] | null
  mockupVariant?: 'none' | 'billing' | 'quotes' | 'tracking' | null
}

type FeaturesProps = {
  preTitle?: string | null
  title: string
  features: Feature[]
}

export default function Features({ preTitle, title, features }: FeaturesProps) {
  const [activeIdx, setActiveIdx] = useState(0)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = parseInt(entry.target.getAttribute('data-feature-idx') || '0', 10)
            setActiveIdx(idx)
          }
        })
      },
      { threshold: 0.6 },
    )

    const elements = document.querySelectorAll(`.${styles.textBlock}`)
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const activeFeature = features[activeIdx]
  const activeVariant = activeFeature?.mockupVariant || 'none'

  return (
    <section id="features" className={styles.features} ref={sectionRef}>
      <div className="container">
        <div className={styles.header}>
          {preTitle && <span className={styles.preTitle}>{preTitle}</span>}
          <HighlightedTitle text={title} className={styles.title} />
        </div>

        <div className={styles.splitLayout}>
          <div className={styles.leftCol}>
            {features.map((feature, idx) => (
              <div key={idx} data-feature-idx={idx} className={styles.textBlock}>
                <div className={styles.titleWrapper}>
                  <div className={styles.iconBox}>
                    <Icon name={feature.icon} size={24} />
                  </div>
                  <h3>{feature.title}</h3>
                </div>
                <p>{feature.description}</p>
                {feature.points && feature.points.length > 0 && (
                  <ul className={styles.featureList}>
                    {feature.points.map((point, i) => (
                      <li key={i}>
                        <CheckCircle2 size={16} /> {point.text}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>

          <div className={styles.rightCol}>
            <div className={styles.stickyWrapper}>
              <div className={styles.visualContainer}>
                <div className={`${styles.mockup} ${activeVariant === 'billing' ? styles.active : ''}`}>
                  <div className={styles.topBar}>
                    <div className={styles.dots}>
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                    <div className={styles.searchBar}></div>
                  </div>
                  <div className={styles.mainArea}>
                    <div className={styles.sideNav}>
                      <LayoutDashboard size={14} />
                      <FileText size={14} />
                      <Users size={14} />
                      <PieChart size={14} />
                    </div>
                    <div className={styles.mockupContent}>
                      <div className={styles.invoiceItem}>
                        <div className={styles.itemTitle}>Rénovation Cuisine</div>
                        <div className={styles.itemPrice}>4,500 €</div>
                        <div className={styles.itemStatus}>Payée</div>
                      </div>
                      <div className={styles.invoiceItem}>
                        <div className={styles.itemTitle}>Installation Électrique</div>
                        <div className={styles.itemPrice}>1,200 €</div>
                        <div className={styles.itemStatus}>Payée</div>
                      </div>
                      <div className={styles.invoiceItem}>
                        <div className={styles.itemTitle}>Peinture Salon</div>
                        <div className={styles.itemPrice}>800 €</div>
                        <div className={styles.itemStatus}>Payée</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className={`${styles.mockup} ${activeVariant === 'quotes' ? styles.active : ''}`}>
                  <div className={styles.topBar}>
                    <div className={styles.dots}>
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                    <div className={styles.searchBar}></div>
                  </div>
                  <div className={styles.mainArea}>
                    <div className={styles.sideNav}>
                      <LayoutDashboard size={14} />
                      <FileText size={14} />
                      <Users size={14} />
                      <PieChart size={14} />
                    </div>
                    <div className={styles.mockupContent}>
                      <div className={styles.quoteCard}>
                        <div className={styles.quoteHeader}>DEVIS #2024-001</div>
                        <div className={styles.quoteLine}></div>
                        <div className={styles.quoteLine}></div>
                        <div className={styles.quoteLine}></div>
                        <div className={styles.quoteTotal}>3,250.00 €</div>
                      </div>
                      <div className={styles.signatureBadge}>
                        <ShieldCheck size={14} /> Signé numériquement
                      </div>
                    </div>
                  </div>
                </div>

                <div className={`${styles.mockup} ${activeVariant === 'tracking' ? styles.active : ''}`}>
                  <div className={styles.topBar}>
                    <div className={styles.dots}>
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                    <div className={styles.searchBar}></div>
                  </div>
                  <div className={styles.mainArea}>
                    <div className={styles.sideNav}>
                      <LayoutDashboard size={14} />
                      <FileText size={14} />
                      <Users size={14} />
                      <PieChart size={14} />
                    </div>
                    <div className={styles.mockupContent}>
                      <div className={styles.statsCard}>
                        <div className={styles.statLabel}>Chiffre d&apos;Affaires</div>
                        <div className={styles.statValue}>12,840 €</div>
                        <div className={styles.statTrend}>+12% ce mois-ci</div>
                      </div>
                      <div className={styles.miniChart}>
                        <div className={styles.bar} style={{ height: '40%' }}></div>
                        <div className={styles.bar} style={{ height: '70%' }}></div>
                        <div className={styles.bar} style={{ height: '55%' }}></div>
                        <div className={styles.bar} style={{ height: '90%' }}></div>
                        <div className={styles.bar} style={{ height: '45%' }}></div>
                        <div className={styles.bar} style={{ height: '75%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
