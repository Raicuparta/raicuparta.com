import { css, cx } from "../styled-system/css";
import { flex, hstack, stack } from "../styled-system/patterns";
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
		<div
			className={hstack({
				alignItems: "stretch",
				justifyContent: "space-between",
				width: "100%",
			})}
		>
			<div
				className={cx(
					stack({ padding: 4, gap: 4 }),
					css({ alignSelf: "center" }),
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
			{props.clickable && (
				<div
					className={cx(
						flex({
							justify: "center",
							alignItems: "center",
							padding: 2,
							background: "interactive",
						}),
						css({ alignSelf: "stretch" }),
					)}
				>
					<Icon
						name="ChevronRight"
						className={css({ height: 10, width: 10 })}
					/>
				</div>
			)}
		</div>
	</div>
);
