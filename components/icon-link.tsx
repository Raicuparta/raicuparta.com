import assets from '../svg-assets';
import { Icon, ButtonLink } from '.';
import { twMerge } from 'tailwind-merge';

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
