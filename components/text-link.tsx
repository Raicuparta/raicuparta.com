import Link from 'next/link';
import { css } from '../styled-system/css';

interface Props extends React.ComponentProps<typeof Link> {
  isExternal?: boolean;
}

export const TextLink = ({ isExternal = true, href, ...props }: Props) => (
  <Link
    href={href ?? '#'}
    className={css({
      textDecoration: 'underline',
      fontWeight: 'normal',
      color: 'darkWhite',
      _hover: {
        color: 'white',
      },
    })}
    target={isExternal ? '_blank' : undefined}
    rel={isExternal ? 'noopener noreferrer' : undefined}
    {...props}
  />
);
