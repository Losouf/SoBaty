import Image from 'next/image';
import styles from './Footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className={styles.footer}>
      <div className={`${styles.container} container`}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <div className={styles.logo}>
              <Image src="/logo.png" alt="SoBaty Logo" width={120} height={40} className={styles.logoImg} />
            </div>
            <p className={styles.tagline}>
              La facturation intelligente pour les professionnels du bâtiment et au-delà.
            </p>
          </div>
          <div className={styles.nav}>
            <div className={styles.column}>
              <h4>Produit</h4>
              <a href="#features">Fonctionnalités</a>
              <a href="#pricing">Tarifs</a>
              <a href="#demo">Démo</a>
            </div>
            <div className={styles.column}>
              <h4>Entreprise</h4>
              <a href="#about">À propos</a>
              <a href="/blog">Blog</a>
              <a href="#contact">Contact</a>
            </div>
            <div className={styles.column}>
              <h4>Légal</h4>
              <a href="/mentions-legales">Mentions Légales</a>
              <a href="/confidentialite">Confidentialité</a>
              <a href="/cgv">CGV</a>
            </div>
          </div>
        </div>
        <div className={styles.bottom}>
          <p>&copy; {currentYear} SoBaty. Tous droits réservés.</p>
          <div className={styles.socials}>
            {/* Social icons could go here */}
          </div>
        </div>
      </div>
    </footer>
  );
}
