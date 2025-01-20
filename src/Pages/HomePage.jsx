import React, { useEffect, useState } from 'react'
import Header from '../Components/Home/Header'
import SafeSpace from '../Components/Home/SafeSpace/SafeSpace'
import Youfeel from '../Components/Home/Youfeel/Youfeel'
import Caringlisteners from '../Components/Home/Caringlisteners'
import Usersay from '../Components/Home/Usersay'
import Appfeatured from '../Components/Home/Appfeatured'
import Oursupprtiveblogs from '../Components/Home/Oursupprtiveblogs'
import Firstrecharge from '../Components/Home/Firstrecharge'
import FAQ from '../Components/Home/Faq/FAQ'
import Footer from '../Components/Home/Footer'
import Sharereview from '../Components/Home/Sharereview'
import Onestopsolution from '../Components/Home/Onestopsolution'
import { GoArrowUp } from "react-icons/go";



function HomePage() {
  const [showScrollTop, setShowScrollTop] = useState(false);



  useEffect(() => {
    // Listen to scroll events
    const handleScroll = () => {
        const isAtBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight/2;
        setShowScrollTop(isAtBottom); // Show scroll-to-top button when reaching the bottom
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
}, []);

const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top with smooth animation
};
  return (
    <div className='relative'>
   <Header/>
   <SafeSpace/>
   <Youfeel/>
   <Onestopsolution/>
   <Caringlisteners/>
   <Usersay/>
   <Appfeatured/>
   <Oursupprtiveblogs/>
   <Firstrecharge/>
   <FAQ/>
   <Sharereview/>
   {showScrollTop && (
//    

//  <div className="btn lg:text-[28px]  md:text-[12px] bg-white text-[#111111] shadow-[0_0_17px_7px_rgba(217,217,217,0.2)] font-semibold px-[2px] py-[2px] duration-300 cursor-pointer rounded-full">
//                       <div className="bg-white p-1 rounded-full">
//                         <GoArrowRight />
//                       </div>
//                     </div>


<div className="btn lg:text-[28px] z-50  w-fit fixed bottom-5 right-10 md:text-[12px] bg-white text-[#111111] shadow-[0_0_17px_7px_rgba(217,217,217,0.2)] font-semibold px-[2px] py-[2px] duration-300 cursor-pointer rounded-full">
  <div 
                    onClick={handleScrollToTop} 
                    
                    className="bg-white p-1 rounded-full">
                    <GoArrowUp/>
                </div>

</div>
              
            )}
 <Footer/>

   
    </div>
  )
}

export default HomePage