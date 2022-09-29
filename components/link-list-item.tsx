import Image from 'next/image';

export type LinkInfo = {
  title: string;
  url: string;
  iconUrl?: string;
};

export const LinkListItem = (props: LinkInfo) => (
  <a
    className="bg-white bg-opacity-20 w-full p-2 rounded hover:bg-opacity-40 transition-colors flex gap-2 items-center"
    target="_blank"
    rel="noopener noreferrer"
    key={props.url}
    href={props.url}
  >
    {props.iconUrl && (
      <div className="bg-white p-1 rounded w-10 h-10 overflow-hidden">
        <Image src={props.iconUrl} width={32} height={32} alt="" />
      </div>
    )}
    <span className="flex-1">{props.title}</span>
  </a>
);
