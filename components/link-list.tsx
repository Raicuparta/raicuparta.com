import { stack } from '../styled-system/patterns';

type Props = {
  children: React.ReactNode;
};

export const LinkList = (props: Props) => (
  <div className={stack()}>{props.children}</div>
);
