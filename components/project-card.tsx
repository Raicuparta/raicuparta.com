import Image from 'next/image';
import { css, cx } from '../styled-system/css';
import { flex, stack } from '../styled-system/patterns';

type Props = {
  src: string;
  title: string;
  description?: string;
  className?: string;
};

export const ProjectCard = (props: Props) => (
  <div
    className={cx(
      flex({
        rounded: 'lg',
        overflow: 'hidden',
        background: 'overlay',
      }),
      props.className,
    )}
  >
    <div
      className={css({
        maxWidth: 150,
        minWidth: 150,
        position: 'relative',
      })}
    >
      <Image
        src={props.src}
        fill
        quality={30}
        alt={props.title}
        priority
        className={css({ objectFit: 'cover' })}
      />
    </div>
    <div className={stack({ padding: 4, gap: 4 })}>
      <div
        className={css({
          lineHeight: 1,
          fontSize: 'xl',
          color: 'white',
          fontWeight: 'medium',
        })}
      >
        {props.title}
      </div>
      {props.description && (
        <div
          className={css({
            fontSize: 'md',
          })}
        >
          {props.description}
        </div>
      )}
    </div>
  </div>
);
