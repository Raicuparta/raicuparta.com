import assets from '../svg-assets';
import { twMerge } from 'tailwind-merge';
import { ButtonLink } from './button-link';
import { Icon } from './icon';

export type IconInfo = {
  iconName: keyof typeof assets;
  title: string;
  url: string;
  displayName?: string;
};

interface Props extends IconInfo {
  className?: string;
}

export const IconLink = (props: Props) => {
  return (
    <ButtonLink
      className={twMerge(
        'w-8 flex flex-col items-center drop-shadow',
        props.className
      )}
      href={props.url}
      title={props.title}
    >
      <Icon className="fill-darkWhite" name={props.iconName} />
      {props.displayName && (
        <div className="text-center text-xs">{props.displayName}</div>
      )}
    </ButtonLink>
  );
};
