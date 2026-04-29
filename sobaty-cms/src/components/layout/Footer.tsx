'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import Icon from '../Icon'
import styles from './Footer.module.css'
import type { Footer as FooterType, Media } from '@/payload-types'

const SocialIcons: Record<string, () => React.ReactElement> = {
  linkedin: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  ),
  twitter: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  ),
  facebook: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  ),
  instagram: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  ),
  youtube: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
      <path d="m10 15 5-3-5-3z" />
    </svg>
  ),
  github: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  ),
}

type Props = {
  data: FooterType
}

export default function Footer({ data }: Props) {
  const currentYear = new Date().getFullYear()
  const logo = typeof data.logo === 'object' && data.logo !== null ? (data.logo as Media) : null
  const logoUrl = logo?.url || '/logo.png'
  const copyright = (data.copyright || '').replace('{year}', String(currentYear))

  return (
    <footer className={styles.footer}>
      <div className={`${styles.container} container`}>
        <div className={styles.top}>
          <div className={styles.brandColumn}>
            <div className={styles.logo}>
              <Image src={logoUrl} alt={data.logoAlt || 'Logo'} width={200} height={65} className={styles.logoImg} />
            </div>
            {data.tagline && <p className={styles.tagline}>{data.tagline}</p>}
            {data.contacts && data.contacts.length > 0 && (
              <div className={styles.contactInfo}>
                {data.contacts.map((contact, i) => (
                  <div key={i} className={styles.contactItem}>
                    <Icon name={contact.icon} size={18} />
                    <span>{contact.value}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {data.columns && data.columns.length > 0 && (
            <div className={styles.linksGrid}>
              {data.columns.map((column, i) => (
                <div key={i} className={styles.column}>
                  <h4>{column.title}</h4>
                  {column.links?.map((link, j) => (
                    <Link key={j} href={link.href}>
                      {link.label}
                    </Link>
                  ))}
                </div>
              ))}
            </div>
          )}

          {data.newsletter && (
            <div className={styles.newsletterColumn}>
              {data.newsletter.title && <h4>{data.newsletter.title}</h4>}
              {data.newsletter.description && <p>{data.newsletter.description}</p>}
              <form className={styles.newsletterForm} onSubmit={(e) => e.preventDefault()}>
                <input type="email" placeholder={data.newsletter.placeholder || ''} />
                <button type="submit">
                  <ArrowRight size={20} />
                </button>
              </form>
              {data.socials && data.socials.length > 0 && (
                <div className={styles.socials}>
                  {data.socials.map((social, i) => {
                    const SocialIcon = SocialIcons[social.platform]
                    if (!SocialIcon) return null
                    return (
                      <a key={i} href={social.href} aria-label={social.platform}>
                        <SocialIcon />
                      </a>
                    )
                  })}
                </div>
              )}
            </div>
          )}
        </div>

        <div className={styles.bottom}>
          <div className={styles.copyright}>
            <p>{copyright}</p>
          </div>
          {data.legalLinks && data.legalLinks.length > 0 && (
            <div className={styles.legalLinks}>
              {data.legalLinks.map((link, i) => (
                <Link key={i} href={link.href}>
                  {link.label}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </footer>
  )
}
