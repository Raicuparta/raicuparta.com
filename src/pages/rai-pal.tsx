import type { PageProps } from "waku/router";
import { Image } from "../components/image";
import { PageHead } from "../components/page-head";
import { ProjectPage } from "../components/project-page";
import type { Project } from "../data/data";
import { websiteUrl } from "../helpers/constants";
import { css } from "../styled-system/css";
import { stack } from "../styled-system/patterns";

const raiPal: Project = {
	title: "Rai Pal",
	id: "rai-pal",
	description:
		"Mod manager for universal game mods, like UEVR for Unreal games, and UUVR for Unity games.",
	articles: [],
	buttons: [
		{
			icon: "Download",
			url: "https://github.com/Raicuparta/rai-pal/releases/latest/download/RaiPal.msi",
			label: "Download Rai Pal for Windows",
		},
		{
			icon: "Github",
			url: "https://github.com/raicuparta/rai-pal",
			label: "Source code on GitHub",
		},
	],
	moreLinks: [
		{
			label: "Check the Readme on GitHub to learn more about Rai Pal",
			url: "https://github.com/Raicuparta/rai-pal?tab=readme-ov-file#readme",
		},
	],
	mainVideo: "",
	videos: [],
};

export default function RaiPalPage(props: PageProps<"rai-pal">) {
	return (
		<>
			<PageHead
				route={props.path}
				description={raiPal.description}
				imageUrl={`${websiteUrl}${`/mods/${raiPal.id}.png`}`}
				title={"Rai Pal"}
				imageWidth={400}
				imageHeight={225}
				largeImage={true}
			/>
			<ProjectPage project={raiPal}>
				<Image
					src={"/images/projects/rai-pal.png"}
					alt="Rai Pal"
					className={css({ rounded: "lg" })}
				/>
				<div className={stack()}>
					<p>
						Rai Pal is a tool that helps you use and make universal game mods.
						That means mods that aren't made for any specific game, but work
						across multiple games, usually of the same game engine. Some
						features:
					</p>
					<ul className={css({ listStyle: "inside" })}>
						<li>Auto-find installed games from supported providers.</li>
						<li>
							Auto-find owned (but not necessarily installed) games from
							supported providers.
						</li>
						<li>
							Detect relevant information about each game, such as their game
							engine.
						</li>
						<li>Easily install/run the correct version of universal mods.</li>
						<li>Easily update universal mods.</li>
					</ul>
				</div>
			</ProjectPage>
		</>
	);
}

export const getConfig = async () => {
	return {
		render: "static",
	} as const;
};
