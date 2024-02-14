import Link from 'next/link';
import { ComponentProps } from 'react';
import { css, cx } from '../styled-system/css';

type Props = ComponentProps<typeof Link>;

export const ButtonLink: React.FunctionComponent<Props> = ({
  children,
  className,
  href,
  ...props
}) => {
  const isExternal = href.toString().startsWith('http');

  return (
    <Link
      href={href || '#'}
      className={cx(
        css({
          _hover: {
            filter: 'brightness(125%)',
          },
        }),
        className,
      )}
      {...props}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener' : undefined}
    >
      {children}
    </Link>
  );
};
