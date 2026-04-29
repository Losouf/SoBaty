import Link from 'next/link'
import Image from 'next/image'
import styles from './Navbar.module.css'
import type { Header as HeaderType, Media } from '@/payload-types'

type Props = {
  data: HeaderType
}

export default function Navbar({ data }: Props) {
  const logo = typeof data.logo === 'object' && data.logo !== null ? (data.logo as Media) : null
  const logoUrl = logo?.url || '/logo.png'

  return (
    <nav className={`${styles.navbar} glass`}>
      <div className={`${styles.container} container`}>
        <Link href="/" className={styles.logo}>
          <Image
            src={logoUrl}
            alt={data.logoAlt || 'Logo'}
            width={120}
            height={40}
            priority
            className={styles.logoImg}
          />
        </Link>
        <div className={styles.links}>
          {data.navLinks?.map((link, i) => (
            <Link key={i} href={link.href}>
              {link.label}
            </Link>
          ))}
          {data.secondaryCta?.label && (
            <Link href={data.secondaryCta.href || '#'} className={styles.secondaryCta}>
              {data.secondaryCta.label}
            </Link>
          )}
          {data.primaryCta?.label && (
            <Link href={data.primaryCta.href || '#'} className={styles.cta}>
              {data.primaryCta.label}
            </Link>
          )}
        </div>
      </div>
    </nav>
  )
}
