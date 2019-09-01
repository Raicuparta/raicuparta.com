import React from 'react'
import Link from 'next/link'

import svg from './svg'

const Icon = ({
  name,
  title,
  url,
}) => {
  const SvgIcon = svg[name]

  return <a href={url} title={title}>
    <SvgIcon alt={title} />
    <style jsx>{`
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
    `}</style>
  </a>
}

export default Icon
