import type { PageProps } from "waku/router";
import { Favicon } from "../components/favicon";
import { IconButton } from "../components/icon-button";
import { Image } from "../components/image";
import { LinkList } from "../components/link-list";
import { LinkListItem } from "../components/link-list-item";
import { PageHead } from "../components/page-head";
import { PageNav } from "../components/page-nav";
import { ProjectButtonList } from "../components/project-button-list";
import { Section } from "../components/section";
import { websiteUrl } from "../helpers/constants";
import { css, cx } from "../styled-system/css";
import { hstack, stack, vstack } from "../styled-system/patterns";
import { TextLink } from "../components/text-link";

const raiPal = {
	title: "Rai Pal",
	tagline: "Universal mod manager.",
	id: "rai-pal",
	description:
		"Makes it easier to manage mods like UEVR for Unreal games, and UUVR for Unity games, among others.",
};

const buttonClassName = css({
	color: "white",
	fontWeight: "bold",
});

const windowsButtonClassName = cx(
	buttonClassName,
	css({ background: "windows" }),
);

const linuxButtonClassName = cx(buttonClassName, css({ background: "linux" }));

const moreLinks = [
	{
		label: "Check the Readme on GitHub to learn more about Rai Pal",
		url: "https://github.com/Raicuparta/rai-pal?tab=readme-ov-file#readme",
	},
];

export default function RaiPalPage(props: PageProps<"/rai-pal">) {
	return (
		<>
			<PageHead
				route={props.path}
				description={raiPal.description}
				imageUrl={`${websiteUrl}${`/mods/${raiPal.id}.png`}`}
				title={`${raiPal.title} - ${raiPal.tagline}`}
				imageWidth={400}
				imageHeight={225}
				largeImage={true}
			/>
			<div className={stack({ gap: 4 })}>
				<PageNav />
				<div className={stack({ gap: 4, align: "center" })}>
					<div className={vstack({ gap: 6 })}>
						<h1 className={css({ fontSize: "3xl", fontWeight: "normal" })}>
							Rai Pal
						</h1>
						<Image
							src={"/images/projects/rai-pal.png"}
							alt="Rai Pal"
							className={css({
								rounded: "lg",
								width: "100%",
								shadow: "2xl",
								boxShadow: "0px 0px 20px rgba(198, 172, 255, 0.2)",
							})}
						/>
						<ProjectButtonList>
							<IconButton
								href="https://github.com/Raicuparta/rai-pal/releases/latest/download/RaiPal.exe"
								iconName="Windows"
								className={windowsButtonClassName}
							>
								Download Rai Pal for Windows
							</IconButton>
							<IconButton
								href="https://github.com/Raicuparta/rai-pal/releases/latest/download/RaiPal.AppImage"
								iconName="Linux"
								className={linuxButtonClassName}
							>
								Download Rai Pal for Linux
							</IconButton>
							<IconButton
								href="https://github.com/raicuparta/rai-pal"
								iconName="Github"
								className={css({
									background: "interactive",
									marginTop: 3,
									fontSize: "0.9em",
								})}
							>
								Source code on GitHub
							</IconButton>
						</ProjectButtonList>
						<div className={stack()}>
							<p>
								<strong>Rai Pal</strong> is a tool that helps you use and make
								universal game mods. That means mods that aren't made for any
								specific game, but work across multiple games, usually of the
								same game engine. Some features:
							</p>
							<ul className={css({ listStyle: "inside" })}>
								<li>Auto-find installed games from supported providers.</li>
								<li>
									Auto-find owned (but not necessarily installed) games from
									supported providers.
								</li>
								<li>
									Detect relevant information about each game, such as their
									game engine.
								</li>
								<li>
									Easily install/run the correct version of universal mods.
								</li>
								<li>Easily update universal mods.</li>
							</ul>
						</div>
						<Section>
							<LinkList>
								{moreLinks.map((gameLink) => (
									<LinkListItem key={gameLink.url} url={gameLink.url}>
										<div className={hstack({ gap: 2 })}>
											<Favicon pageUrl={gameLink.url} /> {gameLink.label}
										</div>
									</LinkListItem>
								))}
							</LinkList>
						</Section>
					</div>
				</div>
			</div>
		</>
	);
}

export const getConfig = async () => {
	return {
		render: "static",
	} as const;
};
