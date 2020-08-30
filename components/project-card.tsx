import { Project } from '../types';
import styles from './project-card.module.scss';
import { Icon } from '.';

type Props = {
  project: Project;
};

export const ProjectCard = ({ project }: Props) => (
  <a className={styles.projectCard} href={project.url}>
    <h3 className={styles.title}>{project.title}</h3>
    <p className={styles.description}>{project.description}</p>
    <div>
      {project.tags.map((tag) => (
        <span key={tag} className={styles.tag}>
          {tag}
        </span>
      ))}
    </div>
    {project.stars > 0 && (
      <span>
        <Icon className={styles.starIcon} name="Star" />
        {project.stars}
      </span>
    )}
  </a>
);
