import assets from '../svg-assets';
import { Icon, Link } from '.';

type Props = {
  name: keyof typeof assets;
  title: string;
  url: string;
};

export const IconLink = ({ name, title, url }: Props) => {
  return (
    <Link
      className="w-8 hover:scale-110 transition-transform will-change-transform opacity-80 hover:opacity-100"
      href={url}
      title={title}
    >
      <Icon className="fill-white" name={name} />
    </Link>
  );
};
