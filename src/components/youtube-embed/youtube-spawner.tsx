"use client";

import * as React from "react";
import YouTubePlayer from "yt-player";
import { css } from "../../styled-system/css";

type Props = {
	videoId: string;
	children: React.ReactNode;
};

export const YoutubeSpawner = ({ videoId, children }: Props) => {
	const [isPlaying, setIsPlaying] = React.useState(false);
	const videoRef = React.useRef<HTMLDivElement>(null);

	const addIframe = () => {
		if (!videoRef.current) return;

		const player = new YouTubePlayer(videoRef.current, {
			host: "https://www.youtube-nocookie.com",
		});
		player.load(videoId, true);

		setIsPlaying(true);
	};

	return (
		<>
			<div
				ref={videoRef}
				className={css({
					position: "absolute",
					top: 0,
					left: 0,
					height: "100%",
					width: "100%",
				})}
			/>
			{!isPlaying && (
				<button
					onClick={addIframe}
					aria-label="Play"
					type="button"
					className={css({
						position: "relative",
						height: "100%",
						width: "100%",
						opacity: 0.8,
						color: "black",
						cursor: "pointer",
						_hover: {
							opacity: 0.8,
							color: "red", // TODO check color
						},
					})}
				>
					{children}
				</button>
			)}
		</>
	);
};
