"use client";

import { useEffect, useState, useRef } from 'react';
import { FileText, CheckCircle2, TrendingUp, ShieldCheck, Zap, LayoutDashboard, PieChart, Users } from 'lucide-react';
import styles from './Features.module.css';

const features = [
  {
    id: 'billing',
    icon: <Zap size={24} />,
    title: "Facturation en un éclair",
    description: "Transformez vos devis en factures d'un simple clic. Suivez les paiements en temps réel et automatisez vos processus administratifs.",
    points: ["Édition de factures conformes", "Envoi direct par email", "Historique complet"]
  },
  {
    id: 'quotes',
    icon: <FileText size={24} />,
    title: "Devis qui font mouche",
    description: "Créez des devis professionnels et ultra-précis en quelques minutes. Intégrez vos bibliothèques d'ouvrages et personnalisez vos mises en page.",
    points: ["Bibliothèque personnalisable", "Signature électronique", "Calcul de marges"]
  },
  {
    id: 'tracking',
    icon: <TrendingUp size={24} />,
    title: "Pilotage en temps réel",
    description: "Gardez toujours un œil sur votre santé financière. Nos tableaux de bord vous donnent une vision claire de votre chiffre d'affaires.",
    points: ["Tableaux de bord intuitifs", "Relances automatiques", "Export comptable"]
  }
];

export default function Features() {
  const [activeId, setActiveId] = useState(features[0].id);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id.replace('content-', ''));
          }
        });
      },
      { threshold: 0.6 }
    );

    const elements = document.querySelectorAll(`.${styles.textBlock}`);
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="features" className={styles.features} ref={sectionRef}>
      <div className={`${styles.container} container`}>
        <div className={styles.leftCol}>
          <div className={styles.header}>
            <span className={styles.preTitle}>Fonctionnalités</span>
            <h2 className={styles.title}>Tout ce dont vous avez besoin pour <span>booster votre activité</span></h2>
          </div>

          {features.map((feature) => (
            <div key={feature.id} id={`content-${feature.id}`} className={styles.textBlock}>
              <div className={styles.titleWrapper}>
                <div className={styles.iconBox}>{feature.icon}</div>
                <h3>{feature.title}</h3>
              </div>
              <p>{feature.description}</p>
              <ul className={styles.featureList}>
                {feature.points.map((point, i) => (
                  <li key={i}><CheckCircle2 size={16} /> {point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className={styles.rightCol}>
          <div className={styles.stickyWrapper}>
            <div className={styles.visualContainer}>
              {/* Mockup 1: Billing */}
              <div className={`${styles.mockup} ${activeId === 'billing' ? styles.active : ''}`}>
                <div className={styles.topBar}>
                  <div className={styles.dots}><span></span><span></span><span></span></div>
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

              {/* Mockup 2: Quotes */}
              <div className={`${styles.mockup} ${activeId === 'quotes' ? styles.active : ''}`}>
                <div className={styles.topBar}>
                  <div className={styles.dots}><span></span><span></span><span></span></div>
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

              {/* Mockup 3: Tracking */}
              <div className={`${styles.mockup} ${activeId === 'tracking' ? styles.active : ''}`}>
                <div className={styles.topBar}>
                  <div className={styles.dots}><span></span><span></span><span></span></div>
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
                      <div className={styles.statLabel}>Chiffre d'Affaires</div>
                      <div className={styles.statValue}>12,840 €</div>
                      <div className={styles.statTrend}>+12% ce mois-ci</div>
                    </div>
                    <div className={styles.miniChart}>
                      <div className={styles.bar} style={{height: '40%'}}></div>
                      <div className={styles.bar} style={{height: '70%'}}></div>
                      <div className={styles.bar} style={{height: '55%'}}></div>
                      <div className={styles.bar} style={{height: '90%'}}></div>
                      <div className={styles.bar} style={{height: '45%'}}></div>
                      <div className={styles.bar} style={{height: '75%'}}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
