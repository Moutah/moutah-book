import Head from "next/head";
import Link from "next/link";
import Layout from "../components/layout";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Mathieu Tappolet</title>
      </Head>

      <header className={styles.header}>
        <h1 className={styles.title}>
          Mathieu <strong>Tappolet</strong>
        </h1>

        <div className={styles.subTitle}>Web developer</div>
        <div className={styles.location}>Web developer</div>
      </header>

      <main className={styles.main}>
        <section className={styles.description}>
          <p>
            Passioned by computer science, I like to build tools that ease
            people’s lives. I know the ropes of the different pieces composing a
            web application and how to best leverage them to achieve my goal. I
            like using the latest technologies, state of the art practices and
            innovative approaches to provide the best possible solutions.
          </p>
        </section>

        <hr />

        <section className={styles.technologies}>
          <div className="highlights"></div>
          <div className="languages"></div>
          <div className="other"></div>
        </section>

        <section className={styles.creations}>
          <Link href="/projects">
            <a>Projects</a>
          </Link>
        </section>

        <section id="contact" className={styles.contact}>
          Contact
        </section>
      </main>
    </Layout>
  );
}
