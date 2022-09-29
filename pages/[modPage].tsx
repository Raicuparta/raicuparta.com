import { ModCard } from '../components/mod-card';
import mods from './mods.json';
import { websiteUrl } from '../helpers/constants';
import { PageHead } from '../components/page-head';
import { getLinkPreview } from 'link-preview-js';
import type { GetStaticPropsContext, InferGetStaticPropsType } from 'next';
import { URL } from 'url';

export type Mod = InferGetStaticPropsType<typeof getStaticProps>;

const ModPage = (props: Mod) => {
  console.log(props);

  return (
    <>
      <PageHead
        description={`${props.title} is a mod that converts "${props.gameName}" into a VR game.`}
        imageUrl={`${websiteUrl}${`/mods/${props.gameKey}/props.jpg`}`}
        title={`${props.title} mod for ${props.gameName}`}
        imageWidth={400}
        imageHeight={225}
        largeImage
      ></PageHead>
      <ModCard {...props} />
    </>
  );
};

export async function getStaticPaths() {
  return {
    paths: mods.map((mod) => ({
      params: {
        modPage: `${mod.gameKey}-vr-mod`,
      },
    })),
    fallback: false,
  };
}

function filterUndefined<T>(item: T | undefined): item is T {
  return item != undefined;
}

function pick<T, K extends keyof T>(obj: T, ...keys: K[]): Pick<T, K> {
  const ret: any = {};
  keys.forEach((key) => {
    ret[key] = obj[key];
  });
  return ret;
}

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const modPage = context.params?.modPage;

  if (typeof modPage != 'string') {
    throw new Error(
      `modPage param is of wrong type. Expected string, got ${typeof modPage}`
    );
  }

  const modId = modPage.replace('-vr-mod', '');
  const mod = mods.find(({ gameKey }) => gameKey === modId);

  if (!mod) {
    throw new Error(`failed to find mod for modPage ${modPage}`);
  }

  const previewSettings = {
    followRedirects: 'follow',
    timeout: 20000,
  } as const;

  const articles = (
    await Promise.all(
      mod.articles.map(async (article) => {
        const linkPreview = await getLinkPreview(article.url, previewSettings);

        if (!('title' in linkPreview)) return undefined;

        const url = new URL(article.url).hostname.replace('www.', '');

        return {
          url: linkPreview.url,
          title: linkPreview.title,
          image: linkPreview.images[0],
          favicon: linkPreview.favicons[linkPreview.favicons.length - 1],
          siteName: linkPreview.siteName ?? url,
        };
      })
    )
  ).filter(filterUndefined);

  const videos = (
    await Promise.all(
      mod.videos.map(async (videoUrl) => {
        const linkPreview = await getLinkPreview(videoUrl);

        if (!('title' in linkPreview)) return undefined;

        return linkPreview;
      })
    )
  ).filter(filterUndefined);

  return {
    props: {
      ...mod,
      articles,
      videos,
    },
  };
};

export default ModPage;
