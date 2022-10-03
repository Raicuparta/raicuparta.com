// Ripped off from https://github.com/danestves/lite-embed
// Wasn't able to get it working as a dependency so had to copy it.

import * as React from 'react';
import type * as Stitches from '@stitches/react';
import * as AspectRatio from '@radix-ui/react-aspect-ratio';
import type * as Youtube from 'youtube-player/dist/types';
import { createStitches } from '@stitches/react';
import Image from 'next/image';

export const { styled } = createStitches();

function YouTubeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      height="1em"
      viewBox="0 0 68 48"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M66.52 7.74c-.78-2.93-2.49-5.41-5.42-6.19C55.79.13 34 0 34 0S12.21.13 6.9 1.55c-2.93.78-4.63 3.26-5.42 6.19C.06 13.05 0 24 0 24s.06 10.95 1.48 16.26c.78 2.93 2.49 5.41 5.42 6.19C12.21 47.87 34 48 34 48s21.79-.13 27.1-1.55c2.93-.78 4.64-3.26 5.42-6.19C67.94 34.95 68 24 68 24s-.06-10.95-1.48-16.26z"
        fill="currentColor"
      />
      <path d="M45 24 27 14v20" fill="#fff" />
    </svg>
  );
}

const StyledAspectRatio = styled(AspectRatio.Root, {
  backgroundColor: '#000',
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  contain: 'content',
  cursor: 'pointer',
  borderRadius: '10px',
  overflow: 'hidden',
  '& iframe': {
    border: 0,
    height: '100%',
    width: '100%',
  },
});

const StyledButton = styled('button', {
  appearance: 'none',
  border: 0,
  boxSizing: 'border-box',
  height: 'auto',
  left: '50%',
  margin: 0,
  outline: 'none',
  padding: 0,
  position: 'absolute',
  top: '50%',
  transform: 'translate3d(-50%, -50%, 0)',
  width: 68,
  zIndex: 1,
});

const StyledIframe = styled('iframe', {});

export interface IframeProps extends React.ComponentPropsWithoutRef<'iframe'> {
  /**
   * It’s like the style attribute, but it supports tokens, media queries, nesting and token-aware values.
   */
  css?: Stitches.CSS;
}

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
   * Preconnect or not doubleclick ads, this is the adnetwork from Google.
   *
   * @default false
   */
  adNetwork?: boolean;
  /**
   * The aspect ratio of the video.
   *
   * @default 16/9
   */
  aspectRatio?: number;
  /**
   * It’s like the style attribute, but it supports tokens, media queries, nesting and token-aware values.
   */
  css?: Stitches.CSS;
  /**
   * A custom thumbnail image url to show instead of the original youtube thumbnail
   *
   * @default false
   */
  customThumbnail?: string;
  /**
   * Properties of the iframe element.
   */
  iframeProps?: IframeProps;
  /**
   * If you use GDPR and don't want YouTube cookies enable this option
   *
   * @default false
   */
  noCookie?: boolean;
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
  adNetwork?: boolean;
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
  adNetwork,
}: WarmConnectionsProps) {
  if (preconnected) return;

  // The iframe document and the majority of its subresources are all taken directly from youtube.com.
  addPrefetch('preconnect', 'https://www.youtube-nocookie.com');
  // The botguard script can be found on google.com.
  addPrefetch('preconnect', 'https://www.google.com');

  // These ad-related domains may or may not be on the critical path. Domain-specific throttling could be used to confirm.
  if (adNetwork) {
    addPrefetch('preconnect', 'https://googleads.g.doubleclick.net');
    addPrefetch('preconnect', 'https://static.doubleclick.net');
  }

  setPreconnected(true);
}

function RenderYouTubeLite(
  {
    urlOrId,
    adNetwork,
    aspectRatio = 16 / 9,
    css,
    customThumbnail,
    iframeProps,
    noCookie = true,
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
  const youtubeUrl = noCookie
    ? 'https://www.youtube-nocookie.com'
    : 'https://www.youtube.com';
  const iframeSrc = !playlist
    ? `${youtubeUrl}/embed/${videoId}`
    : `${youtubeUrl}/embed/videoseries`;

  const warmConnections = () => {
    return warmYoutubeConnections({
      preconnected,
      setPreconnected,
      adNetwork,
    });
  };

  const addIframe = () => {
    if (iframe) return;

    setIframe(true);
  };

  return (
    <StyledAspectRatio
      css={{
        ...css,
        '&::before': { content: iframe ? 'none' : '""' },
      }}
      data-title={title}
      ratio={aspectRatio}
      ref={ref}
      {...props}
    >
      {iframe ? (
        <StyledIframe
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          data-testid="le-yt-iframe"
          height={315}
          src={getYoutubePlayerOptions({
            url: iframeSrc,
            videoId,
            isPlaylist: playlist,
            ...playerParameters,
          })}
          title={title}
          width={560}
          {...iframeProps}
        ></StyledIframe>
      ) : (
        <>
          <div className="absolute top-0 left-0 h-full w-full -z-10">
            <Image src={posterUrl} layout="fill" width={16} height={9} />
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
    </StyledAspectRatio>
  );
}

const YouTubeLite = React.forwardRef(RenderYouTubeLite);

export default YouTubeLite;
