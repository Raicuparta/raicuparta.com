import { Button } from './button';
import { Icon } from './icon';
import { Link } from './link';
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
    <div className="rounded overflow-hidden bg-black bg-opacity-20">
      <div className="relative flex justify-center overflow-hidden">
        <img
          className="object-contain object-top shadow-xl shadow-black"
          src={imagePath}
          width="400px"
        />
        <img className="absolute top-0 -z-10 blur-lg" src={imagePath} />
        <div className="absolute bottom-4 flex flex-col items-center gap-4">
          <h3 className="text-4xl font-normal text-shadow text-white">
            {props.title}
          </h3>
          <span className="bg-black bg-opacity-50 px-2 rounded">
            for {props.gameName}
          </span>
        </div>
      </div>
      <div className="p-4 flex flex-col gap-4">
        <p>{props.description}</p>
        <div className="flex gap-4 flex-wrap justify-center">
          {props.downloadUrl ? (
            <Button
              href={props.downloadUrl}
              iconName="Download"
              className="bg-teal-700"
            >
              Download mod
            </Button>
          ) : (
            <Button
              href="https://www.patreon.com/raivr"
              iconName="Patreon"
              className="bg-pink-800"
            >
              Download on Patreon
            </Button>
          )}
          {props.sourceUrl && (
            <Button
              href={props.sourceUrl}
              iconName="Github"
              className="bg-teal-700"
            >
              Source code
            </Button>
          )}
        </div>
        {props.videos.length > 0 && (
          <>
            <h4>Videos</h4>
            <div className="flex flex-wrap gap-4 justify-center">
              {props.videos.map((videoUrl, index) => (
                <Link className="rounded overflow-hidden" href={videoUrl}>
                  <img
                    width="160px"
                    src={`/mods/${props.gameKey}/videos/${index}.jpg`}
                  />
                </Link>
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
