import { IconName } from '../svg-assets';
import { Icon } from './icon';
import { ButtonLink } from './button-link';
import { css, cx } from '../styled-system/css';
import { flex } from '../styled-system/patterns';

interface Props extends React.ComponentPropsWithoutRef<'a'> {
  children: React.ReactNode;
  iconName: IconName;
}

export const IconButton = ({
  iconName,
  className,
  children,
  href,
  ...props
}: Props) => (
  <ButtonLink
    className={cx(flex({ padding: 2, rounded: 'lg' }), className)}
    {...props}
    href={href ?? '#'}
  >
    <div>
      <Icon className={css({ marginRight: 2, height: 6 })} name={iconName} />
    </div>
    {children}
  </ButtonLink>
);
