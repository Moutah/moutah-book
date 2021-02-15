import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/layout";
import { GetStaticProps } from "next";
import { Project } from "../../models/project";
import styles from "../../styles/Projects.module.css";
import spinBorders from "../../styles/spin-borders.module.css";
import cardStyles from "../../styles/card.module.css";
import { useEffect, useState } from "react";
import { getAllProjects } from "../../services/api";

export type ProjectsProps = {
  projects: Project[];
};

export default function Projects({ projects }: ProjectsProps) {
  const [sortedProjects, setSortedProjects] = useState([]);
  useEffect(() => {
    setSortedProjects(projects.sort((a, b) => (a.date > b.date ? -1 : 1)));
  });

  return (
    <Layout>
      <Head>
        <title>Mathieu Tappolet - Projects</title>
      </Head>

      <header className={styles.header}>
        <h1>Projects</h1>
      </header>

      <section className={styles.projects}>
        <div className={styles.projectsList}>
          {sortedProjects.map((project, i) => {
            return (
              <div
                className={[styles.projectCard, spinBorders.spinBorder].join(
                  " "
                )}
                key={i}
              >
                <div
                  className={
                    spinBorders.spinBorderInner + " " + styles.projectCardInner
                  }
                >
                  <Link href={`/projects/${project.id}`}>
                    <a>
                      <article className={cardStyles.card}>
                        <img
                          src={project.coverImgUrl}
                          alt={project.title}
                          className={cardStyles.cardMedia}
                        />
                        <div className={cardStyles.cardContent}>
                          <h2 className={styles.projectTitle}>
                            {project.title}
                          </h2>

                          <p className={styles.projectAbstract}>
                            {project.abstract}
                          </p>
                        </div>
                      </article>
                    </a>
                  </Link>
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
  const projects = await getAllProjects();

  return {
    props: {
      projects,
    },
  };
};
