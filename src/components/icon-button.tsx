import { css, cx } from "../styled-system/css";
import { flex } from "../styled-system/patterns";
import type { IconName } from "../svg-assets";
import { ButtonLink } from "./button-link";
import { Icon } from "./icon";

interface Props extends React.ComponentPropsWithoutRef<typeof ButtonLink> {
	children: React.ReactNode;
	iconName: IconName;
}

export const IconButton = ({
	iconName,
	className,
	children,
	...props
}: Props) => (
	<ButtonLink
		className={cx(
			flex({
				paddingY: "0.5em",
				paddingX: 4,
				rounded: "3xl",
				justify: "space-between",
				align: "center",
				gap: "1em",
			}),
			className,
		)}
		{...props}
	>
		<Icon className={css({ width: "25px", height: "25px" })} name={iconName} />
		<div
			className={flex({
				flex: 1,
				justify: "center",
			})}
		>
			{children}
		</div>
	</ButtonLink>
);
