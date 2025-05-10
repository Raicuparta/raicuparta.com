import LinkPreview from "link-preview-js";
import { css } from "../styled-system/css";
import { flex } from "../styled-system/patterns";
import { LinkListItem } from "./link-list-item";
import { Image } from "./image";

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
		const linkPreview = await getPreview(articleUrl);

		if (!("title" in linkPreview) || linkPreview.images.length === 0) {
			throw "Missing title or image";
		}

		const url = new URL(articleUrl).hostname.replace("www.", "");

		return {
			url: linkPreview.url,
			title: linkPreview.title,
			image: linkPreview.images[0] ?? "",
			favicon: linkPreview.favicons[linkPreview.favicons.length - 1],
			siteName: linkPreview.siteName ?? url,
		};
	} catch (error) {
		throw `Failed to get article from url ${articleUrl}: ${error}`;
	}
}

async function getPreview(url: string) {
	return LinkPreview.getLinkPreview(url, {
		followRedirects: "follow",
		timeout: 20000,
		headers: {
			"user-agent": "googlebot",
		},
	});
}
