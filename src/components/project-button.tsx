import type { ProjectButton as ProjectButtonData } from "../data/data";
import { css } from "../styled-system/css";
import { IconButton } from "./icon-button";

type Props = {
	button: ProjectButtonData;
};

const primaryClassName = css({
	background: "cta",
	color: "white",
	fontWeight: "bold",
});

const secondaryClassName = css({ background: "interactive", fontSize: "0.9em" });

export const ProjectButton = ({ button }: Props) => (
	<IconButton
		href={button.url}
		iconName={button.icon}
		className={button.isPrimary ? primaryClassName : secondaryClassName}
	>
		{button.label}
	</IconButton>
);
