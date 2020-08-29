import css from 'styled-jsx/css';

import { Icon, Face, Header } from '../components';

const links = [
  {
    name: 'Twitter',
    title: 'Twitter @Raicuparta',
    url: 'https://twitter.com/raicuparta',
  },
  {
    name: 'LinkedIn',
    title: 'LinkedIn Ricardo Lopes',
    url: 'https://www.linkedin.com/in/ricardo-lopes-3a071643/',
  },
  {
    name: 'Envelope',
    title: 'E-mail raicuparta@gmail.com',
    url: 'mailto:raicuparta@gmail.com',
  },
  {
    name: 'StackOverflow',
    title: 'Stack Overflow @Raicuparta',
    url: 'https://stackoverflow.com/users/3962104/ricardo-lopes?tab=profile',
  },
  {
    name: 'Dev',
    title: 'DEV @Raicuparta',
    url: 'https://dev.to/raicuparta',
  },
  {
    name: 'Medium',
    title: 'Medium @Raicuparta',
    url: 'https://medium.com/@Raicuparta',
  },
  {
    name: 'Github',
    title: 'Github @Raicuparta',
    url: 'https://github.com/Raicuparta',
  },
] as const;

const Home = () => (
  <div>
    <Face />
    <Header title="Ricardo Lopes" subtitle="Front-end Developer" />
    <main>
      <nav className="links">
        {links.map((link) => (
          <Icon key={link.name} {...link} />
        ))}
      </nav>
    </main>

    <style jsx>{styles}</style>
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
