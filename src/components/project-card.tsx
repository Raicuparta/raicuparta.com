import { css, cx } from "../styled-system/css";
import { flex, stack } from "../styled-system/patterns";
import { Image } from "./image";

type Props = {
  src: string;
  title: string;
  clickable?: boolean;
  description?: string;
  className?: string;
};

export const ProjectCard = (props: Props) => (
  <div
    className={cx(
      flex({
        rounded: "lg",
        overflow: "hidden",
        maxWidth: "md",
        background: props.clickable ? "interactive" : "overlay",
        margin: "auto",
        width: "100%",
      }),
      props.className
    )}
  >
    <Image
      src={props.src}
      width={150}
      height={100}
      quality={30}
      alt={props.title}
      className={flex({
        objectFit: "contain",
        background: "overlay",
      })}
    />
    <div className={stack({ padding: 4, gap: 4 })}>
      <div
        className={css({
          lineHeight: 1,
          fontSize: "xl",
          color: "white",
          fontWeight: "medium",
        })}
      >
        {props.title}
      </div>
      {props.description && (
        <div
          className={css({
            fontSize: "md",
          })}
        >
          {props.description}
        </div>
      )}
    </div>
  </div>
);
