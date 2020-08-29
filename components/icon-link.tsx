import React from 'react';
import css from 'styled-jsx/css';

import assets from '../svg-assets';
import { Icon } from './icon';

type Props = {
  name: keyof typeof assets;
  title: string;
  url: string;
};

export const IconLink = ({ name, title, url }: Props) => {
  return (
    <a href={url} title={title}>
      <Icon name={name} />
      <style jsx>{styles}</style>
    </a>
  );
};

const styles = css`
  width: 20px;
  height: 20px;
  margin: 0 15px;
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
