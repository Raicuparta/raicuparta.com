import React from 'react';
import { css } from '../styled-system/css';

type Props = { title: string; children: React.ReactNode };

export const Section = (props: Props) => (
  <div>
    <h3
      className={css({
        fontSize: 'lg',
        fontWeight: 'normal',
        textAlign: 'center',
        marginBottom: 2,
      })}
    >
      {props.title}
    </h3>
    {props.children}
  </div>
);
