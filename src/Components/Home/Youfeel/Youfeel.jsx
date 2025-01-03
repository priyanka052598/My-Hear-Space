
import React, { useEffect, useState } from 'react';
import { motion } from "motion/react"
import "./Youfeel.css"


function Youfeel() {

  

  return (
    <div 
     className="bg-[#111111]   py-40">
      {/* Heading Section */}
      <div className="lg:text-[60px] md:text-[40px] flex flex-col justify-between items-center font-semibold">
        <span className="text-[#808080]">Do you feel you are the</span>
        <span className="text-[#d9d9d9]">Only One?</span>
      </div>

      {/* Card Section */}
      <div className="cards lg:px-0 md:px-8 sm:px-4  flex justify-center gap-[24px] pt-[80px] ">
        
        <motion.div 
        
        transition={{
          duration: 1.1 // Specify the duration of the animation
        }}
        initial={{
          x: 300 // Starting position
        }}
        whileInView={{
          x: 0, // Target position
        }}
        viewport={{
          once:true,
         // Trigger animation only once
          amount: 0.2, // Specifies the amount of the element that must be in view (0.5 means 50%)
        }}
        className="card relative ">
          {/* Cardframe Image */}
          <img
            src="Cardframe.png"
            alt="Card Frame"
            className="w-full h-full object-cover"
          />
          
          {/* Feel-1 Image on Top */}
          <div className=''>
          <img
            src="feel-1-image.png"
            alt="Feel Image"
            className="absolute top-[8%] left-1/2 transform -translate-x-1/2 w-[80%] h-auto"
          />
          </div>
          

          {/* Heading on Top */}
          <h3 className="absolute w-[75%]  bottom-[15%]  left-1/2 transform -translate-x-1/2 text-[#d9d9d9] lg:text-[28px] md:text-[18px]  text-center font-semibold">
            43% of Indians are Facing Loneliness!
          </h3>
        </motion.div>
        <div className="card relative ">
          {/* Cardframe Image */}
          <img
            src="Cardframe.png"
            alt="Card Frame"
            className="w-full h-full object-cover"
          />
          
          {/* Feel-1 Image on Top */}
          <div className=''>
          <img
            src="feel-1-image.png"
            alt="Feel Image"
            className="absolute top-[8%] left-1/2 transform -translate-x-1/2 w-[80%] h-auto"
          />
          </div>
          

          {/* Heading on Top */}
          <h3 className="absolute w-[75%]  bottom-[15%]  left-1/2 transform -translate-x-1/2 text-[#d9d9d9] lg:text-[28px] md:text-[18px] text-center font-semibold">
            43% of Indians are Facing Loneliness!
          </h3>
        </div>
        <motion.div   transition={{
          duration: 1.1 // Specify the duration of the animation
        }}
        initial={{
          x: -300 // Starting position
        }}
        whileInView={{
          x: 0, // Target position
        }}
        viewport={{
          once:true,
         // Trigger animation only once
          amount: 0.2, // Specifies the amount of the element that must be in view (0.5 means 50%)
        }}
         className="card relative ">
          {/* Cardframe Image */}
          <img
            src="Cardframe.png"
            alt="Card Frame"
            className="w-full h-full object-cover"
          />
          
          {/* Feel-1 Image on Top */}
          <div className=''>
          <img
            src="feel-1-image.png"
            alt="Feel Image"
            className="absolute top-[8%] left-1/2 transform -translate-x-1/2 w-[80%] h-auto"
          />
          </div>
          

          {/* Heading on Top */}
          <h3 className="absolute w-[75%]  bottom-[15%]  left-1/2 transform -translate-x-1/2 text-[#d9d9d9] lg:text-[28px] md:text-[18px]  text-center font-semibold">
            43% of Indians are Facing Loneliness!
          </h3>
        </motion.div>
      </div>
    </div>
  );
}

export default Youfeel;






