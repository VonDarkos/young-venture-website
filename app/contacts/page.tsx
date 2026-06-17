"use client";

import { useEffect, useState } from "react";
import styles from "./ContactPage.module.css";

const locations = [
  {
    city: "SAN FRANCISCO",
    company: "Young Ventures Advisor Ltd.",
    address: ["58 S Park St", "San Francisco, CA 94107"],
    timezone: "America/Los_Angeles",
  },
  {
    city: "LONDON",
    company: "Young Ventures Advisor LLP.",
    address: ["36 Carnaby Street", "London W1F 7DS"],
    timezone: "Europe/London",
  },
  {
    city: "STOCKHOLM",
    company: "Young Ventures VII Advisor AB",
    address: ["Jakobsbergsgatan 18", "111 44 Stockholm"],
    timezone: "Europe/Stockholm",
  },
  {
    city: "BERLIN",
    company: "Young Ventures Advisor GmbH",
    address: ["Torstraße 42", "10119 Berlin"],
    timezone: "Europe/Berlin",
  },
];

function getClockAngles(timezone: string) {
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: timezone,
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: false,
  }).formatToParts(new Date());

  const hour = Number(parts.find((part) => part.type === "hour")?.value || 0);
  const minute = Number(
    parts.find((part) => part.type === "minute")?.value || 0
  );
  const second = Number(
    parts.find((part) => part.type === "second")?.value || 0
  );

  return {
    hour: ((hour % 12) + minute / 60) * 30,
    minute: minute * 6,
    second: second * 6,
  };
}

function AnalogClock({ timezone }: { timezone: string }) {
  const [angles, setAngles] = useState(() => getClockAngles(timezone));

  useEffect(() => {
    const updateClock = () => {
      setAngles(getClockAngles(timezone));
    };

    updateClock();

    const interval = window.setInterval(updateClock, 1000);

    return () => {
      window.clearInterval(interval);
    };
  }, [timezone]);

  return (
    <div className={styles.clock} aria-hidden="true">
      <span
        className={`${styles.hand} ${styles.hourHand}`}
        style={{
          transform: `translateX(-50%) rotate(${angles.hour}deg)`,
        }}
      />

      <span
        className={`${styles.hand} ${styles.minuteHand}`}
        style={{
          transform: `translateX(-50%) rotate(${angles.minute}deg)`,
        }}
      />

      <span
        className={`${styles.hand} ${styles.secondHand}`}
        style={{
          transform: `translateX(-50%) rotate(${angles.second}deg)`,
        }}
      />

      <span className={styles.clockDot} />
    </div>
  );
}

export default function ContactPage() {
  return (
    <main className={styles.page} data-header-theme="dark">
      <section className={styles.contactHero}>
        <div className={styles.background} />
        <div className={styles.overlay} />

        <div className={styles.inner}>
          <div className={styles.left}>
            <h1>
              Hi
              <br />
              there!
            </h1>

            <div className={styles.media}>
              <span>Media enquiries</span>
              <span className={styles.dot}>·</span>
              <a href="mailto:hello@youngventures.com">
                hello@youngventures.com
              </a>
            </div>
          </div>

          <div className={styles.grid}>
            {locations.map((location) => (
              <article className={styles.card} key={location.city}>
                <AnalogClock timezone={location.timezone} />

                <h2>{location.city}</h2>

                <p>{location.company}</p>

                {location.address.map((line) => (
                  <span key={line}>{line}</span>
                ))}
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}