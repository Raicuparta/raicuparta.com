import Image from 'next/image';
import { twMerge } from 'tailwind-merge';

type Props = {
  src: string;
  title: string;
  gameName: string;
  width?: number;
  className?: string;
};

export const ModImage = (props: Props) => (
  <div
    className={twMerge(
      'relative flex flex-1 justify-center overflow-hidden',
      !props.width && 'h-40',
      props.className
    )}
  >
    <Image
      className="object-contain object-top"
      src={props.src}
      width={props.width}
      height={props.width ? props.width / (16 / 9) : undefined}
      alt={props.gameName}
      layout={props.width ? undefined : 'fill'}
      priority
      objectFit={props.width ? undefined : 'cover'}
    />
    <div className="absolute h-full flex flex-col items-center justify-between p-1">
      <h2 className="text-4xl font-normal text-shadow bg-black bg-opacity-20 py-1 px-3 rounded">
        {props.title}
      </h2>
      <span className="bg-black bg-opacity-75 px-2 rounded text-shadow">
        for {props.gameName}
      </span>
    </div>
  </div>
);
