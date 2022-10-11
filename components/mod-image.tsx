import Image from 'next/image';
import { twMerge } from 'tailwind-merge';

type Props = {
  src: string;
  title: string;
  gameName: string;
  className?: string;
};

export const ModImage = (props: Props) => (
  <div className={twMerge('relative overflow-hidden rounded', props.className)}>
    <div className="absolute h-full flex flex-col items-center justify-end z-10">
      <span className="bg-black bg-opacity-40 p-2 leading-3 rounded-tr drop-shadow-text">
        for {props.gameName}
      </span>
    </div>
    <Image
      className="object-contain drop-shadow"
      src={props.src}
      alt={props.title}
      layout="responsive"
      width={630}
      height={500}
      priority
    />
  </div>
);
