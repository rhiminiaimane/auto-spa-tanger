import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="fr">
      <Head>
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/ico" sizes="32x32" href="/icons/favicon.ico" />
        <link rel="icon" type="image/ico" sizes="16x16" href="/icons/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#ffffff" />

        {/* Preconnect */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Local SEO Meta */}
        <meta name="geo.region" content="MA-TNG" />
        <meta name="geo.placename" content="Tanger" />
        <meta name="geo.position" content="35.7608711;-5.8518966" />
        <meta name="ICBM" content="35.7608711, -5.8518966" />
        
        {/* Canonical */}
        <link rel="canonical" href="https://autospatanger.com/" />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
        
      </body>
    </Html>
  );
}