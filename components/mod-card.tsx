import styles from './styles/mod-card.module.scss';

type Props = {
  title: string;
  description: string;
  imageSource: string;
};

export const ModCard = (props: Props) => (
  <div className={styles.modCard}>
    <div className={styles.thumbnailWrapper}>
      <img
        className={styles.thumbnail}
        src={props.imageSource}
        height="200px"
      />
      <img
        className={styles.thumbnailBackground}
        src={props.imageSource}
        width="100%"
        height="200px"
      />
      <h3 className={styles.title}>{props.title}</h3>
    </div>
    <div className={styles.content}>
      <p className={styles.description}>{props.description}</p>
    </div>
  </div>
);
