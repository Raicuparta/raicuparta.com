import css from 'styled-jsx/css';

import { Face, Header, SocialLinks, Projects } from '../components';
import styles from './index.module.scss';

const Home = () => (
  <>
    {/* <Face /> */}
    <main className={styles.main}>
      <div className={styles.pageBody}>
        <Header title="Ricardo Lopes" subtitle="Front-end Developer" />
        <Projects />
      </div>
      <SocialLinks />
    </main>
  </>
);

export default Home;
