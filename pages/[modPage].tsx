import { ModCard } from '../components/mod-card';
import mods from './mods.json';
import { useRouter } from 'next/router';
import { websiteUrl } from '../helpers/constants';
import { PageHead } from '../components/page-head';

export type Mod = typeof mods[number];

const ModPage = () => {
  const router = useRouter();
  const { modPage } = router.query;
  const modId = (modPage as string).replace('-vr-mod', '');
  const mod = mods.find(({ gameKey }) => gameKey === modId);

  if (!mod) {
    return <p>Not found</p>;
  }

  return (
    <>
      <PageHead
        description={`${mod.title} is a mod that converts "${mod.gameName}" into a VR game.`}
        imageUrl={`${websiteUrl}${`/mods/${mod.gameKey}/mod.jpg`}`}
        title={`${mod.title} mod for ${mod.gameName}`}
        imageWidth={400}
        imageHeight={225}
        largeImage
      ></PageHead>
      <ModCard {...mod} />
    </>
  );
};

export async function getStaticPaths() {
  return {
    paths: mods.map((mod) => ({
      params: {
        modPage: `${mod.gameKey}-vr-mod`,
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps() {
  return {
    props: {},
  };
}

export default ModPage;
