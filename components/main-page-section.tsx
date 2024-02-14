import { css } from '../styled-system/css';
import { stack } from '../styled-system/patterns';
import { Card } from './card';

type Props = {
  children: React.ReactNode;
  title?: string;
  id: string;
};

export const MainPageSection = (props: Props) => (
  <Card className={stack({ padding: 2, lineHeight: 1.5 })} id={props.id}>
    {props.title && (
      <h2
        className={css({
          fontSize: '2xl',
          fontWeight: 'normal',
          textAlign: 'center',
        })}
      >
        {props.title}
      </h2>
    )}
    {props.children}
  </Card>
);
