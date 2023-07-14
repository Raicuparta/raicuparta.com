import { Card } from './card';

type Props = {
  children: React.ReactNode;
  title?: string;
  id: string;
};

export const MainPageSection = (props: Props) => (
  <Card className="flex p-4 gap-4 flex-col" id={props.id}>
    {props.title && (
      <h2 className="text-2xl font-normal text-center">{props.title}</h2>
    )}
    {props.children}
  </Card>
);
