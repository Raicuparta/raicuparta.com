export type LinkInfo = {
  url: string;
  children: React.ReactNode;
};

export const LinkListItem = (props: LinkInfo) => (
  <a
    className="bg-white bg-opacity-20 w-full p-2 rounded hover:bg-opacity-40 flex gap-2 items-center"
    target="_blank"
    rel="noopener noreferrer"
    key={props.url}
    href={props.url}
  >
    {props.children}
  </a>
);
