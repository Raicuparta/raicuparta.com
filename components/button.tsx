import { AnchorHTMLAttributes, DetailedHTMLProps } from 'react';
import { twMerge } from 'tailwind-merge';
import { IconName } from '../svg-assets';
import { Icon } from './icon';
import { Link } from './link';

interface Props
  extends DetailedHTMLProps<
    AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  > {
  children: React.ReactNode;
  iconName: IconName;
}

export const Button = ({ iconName, className, children, ...props }: Props) => (
  // TODO: colors
  <Link className={twMerge(className, 'flex p-2 rounded')} {...props}>
    <Icon className="fill-white mr-2 h-6" name={iconName} />
    {children}
  </Link>
);
