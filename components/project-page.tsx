import Image from 'next/image';
import { IconButton } from './icon-button';
import { ButtonLink } from './button-link';
import { LinkList } from './link-list';
import { Section } from './section';
import { YoutubeEmbed } from './youtube-embed/youtube-embed';
import { LinkListItem } from './link-list-item';
import { Card } from './card';
import { Project } from '../data/data';
import { Icon } from './icon';
import { css } from '../styled-system/css';
import { flex, hstack, stack, vstack } from '../styled-system/patterns';
import { SteamEmbed } from './steam-embed';

export type Article = {
  url: string;
  title: string;
  image: string;
  favicon: string;
  siteName: string;
};

export type Video = {
  url: string;
  title?: string;
  image: string;
};

type Props = {
  project: Project;
  articles?: Article[];
  videos?: Video[];
  children?: React.ReactNode;
};

export const ProjectPage = (props: Props) => {
  const imagePath = `/img/projects/${props.project.id}.png`;

  return (
    <Card>
      <div className={flex({ position: 'relative', justify: 'center' })}>
        <div className={css({ position: 'absolute', left: 0, top: 0 })}>
          <ButtonLink
            className={hstack({
              background: 'black',
              opacity: 0.5,
              roundedBottomRight: 'md',
              borderRightWidth: 1,
              borderBottomWidth: 1,
              borderColor: 'white/25',
              height: '100%',
              alignItems: 'center',
              paddingX: 2,
              paddingY: 1,
              gap: 1,
              _hover: { opacity: 0.75 },
              color: 'white',
            })}
            href="/"
          >
            <Icon name="Back" className={css({ height: 4 })} />
            <span>Home</span>
          </ButtonLink>
        </div>
        <h2
          className={css({
            margin: 4,
            fontSize: '3xl',
            fontWeight: 'normal',
            color: 'white',
          })}
        >
          {props.project.title}
        </h2>
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
        {props.project.steamEmbed && (
          <div className={stack({ width: '100%' })}>
            <p>{props.project.steamEmbed.description}</p>
            <SteamEmbed appId={props.project.steamEmbed.appId} />
          </div>
        )}
        <div
          className={stack({
            alignItems: 'center',
            justify: 'center',
          })}
        >
          {props.project.buttons.map((button, index) => (
            <IconButton
              key={button.url}
              href={button.url}
              iconName={button.icon}
              className={
                index > 0
                  ? css({ background: 'purple', paddingY: 1 })
                  : css({
                      background: 'cta',
                      color: 'purple',
                      fontWeight: 'bold',
                    })
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
            title={`${props.project.title} video.`}
          />
        )}
        {props.videos && props.videos.length > 0 && (
          <Section title="More Videos">
            <div className={hstack({ flexWrap: 'wrap', justify: 'center' })}>
              {props.videos.map((video) => (
                <ButtonLink
                  className={css({
                    rounded: 'lg',
                    overflow: 'hidden',
                    position: 'relative',
                  })}
                  key={video.url}
                  href={video.url}
                >
                  <div className={css({ fontSize: 0 })}>
                    <Image
                      width={320}
                      height={180}
                      src={video.image}
                      alt={video.title ?? `${props.project.title} video`}
                      priority
                    />
                  </div>
                  <span
                    className={css({
                      position: 'absolute',
                      top: 0,
                      fontSize: 'xs',
                      fontWeight: 'semibold',
                      background: 'black/75',
                      margin: 1,
                      rounded: 'lg',
                      padding: 1,
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
                    className={flex({
                      position: 'relative',
                      rounded: 'lg',
                      overflow: 'hidden',
                    })}
                  >
                    <Image src={article.image} width={160} height={90} alt="" />
                    <div
                      className={css({ position: 'absolute', top: 0, left: 0 })}
                    >
                      <Image
                        src={article.favicon}
                        width={32}
                        height={32}
                        className={css({
                          roundedBottomRight: 'md',
                          background: 'white',
                        })}
                        alt={article.siteName}
                      />
                    </div>
                  </div>
                  <div className={css({ flex: 1 })}>
                    {article.siteName && (
                      <p className={css({ fontWeight: 'bold' })}>
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
