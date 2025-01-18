import { div } from 'motion/react-client'
import React, { useState } from 'react'

function BecomeListeners() {
    const [isLgScreen, setIsLgScreen] = useState(window.innerWidth >= 1024);
  
  return (
    <div>
      {isLgScreen (   <div className='up text-[#ffffff] flex px-[100px] justify-center items-center gap-10 py-20'>
      <div className="left w-[55%]">
        <div className="h text-[60px] font-semibold">
          <span className='text-[#808080]'>"Make a Difference by</span> <span>Listening"</span>
        </div>
       
        <div className='text-[24px] text-[#d9d9d9] py-10 '>Become a listener and help people share their feelings while creating a positive impact.</div>
        <div className="btn text-[24px]  w-fit text-center bg-[#111111] hover:bg-[#d9d9d9] text-[#d9d9d9] hover:shadow-[0_0_30px_15px_rgba(217,217,217,0.2)] shadow-[0_0_17px_7px_rgba(217,217,217,0.2)] hover:text-[#111111] font-semibold px-[2px] py-[2px] duration-300 cursor-pointer rounded-full bg-gradient-to-t from-transparent to-[#d9d9d9]">
        <div
          className="bg-[#111111] hover:bg-[#d9d9d9] px-10 py-3  rounded-full"
          style={{ backgroundClip: 'padding-box' }}
        >
Become a Listener        </div>
      </div>
      </div>
      <div className="right w-[45%]">
        <img src="BecomeListener-img.svg" alt="" />
      </div>

    </div>) : (   <div className='up text-[#ffffff] flex px-[100px] justify-center items-center gap-10 py-20'>
      <div className="left w-[55%]">
        <div className="h text-[60px] font-semibold">
          <span className='text-[#808080]'>"Make a Difference by</span> <span>Listening"</span>
        </div>
       
        <div className='text-[24px] text-[#d9d9d9] py-10 '>Become a listener and help people share their feelings while creating a positive impact.</div>
        <div className="btn text-[24px]  w-fit text-center bg-[#111111] hover:bg-[#d9d9d9] text-[#d9d9d9] hover:shadow-[0_0_30px_15px_rgba(217,217,217,0.2)] shadow-[0_0_17px_7px_rgba(217,217,217,0.2)] hover:text-[#111111] font-semibold px-[2px] py-[2px] duration-300 cursor-pointer rounded-full bg-gradient-to-t from-transparent to-[#d9d9d9]">
        <div
          className="bg-[#111111] hover:bg-[#d9d9d9] px-10 py-3  rounded-full"
          style={{ backgroundClip: 'padding-box' }}
        >
Become a Listener        </div>
      </div>
      </div>
      <div className="right w-[45%]">
        <img src="BecomeListener-img.svg" alt="" />
      </div>

    </div>)}
 
    <div className="down text-white text-[40px]  font-semibold">
      <div className="heading flex flex-col justify-center items-center pt-20 pb-10">
        <span className='text-[#808080]'>Guidelines for becoming an</span> <span>
        Perfect Listeners</span>
      </div>
      <div className={`boxes ${isLgScreen ? "flex" : "flex flex-col" } flex-wrap mb-20 justify-center gap-[24px]`}>
        <div className="box text-white rounded-[16px] p-[40px] w-[35%] bg-[#1f1f1f]">
          <div className="index rounded-[6px] text-[24px] px-2 py-1 w-fit border-[1px] border-white">
            <span>01</span>
          </div>
          <div className="head text-[32px] py-[24px] font-semibold">Complete Verification </div>
          <div className="desc text-[20px]">Fill out the form and submit your application for approval</div>

        </div>
        <div className="box text-white rounded-[16px] p-[40px] w-[35%] bg-[#1f1f1f]">
          <div className="index rounded-[6px] text-[24px] px-2 py-1 w-fit border-[1px] border-white">
            <span>01</span>
          </div>
          <div className="head text-[32px] py-[24px] font-semibold">Complete Verification </div>
          <div className="desc text-[20px]">Fill out the form and submit your application for approval</div>

        </div>
        <div className="box text-white rounded-[16px] p-[40px] w-[35%] bg-[#1f1f1f]">
          <div className="index rounded-[6px] text-[24px] px-2 py-1 w-fit border-[1px] border-white">
            <span>01</span>
          </div>
          <div className="head text-[32px] py-[24px] font-semibold">Complete Verification </div>
          <div className="desc text-[20px]">Fill out the form and submit your application for approval</div>

        </div>
        <div className="box text-white rounded-[16px] p-[40px] w-[35%] bg-[#1f1f1f]">
          <div className="index rounded-[6px] text-[24px] px-2 py-1 w-fit border-[1px] border-white">
            <span>01</span>
          </div>
          <div className="head text-[32px] py-[24px] font-semibold">Complete Verification </div>
          <div className="desc text-[20px]">Fill out the form and submit your application for approval</div>

        </div>
      </div>
    </div>
    </div>
    
  )
}

export default BecomeListeners