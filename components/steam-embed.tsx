import { css } from '../styled-system/css';

type Props = {
  appId: string;
  utmSource?: string;
};

export function SteamEmbed(props: Props) {
  const iframeUrl = new URL(
    `https://store.steampowered.com/widget/${props.appId}/`,
  );
  if (props.utmSource) {
    iframeUrl.searchParams.set('utm_source', props.utmSource);
  }

  return (
    <div
      className={css({
        overflowX: 'auto',
      })}
    >
      <iframe
        src={iframeUrl.toString()}
        className={css({
          minWidth: 450,
          width: '100%',
          height: 190,
        })}
      ></iframe>
    </div>
  );
}
