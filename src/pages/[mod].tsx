import type { PageProps } from "waku/router";
import { PageHead } from "../components/page-head";
import { ProjectPage } from "../components/project-page";
import { allMods } from "../data/all-mods";
import { websiteUrl } from "../helpers/constants";

export default async function ModPage(props: PageProps<"[mod]">) {
	const project = await getProject(props.mod);

	return (
		<>
			<PageHead
				route={props.path}
				description={project.description}
				imageUrl={`${websiteUrl}${`/mods/${project.id}.jpg`}`}
				title={`${project.title}`}
				imageWidth={400}
				imageHeight={225}
				largeImage
			/>
			<ProjectPage project={project} />
		</>
	);
}

export const getProject = async (mod: string) => {
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

	return project;
};

export const getConfig = async () => {
	return {
		render: "static",
		staticPaths: allMods.map((mod) => `${mod.id}-vr-mod`),
	} as const;
};
