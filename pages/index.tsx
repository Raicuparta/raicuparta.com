import { Project } from '../types';
import { Header, SocialLinks, ProjectsSection, Link } from '../components';
import styles from './styles/index.module.scss';

const outerWildsProjects: Project[] = [
  {
    title: 'NomaiVR',
    description:
      'Mod that converts Outer Wilds from a traditional "flat" 3D game to a full VR experience',
    url: 'https://github.com/Raicuparta/nomai-vr',
    tags: ['C#', '.NET', 'Unity'],
  },
  {
    title: 'Mod Manager',
    description: 'Windows app for installing and downloading mods.',
    url: 'https://github.com/Raicuparta/ow-mod-manager',
    tags: ['Electron', 'TypeScript', 'React'],
  },
  {
    title: 'Mods Website',
    description:
      'Web page with information about game modifications. Static page, but updates itself automatically with data from the mod database.',
    url: 'https://github.com/Raicuparta/outerwildsmods.com',
    tags: ['TypeScript', 'Next.js', 'React'],
  },
  {
    title: 'Mod Database',
    description:
      'Aggregates all mod repos made by the community into a self-updating repo. The website and mod manager both use this database.',
    url: 'https://github.com/Raicuparta/outer-wilds-mod-db',
    tags: ['GitHub Actions', 'TypeScript'],
  },
];

const otherProjects: Project[] = [
  {
    title: 'Curvatron',
    description:
      'Minimalist "snake" video game, available on Steam. Previously available on Android and iOS.',
    url: 'https://github.com/bravebunny/curvatron',
    tags: ['JavaScript', 'Phaser.JS'],
  },
  {
    title: 'Brave Bunny',
    description:
      'Worked on multiple small game projects with friends, participated in a bunch of game jams and other events.',
    url: 'https://bravebunny.co',
    tags: ['JavaScript', 'C#', 'Unity'],
  },
];

const articles: Project[] = [
  {
    title:
      'Dealing with Platform Inconsistencies as a North Korean Front-End Developer',
    url:
      'https://dev.to/raicuparta/dealing-with-platform-inconsistencies-as-a-north-korean-front-end-developer-3158',
    tags: ['HTML', 'JavaScript', 'CSS'],
  },
  {
    title: 'Ditching worthless friends with Facebook data and JavaScript',
    url:
      'https://dev.to/raicuparta/ditching-worthless-friends-with-facebook-data-and-javascript-3f2i',
    tags: ['JavaScript'],
  },
];

const professionalProjects: Project[] = [
  {
    title: 'Trainline',
    description:
      'Ticketing platform for trains / buses. I did maintenance and implementation of new features on the front end for trainline.com.',
    url: 'https://trainline.com',
    tags: ['TypeScript', 'Node.js', 'React'],
  },
  {
    title: 'AutoScout24 Switzerland',
    description:
      'Marketplace for vehicles. I worked on the main page, and created a new area for private members.',
    url: 'https://autoscout24.ch',
    tags: ['TypeScript', 'Node.js', 'React'],
  },
  {
    title: 'CityRow Go',
    description:
      'Fitness app for rowing enthusiasts. I helped create the React Native app.',
    url: 'https://www.cityrow.com/',
    tags: ['TypeScript', 'React Native'],
  },
  {
    title: 'Radiator Labs',
    description:
      'App / device for improving the efficiency of radiators. I built a dashboard with graphs and stats about said radiators.',
    url: 'https://www.radiatorlabs.com',
    tags: ['JavaScript', 'React', 'GraphQL'],
  },
];

const Home = () => (
  <>
    <main className={styles.main}>
      <div className={styles.pageBody}>
        <Header title="ricardo lopes" />
        <SocialLinks />
        <div className={styles.content}>
          <ProjectsSection title="Popular Articles" projects={articles} />
          <ProjectsSection
            title="Outer Wilds Projects"
            projects={outerWildsProjects}
          >
            <p>
              As part of the modding community of the video game{' '}
              <Link href="https://www.mobiusdigitalgames.com/outer-wilds.html">
                Outer Wilds
              </Link>
              , I worked on a few popular projects. Got some coverage by{' '}
              <Link href="https://uploadvr.com/outer-wilds-vr-mod">
                UploadVR
              </Link>{' '}
              and{' '}
              <Link href="https://www.dualshockers.com/outer-wilds-virtual-reality-fan-mod/">
                DualShockers
              </Link>
              .
            </p>
          </ProjectsSection>
          <ProjectsSection title="Other Projects" projects={otherProjects} />
          <ProjectsSection
            title="Professional Projects"
            projects={professionalProjects}
          >
            <p>
              These are a few of the projects I contributed to during my
              professional career.
            </p>
          </ProjectsSection>
        </div>
      </div>
    </main>
  </>
);

export default Home;
