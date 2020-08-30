import { Project } from '../types';
import { Icon } from './icon';
import styles from './projects-section.module.scss';
import { ProjectCard } from './project-card';

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
    <h2>{title}</h2>
    {children}
    <div className={styles.projectsWrapper}>
      {projects.map((project) => (
        <ProjectCard key={project.title} project={project} />
      ))}
    </div>
  </section>
);
