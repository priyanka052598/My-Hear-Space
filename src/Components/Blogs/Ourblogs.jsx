import React from 'react'
import Oursupprtiveblogs from '../Home/Oursupprtiveblogs'
import { GoArrowRight } from "react-icons/go";
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

function Ourblogs() {
  const navigate=useNavigate();
  const handleViewBlogDesc=()=>{
    navigate("/Blogsdesc")
  }
  return (
    <div className=' flex flex-col justify-center items-center py-20 bg-[#111111]'>
             <div className="text-[40px] flex justify-center items-center gap-4 font-semibold">
              <span className="text-[#808080]">Our </span>
              <span className="text-[#d9d9d9]">Supportive Blogs</span>
            </div>
            <div className="below flex justify-center items-center py-[80px] gap-[24px]">
              {blogData.map((blog, index)=>
  <div key={index} className="card rounded-[24px] w-[385px] h-[637px] border-[1px] overflow-hidden border-[#464646]">
  <img  src={blog.image} alt="" />
  <div className="bootm text-[#d9d9d9] px-[24px] py-[40px]">
  <h2 className='text-[24px] pb-[16px] font-bold'>{blog.title}</h2>
  <span className='text-[18px]'>{blog.description}</span>
  <div className='pt-[40px] flex justify-between items-center'>
      <span className='text-[20px]'>{blog.category}</span>
      <div onClick={handleViewBlogDesc} className="btn text-[28px] bg-[#111111] hover:bg-[#d9d9d9] text-[#d9d9d9]  hover:shadow-[0_0_30px_15px_rgba(217,217,217,0.2)]  shadow-[0_0_17px_7px_rgba(217,217,217,0.2)]  hover:text-[#111111] font-semibold px-[2px] py-[2px] duration-300 cursor-pointer rounded-full  bg-gradient-to-t from-transparent to-[#d9d9d9]">
<div className="bg-[#111111] hover:bg-[#d9d9d9] p-2 rounded-full" style={{ backgroundClip: 'padding-box' ,
// boxShadow: 'inset 0 0 20px rgba(217, 217, 217, 0.3)', 
}}>
<GoArrowRight />

</div>
</div>
     
  </div>
  </div>
 

</div>

              )}
              
              
            </div>
    </div>
  )
}

export default Ourblogs