import Image from 'next/image'
import Link from 'next/link'
import { Heart } from 'lucide-react'
import styles from './Footer.module.css'
import type { Footer as FooterType, Media } from '@/payload-types'

type Props = {
  data: FooterType
}

export default function Footer({ data }: Props) {
  const currentYear = new Date().getFullYear()
  const logo = typeof data.logo === 'object' && data.logo !== null ? (data.logo as Media) : null
  const logoUrl = logo?.url || '/logo.png'
  const copyright = (data.copyright || '').replace('{year}', String(currentYear))
  const madeWith = data.madeWith || ''
  const heartParts = madeWith.split('♥')

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.top}>
          <div className={styles.brandColumn}>
            <Image
              src={logoUrl}
              alt={data.logoAlt || 'Logo'}
              width={200}
              height={56}
              className={styles.logoImg}
            />
            {data.tagline && <p className={styles.tagline}>{data.tagline}</p>}
            {data.rating?.show && data.rating.score && (
              <div className={styles.rating}>
                <span className={styles.ratingStars}>★★★★★</span>
                <span className={styles.ratingScore}>{data.rating.score}</span>
                {data.rating.platform && <span>{data.rating.platform}</span>}
              </div>
            )}
          </div>

          {data.columns?.map((col, i) => (
            <div key={i} className={styles.column}>
              <div className={styles.columnTitle}>{col.title}</div>
              {col.links?.map((link, j) => (
                <Link key={j} href={link.href}>
                  {link.label}
                </Link>
              ))}
            </div>
          ))}
        </div>

        <div className={styles.bottom}>
          {copyright && <span>{copyright}</span>}
          {madeWith && (
            <span className={styles.madeWith}>
              {heartParts.length > 1 ? (
                <>
                  {heartParts[0]}
                  <span className={styles.heart}>
                    <Heart size={14} fill="#FF6B6B" stroke="#FF6B6B" />
                  </span>
                  {heartParts.slice(1).join('♥')}
                </>
              ) : (
                madeWith
              )}
            </span>
          )}
        </div>
      </div>
    </footer>
  )
}
