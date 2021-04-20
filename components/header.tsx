import styles from './styles/header.module.scss';

type Props = {
  title: string;
};

export const Header = ({ title }: Props) => (
  <header className={styles.wrapper}>
    <h1 className={styles.title}>{title}</h1>
  </header>
);
