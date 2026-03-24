import Link from 'next/link';
import Image from 'next/image';
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={`${styles.navbar} glass`}>
      <div className={`${styles.container} container`}>
        <Link href="/" className={styles.logo}>
          <Image src="/logo.png" alt="SoBaty Logo" width={120} height={40} priority className={styles.logoImg} />
        </Link>
        <div className={styles.links}>
          <Link href="/features">Fonctionnalités</Link>
          <Link href="/feed-back">Retour clients</Link>
          <Link href="/pricing">Tarifs</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contact" className={styles.cta}>
            Se connecter
          </Link>
          <Link href="/contact" className={styles.cta}>
            Essayez-le gratuitement
          </Link>
        </div>
      </div>
    </nav>
  );
}
