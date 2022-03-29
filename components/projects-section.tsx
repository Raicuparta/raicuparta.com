import styles from './styles/projects-section.module.scss';
import { Project, ProjectCard } from './project-card';

type Props = {
  projects: Project[];
  title: string;
};

export const ProjectsSection: React.FunctionComponent<Props> = ({
  projects,
  title,
  children,
}) => (
  <section className={styles.projectsSection}>
    <h2 className={styles.title}>{title}</h2>
    <div className={styles.description}>{children}</div>
    {projects.map((project) => (
      <ProjectCard key={project.title} project={project} />
    ))}
  </section>
);
