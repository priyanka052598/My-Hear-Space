import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from "framer-motion";

function Caringlisteners() {
  const navigate = useNavigate();
  const [isLgScreen, setIsLgScreen] = useState(window.innerWidth >= 1024);
  const [currentIndex, setCurrentIndex] = useState(0);

  const listeners = [
    { bgimage: "caringlistenerframe.svg", name: "Simran", age: 26, description: "I started dating a guy when I was young, it went on for 4 long years. Since the beginning of the relationship... Read More" },
    { bgimage: "caringlistenerframe.svg", name: "Another Listener", age: 30, description: "Another started dating a guy when I was young, it went on for 4 long years. Since story here... Read More" },
    { bgimage: "caringlistenerframe.svg", name: "An Listener", age: 30, description: "Another story here.. started dating a guy when I was young, it went on for 4 long years. Since. Read More" }
    // Add more listener objects as needed
  ];

  useEffect(() => {
    const handleResize = () => setIsLgScreen(window.innerWidth >= 1024);
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (!isLgScreen) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % listeners.length);
      }, 3000); // Change listener every 3 seconds

      return () => clearInterval(interval);
    }
  }, [isLgScreen, listeners.length]);

  const handleViewOurListeners = () => {
    navigate("/OurListeners");
  };

  const renderCards = () => {
    if (isLgScreen) {
      return listeners.map((listener, index) => (
        <div key={index} className="card relative">
          <img src={listener.bgimage} alt="Card Frame" className="w-full h-full object-cover" />
          <div>
            <img src="profile.png" alt="Feel Image" className="absolute top-[8%] left-1/2 transform -translate-x-1/2 w-[50%] h-auto" />
            <div className="absolute top-[34%] left-1/2 transform -translate-x-1/2 lg:text-[18px] md:text-[12px] font-normal bg-[#464646] text-[#d9d9d9] lg:px-7 md:px-4 lg:py-2 md:py-1 rounded-[40px]">
              F - {listener.age} yrs
            </div>
          </div>
          <h3 className="absolute w-[75%] bottom-[39%] left-1/2 transform -translate-x-1/2 text-[#d9d9d9] lg:text-[32px] md:text-[18px] text-center font-semibold">{listener.name}</h3>
          <span className="absolute w-[89%] bottom-[18%] left-1/2 transform -translate-x-1/2 font-normal text-[#808080] text-center lg:text-[20px] md:text-[12px]">{listener.description}</span>
          <div className="absolute bottom-[5%] left-1/2 transform -translate-x-1/2 text-[#111111] lg:text-[18px] md:text-[12px] bg-[#d9d9d9] hover:bg-[#d9d9d9] hover:shadow-[0_0_28px_13px_rgba(217,217,217,0.2)] shadow-[0_0_17px_7px_rgba(217,217,217,0.2)] hover:text-[#111111] font-semibold px-[2px] py-[2px] duration-300 cursor-pointer rounded-full bg-gradient-to-t from-transparent to-[#d9d9d9]">
            <button className="lg:px-6 md:px-2 lg:py-3 md:py-1 rounded-full" style={{ backgroundClip: 'padding-box' }}>Connect Now</button>
          </div>
        </div>
      ));
    } else {
      const currentListener = listeners[currentIndex];
      return (
        <motion.div key={currentIndex} className="card relative" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <img src="sm-ourlistener-bg.svg" alt="Card Frame" className="w-[95%] mx-auto h-[100%] object-cover" />
          <div>
            <img src="profile.png" alt="Feel Image" className="absolute top-[6%] left-[50%] transform -translate-x-1/2 w-[40%] h-auto" />
            <div className="absolute top-[34%] left-[50%] transform -translate-x-1/2 text-[12px] font-normal bg-[#464646] text-[#d9d9d9] px-4 py-1 rounded-[40px]">
              F - {currentListener.age} yrs
            </div>
          </div>
          <h3 className="absolute w-[75%] bottom-[40%] px-3 left-[50%] transform -translate-x-1/2 text-[#d9d9d9] text-[24px] text-center font-semibold">{currentListener.name}</h3>
          <span className="absolute w-[89%] bottom-[25%] left-[50%] transform -translate-x-1/2 font-normal text-[#808080] text-center text-[15px]">{currentListener.description}</span>
          <div className="absolute bottom-[8%] left-[50%] transform -translate-x-1/2 text-[#111111] text-[12px] bg-[#d9d9d9] hover:bg-[#d9d9d9] hover:shadow-[0_0_28px_13px_rgba(217,217,217,0.2)] shadow-[0_0_17px_7px_rgba(217,217,217,0.2)] hover:text-[#111111] font-semibold px-[2px] py-[2px] duration-300 cursor-pointer rounded-full bg-gradient-to-t from-transparent to-[#d9d9d9]">
            <button className="px-6 py-3 rounded-full" style={{ backgroundClip: 'padding-box' }}>Connect Now</button>
          </div>
        </motion.div>
      );
    }
  };

  return (
    <div className={`bg-[#111111] ${isLgScreen ? "py-40" : "py-20"} flex flex-col items-center`}>
      <div className={`${isLgScreen ? "text-[60px] gap-4" : "text-[27px] gap-2"} flex justify-center items-center font-semibold`}>
        <span className="text-[#808080]">Meet Our Caring </span>
        <span className="text-[#d9d9d9]">Listeners</span>
      </div>
      <div className="cards flex justify-center lg:px-0 md:px-8 sm:px-4 gap-[24px] py-[80px]">
        {renderCards()}
      </div>
      {/* <div onClick={handleViewOurListeners} className={`btn lg:text-[28px] md:text-[16px] bg-[#111111] hover:bg-[#d9d9d9] text-[#d9d9d9] hover:shadow-[0_0_30px_15px_rgba(217,217,217,0.2)] shadow-[0_0_17px_7px_rgba(217,217,217,0.2)] hover:text-[#111111] font-semibold px-[2px] py-[2px] duration-300 cursor-pointer rounded-full bg-gradient-to-t from-transparent to-[#d9d9d9]`}>
        <div className={`bg-[#111111] hover:bg-[#d9d9d9] ${isLgScreen ? "px-10" : "px-4" }  lg:py-3 md:py-1 rounded-full" style={{ backgroundClip: 'padding-box' }}`}>View all Listeners</div>
      </div> */}
      <div onClick={handleViewOurListeners} className="btn  bg-[#111111] hover:bg-[#d9d9d9] text-[#d9d9d9] hover:shadow-[0_0_30px_15px_rgba(217,217,217,0.2)] shadow-[0_0_17px_7px_rgba(217,217,217,0.2)] hover:text-[#111111] font-semibold px-[2px] py-[2px] duration-300 cursor-pointer rounded-full bg-gradient-to-t from-transparent to-[#d9d9d9]">
        <div className={`bg-[#111111] hover:bg-[#d9d9d9]  ${ 
          isLgScreen ? "px-10 py-3 text-[28px]"
 : "px-5 py-1 text-[18px]"          }   rounded-full`}>
          View all
        </div>
      </div>
    </div>
  );
}

export default Caringlisteners;
