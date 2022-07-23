type Props = {
  src: string;
  title: string;
  gameName: string;
  width: string;
  withBackground?: boolean;
};

export const ModImage = (props: Props) => (
  <div className="relative flex justify-center overflow-hidden">
    <img
      className="object-contain object-top shadow-xl shadow-black"
      src={props.src}
      width={props.width}
    />
    {props.withBackground && (
      <>
        <img className="absolute top-0 -z-10 blur-lg" src={props.src} />
      </>
    )}
    <div className="absolute bottom-4 flex flex-col items-center gap-4">
      <h2 className="text-4xl font-normal text-shadow">{props.title}</h2>
      <span className="bg-overlay px-2 rounded text-shadow">
        for {props.gameName}
      </span>
    </div>
  </div>
);
