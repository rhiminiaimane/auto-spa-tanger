import styles from './Services.module.css';
import Head from 'next/head';


const packs = [
  {
    title: 'Pack Maintenance',
    price: { amount: '120', currency: 'DH' },
    description:
      "Un nettoyage complet pour redonner de l'éclat à votre voiture, idéal pour un entretien régulier.",
    features: [
      'Lavage extérieur à la main et séchage',
      'Nettoyage des jantes et pneus',
      'Nettoyage intérieur',
      'Polissage des pneus',
      'Nettoyage avec la technique des deux seaux',
      'Nettoyage avec lance à mousse active',
      'Conditionnement des plastiques intérieurs',
    ],
    buttonText: 'Réserver Maintenant',
  },
  {
    title: 'Pack Platinum',
    price: { amount: '320', currency: 'DH' },
    description:
      'Une désinfection avancée et un polissage brillant pour une propreté durable et une protection renforcée.',
    features: [
      'Désinfection du volant et du levier de vitesse',
      'Aspiration de la poussière et protection du tableau de bord et des portières',
      'Aspiration des tapis',
      'Nettoyage total des conduits d’aération, des cadres de portes et des pédales',
      'Effet pneus neufs',
      'Nettoyage des passages de roues',
      'Dégraissage des pneus',
      'Brillance de la carrosserie',
    ],
    buttonText: 'Réserver Maintenant',
  },
  {
    title: 'Pack Diamond',
    price: { amount: '760', currency: 'DH' },
    description:
      'Un soin luxueux avec traitement du cuir et protection anti-saleté pour une voiture impeccable.',
    features: [
      'Désinfection du volant et du levier de vitesse',
      'Aspiration de la poussière et protection du tableau de bord et des portières',
      'Aspiration des tapis',
      'Nettoyage total des conduits d’aération, des cadres de portes et des pédales',
      'Effet pneus neufs',
      'Nettoyage des passages de roues',
      'Dégraissage des pneus',
      'Brillance de la carrosserie',
      'Traitement des sièges en cuir ou de la sellerie',
      'Protection plastique (protection UV, contre la détérioration et la saleté avec effet neuf)',
    ],
    buttonText: 'Réserver Maintenant',
  },
  {
    title: 'Pack Titanium',
    price: { amount: '1320', currency: 'DH' },
    description:
      'Le summum du soin auto avec polissage chimique et cire premium pour une finition parfaite.',
    features: [
      'Désinfection du volant et du levier de vitesse',
      'Aspiration de la poussière et protection du tableau de bord et des portières',
      'Aspiration des tapis',
      'Nettoyage total des conduits d’aération, des cadres de portes et des pédales',
      'Effet pneus neufs',
      'Nettoyage des passages de roues',
      'Dégraissage des pneus',
      'Brillance de la carrosserie',
      'Traitement des sièges en cuir ou de la sellerie',
      'Protection plastique (protection UV, contre la détérioration et la saleté avec effet neuf)',
      'Décontamination chimique et manuelle',
      'Polissage en une étape',
      'Application de cire premium',
    ],
    buttonText: 'Réserver Maintenant',
  },
];

const Packs: React.FC = () => {
  const handleWhatsAppClick = (packTitle: string) => {
    const message = `Bonjour Auto Spa Detailing, je souhaite réserver le ${packTitle}.`;
    const whatsappUrl = `https://wa.me/212662038056?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  const getExtraFeatures = (current: string[], base: string[]) =>
    current.filter((feature) => !base.includes(feature));

  const platinumFeatures =
    packs.find((p) => p.title === 'Pack Platinum')?.features || [];
  const diamondFeatures =
    packs.find((p) => p.title === 'Pack Diamond')?.features || [];

  return (
    <>
      <Head>
          <title>Nos Packs Detailing à Auto Spa Tanger | Nettoyage & Soins Auto</title>
          <meta
            name="description"
            content="Découvrez nos packs detailing à Auto Spa Tanger : nettoyage voiture, soin cuir, polissage, cire premium, traitement céramique et protection PPF. Nettoyage auto professionnel à Tanger."
          />
          <meta
            name="keywords"
            content="nettoyage voiture Tanger, detailing auto Tanger, soin voiture Tanger, polissage voiture Tanger, auto spa Tanger, lavage voiture Tanger, traitement céramique Tanger, PPF Tanger, protection peinture Tanger"
          />
          <link rel="canonical" href="https://autospatanger.com/packs" />

          {/* Open Graph */}
          <meta property="og:title" content="Nos Packs Detailing à Auto Spa Tanger | Nettoyage & Soins Auto" />
          <meta
            property="og:description"
            content="Découvrez nos packs detailing complets : nettoyage, soin cuir, polissage, cire premium, traitement céramique et protection PPF à Tanger."
          />
          <meta property="og:url" content="https://autospatanger.com/packs" />
          <meta property="og:type" content="website" />
          <meta property="og:locale" content="fr_MA" />
          <meta property="og:image" content="https://autospatanger.com/share.jpg" />

          {/* Twitter */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Nos Packs Detailing à Auto Spa Tanger | Nettoyage & Soins Auto" />
          <meta
            name="twitter:description"
            content="Nos packs detailing professionnels incluent nettoyage, soin cuir, polissage, cire premium, traitement céramique et protection PPF à Tanger."
          />
          <meta name="twitter:image" content="https://autospatanger.com/share.jpg" />
          <meta name="twitter:site" content="@autospatanger" />
        </Head>

    
    <div className={styles.container}>
      <h1 className={styles.title}>Nos Packs de Services</h1>
      <div className={styles.pricing}>
        <div className={styles.cards}>
          {packs.map((plan, index) => {
            let baseFeatures: string[] = [];
            if (plan.title === 'Pack Diamond') {
              baseFeatures = platinumFeatures;
            } else if (plan.title === 'Pack Titanium') {
              baseFeatures = diamondFeatures;
            }

            const extraFeatures = getExtraFeatures(plan.features, baseFeatures);

            return (
              <div key={index} className={styles.card}>
                <h2 className={styles.planTitle}>{plan.title}</h2>
                <p className={styles.price}>
                  <span className={styles.startingFrom}>à partir de </span>
                  {plan.price.amount}
                  <span className={styles.currency}>{plan.price.currency}</span>
                </p>
                <p className={styles.description}>{plan.description}</p>
                <div className={styles.divider}></div>
                <ul className={styles.features}>
                  {plan.features.map((feature, idx) => {
                    const isExtra = extraFeatures.includes(feature);
                    return (
                      <li
                        key={idx}
                        className={`${styles.feature} ${
                          isExtra ? styles.extraFeature : ''
                        }`}
                      >
                        {feature}
                      </li>
                    );
                  })}
                </ul>
                <button
                  onClick={() => handleWhatsAppClick(plan.title)}
                  className={styles.button}
                >
                  {plan.buttonText}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
    </>
  );
};

export default Packs;