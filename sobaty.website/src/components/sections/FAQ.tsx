"use client";

import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import styles from './FAQ.module.css';

const faqItems = [
  {
    question: "SoBaty est-il conforme à la loi anti-fraude TVA ?",
    answer: "Oui, absolument. SoBaty est conçu pour respecter les dernières réglementations fiscales en vigueur. Toutes vos factures sont sécurisées et inaltérables une fois finalisées."
  },
  {
    question: "Puis-je importer ma base de données clients actuelle ?",
    answer: "Bien sûr ! Vous pouvez importer massivement vos listes de clients et vos bibliothèques d'ouvrages via des fichiers Excel ou CSV. Notre support est là pour vous accompagner si besoin."
  },
  {
    question: "Le logiciel est-il accessible sur mon téléphone sur un chantier ?",
    answer: "Oui, SoBaty est une application 100% cloud. Vous pouvez y accéder depuis n'importe quel navigateur sur smartphone, tablette ou ordinateur, même en plein milieu d'un chantier."
  },
  {
    question: "Comment fonctionne la signature électronique des devis ?",
    answer: "C'est très simple : une fois votre devis prêt, vous l'envoyez par email. Votre client reçoit un lien sécurisé pour signer directement sur son écran (doigt ou souris). Vous recevez une notification dès que c'est signé !"
  },
  {
    question: "Mes données sont-elles en sécurité et sauvegardées ?",
    answer: "La sécurité est notre priorité. Vos données sont chiffrées et hébergées sur des serveurs hautement sécurisés basés en Europe. Nous effectuons des sauvegardes automatiques toutes les 24 heures."
  },
  {
    question: "Y a-t-il un engagement sur les abonnements ?",
    answer: "Nos offres mensuelles sont totalement sans engagement. Vous pouvez arrêter votre abonnement à tout moment directement depuis votre espace client."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="help" className={styles.faq}>
      <div className="container">
        <div className={styles.header}>
          <span className={styles.preTitle}>FAQ</span>
          <h2 className={styles.title}>Questions <span>fréquentes</span></h2>
          <p className={styles.subtitle}>
            Tout ce que vous devez savoir pour bien démarrer avec SoBaty.
          </p>
        </div>

        <div className={styles.accordion}>
          {faqItems.map((item, index) => (
            <div 
              key={index} 
              className={`${styles.item} ${openIndex === index ? styles.active : ''}`}
            >
              <button 
                className={styles.question}
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
              >
                <span className={styles.questionText}>
                  <HelpCircle size={18} className={styles.icon} />
                  {item.question}
                </span>
                <ChevronDown size={20} className={styles.chevron} />
              </button>
              
              <div className={styles.answerWrapper}>
                <div className={styles.answer}>
                  <p>{item.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
