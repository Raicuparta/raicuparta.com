import { hstack } from "../styled-system/patterns";
import { ButtonLink } from "./button-link";

export type LinkInfo = {
	url: string;
	children: React.ReactNode;
};

export const LinkListItem = (props: LinkInfo) => (
	<ButtonLink
		className={hstack({
			background: "interactive",
			width: "100%",
			padding: 2,
			rounded: "lg",
			alignItems: "center",
		})}
		key={props.url}
		href={props.url}
	>
		{props.children}
	</ButtonLink>
);
