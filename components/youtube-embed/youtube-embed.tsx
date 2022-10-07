import * as React from 'react';
import Image from 'next/image';
import { YouTubeIcon } from './youtube-icon';
import { YoutubePlayerParameters, YoutubePosterQuality } from './youtube-types';
import YouTubePlayer from 'yt-player';

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
    /(youtu.*be.*)\/(watch\?v=|embed\/|v|shorts|)(.*?((?=[&#?])|$))/gm
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
      className="rounded overflow-hidden relative aspect-video"
      data-title={title}
      {...props}
    >
      <div ref={videoRef} className="w-full h-full absolute top-0 left-0" />
      <div className="absolute top-0 left-0 h-full w-full -z-10">
        <Image src={posterUrl} layout="fill" priority />
      </div>
      {!isPlaying && (
        <button
          onClick={addIframe}
          aria-label="Play"
          type="button"
          className="relative h-full w-full opacity-80 text-black hover:opacity-100 hover:text-itch"
        >
          <YouTubeIcon className="m-auto w-24 h-24" />
          <noscript>
            <a
              href={`https://www.youtube.com/watch?v=${videoId}`}
              className="block absolute w-full h-full z-10 top-0 right-0"
              target="_blank"
              rel="noopener"
            />
          </noscript>
        </button>
      )}
    </div>
  );
};
