import React from 'react';
import css from 'styled-jsx/css';

type Props = {
  title: string;
  subtitle: string;
};

export const Header = ({ title, subtitle }: Props) => (
  <header style={{ fontWeight: 'normal' }}>
    <h1>{title}</h1>
    <h2>{subtitle}</h2>
    <style jsx>{styles}</style>
  </header>
);

const styles = css`
  margin-top: 0;

  h1 {
    font-size: 3.5em;
    margin-bottom: var(--spacing);
  }

  h2 {
    font-size: 2em;
    color: var(--accent);
    margin-bottom: 0.5em;
  }
`;
