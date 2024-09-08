import { PropsWithChildren } from 'react';
import { IconLink } from '../components/icon-link';
import { css } from '../styled-system/css';
import { hstack } from '../styled-system/patterns';

export const LinkRow = ({ children }: PropsWithChildren) => (
  <div className={hstack({ justify: 'space-evenly', maxWidth: 'lg' })}>
    {children}
  </div>
);

export const SocialLinks = () => (
  <nav className={hstack({ flexWrap: 'wrap', justify: 'center' })}>
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
      <IconLink iconName="Itch" title="Itch" url="https://raicuparta.itch.io" />
    </LinkRow>
    <LinkRow>
      <IconLink
        iconName="Twitter"
        title="Twitter"
        url="https://twitter.com/raicuparta"
      />
      <IconLink
        iconName="Bluesky"
        title="Bluesky"
        url="https://bsky.app/profile/raicuparta.com"
      />
      <IconLink
        iconName="Mastodon"
        title="Mastodon"
        url="https://mastodon.gamedev.place/@Raicuparta"
      />
      <IconLink
        iconName="YouTube"
        title="YouTube"
        url="https://www.youtube.com/c/Raicuparta"
      />
    </LinkRow>
  </nav>
);
