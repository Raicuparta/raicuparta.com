import { ModCard } from '../components/mod-card';
import mods from './mods.json';
import { useRouter } from 'next/router';

const ModPage = () => {
  const router = useRouter();
  const { modPage } = router.query;
  const modId = (modPage as string).replace('-vr-mod', '');
  const mod = mods.find(({ gameKey }) => gameKey === modId);

  return mod && <ModCard {...mod} />;
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
