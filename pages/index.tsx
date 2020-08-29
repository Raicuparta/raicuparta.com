import css from 'styled-jsx/css';

import { Face, Header } from '../components';
import { SocialLinks } from '../components/social-links';

const Home = () => (
  <div>
    <Face />
    <Header
      title="Ricardo Lopes"
      subtitle="Front-end Developer"
    />
    <main>
      <SocialLinks />
    </main>
    <style jsx>
      {styles}
    </style>
  </div>
);

const styles = css.global`
  body {
    --background: #222;
    --text: white;
    --accent: #8ee478;

    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100vh;
    width: 100vw;
    margin: 0;
    overflow: hidden;
    font-family: 'Courier New', Courier;
    font-weight: 100;
    color: var(--text);
    background: var(--background);
    text-align: center;
  }
`;

export default Home;
