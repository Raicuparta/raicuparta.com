import otherProjects from '../other-projects.json';
import { websiteUrl } from '../../helpers/constants';
import { PageHead } from '../../components/page-head';
import type { GetStaticPropsContext, InferGetStaticPropsType } from 'next';
import { TextLink } from '../../components/text-link';
import { Card } from '../../components/card';
import { ModCard } from '../../components/mod-card';
import { IconButton } from '../../components/icon-button';

export type Project = InferGetStaticPropsType<typeof getStaticProps>;

const Project = (props: Project) => (
  <>
    <PageHead
      description={`${props.title} is a mod that converts "${props.title}" into a VR game.`}
      imageUrl={`${websiteUrl}${`/projects/${props.id}.jpg`}`}
      title={`${props.title} mod for ${props.title}`}
      imageWidth={400}
      imageHeight={225}
      largeImage
    ></PageHead>
    <Card className="mb-2 p-2" data-nosnippet>
      <TextLink href="/" isExternal={false}>
        Homepage
      </TextLink>
      <span className="text-xl leading-none">{' › '}</span>
      <span>{props.title}</span>
    </Card>
    <Card className='p-2'>
      <p>{props.description}</p>
      <div className="flex gap-4 flex-wrap justify-center">
        {props.buttonLinks?.page && (
          <IconButton
            href={props.buttonLinks.page}
            iconName="YouTube"
            className="bg-cta"
          >
            Info
          </IconButton>
        )}
        {props.buttonLinks?.source && (
          <IconButton
            href={props.buttonLinks.source}
            iconName="Github"
            className="bg-cta bg-opacity-30"
          >
            Source code
          </IconButton>
        )}
      </div>
    </Card>
  </>
);

export async function getStaticPaths() {
  return {
    paths: otherProjects.map((project) => ({
      params: {
        project: project.id,
      },
    })),
    fallback: false,
  };
}

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const projectId = context.params?.project;

  if (typeof projectId != 'string') {
    throw new Error(
      `modPage param is of wrong type. Expected string, got ${typeof projectId}`
    );
  }

  const project = otherProjects.find(({ id }) => id === projectId);

  if (!project) {
    throw new Error(`failed to find mod for modPage ${projectId}`);
  }

  return {
    props: {
      ...project,
    },
  };
};

export default Project;
