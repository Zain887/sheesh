import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { BiLogoTiktok } from "react-icons/bi";
import { FaFacebook } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { AiFillInstagram } from "react-icons/ai";





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
            <div className='flex items-center justify-evenly'>
                <a href="#">
                    <BiLogoTiktok color='#F9DF7B' className='mr-2 animation-loop hover:scale-125' size={20} />
                </a>
                <a href="#">
                    <FaFacebook color="#F9DF7B" className='mr-2 animation-loop hover:scale-125' size={20} />
                </a>
                <a href="#">
                    <IoLogoWhatsapp color="#F9DF7B" className='mr-2 animation-loop hover:scale-125' size={20} />
                </a>
                <a href="https://www.instagram.com/sheesh.hookahs/">
                    <AiFillInstagram color="#F9DF7B" className='mr-2 animation-loop hover:scale-125' size={20} />
                </a>
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
