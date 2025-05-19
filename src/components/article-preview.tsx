import { getPagePreview } from "../helpers/page-preview";
import { css } from "../styled-system/css";
import { flex, hstack } from "../styled-system/patterns";
import { Favicon } from "./favicon";
import { Image } from "./image";
import { LinkListItem } from "./link-list-item";

type Props = {
	articleUrl: string;
};

export async function ArticlePreview({ articleUrl }: Props) {
	const article = await getArticle(articleUrl);

	return (
		<LinkListItem key={article.url} url={article.url}>
			<div
				className={flex({
					rounded: "lg",
					overflow: "hidden",
				})}
			>
				<Image src={article.image} width={160} height={90} alt="" />
			</div>
			<div className={css({ flex: 1 })}>
				<div className={hstack({ gap: 2 })}>
					<Favicon pageUrl={article.url} />
					<p className={css({ fontWeight: "bold" })}>{article.siteName}</p>
				</div>
				<p>{article.title}</p>
			</div>
		</LinkListItem>
	);
}

async function getArticle(articleUrl: string) {
	try {
		const pagePreview = await getPagePreview(articleUrl);

		if (!("title" in pagePreview) || pagePreview.images.length === 0) {
			throw new Error("Missing title or image");
		}

		const url = new URL(articleUrl).hostname.replace("www.", "");

		return {
			url: pagePreview.url,
			title: pagePreview.title,
			image: pagePreview.images[0] ?? "",
			favicon: pagePreview.favicons.at(-1),
			siteName: pagePreview.siteName ?? url,
		};
	} catch (error) {
		throw new Error(`Failed to get article from url ${articleUrl}: ${error}`);
	}
}
