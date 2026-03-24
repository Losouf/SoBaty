"use client";

import Image from 'next/image';
import Link from 'next/link';
import { 
  Mail, 
  Phone, 
  MapPin,
  ArrowRight
} from 'lucide-react';
import styles from './Footer.module.css';

// Custom Social Icons (SVGs) for brand consistency and build stability
const SocialIcons = {
  Linkedin: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/>
    </svg>
  ),
  Twitter: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
    </svg>
  ),
  Facebook: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
    </svg>
  ),
  Instagram: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
    </svg>
  )
};

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className={styles.footer}>
      <div className={`${styles.container} container`}>
        <div className={styles.top}>
          <div className={styles.brandColumn}>
            <div className={styles.logo}>
              <Image src="/logo.png" alt="SoBaty Logo" width={200} height={65} className={styles.logoImg} />
            </div>
            <p className={styles.tagline}>
              La solution de facturation intelligente conçue pour propulser les entreprises du bâtiment vers l'excellence.
            </p>
            <div className={styles.contactInfo}>
              <div className={styles.contactItem}>
                <Mail size={18} />
                <span>contact@sobaty.com</span>
              </div>
              <div className={styles.contactItem}>
                <Phone size={18} />
                <span>+33 (0)1 23 45 67 89</span>
              </div>
            </div>
          </div>

          <div className={styles.linksGrid}>
            <div className={styles.column}>
              <h4>Solutions</h4>
              <Link href="#features">Fonctionnalités</Link>
              <Link href="#pricing">Tarifs</Link>
              <Link href="#demo">Essai gratuit</Link>
              <Link href="#updates">Nouveautés</Link>
            </div>
            <div className={styles.column}>
              <h4>Entreprise</h4>
              <Link href="#about">À propos</Link>
              <Link href="/blog">Blog & Actualités</Link>
              <Link href="#careers">Carrières</Link>
              <Link href="#contact">Contact</Link>
            </div>
            <div className={styles.column}>
              <h4>Support</h4>
              <Link href="/aide">Centre d'aide</Link>
              <Link href="/tutos">Tutoriels vidéo</Link>
              <Link href="/faq">FAQ</Link>
              <Link href="/status">État du service</Link>
            </div>
          </div>

          <div className={styles.newsletterColumn}>
            <h4>Restez informé</h4>
            <p>Recevez nos derniers conseils et mises à jour produit.</p>
            <form className={styles.newsletterForm} onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Votre email" />
              <button type="submit">
                <ArrowRight size={20} />
              </button>
            </form>
            <div className={styles.socials}>
              <a href="#" aria-label="LinkedIn"><SocialIcons.Linkedin /></a>
              <a href="#" aria-label="Twitter"><SocialIcons.Twitter /></a>
              <a href="#" aria-label="Facebook"><SocialIcons.Facebook /></a>
              <a href="#" aria-label="Instagram"><SocialIcons.Instagram /></a>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <div className={styles.copyright}>
            <p>&copy; {currentYear} SoBaty. Fait avec passion pour les bâtisseurs.</p>
          </div>
          <div className={styles.legalLinks}>
            <Link href="/mentions-legales">Mentions Légales</Link>
            <Link href="/confidentialite">Confidentialité</Link>
            <Link href="/cgv">CGV</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
