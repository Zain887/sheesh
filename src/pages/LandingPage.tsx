import React, { useState, useEffect, MouseEvent } from 'react';
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

  const additionalImages = [
    '/assets/2.jpg',
    '/assets/6.jpg',
    '/assets/8.jpg',
    '/assets/4.jpg',
  ];
  const [positions, setPositions] = useState<{ x: number; y: number }[]>([
    { x: 0, y: 0 },
    { x: 0, y: 0 },
    { x: 0, y: 0 },
  ]);

  const handleMouseMove = (index: number, event: MouseEvent) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;

    setPositions((prevPositions) => {
      const newPositions = [...prevPositions];
      newPositions[index] = { x, y };
      return newPositions;
    });
  };
  return (
    <>
      <Slider images={images} />
      <p className='text-center text-[#F9DF7B] font-Roboto font-extrabold text-5xl my-3'>
        ITS SLEEK | ITS SEXY | ITS SHEESH
      </p>
      <div className='my-5 flex items-center justify-evenly'>
        {additionalImages.map((image, index) => (
          <div
            key={index}
            className='w-[20%] h-auto bg-gray-500 border-2 border-[#b98416] rounded-md overflow-hidden relative transform hover:rotate-180 hover:scale-y-[-1] transition-transform duration-1000 cursor-pointer'
          >
            <img src={image} alt='' width={'100%'} height={'100%'} />
          </div>
        ))}
      </div>
      <div className='text-center mt-16 text-[#F9DF7B]'>
        <p className='text-lg font-Roboto'>STEAMULATION PRODUCTS AT A GLANCE</p>
        <p className='text-3xl font-bold mt-5'>Currently most popular <br />
          The Steamulation Highlights</p>
      </div>
      <div className="flex mt-5 mb-16 justify-evenly">
        {positions.map((position, index) => (
          <img
            key={index}
            src={`/assets/framtrasn${index + 1}.png`}
            alt="sheesh"
            className="w-72 h-auto cursor-pointer hover:scale-110 duration-700 relative"
            style={{
              transform: `translate(${position.x * 20}px, ${position.y * 20}px)`,
            }}
            onMouseMove={(event) => handleMouseMove(index, event)}
          />
        ))}
      </div>
      <div className='flex p-5'>
        <div className='w-[33.33%] h-full overflow-hidden border-2 border-[#F9DF7B]'>
          <img src="/assets/frame7.jpg" alt="sheesh" width={'100%'} height={'100%'} />
        </div>
        <div className='w-[33.33%] border-y-2 border-[#F9DF7B]'>
          <div className='w-full h-full bg-[#F9DF7B] flex items-center justify-center'>
            <div className='text-center p-5'>
              <p className='font-Roboto text-2xl font-bold'>
                Your Luxurious
                Smoking Partner
              </p>
              <p className='font-Roboto text-xl font-light my-8'>
                Sheesh is an Emirati brand, transforming the ancient tradition into a luxurious experience, by creating ravishing & exquisite designs with world's finest materials.
              </p>
              <p className='mb-10 font-Roboto text-2xl font-bold'>
                Hand Crafted in UAE.
              </p>
              <a href="#" className='text-lg font-light text-black border p-2 border-black hover:bg-black hover:text-[#f9df7b] duration-150'>
                Descover More
              </a>
            </div>
          </div>
        </div>
        <div className='w-[33.33%] h-full overflow-hidden border-2 border-[#F9DF7B]'>
          <img src="/assets/frame6.jpg" alt="sheesh" width={'100%'} height={'100%'} />
        </div>
      </div>
    </>
  );
};

export default LandingPage;
