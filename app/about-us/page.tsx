"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./AboutUsPage.module.css";

const focusItems = [
  {
    title: "Digital and frontier technologies",
    image: "/images/hero/deep-tech.jpg",
  },
  {
    title: "Robotics and industrial automation",
    image: "/images/hero/youth.jpg",
  },
  {
    title: "Sustainability and advanced industries",
    image: "/images/hero/clean-tech.jpg",
  },
  {
    title: "Human augmentation and advanced materials",
    image: "/images/hero/deep-tech.jpg",
  },
  {
    title: "Space, defense and frontier systems",
    image: "/images/hero/youth.jpg",
  },
  {
    title: "Computational biology and medical technologies",
    image: "/images/hero/clean-tech.jpg",
  },
  {
    title: "Climate, energy and infrastructure",
    image: "/images/hero/deep-tech.jpg",
  },
];

export default function AboutUsPage() {
  const focusRef = useRef<HTMLElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    let frameId: number | null = null;

    const updateActiveItem = () => {
      const section = focusRef.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const scrollable = rect.height - window.innerHeight;

      if (scrollable <= 0) return;

      const current = Math.min(Math.max(-rect.top, 0), scrollable);
      const progress = current / scrollable;

      const nextIndex = Math.min(
        focusItems.length - 1,
        Math.floor(progress * focusItems.length)
      );

      setActiveIndex(nextIndex);
    };

    const onScroll = () => {
      if (frameId) return;

      frameId = window.requestAnimationFrame(() => {
        updateActiveItem();
        frameId = null;
      });
    };

    updateActiveItem();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);

      if (frameId) {
        window.cancelAnimationFrame(frameId);
      }
    };
  }, []);

  return (
    <main className={styles.aboutPage}>
      <section className={styles.hero} data-header-theme="light">
        <div className={styles.heroInner}>
          <h1 className={styles.title}>About us</h1>

          <div className={styles.copy}>
            <p>
              Newton discovered gravity at 24. F. Scott Fitzgerald published his
              first novel at 23. Young people have always created wonders. Why
              shouldn’t we invest in them?
            </p>

            <p>
              Young Ventures is the youngest VC ever created. Build by students
              across the best universities in the world and backed by the best
              professors. Our job is to find the people building the future and
              bet on them.
            </p>

            <p>
              We are ready to uncover ideas looking for where they hide; in a
              lab, in a thesis, in a half-finished line of code. We are Young
              Ventures and we are born to scout the invisible.
            </p>
          </div>
        </div>
      </section>

      <section
        ref={focusRef}
        className={styles.focusSection}
        data-header-theme="light"
      >
        <div className={styles.focusSticky}>
          <div className={styles.focusTop}>
            <div>
              <p className={styles.focusEyebrow}>Focus areas</p>
              <h2 className={styles.focusTitle}>
                Our definition <br />
                of deep tech
              </h2>
              <span className={styles.focusLine} />
            </div>

            <p className={styles.focusIntro}>
              Our focus spans sectors where scientific breakthroughs can unlock
              meaningful economic and societal impact, including climate and
              energy technologies, advanced materials, robotics, industrial
              automation, medical technologies, computational biology, and
              frontier physics-based innovations.
            </p>
          </div>

          <div className={styles.focusContent}>
            <div className={styles.focusWheel}>
              <div
                className={styles.focusList}
                style={{
                  transform: `translateY(calc(50% - ${
                    activeIndex * 112
                  }px - 56px))`,
                }}
              >
                {focusItems.map((item, index) => (
                  <div
                    key={item.title}
                    className={`${styles.focusItem} ${
                      index === activeIndex ? styles.focusItemActive : ""
                    }`}
                  >
                    <span className={styles.focusDot} />
                    <h3>{item.title}</h3>
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.focusImageWrap}>
              <img
                key={focusItems[activeIndex].image + activeIndex}
                src={focusItems[activeIndex].image}
                alt={focusItems[activeIndex].title}
                className={styles.focusImage}
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}