import { css } from '../styled-system/css';
import { stack } from '../styled-system/patterns';
import { Card } from './card';

type Props = {
  children: React.ReactNode;
  title?: string;
  description?: string;
  id: string;
};

export const MainPageSection = (props: Props) => (
  <Card
    className={stack({ padding: 4, lineHeight: 1.5, gap: 4 })}
    id={props.id}
  >
    {props.title && (
      <h2
        className={css({
          color: 'white',
          fontSize: '2xl',
          fontWeight: 'normal',
          textAlign: 'center',
          lineHeight: 0.8,
        })}
      >
        {props.title}
      </h2>
    )}
    {props.description && <p>{props.description}</p>}
    <div className={stack()}>{props.children}</div>
  </Card>
);
