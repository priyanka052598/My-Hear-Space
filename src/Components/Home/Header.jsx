import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";



function Header() {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [isLgScreen, setIsLgScreen] = useState(window.innerWidth >= 1024);


    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    return (
        <>
            <div className="black-overlay"></div>
            <div className="w-full bg-[#1f1f1f] lg:px-[100px] md:px-8 lg:py-1 pt-2 border-b-[1px] border-[#808080] font-sans font-medium flex justify-between items-center">
                <div className="left">
                    <img className={` ${
                        isLgScreen ? "w-20" : "w-16 ml-3 py-2" }
                    }`} src="Logo.svg" alt="Logo" />
                </div>
                <div className="right flex justify-between items-center lg:gap-[40px] md:gap-[20px]">
                    <div className="hidden md:flex text-[18px] lg:gap-[40px] md:gap-[20px]">
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                `px-[9px] pb-[4px] ${isActive ? 'text-white border-b-[1px] border-white' : 'text-[#808080]'}`
                            }
                        >
                            Home
                        </NavLink>
                        <NavLink
                            to="/OurListeners"
                            className={({ isActive }) =>
                                `px-[9px] pb-[4px] ${isActive ? 'text-white border-b-[1px] border-white' : 'text-[#808080]'}`
                            }
                        >
                            Our Listeners
                        </NavLink>
                        <NavLink
                            to="/OurBlogs"
                            className={({ isActive }) =>
                                `px-[9px] pb-[4px] ${isActive ? 'text-white border-b-[1px] border-white' : 'text-[#808080]'}`
                            }
                        >
                            Blogs
                        </NavLink>
                    </div>
                    <div className="hidden md:flex btn">
                        <button
                            className="text-[18px] border text-[#d9d9d9] hover:bg-[#d9d9d9] hover:text-[#111111] border-white rounded-[40px] px-7 py-[7px]"
                            type="button"
                        >
                            Become a Listener
                        </button>
                    </div>
                    <div className="md:hidden">
                        <button onClick={toggleSidebar} className="text-white mr-8 p-2 bg-[#464646] rounded-full text-[30px]"><RxHamburgerMenu/></button>
                    </div>
                </div>
            </div>

            <div
                className={`fixed top-0 right-0 h-full bg-[#1f1f1f] w-[250px] transform ${
                    sidebarOpen ? 'translate-x-0' : 'translate-x-full'
                } transition-transform duration-300 ease-in-out z-50`}
            >
                <button onClick={toggleSidebar} className="text-white text-[28px] absolute top-6  p-2 bg-[#464646] rounded-full right-8"><RxCross2/></button>
                <nav className="mt-20">
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            `block px-4 py-2 text-[18px] ${isActive ? 'text-white' : 'text-[#808080]'}`
                        }
                        onClick={toggleSidebar}
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/OurListeners"
                        className={({ isActive }) =>
                            `block px-4 py-2 text-[18px] ${isActive ? 'text-white' : 'text-[#808080]'}`
                        }
                        onClick={toggleSidebar}
                    >
                        Our Listeners
                    </NavLink>
                    <NavLink
                        to="/OurBlogs"
                        className={({ isActive }) =>
                            `block px-4 py-2 text-[18px] ${isActive ? 'text-white' : 'text-[#808080]'}`
                        }
                        onClick={toggleSidebar}
                    >
                        Blogs
                    </NavLink>
                    <button
                    
                        className="block text-[18px] border text-[#d9d9d9] hover:bg-[#d9d9d9] hover:text-[#111111] border-white rounded-[40px] px-4 py-[7px] mt-4 mx-4"
                        type="button"
                        onClick={toggleSidebar}
                    >
                        Become a Listener
                    </button>
                </nav>
            </div>
        </>
    );
}

export default Header;
