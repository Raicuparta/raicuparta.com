import { getPagePreview } from "../helpers/page-preview";
import { css } from "../styled-system/css";
import { ButtonLink } from "./button-link";
import { Image } from "./image";

type Props = {
	youtubeId: string;
};

export default async function VideoPreview({ youtubeId }: Props) {
	const video = await getVideo(youtubeId);

	return (
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
				<Image width={320} height={180} src={video.image} alt={video.title} />
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
	);
}

async function getVideo(youtubeId: string) {
	const videoUrl = `https://www.youtube.com/watch?v=${youtubeId}`;
	const pagePreview = await getPagePreview(videoUrl);

	if (!("title" in pagePreview)) {
		throw new Error(
			`failed to get title from ${videoUrl} - ${JSON.stringify(pagePreview)}`,
		);
	}

	return {
		url: videoUrl,
		image: `https://i.ytimg.com/vi/${youtubeId}/mqdefault.jpg`,
		title: pagePreview.title,
	};
}
