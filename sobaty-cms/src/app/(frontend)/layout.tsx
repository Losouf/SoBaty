import React from 'react'
import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'

const montserrat = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'SO BATY — Vos devis faciles, pour les artisans du BTP',
  description:
    'Le logiciel de devis et factures pensé pour les artisans du BTP. Conforme facture électronique 2026.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={montserrat.variable}>
      <body className="antialiased">{children}</body>
    </html>
  )
}
