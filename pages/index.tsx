import { ButtonLink } from '../components/button-link';
import { ModImage } from '../components/mod-image';
import { PageHead } from '../components/page-head';
import { TextLink } from '../components/text-link';
import { websiteUrl } from '../helpers/constants';
import mods from './mods.json';
import otherProjects from './other-projects.json';

const Home = () => (
  <>
    <PageHead
      description="Raicuparta makes VR mods for flat games"
      imageUrl={`${websiteUrl}/img/avatar.png`}
      imageWidth={120}
      title="Raicuparta's VR mods"
    />
    <title>Raicuparta</title>
    <div className="flex flex-col gap-4 bg-overlay p-4 rounded">
      <p>Hello. I'm Raicuparta, and I make VR mods for flat screen games.</p>
      <p>
        Initially, my mods are available exclusively on{' '}
        <TextLink href="https://www.patreon.com/raivr">my Patreon</TextLink>. If
        you're a patron, you'll also get a special role in the{' '}
        <TextLink href="https://discord.gg/gEEqTVFzvD">
          Flat2VR Discord
        </TextLink>
        , and you'll have access to more frequent development updates and
        discussion about my mods.
      </p>
      <p>
        After a while, I usually make my mods free and open source, available on{' '}
        <TextLink href="https://github.com/Raicuparta">my GitHub</TextLink>.
      </p>
      <h2 className="text-2xl font-normal text-center mt-4">
        Raicuparta's VR Mods
      </h2>
      <div className="flex gap-4 flex-col">
        {mods.map((mod) => {
          return (
            <ButtonLink
              key={mod.gameKey}
              href={`${mod.gameKey}-vr-mod`}
              title={`${mod.title} mod for ${mod.gameName}`}
            >
              <ModImage
                src={`/mods/${mod.gameKey}.png`}
                title={mod.title}
                gameName={mod.gameName}
              />
            </ButtonLink>
          );
        })}
      </div>
      {/* <h2 className="text-2xl font-normal text-center mt-4">
        Raicuparta's Other Projects
      </h2>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
        {otherProjects.map((project) => {
          return (
            <ButtonLink
              key={project.id}
              href={`/projects/${project.id}`}
              title={project.title}
            >
              <ModImage
                src={`/mods/neon-white.jpg`}
                title={project.title}
                gameName={project.title}
              />
            </ButtonLink>
          );
        })}
      </div> */}
    </div>
  </>
);

export default Home;
