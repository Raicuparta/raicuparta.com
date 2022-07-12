import styles from './styles/projects-section.module.scss';
import { Project, ProjectCard } from './project-card';
import { PropsWithChildren } from 'react';

type Props = {
  projects: Project[];
  title: string;
};

export const ProjectsSection = ({
  projects,
  title,
  children,
}: PropsWithChildren<Props>) => (
  <section className={styles.projectsSection}>
    <h2 className={styles.title}>{title}</h2>
    <div className={styles.description}>{children}</div>
    {projects.map((project) => (
      <ProjectCard key={project.title} project={project} />
    ))}
  </section>
);
