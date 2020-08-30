import { Project } from '../types';
import { Header, SocialLinks, ProjectsSection, Face } from '../components';
import styles from './index.module.scss';

const outerWildsProjects: Project[] = [
  {
    title: 'NomaiVR',
    description:
      'Mod that converts Outer Wilds from a traditional "flat" 3D game to a full VR experience',
    url: 'https://github.com/Raicuparta/nomai-vr',
    tags: ['C#', '.NET', 'Unity'],
    stars: 0,
  },
  {
    title: 'Mod Manager',
    description: 'Windows app for installing and downloading mods.',
    url: 'https://github.com/Raicuparta/ow-mod-manager',
    tags: ['Electron', 'TypeScript', 'React'],
    stars: 0,
  },
  {
    title: 'Mods Website',
    description:
      'Web page with information about game modifications. Static page, but updates itself automatically with data from the mod database.',
    url: 'https://github.com/Raicuparta/outerwildsmods.com',
    tags: ['TypeScript', 'Next.js', 'React'],
    stars: 0,
  },
  {
    title: 'Mod Database',
    description:
      'Aggregates all mod repos made by the community into a self-updating repo. The website and mod manager both use this database.',
    url: 'https://github.com/Raicuparta/outer-wilds-mod-db',
    tags: ['GitHub Actions', 'TypeScript'],
    stars: 0,
  },
];

const otherProjects: Project[] = [
  {
    title: 'Curvatron',
    description:
      'Minimalist "snake" video game, available on Steam. Previously available on Android and iOS.',
    url: 'https://github.com/bravebunny/curvatron',
    tags: ['JavaScript', 'Phaser.JS'],
    stars: 0,
  },
  {
    title: 'Brave Bunny',
    description:
      'Worked on multiple small game projects with friends, participated in a bunch of game jams and other events.',
    url: 'https://bravebunny.co',
    tags: ['JavaScript', 'C#', 'Unity'],
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

const Home = () => (
  <>
    <Face />
    <main className={styles.main}>
      <div className={styles.pageBody}>
        <Header title="Ricardo Lopes" subtitle="Front-end Developer" />
        <SocialLinks />
        <div className={styles.content}>
          <ProjectsSection title="Popular Articles" projects={articles} />
          <ProjectsSection
            title="Outer Wilds Projects"
            projects={outerWildsProjects}
          >
            <p>
              As part of the modding community of the video game{' '}
              <a href="https://www.mobiusdigitalgames.com/outer-wilds.html">
                Outer Wilds
              </a>
              , I worked on a few projects that became popular. Got some
              coverage by{' '}
              <a href="https://uploadvr.com/outer-wilds-vr-mod">UploadVR</a> and{' '}
              <a href="https://www.dualshockers.com/outer-wilds-virtual-reality-fan-mod/">
                DualShockers
              </a>
              .
            </p>
          </ProjectsSection>
          <ProjectsSection title="Other Projects" projects={otherProjects} />
        </div>
      </div>
    </main>
  </>
);

export default Home;
