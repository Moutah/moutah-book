import Head from "next/head";
import Link from "next/link";
import Layout from "../components/layout";
import Technology from "../components/technology";
import styles from "../styles/Home.module.css";

export default function Home() {
  const technologies = [
    {
      name: "Frameworks",
      list: [
        "Angular",
        "React",
        "Vue",
        "Express Js",
        "Next Js",
        "Laravel",
        "WordPress",
      ],
    },
    {
      name: "Languages",
      list: ["JavaScript", "TypeScript", "HTML", "CSS", "PHP", "MySQL", "C#"],
    },
    {
      name: "Tools",
      list: [
        "GIT",

        "RxJS",
        "Three Js",
        "jQuery",

        "Node Js",
        "Sass",
        "Webpack",
        "Gulp",

        "Jest",
        "Puppeteer",
        "php Unit",

        "Npm",
        "Composer",

        "MongoDB",
      ],
    },
    {
      name: "Softwares",
      list: [
        "VS Code",
        "GitHub",
        "Azure DevOps",
        "Postman",
        "Unity 3D",
        "Photoshop",
      ],
    },
  ];

  return (
    <Layout>
      <Head>
        <title>Mathieu Tappolet</title>
      </Head>

      <header className={styles.header}>
        <h1 className={styles.title}>Mathieu Tappolet</h1>

        <div className={styles.subTitle}>Web developer</div>

        <div className={styles.location}>
          Geneva, Switzerland{" "}
          <img
            src="/flag-switzerland.svg"
            alt="Switzerland"
            className={styles.flagCh}
          />
        </div>
      </header>

      <section id="about" className={styles.description}>
        <p>
          Passioned by computer science, I like to build tools that ease
          people’s lives. I know the ropes of the different pieces composing a
          web application and how to best leverage them to achieve my goal. I
          like using the latest technologies, state of the art practices and
          innovative approaches to provide the best possible solutions.
        </p>
      </section>

      <hr className={styles.contentSplit} />

      <section className={styles.technologies}>
        <p>
          Different promblems require different solutions. To answer my needs. I
          leverage the following technologies:
        </p>

        {technologies.map((technology) => {
          return (
            <>
              <h3>{technology.name}</h3>
              <div className={styles.technologiesList}>
                {technology.list.map((tech, i) => (
                  <Technology name={tech} key={i} />
                ))}
              </div>
            </>
          );
        })}
      </section>

      <section className={styles.creations}>
        <Link href="/projects">
          <a>Projects</a>
        </Link>
      </section>

      <section id="contact" className={styles.contact}>
        Contact
      </section>
    </Layout>
  );
}
