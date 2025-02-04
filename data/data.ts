import { IconName } from '../svg-assets';

export type Project = {
  id: string;
  title: string;
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
