import type { Project } from "../data/data";
import { css } from "../styled-system/css";
import { hstack, stack, vstack } from "../styled-system/patterns";
import { ArticlePreview } from "./article-preview";
import { Favicon } from "./favicon";
import { LinkList } from "./link-list";
import { LinkListItem } from "./link-list-item";
import { PageNav } from "./page-nav";
import { ProjectButton } from "./project-button";
import { ProjectButtonList } from "./project-button-list";
import { ProjectCard } from "./project-card";
import { Section } from "./section";
import { SteamEmbed } from "./steam-embed";
import VideoPreview from "./video-preview";
import { YoutubeEmbed } from "./youtube-embed/youtube-embed";

type Props = {
	project: Project;
	children?: React.ReactNode;
};

export const ProjectPage = (props: Props) => {
	return (
		<div className={stack({ gap: 4 })}>
			<PageNav />
			<div className={stack({ gap: 4, align: "center" })}>
				<div className={vstack({ gap: 6 })}>
					<h1 className={css({ fontSize: "3xl", fontWeight: "normal" })}>
						{props.project.title}
					</h1>
					<p>{`${props.project.tagline}. ${props.project.description}`}</p>
					{props.children}
					{props.project.mainVideo && (
						<YoutubeEmbed
							urlOrId={props.project.mainVideo}
							poster="maxresdefault"
							title={`${props.project.title} video.`}
						/>
					)}
					{props.project.steamEmbed && (
						<div className={stack({ width: "100%" })}>
							<p>{props.project.steamEmbed.description}</p>
							<SteamEmbed appId={props.project.steamEmbed.appId} />
						</div>
					)}
					<ProjectButtonList>
						{props.project.buttons.map((button) => (
							<ProjectButton key={button.url} button={button} />
						))}
					</ProjectButtonList>
					{props.project.videos && props.project.videos.length > 0 && (
						<Section>
							<div className={hstack({ flexWrap: "wrap", justify: "center" })}>
								{props.project.videos.map((videoUrl) => (
									<VideoPreview key={videoUrl} youtubeId={videoUrl} />
								))}
							</div>
						</Section>
					)}
					{props.project.articles && props.project.articles.length > 0 && (
						<Section>
							<LinkList>
								{props.project.articles.map((articleUrl) => (
									<ArticlePreview key={articleUrl} articleUrl={articleUrl} />
								))}
							</LinkList>
						</Section>
					)}
					{props.project.moreLinks.length > 0 && (
						<Section>
							<LinkList>
								{props.project.moreLinks.map((gameLink) => (
									<LinkListItem key={gameLink.url} url={gameLink.url}>
										<div className={hstack({ gap: 2 })}>
											<Favicon pageUrl={gameLink.url} /> {gameLink.label}
										</div>
									</LinkListItem>
								))}
							</LinkList>
						</Section>
					)}
				</div>
			</div>
		</div>
	);
};
