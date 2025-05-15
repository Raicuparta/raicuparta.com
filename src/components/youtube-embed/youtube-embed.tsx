import type * as React from "react";
import { css } from "../../styled-system/css";
import { Image } from "../image";
import { YouTubeIcon } from "./youtube-icon";
import { YoutubeSpawner } from "./youtube-spawner";
import type {
	YoutubePlayerParameters,
	YoutubePosterQuality,
} from "./youtube-types";

interface Props extends React.ComponentPropsWithoutRef<"div"> {
	urlOrId: string;
	aspectRatio?: number;
	customThumbnail?: string;
	iframeProps?: React.ComponentPropsWithoutRef<"iframe">;
	playerParameters?: YoutubePlayerParameters;
	poster?: YoutubePosterQuality;
	title: string;
}

function getYouTubeId(url: string) {
	const arr = url.split(
		/(youtu.*be.*)\/(watch\?v=|embed\/|v|shorts|)(.*?((?=[&#?])|$))/gm,
	);

	const id = undefined !== arr[3] ? arr[3] : arr[0];
	if (!id) {
		throw new Error(`Failed to extract YouTube ID from URL: ${url}`);
	}
	return id;
}

export const YoutubeEmbed = ({
	urlOrId,
	aspectRatio = 16 / 9,
	customThumbnail,
	iframeProps,
	playerParameters,
	poster = "hqdefault",
	title,
	...props
}: Props) => {
	const videoId = encodeURIComponent(getYouTubeId(urlOrId));
	const posterUrl =
		typeof customThumbnail === "string"
			? customThumbnail
			: `https://i.ytimg.com/vi/${videoId}/${poster}.jpg`;

	return (
		<div
			className={css({
				rounded: "lg",
				overflow: "hidden",
				position: "relative",
				width: "100%",
				aspectRatio: "16/9",
				background: "overlay",
			})}
			data-title={title}
			{...props}
		>
			<div
				className={css({
					position: "absolute",
					top: 0,
					left: 0,
					height: "100%",
					width: "100%",
				})}
			>
				<Image
					src={posterUrl}
					fetchPriority="high"
					width={700}
					quality={30}
					alt={title}
					className={css({
						width: "100%",
						height: "100%",
						display: "block",
					})}
				/>
			</div>
			<YoutubeSpawner videoId={videoId}>
				<YouTubeIcon
					className={css({ margin: "auto", width: 24, height: 24 })}
				/>
				<noscript>
					<a
						href={`https://www.youtube.com/watch?v=${videoId}`}
						className={css({
							display: "block",
							position: "absolute",
							top: 0,
							right: 0,
							height: "100%",
							width: "100%",
							zIndex: 10,
							color: "white",
						})}
						target="_blank"
						rel="noreferrer noopener"
					>
						Watch on YouTube
					</a>
				</noscript>
			</YoutubeSpawner>
		</div>
	);
};
