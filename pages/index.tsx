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
                'https://youtu.be/JVanThRk5e8',
                'https://youtu.be/iYt0YlLFjYI',
                'https://youtu.be/ZIAWcsPLT1c',
                'https://youtu.be/qM25FLL-NSQ',
              ]}
              articles={[
                {
                  title:
                    'UploadVR: The Stanley Parable Is Getting A VR Mod, First Footage Revealed',
                  url: 'https://uploadvr.com/the-stanley-parable-vr-mod/',
                },
                {
                  title:
                    'Real o Virtual: The Stanley Parable también tendrá mod VR',
                  url: 'https://www.realovirtual.com/noticias/11309/stanley-parable-tendra-mod-vr',
                },
              ]}
              gameName="The Stanley Parable: Ultra Deluxe"
              gameKey="stanley-parable"
              description="This is a game with a mod. The mod is in the game and there is a game,
      which has a mod. What a game with a mod. Can you believe it?"
            />
            <ModCard
              title="ShipbreakerVR"
              videos={[
                'https://www.twitch.tv/ragesaq/video/1508802767',
                'https://youtu.be/PZLhq5NiFKo',
                'https://youtu.be/UGGtz1lYMNw',
              ]}
              articles={[]}
              gameName="Hardspace: Shipbreaker"
              gameKey="shipbreaker"
              description="This is a game with a mod. The mod is in the game and there is a game,
        which has a mod. What a game with a mod. Can you believe it?"
            />
            <ModCard
              title="Two Forks VR"
              videos={[
                'https://youtu.be/jO_V-sq-Ics',
                'https://youtu.be/h2uI3ITaHj8',
                'https://youtu.be/KeKsGIhehjU',
                'https://youtu.be/Wo27DFX8rYw',
              ]}
              articles={[
                {
                  title:
                    '‘Firewatch’ VR Support is Now Free as Unofficial Mod Goes Open Source',
                  url: 'https://www.roadtovr.com/firewatch-vr-mod-free-pc-vr-quest/',
                },
                {
                  title:
                    'VRScout: Firewatch VR Mod Now Available Free Of Charge',
                  url: 'https://vrscout.com/news/firewatch-vr-mod-now-available-free-of-charge/',
                },
                {
                  title:
                    'Real o Virtual: El mod VR de Firewatch llega a su versión definitiva',
                  url: 'https://www.realovirtual.com/noticias/11291/mod-vr-firewatch-llega-su-version-definitiva',
                },
                {
                  title: 'UploadVR: Firewatch VR Mod Is Now Complete',
                  url: 'https://uploadvr.com/firewatch-vr-mod-now-complete/',
                },
              ]}
              gameName="Firewatch"
              gameKey="firewatch"
              description="This is a game with a mod. The mod is in the game and there is a game,
        which has a mod. What a game with a mod. Can you believe it?"
              downloadUrl="https://github.com/Raicuparta/two-forks-vr/#readme"
            />
            <ModCard
              title="NomaiVR"
              videos={[
                'https://youtu.be/g2NbjF4fG0s',
                'https://youtu.be/SCZ8vtl4sVs',
                'https://youtu.be/5ntWk0rJTC0',
                'https://youtu.be/_mfKvDbeEkg',
              ]}
              articles={[
                {
                  title: 'UploadVR: Outer Wilds Now Has An Incredible VR Mod',
                  url: 'https://uploadvr.com/outer-wilds-vr-mod/',
                },
                {
                  title:
                    'Real o Virtual: Outer Wilds está en Gamepass y se puede jugar en VR',
                  url: 'https://www.realovirtual.com/noticias/10852/outer-wilds-esta-gamepass-se-puede-jugar-vr',
                },
              ]}
              gameName="Outer Wilds"
              gameKey="outer-wilds"
              description="This is a game with a mod. The mod is in the game and there is a game,
        which has a mod. What a game with a mod. Can you believe it?"
              downloadUrl="https://outerwildsmods.com/mods/nomaivr/"
            />
            <ModCard
              title="ColossalVr"
              videos={[
                'https://youtu.be/kqGIscwN6vc',
                'https://youtu.be/fEyUUN_eKFQ',
              ]}
              articles={[]}
              gameName="Praey for the Gods"
              gameKey="praey-for-the-gods"
              description="This is a game with a mod. The mod is in the game and there is a game,
        which has a mod. What a game with a mod. Can you believe it?"
            />
            <ModCard
              title="FatesVR"
              videos={['https://youtu.be/Gt_kIrmTl44']}
              articles={[]}
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
