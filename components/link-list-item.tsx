import { flex, hstack } from '../styled-system/patterns';
import { ButtonLink } from './button-link';

export type LinkInfo = {
  url: string;
  children: React.ReactNode;
};

export const LinkListItem = (props: LinkInfo) => (
  <ButtonLink
    className={hstack({
      background: 'overlay',
      width: '100%',
      padding: 2,
      rounded: 'lg',
      alignItems: 'center',
    })}
    target="_blank"
    rel="noopener"
    key={props.url}
    href={props.url}
  >
    {props.children}
  </ButtonLink>
);
