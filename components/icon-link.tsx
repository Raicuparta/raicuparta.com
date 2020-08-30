import assets from '../svg-assets';
import styles from './styles/icon-link.module.scss';
import { Icon } from './icon';

type Props = {
  name: keyof typeof assets;
  title: string;
  url: string;
};

export const IconLink = ({ name, title, url }: Props) => {
  return (
    <a
      className={styles.iconLink}
      target="_blank"
      rel="noopener noreferrer"
      href={url}
      title={title}
    >
      <Icon name={name} />
    </a>
  );
};
