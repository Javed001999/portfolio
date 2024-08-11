import React, { useState } from 'react';
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from 'react-scroll';

function Navbar() {
    const [menu, setMenu] = useState(false);
    const [activeItem, setActiveItem] = useState("Home");

    const navItems = [
        { id: 1, text: "Home" },
        { id: 2, text: "About" },
        { id: 3, text: "Portfolio" },
        { id: 4, text: "Experience" },
        { id: 5, text: "Contact" }
    ];

    const handleSetActive = (text) => {
        setActiveItem(text);
        setMenu(false); // Close the mobile menu on selection
    }

    return (
        <>
            <div className='max-w-screen-2xl container mx-auto px-4 md:px-20 h-16 shadow-md fixed top-0 left-0 right-0 z-50 bg-white'>
                <div className='flex justify-between items-center h-16'>
                    <div className='flex space-x-2'>
                        <h1 className='font-semibold text-xl cursor-pointer'>Javed
                            <span className='text-green-500 text-xl'> Ansari</span>
                            <p className='text-sm'>Web Developer</p>
                        </h1>
                    </div>
                    {/* Desktop Navbar */}
                    <div>
                        <ul className='hidden md:flex space-x-8'>
                            {navItems.map(({ id, text }) => (
                                <li
                                    className={`hover:scale-105 duration-200 cursor-pointer ${activeItem === text ? 'border-b-2 border-red-500' : ''}`}
                                    key={id}
                                >
                                    <Link
                                        to={text}
                                        smooth={true}
                                        duration={500}
                                        offset={-70}
                                        className={activeItem === text ? 'text-red-500' : ''}
                                        onClick={() => handleSetActive(text)}
                                    >
                                        {text}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <div onClick={() => setMenu(!menu)} className='md:hidden'>
                            {menu ? <IoCloseSharp size={24} /> : <AiOutlineMenu size={24} />}
                        </div>
                    </div>
                </div>
                {/* Mobile Navbar */}
                {menu && (
                    <div className='bg-white'>
                        <ul className='md:hidden flex flex-col h-screen items-center justify-center space-y-3 text-xl'>
                            {navItems.map(({ id, text }) => (
                                <li
                                    className={`hover:scale-105 duration-200 cursor-pointer font-semibold ${activeItem === text ? 'border-b-2 border-red-500' : ''}`}
                                    key={id}
                                >
                                    <Link
                                        to={text}
                                        smooth={true}
                                        duration={500}
                                        offset={-70}
                                        className={activeItem === text ? 'text-red-500' : ''}
                                        onClick={() => handleSetActive(text)}
                                    >
                                        {text}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </>
    )
}

export default Navbar;