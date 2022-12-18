import { PropsWithChildren } from 'react';
import { IconLink } from '../components/icon-link';

export const LinkRow = ({ children }: PropsWithChildren) => (
  <div className="flex justify-evenly max-w-lg m-auto p-2 gap-6">
    {children}
  </div>
);

export const SocialLinks = () => (
  <div className="bg-overlay ">
    <nav className="flex flex-col pb-2">
      <LinkRow>
        <IconLink
          iconName="Mastodon"
          title="Mastodon @Raicuparta@mastodon.gamedev.place"
          url="https://mastodon.gamedev.place/@Raicuparta"
        />
        <IconLink
          iconName="Patreon"
          title="Raicuparta's Patreon"
          url="https://www.patreon.com/raivr"
        />
        <IconLink
          iconName="YouTube"
          title="Raicuparta on YouTube"
          url="https://www.youtube.com/c/Raicuparta"
        />
        <IconLink
          iconName="Github"
          title="Github @Raicuparta"
          url="https://github.com/Raicuparta"
        />
      </LinkRow>
      <LinkRow>
        <IconLink
          iconName="Twitter"
          title="Twitter @Raicuparta"
          url="https://twitter.com/raicuparta"
        />
        <IconLink
          iconName="PayPal"
          title="Donate to Raicuparta with PayPal"
          url="https://paypal.me/raicuparta/5usd"
        />
        <IconLink
          iconName="TikTok"
          title="Raicuparta on TikTok"
          url="https://www.tiktok.com/@raicuparta"
        />
        <IconLink
          iconName="Itch"
          title="Raicuparta on itch.io"
          url="https://raicuparta.itch.io"
        />
      </LinkRow>
    </nav>
  </div>
);
