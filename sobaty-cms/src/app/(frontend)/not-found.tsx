import Link from 'next/link'
import styles from './not-found.module.css'

export default function NotFound() {
  return (
    <main className={styles.container}>
      <div className={styles.content}>
        <div className={styles.glow} />
        <h1 className={styles.errorCode}>404</h1>
        <h2 className={styles.title}>Oups ! Page introuvable</h2>
        <p className={styles.description}>
          Il semble que la page que vous cherchez n&apos;existe pas ou a été déplacée. Ne vous inquiétez pas, vous pouvez
          revenir sur le droit chemin.
        </p>
        <Link href="/" className={styles.button}>
          Retourner à l&apos;accueil
        </Link>
      </div>
    </main>
  )
}
