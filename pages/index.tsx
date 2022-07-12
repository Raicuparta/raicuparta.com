import { Header, SocialLinks, ProjectsSection, Link } from '../components';
import { ModCard } from '../components/mod-card';
import styles from './styles/index.module.scss';

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
              videos={[
                'https://youtu.be/iYt0YlLFjYI',
                'https://youtu.be/ZIAWcsPLT1c',
                'https://youtu.be/qM25FLL-NSQ',
              ]}
              gameName="The Stanley Parable: Ultra Deluxe"
              gameKey="stanley-parable"
              description="This is a game with a mod. The mod is in the game and there is a game,
      which has a mod. What a game with a mod. Can you believe it?"
            />
            <ModCard
              title="ShipbreakerVR"
              videos={[]}
              gameName="Hardspace: Shipbreaker"
              gameKey="shipbreaker"
              description="This is a game with a mod. The mod is in the game and there is a game,
        which has a mod. What a game with a mod. Can you believe it?"
            />
            <ModCard
              title="Two Forks VR"
              videos={[]}
              gameName="Firewatch"
              gameKey="firewatch"
              description="This is a game with a mod. The mod is in the game and there is a game,
        which has a mod. What a game with a mod. Can you believe it?"
              downloadUrl="https://github.com/Raicuparta/two-forks-vr/#readme"
            />
            <ModCard
              title="NomaiVR"
              videos={[]}
              gameName="Outer Wilds"
              gameKey="outer-wilds"
              description="This is a game with a mod. The mod is in the game and there is a game,
        which has a mod. What a game with a mod. Can you believe it?"
              downloadUrl="https://outerwildsmods.com/mods/nomaivr/"
            />
            <ModCard
              title="ColossalVr"
              videos={[]}
              gameName="Praey for the Gods"
              gameKey="praey-for-the-gods"
              description="This is a game with a mod. The mod is in the game and there is a game,
        which has a mod. What a game with a mod. Can you believe it?"
            />
            <ModCard
              title="FatesVR"
              videos={[]}
              gameName="Return of the Obra Dinn"
              gameKey="obra-dinn"
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
