import { Icon } from './icon';
import styles from './project-section.module.scss';

type Project = {
  title: string;
  description?: string;
  url: string;
  stars: number;
  tags: string[];
};

const projects: Project[] = [
  {
    title: 'NomaiVR',
    description:
      'Modification for the game "Outer Wilds" that converts it from a regular "flat" 3D game to a full VR experience',
    url: 'https://github.com/Raicuparta/nomai-vr',
    tags: ['C#', '.NET', 'Unity'],
    stars: 0,
  },
  {
    title: 'Outer Wilds Mod Manager',
    description:
      'Windows app for installing and downloading game modifications.',
    url: 'https://github.com/Raicuparta/ow-mod-manager',
    tags: ['Electron', 'TypeScript', 'React'],
    stars: 0,
  },
  {
    title: 'Outer Wilds Mods Website',
    description: 'Web page with information about game modifications.',
    url: 'https://github.com/Raicuparta/outerwildsmods.com',
    tags: ['TypeScript', 'Next.js', 'React'],
    stars: 0,
  },
  {
    title: 'Curvatron',
    description:
      'Minimalist "snake" video game, available on Steam. Previously available on Android and iOS.',
    url: 'https://github.com/bravebunny/curvatron',
    tags: ['JavaScript', 'Phaser.JS'],
    stars: 0,
  },
];

const articles: Project[] = [
  {
    title:
      'Dealing with Platform Inconsistencies as a North Korean Front-End Developer',
    url:
      'https://dev.to/raicuparta/dealing-with-platform-inconsistencies-as-a-north-korean-front-end-developer-3158',
    tags: ['HTML', 'JavaScript', 'CSS'],
    stars: 0,
  },
  {
    title: 'Ditching worthless friends with Facebook data and JavaScript',
    url:
      'https://dev.to/raicuparta/ditching-worthless-friends-with-facebook-data-and-javascript-3f2i',
    tags: ['JavaScript'],
    stars: 0,
  },
];

export const Projects = () => (
  <section>
    <h2>Popular Projects</h2>
    <div className={styles.projectsWrapper}>
      {projects.map((project) => (
        <a key={project.title} className={styles.project} href={project.url}>
          <h3 className={styles.projectTitle}>{project.title}</h3>
          <p className={styles.projectDescription}>{project.description}</p>
          <div>
            {project.tags.map((tag) => (
              <span className={styles.tag}>{tag}</span>
            ))}
          </div>
          {project.stars > 0 && (
            <span>
              <Icon className={styles.starIcon} name="Star" />
              {project.stars}
            </span>
          )}
        </a>
      ))}
    </div>
    <h2>Popular Articles</h2>
    <div className={styles.projectsWrapper}>
      {articles.map((project) => (
        <a key={project.title} className={styles.project} href={project.url}>
          <h3 className={styles.projectTitle}>{project.title}</h3>
          <p>{project.description}</p>
          <div>
            {project.tags.map((tag) => (
              <span className={styles.tag}>{tag}</span>
            ))}
          </div>
          {project.stars > 0 && (
            <span>
              <Icon className={styles.starIcon} name="Star" />
              {project.stars}
            </span>
          )}
        </a>
      ))}
    </div>
  </section>
);
