import { Project } from '../types';
import { Icon } from '.';
import styles from './styles/project-card.module.scss';
import { Tag } from './tag';

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
    <div>
      <h3 className={styles.title}>{project.title}</h3>
      <p className={styles.description}>{project.description}</p>
    </div>
    <div>
      {project.tags.map((tag) => (
        <Tag key={tag}>{tag}</Tag>
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
