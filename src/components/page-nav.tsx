import { css } from "../styled-system/css";
import { flex, hstack } from "../styled-system/patterns";
import { Avatar } from "./avatar";
import { ButtonLink } from "./button-link";
import { Icon } from "./icon";
import { SocialLinks } from "./social-links";

export const PageNav = () => (
	<div
		className={flex({
			justify: "center",
			width: "100%",
		})}
	>
		<div
			className={hstack({
				justify: "space-between",
				flexWrap: "wrap",
				width: "100%",
			})}
		>
			<ButtonLink
				className={hstack({
					rounded: "md",
					alignItems: "center",
					paddingX: 0,
					paddingY: 1,
					gap: 1,
				})}
				href="/"
			>
				<Icon name="Back" className={css({ height: 4 })} />
				<Avatar className={css({ width: 6 })} />
				<span>More by Rai</span>
			</ButtonLink>
			<SocialLinks />
		</div>
	</div>
);
