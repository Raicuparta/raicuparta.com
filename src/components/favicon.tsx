import { css } from "../styled-system/css";
import { Image } from "./image";

type Props = {
	pageUrl: string;
};

export default async function Favicon({ pageUrl }: Props) {
	return (
		<div
			className={css({
				background: "darkWhite",
				rounded: "sm",
				padding: "2px",
				overflow: "hidden",
			})}
		>
			<Image
				quality={100}
				width={16}
				height={16}
				alt=""
				src={getFaviconPath(pageUrl)}
			/>
		</div>
	);
}

function getFaviconPath(url: string) {
	const hostname = new URL(url).hostname;
	const parts = hostname.split(".");
	if (parts.length < 2) return hostname;
	return `images/favicons/${parts.slice(-2).join(".")}.png`;
}
