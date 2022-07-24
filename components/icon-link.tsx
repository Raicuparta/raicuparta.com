import assets from '../svg-assets';
import { twMerge } from 'tailwind-merge';
import { ButtonLink } from './button-link';
import { Icon } from './icon';

type Props = {
  name: keyof typeof assets;
  title: string;
  url: string;
  className?: string;
};

export const IconLink = (props: Props) => {
  return (
    <ButtonLink
      className={twMerge('w-8', props.className)}
      href={props.url}
      title={props.title}
    >
      <Icon className="fill-darkWhite drop-shadow" name={props.name} />
    </ButtonLink>
  );
};
