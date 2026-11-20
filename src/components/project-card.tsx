import { css, cx } from "../styled-system/css";
import { flex, stack } from "../styled-system/patterns";
import { Icon } from "./icon";
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
				background: "overlay",
				flexDirection: "row",
			}),
			props.className,
		)}
	>
		<div
			className={css({
				display: "flex",
				flexDirection: "column",
				sm: {
					flexDirection: "row",
				},
				width: "100%",
				minWidth: 0,
			})}
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
			<div
				className={cx(
					stack({ padding: 4, gap: 4 }),
					css({ alignSelf: "stretch", sm: { alignSelf: "center" } }),
				)}
			>
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
		{props.clickable && (
			<div
				className={flex({
					justify: "center",
					alignItems: "center",
					background: "interactive",
					alignSelf: "stretch",
				})}
			>
				<Icon name="ChevronRight" className={css({ height: 10, width: 10 })} />
			</div>
		)}
	</div>
);
