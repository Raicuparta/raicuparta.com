import type { Project } from "../data/data";
import { css } from "../styled-system/css";
import { flex, hstack, stack, vstack } from "../styled-system/patterns";
import ArticlePreview from "./article-preview";
import { Avatar } from "./avatar";
import { ButtonLink } from "./button-link";
import { Icon } from "./icon";
import { IconButton } from "./icon-button";
import { Image } from "./image";
import { LinkList } from "./link-list";
import { LinkListItem } from "./link-list-item";
import { ProjectCard } from "./project-card";
import { Section } from "./section";
import { SocialLinks } from "./social-links";
import { SteamEmbed } from "./steam-embed";
import { YoutubeEmbed } from "./youtube-embed/youtube-embed";

export type Article = {
	url: string;
	title: string;
	image: string;
	favicon: string | undefined;
	siteName: string;
};

export type Video = {
	url: string;
	title?: string;
	image: string;
};

type Props = {
	project: Project;
	videos?: Video[];
	children?: React.ReactNode;
};

export const ProjectPage = (props: Props) => {
	return (
		<div className={stack({ gap: 4 })}>
			<div
				className={flex({
					justify: "center",
					width: "100%",
				})}
			>
				<div
					className={hstack({
						justify: "space-between",
						flexWrap: "wrap",
						width: "100%",
					})}
				>
					<ButtonLink
						className={hstack({
							rounded: "md",
							alignItems: "center",
							paddingX: 0,
							paddingY: 1,
							gap: 1,
						})}
						href="/"
					>
						<Icon name="Back" className={css({ height: 4 })} />
						<Avatar className={css({ width: 6 })} />
						<span>More by Rai</span>
					</ButtonLink>
					<SocialLinks />
				</div>
			</div>
			<div className={stack({ gap: 4, align: "center" })}>
				<div className={vstack({ gap: 6 })}>
					<ProjectCard
						src={`/images/projects/${props.project.id}.png`}
						title={props.project.title}
						description={props.project.description}
					/>
					{props.project.steamEmbed && (
						<div className={stack({ width: "100%" })}>
							<p>{props.project.steamEmbed.description}</p>
							<SteamEmbed appId={props.project.steamEmbed.appId} />
						</div>
					)}
					<div
						className={stack({
							alignItems: "center",
							justify: "center",
						})}
					>
						{props.project.buttons.map((button, index) => (
							<IconButton
								key={button.url}
								href={button.url}
								iconName={button.icon}
								className={
									index > 0
										? css({ background: "interactive", paddingY: 1 })
										: css({
												background: "cta",
												color: "purple",
												fontWeight: "bold",
											})
								}
							>
								{button.label}
							</IconButton>
						))}
					</div>
					{props.children}
					{props.project.mainVideo && (
						<YoutubeEmbed
							urlOrId={props.project.mainVideo}
							poster="maxresdefault"
							title={`${props.project.title} video.`}
						/>
					)}
					{props.videos && props.videos.length > 0 && (
						<Section>
							<div className={hstack({ flexWrap: "wrap", justify: "center" })}>
								{props.videos.map((video) => (
									<ButtonLink
										className={css({
											rounded: "lg",
											overflow: "hidden",
											position: "relative",
										})}
										key={video.url}
										href={video.url}
									>
										<div className={css({ fontSize: 0 })}>
											<Image
												width={320}
												height={180}
												src={video.image}
												alt={video.title ?? `${props.project.title} video`}
											/>
										</div>
										<span
											className={css({
												position: "absolute",
												top: 0,
												fontSize: "xs",
												fontWeight: "semibold",
												background: "black/75",
												margin: 1,
												rounded: "lg",
												padding: 1,
											})}
										>
											{video.title}
										</span>
									</ButtonLink>
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
										🔗 {gameLink.label}
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
