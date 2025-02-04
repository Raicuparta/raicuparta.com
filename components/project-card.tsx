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
      style={{ backgroundImage: `url(${props.src})` }}
      className={css({
        width: 150,
        maxWidth: 150,
        minWidth: 150,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backdropBlur: 'xl',
      })}
    />
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
