import React, { useState, useEffect } from 'react';
import Menubar from '../components/commonComponents/Menubar';

interface Props {
  // Define your component props here
}

const LandingPage: React.FC<Props> = (props) => {
  const images = [
    '/assets/Angelo.webp',
    '/assets/Zollato.webp',
    '/assets/Medusa.webp',
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Increment the index and reset to 0 if it exceeds the number of images
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Adjust the interval time as needed (in milliseconds)

    // Clear the interval on component unmount
    return () => clearInterval(intervalId);
  }, [images.length]);

  return (
    <>
      <Menubar />
      <div className='flex items-center justify-center'>
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt=''
            style={{
              display: index === currentImageIndex ? 'block' : 'none',
              // Add any additional styling as needed
            }}
            className='w-full h-auto'
          />
        ))}
      </div>
    </>
  );
};

export default LandingPage;
