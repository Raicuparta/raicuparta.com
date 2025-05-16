import type { Project } from "./data";

export const mehMods: Project[] = [
	{
		id: "stanley-parable",
		title: "StanleyVR",
		mainVideo: "qM25FLL-NSQ",
		videos: ["JVanThRk5e8", "iYt0YlLFjYI", "ZIAWcsPLT1c"],
		articles: [
			"https://uploadvr.com/the-stanley-parable-vr-mod/",
			"https://www.realovirtual.com/noticias/11309/stanley-parable-tendra-mod-vr",
		],
		buttons: [
			{
				url: "https://raicuparta.itch.io/stanley-vr",
				icon: "Itch",
				label: "Download on Itch",
			},
			{
				url: "https://github.com/Raicuparta/stanley-vr",
				icon: "Github",
				label: "Star on GitHub",
			},
		],
		shortDescription: "Stanley Parable VR mod",
		longDescription:
			"Ultra Deluxe only. Missing some polish, but the game is playable from start to finish with motion controls.",
		moreLinks: [
			{
				label: "The Stanley Parable: Ultra Deluxe on Steam",
				url: "https://store.steampowered.com/app/1703340/The_Stanley_Parable_Ultra_Deluxe/",
			},
			{
				label: "Official page",
				url: "https://www.stanleyparable.com/",
			},
		],
	},
	{
		title: "BaboonVR",
		mainVideo: "g3mzQDQ-iiE",
		videos: ["DUnzTh49XoI", "XICW_xbxGZs"],
		articles: [
			"https://www.pcgamer.com/trombone-champ-looks-next-level-with-this-vr-mod/",
			"https://www.eurogamer.net/a-modder-has-added-vr-to-trombone-champ",
			"https://www.nme.com/news/gaming-news/trombone-champ-gets-unofficial-vr-support-with-meme-mod-3317965",
			"https://www.roadtovr.com/trombone-champ-vr-mod-quest-2-steam-pc/",
		],
		id: "trombone-champ",
		shortDescription: "Trombone Champ VR mod",
		longDescription:
			"Redundant now that there is an official port, Trombone Champ: Unflattened (which I worked on!).",
		buttons: [
			{
				url: "https://raicuparta.itch.io/baboon-vr",
				icon: "Itch",
				label: "Download on Itch",
			},
		],
		moreLinks: [
			{
				label: "Trombone Champ: Unflattened on Steam",
				url: "https://store.steampowered.com/app/3151670/Trombone_Champ_Unflattened/",
			},
			{
				label: "Trombone Champ: Unflattened on Quest",
				url: "https://www.meta.com/en-gb/experiences/trombone-champ-unflattened/25085547287757633/",
			},
			{
				label: "Trombone Champ: Unflattened on PSVR 2",
				url: "https://store.playstation.com/concept/10011900",
			},
			{
				label: "Trombone Champ on Steam",
				url: "https://store.steampowered.com/app/1059990/Trombone_Champ/",
			},
		],
		steamEmbed: {
			appId: "3151670",
			description:
				"This mod eventually became an official VR port on Quest, PCVR, and PSVR 2. The official port is much, much better than the mod, so get that instead!",
		},
	},
	{
		title: "ShipbreakerVR",
		mainVideo: "UGGtz1lYMNw",
		videos: ["PZLhq5NiFKo"],
		articles: [],
		id: "shipbreaker",
		shortDescription: "Hardspace: Shipbreaker VR mod",
		longDescription:
			"Has no motion controls, but features camera-independent aiming for all the game tools. Some UI elements broken.",
		buttons: [
			{
				url: "https://raicuparta.itch.io/shipbreaker-vr",
				icon: "Itch",
				label: "Download on Itch",
			},
			{
				url: "https://github.com/Raicuparta/shipbreaker-vr",
				icon: "Github",
				label: "Star on GitHub",
			},
		],
		moreLinks: [
			{
				label: "Hardspace: Shipbreaker on Steam",
				url: "https://store.steampowered.com/app/1161580/Hardspace_Shipbreaker/",
			},
			{
				label: "Hardspace: Shipbreaker on PC Xbox Game Pass",
				url: "https://www.xbox.com/en-US/games/store/hardspace-shipbreaker/9mw8rmsbb5qh",
			},
			{
				label: "Official page",
				url: "https://www.focus-entmt.com/en/games/hardspace-shipbreaker",
			},
		],
	},
];
