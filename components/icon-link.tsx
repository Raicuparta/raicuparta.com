import assets from '../svg-assets';
import styles from './styles/icon-link.module.scss';
import { Icon, ExternalLink } from '.';

type Props = {
  name: keyof typeof assets;
  title: string;
  url: string;
};

export const IconLink = ({ name, title, url }: Props) => {
  return (
    <ExternalLink className={styles.iconLink} href={url} title={title}>
      <Icon className={styles.icon} name={name} />
    </ExternalLink>
  );
};
