import assets from '../svg-assets';
import { ButtonLink } from './button-link';
import { Icon } from './icon';
import { css, cx } from '../styled-system/css';
import { flex } from '../styled-system/patterns';

type Props = {
  iconName: keyof typeof assets;
  title: string;
  url: string;
  className?: string;
};

export const IconLink = (props: Props) => {
  return (
    <ButtonLink
      className={cx(
        flex({
          width: 6,
          position: 'relative',
          justify: 'center',
          color: 'darkWhite',
        }),
        'group',
      )}
      href={props.url}
      title={props.title}
    >
      <Icon className={css({ fill: 'darkWhite' })} name={props.iconName} />
      <div
        className={css({
          backgroundColor: 'purple',
          paddingX: 1,
          rounded: 'lg',
          textAlign: 'center',
          fontSize: 'xs',
          position: 'absolute',
          bottom: 6,
          visibility: 'hidden',
          _groupHover: {
            visibility: 'visible',
          },
        })}
      >
        {props.title}
      </div>
    </ButtonLink>
  );
};
