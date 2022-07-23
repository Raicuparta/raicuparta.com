import { Header, SocialLinks } from '../components';
import { ModCard } from '../components/mod-card';
import mods from './mods.json';

const Home = () => (
  <>
    <title>Raicuparta</title>
    <main>
      <Header title="Raicuparta" />
      <SocialLinks />
      <div className="max-w-3xl m-auto p-4 flex flex-col gap-4">
        {mods.map((mod) => (
          <ModCard key={mod.gameKey} {...mod} />
        ))}
      </div>
    </main>
  </>
);

export default Home;
