import React from 'react';

type Props = { title: string; children: React.ReactNode };

export const Section = (props: Props) => (
  <div>
    <h3 className="text-lg font-normal text-center mb-2">{props.title}</h3>
    {props.children}
  </div>
);
