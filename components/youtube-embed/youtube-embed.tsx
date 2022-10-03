// Ripped off from https://github.com/danestves/lite-embed
// Wasn't able to get it working as a dependency so had to copy it.

import * as React from 'react';
import Image from 'next/image';
import { YouTubeIcon } from './youtube-icon';
import { YoutubePlayerParameters, YoutubePosterQuality } from './youtube-types';

export interface YouTubeLiteProps
  extends React.ComponentPropsWithoutRef<'div'> {
  /**
   * This can be either an url to a video or a video ID.
   */
  urlOrId: string;
  /**
   * The aspect ratio of the video.
   *
   * @default 16/9
   */
  aspectRatio?: number;
  /**
   * A custom thumbnail image url to show instead of the original youtube thumbnail
   */
  customThumbnail?: string;
  /**
   * Properties of the iframe element.
   */
  iframeProps?: React.ComponentPropsWithoutRef<'iframe'>;
  /**
   * By appending parameters to the IFrame URL, you can customize the playback experience in your application.
   * For example, you can automatically play videos using the [`autoplay`](https://developers.google.com/youtube/player_parameters#autoplay)
   * parameter or cause a video to play repeatedly using the [`loop`](https://developers.google.com/youtube/player_parameters#loop) parameter.
   * You can also use the [`enablejsapi`](https://developers.google.com/youtube/player_parameters#enablejsapi) parameter to enable the player
   * to be controlled via the [IFrame Player API](https://developers.google.com/youtube/iframe_api_reference).
   *
   * List of available parameters:
   * https://developers.google.com/youtube/player_parameters#Parameters
   */
  playerParameters?: YoutubePlayerParameters;
  /**
   * The different quality to show the poster
   * see: https://developers.google.com/youtube/v3/docs/thumbnails
   * for more information
   *
   * @default "hqdefault"
   */
  poster?: YoutubePosterQuality;
  /**
   * The `data-title` to insert in the `iframe`
   */
  title: string;
}

function getYouTubeId(url: string) {
  const arr = url.split(
    /(youtu.*be.*)\/(watch\?v=|embed\/|v|shorts|)(.*?((?=[&#?])|$))/gm
  );

  return undefined !== arr[3] ? arr[3] : arr[0];
}

export type WarmConnectionsProps = {
  preconnected: boolean;
  setPreconnected: (preconnected: boolean) => void;
};

type YoutubeOptions = {
  isPlaylist?: boolean;
  url: string;
  videoId: string;
  opts?: YoutubePlayerParameters;
};

function getYoutubePlayerOptions({
  url,
  videoId,
  isPlaylist,
  opts,
}: YoutubeOptions) {
  let options: YoutubePlayerParameters = {
    ...(!isPlaylist
      ? {
          autoplay: '1',
        }
      : {
          list: videoId,
        }),
    ...opts,
  };

  let params = new URLSearchParams(options);

  return `${url}?${params.toString()}`;
}

function RenderYouTubeLite(
  {
    urlOrId,
    aspectRatio = 16 / 9,
    customThumbnail,
    iframeProps,
    playerParameters,
    poster = 'hqdefault',
    title,
    ...props
  }: YouTubeLiteProps,
  ref: React.ForwardedRef<HTMLDivElement>
) {
  const [iframe, setIframe] = React.useState(false);

  const videoId = encodeURIComponent(getYouTubeId(urlOrId));
  const posterUrl =
    typeof customThumbnail === 'string'
      ? customThumbnail
      : `https://i.ytimg.com/vi/${videoId}/${poster}.jpg`;
  const youtubeUrl = 'https://www.youtube-nocookie.com';
  const iframeSrc = `${youtubeUrl}/embed/${videoId}`;

  const addIframe = () => {
    if (iframe) return;

    setIframe(true);
  };

  return (
    <div
      className="rounded overflow-hidden relative aspect-video"
      data-title={title}
      ref={ref}
      {...props}
    >
      {iframe ? (
        <iframe
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          data-testid="le-yt-iframe"
          className="w-full h-full bg-black"
          src={getYoutubePlayerOptions({
            url: iframeSrc,
            videoId,
            ...playerParameters,
          })}
          title={title}
          {...iframeProps}
        ></iframe>
      ) : (
        <>
          <div className="absolute top-0 left-0 h-full w-full -z-10">
            <Image src={posterUrl} layout="fill" priority />
          </div>
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
        </>
      )}
    </div>
  );
}

const YouTubeLite = React.forwardRef(RenderYouTubeLite);

export default YouTubeLite;
