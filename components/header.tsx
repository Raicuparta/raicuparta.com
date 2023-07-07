import Image from 'next/image';
import { ButtonLink } from './button-link';
import svgAssets from '../svg-assets';
import { Icon } from './icon';

type Props = {
  title: string;
};

export const Header = ({ title }: Props) => (
  <header className="bg-overlay p-4 overflow-hidden">
    <ButtonLink href="/" className="flex gap-4 justify-center items-center">
      <span className="h-14 w-14 relative">
        <Icon name="Avatar" className="rounded-full" />
      </span>
      <h1 className="text-4xl">{title}</h1>
    </ButtonLink>
  </header>
);
