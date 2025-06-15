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
        <title>Auto Spa Tanger | Traitement Céramique & PPF Haut de Gamme</title>
        <meta name="description" content="Spécialiste du traitement céramique, protection PPF et auto spa à Tanger. Protégez votre véhicule avec nos solutions professionnelles. Garage certifié." />
        <meta name="keywords" content="traitement céramique Tanger, nano ceramic Tanger, PPF Tanger, auto spa Tanger, protection peinture voiture, detailing auto Tanger, lavage premium Tanger" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta name="author" content="Auto Spa Detailing Tanger" />
        
        {/* Local Business Schema */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "AutoDetailing",
              "name": "Auto Spa Detailing Tanger",
              "image": "https://autospatanger.com/logo.jpg",
              "@id": "https://autospatanger.com",
              "url": "https://autospatanger.com",
              "telephone": "+212662038056",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Dyar Tanja, Tanger",
                "addressLocality": "Tanger",
                "addressRegion": "Tanger-Tétouan-Al Hoceïma",
                "postalCode": "90000",
                "addressCountry": "MA"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "35.7608711",
                "longitude": "-5.8518966"
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
        <meta property="og:title" content="Auto Spa Tanger | Protection Céramique & PPF Professionnelle" />
        <meta property="og:description" content="Spécialiste du traitement céramique et protection PPF à Tanger. Solutions professionnelles pour votre véhicule." />
        <meta property="og:url" content="https://autospatanger.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="fr_MA" />
        <meta property="og:image" content="https://autospatanger.com/og-image.jpg" />
        <meta property="og:site_name" content="Auto Spa Detailing Tanger" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Auto Spa Tanger | Experts en Protection Automobile" />
        <meta name="twitter:description" content="Traitement céramique, PPF et auto spa professionnel à Tanger" />
        <meta name="twitter:image" content="https://autospatanger.com/twitter-image.jpg" />
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