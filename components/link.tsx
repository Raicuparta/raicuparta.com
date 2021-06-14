import { DetailedHTMLProps, AnchorHTMLAttributes } from 'react';
import styles from './styles/link.module.scss';

type Props = DetailedHTMLProps<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
>;

export const Link: React.FunctionComponent<Props> = ({
  children,
  ...props
}) => (
  <a
    className={styles.link}
    {...props}
    target="_blank"
    rel="noopener noreferrer"
  >
    {children}
  </a>
);
