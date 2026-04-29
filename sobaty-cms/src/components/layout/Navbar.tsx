'use client'

import { useEffect, useState, Fragment } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from './Navbar.module.css'
import type { Header as HeaderType, Media } from '@/payload-types'

type Props = {
  data: HeaderType
}

function renderBoldMarkdown(text: string) {
  const parts = text.split(/\*\*(.+?)\*\*/g)
  return parts.map((part, i) =>
    i % 2 === 1 ? <strong key={i}>{part}</strong> : <Fragment key={i}>{part}</Fragment>,
  )
}

export default function Navbar({ data }: Props) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const logo = typeof data.logo === 'object' && data.logo !== null ? (data.logo as Media) : null
  const logoUrl = logo?.url || '/logo.png'
  const announcement = data.announcement

  return (
    <>
      {announcement?.enabled && (announcement.message || announcement.badge) && (
        <div className={styles.announcement}>
          {announcement.badge && (
            <span className={styles.announcementBadge}>{announcement.badge}</span>
          )}
          {announcement.message && (
            <span className={styles.announcementMessage}>
              {renderBoldMarkdown(announcement.message)}
            </span>
          )}
          {announcement.linkLabel && (
            <Link href={announcement.linkHref || '#'} className={styles.announcementLink}>
              {announcement.linkLabel}
            </Link>
          )}
        </div>
      )}

      <nav className={`${styles.navbar} ${scrolled ? styles.navbarScrolled : ''}`}>
        <div className={styles.container}>
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
          </div>
          <div className={styles.actions}>
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
    </>
  )
}
