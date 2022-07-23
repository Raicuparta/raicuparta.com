import { Header, ButtonLink, SocialLinks } from '../components';
import { ModCard } from '../components/mod-card';
import { ModImage } from '../components/mod-image';
import mods from './mods.json';

const Home = () => (
  <div className="flex flex-wrap gap-4 justify-center">
    {mods.map((mod) => (
      <ButtonLink
        key={mod.gameKey}
        href={`${mod.gameKey}-vr-mod`}
        className="rounded overflow-hidden relative"
      >
        <ModImage
          src={`/mods/${mod.gameKey}/mod.jpg`}
          title={mod.title}
          gameName={mod.gameName}
          width="300px"
        />
      </ButtonLink>
    ))}
  </div>
);

export default Home;
