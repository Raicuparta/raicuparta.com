import { css } from '../styled-system/css';
import { circle, hstack, stack, vstack } from '../styled-system/patterns';
import { ButtonLink } from './button-link';
import { Icon } from './icon';
import { MouseEventHandler, useState } from 'react';
import { SocialLinks } from './social-links';

export const Header = () => {
  const [isFancy, setIsFancy] = useState(false);

  const onClickAvatar: MouseEventHandler<HTMLSpanElement> = (event) => {
    event.preventDefault();
    setIsFancy((currentIsFancy) => !currentIsFancy);
  };

  return (
    <header
      className={stack({
        background: 'overlay',
        padding: 2,
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
        <h1>Raicuparta</h1>
      </ButtonLink>

      <SocialLinks />
    </header>
  );
};
