import styles from './styles/tag.module.scss';

type Props = {
  children: string;
};

export const Tag = ({ children }: Props) => (
  <span className={styles.tag}>
    <span className={styles.content}>{children}</span>
  </span>
);
