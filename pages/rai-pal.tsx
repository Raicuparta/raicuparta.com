import Image from 'next/image';
import RaiPalImage from '../public/img/projects/rai-pal.png';
import { Card } from '../components/card';
import { Project, ProjectCard } from '../components/project-card';
import { PageHead } from '../components/page-head';
import { TextLink } from '../components/text-link';
import { websiteUrl } from '../helpers/constants';

const raiPal: Project = {
  title: 'Rai Pal',
  gameKey: 'rai-pal',
  description:
    'Mod manager for universal game mods, like UEVR for Unreal games, and UUVR for Unity games.',
  articles: [],
  buttonLinks: {
    download:
      'https://github.com/Raicuparta/rai-pal/releases/latest/download/RaiPal.msi',
    source: 'https://github.com/raicuparta/rai-pal',
  },
  gameLinks: [
    {
      title: 'Check the full Readme for more information',
      url: 'https://github.com/Raicuparta/rai-pal?tab=readme-ov-file#readme',
    },
    {
      title: 'For help or bug reports, open an issue on GitHub',
      url: 'https://github.com/Raicuparta/rai-pal/issues',
    },
  ],
  mainVideo: '',
  videos: [],
};

const RaiPalPage = () => {
  return (
    <>
      <PageHead
        description={raiPal.description}
        imageUrl={`${websiteUrl}${`/mods/${raiPal.gameKey}.jpg`}`}
        title={'Rai Pal'}
        imageWidth={400}
        imageHeight={225}
        largeImage
      />
      <Card className="mb-2 p-2" data-nosnippet>
        <TextLink href="/" isExternal={false}>
          Homepage
        </TextLink>
        <span className="text-xl leading-none">{' › '}</span>
        <span>{raiPal.title}</span>
      </Card>
      <ProjectCard project={raiPal}>
        <Image src={RaiPalImage} alt="Rai Pal" className="rounded border" />
        <div className="flex flex-col gap-2">
          <p>
            Rai Pal is a tool that helps you use and make universal game mods.
            That means mods that aren't made for any specific game, but work
            across multiple games, usually of the same game engine. Some
            features:
          </p>
          <ul className="list-disc list-inside">
            <li>Auto-find installed games from supported providers.</li>
            <li>
              Auto-find owned (but not necessarily installed) games from
              supported providers.
            </li>
            <li>
              Detect relevant information about each game, such as their game
              engine.
            </li>
            <li>Easily install/run the correct version of universal mods.</li>
            <li>Easily update universal mods.</li>
          </ul>
        </div>
      </ProjectCard>
    </>
  );
};

export default RaiPalPage;
