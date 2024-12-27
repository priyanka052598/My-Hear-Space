import React from 'react'
import { motion } from "motion/react"


function Onestopsolution() {
  return (
    <div className='flex justify-between items-center py-[70px] lg:px-[100px] md:px-8  bg-[#1F1F1F]'>
        <motion.div
         transition={{
            duration: 1.3 // Specify the duration of the animation
          }}
          initial={{
            x: -100 // Starting position
          }}
          whileInView={{
            x: 0, // Target position
          }}
          viewport={{
            once:true,
           // Trigger animation only once
            amount: 0.2, // Specifies the amount of the element that must be in view (0.5 means 50%)
          }}
           className="left w-[50%] space-y-[60px] ">
<div className="up flex flex-col ">
    <div className="heading lg:text-[48px] md:text-[28px]  pb-[30px] border-b-[2px] border-[#808080] font-semibold">
        <span className='text-[#808080]'>The One Stop</span> <span className='text-[#d9d9d9]'>Solution</span>
    </div>
    <div className="line h-[1px] text-[#808080] w-[500px] "> </div>
    <span className='text-[#d9d9d9] lg:text-[24px] md:text-[15px] pt-[30px] font-normal'>At My Hear Space, we believe everyone deserves a safe space to share their feelings. Our mission is to connect you with compassionate listeners who are here to support and understand you.</span>

</div>
<div className="down flex flex-col gap-[24px]">
<div className="heading lg:text-[32px] md:text-[20px]  font-semibold">
        <span className='text-[#808080]'>What can you</span> <span className='text-[#d9d9d9]'>Expect</span>
    </div>
    <div className='flex flex-col lg:text-[24px] md:text-[15px] gap-[12px]'>
        <div className='flex items-center justify-start gap-[16px] '> 
        <img  className="w-[24px] h-[24px]" src="check-01.png" alt="" />
        <span className=' text-[#d9d9d9]'>Complete Anonymity.</span>
        </div>
        <div className='flex items-center justify-start gap-[16px] '> 
        <img  className="w-[24px] h-[24px]" src="check-01.png" alt="" />
        <span className=' text-[#d9d9d9]'>Safe Sharing.</span>
        </div>
        <div className='flex items-center justify-start gap-[16px] '> 
        <img  className="w-[24px] h-[24px]" src="check-01.png" alt="" />
        <span className='text-[#d9d9d9]'>Communication in multiple languages</span>
        </div>
        <div className='flex items-center justify-start gap-[16px] '> 
        <img  className="w-[24px] h-[24px]" src="check-01.png" alt="" />
        <span className=' text-[#d9d9d9]'>Stress free Conversation.</span>
        </div>
        <div className='flex items-center justify-start gap-[16px] '> 
        <img  className="w-[24px] h-[24px]" src="check-01.png" alt="" />
        <span className=' text-[#d9d9d9]'>Talk Anytime, Anywhere.</span>
        </div>
       
    </div>
</div>
        </motion.div>
        <motion.div
          transition={{
            duration: 1.3 // Specify the duration of the animation
          }}
          initial={{
            x: 100 // Starting position
          }}
          whileInView={{
            x: 0, // Target position
          }}
          viewport={{
            once:true,
           // Trigger animation only once
            amount: 0.2, // Specifies the amount of the element that must be in view (0.5 means 50%)
          }}
           className="right w-[44%]">
            <img className='w-full object-cover' src="onestopsolution.png" alt="" />

        </motion.div>
    </div>
  )
}

export default Onestopsolution