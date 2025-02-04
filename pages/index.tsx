import { ButtonLink } from '../components/button-link';
import { MainPageSection } from '../components/main-page-section';
import { ModImage } from '../components/mod-image';
import { PageHead } from '../components/page-head';
import { SteamEmbed } from '../components/steam-embed';
import { TextLink } from '../components/text-link';
import { bestMods } from '../data/best-mods';
import { mehMods } from '../data/meh-mods';
import { otherProjects } from '../data/other-projects';
import { websiteUrl } from '../helpers/constants';
import { css } from '../styled-system/css';
import { stack } from '../styled-system/patterns';

const Home = () => (
  <>
    <PageHead
      description="Raicuparta makes VR mods for flat games"
      imageUrl={`${websiteUrl}/img/avatar.png`}
      imageWidth={120}
      title="Raicuparta's VR mods"
    />
    <title>Raicuparta</title>
    <div className={stack()}>
      <MainPageSection id="intro">
        <p>Hello. I'm Raicuparta, and I'm some kind of developer.</p>
        <p>
          I'm most known for my{' '}
          <TextLink href="#vr-mods" isExternal={false}>
            VR mods
          </TextLink>
          : I modify flat games to make them work in VR, with stereo rendering
          and motion control support. These mods are available on{' '}
          <TextLink href="https://www.patreon.com/raivr">my Patreon</TextLink>{' '}
          and on <TextLink href="https://raicuparta.itch.io">Itch.io</TextLink>
        </p>
        <p>
          I also have professional experience with full-stack web development,
          but mostly frontend. I've used this experience in a few of my{' '}
          <TextLink isExternal={false} href="#other-projects">
            personal projects
          </TextLink>{' '}
          too.
        </p>
      </MainPageSection>
      <MainPageSection
        title="Raicuparta's Top VR Mods"
        id="vr-mods"
        description="These are the mods I worked the hardest on, playable from start to finish in 6dof VR, with full motion control support, etc. These will give you an experience close to some top native VR games."
      >
        {bestMods.map((mod) => {
          return (
            <ButtonLink
              key={mod.id}
              href={`${mod.id}-vr-mod`}
              title={`${mod.title} - ${mod.description}`}
            >
              <ModImage
                src={`/img/projects/${mod.id}.png`}
                title={mod.title}
                description={mod.description}
              />
            </ButtonLink>
          );
        })}
      </MainPageSection>
      <MainPageSection
        title="'Just OK' VR Mods"
        id="meh-vr-mods"
        description="These mods that I wasn't able to fully polish for one reason or another, but still allow you to experience the game in VR. You should expect some jank."
      >
        {mehMods.map((mod) => {
          return (
            <ButtonLink
              key={mod.id}
              href={`${mod.id}-vr-mod`}
              title={`${mod.title} - ${mod.description}`}
            >
              <ModImage
                src={`/img/projects/${mod.id}.png`}
                title={mod.title}
                description={mod.description}
              />
            </ButtonLink>
          );
        })}
      </MainPageSection>
      <MainPageSection title="Raicuparta's Other Projects" id="other-projects">
        {otherProjects.map((project) => {
          return (
            <ButtonLink
              key={project.id}
              href={project.url}
              title={project.title}
            >
              <ModImage
                src={`/img/projects/${project.id}.png`}
                title={project.title}
                description={project.description}
              />
            </ButtonLink>
          );
        })}
      </MainPageSection>
    </div>
  </>
);

export default Home;
