import React, { FunctionComponent } from 'react';

interface TextProps {
  text: string;
}

const text: FunctionComponent<TextProps> = function ({ text }) {
  return <div>{text}</div>;
};

export default text;
