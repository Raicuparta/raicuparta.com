import { Header, SocialLinks } from '../components';
import { ModCard } from '../components/mod-card';
import styles from './styles/index.module.scss';
import mods from './mods.json';

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
            {mods.map((mod) => (
              <ModCard key={mod.gameKey} {...mod} />
            ))}
          </div>
        </div>
      </div>
    </main>
  </>
);

export default Home;
