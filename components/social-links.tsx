import { PropsWithChildren } from 'react';
import { IconLink } from '../components/icon-link';

export const LinkRow = ({ children }: PropsWithChildren) => (
  <div className="flex justify-evenly max-w-lg gap-4">{children}</div>
);

export const SocialLinks = () => (
  <div className="bg-overlay p-4">
    <nav className="flex justify-center flex-wrap gap-4">
      <LinkRow>
        <IconLink
          iconName="Patreon"
          title="Patreon"
          url="https://www.patreon.com/raivr"
        />
        <IconLink
          iconName="PayPal"
          title="PayPal"
          url="https://paypal.me/raicuparta/5usd"
        />
        <IconLink
          iconName="Github"
          title="GitHub"
          url="https://github.com/Raicuparta"
        />
        <IconLink
          iconName="Itch"
          title="Itch"
          url="https://raicuparta.itch.io"
        />
      </LinkRow>
      <LinkRow>
        <IconLink
          iconName="Twitter"
          title="Twitter"
          url="https://twitter.com/raicuparta"
        />
        <IconLink
          iconName="Mastodon"
          title="Mastodon"
          url="https://mastodon.gamedev.place/@Raicuparta"
        />
        <IconLink
          iconName="TikTok"
          title="TikTok"
          url="https://www.tiktok.com/@raicuparta"
        />
        <IconLink
          iconName="YouTube"
          title="YouTube"
          url="https://www.youtube.com/c/Raicuparta"
        />
      </LinkRow>
    </nav>
  </div>
);
