import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

interface Props {
    // Define your component props here
}

const Menubar: React.FC<Props> = (props) => {
    // Define your menu items
    const menuItems = [
        { label: 'Discover', link: '/' },
        { label: 'Exclusive', link: '/exclusive' },
        { label: 'Store', link: '/store' },
        { label: 'Business', link: '/business' },
        { label: 'Black Weeks', link: '/black-weeks' },
    ];

    const [activeIndex, setActiveIndex] = useState<number | null>(0);

    return (
        <nav className="flex items-center px-10 py-3 justify-between fixed z-10 top-0 backdrop-blur-md w-full bg-[#000000b5]">
            <NavLink to="/" className="w-52 h-auto">
                <img src="/assets/logo.svg" alt="Sheesh" width={'100%'} height={'100%'} />
            </NavLink>
            <div className="w-full flex justify-center gap-24">
                {menuItems.map((item, index) => (
                    <NavLink
                        key={index}
                        to={item.link}
                        className={`text-[#F9DF7B] font-Roboto text-md cursor-pointer ${index === activeIndex
                                ? 'px-2 py-1 font-bold rounded-md bg-[#b98416]'
                                : 'border-b-2 px-2 py-1 border-transparent hover:border-[#B98416] hover:font-bold  transition-border duration-300'
                            }`}
                        onClick={() => setActiveIndex(index)}
                    >
                        {item.label}
                    </NavLink>
                ))}
            </div>
            <NavLink
                to="/order-now"
                className="text-[#F9DF7B] w-36 font-bold text-center py-1 rounded-md shadow-sm shadow-[#F9DF7B] animation-loop"
            >
                Order Now
            </NavLink>
        </nav>
    );
};

export default Menubar;
