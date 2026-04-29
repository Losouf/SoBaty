import HighlightedTitle from '../HighlightedTitle'
import styles from './Testimonials.module.css'

type Review = {
  id?: string | null
  name: string
  role: string
  trade?: string | null
  content: string
  stars: number
  avatarColor?: 'blue' | 'darken' | 'lighten' | null
}

type TestimonialsProps = {
  preTitle?: string | null
  title: string
  googleRating?: {
    show?: boolean | null
    label?: string | null
    sub?: string | null
  } | null
  reviews: Review[]
}

function getInitials(name: string) {
  return name
    .split(' ')
    .map((n) => n[0])
    .filter(Boolean)
    .slice(0, 2)
    .join('')
    .toUpperCase()
}

export default function Testimonials({
  preTitle,
  title,
  googleRating,
  reviews,
}: TestimonialsProps) {
  return (
    <section className={styles.testimonials}>
      <div className="container">
        <div className={styles.header}>
          {preTitle && <span className={styles.preTitle}>{preTitle}</span>}
          <HighlightedTitle text={title} className={styles.title} />
        </div>

        {googleRating?.show && (
          <div className={styles.googleCallout}>
            <div className={styles.googleLogo}>G</div>
            <div>
              {googleRating.label && (
                <div className={styles.googleLabel}>{googleRating.label}</div>
              )}
              {googleRating.sub && <div className={styles.googleSub}>{googleRating.sub}</div>}
            </div>
            <div className={styles.googleStars}>★★★★★</div>
          </div>
        )}

        <div className={styles.grid}>
          {reviews.map((review, i) => {
            const avatarClass =
              review.avatarColor === 'darken'
                ? styles.avatarDarken
                : review.avatarColor === 'lighten'
                  ? styles.avatarLighten
                  : styles.avatarBlue
            return (
              <div key={i} className={styles.card}>
                <div className={styles.cardStars}>{'★'.repeat(review.stars)}</div>
                <p className={styles.quote}>« {review.content} »</p>
                <div className={styles.cardFoot}>
                  <div className={`${styles.avatar} ${avatarClass}`}>
                    {getInitials(review.name)}
                  </div>
                  <div>
                    <div className={styles.cardName}>{review.name}</div>
                    <div className={styles.cardMeta}>
                      {review.role}
                      {review.trade && (
                        <>
                          {' • '}
                          <span className={styles.cardTrade}>{review.trade}</span>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
