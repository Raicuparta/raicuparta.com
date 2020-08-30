import { Project } from '../types';
import { Icon, Tag, ExternalLink } from '.';
import styles from './styles/project-card.module.scss';

type Props = {
  project: Project;
};

export const ProjectCard = ({ project }: Props) => (
  <ExternalLink className={styles.projectCard} href={project.url}>
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
  </ExternalLink>
);
