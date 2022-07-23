import { Button } from './button';
import { Link } from './link';
import { LinkInfo, LinkList } from './link-list';
import { Section } from './section';

type Props = {
  title: string;
  gameName: string;
  description: string;
  gameKey: string;
  videos: string[];
  articles: LinkInfo[];
  downloadUrl?: string;
  sourceUrl?: string;
  gameLinks: LinkInfo[];
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
          <h2 className="text-4xl font-normal text-shadow text-white">
            {props.title}
          </h2>
          <span className="bg-black bg-opacity-50 px-2 rounded">
            for {props.gameName}
          </span>
        </div>
      </div>
      <div className="p-4 flex flex-col gap-6">
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
          <Section title="Videos">
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
          </Section>
        )}
        {props.articles.length > 0 && (
          <Section title="Articles">
            <LinkList links={props.articles} />
          </Section>
        )}
        {props.gameLinks.length > 0 && (
          <Section title="Game links">
            <LinkList links={props.gameLinks} />
          </Section>
        )}
      </div>
    </div>
  );
};
