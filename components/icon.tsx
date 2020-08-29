import assets from '../svg-assets';

type Props = {
  name: keyof typeof assets;
  className?: string;
};

export const Icon = ({ name, className }: Props) => {
  const SvgIcon = assets[name];
  return <SvgIcon className={className} />;
};
