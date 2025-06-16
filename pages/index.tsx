import Head from 'next/head';
import AboutSection from '@/components/About/AboutSection';
import HeroSection from '@/components/Hero/HeroSection';
import PackSection from '@/components/Packs/PackSection';
import ServiceSection from '@/components/Services/ServiceSection';
import ReviewsSection from '@/components/Reviews/ReviewsSection';
import Footer from '@/components/Footer/Footer';
import React from 'react';

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Auto Spa Tanger | Protection Céramique, PPF & Detailing à Tanger</title>
        <meta name="description" content="Auto Spa Tanger, spécialiste en traitement céramique, protection PPF et detailing auto à Tanger. Protégez et sublimez votre véhicule avec des services haut de gamme." />
        <meta name="keywords" content="Auto Spa Tanger, protection céramique Tanger, PPF Tanger, detailing Tanger, traitement céramique voiture Tanger, protection peinture voiture Tanger, nano ceramic Tanger, lavage premium Tanger, detailing auto Tanger" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta name="author" content="Auto Spa Tanger" />
        <link rel="canonical" href="https://autospatanger.com/" />

        {/* Schema.org Local Business */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "AutoRepair",
              "name": "Auto Spa Tanger",
              "image": "https://autospatanger.com/logo.jpeg",
              "@id": "https://autospatanger.com",
              "url": "https://autospatanger.com",
              "telephone": "+212662038056",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Dyar Tanja",
                "addressLocality": "Tanger",
                "addressRegion": "Tanger-Tétouan-Al Hoceïma",
                "postalCode": "90000",
                "addressCountry": "MA"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 35.7608711,
                "longitude": -5.8518966
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Sunday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday"
                ],
                "opens": "10:30",
                "closes": "20:00"
              },
              "priceRange": "$$$",
              "sameAs": [
                "https://www.instagram.com/auto_spa_detailing_sarl/"
              ]
            }
          `}
        </script>

        {/* Open Graph */}
        <meta property="og:title" content="Auto Spa Tanger | Detailing, Protection Céramique & PPF à Tanger" />
        <meta property="og:description" content="Experts en detailing automobile, traitement céramique et protection PPF à Tanger. Services professionnels pour protéger votre véhicule." />
        <meta property="og:url" content="https://autospatanger.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="fr_MA" />
        <meta property="og:image" content="https://autospatanger.com/share.jpg" />
        <meta property="og:site_name" content="Auto Spa Tanger" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Auto Spa Tanger | Experts en Protection Automobile à Tanger" />
        <meta name="twitter:description" content="Traitement céramique, protection PPF et detailing auto à Tanger." />
        <meta name="twitter:image" content="https://autospatanger.com/share.jpg" />
        <meta name="twitter:site" content="@autospatanger" />
      </Head>
      <div>
        <HeroSection />
        <AboutSection />
        <ServiceSection />
        <PackSection />
        <ReviewsSection />
      </div>
      
      <Footer id="contact" />
    </>
  );
};

export default Home;