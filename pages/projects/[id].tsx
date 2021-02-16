import { Project } from "../../models/project";
import { GetStaticPaths, GetStaticProps } from "next";
import { getAllProjects, getProject } from "../../services/api";
import Head from "next/head";
import Technology from "../../components/technology";
import Layout from "../../components/layout";
import styles from "../../styles/Project.module.css";
import linkStyles from "../../styles/link.module.css";
import Carousel from "../../components/carousel";
import BIcon from "../../components/b-icon";

export type ProjectProps = {
  project: Project;
};

export default function ProjectPage({ project }: ProjectProps) {
  return (
    <Layout>
      <Head>
        <title>Mathieu Tappolet - {project.title}</title>
      </Head>

      <header className={styles.header}>
        <h1>{project.title}</h1>
        <h2>{project.client}</h2>
        <div className={styles.projectDate}>{project.date}</div>
      </header>

      <article className={styles.project}>
        <div className={styles.projectGallery}>
          <Carousel medias={project.gallery} title={project.title} />
        </div>

        <section className={styles.projectDescription}>
          <p>{project.description}</p>

          <p className={styles.projectLinks}>
            {project.links.map((link, i) => {
              return (
                <a
                  href={`https://${link}`}
                  key={i}
                  className={linkStyles.linkKikoo}
                >
                  {link}
                </a>
              );
            })}
          </p>

          <div className={styles.projectTechnologies}>
            <small>Made with</small>

            <div className={styles.technologiesList}>
              {project.technologies.map((technology, i) => {
                return <Technology name={technology} key={i} />;
              })}
            </div>
          </div>

          {project.source && (
            <div className={styles.projectSource}>
              <p>
                <small>Checkout the source code!</small>
              </p>

              <a href={project.source} target="_blank">
                <BIcon code="github" />
              </a>
            </div>
          )}
        </section>
      </article>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const projects = await getAllProjects();

  return {
    paths: projects.map((project) => `/projects/${project.id}`),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const project = await getProject(params.id as string);

  return {
    props: {
      project,
    },
  };
};
