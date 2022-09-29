type Props = {
  children: React.ReactNode;
};

export const LinkList = (props: Props) => (
  <div className="flex flex-col gap-2 items-center">{props.children}</div>
);
