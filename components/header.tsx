import { ButtonLink } from './button-link';

type Props = {
  title: string;
};

export const Header = ({ title }: Props) => (
  <header className="bg-overlay p-4 overflow-hidden">
    <ButtonLink href="/" className="flex gap-4 justify-center items-center">
      <img
        height="60"
        width="60"
        src="img/wario.png"
        className="rounded-full"
      />
      <h1 className="text-4xl">{title}</h1>
    </ButtonLink>
  </header>
);
