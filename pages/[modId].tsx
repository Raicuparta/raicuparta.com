import { ModCard } from '../components/mod-card';
import mods from './mods.json';
import { useRouter } from 'next/router';

const ModPage = () => {
  const router = useRouter();
  const { modId } = router.query;
  const mod = mods.find(({ gameKey }) => gameKey === modId);

  return mod && <ModCard {...mod} />;
};

export default ModPage;
