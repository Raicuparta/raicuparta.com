import { stack } from '../styled-system/patterns';

type Props = {
  children: React.ReactNode;
};

export const LinkList = (props: Props) => (
  <div className={stack({ gap: 2 })}>{props.children}</div>
);
