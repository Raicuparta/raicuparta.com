// Ripped off from https://github.com/danestves/lite-embed
// Wasn't able to get it working as a dependency so had to copy it.

import * as React from 'react';
import * as AspectRatio from '@radix-ui/react-aspect-ratio';
import type * as Youtube from 'youtube-player/dist/types';
import Image from 'next/image';
import { YouTubeIcon } from './youtube-icon';

export type YoutubePosterQuality =
  | 'maxresdefault'
  | '0'
  | '1'
  | '2'
  | '3'
  | 'default'
  | 'hqdefault'
  | 'mqdefault'
  | 'sddefault';

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
   *
   * @default false
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
  playerParameters?: Youtube.Options['playerVars'];
  /**
   * If the video URL contains a playlist or not
   *
   * @default false
   */
  playlist?: boolean;
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
   *
   * @default "React YouTube Lite"
   */
  title?: string;
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
  opts?: Youtube.Options['playerVars'];
};

function getYoutubePlayerOptions({
  url,
  videoId,
  isPlaylist,
  opts,
}: YoutubeOptions) {
  let options: Youtube.Options['playerVars'] = {
    ...(!isPlaylist
      ? {
          autoplay: 1,
        }
      : {
          list: videoId,
        }),
    ...opts,
  };
  // @ts-ignore: we can use numbers on the values
  let params = new URLSearchParams(options);

  return `${url}?${params.toString()}`;
}

function addPrefetch(rel: string, href: string, as?: string) {
  let element = document.querySelector(`link[rel="${rel}"][href="${href}"]`);
  if (element) {
    return;
  }

  let linkEl = document.createElement('link');

  linkEl.setAttribute('rel', rel);
  linkEl.setAttribute('href', href);

  if (as) {
    linkEl.setAttribute('as', as);
  }

  document.head.appendChild(linkEl);
}

function warmYoutubeConnections({
  preconnected,
  setPreconnected,
}: WarmConnectionsProps) {
  if (preconnected) return;

  // The iframe document and the majority of its subresources are all taken directly from youtube.com.
  addPrefetch('preconnect', 'https://www.youtube-nocookie.com');
  // The botguard script can be found on google.com.
  addPrefetch('preconnect', 'https://www.google.com');

  setPreconnected(true);
}

function RenderYouTubeLite(
  {
    urlOrId,
    aspectRatio = 16 / 9,
    customThumbnail,
    iframeProps,
    playerParameters,
    playlist,
    poster = 'hqdefault',
    title,
    ...props
  }: YouTubeLiteProps,
  ref: React.ForwardedRef<HTMLDivElement>
) {
  const [preconnected, setPreconnected] = React.useState(false);
  const [iframe, setIframe] = React.useState(false);

  const videoId = encodeURIComponent(getYouTubeId(urlOrId));
  const posterUrl =
    typeof customThumbnail === 'string'
      ? customThumbnail
      : `https://i.ytimg.com/vi/${videoId}/${poster}.jpg`;
  const youtubeUrl = 'https://www.youtube-nocookie.com';
  const iframeSrc = !playlist
    ? `${youtubeUrl}/embed/${videoId}`
    : `${youtubeUrl}/embed/videoseries`;

  const warmConnections = () => {
    return warmYoutubeConnections({
      preconnected,
      setPreconnected,
    });
  };

  const addIframe = () => {
    if (iframe) return;

    setIframe(true);
  };

  return (
    <AspectRatio.Root
      className="rounded overflow-hidden"
      data-title={title}
      ratio={aspectRatio}
      ref={ref}
      {...props}
    >
      {iframe ? (
        <iframe
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          data-testid="le-yt-iframe"
          height={315}
          className="w-full h-full bg-black"
          src={getYoutubePlayerOptions({
            url: iframeSrc,
            videoId,
            isPlaylist: playlist,
            ...playerParameters,
          })}
          title={title}
          width={560}
          {...iframeProps}
        ></iframe>
      ) : (
        <>
          <div className="absolute top-0 left-0 h-full w-full -z-10">
            <Image src={posterUrl} layout="fill" priority />
          </div>
          <button
            onClick={addIframe}
            onPointerOver={warmConnections}
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
    </AspectRatio.Root>
  );
}

const YouTubeLite = React.forwardRef(RenderYouTubeLite);

export default YouTubeLite;
