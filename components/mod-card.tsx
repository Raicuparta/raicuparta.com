import Image from 'next/image';
import { IconButton } from './icon-button';
import { ButtonLink } from './button-link';
import { LinkList } from './link-list';
import { Section } from './section';
import { Mod } from '../pages/[modPage]';
import { YoutubeEmbed } from './youtube-embed/youtube-embed';
import { LinkListItem } from './link-list-item';
import { Card } from './card';

export const ModCard = (props: Mod) => {
  const imagePath = `/img/projects/${props.gameKey}.png`;

  return (
    <Card>
      <div className="relative flex justify-center">
        <div className="m-4 drop-shadow-text text-center">
          <h2 className="text-3xl font-normal">{props.title}</h2>
          <p>for {props.gameName}</p>
        </div>
        <div className="absolute top-0 -z-10 w-full h-full overflow-hidden">
          <Image
            className="w-full h-full object-cover blur"
            src={imagePath}
            fill
            priority
            alt={props.title}
          />
        </div>
      </div>
      <div className="p-4 flex flex-col gap-6">
        <p>{props.description}</p>
        <div className="flex gap-4 flex-wrap justify-center">
          {props.buttonLinks?.download && (
            <IconButton
              href={props.buttonLinks.download}
              iconName="Download"
              className="bg-cta"
            >
              Download mod
            </IconButton>
          )}
          {props.buttonLinks?.itch && (
            <IconButton
              href={props.buttonLinks.itch}
              iconName="Itch"
              className="bg-itch"
            >
              Download on Itch.io
            </IconButton>
          )}
          {props.buttonLinks?.patreon && (
            <IconButton
              href={props.buttonLinks.patreon}
              iconName="Patreon"
              className="bg-patreon"
            >
              Subscribe on Patreon
            </IconButton>
          )}
          {props.buttonLinks?.source && (
            <IconButton
              href={props.buttonLinks.source}
              iconName="Github"
              className="bg-cta bg-opacity-30"
            >
              Source code
            </IconButton>
          )}
        </div>
        {props.mainVideo && (
          <YoutubeEmbed
            urlOrId={props.mainVideo}
            poster="maxresdefault"
            title={`${props.gameName} VR mod ${props.title} video.`}
          />
        )}
        {props.videos.length > 0 && (
          <Section title="More Videos">
            <div className="flex flex-wrap gap-4 justify-center">
              {props.videos.map((video) => (
                <ButtonLink
                  className="rounded overflow-hidden"
                  key={video.url}
                  href={video.url}
                >
                  <div className="text-zero">
                    <Image
                      width={320}
                      height={180}
                      src={video.images[0]}
                      alt={video.title}
                      priority
                    />
                  </div>
                  <span className="absolute top-0 text-xs font-semibold bg-black bg-opacity-75 m-1 rounded p-1">
                    {video.title}
                  </span>
                </ButtonLink>
              ))}
            </div>
          </Section>
        )}
        {props.articles.length > 0 && (
          <Section title="Articles">
            <LinkList>
              {props.articles.map((article) => (
                <LinkListItem key={article.url} url={article.url}>
                  <div className="relative rounded overflow-hidden flex">
                    <Image src={article.image} width={160} height={90} alt="" />
                    <div className="absolute top-0 left">
                      <Image
                        src={article.favicon}
                        width={32}
                        height={32}
                        className="rounded-br bg-white"
                        alt={article.siteName}
                      />
                    </div>
                  </div>
                  <div className="flex-1">
                    {article.siteName && (
                      <p className="font-bold">{article.siteName}</p>
                    )}
                    <p>{article.title}</p>
                  </div>
                </LinkListItem>
              ))}
            </LinkList>
          </Section>
        )}
        {props.gameLinks.length > 0 && (
          <Section title="Game links">
            <LinkList>
              {props.gameLinks.map((gameLink) => (
                <LinkListItem key={gameLink.url} url={gameLink.url}>
                  {gameLink.title}
                </LinkListItem>
              ))}
            </LinkList>
          </Section>
        )}
      </div>
    </Card>
  );
};
