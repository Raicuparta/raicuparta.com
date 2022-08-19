import Dev from './dev.svg';
import Github from './github.svg';
import Twitter from './twitter.svg';
import Patreon from './patreon.svg';
import Download from './download.svg';
import YouTube from './youtube.svg';
import Return from './return.svg';
import Itch from './itch.svg';

const assets = {
  Dev,
  Github,
  Twitter,
  Patreon,
  Download,
  YouTube,
  Return,
  Itch,
};

export type IconName = keyof typeof assets;
export default assets;
