import { stack } from "../styled-system/patterns";

type Props = {
	children: React.ReactNode;
};

export const ProjectButtonList = (props: Props) => (
	<div
		className={stack({
			alignItems: "stretch",
			justify: "center",
		})}
	>
		{props.children}
	</div>
);
