import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Basic favicon - works in most browsers */}
        <link rel="icon" href="/favicon.ico" />
        
        {/* Modern browsers prefer PNG */}
        <link rel="icon" type="image/ico" sizes="32x32" href="/icons/favicon.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon.ico" />
        
        {/* For iOS devices */}
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}