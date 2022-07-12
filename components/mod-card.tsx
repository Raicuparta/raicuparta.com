import styles from './styles/mod-card.module.scss';

type Props = {
  title: string;
  gameName: string;
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
      <div className={styles.titleWrapper}>
        <h3 className={styles.title}>{props.title}</h3>
        <span className={styles.gameName}>for {props.gameName}</span>
      </div>
    </div>
    <div className={styles.content}>
      <p className={styles.description}>{props.description}</p>
      <h4>Download mod</h4>
      <span>This mod is in development, so you </span>
      <h4>Videos</h4>
      <span>Some links</span>
      <h4>Articles about this mod</h4>
      <span>Some links</span>
    </div>
  </div>
);
