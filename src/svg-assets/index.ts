/// <reference types="vite-plugin-svgr/client" />

import Avatar from "./avatar.svg?react";
import AvatarFancy from "./avatar-fancy.svg?react";
import Back from "./back.svg?react";
import Bluesky from "./bluesky.svg?react";
import Download from "./download.svg?react";
import Github from "./github.svg?react";
import Itch from "./itch.svg?react";
import Patreon from "./patreon.svg?react";
import PayPal from "./paypal.svg?react";
import Return from "./return.svg?react";
import YouTube from "./youtube.svg?react";
import ChevronRight from "./chevron-right.svg?react";

export const svgAssets = {
	Github,
	Patreon,
	Download,
	YouTube,
	Return,
	Itch,
	PayPal,
	Avatar,
	AvatarFancy,
	Back,
	Bluesky,
	ChevronRight,

};

export type IconName = keyof typeof svgAssets;
