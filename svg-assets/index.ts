import Dev from './dev.svg';
import Github from './github.svg';
import StackOverflow from './stack-overflow.svg';
import Twitter from './twitter.svg';
import Patreon from './patreon.svg';
import Download from './download.svg';

const assets = {
  Dev,
  Github,
  StackOverflow,
  Twitter,
  Patreon,
  Download,
};

export type IconName = keyof typeof assets;
export default assets;
