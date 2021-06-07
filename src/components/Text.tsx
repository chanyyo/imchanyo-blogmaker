import React, { FunctionComponent } from 'react';

interface TextProps {
  text: string;
}

const Text: FunctionComponent<TextProps> = function ({ text }) {
  return <div>{text}s</div>;
};

export default Text;
