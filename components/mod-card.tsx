import Image from 'next/image';
import { IconButton } from './icon-button';
import { ButtonLink } from './button-link';
import { LinkList } from './link-list';
import { Section } from './section';
import { ModImage } from './mod-image';
import { IconLink } from './icon-link';
import { Mod } from '../pages/[modPage]';
import YoutubeLite from './youtube-embed';

export const ModCard = (props: Mod) => {
  const imagePath = `/mods/${props.gameKey}/mod.jpg`;
  return (
    <div className="rounded bg-overlay bg-opacity-20 relative overflow-hidden">
      <IconLink
        iconName="Return"
        title="Return to home page"
        url="/"
        className="absolute top-4 left-4 z-20"
      />
      <div className="relative flex justify-center">
        <ModImage
          src={imagePath}
          width={400}
          title={props.title}
          gameName={props.gameName}
        />
        <div className="absolute top-0 -z-10 w-full h-full overflow-hidden">
          <Image
            className="w-full h-full object-cover blur-lg"
            src={imagePath}
            layout="fill"
            priority
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
          <YoutubeLite urlOrId={props.mainVideo} poster="sddefault" />
        )}
        {props.videos.length > 0 && (
          <Section title="More Videos">
            <div className="flex flex-wrap gap-4 justify-center">
              {props.videos.map((videoUrl, index) => (
                <ButtonLink
                  className="rounded overflow-hidden"
                  key={videoUrl}
                  href={videoUrl}
                >
                  <div className="text-zero">
                    <Image
                      width={160}
                      height={90}
                      src={`/mods/${props.gameKey}/videos/${index}.jpg`}
                    />
                  </div>
                </ButtonLink>
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
