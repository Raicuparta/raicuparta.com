import { cx, css } from '../styled-system/css';

export const Card = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<'div'>) => (
  <div
    className={cx(
      css({ rounded: 'md', background: 'overlay', overflow: 'hidden' }),
      className,
    )}
    {...props}
  />
);
