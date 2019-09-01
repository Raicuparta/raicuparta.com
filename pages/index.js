import React from 'react'

import Icon from '../components/icon'

const links = [
  {
    name: "twitter",
    title: "Twitter @Raicuparta",
    url: "https://twitter.com/raicuparta",
  },
  {
    name: "linkedin",
    title: "LinkedIn Ricardo Lopes",
    url: "https://www.linkedin.com/in/ricardo-lopes-3a071643/",
  },
  {
    name: "envelope",
    title: "E-mail raicuparta@gmail.com",
    url: "mailto:raicuparta@gmail.com",
  },
  {
    name: "stackOverflow",
    title: "Stack Overflow @Raicuparta",
    url: "https://stackoverflow.com/users/3962104/ricardo-lopes?tab=profile",
  },
  {
    name: "dev",
    title: "DEV @Raicuparta",
    url: "https://dev.to/raicuparta",
  },
  {
    name: "medium",
    title: "Medium @Raicuparta",
    url: "https://medium.com/@Raicuparta",
  },
  {
    name: "github",
    title: "Github @Raicuparta",
    url: "https://github.com/Raicuparta",
  },
]

const Home = () => (
  <div>
    <picture>
      <source srcSet="img/face.webp" type="image/webp" />
      <source srcSet="img/face.jpg" type="image/jpeg" />
      <img className="face" src="img/face.jpg" alt="" />
    </picture>
    <header>
      <div className="title">Ricardo Lopes</div>
      <div className="subtitle">Front-end Developer</div>
    </header>
    <main>
      <nav className="links">
        {links.map(link =>(
          <Icon key={link.name} {...link} />
        ))}
      </nav>
    </main>

    <style jsx global>{`
      body {
        --background: #222;
        --text: white;
        --accent: #8ee478;

        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 100vh;
        width: 100vw;
        margin: 0;
        overflow: hidden;
        font-family: 'Courier New', Courier;
        font-weight: 100;
        color: var(--text);
        background: var(--background);
        text-align: center;
      }

      .title {
        font-size: 3.5em;
        margin-bottom: 10px;
      }

      .subtitle {
        font-size: 2em;
        color: var(--accent);
        margin-bottom: 1.2em;
      }

      .face {
        position: fixed;
        opacity: 0;
        animation: move 20s infinite linear;
        animation-delay: 10s;
        object-fit: contain;
        width: 100%;
        height: 100%;
        pointer-events: none;
        display: none;
        top: 10000px;
      }

      @keyframes move {
        0% {
          opacity: 0;
          top: 70%;
          left: 70%;
        }
        25% {
          opacity: 0.1;
        }
        50% {
          opacity: 0;
          top: -30%;
          left: -30%;
          transform: scale(2) rotate(60deg);
        }
        51% {
          left: 70%;
          transform: scale(1);
        }
        75% {
          opacity: 0.1;
        }
        100% {
          top: 70%;
          left: 0;
          opacity: 0;
          transform: scale(2) rotate(-60deg);
        }
      }

      .svgthing {
        fill: blue;
      }
    `}</style>
  </div>
)

export default Home
