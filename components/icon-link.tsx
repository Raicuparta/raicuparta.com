import assets from '../svg-assets';
import { Icon, ButtonLink } from '.';

type Props = {
  name: keyof typeof assets;
  title: string;
  url: string;
};

export const IconLink = ({ name, title, url }: Props) => {
  return (
    <ButtonLink className="w-8" href={url} title={title}>
      <Icon className="fill-darkWhite" name={name} />
    </ButtonLink>
  );
};
