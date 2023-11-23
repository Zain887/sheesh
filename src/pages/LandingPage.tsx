import React, { useState, useEffect } from 'react';
import Slider from '../components/Slider';

interface Props {
  // Define your component props here
}

const LandingPage: React.FC<Props> = (props) => {
  const images = [
    { url: '/assets/Angelo.webp', article: 'ANGELO' },
    { url: '/assets/Zollato.webp', article: 'ZOLLATO' },
    { url: '/assets/Medusa.webp', article: 'MEDUSA' },
  ];


  return (
    <>
      <Slider images={images} />
    </>
  );
};

export default LandingPage;
