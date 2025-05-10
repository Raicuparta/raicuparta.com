import { css } from "../styled-system/css";
import { flex } from "../styled-system/patterns";
import { LinkListItem } from "./link-list-item";
import { Image } from "./image";
import { getPagePreview } from "../helpers/page-preview";

type Props = {
	articleUrl: string;
};

export default async function ArticlePreview({ articleUrl }: Props) {
	const article = await getArticle(articleUrl);

	return (
		<LinkListItem key={article.url} url={article.url}>
			<div
				className={flex({
					position: "relative",
					rounded: "lg",
					overflow: "hidden",
				})}
			>
				<Image src={article.image} width={160} height={90} alt="" />
				{article.favicon && (
					<div
						className={css({
							position: "absolute",
							top: 0,
							left: 0,
						})}
					>
						<Image
							src={article.favicon}
							width={32}
							height={32}
							className={css({
								roundedBottomRight: "md",
								background: "white",
							})}
							alt={article.siteName}
						/>
					</div>
				)}
			</div>
			<div className={css({ flex: 1 })}>
				{article.siteName && (
					<p className={css({ fontWeight: "bold" })}>{article.siteName}</p>
				)}
				<p>{article.title}</p>
			</div>
		</LinkListItem>
	);
}

async function getArticle(articleUrl: string) {
	try {
		const pagePreview = await getPagePreview(articleUrl);

		if (!("title" in pagePreview) || pagePreview.images.length === 0) {
			throw "Missing title or image";
		}

		const url = new URL(articleUrl).hostname.replace("www.", "");

		return {
			url: pagePreview.url,
			title: pagePreview.title,
			image: pagePreview.images[0] ?? "",
			favicon: pagePreview.favicons[pagePreview.favicons.length - 1],
			siteName: pagePreview.siteName ?? url,
		};
	} catch (error) {
		throw `Failed to get article from url ${articleUrl}: ${error}`;
	}
}
