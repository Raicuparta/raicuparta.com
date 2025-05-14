import { getPagePreview } from "../helpers/page-preview";
import { css } from "../styled-system/css";
import { Image } from "./image";

type Props = {
	pageUrl: string;
};

// We use the base domain, without subdomains, for the favicon,
// since that seems to be less prone to being blocked,
// and sometimes more likely to have available fallbacks.
function getBaseDomain(url: string) {
	const hostname = new URL(url).hostname;
	const parts = hostname.split(".");
	if (parts.length < 2) return hostname;
	return parts.slice(-2).join(".");
}

export default async function Favicon({ pageUrl }: Props) {
	const pagePreview = await getPagePreview(`https://${getBaseDomain(pageUrl)}`);

	if ("favicons" in pagePreview) {
		const faviconUrl = pagePreview.favicons[pagePreview.favicons.length - 1];

		if (faviconUrl) {
			return (
				<div
					className={css({
						background: "darkWhite",
						rounded: "xl",
						padding: "2px",
						overflow: "hidden",
					})}
				>
					<Image quality={100} width={16} height={16} alt="" src={faviconUrl} />
				</div>
			);
		}
	}

	throw new Error(`Failed to get favicon for page ${pageUrl}`);
}
