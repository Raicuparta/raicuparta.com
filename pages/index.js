import React from 'react'
import css from 'styled-jsx/css'

import Icon from '../components/icon'
import Face from '../components/face'
import Header from '../components/header'

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
    <Face />
    <Header
      title="Ricardo Lopes"
      subtitle="Front-end Developer"
    />
    <main>
      <nav className="links">
        {links.map(link =>(
          <Icon key={link.name} {...link} />
        ))}
      </nav>
    </main>

    <style jsx>{styles}</style>
  </div>
)

const styles = css.global`
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
`

export default Home
