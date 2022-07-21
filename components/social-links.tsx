import { IconLink } from '../components';
import styles from './styles/social-links.module.scss';

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
    url: 'https://stackoverflow.com/users/3962104/ricardo-lopes?tab=profile',
  },
] as const;

export const SocialLinks = () => (
  <>
    <div className={styles.wrapper}>
      <nav className={styles.socialLinks}>
        {links.map((link) => (
          <IconLink key={link.name} {...link} />
        ))}
      </nav>
    </div>
    <div className={styles.background} />
  </>
);
