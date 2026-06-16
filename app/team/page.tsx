import Image from "next/image";
import styles from "./TeamPage.module.css";

const teamMembers = [
  {
    name: "Name Surname",
    role: "Investment Team, Milan",
    image: "/images/team/team-1.jpg",
    category: "Investment",
    location: "Milan",
  },
  {
    name: "Name Surname",
    role: "Founder Relations, London",
    image: "/images/team/team-2.jpg",
    category: "Operations",
    location: "London",
  },
  {
    name: "Name Surname",
    role: "University Network, Milan",
    image: "/images/team/team-3.jpg",
    category: "Specialists",
    location: "Milan",
  },
  {
    name: "Name Surname",
    role: "Investment Team, London",
    image: "/images/team/team-4.jpg",
    category: "Investment",
    location: "London",
  },
  {
    name: "Name Surname",
    role: "Platform Team, Milan",
    image: "/images/team/team-5.jpg",
    category: "Operations",
    location: "Milan",
  },
  {
    name: "Name Surname",
    role: "Venture Partner, Europe",
    image: "/images/team/team-6.jpg",
    category: "Specialists",
    location: "Europe",
  },
];

export default function TeamPage() {
  return (
    <section data-header-theme="dark" className={styles.teamPage}>
      <div className={styles.hero}>
        <h1>
          We’ve turned venture
          <br />
          into a team sport
        </h1>

        <div className={styles.heroText}>
          <p>
            We’re founders, operators, students, investors and builders working
            together to support the next generation of ambitious entrepreneurs.
          </p>

          <p>
            And you’ll never get only one of us. The united experience of our
            team stands behind you.
          </p>
        </div>
      </div>

      <div className={styles.content}>
        <aside className={styles.filters}>
          <p>Filters</p>

          <div>
            <button>Operations</button>
            <button>Investment</button>
            <button>Specialists</button>
          </div>

          <div>
            <button>Milan</button>
            <button>London</button>
            <button>Europe</button>
          </div>
        </aside>

        <div className={styles.grid}>
          {teamMembers.map((member) => (
            <article key={member.name} className={styles.card}>
              <div className={styles.imageWrap}>
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className={styles.image}
                />

                <span className={styles.hold}>hold to play</span>
              </div>

              <h2>{member.name}</h2>
              <p>{member.role}</p>
            </article>
          ))}
        </div>
      </div>

      <div className={styles.bottomCta}>
        <span>Click to discover</span>
        <h3>
          We back companies.
          <br />
          But we believe in humans.
        </h3>
      </div>
    </section>
  );
}