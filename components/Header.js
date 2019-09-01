import React from 'react'
import css from 'styled-jsx/css'

const Header = ({
  title,
  subtitle,
}) => (
  <header>
    <h1>{title}</h1>
    <h2>{subtitle}</h2>
    <style jsx>{styles}</style>
  </header>
)

const styles = css`
  font-weight: normal;
  margin-top: 0;

  h1 {
    font-size: 3.5em;
    margin-bottom: 10px;
  }

  h2 {
    font-size: 2em;
    color: var(--accent);
    margin-bottom: 1.2em;
  }
`

export default Header
