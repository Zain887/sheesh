import React, { useState, useEffect } from 'react';

interface Props {
    images: { url: string; article: string }[];
}

const Slider: React.FC<Props> = (props) => {
    const { images } = props;
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentImageIndex((prevIndex) =>
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
        }, 3000);

        return () => clearInterval(intervalId);
    }, [images]);

    return (
        <div className='flex items-center justify-center'>
            {images.map((collection, index) => (
                <div className='relative' key={index}>
                    <img
                        src={collection.url}
                        alt=''
                        style={{
                            display: index === currentImageIndex ? 'block' : 'none',
                        }}
                        className='w-full h-auto shadow-lg shadow-[#B98416] rounded-md'
                    />
                    <div className='absolute bottom-0 right-0' style={{
                        display: index === currentImageIndex ? 'block' : 'none',
                    }}>
                        <h1 className='pr-4 text-9xl font-Roboto font-extrabold bg-gradient-to-r from-[#F9DF7B] to-[#B98416] text-transparent bg-clip-text'
                        >
                            {collection.article}
                        </h1>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Slider;
