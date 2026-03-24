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
            {/* We can use a stylized div to represent a dashboard or an image if available */}
            <div className={styles.dashboardPreview}>
              <div className={styles.headerDot}></div>
              <div className={styles.lines}>
                <div className={styles.line}></div>
                <div className={styles.line}></div>
                <div className={styles.line}></div>
              </div>
              <div className={styles.chart}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
