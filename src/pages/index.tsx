import type { PageProps } from "waku/router";
import { Avatar } from "../components/avatar";
import { ButtonLink } from "../components/button-link";
import { Card } from "../components/card";
import { MainPageSection } from "../components/main-page-section";
import { PageHead } from "../components/page-head";
import { ProjectCard } from "../components/project-card";
import { SocialLinks } from "../components/social-links";
import { TextLink } from "../components/text-link";
import { bestMods } from "../data/best-mods";
import { mehMods } from "../data/meh-mods";
import { otherProjects } from "../data/other-projects";
import { websiteUrl } from "../helpers/constants";
import { css } from "../styled-system/css";
import { flex, stack } from "../styled-system/patterns";

export default function HomePage(props: PageProps<"/">) {
	return (
		<>
			<PageHead
				route={props.path}
				description="Raicuparta makes VR mods for flat games"
				imageUrl={`${websiteUrl}/images/avatar.png`}
				imageWidth={120}
				title="Raicuparta's VR mods"
			/>
			<title>Raicuparta</title>
			<div className={stack({ gap: 12 })}>
				<MainPageSection id="intro">
					<div
						className={css({
							display: "flex",
							gap: 4,
							alignItems: "center",
							flexDirection: "column",
							sm: {
								alignItems: "start",
								flexDirection: "row",
							},
						})}
					>
						<div
							className={flex({
								gap: 2,
								flexDirection: "row",
								alignItems: "center",
								sm: { flexDirection: "column", gap: 0 },
							})}
						>
							<Avatar
								className={css({
									width: "40px",
									height: "40px",
									sm: {
										width: 100,
										height: 100,
									},
								})}
							/>
							<h1
								className={css({
									fontSize: "xl",
									textAlign: "center",
									fontWeight: "normal",
								})}
							>
								Raicuparta
							</h1>
						</div>
						<Card className={stack({ padding: 4, gap: 4 })}>
							<div className={stack()}>
								<p>Hello. I'm Raicuparta. I make games and mods and things.</p>
								<p>
									I'm most known for my{" "}
									<TextLink href="#vr-mods" isExternal={false}>
										VR mods
									</TextLink>
									: I modify flat games to make them work in VR, with stereo
									rendering and motion control support. These mods are available
									on{" "}
									<TextLink href="https://www.patreon.com/raivr">
										my Patreon
									</TextLink>{" "}
									and on{" "}
									<TextLink href="https://raicuparta.itch.io">Itch.io</TextLink>
								</p>
								<p>
									Professionally, I've done a bit of web dev, a bit of game dev,
									a bit of engineering management. I was the Tech Lead at{" "}
									<TextLink href="https://flat2vrstudios.com/">
										Flat2VR Studios
									</TextLink>
									.
								</p>
								<p>
									I've used some of my experience with full-stack web
									development in a few of my{" "}
									<TextLink isExternal={false} href="#other-projects">
										personal projects
									</TextLink>
									.
								</p>
							</div>
							<SocialLinks />
						</Card>
					</div>
				</MainPageSection>
				<MainPageSection
					title="Raicuparta's Top VR Mods"
					id="vr-mods"
					description="These are the mods I worked the hardest on, playable from start to finish in 6dof VR, with full motion control support, etc. These will give you an experience close to some top native VR games."
				>
					{bestMods.map((mod) => {
						return (
							<ButtonLink
								key={mod.id}
								href={`/${mod.id}-vr-mod`}
								title={`${mod.title} - ${mod.description}`}
							>
								<ProjectCard
									src={`/images/projects/${mod.id}.png`}
									title={mod.title}
									description={mod.description}
									clickable={true}
								/>
							</ButtonLink>
						);
					})}
				</MainPageSection>
				<MainPageSection
					title="'Just OK' VR Mods"
					id="meh-vr-mods"
					description="These mods that I wasn't able to fully polish for one reason or another, but still allow you to experience the game in VR. You should expect some jank."
				>
					{mehMods.map((mod) => {
						return (
							<ButtonLink
								key={mod.id}
								href={`/${mod.id}-vr-mod`}
								title={`${mod.title} - ${mod.description}`}
							>
								<ProjectCard
									src={`/images/projects/${mod.id}.png`}
									title={mod.title}
									description={mod.description}
									clickable={true}
								/>
							</ButtonLink>
						);
					})}
				</MainPageSection>
				<MainPageSection
					title="Raicuparta's Other Projects"
					id="other-projects"
				>
					{otherProjects.map((project) => {
						return (
							<ButtonLink
								key={project.id}
								href={project.url}
								title={project.title}
							>
								<ProjectCard
									src={`/images/projects/${project.id}.png`}
									title={project.title}
									description={project.description}
									clickable={true}
								/>
							</ButtonLink>
						);
					})}
				</MainPageSection>
			</div>
		</>
	);
}

export const getConfig = async () => {
	return {
		render: "static",
	} as const;
};
