import * as React from 'react';
import { render, Artboard } from 'react-sketchapp';
import ImgSvg from './imgs/sketch.svg';

const Document = () => {

  return (
    <Artboard
      name="my-image"
      style={{
        width: 1920,
        height: 1080
      }}
    >
      <ImgSvg></ImgSvg>
    </Artboard>
  );
}

export default () => {
  render(<Document />, context.document.currentPage());
};
