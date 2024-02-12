import assets from '../svg-assets';
import { twMerge } from 'tailwind-merge';
import { ButtonLink } from './button-link';
import { Icon } from './icon';

type Props = {
  iconName: keyof typeof assets;
  title: string;
  url: string;
  className?: string;
};

export const IconLink = (props: Props) => {
  return (
    <ButtonLink
      className={twMerge(
        'w-6 flex flex-col items-center justify-between group',
        props.className,
      )}
      href={props.url}
      title={props.title}
    >
      <Icon className="fill-darkWhite" name={props.iconName} />
      <div className="text-center text-xs absolute top-6 invisible group-hover:visible">
        {props.title}
      </div>
    </ButtonLink>
  );
};
