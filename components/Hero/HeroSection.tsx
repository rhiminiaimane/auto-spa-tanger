import { useRef, useState, useEffect } from 'react';
import styles from './Hero.module.css';
import Reveal from '../ScrollOnReveal/Reveal';

const HeroSection: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoStarted, setVideoStarted] = useState(false);

  useEffect(() => {
    const handlePlay = () => setVideoStarted(true);
    const videoEl = videoRef.current;
    if (videoEl) {
      videoEl.addEventListener('playing', handlePlay);
      return () => {
        videoEl.removeEventListener('playing', handlePlay);
      };
    }
  }, []);

  return (
    <section className={styles.container}>
      {!videoStarted && (
        <img
          src="/images/video-placeholder.png"
          alt="Video placeholder"
          className={styles.videoPlaceholder}
        />
      )}
      <video
        ref={videoRef}
        className={styles.videoBackground}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      >
        <source src="/videos/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className={styles.videoOverlay}></div>

      <Reveal direction="left">
        <div className={styles.textContent}>
          <div className={styles.heroTitle}>
            <p>Bienvenue chez <br />Auto Spa Detailing</p>
          </div>
          <div className={styles.heroDescription}>
            <p>Votre destination de confiance pour le soin automobile haut de gamme.</p>
          </div>
        </div>
      </Reveal>
    </section>
  );
};

export default HeroSection;