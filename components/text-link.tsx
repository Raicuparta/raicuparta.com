import Link from 'next/link';

interface Props extends React.ComponentProps<typeof Link> {
  isExternal?: boolean;
}

export const TextLink = ({ isExternal = true, href, ...props }: Props) => (
  <Link
    href={href ?? '#'}
    className="underline font-normal text-darkWhite hover:text-white"
    target={isExternal ? '_blank' : undefined}
    rel={isExternal ? 'noopener noreferrer' : undefined}
    {...props}
  />
);
