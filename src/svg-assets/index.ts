/// <reference types="vite-plugin-svgr/client" />

import Avatar from "./avatar.svg?react";
import AvatarFancy from "./avatar-fancy.svg?react";
import Back from "./back.svg?react";
import Bluesky from "./bluesky.svg?react";
import Dev from "./dev.svg?react";
import Download from "./download.svg?react";
import Github from "./github.svg?react";
import Itch from "./itch.svg?react";
import Kofi from "./kofi.svg?react";
import Mastodon from "./mastodon.svg?react";
import Patreon from "./patreon.svg?react";
import PayPal from "./paypal.svg?react";
import Return from "./return.svg?react";
import TikTok from "./tiktok.svg?react";
import Twitter from "./twitter.svg?react";
import YouTube from "./youtube.svg?react";

export const svgAssets = {
	Dev,
	Github,
	Twitter,
	Patreon,
	Download,
	YouTube,
	Return,
	Itch,
	Mastodon,
	TikTok,
	PayPal,
	Avatar,
	AvatarFancy,
	Back,
	Bluesky,
	Kofi,
};

export type IconName = keyof typeof svgAssets;
