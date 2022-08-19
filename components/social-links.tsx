import { IconInfo, IconLink } from '../components/icon-link';

const links: IconInfo[] = [
  {
    iconName: 'Github',
    title: 'Github @Raicuparta',
    url: 'https://github.com/Raicuparta',
  },
  {
    iconName: 'Patreon',
    title: "Raicuparta's Patreon",
    url: 'https://www.patreon.com/raivr',
  },

  {
    iconName: 'YouTube',
    title: 'Raicuparta on YouTube',
    url: 'https://www.youtube.com/c/Raicuparta',
  },
  {
    iconName: 'Twitter',
    title: 'Twitter @Raicuparta',
    url: 'https://twitter.com/raicuparta',
  },
  {
    iconName: 'Itch',
    displayName: 'itch.io',
    title: 'Raicuparta on itch.io',
    url: 'https://raicuparta.itch.io',
  },
];

export const SocialLinks = () => (
  <nav className="bg-overlay flex justify-evenly max-w-lg m-auto p-2">
    {links.map((link) => (
      <IconLink
        key={link.iconName}
        {...link}
        displayName={link.displayName ?? link.iconName}
      />
    ))}
  </nav>
);
