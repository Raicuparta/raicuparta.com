import { Project } from '../types';
import { Icon } from './icon';
import styles from './projects-section.module.scss';
import { ProjectCard } from './project-card';

type Props = {
  projects: Project[];
  title: string;
};

export const ProjectsSection = ({ projects, title }: Props) => (
  <section>
    <h2>{title}</h2>
    <div className={styles.projectsWrapper}>
      {projects.map((project) => (
        <ProjectCard project={project} />
      ))}
    </div>
  </section>
);
