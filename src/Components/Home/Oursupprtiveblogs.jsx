import React from 'react'
import { GoArrowRight } from "react-icons/go";
import { motion } from "motion/react"
import { useNavigate } from 'react-router-dom';


const blogData=[{
  title: "5 Things to Do To Forget Your Ex",
    description: "I scanned my room from left to right - all remnants of our relationship - the teddy he gifted me on ....",
    category: "Breakup",
    image: "supportiveblog.png",
},
{
  title: "How to Stay Positive During Tough Times",
  description: "Life throws challenges at us, but it's crucial to remain hopeful and optimistic for better days....",
  category: "Motivation",
  image: "supportiveblog.png",
},
{
  title: "Building Better Habits for a Healthier You",
  description: "Transform your life by adopting small, impactful habits that pave the way for a healthier lifestyle....",
  category: "Self-Improvement",
  image: "supportiveblog.png",
},
]

function Oursupprtiveblogs() {
   const navigate = useNavigate();
   const handleViewAllBlogs=()=>{
    navigate("/OurBlogs")
   }
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
     }} className='py-40 flex flex-col justify-center items-center bg-[#111111]'>
        <div className="lg:text-[60px] md:text-[40px] flex justify-center items-center gap-4 font-semibold">
      <span className="text-[#808080]">Our </span>
      <span className="text-[#d9d9d9]">Supportive Blogs</span>
    </div>
    <div className="below flex justify-center items-center py-[80px] gap-[24px]">
      {blogData.map((blog, index)=> 
        <div key={index} className="card rounded-[24px] w-[25%] lg:h-[637px] md:h-[480px] border-[1px] overflow-hidden border-[#464646]">
        <img  src={blog.image} alt="" />
        <div className="bootm text-[#d9d9d9] lg:px-[24px] md:px-4 py-[40px]">
        <h2 className='lg:text-[24px] md:text-[18px] pb-[16px] font-bold'>{blog.title}</h2>
        <span className='lg:text-[18px] md:text-[12px]'>{blog.description}</span>
        <div className='pt-[40px] flex justify-between items-center'>
            <span className='lg:text-[20px] md:text-[16px]'>{blog.category}</span>
            <div className="btn lg:text-[28px] md:text-[12px] bg-[#111111] md:bottom-0 hover:bg-[#d9d9d9] text-[#d9d9d9]  hover:shadow-[0_0_30px_15px_rgba(217,217,217,0.2)]  shadow-[0_0_17px_7px_rgba(217,217,217,0.2)]  hover:text-[#111111] font-semibold px-[2px] py-[2px] duration-300 cursor-pointer rounded-full  bg-gradient-to-t from-transparent to-[#d9d9d9]">
<div className="bg-[#111111] hover:bg-[#d9d9d9] lg:p-2 md:p-1 rounded-full" style={{ backgroundClip: 'padding-box' ,
// boxShadow: 'inset 0 0 20px rgba(217, 217, 217, 0.3)', 
}}>
<GoArrowRight />

</div>
</div>
           
        </div>
        </div>
       

    </div>)}
      
       
       
    </div>
    <div onClick={handleViewAllBlogs}  className="btn lg:text-[28px] md:text-[14px] bg-[#111111] hover:bg-[#d9d9d9] text-[#d9d9d9]  hover:shadow-[0_0_30px_15px_rgba(217,217,217,0.2)]  shadow-[0_0_17px_7px_rgba(217,217,217,0.2)]  hover:text-[#111111] font-semibold px-[2px] py-[2px] duration-300 cursor-pointer rounded-full  bg-gradient-to-t from-transparent to-[#d9d9d9]">
  <div className="bg-[#111111] hover:bg-[#d9d9d9] lg:px-10  md:px-4 lg:py-3 md:py-2 rounded-full" style={{ backgroundClip: 'padding-box' ,
// boxShadow: 'inset 0 0 20px rgba(217, 217, 217, 0.3)', 
 }}>
View All Blogs  </div>
</div>
    
    </motion.div >
  )
}

export default Oursupprtiveblogs