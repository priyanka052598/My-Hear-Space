import React, { useCallback, useEffect, useState } from 'react'
import Header from '../Components/Home/Header'
import Ourlistener from '../Components/OurListeners/Ourlistener'
import Firstrecharge from '../Components/Home/Firstrecharge'
import Footer from '../Components/Home/Footer'
import Sharereview from '../Components/Home/Sharereview'

function OurListeners() {
      const [isLgScreen, setIsLgScreen] = useState(window.innerWidth >= 1024);
       useEffect(() => {
              const handleScrollToTop = () => {
                window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top with smooth animation
            };
            handleScrollToTop()
            
          
            }, [])
    
    const DownloadButton = useCallback(() => {
      return   <div className="downloadsbtns fixed top-52 gap-4 right-5 z-50 ">
      <div  className="playstore text-white    rounded-[30px] shadow-[0_0_15px_6px_rgba(217,217,217,0.2)] border-white ">
                              <img className={` ${isLgScreen ? "w-[42px]" : "w-[30px]" }`} src="sm-playstore.svg" alt="" srcset="" />
                        
                          
      
                          </div>
                          <div  className="playstore mt-3  text-white    rounded-[30px] shadow-[0_0_15px_6px_rgba(217,217,217,0.2)] border-white">
                              <img className={` ${isLgScreen ? "w-[42px]" : "w-[30px]" }`} src="sm-apple.svg" alt="" srcset="" />
                        
                          
      
                          </div>
      
      </div>
    
    })
  
  return (
    <div>
        <Header/>
        <Ourlistener/>
        <Firstrecharge/>
        <Sharereview/>
        <Footer/>
        <DownloadButton/>

    
    </div>
  )
}

export default OurListeners