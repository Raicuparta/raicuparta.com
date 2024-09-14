import { ButtonLink } from '../components/button-link';
import { MainPageSection } from '../components/main-page-section';
import { ModImage } from '../components/mod-image';
import { PageHead } from '../components/page-head';
import { SteamEmbed } from '../components/steam-embed';
import { TextLink } from '../components/text-link';
import { mods } from '../data/mods';
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
        title="Trombone Champ: Unflattened"
        id="trombone-champ-unflattened"
      >
        <p>
          What started as an unofficial VR mod (
          <TextLink href="/trombone-champ-vr-mod" isExternal={false}>
            BaboonVR
          </TextLink>
          ) eventually became <strong>Trombone Champ: Unflattened</strong>, an
          official VR port targeting Meta Quest, PCVR, and PSVR 2.
        </p>
        <p>
          You can already{' '}
          <TextLink href="https://www.meta.com/en-gb/experiences/trombone-champ-unflattened/25085547287757633/">
            pre-order Trombone Champ: Unflattened on the Quest Store
          </TextLink>
          , or{' '}
          <TextLink href="https://store.steampowered.com/app/3151670/Trombone_Champ_Unflattened/">
            add it to your wishlist on Steam
          </TextLink>
          .
        </p>
        <SteamEmbed appId="3151670" utmSource="widget-rai-home" />
      </MainPageSection>
      <MainPageSection title="Raicuparta's VR Mods" id="vr-mods">
        {mods.map((mod) => {
          return (
            <ButtonLink
              key={mod.id}
              href={`${mod.id}-vr-mod`}
              title={`${mod.title} - ${mod.subtitle}`}
            >
              <ModImage
                src={`/img/projects/${mod.id}.png`}
                title={mod.title}
                description={mod.subtitle}
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
                description={project.title}
              />
            </ButtonLink>
          );
        })}
      </MainPageSection>
    </div>
  </>
);

export default Home;
