import styles from './LogoStrip.module.css'

type Client = {
  id?: string | null
  name: string
  weight?: '400' | '500' | '600' | '700' | '800' | null
  italic?: boolean | null
  tracking?: 'tight' | 'normal' | 'wide' | null
}

type LogoStripProps = {
  eyebrow?: string | null
  clients: Client[]
}

export default function LogoStrip({ eyebrow, clients }: LogoStripProps) {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        {eyebrow && <div className={styles.eyebrow}>{eyebrow}</div>}
        <div className={styles.list}>
          {clients.map((client, i) => {
            const trackingClass =
              client.tracking === 'tight'
                ? styles.trackTight
                : client.tracking === 'wide'
                  ? styles.trackWide
                  : ''
            return (
              <div
                key={i}
                className={`${styles.item} ${trackingClass} ${client.italic ? styles.italic : ''}`}
                style={{ fontWeight: Number(client.weight ?? 700) }}
              >
                {client.name}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
