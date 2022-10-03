import { AnchorHTMLAttributes, DetailedHTMLProps } from 'react';

interface Props
  extends DetailedHTMLProps<
    AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  > {
  isExternal?: boolean;
}

export const TextLink = ({ isExternal = true, ...props }: Props) => (
  <a
    className="underline font-normal text-darkWhite hover:text-white"
    {...props}
    target={isExternal ? '_blank' : undefined}
    rel={isExternal ? 'noopener' : undefined}
  />
);
