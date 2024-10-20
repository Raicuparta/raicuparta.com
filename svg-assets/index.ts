import Dev from './dev.svg';
import Github from './github.svg';
import Twitter from './twitter.svg';
import Patreon from './patreon.svg';
import Download from './download.svg';
import YouTube from './youtube.svg';
import Return from './return.svg';
import Itch from './itch.svg';
import Mastodon from './mastodon.svg';
import TikTok from './tiktok.svg';
import PayPal from './paypal.svg';
import Avatar from './avatar.svg';
import AvatarFancy from './avatar-fancy.svg';
import Back from './back.svg';
import Bluesky from './bluesky.svg';
import Kofi from './kofi.svg';

const assets = {
  Dev,
  Github,
  Twitter,
  Patreon,
  Download,
  YouTube,
  Return,
  Itch,
  Mastodon,
  TikTok,
  PayPal,
  Avatar,
  AvatarFancy,
  Back,
  Bluesky,
  Kofi,
};

export type IconName = keyof typeof assets;
export default assets;
