import { Icon } from './icon';
import styles from './styles/mod-card.module.scss';

type Link = {
  title: string;
  url: string;
};

type Props = {
  title: string;
  gameName: string;
  description: string;
  gameKey: string;
  videos: string[];
  articles: Link[];
  downloadUrl?: string;
  sourceUrl?: string;
  gameLinks: Link[];
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
        <div className={styles.downloadWrapper}>
          {props.downloadUrl ? (
            <a
              className={styles.downloadLink}
              target="_blank"
              rel="noopener noreferrer"
              href={props.downloadUrl}
            >
              <Icon className={styles.buttonIcon} name="Download" />
              Download mod
            </a>
          ) : (
            <a
              className={styles.patreonLink}
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.patreon.com/raivr"
            >
              <Icon className={styles.buttonIcon} name="Patreon" />
              Download on Patreon
            </a>
          )}
          {props.sourceUrl && (
            <a
              className={styles.downloadLink}
              target="_blank"
              rel="noopener noreferrer"
              href={props.sourceUrl}
            >
              <Icon className={styles.buttonIcon} name="Github" />
              Source code
            </a>
          )}
        </div>
        {props.videos.length > 0 && (
          <>
            <h4>Videos</h4>
            <div className={styles.videoList}>
              {props.videos.map((videoUrl, index) => (
                <div key={videoUrl} className={styles.video}>
                  <a target="_blank" rel="noopener noreferrer" href={videoUrl}>
                    <img
                      height="80px"
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
            <div className={styles.linkListWrapper}>
              <div className={styles.linkList}>
                {props.articles.map(({ title, url }) => (
                  <a
                    className={styles.listLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    key={url}
                    href={url}
                  >
                    {title}
                  </a>
                ))}
              </div>
            </div>
          </>
        )}
        {props.gameLinks.length > 0 && (
          <>
            <h4>Game links</h4>
            <div className={styles.linkListWrapper}>
              <div className={styles.linkList}>
                {props.gameLinks.map(({ title, url }) => (
                  <a
                    className={styles.listLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    key={url}
                    href={url}
                  >
                    {title}
                  </a>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
