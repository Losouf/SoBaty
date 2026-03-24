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
                    <div className={styles.miniCard}></div>
                    <div className={styles.miniCard}></div>
                    <div className={styles.miniCard}></div>
                  </div>
                  <div className={styles.activityList}>
                    <div className={styles.activityItem}></div>
                    <div className={styles.activityItem}></div>
                    <div className={styles.activityItem}></div>
                    <div className={styles.activityItem}></div>
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
