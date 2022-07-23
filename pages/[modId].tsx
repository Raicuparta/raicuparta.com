import { Header, SocialLinks } from '../components';
import { ModCard } from '../components/mod-card';
import styles from './styles/index.module.scss';
import mods from './mods.json';
import { useRouter } from 'next/router';

const ModPage = () => {
  const router = useRouter();
  const { modId } = router.query;
  const mod = mods.find(({ gameKey }) => gameKey === modId);

  return (
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
              {mod && <ModCard {...mod} />}
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default ModPage;
