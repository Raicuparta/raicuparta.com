import { AnchorHTMLAttributes, DetailedHTMLProps } from 'react';

type Props = DetailedHTMLProps<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
>;

export const TextLink = (props: Props) => (
  <a
    className="underline font-normal text-darkWhite hover:text-white"
    {...props}
    target={'_blank'}
    rel={'noopener noreferrer'}
  />
);
