import * as React from 'react';
import Image from 'next/image';
import { YouTubeIcon } from './youtube-icon';
import { YoutubePlayerParameters, YoutubePosterQuality } from './youtube-types';
import YouTubePlayer from 'yt-player';
import { css } from '../../styled-system/css';

interface Props extends React.ComponentPropsWithoutRef<'div'> {
  urlOrId: string;
  aspectRatio?: number;
  customThumbnail?: string;
  iframeProps?: React.ComponentPropsWithoutRef<'iframe'>;
  playerParameters?: YoutubePlayerParameters;
  poster?: YoutubePosterQuality;
  title: string;
}

function getYouTubeId(url: string) {
  const arr = url.split(
    /(youtu.*be.*)\/(watch\?v=|embed\/|v|shorts|)(.*?((?=[&#?])|$))/gm,
  );

  return undefined !== arr[3] ? arr[3] : arr[0];
}

export const YoutubeEmbed = ({
  urlOrId,
  aspectRatio = 16 / 9,
  customThumbnail,
  iframeProps,
  playerParameters,
  poster = 'hqdefault',
  title,
  ...props
}: Props) => {
  const [isPlaying, setIsPlaying] = React.useState(false);
  const videoRef = React.useRef<HTMLDivElement>(null);

  const videoId = encodeURIComponent(getYouTubeId(urlOrId));
  const posterUrl =
    typeof customThumbnail === 'string'
      ? customThumbnail
      : `https://i.ytimg.com/vi/${videoId}/${poster}.jpg`;

  const addIframe = () => {
    if (!videoRef.current) return;

    const player = new YouTubePlayer(videoRef.current, {
      host: 'https://www.youtube-nocookie.com',
    });
    player.load(videoId, true);

    setIsPlaying(true);
  };

  return (
    <div
      className={css({
        rounded: 'md',
        overflow: 'hidden',
        position: 'relative',
        width: '100%',
        aspectRatio: '16/9',
      })}
      data-title={title}
      {...props}
    >
      <div
        className={css({
          position: 'absolute',
          top: 0,
          left: 0,
          height: '100%',
          width: '100%',
        })}
      >
        <Image src={posterUrl} fill priority alt={title} />
      </div>
      <div
        ref={videoRef}
        className={css({
          position: 'absolute',
          top: 0,
          left: 0,
          height: '100%',
          width: '100%',
        })}
      />
      {!isPlaying && (
        <button
          onClick={addIframe}
          aria-label="Play"
          type="button"
          className={css({
            position: 'relative',
            height: '100%',
            width: '100%',
            opacity: 0.8,
            color: 'black',
            _hover: {
              opacity: 0.8,
              color: 'red', // TODO check color
            },
          })}
        >
          <YouTubeIcon
            className={css({ margin: 'auto', width: 24, height: 24 })}
          />
          <noscript>
            <a
              href={`https://www.youtube.com/watch?v=${videoId}`}
              className={css({
                display: 'block',
                position: 'absolute',
                top: 0,
                right: 0,
                height: '100%',
                width: '100%',
                zIndex: 10,
              })}
              target="_blank"
              rel="noopener"
            />
          </noscript>
        </button>
      )}
    </div>
  );
};
