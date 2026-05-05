import { css, cx } from "../styled-system/css";
import { flex, hstack } from "../styled-system/patterns";
import { ButtonLink } from "./button-link";
import { Icon } from "./icon";

export type LinkInfo = {
	url: string;
	children: React.ReactNode;
};

export const LinkListItem = (props: LinkInfo) => (
	<ButtonLink
		className={hstack({
			rounded: "lg",
			alignItems: "stretch",
			background: "overlay",
			justify: "space-between",
			overflow: "hidden",
		})}
		key={props.url}
		href={props.url}
	>
		<div
			className={hstack({
				padding: 2,
			})}
		>
			{props.children}
		</div>

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
			<Icon name="ChevronRight" className={css({ height: 6, width: 6 })} />
		</div>
	</ButtonLink>
);
