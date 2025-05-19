import { css } from "../styled-system/css";
import { Image } from "./image";

type Props = {
	pageUrl: string;
};

export async function Favicon({ pageUrl }: Props) {
	// Google has this nice endpoint for favicons, so we can take advantage of it.
	// So nice of them.
	const src = `https://www.google.com/s2/favicons?domain=${new URL(pageUrl).hostname}&sz=64`;

	return (
		<div
			className={css({
				background: "darkWhite",
				rounded: "sm",
				padding: "2px",
				overflow: "hidden",
			})}
		>
			<Image quality={100} width={16} height={16} alt="" src={src} />
		</div>
	);
}
