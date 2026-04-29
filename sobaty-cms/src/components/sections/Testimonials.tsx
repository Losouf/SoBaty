import { Star, Quote } from 'lucide-react'
import HighlightedTitle from '../HighlightedTitle'
import styles from './Testimonials.module.css'

type Review = {
  id?: string | null
  name: string
  role: string
  content: string
  stars: number
  size: 'small' | 'medium' | 'large'
  tag?: string | null
}

type TestimonialsProps = {
  preTitle?: string | null
  title: string
  reviews: Review[]
}

export default function Testimonials({ preTitle, title, reviews }: TestimonialsProps) {
  return (
    <section id="feed-back" className={styles.testimonials}>
      <div className={styles.container}>
        <div className={styles.header}>
          {preTitle && <span className={styles.preTitle}>{preTitle}</span>}
          <HighlightedTitle text={title} className={styles.title} />
        </div>

        <div className={styles.bentoGrid}>
          {reviews.map((review, idx) => (
            <div key={idx} className={`${styles.card} ${styles[review.size]}`}>
              <div className={styles.cardHeader}>
                <div className={styles.stars}>
                  {[...Array(review.stars)].map((_, i) => (
                    <Star key={i} size={14} fill="#FFB800" color="#FFB800" />
                  ))}
                </div>
                {review.tag && <span className={styles.tag}>{review.tag}</span>}
              </div>

              <blockquote className={styles.content}>{review.content}</blockquote>

              <div className={styles.cardFooter}>
                <div className={styles.avatar}>{review.name.charAt(0)}</div>
                <div className={styles.meta}>
                  <p className={styles.name}>{review.name}</p>
                  <p className={styles.role}>{review.role}</p>
                </div>
                <Quote className={styles.quoteIcon} size={24} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
