import { TrendingUp, Check, LayoutDashboard, FileText, Users, Settings, PieChart } from 'lucide-react';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={`${styles.container} container animate-in`}>
        <div className={styles.content}>
          <span className={styles.badge}>Nouveau : Automatisez vos relances</span>
          <h1 className={styles.title}>
            Un tarif <span>accessible</span> avec toutes les <span>fonctionnalités incluses</span>.
          </h1>
          <p className={styles.description}>
            pas d'option cachée, tout est inclus dans votre abonnement. Vous choisssez l'offre qui vous convient, avec un tarif clair dès le départ.
          </p>
          <div className={styles.actions}>
            <a href="#trial" className={styles.primaryBtn}>Commencer gratuitement</a>
            <a href="#demo" className={styles.secondaryBtn}>Voir la démo</a>
          </div>
          <div className={styles.stats}>
            <div><strong>+2000</strong> Utilisateurs</div>
            <div><strong>4.9/5</strong> Avis clients</div>
            <div><strong>100%</strong> Conforme Loi Anti-Fraude</div>
          </div>
        </div>
        <div className={styles.visual}>
          <div className={styles.mockup}>
            <div className={styles.dashboardPreview}>
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
                  <Settings size={14} />
                </div>
                <div className={styles.dashboardContent}>
                  <div className={styles.dashboardGrid}>
                    <div className={styles.miniCard}>
                      <span className={styles.miniLabel}>En attente</span>
                      <span className={styles.miniValue}>12</span>
                    </div>
                    <div className={styles.miniCard}>
                      <span className={styles.miniLabel}>Clients</span>
                      <span className={styles.miniValue}>48</span>
                    </div>
                    <div className={styles.miniCard}>
                      <span className={styles.miniLabel}>Projets</span>
                      <span className={styles.miniValue}>6</span>
                    </div>
                  </div>
                  <div className={styles.chartArea}>
                    <div className={styles.chartHeader}>Revenus (7 derniers jours)</div>
                    <svg className={styles.chartSvg} viewBox="0 0 400 100" preserveAspectRatio="none">
                      <path 
                        d="M0,80 Q50,70 80,40 T160,50 T240,20 T320,60 T400,30" 
                        fill="none" 
                        stroke="#2b6af8" 
                        strokeWidth="3"
                        strokeLinecap="round"
                      />
                      <path 
                        d="M0,80 Q50,70 80,40 T160,50 T240,20 T320,60 T400,30 L400,100 L0,100 Z" 
                        fill="url(#gradient)" 
                        opacity="0.1"
                      />
                      <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" stopColor="#2b6af8" />
                          <stop offset="100%" stopColor="#ffffff" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <div className={styles.activityList}>
                    <div className={styles.activityItem}>
                      <span>Facture #452 (Jean D.)</span>
                      <strong>850 €</strong>
                    </div>
                    <div className={styles.activityItem}>
                      <span>Devis #128 (Mairie)</span>
                      <strong className={styles.pending}>En attente</strong>
                    </div>
                    <div className={styles.activityItem}>
                      <span>Paiement reçu</span>
                      <strong className={styles.success}>+1,200 €</strong>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Floating elements moved outside mockup to allow overflow */}
          <div className={styles.floatingCard1}>
            <div className={styles.cardIcon}>
              <TrendingUp size={20} color="#10b981" />
            </div>
            <div>
              <div className={styles.cardLabel}>Revenus</div>
              <div className={styles.cardValue}>12,450 €</div>
            </div>
          </div>
          <div className={styles.floatingCard2}>
            <div className={styles.cardIcon}>
              <Check size={20} color="#2b6af8" />
            </div>
            <div>
              <div className={styles.cardLabel}>Devis validé</div>
              <div className={styles.cardValue}>Restaurant L'Escale</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
