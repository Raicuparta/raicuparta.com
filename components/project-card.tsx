import Image from 'next/image';
import { IconButton } from './icon-button';
import { ButtonLink } from './button-link';
import { LinkList } from './link-list';
import { Section } from './section';
import { YoutubeEmbed } from './youtube-embed/youtube-embed';
import { LinkListItem } from './link-list-item';
import { Card } from './card';
import { Project } from '../data/mods';

export type Article = {
  url: string;
  title: string;
  image: string;
  favicon: string;
  siteName: string;
};

export type Video = {
  url: string;
  title: string;
  image: string;
};

type Props = {
  project: Project;
  articles?: Article[];
  videos?: Video[];
  children?: React.ReactNode;
};

export const ProjectCard = (props: Props) => {
  const imagePath = `/img/projects/${props.project.id}.png`;

  return (
    <Card>
      <div className="relative flex justify-center">
        <div className="m-4 drop-shadow-text text-center">
          <h2 className="text-3xl font-normal">{props.project.title}</h2>
          {props.project.subtitle && <p>{props.project.subtitle}</p>}
        </div>
        <div className="absolute top-0 -z-10 w-full h-full overflow-hidden">
          <Image
            className="w-full h-full object-cover blur"
            src={imagePath}
            fill
            priority
            alt={props.project.title}
          />
        </div>
      </div>
      <div className="p-4 flex flex-col gap-6">
        {props.project.description && <p>{props.project.description}</p>}
        <div className="flex flex-col gap-4 justify-center items-center">
          {props.project.buttons.map((button, index) => (
            <IconButton
              key={button.url}
              href={button.url}
              iconName={button.icon}
              className={
                index > 0 ? 'bg-purple py-1' : 'bg-cta text-purple font-normal'
              }
            >
              {button.label}
            </IconButton>
          ))}
        </div>
        {props.children}
        {props.project.mainVideo && (
          <YoutubeEmbed
            urlOrId={props.project.mainVideo}
            poster="maxresdefault"
            title={`${props.project.title} (${props.project.subtitle}) video.`}
          />
        )}
        {props.videos && props.videos.length > 0 && (
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
                      src={video.image}
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
        {props.articles && props.articles.length > 0 && (
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
        {props.project.moreLinks.length > 0 && (
          <Section title="More">
            <LinkList>
              {props.project.moreLinks.map((gameLink) => (
                <LinkListItem key={gameLink.url} url={gameLink.url}>
                  {gameLink.label}
                </LinkListItem>
              ))}
            </LinkList>
          </Section>
        )}
      </div>
    </Card>
  );
};
