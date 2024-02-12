import { ButtonLink } from './button-link';
import { Icon } from './icon';
import { MouseEventHandler, useState } from 'react';

type Props = {
  title: string;
};

export const Header = ({ title }: Props) => {
  const [isFancy, setIsFancy] = useState(false);

  const onClickAvatar: MouseEventHandler<HTMLSpanElement> = (event) => {
    event.preventDefault();
    setIsFancy((currentIsFancy) => !currentIsFancy);
  };

  return (
    <header className="bg-overlay px-4 pt-4 overflow-hidden">
      <ButtonLink href="/" className="flex gap-4 justify-center items-center">
        <span className="h-10 w-10 relative" onClick={onClickAvatar}>
          <Icon
            name={isFancy ? 'AvatarFancy' : 'Avatar'}
            className="rounded-full"
          />
        </span>
        <h1 className="text-3xl">{title}</h1>
      </ButtonLink>
    </header>
  );
};
