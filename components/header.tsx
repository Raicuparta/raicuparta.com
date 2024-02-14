import { css } from '../styled-system/css';
import { circle, hstack } from '../styled-system/patterns';
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
    <header
      className={css({
        background: 'overlay',
        paddingX: 4,
        paddingTop: 4,
        overflow: 'hidden',
        fontSize: '3xl',
      })}
    >
      <ButtonLink
        href="/"
        className={hstack({
          justify: 'center',
        })}
      >
        <span
          className={circle({ width: 10, height: 10, overflow: 'hidden' })}
          onClick={onClickAvatar}
        >
          <Icon name={isFancy ? 'AvatarFancy' : 'Avatar'} />
        </span>
        <h1>{title}</h1>
      </ButtonLink>
    </header>
  );
};
