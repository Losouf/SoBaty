"use client";

import { useState, useEffect, useId } from 'react';
import Link from 'next/link';
import { Check, Zap, Shield, Star } from 'lucide-react';
import styles from './Pricing.module.css';

const plans = [
  {
    name: "Gratuit",
    priceMonthly: "0",
    priceYearly: "0",
    description: "Parfait pour se lancer sereinement.",
    features: [
      "Jusqu'à 5 devis / mois",
      "Facturation illimitée",
      "Tableau de bord basique",
      "Assistance par email",
      "1 utilisateur"
    ],
    cta: "Commencer gratuitement",
    popular: false,
    icon: <Zap size={20} />
  },
  {
    name: "Standard",
    priceMonthly: "14.90",
    priceYearly: "12.40",
    description: "Le choix idéal pour les indépendants.",
    features: [
      "Devis illimités",
      "Facturation illimitée",
      "Relances automatiques",
      "Export comptable",
      "TVA personnalisable",
      "Support prioritaire"
    ],
    cta: "Choisir Standard",
    popular: true,
    icon: <Star size={20} />
  },
  {
    name: "Premium",
    priceMonthly: "29.90",
    priceYearly: "24.90",
    description: "Pour les entreprises exigeantes.",
    features: [
      "Tout ce qui est dans Standard",
      "Signature électronique",
      "Bibliothèque d'ouvrages",
      "Multi-utilisateurs",
      "Branding personnalisé",
      "Accès API"
    ],
    cta: "Choisir Premium",
    popular: false,
    icon: <Shield size={20} />
  }
];

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false);
  const toggleId = useId();

  useEffect(() => {
    const saved = sessionStorage.getItem('billingCycle');
    if (saved) setIsYearly(saved === 'yearly');
  }, []);

  const handleToggle = () => {
    const newValue = !isYearly;
    setIsYearly(newValue);
    sessionStorage.setItem('billingCycle', newValue ? 'yearly' : 'monthly');
  };

  return (
    <section id="pricing" className={styles.pricing}>
      <div className="container">
        <div className={styles.header}>
          <span className={styles.preTitle}>Tarifs</span>
          <h2 className={styles.title}>Une offre adaptée à <span>votre croissance</span></h2>

          <div className={styles.toggleWrapper}>
            <div className={styles.segmentedToggle}>
              <input
                type="checkbox"
                id={toggleId}
                className={styles.toggleInput}
                checked={isYearly}
                onChange={handleToggle}
              />
              <label htmlFor={toggleId} className={styles.toggleLabel}>
                <span className={`${styles.toggleOption} ${!isYearly ? styles.active : ''}`}>Mensuel</span>
                <span className={`${styles.toggleOption} ${isYearly ? styles.active : ''}`}>Annuel</span>
                <div className={styles.toggleSlider} />
              </label>
            </div>
          </div>
        </div>

        <div className={styles.flexGrid}>
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`${styles.card} ${plan.popular ? styles.popularCard : ''}`}
            >
              {plan.popular && (
                <>
                  <div className={styles.popularBadge}>Le plus populaire</div>
                  <div className={styles.shimmer} />
                </>
              )}

              <div className={styles.cardHeader}>
                <div className={styles.titleRow}>
                  <div className={styles.iconWrapper}>{plan.icon}</div>
                  <h3>{plan.name}</h3>
                </div>
                <p>{plan.description}</p>
              </div>

              <div className={styles.priceContainer}>
                <div className={styles.odometer}>
                  <span className={styles.currency}>€</span>
                  <div className={styles.odometerWrapper}>
                    <div className={`${styles.odometerValue} ${isYearly ? styles.rollUp : ''}`}>
                      <span className={styles.priceStr}>{plan.priceMonthly}</span>
                      <span className={styles.priceStr}>{plan.priceYearly}</span>
                    </div>
                  </div>
                  <span className={styles.period}>/mois</span>

                  {isYearly && plan.name !== "Gratuit" && (
                    <span className={styles.cardDiscount}>-20%</span>
                  )}
                </div>
              </div>

              <ul className={styles.features}>
                {plan.features.map((feature, fIndex) => (
                  <li key={fIndex}>
                    <Check size={18} className={styles.checkIcon} />
                    {feature}
                  </li>
                ))}
              </ul>

              <div className={styles.spacer} />

              <Link
                href="/register"
                className={`${styles.cta} ${plan.popular ? styles.popularCta : ''}`}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
