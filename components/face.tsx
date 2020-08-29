import React from 'react';
import css from 'styled-jsx/css';

export const Face = () => (
  <picture>
    <source srcSet="img/face.webp" type="image/webp" />
    <source srcSet="img/face.jpg" type="image/jpeg" />
    <img src="img/face.jpg" alt="" />
    <style jsx>{styles}</style>
  </picture>
);

const styles = css`
  img {
    position: fixed;
    opacity: 0;
    animation: move 20s infinite linear;
    animation-delay: 10s;
    object-fit: contain;
    width: 100%;
    height: 100%;
    pointer-events: none;
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
`;
