import { css } from "../styled-system/css";

interface Props extends React.ComponentProps<"a"> {
	isExternal?: boolean;
}

export const TextLink = ({ isExternal = true, href, ...props }: Props) => (
	<a
		href={href ?? "#"}
		className={css({
			textDecoration: "underline",
			fontWeight: "normal",
			color: "darkWhite",
			_hover: {
				color: "white",
			},
		})}
		target={isExternal ? "_blank" : undefined}
		rel={isExternal ? "noopener noreferrer" : undefined}
		{...props}
	/>
);
