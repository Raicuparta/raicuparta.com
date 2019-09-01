import React from 'react'
import css from 'styled-jsx/css'

import svg from '../assets'

const Icon = ({
  name,
  title,
  url,
}) => {
  const SvgIcon = svg[name]

  return (
    <a href={url} title={title}>
      <SvgIcon alt={title} />
      <style jsx>{styles}</style>
    </a>
  )
}

const styles = css`
  width: 50px;
  height: 50px;
  margin: 15px;
  display: inline-block;
  opacity: 0.5;
  transition: 150ms;
  fill: var(--text);

  :hover,
  :active,
  :focus {
    transform: scale(1.1);
    opacity: 1;
    fill: var(--accent);
  }
`

export default Icon
