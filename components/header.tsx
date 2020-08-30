import styles from './styles/header.module.scss';

type Props = {
  title: string;
  subtitle: string;
};

export const Header = ({ title, subtitle }: Props) => (
  <header>
    <h1 className={styles.title}>{title}</h1>
    <h2 className={styles.subtitle}>{subtitle}</h2>
  </header>
);
