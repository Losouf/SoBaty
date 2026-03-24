import { Star, Quote, CheckCircle } from 'lucide-react';
import styles from './Testimonials.module.css';

const reviews = [
  {
    id: 1,
    name: "Jean Dupont",
    role: "Artisan Plombier",
    content: "SoBaty a littéralement transformé ma gestion quotidienne. Je passe 3 fois moins de temps sur mes devis.",
    stars: 5,
    size: "large",
    tag: "Productivité"
  },
  {
    id: 2,
    name: "Marie Laurent",
    role: "Gérante - RenoDesign",
    content: "L'interface est d'une simplicité déconcertante. Enfin un logiciel moderne !",
    stars: 5,
    size: "small",
    tag: "Simplicité"
  },
  {
    id: 3,
    name: "Thomas Bernard",
    role: "Chef de Chantier",
    content: "Le suivi des paiements m'a permis de réduire mes impayés de 40%. Indispensable.",
    stars: 5,
    size: "medium",
    tag: "Trésorerie"
  },
  {
    id: 4,
    name: "Sophie Morel",
    role: "Auto-entrepreneuse",
    content: "Le support client est ultra réactif. C'est le partenaire idéal pour ma structure.",
    stars: 5,
    size: "medium",
    tag: "Support"
  },
  {
    id: 5,
    name: "Marc Antoine",
    role: "Électricien",
    content: "Je peux enfin facturer sur le chantier directement depuis ma tablette. Un gain de temps fou.",
    stars: 5,
    size: "small",
    tag: "Mobilité"
  },
  {
    id: 6,
    name: "Lucie Ferrand",
    role: "Architecte d'intérieur",
    content: "La personnalisation des documents permet de garder une image de marque forte auprès de mes clients.",
    stars: 5,
    size: "large",
    tag: "Branding"
  }
];

export default function Testimonials() {
  return (
    <section id="feed-back" className={styles.testimonials}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.preTitle}>Témoignages</span>
          <h2 className={styles.title}>Ils nous font <span>confiance</span></h2>
        </div>

        <div className={styles.bentoGrid}>
          {reviews.map((review) => (
            <div
              key={review.id}
              className={`${styles.card} ${styles[review.size]}`}
            >
              <div className={styles.cardHeader}>
                <div className={styles.stars}>
                  {[...Array(review.stars)].map((_, i) => (
                    <Star key={i} size={14} fill="#FFB800" color="#FFB800" />
                  ))}
                </div>
                <span className={styles.tag}>{review.tag}</span>
              </div>

              <blockquote className={styles.content}>
                {review.content}
              </blockquote>

              <div className={styles.cardFooter}>
                <div className={styles.avatar}>
                  {review.name.charAt(0)}
                </div>
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
  );
}
