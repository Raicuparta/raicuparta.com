import { flex, hstack } from '../styled-system/patterns';

export type LinkInfo = {
  url: string;
  children: React.ReactNode;
};

export const LinkListItem = (props: LinkInfo) => (
  <a
    className={hstack({
      background: 'white/20',
      width: '100%',
      padding: 2,
      rounded: 'lg',
      alignItems: 'center',
      _hover: {
        background: 'white/40',
      },
    })}
    target="_blank"
    rel="noopener"
    key={props.url}
    href={props.url}
  >
    {props.children}
  </a>
);
