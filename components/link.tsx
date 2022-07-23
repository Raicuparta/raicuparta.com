import { DetailedHTMLProps, AnchorHTMLAttributes } from 'react';
import styles from './styles/link.module.scss';
import { twMerge } from 'tailwind-merge';

type Props = DetailedHTMLProps<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
>;

export const Link: React.FunctionComponent<Props> = ({
  children,
  className,
  ...props
}) => (
  <a
    className={twMerge(
      className,
      'hover:scale-110 transition-transform will-change-transform'
    )}
    {...props}
    target="_blank"
    rel="noopener noreferrer"
  >
    {children}
  </a>
);
