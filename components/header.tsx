import styles from './styles/header.module.scss';

type Props = {
  title: string;
};

export const Header = ({ title }: Props) => (
  <header className={styles.wrapper}>
    <div className={styles.titleWrapper}>
      <img height="60" src="img/wario.png" className={styles.avatar} />
      <h1 className={styles.title}>{title}</h1>
    </div>
  </header>
);
