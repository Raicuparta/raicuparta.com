import { DetailedHTMLProps, AnchorHTMLAttributes } from 'react';

type Props = DetailedHTMLProps<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
>;

export const Link: React.FunctionComponent<Props> = ({
  children,
  ...props
}) => (
  <a {...props} target="_blank" rel="noopener noreferrer">
    {children}
  </a>
);