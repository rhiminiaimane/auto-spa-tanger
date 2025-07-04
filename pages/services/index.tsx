import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import styles from './index.module.css';
import Reveal from '@/components/ScrollOnReveal/Reveal';
import Head from 'next/head';

const Services: React.FC = () => {
  const router = useRouter();
  const { service } = router.query;
  const [activeService, setActiveService] = useState<'ceramic' | 'ppf'>(
    service === 'ppf' ? 'ppf' : 'ceramic'
  );

  useEffect(() => {
    if (service === 'ceramic' || service === 'ppf') {
      setActiveService(service);
    }
  }, [service]);

  const ceramicPricing = [
    {
      size: 'M',
      label: 'Taille Moyenne: M',
      price: '3760 DHS',
      image: '/cars/tailleM.jpg',
    },
    {
      size: 'L',
      label: 'Taille Grande: L',
      price: '4650 DHS',
      image: '/cars/tailleL.jpg',
    },
    {
      size: 'XL',
      label: 'Taille Extra Grande: XL',
      price: '5820 DHS',
      image: '/cars/tailleXL.jpg',
    },
  ];

  const extraPricing = [
    {
      label: 'Vitres',
      price: '750 DHS',
    },
    {
      label: 'Jantes',
      price: '1860 DHS',
    },
    {
      label: 'Plastique',
      price: '2100 DHS',
    },
    {
      label: 'Cuir',
      price: '2200 DHS',
    },
  ];

  return (
    <>
    <Head>
        <title>Services Auto Spa Tanger | Traitement Céramique & PPF</title>
        <meta
          name="description"
          content="Découvrez nos services de traitement céramique, nano ceramic, film de protection peinture (PPF) et auto spa à Tanger. Protection premium pour votre véhicule."
        />
        <meta
          name="keywords"
          content="traitement céramique Tanger, nano ceramic Tanger, PPF Tanger, auto spa Tanger, protection peinture Tanger, detailing Tanger, lavage auto Tanger"
        />
        <link rel="canonical" href="https://autospatanger.com/services" />

        {/* Open Graph */}
        <meta property="og:title" content="Services Auto Spa Tanger | Traitement Céramique & PPF" />
        <meta
          property="og:description"
          content="Nos services premium à Tanger : traitement céramique, nano ceramic, film de protection peinture (PPF) et auto spa pour une protection optimale."
        />
        <meta property="og:url" content="https://autospatanger.com/services" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="fr_MA" />
        <meta property="og:image" content="https://autospatanger.com/share.jpg" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Services Auto Spa Tanger | Traitement Céramique & PPF" />
        <meta
          name="twitter:description"
          content="Traitement céramique, PPF et auto spa professionnel à Tanger pour protéger et embellir votre véhicule."
        />
        <meta name="twitter:image" content="https://autospatanger.com/share.jpg" />
        <meta name="twitter:site" content="@autospatanger" />
      </Head>

    <div className={styles.pageContainer}>
      <div className={styles.buttonGroup}>
        <button
          className={`${styles.toggleButton} ${activeService === 'ceramic' ? styles.active : ''}`}
          onClick={() => {
            setActiveService('ceramic');
            router.push('/services?service=ceramic', undefined, { shallow: true });
          }}
        >
          Revêtement Céramique
        </button>
        <button
          className={`${styles.toggleButton} ${activeService === 'ppf' ? styles.active : ''}`}
          onClick={() => {
            setActiveService('ppf');
            router.push('/services?service=ppf', undefined, { shallow: true });
          }}
        >
          Film PPF
        </button>
      </div>

      {activeService === 'ceramic' ? (
        <>
          <Reveal direction='left'>
          <div className={styles.introText}>
            <h2>Traitement Céramique à Auto Spa – Brillance, Protection et Excellence</h2>
            <p>
              Vous êtes à la recherche du meilleur soin pour votre voiture à Auto Spa Tanger ? Le traitement céramique automobile est la solution idéale pour offrir à votre véhicule une brillance éclatante, une protection durable et une valeur ajoutée inégalée.
            </p>
            <p>
              Chez Auto Spa Detailing Tanger, nous vous proposons un revêtement céramique professionnel appliqué avec expertise, pour transformer votre voiture et la protéger des agressions extérieures.
            </p>
          </div>
          </Reveal>
          
          <Reveal direction='right'>
          <div className={styles.cardsContainer}>
            {ceramicPricing.map((car, index) => (
              <div className={styles.pricingCard} key={index}>
                <div className={styles.carImageContainer}>
                  <Image src={car.image} alt={car.label} width={300} height={300} />
                </div>
                <h3 className={styles.carLabel}>{car.label}</h3>
                {/* Example car names for each size, under carLabel */}
                <div className={styles.exampleCars}>
                  {car.size === 'M' && (
                    <>
                      <strong></strong> GOLF,FIAT 500, SEAT LEAN, PEUGEOT 208...
                    </>
                  )}
                  {car.size === 'L' && (
                    <>
                      <strong></strong> Mercedes class C, BMW SERIE 5, AUDI A4, SKODA OCTAVIA...
                    </>
                  )}
                  {car.size === 'XL' && (
                    <>
                      <strong></strong> AUDI Q7, Q9, PORSCHE CAYENNE, TOUAREG...
                    </>
                  )}
                </div>
                <div className={styles.priceLine}>
                  <span className={styles.price}>{car.price}</span>
                </div>
                <div className={styles.extraInfo}>
                </div>
              </div>
            ))}
          </div>
          </Reveal>
          <Reveal direction='left'>
          <div className={styles.extraSection}>
            <h3 className={styles.sectionTitle}>Options Extra</h3>
            <div className={styles.extraItems}>
              {extraPricing.map((item, index) => (
                <div className={styles.extraItem} key={index}>
                  <span className={styles.carLabel}>{item.label}</span>
                  <div className={styles.priceLine}>
                    <span className={styles.price}>{item.price}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          </Reveal>
          <Reveal direction='bottom'>
          <div className={styles.advantages}>
            <h3>🔒 Les avantages du traitement céramique à Auto Spa Tanger</h3>
            <ul>
              <li>Protection maximale contre le climat de Tanger : Résistance aux UV, pluie salée, sable, fientes d’oiseaux et micro-rayures.</li>
              <li>Finition ultra-brillante : Une peinture éclatante avec un effet miroir luxueux.</li>
              <li>Effet hydrophobe puissant : L’eau, la poussière et les saletés glissent littéralement sur la surface.</li>
              <li>Facilité d’entretien : Moins de lavages, plus de temps pour vous.</li>
              <li>Durabilité exceptionnelle : Jusqu’à 5 ans de protection avec un seul traitement.</li>
              <li>Préserve la valeur de votre véhicule : Idéal pour les voitures neuves, de luxe ou de collection.</li>
            </ul>
          </div>
          </Reveal>
        </>
      ) : (
        <>
          <Reveal direction='left'>
          <div className={styles.introText}>
            <h2>Film de Protection de Peinture (PPF) à Auto Spa Tanger – La Protection Invisible Ultime</h2>
            <p>
              Vous souhaitez protéger la carrosserie de votre voiture contre les agressions du quotidien ? Le film de protection de peinture (PPF) est la solution haut de gamme pour préserver l’éclat de votre véhicule tout en gardant un aspect d’origine impeccable.
            </p>
            <p>
              Chez Auto Spa Detailing Tanger, nous sommes spécialisés dans la pose professionnelle de films PPF de haute qualité, découpés sur mesure pour une finition parfaite.
            </p>
            <Reveal direction='left'>
            <div style={{ marginTop: '24px', display: 'flex', justifyContent: 'center', gap: '24px', flexWrap: 'wrap' }}>
              <Image
                src="/cars/ppf_image1.jpeg"
                alt="Film PPF Auto Spa Tanger"
                className={styles.responsiveImage}
                width={350}
                height={220}
                style={{
                  borderRadius: '12px',
                  objectFit: 'cover',
                  boxShadow: 'rgba(0, 0, 0, 0.02) 0px 0px 14px'
                }}
              />
              <Image
                src="/cars/ppf_image2.jpeg"
                alt="Film PPF Auto Spa Tanger"
                className={styles.responsiveImage}
                width={350}
                height={220}
                style={{
                  borderRadius: '12px',
                  objectFit: 'cover',
                  boxShadow: 'rgba(0, 0, 0, 0.02) 0px 0px 14px'
                }}
              />
            </div>
            </Reveal>
          </div>
          </Reveal>
          <Reveal direction='right'>
          <div className={styles.advantages}>
            <h3>🛡️ Pourquoi choisir un film de protection PPF à Tanger ?</h3>
            <ul>
              <li>Protection contre les impacts et rayures : Le film PPF agit comme une seconde peau contre les éclats de gravillons, les rayures, les frottements et les agressions mécaniques.</li>
              <li>Résistance aux UV et à l’oxydation : Idéal pour le climat ensoleillé de Tanger, il empêche la décoloration de la peinture.</li>
              <li>Effet auto-régénérant : Les micro-rayures disparaissent avec la chaleur du soleil ou de l’eau chaude.</li>
              <li>Invisible à l’œil nu : Application précise pour un rendu 100 % transparent et sans bulles.</li>
              <li>Entretien simplifié : La surface reste lisse et propre plus longtemps.</li>
              <li>Préserve la valeur de revente : Votre voiture reste dans un état “comme neuf” pendant des années.</li>
            </ul>
          </div>
          </Reveal>
        </>
      )}
    </div>
    </>
  );
};

export default Services;