import Image from 'next/image';
import { IconButton } from './icon-button';
import { ButtonLink } from './button-link';
import { LinkList } from './link-list';
import { Section } from './section';
import { YoutubeEmbed } from './youtube-embed/youtube-embed';
import { LinkListItem } from './link-list-item';
import { Card } from './card';
import { Project } from '../data/mods';
import { Icon } from './icon';
import { css } from '../styled-system/css';
import { flex, vstack } from '../styled-system/patterns';

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
      <div className={flex({ position: 'relative', justify: 'center' })}>
        <div className={css({ position: 'absolute', left: 0, top: 0 })}>
          <ButtonLink
            className={flex({
              background: 'overlay',
              opacity: 0.75,
              roundedBottomRight: 'md',
              paddingX: 2,
              height: '100%',
              alignItems: 'center',
              gap: 2,
              padding: 2,
              _hover: { opacity: '100%' },
            })}
            href="/"
          >
            <Icon name="Back" className={css({ height: 6 })} />
            <span>Home</span>
          </ButtonLink>
        </div>
        <div className={css({ margin: 6, textAlign: 'center' })}>
          <h2 className={css({ fontSize: '3xl', fontWeight: 'normal' })}>
            {props.project.title}
          </h2>
          {props.project.subtitle && <p>{props.project.subtitle}</p>}
        </div>
        <div
          className={css({
            position: 'absolute',
            top: '0',
            zIndex: -10,
            width: '100%',
            height: '100%',
            overflow: 'hidden',
            background: 'black',
          })}
        >
          <Image
            className={css({
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              filter: 'blur(10px)',
              transform: 'scale(1.2)',
              opacity: 0.75,
            })}
            src={imagePath}
            fill
            priority
            alt={props.project.title}
          />
        </div>
      </div>
      <div className={vstack({ padding: 4, gap: 6 })}>
        {props.project.description && <p>{props.project.description}</p>}
        <div
          className={css({
            a: 'flex flex-col gap-4 justify-center items-center',
          })}
        >
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
            <div className={css({ a: 'flex flex-wrap gap-4 justify-center' })}>
              {props.videos.map((video) => (
                <ButtonLink
                  className={css({ a: 'rounded overflow-hidden' })}
                  key={video.url}
                  href={video.url}
                >
                  <div className={css({ a: 'text-zero' })}>
                    <Image
                      width={320}
                      height={180}
                      src={video.image}
                      alt={video.title}
                      priority
                    />
                  </div>
                  <span
                    className={css({
                      a: 'absolute top-0 text-xs font-semibold bg-black bg-opacity-75 m-1 rounded p-1',
                    })}
                  >
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
                  <div
                    className={css({
                      a: 'relative rounded overflow-hidden flex',
                    })}
                  >
                    <Image src={article.image} width={160} height={90} alt="" />
                    <div className={css({ a: 'absolute top-0 left' })}>
                      <Image
                        src={article.favicon}
                        width={32}
                        height={32}
                        className={css({ a: 'rounded-br bg-white' })}
                        alt={article.siteName}
                      />
                    </div>
                  </div>
                  <div className={css({ a: 'flex-1' })}>
                    {article.siteName && (
                      <p className={css({ a: 'font-bold' })}>
                        {article.siteName}
                      </p>
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
