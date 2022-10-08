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
      <span className="text-3xl font-normal drop-shadow-text bg-black bg-opacity-10 py-1 px-3 rounded">
        {props.title}
      </span>
      <span className="bg-black bg-opacity-50 px-2 rounded drop-shadow-text">
        for {props.gameName}
      </span>
    </div>
  </div>
);
