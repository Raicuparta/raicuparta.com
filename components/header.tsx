import Image from 'next/image';
import { ButtonLink } from './button-link';

type Props = {
  title: string;
};

export const Header = ({ title }: Props) => (
  <header className="bg-overlay p-4 overflow-hidden">
    <ButtonLink href="/" className="flex gap-4 justify-center items-center">
      <span className="h-14 w-14 relative">
        <Image
          height="120"
          width="120"
          layout="responsive"
          src="/img/wario.png"
          className="rounded-full"
          alt="Raicuparta"
          priority
        />
      </span>
      <h1 className="text-4xl">{title}</h1>
    </ButtonLink>
  </header>
);
