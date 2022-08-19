import Link from 'next/link';
import { DetailedHTMLProps, AnchorHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

type Props = DetailedHTMLProps<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
>;

export const ButtonLink: React.FunctionComponent<Props> = ({
  children,
  className,
  href,
  ...props
}) => {
  const isExternal = href?.startsWith('http');

  return (
    <Link href={href || '#'}>
      <a
        className={twMerge(
          className,
          'hover:scale-105 hover:brightness-125 transition-all will-change-transform'
        )}
        {...props}
        target={isExternal ? '_blank' : undefined}
        rel={isExternal ? 'noopener' : undefined}
      >
        {children}
      </a>
    </Link>
  );
};
