import { Icon } from '../components';

const links = [
  {
    name: 'Twitter',
    title: 'Twitter @Raicuparta',
    url: 'https://twitter.com/raicuparta',
  },
  {
    name: 'LinkedIn',
    title: 'LinkedIn Ricardo Lopes',
    url: 'https://www.linkedin.com/in/ricardo-lopes-3a071643/',
  },
  {
    name: 'Envelope',
    title: 'E-mail raicuparta@gmail.com',
    url: 'mailto:raicuparta@gmail.com',
  },
  {
    name: 'StackOverflow',
    title: 'Stack Overflow @Raicuparta',
    url: 'https://stackoverflow.com/users/3962104/ricardo-lopes?tab=profile',
  },
  {
    name: 'Dev',
    title: 'DEV @Raicuparta',
    url: 'https://dev.to/raicuparta',
  },
  {
    name: 'Medium',
    title: 'Medium @Raicuparta',
    url: 'https://medium.com/@Raicuparta',
  },
  {
    name: 'Github',
    title: 'Github @Raicuparta',
    url: 'https://github.com/Raicuparta',
  },
] as const;

export const SocialLinks = () => (
  <nav className="links">
    {links.map((link) => (
      <Icon key={link.name} {...link} />
    ))}
  </nav>
);
