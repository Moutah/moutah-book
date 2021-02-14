import Head from "next/head";
import Layout from "../../components/layout";
import { GetStaticProps } from "next";
import { Project } from "../../models/project";
import styles from "../../styles/Projects.module.css";
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

      <h1>All projects</h1>

      <p>Disclaimer</p>

      <section className={styles.projects}>
        {projects.map((project, i) => {
          return (
            <div className="card" key={i}>
              {project.title}
            </div>
          );
        })}
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
