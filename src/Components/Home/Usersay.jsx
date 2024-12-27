import React from 'react'
import { motion } from "motion/react"


function Usersay() {
  return (
    <motion.div        
        transition={{
           duration: 2, // Specify the duration of the animation
         }}
         initial={{
       
           opacity: 0, // Starting opacity
         }}
         whileInView={{
         
           opacity: 1, // Full visibility
         }}
         viewport={{
           once: true, // Trigger animation only once
           amount: 0.5, // Specifies the amount of the element that must be in view
         }}  className='py-40 flex flex-col justify-between items-center   bg-[#1f1f1f]'>
        <div className="lg:text-[60px] md:text-[40px] pb-[80px] flex justify-center items-center gap-4 font-semibold">
      <span className="text-[#808080]">Meet Our Caring </span>
      <span className="text-[#d9d9d9]">Listeners</span>
    </div>
    <div className="bottom flex  items-center justify-center gap-[24px]">

    
        <div className="flex flex-col justify-center   py-16 gap-7 rounded-[24px] items-center w-[27%] bg-[#464646]">
            <img src="Stars.png" alt="" />
            <span className='lg:text-[20px] md:text-[15px] w-[90%] text-[#d9d9d9] font-normal text-left '>I’ve never experienced such a safe and comforting environment to share my thoughts. The listeners are incredibly kind and understanding. It feels like talking to a friend who truly cares about how you feel.</span>

        </div>
        <div className="flex flex-col justify-center   py-16 gap-7 rounded-[24px] items-center w-[27%] bg-[#464646]">
            <img src="Stars.png" alt="" />
            <span className='lg:text-[20px] md:text-[15px]  w-[90%] text-[#d9d9d9] font-normal text-left '>I’ve never experienced such a safe and comforting environment to share my thoughts. The listeners are incredibly kind and understanding. It feels like talking to a friend who truly cares about how you feel.</span>

        </div>
        <div className="flex flex-col justify-center   py-16 gap-7 rounded-[24px] items-center w-[27%] bg-[#464646]">
            <img src="Stars.png" alt="" />
            <span className='lg:text-[20px] md:text-[15px]  w-[90%] text-[#d9d9d9] font-normal text-left '>I’ve never experienced such a safe and comforting environment to share my thoughts. The listeners are incredibly kind and understanding. It feels like talking to a friend who truly cares about how you feel.</span>

        </div>
        </div>
    </motion.div >
  )
}

export default Usersay