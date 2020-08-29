import React from 'react';
import css from 'styled-jsx/css';

import assets from '../svg-assets';

type Props = {
  name: keyof typeof assets;
  title: string;
  url: string;
};

export const Icon = ({ name, title, url }: Props) => {
  const SvgIcon = assets[name];

  return (
    <a href={url} title={title}>
      <SvgIcon />
      <style jsx>{styles}</style>
    </a>
  );
};

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
`;
