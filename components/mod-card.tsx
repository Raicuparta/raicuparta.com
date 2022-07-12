import styles from './styles/mod-card.module.scss';

type Props = {
  title: string;
  gameName: string;
  description: string;
  gameKey: string;
  videos: string[];
};

export const ModCard = (props: Props) => {
  const imagePath = `/mods/${props.gameKey}/mod.jpg`;
  return (
    <div className={styles.modCard}>
      <div className={styles.thumbnailWrapper}>
        <img className={styles.thumbnail} src={imagePath} height="200px" />
        <img
          className={styles.thumbnailBackground}
          src={imagePath}
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
        {props.videos.length > 0 && (
          <div className={styles.videoList}>
            {props.videos.map((videoUrl, index) => (
              <div className={styles.video}>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={videoUrl}
                  key={videoUrl}
                >
                  <img
                    height="100px"
                    src={`/mods/${props.gameKey}/videos/${index}.jpg`}
                  />
                </a>
              </div>
            ))}
          </div>
        )}
        <h4>Articles about this mod</h4>
        <span>Some links</span>
      </div>
    </div>
  );
};
