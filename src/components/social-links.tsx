import type { PropsWithChildren } from "react";
import { IconLink } from "../components/icon-link";
import { hstack } from "../styled-system/patterns";

export const LinkRow = ({ children }: PropsWithChildren) => (
	<div className={hstack({ justify: "space-evenly", maxWidth: "lg", gap: 3 })}>
		{children}
	</div>
);

export const SocialLinks = () => (
	<nav
		className={hstack({
			flexWrap: "wrap",
			justify: "center",
			gap: 3,
		})}
	>
		<LinkRow>
			<IconLink
				iconName="Patreon"
				title="Patreon"
				url="https://www.patreon.com/raivr"
			/>
			<IconLink
				iconName="PayPal"
				title="PayPal"
				url="https://paypal.me/raicuparta/5usd"
			/>
			<IconLink iconName="Itch" title="Itch" url="https://raicuparta.itch.io" />
		</LinkRow>
		<LinkRow>
			<IconLink
				iconName="Github"
				title="GitHub"
				url="https://github.com/Raicuparta"
			/>
			<IconLink
				iconName="Bluesky"
				title="Bluesky"
				url="https://bsky.app/profile/raicuparta.com"
			/>
			<IconLink
				iconName="YouTube"
				title="YouTube"
				url="https://www.youtube.com/c/Raicuparta"
			/>
		</LinkRow>
	</nav>
);
