import Head from "next/head";
import BIcon from "../components/b-icon";
import Layout from "../components/layout";
import Technology from "../components/technology";
import styles from "../styles/Home.module.css";
import * as ReactScroll from "react-scroll";

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
        "ASP.NET Core",
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
        "Sonarcloud",
        "Postman",
        "Unity 3D",
        "Photoshop",
      ],
    },
  ];

  return (
    <Layout home>
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

      <ReactScroll.Element name="about">
        <section id="about" className={styles.description}>
          <p>
            Passioned by computer science, I like to build tools that ease
            people’s lives. I know the ropes of the different pieces composing a
            web application and how to best leverage them to achieve my goal. I
            like using the latest technologies, state of the art practices and
            innovative approaches to provide the best possible solutions.
          </p>
          <p>
            I started web developpment in 2006 with small websites, WordPress
            plugins and themes as a hobby and student job. With every new
            project, I would try and discover new things and eventually worked
            on every layer of the usual{" "}
            <a href="https://en.wikipedia.org/wiki/LAMP_(software_bundle)">
              LAMP stack
            </a>
            . With the rise of Node JS and JavaScript frameworks, I started
            making more and more complex and dynamic web applications, not just
            websites anymore.
          </p>
          <p>
            A lot has changed in the web since the time I learned CSS to
            customize MySpace pages. But my interest to create modern, powerfull
            and usefull web applications has never been higher. With a very
            active and fast evolving ecosystem, the possibilities are increasing
            every day and I'm always looking forward to learn new things to
            build even better applications.
          </p>
        </section>
      </ReactScroll.Element>

      <hr className={styles.contentSplit} />

      <section className={styles.technologies}>
        <p>
          Different promblems require different solutions. To answer my needs.
          I've learned to leverage the following technologies:
        </p>

        {technologies.map((technology, i) => {
          return (
            <div key={i}>
              <h3>{technology.name}</h3>
              <div className={styles.technologiesList}>
                {technology.list.map((tech, i) => (
                  <Technology name={tech} key={i} />
                ))}
              </div>
            </div>
          );
        })}
      </section>

      <hr className={styles.contentSplit} />

      <ReactScroll.Element name="contact">
        <section id="contact" className={styles.contact}>
          <p>Get in touch</p>
          <div className={styles.contactLinks}>
            {/* Email */}
            <a href="mailto:mathieu.tappolet@gmail.com">
              <BIcon code="envelope" />
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/mathieutappolet/"
              target="_blank"
            >
              <BIcon code="linkedin" />
            </a>

            {/* GitHub */}
            <a href="https://github.com/Moutah" target="_blank">
              <BIcon code="github" />
            </a>
          </div>
        </section>
      </ReactScroll.Element>
    </Layout>
  );
}
