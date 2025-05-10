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

	const videos = project.videos.map((videoId) => ({
		url: `https://www.youtube.com/watch?v=${videoId}`,
		image: `https://i.ytimg.com/vi/${videoId}/mqdefault.jpg`,
		// I used to do a getPreview here, which would get me the video title too,
		// but that suddenly stopped working on the GitHub pages build for some reason,
		// so for now (and probably forever) I'm just skipping the title.
	}));

	return {
		project,
		videos,
	};
};

export const getConfig = async () => {
	return {
		render: "static",
		staticPaths: allMods.map((mod) => `${mod.id}-vr-mod`),
	} as const;
};
