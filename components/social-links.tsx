import { IconLink } from '../components';

const links = [
  {
    name: 'Github',
    title: 'Github @Raicuparta',
    url: 'https://github.com/Raicuparta',
  },
  {
    name: 'Patreon',
    title: 'Patreon RaiVR',
    url: 'https://www.patreon.com/raivr',
  },

  {
    name: 'YouTube',
    title: 'Raicuparta on YouTube',
    url: 'https://www.youtube.com/c/Raicuparta',
  },
  {
    name: 'Twitter',
    title: 'Twitter @Raicuparta',
    url: 'https://twitter.com/raicuparta',
  },
  {
    name: 'Dev',
    title: 'DEV @Raicuparta',
    url: 'https://dev.to/raicuparta',
  },
] as const;

export const SocialLinks = () => (
  <>
    <div className="sticky top-0 z-10 bg-overlay">
      <nav className="flex justify-evenly max-w-lg m-auto p-2">
        {links.map((link) => (
          <IconLink key={link.name} {...link} />
        ))}
      </nav>
    </div>
  </>
);
