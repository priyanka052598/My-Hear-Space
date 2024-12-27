// import React from 'react'
// import { Link } from 'react-router-dom'

// function Header() {
//     return (
//         <div className='w-full bg-[#1f1f1f] px-[100px] py-1 border-b-[1px] border-[#808080] font-sans font-medium flex justify-between items-center'>
//             <div className="left">
//                 <img className='w-70' src="Logo.png" alt="" />
//             </div>
//             <div className="right flex justify-between items-center gap-[40px]">
//                 <div className=" text-[18px]  flex gap-[40px]">
//                      <Link  className='text-[#808080] border-b-[1px] px-[9px] pb-[4px] border-[#d9d9d9]'>   Home</Link>
//                       <Link to={"/OurListeners"} className='text-[#808080]'>Our Listeners</Link>
//                       <Link className='text-[#808080]'>  Blog</Link>
//                       </div>
//                       <div className="btn">
//                 <button className='text-[18px] border text-[#d9d9d9] hover:bg-[#d9d9d9] hover:text-[#111111] border-white rounded-[40px] px-7 py-[7px]' type="button">Become a Listener</button>
//             </div>
//             </div>
            


//         </div>
//     )
// }

// export default Header

import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
    return (
        <>
        <div className="black-overlay"></div>
        <div className="w-full bg-[#1f1f1f] lg:px-[100px] md:px-8 lg:py-1 pt-2 border-b-[1px] border-[#808080] font-sans font-medium flex justify-between items-center">
            <div className="left">
                <img className=" md:w-20" src="Logo.svg" alt="Logo" />
            </div>
            <div className="right flex justify-between items-center lg:gap-[40px] md:gap-[20px]">
                <div className="text-[18px] flex lg:gap-[40px] md:gap-[20px]">
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            `px-[9px] pb-[4px] ${
                                isActive ? 'text-white border-b-[1px] border-white' : 'text-[#808080]'
                            }`
                        }
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/OurListeners"
                        className={({ isActive }) =>
                            `px-[9px] pb-[4px] ${
                                isActive ? 'text-white border-b-[1px] border-white' : 'text-[#808080]'
                            }`
                        }
                    >
                        Our Listeners
                    </NavLink>
                    <NavLink
                        to="/OurBlogs"
                        className={({ isActive }) =>
                            `px-[9px] pb-[4px] ${
                                isActive ? 'text-white border-b-[1px] border-white' : 'text-[#808080]'
                            }`
                        }
                    >
                        Blogs
                    </NavLink>
                </div>
                <div className="btn">
                    <button
                        className="text-[18px] border text-[#d9d9d9] hover:bg-[#d9d9d9] hover:text-[#111111] border-white rounded-[40px] px-7 py-[7px]"
                        type="button"
                    >
                        Become a Listener
                    </button>
                </div>
            </div>
        </div>
        </>
    );
}

export default Header;
