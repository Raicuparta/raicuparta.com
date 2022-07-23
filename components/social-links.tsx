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
    name: 'Twitter',
    title: 'Twitter @Raicuparta',
    url: 'https://twitter.com/raicuparta',
  },
  {
    name: 'Dev',
    title: 'DEV @Raicuparta',
    url: 'https://dev.to/raicuparta',
  },
  {
    name: 'StackOverflow',
    title: 'Stack Overflow @Raicuparta',
    url: 'https://stackoverflow.com/users/3962104/raicuparta',
  },
] as const;

export const SocialLinks = () => (
  <>
    <div className="sticky top-0 z-10 bg-black bg-opacity-20">
      <nav className="flex justify-evenly max-w-lg m-auto p-2">
        {links.map((link) => (
          <IconLink key={link.name} {...link} />
        ))}
      </nav>
    </div>
  </>
);
