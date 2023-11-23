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
      <p className='text-center text-[#F9DF7B] font-Roboto font-extrabold text-5xl my-3 animation-loop'>ITS SLEEK | ITS SEXY | ITS SHEESH</p>
    </>
  );
};

export default LandingPage;
