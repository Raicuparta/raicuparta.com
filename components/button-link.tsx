import Link from 'next/link';
import { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

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
      className={twMerge(
        className,
        'hover:brightness-125 will-change-transform',
      )}
      {...props}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener' : undefined}
    >
      {children}
    </Link>
  );
};
