import { Header, ButtonLink, SocialLinks } from '../components';
import { ModCard } from '../components/mod-card';
import mods from './mods.json';

const Home = () => (
  <div className="flex flex-wrap gap-4 justify-center">
    {mods.map((mod) => (
      <ButtonLink
        key={mod.gameKey}
        href={mod.gameKey}
        className="rounded overflow-hidden relative"
      >
        <img src={`/mods/${mod.gameKey}/mod.jpg`} width="300px" />
        <span className="absolute z-10 bottom-4 text-center w-full text-4xl font-normal text-shadow text-white">
          {mod.title}
        </span>
      </ButtonLink>
    ))}
  </div>
);

export default Home;
