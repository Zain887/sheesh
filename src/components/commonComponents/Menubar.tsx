import React, { useState } from 'react';

interface Props {
    // Define your component props here
}

const Menubar: React.FC<Props> = (props) => {
    // Define your menu items
    const menuItems = [
        { label: 'Discover', link: '#' },
        { label: 'Exclusive', link: '#' },
        { label: 'Store', link: '#' },
        { label: 'Business', link: '#' },
        { label: 'Black Weeks', link: '#' },
    ];

    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    return (
        <nav className='flex items-center  px-10 py-5 justify-between fixed top-0 backdrop-blur-md w-full bg-[#000000b5]'>
            <a href="#" className=' w-52 h-auto'>
                <img src="/assets/logo.svg" alt="Sheesh" width={'100%'} height={'100%'} />
            </a>
            <div className='w-full flex justify-center gap-24'>
                {menuItems.map((item, index) => (
                    <a
                        key={index}
                        href={item.link}
                        className={`text-[#F9DF7B] font-Roboto text-md cursor-pointer ${index === activeIndex
                            ? 'border-b-2 border-[#B98416] font-bold'
                            : 'border-b-2 border-transparent hover:border-[#B98416] hover:font-bold  transition-border duration-300'
                            }`}
                        onClick={() => setActiveIndex(index)}
                    >
                        {item.label}
                    </a>
                ))}
            </div>
            <a
                href="#"
                className="text-[#F9DF7B] w-36 font-bold text-center py-1 rounded-md shadow-sm shadow-[#F9DF7B] animation-loop"
            >
                Order Now
            </a>
        </nav>
    );
};

export default Menubar;