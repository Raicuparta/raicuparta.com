import styles from './styles/mod-card.module.scss';

type Props = {
  title: string;
  gameName: string;
  description: string;
  gameKey: string;
  videos: string[];
  articles: {
    title: string;
    url: string;
  }[];
  downloadUrl?: string;
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
        {props.downloadUrl ? (
          <a href={props.downloadUrl}>Download mod</a>
        ) : (
          <a
            className={styles.downloadLink}
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.patreon.com/raivr"
          >
            🔗<span>Become a patron to download this mod.</span>
          </a>
        )}
        {props.videos.length > 0 && (
          <>
            <h4>Videos</h4>
            <div className={styles.videoList}>
              {props.videos.map((videoUrl, index) => (
                <div key={videoUrl} className={styles.video}>
                  <a target="_blank" rel="noopener noreferrer" href={videoUrl}>
                    <img
                      height="100px"
                      src={`/mods/${props.gameKey}/videos/${index}.jpg`}
                    />
                  </a>
                </div>
              ))}
            </div>
          </>
        )}
        {props.articles.length > 0 && (
          <>
            <h4>Articles</h4>
            <ul>
              {props.articles.map(({ title, url }) => (
                <li key={url}>
                  <a href={url}>{title}</a>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </div>
  );
};
