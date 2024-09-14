import { IconName } from '../svg-assets';

export type Project = {
  id: string;
  title: string;
  subtitle?: string;
  mainVideo: string;
  videos: string[];
  articles: string[];
  description: string;
  buttons: ProjectButton[];
  moreLinks: Link[];
  steamEmbed?: {
    appId: string;
    description: string;
  };
};

export type Link = {
  label: string;
  url: string;
};

export type ProjectButton = {
  url: string;
  icon: IconName;
  label: string;
};

export const mods: Project[] = [
  {
    title: 'HeavenVR',
    mainVideo: 'zC-k2HTqg1A',
    videos: ['DrwI5f5qqpM', '9guAWg58RrU'],
    articles: [
      'https://www.eurogamer.net/this-new-flatscreen-to-vr-mod-turns-neon-white-into-the-perfect-just-one-more-go-vr-game',
      'https://www.realovirtual.com/noticias/11851/frenetico-plataformas-neon-white-tendra-mod-vr-este-mismo-mes',
    ],
    subtitle: 'Neon White VR Mod',
    id: 'neon-white',
    description:
      "Neon White is a really fun speedrunning FPS, but don't get too scared by the fast-paced shooter/platformer gameplay. The movement is really smooth and the game converts really well to VR. It's an intense, fun, and addictive VR experience.",
    buttons: [
      {
        url: 'https://raicuparta.itch.io/heaven-vr',
        icon: 'Itch',
        label: 'Download on Itch',
      },
      {
        url: 'https://github.com/Raicuparta/heaven-vr',
        icon: 'Github',
        label: 'Star on GitHub',
      },
    ],
    moreLinks: [
      {
        label: 'Neon White on Steam',
        url: 'https://store.steampowered.com/app/1533420/Neon_White/',
      },
    ],
  },
  {
    id: 'outer-wilds',
    title: 'NomaiVR',
    mainVideo: 'gPFiYRMm8Ok',
    videos: ['g2NbjF4fG0s', 'SCZ8vtl4sVs', '5ntWk0rJTC0', '_mfKvDbeEkg'],
    articles: [
      'https://uploadvr.com/outer-wilds-vr-mod/',
      'https://www.realovirtual.com/noticias/10852/outer-wilds-esta-gamepass-se-puede-jugar-vr',
    ],
    subtitle: 'Outer Wilds VR Mod',
    description:
      'NomaiVR is a VR mod for Outer Wilds. It was my first VR mod. The full game can be played in VR with room-scale tracking and motion controls.',
    buttons: [
      {
        icon: 'Download',
        url: 'https://outerwildsmods.com/mods/nomaivr/',
        label: 'Download on OuterWildsMods.com',
      },
      {
        url: 'https://github.com/Raicuparta/nomai-vr',
        icon: 'Github',
        label: 'Star on GitHub',
      },
    ],
    moreLinks: [
      {
        label: 'Outer Wilds on Steam',
        url: 'https://store.steampowered.com/app/753640/Outer_Wilds/',
      },
      {
        label: 'Outer Wilds on PC Xbox Game Pass',
        url: 'https://www.xbox.com/en-US/games/store/outer-wilds/C596FKDKMQN7',
      },
      {
        label: 'Outer Wilds on Epic Games Store',
        url: 'https://store.epicgames.com/en-US/p/outerwilds',
      },
    ],
  },
  {
    id: 'firewatch',
    title: 'Two Forks VR',
    mainVideo: 'Wo27DFX8rYw',
    videos: ['jO_V-sq-Ics', 'h2uI3ITaHj8', 'KeKsGIhehjU'],
    articles: [
      'https://www.roadtovr.com/firewatch-vr-mod-free-pc-vr-quest/',
      'https://vrscout.com/news/firewatch-vr-mod-now-available-free-of-charge/',
      'https://www.realovirtual.com/noticias/11291/mod-vr-firewatch-llega-su-version-definitiva',
      'https://uploadvr.com/firewatch-vr-mod-now-complete/',
    ],
    subtitle: 'Firewatch VR Mod',
    description:
      'Two Forks VR is a VR mod for Firewatch. The full game is playable in VR, with room-scale tracking, motion controls, and multiple comfort options. The mod is finished and has thus been open-sourced.',
    buttons: [
      {
        url: 'https://raicuparta.itch.io/two-forks-vr',
        icon: 'Itch',
        label: 'Download on Itch',
      },
      {
        url: 'https://github.com/Raicuparta/two-forks-vr',
        icon: 'Github',
        label: 'Star on GitHub',
      },
    ],
    moreLinks: [
      {
        label: 'Firewatch on Steam',
        url: 'https://store.steampowered.com/app/383870/Firewatch/',
      },
      {
        label: 'Firewatch on GOG',
        url: 'https://www.gog.com/en/game/firewatch',
      },
      {
        label: 'Firewatch on PC Xbox Game Pass',
        url: 'https://www.xbox.com/en-US/games/store/firewatch/BQQKG9H2STC0',
      },
      {
        label: 'Official page',
        url: 'https://www.firewatchgame.com/',
      },
    ],
  },
  {
    id: 'stanley-parable',
    title: 'StanleyVR',
    mainVideo: 'qM25FLL-NSQ',
    videos: ['JVanThRk5e8', 'iYt0YlLFjYI', 'ZIAWcsPLT1c'],
    articles: [
      'https://uploadvr.com/the-stanley-parable-vr-mod/',
      'https://www.realovirtual.com/noticias/11309/stanley-parable-tendra-mod-vr',
    ],
    buttons: [
      {
        url: 'https://raicuparta.itch.io/stanley-vr',
        icon: 'Itch',
        label: 'Download on Itch',
      },
      {
        url: 'https://github.com/Raicuparta/stanley-vr',
        icon: 'Github',
        label: 'Star on GitHub',
      },
    ],
    subtitle: 'The Stanley Parable: Ultra Deluxe VR Mod',
    description:
      'StanleyVR is a VR mod for The Stanley Parable: Ultra Deluxe. She mod is missing some polish, but the game is playable from start to finish. Includes full room-scale VR with motion controls. The mod is free nd open source.',
    moreLinks: [
      {
        label: 'The Stanley Parable: Ultra Deluxe on Steam',
        url: 'https://store.steampowered.com/app/1703340/The_Stanley_Parable_Ultra_Deluxe/',
      },
      {
        label: 'Official page',
        url: 'https://www.stanleyparable.com/',
      },
    ],
  },
  {
    title: 'BaboonVR',
    mainVideo: 'g3mzQDQ-iiE',
    videos: ['DUnzTh49XoI', 'XICW_xbxGZs'],
    articles: [
      'https://www.pcgamer.com/trombone-champ-looks-next-level-with-this-vr-mod/',
      'https://www.eurogamer.net/a-modder-has-added-vr-to-trombone-champ',
      'https://www.nme.com/news/gaming-news/trombone-champ-gets-unofficial-vr-support-with-meme-mod-3317965',
      'https://www.roadtovr.com/trombone-champ-vr-mod-quest-2-steam-pc/',
    ],
    subtitle: 'Trombone Champ VR Mod',
    id: 'trombone-champ',
    description:
      'BaboonVR is a VR mod for Trombone Champ. A silly meme mod for a silly meme game. The game screen is shown as a projection in front of you, while you use your hands to control the trombone.',
    buttons: [
      {
        url: 'https://raicuparta.itch.io/baboon-vr',
        icon: 'Itch',
        label: 'Download on Itch',
      },
    ],
    moreLinks: [
      {
        label: 'Trombone Champ: Unflattened on Steam',
        url: 'https://store.steampowered.com/app/3151670/Trombone_Champ_Unflattened/',
      },
      {
        label: 'Trombone Champ: Unflattened on Quest',
        url: 'https://www.meta.com/en-gb/experiences/trombone-champ-unflattened/25085547287757633/',
      },
      {
        label: 'Trombone Champ on Steam',
        url: 'https://store.steampowered.com/app/1059990/Trombone_Champ/',
      },
    ],
    steamEmbed: {
      appId: '3151670',
      description:
        'This mod eventually became an official VR port on Quest, PCVR, and PSVR 2. The official port is much, much better than the mod, so get that instead!',
    },
  },
  {
    title: 'ShipbreakerVR',
    mainVideo: 'UGGtz1lYMNw',
    videos: ['PZLhq5NiFKo'],
    articles: [],
    subtitle: 'Hardspace: Shipbreaker VR Mod',
    id: 'shipbreaker',
    description:
      'ShipbreakerVR is a VR mod for Hardspace: Shipbreaker. Has no motion controls, but features camera-independent aiming for all the game tools.',
    buttons: [
      {
        url: 'https://raicuparta.itch.io/shipbreaker-vr',
        icon: 'Itch',
        label: 'Download on Itch',
      },
      {
        url: 'https://github.com/Raicuparta/shipbreaker-vr',
        icon: 'Github',
        label: 'Star on GitHub',
      },
    ],
    moreLinks: [
      {
        label: 'Hardspace: Shipbreaker on Steam',
        url: 'https://store.steampowered.com/app/1161580/Hardspace_Shipbreaker/',
      },
      {
        label: 'Hardspace: Shipbreaker on PC Xbox Game Pass',
        url: 'https://www.xbox.com/en-US/games/store/hardspace-shipbreaker/9mw8rmsbb5qh',
      },
      {
        label: 'Official page',
        url: 'https://www.focus-entmt.com/en/games/hardspace-shipbreaker',
      },
    ],
  },
];
