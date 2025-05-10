import { URL } from "node:url";
import LinkPreview from "link-preview-js";
import type { PageProps } from "waku/router";
import { PageHead } from "../components/page-head";
import { ProjectPage } from "../components/project-page";
import { allMods } from "../data/all-mods";
import { websiteUrl } from "../helpers/constants";

export default async function ModPage(props: PageProps<"[mod]">) {
	const data = await getData(props.mod);

	return (
		<>
			<PageHead
				route={props.path}
				description={data.project.description}
				imageUrl={`${websiteUrl}${`/mods/${data.project.id}.jpg`}`}
				title={`${data.project.title}`}
				imageWidth={400}
				imageHeight={225}
				largeImage
			/>
			<ProjectPage {...data} />
		</>
	);
}

function filterNullUndefined<T>(item: T | null | undefined): item is T {
	return item !== undefined && item !== null;
}

const getPreview = (url: string) =>
	LinkPreview.getLinkPreview(url, {
		followRedirects: "follow",
		timeout: 20000,
		headers: {
			"user-agent": "googlebot",
		},
	});

export const getData = async (mod: string) => {
	if (typeof mod !== "string") {
		throw new Error(
			`modPage param is of wrong type. Expected string, got ${typeof mod}`,
		);
	}

	const modId = mod.replace("-vr-mod", "");
	const project = allMods.find(({ id }) => id === modId);

	if (!project) {
		throw new Error(`failed to find mod for modPage ${mod}`);
	}

	const articles = (
		await Promise.all(
			project.articles.map(async (articleUrl) => {
				try {
					const linkPreview = await getPreview(articleUrl);

					if (!("title" in linkPreview) || linkPreview.images.length === 0) {
						return null;
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
					console.error(
						`Failed to get article from url ${articleUrl}: ${error}`,
					);
					return null;
				}
			}),
		)
	).filter(filterNullUndefined);

	const videos = project.videos.map((videoId) => ({
		url: `https://www.youtube.com/watch?v=${videoId}`,
		image: `https://i.ytimg.com/vi/${videoId}/mqdefault.jpg`,
		// I used to do a getPreview here, which would get me the video title too,
		// but that suddenly stopped working on the GitHub pages build for some reason,
		// so for now (and probably forever) I'm just skipping the title.
	}));

	return {
		project,
		articles,
		videos,
	};
};

export const getConfig = async () => {
	return {
		render: "static",
		staticPaths: allMods.map((mod) => `${mod.id}-vr-mod`),
	} as const;
};
