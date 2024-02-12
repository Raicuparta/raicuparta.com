import Image from 'next/image';
import { twMerge } from 'tailwind-merge';

type Props = {
  src: string;
  title: string;
  description?: string;
  className?: string;
};

export const ModImage = (props: Props) => (
  <div className={twMerge('overflow-hidden rounded', props.className)}>
    <Image
      className="object-contain drop-shadow"
      src={props.src}
      alt={props.title}
      width={1400}
      height={400}
      priority
    />
    {props.description && (
      <div className=" bg-black bg-opacity-20 text-center text-lg p-3 leading-3 drop-shadow-text">
        {props.description}
      </div>
    )}
  </div>
);
