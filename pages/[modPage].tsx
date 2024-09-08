import { Article, ProjectCard, Video } from '../components/project-card';
import { websiteUrl } from '../helpers/constants';
import { PageHead } from '../components/page-head';
import { getLinkPreview } from 'link-preview-js';
import type {
  GetStaticPropsContext,
  GetStaticPropsResult,
  InferGetStaticPropsType,
} from 'next';
import { URL } from 'url';
import { TextLink } from '../components/text-link';
import { Card } from '../components/card';
import { Project, mods } from '../data/mods';

type Props = {
  project: Project;
  articles: Article[];
  videos: Video[];
};

const ModPage = (props: Props) => (
  <>
    <PageHead
      description={props.project.subtitle}
      imageUrl={`${websiteUrl}${`/mods/${props.project.id}.jpg`}`}
      title={`${props.project.title}: ${props.project.subtitle}`}
      imageWidth={400}
      imageHeight={225}
      largeImage
    />
    <ProjectCard {...props} />
  </>
);

export async function getStaticPaths() {
  return {
    paths: mods.map((mod) => ({
      params: {
        modPage: `${mod.id}-vr-mod`,
      },
    })),
    fallback: false,
  };
}

function filterNullUndefined<T>(item: T | null | undefined): item is T {
  return item != undefined && item != null;
}

const getPreview = (url: string) =>
  getLinkPreview(url, {
    followRedirects: 'follow',
    timeout: 20000,
    headers: {
      'user-agent': 'googlebot',
    },
  });

export const getStaticProps = async (
  context: GetStaticPropsContext,
): Promise<GetStaticPropsResult<Props>> => {
  const modPage = context.params?.modPage;

  if (typeof modPage != 'string') {
    throw new Error(
      `modPage param is of wrong type. Expected string, got ${typeof modPage}`,
    );
  }

  const modId = modPage.replace('-vr-mod', '');
  const project = mods.find(({ id }) => id === modId);

  if (!project) {
    throw new Error(`failed to find mod for modPage ${modPage}`);
  }

  const articles = (
    await Promise.all(
      project.articles.map(async (articleUrl) => {
        try {
          const linkPreview = await getPreview(articleUrl);

          if (!('title' in linkPreview) || linkPreview.images.length === 0) {
            return null;
          }

          console.log('thing', linkPreview);

          const url = new URL(articleUrl).hostname.replace('www.', '');

          return {
            url: linkPreview.url,
            title: linkPreview.title,
            image: linkPreview.images[0] ?? '',
            favicon: linkPreview.favicons[linkPreview.favicons.length - 1],
            siteName: linkPreview.siteName ?? url,
          };
        } catch (error) {
          console.error(
            `Failed to get article from url ${articleUrl}: ${error}`,
          );
          return null;
        }
      }),
    )
  ).filter(filterNullUndefined);

  const videos = (
    await Promise.all(
      project.videos.map(async (videoUrl) => {
        const linkPreview = await getPreview(videoUrl);

        if (!('title' in linkPreview)) return null;

        return {
          url: linkPreview.url,
          title: linkPreview.title,
          image: linkPreview.images[0],
        };
      }),
    )
  ).filter(filterNullUndefined);

  const props: Props = {
    project,
    articles,
    videos,
  };

  deleteUndefined(props);

  return {
    props,
  };
};

// Hack needed to avoid JSON-Serialization validation error from Next.js https://github.com/zeit/next.js/discussions/11209
// >>> Reason: `undefined` cannot be serialized as JSON. Please use `null` or omit this value all together.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function deleteUndefined(obj: Record<string, any> | undefined): void {
  if (obj) {
    Object.keys(obj).forEach((key: string) => {
      if (obj[key] && typeof obj[key] === 'object') {
        deleteUndefined(obj[key]);
      } else if (typeof obj[key] === 'undefined') {
        delete obj[key]; // eslint-disable-line no-param-reassign
      }
    });
  }
}

export default ModPage;
