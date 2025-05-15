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
				background: props.clickable ? "interactive" : "overlay",
				flexDirection: "column",
				sm: {
					flexDirection: "row",
				},
			}),
			props.className,
		)}
	>
		<Image
			src={props.src}
			width={500}
			height={400}
			quality={30}
			alt={props.title}
			className={css({
				objectFit: "contain",
				background: "overlay",
				sm: {
					maxWidth: 200,
					minWidth: 200,
					height: "unset",
				},
				height: 150,
				width: "100%",
				maxWidth: undefined,
				minWidth: undefined,
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
