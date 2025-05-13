import { getPagePreview } from "../helpers/page-preview";
import { css } from "../styled-system/css";
import { Image } from "./image";

type Props = {
	pageUrl: string;
};

export default async function Favicon({ pageUrl }: Props) {
	const pagePreview = await getPagePreview(pageUrl);

	if ("favicons" in pagePreview) {
		const faviconUrl = pagePreview.favicons[pagePreview.favicons.length - 1];

		if (faviconUrl) {
			return <div className={css({
        background: "darkWhite",
        rounded: "xl",
        padding: "2px",
        overflow: "hidden",
      })}>
        <Image quality={100} width={16} height={16} alt="" src={faviconUrl} />
      </div>
		}
	}

	throw new Error(`Failed to get favicon for page ${pageUrl}`);
}
