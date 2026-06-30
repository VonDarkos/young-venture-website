"use client";

import { useEffect, useRef } from "react";
import styles from "./AboutUsPage.module.css";

export default function AboutUsPage() {
  const textRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!textRef.current) return;

      const scrollY = window.scrollY;
      const moveY = Math.min(scrollY * 0.45, 180);

      textRef.current.style.transform = `translateY(-${moveY}px)`;
      textRef.current.style.opacity = `${Math.max(1 - scrollY / 450, 0)}`;
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className={styles.aboutPage}>
      <section className={styles.heroSection}>
        <div ref={textRef} className={styles.heroText}>
          <p className={styles.label}>ABOUT US</p>
          <h1>Backing the next generation of founders.</h1>
        </div>
      </section>
    </main>
  );
}