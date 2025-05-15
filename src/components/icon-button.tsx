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
		className={cx(flex({ padding: 2, rounded: "lg" }), className)}
		{...props}
	>
		<div>
			<Icon className={css({ marginRight: 2, height: 6 })} name={iconName} />
		</div>
		{children}
	</ButtonLink>
);
