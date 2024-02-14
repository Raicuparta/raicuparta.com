import Image from 'next/image';
import { css, cx } from '../styled-system/css';

type Props = {
  src: string;
  title: string;
  description?: string;
  className?: string;
};

export const ModImage = (props: Props) => (
  <div
    className={cx(css({ rounded: 'lg', overflow: 'hidden' }), props.className)}
  >
    <Image
      className={css({
        objectFit: 'contain',
      })}
      src={props.src}
      alt={props.title}
      width={1400}
      height={400}
      priority
    />
    {props.description && (
      <div
        className={css({
          background: 'overlay',
          textAlign: 'center',
          fontSize: 'lg',
          padding: 1,
        })}
      >
        {props.description}
      </div>
    )}
  </div>
);
