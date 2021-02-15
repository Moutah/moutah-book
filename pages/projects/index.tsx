import Head from "next/head";
import Layout from "../../components/layout";
import { GetStaticProps } from "next";
import { Project } from "../../models/project";
import styles from "../../styles/Projects.module.css";
import utilStyles from "../../styles/utils.module.css";
import { APP_URL } from "../../config";

export type ProjectsProps = {
  projects: Project[];
};

export default function Projects({ projects }: ProjectsProps) {
  return (
    <Layout>
      <Head>
        <title>Mathieu Tappolet - Projects</title>
      </Head>

      <header className={styles.header}>
        <h1>Projects</h1>
      </header>

      <section className={styles.projects}>
        <p className={styles.projectsDisclaimer}>Disclaimer</p>

        <div className={styles.projectsList}>
          {projects.map((project, i) => {
            return (
              <div
                className={styles.projectCard + " " + utilStyles.spinBorder}
                key={i}
              >
                <div
                  className={
                    utilStyles.spinBorderInner + " " + styles.projectCardInner
                  }
                >
                  {project.title}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch(`${APP_URL}/api/projects`);
  const projects: Project[] = await response.json();

  return {
    props: {
      projects,
    },
  };
};
