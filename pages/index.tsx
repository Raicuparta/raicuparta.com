import { Header, SocialLinks, ProjectsSection, Link } from '../components';
import { ModCard } from '../components/mod-card';
import { Project } from '../components/project-card';
import styles from './styles/index.module.scss';

const vrProjects: Project[] = [
  {
    title: 'VR Mods Patreon',
    description:
      'People who like what I do can join my Patreon, which gives them access to early development versions of some of my VR mods.',
    url: 'https://www.patreon.com/raivr',
    tags: [],
  },
  {
    title: 'NomaiVR',
    description:
      'Converts the game "Outer Wilds" into a full VR experience, with full motion controls.',
    url: 'https://github.com/Raicuparta/nomai-vr',
    tags: ['C#', '.NET', 'Unity'],
  },
  {
    title: 'Two Forks VR',
    description:
      'Converts the game "Firewatch" into a full VR experience, with motion controls and comfort options.',
    url: 'https://github.com/Raicuparta/two-forks-vr/',
    tags: ['C#', '.NET', 'Unity'],
  },
];

const outerWildsProjects: Project[] = [
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
    tags: ['TypeScript', 'Svelte', 'React'],
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
    url: 'https://github.com/bravebunny',
    tags: ['JavaScript', 'C#', 'Unity'],
  },
];

const articles: Project[] = [
  {
    title:
      'Dealing with Platform Inconsistencies as a North Korean Front-End Developer',
    url: 'https://dev.to/raicuparta/dealing-with-platform-inconsistencies-as-a-north-korean-front-end-developer-3158',
    tags: ['HTML', 'JavaScript', 'CSS'],
  },
  {
    title: 'Ditching worthless friends with Facebook data and JavaScript',
    url: 'https://dev.to/raicuparta/ditching-worthless-friends-with-facebook-data-and-javascript-3f2i',
    tags: ['JavaScript'],
  },
];

const professionalProjects: Project[] = [
  {
    title: 'LIV',
    description:
      'VR toolset for video capture, streaming, etc. I modify Unity games to add support for all the LIV tools.',
    url: 'https://www.liv.tv/',
    tags: ['C#', '.NET', 'Unity'],
  },
  {
    title: 'Hasty.ai',
    description:
      'End-to-end vision AI solution, with AI-assisted annotation, automated QA, etc, to assist in the creation of models.',
    url: 'https://hasty.ai',
    tags: ['TypeScript', 'Node.js', 'React', 'Canvas'],
  },
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
    <title>Raicuparta</title>
    <main className={styles.main}>
      <div className={styles.pageBody}>
        <Header title="Raicuparta" />
        <SocialLinks />
        <div className={styles.content}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '2em',
              width: '100%',
            }}
          >
            <ModCard
              title="StanleyVR"
              imageSource="img/stanley-vr.jpg"
              description="This is a game with a mod. The mod is in the game and there is a game,
      which has a mod. What a game with a mod. Can you believe it?"
            />
            <ModCard
              title="ShipbreakerVR"
              imageSource="img/shipbreaker-vr.webp"
              description="This is a game with a mod. The mod is in the game and there is a game,
        which has a mod. What a game with a mod. Can you believe it?"
            />
            <ModCard
              title="Two Forks VR"
              imageSource="img/two-forks-vr.jpg"
              description="This is a game with a mod. The mod is in the game and there is a game,
        which has a mod. What a game with a mod. Can you believe it?"
            />
            <ModCard
              title="NomaiVR"
              imageSource="img/nomaivr.jpg"
              description="This is a game with a mod. The mod is in the game and there is a game,
        which has a mod. What a game with a mod. Can you believe it?"
            />

            <ModCard
              title="FatesVR"
              imageSource="img/fates-vr.jpg"
              description="This is a game with a mod. The mod is in the game and there is a game,
        which has a mod. What a game with a mod. Can you believe it?"
            />
          </div>
        </div>
      </div>
    </main>
  </>
);

export default Home;
