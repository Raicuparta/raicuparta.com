export type LinkInfo = {
  title: string;
  url: string;
};

type Props = {
  links: LinkInfo[];
};

export const LinkList = (props: Props) => (
  <div className="flex flex-col gap-2 items-center">
    {props.links.map(({ title, url }) => (
      <a
        className="bg-white bg-opacity-20 w-full text-center rounded hover:bg-opacity-40 transition-colors"
        target="_blank"
        rel="noopener noreferrer"
        key={url}
        href={url}
      >
        {title}
      </a>
    ))}
  </div>
);
