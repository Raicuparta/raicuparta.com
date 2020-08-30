import { Project } from '../types';
import { Icon } from '.';
import styles from './styles/project-card.module.scss';

type Props = {
  project: Project;
};

export const ProjectCard = ({ project }: Props) => (
  <a
    className={styles.projectCard}
    href={project.url}
    target="_blank"
    rel="noopener noreferrer"
  >
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
