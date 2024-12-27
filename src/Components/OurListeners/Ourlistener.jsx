import React from 'react'
import { useNavigate } from 'react-router-dom'

function Ourlistener() {
  const navigate =useNavigate();
  const handleViewListenerDecs=()=>{
    navigate("/Listenerdesc")
  }
  return (
    <div className='bg-[#111111] flex- flex-col justify-center item-center px-[100px]'>
         <div className=" heading text-[40px] flex justify-center items-center gap-4 py-20 font-semibold">
      <span className="text-[#808080]">Meet Our Caring </span>
      <span className="text-[#d9d9d9]">Listeners </span>
    </div>
    <div className="cards pb-20 flex flex-wrap  gap-[24px]">
        <div className="card rounded-[16px]  bg-[#1f1f1f] py-[40px] px-[24px] w-[411px] h-[525px]">
            <div className="upper gap-[28px] flex ">

           
        <div className=' left flex flex-col  justify-center '>
            <img
              src="profile.png"
              alt="Feel Image"
              className=" top-[8%]  w-[140px] h-auto"
            />
            <div className="  w-[125px] text-[18px]  text-center font-normal bg-[#464646] text-[#d9d9d9] px- py-2 rounded-[40px]">
              F - 26 yrs
            </div>
          </div>
          <div className="right gap-[16px]">
            <span className='text-[24px] text-[#d9d9d9]'>Mohit Asnani</span>
            <div className="star flex items-center py-[12px] gap-[12px]">
                <img src="caringlistenerstar.svg" alt="" />
                <span className='text-[18px] font-normal text-[#808080]'>4.5(20)</span>
            </div>
            <div className="star flex items-center gap-[12px]">
                <img src="caringlistenerlanguage.svg" alt="" />
                <span className='text-[18px] font-normal text-[#808080]'>Hin, Eng, Guj</span>
            </div>
          </div>
          </div>
          <div className="decs py-[40px] text-[18px] text-[#808080] font-normal">
          I have served the nation in the Indian Navy for 35 years. It has provided me with a humongous and kaleidoscope of experiences. I have seen people break down during tough times. I'm a qualified mentor ... read more
          </div>
          <div className="below flex justify-between items-center">
            <span className='text-[20px] font-medium text-[#d9d9d9]'>Exp-150 Hrs</span>
            <div onClick={handleViewListenerDecs}  className="  text-[#111111] text-[18px] bg-[#d9d9d9] hover:bg-[#d9d9d9]  hover:shadow-[0_0_28px_13px_rgba(217,217,217,0.2)] shadow-[0_0_17px_7px_rgba(217,217,217,0.2)] hover:text-[#111111] font-semibold px-[2px] py-[2px] duration-300 cursor-pointer rounded-full bg-gradient-to-t from-transparent to-[#d9d9d9]">
              <button
                className=" px-6 py-3 rounded-full"
                style={{ backgroundClip: 'padding-box' }}
              >
                Connect Now
              </button>
            </div>
          </div>
        </div>
        <div className="card rounded-[16px]  bg-[#1f1f1f] py-[40px] px-[24px] w-[411px] h-[525px]">
            <div className="upper gap-[28px] flex ">

           
        <div className=' left flex flex-col  justify-center '>
            <img
              src="profile.png"
              alt="Feel Image"
              className=" top-[8%]  w-[140px] h-auto"
            />
            <div className="  w-[125px] text-[18px]  text-center font-normal bg-[#464646] text-[#d9d9d9] px- py-2 rounded-[40px]">
              F - 26 yrs
            </div>
          </div>
          <div className="right gap-[16px]">
            <span className='text-[24px] text-[#d9d9d9]'>Mohit Asnani</span>
            <div className="star flex items-center py-[12px] gap-[12px]">
                <img src="caringlistenerstar.svg" alt="" />
                <span className='text-[18px] font-normal text-[#808080]'>4.5(20)</span>
            </div>
            <div className="star flex items-center gap-[12px]">
                <img src="caringlistenerlanguage.svg" alt="" />
                <span className='text-[18px] font-normal text-[#808080]'>Hin, Eng, Guj</span>
            </div>
          </div>
          </div>
          <div className="decs py-[40px] text-[18px] text-[#808080] font-normal">
          I have served the nation in the Indian Navy for 35 years. It has provided me with a humongous and kaleidoscope of experiences. I have seen people break down during tough times. I'm a qualified mentor ... read more
          </div>
          <div className="below flex justify-between items-center">
            <span className='text-[20px] font-medium text-[#d9d9d9]'>Exp-150 Hrs</span>
            <div className="  text-[#111111] text-[18px] bg-[#d9d9d9] hover:bg-[#d9d9d9]  hover:shadow-[0_0_28px_13px_rgba(217,217,217,0.2)] shadow-[0_0_17px_7px_rgba(217,217,217,0.2)] hover:text-[#111111] font-semibold px-[2px] py-[2px] duration-300 cursor-pointer rounded-full bg-gradient-to-t from-transparent to-[#d9d9d9]">
              <button
                className=" px-6 py-3 rounded-full"
                style={{ backgroundClip: 'padding-box' }}
              >
                Connect Now
              </button>
            </div>
          </div>
        </div>
        <div className="card rounded-[16px]  bg-[#1f1f1f] py-[40px] px-[24px] w-[411px] h-[525px]">
            <div className="upper gap-[28px] flex ">

           
        <div className=' left flex flex-col  justify-center '>
            <img
              src="profile.png"
              alt="Feel Image"
              className=" top-[8%]  w-[140px] h-auto"
            />
            <div className="  w-[125px] text-[18px]  text-center font-normal bg-[#464646] text-[#d9d9d9] px- py-2 rounded-[40px]">
              F - 26 yrs
            </div>
          </div>
          <div className="right gap-[16px]">
            <span className='text-[24px] text-[#d9d9d9]'>Mohit Asnani</span>
            <div className="star flex items-center py-[12px] gap-[12px]">
                <img src="caringlistenerstar.svg" alt="" />
                <span className='text-[18px] font-normal text-[#808080]'>4.5(20)</span>
            </div>
            <div className="star flex items-center gap-[12px]">
                <img src="caringlistenerlanguage.svg" alt="" />
                <span className='text-[18px] font-normal text-[#808080]'>Hin, Eng, Guj</span>
            </div>
          </div>
          </div>
          <div className="decs py-[40px] text-[18px] text-[#808080] font-normal">
          I have served the nation in the Indian Navy for 35 years. It has provided me with a humongous and kaleidoscope of experiences. I have seen people break down during tough times. I'm a qualified mentor ... read more
          </div>
          <div className="below flex justify-between items-center">
            <span className='text-[20px] font-medium text-[#d9d9d9]'>Exp-150 Hrs</span>
            <div className="  text-[#111111] text-[18px] bg-[#d9d9d9] hover:bg-[#d9d9d9]  hover:shadow-[0_0_28px_13px_rgba(217,217,217,0.2)] shadow-[0_0_17px_7px_rgba(217,217,217,0.2)] hover:text-[#111111] font-semibold px-[2px] py-[2px] duration-300 cursor-pointer rounded-full bg-gradient-to-t from-transparent to-[#d9d9d9]">
              <button
                className=" px-6 py-3 rounded-full"
                style={{ backgroundClip: 'padding-box' }}
              >
                Connect Now
              </button>
            </div>
          </div>
        </div>
        <div className="card rounded-[16px]  bg-[#1f1f1f] py-[40px] px-[24px] w-[411px] h-[525px]">
            <div className="upper gap-[28px] flex ">

           
        <div className=' left flex flex-col  justify-center '>
            <img
              src="profile.png"
              alt="Feel Image"
              className=" top-[8%]  w-[140px] h-auto"
            />
            <div className="  w-[125px] text-[18px]  text-center font-normal bg-[#464646] text-[#d9d9d9] px- py-2 rounded-[40px]">
              F - 26 yrs
            </div>
          </div>
          <div className="right gap-[16px]">
            <span className='text-[24px] text-[#d9d9d9]'>Mohit Asnani</span>
            <div className="star flex items-center py-[12px] gap-[12px]">
                <img src="caringlistenerstar.svg" alt="" />
                <span className='text-[18px] font-normal text-[#808080]'>4.5(20)</span>
            </div>
            <div className="star flex items-center gap-[12px]">
                <img src="caringlistenerlanguage.svg" alt="" />
                <span className='text-[18px] font-normal text-[#808080]'>Hin, Eng, Guj</span>
            </div>
          </div>
          </div>
          <div className="decs py-[40px] text-[18px] text-[#808080] font-normal">
          I have served the nation in the Indian Navy for 35 years. It has provided me with a humongous and kaleidoscope of experiences. I have seen people break down during tough times. I'm a qualified mentor ... read more
          </div>
          <div className="below flex justify-between items-center">
            <span className='text-[20px] font-medium text-[#d9d9d9]'>Exp-150 Hrs</span>
            <div className="  text-[#111111] text-[18px] bg-[#d9d9d9] hover:bg-[#d9d9d9]  hover:shadow-[0_0_28px_13px_rgba(217,217,217,0.2)] shadow-[0_0_17px_7px_rgba(217,217,217,0.2)] hover:text-[#111111] font-semibold px-[2px] py-[2px] duration-300 cursor-pointer rounded-full bg-gradient-to-t from-transparent to-[#d9d9d9]">
              <button
                className=" px-6 py-3 rounded-full"
                style={{ backgroundClip: 'padding-box' }}
              >
                Connect Now
              </button>
            </div>
          </div>
        </div>
        <div className="card rounded-[16px]  bg-[#1f1f1f] py-[40px] px-[24px] w-[411px] h-[525px]">
            <div className="upper gap-[28px] flex ">

           
        <div className=' left flex flex-col  justify-center '>
            <img
              src="profile.png"
              alt="Feel Image"
              className=" top-[8%]  w-[140px] h-auto"
            />
            <div className="  w-[125px] text-[18px]  text-center font-normal bg-[#464646] text-[#d9d9d9] px- py-2 rounded-[40px]">
              F - 26 yrs
            </div>
          </div>
          <div className="right gap-[16px]">
            <span className='text-[24px] text-[#d9d9d9]'>Mohit Asnani</span>
            <div className="star flex items-center py-[12px] gap-[12px]">
                <img src="caringlistenerstar.svg" alt="" />
                <span className='text-[18px] font-normal text-[#808080]'>4.5(20)</span>
            </div>
            <div className="star flex items-center gap-[12px]">
                <img src="caringlistenerlanguage.svg" alt="" />
                <span className='text-[18px] font-normal text-[#808080]'>Hin, Eng, Guj</span>
            </div>
          </div>
          </div>
          <div className="decs py-[40px] text-[18px] text-[#808080] font-normal">
          I have served the nation in the Indian Navy for 35 years. It has provided me with a humongous and kaleidoscope of experiences. I have seen people break down during tough times. I'm a qualified mentor ... read more
          </div>
          <div className="below flex justify-between items-center">
            <span className='text-[20px] font-medium text-[#d9d9d9]'>Exp-150 Hrs</span>
            <div className="  text-[#111111] text-[18px] bg-[#d9d9d9] hover:bg-[#d9d9d9]  hover:shadow-[0_0_28px_13px_rgba(217,217,217,0.2)] shadow-[0_0_17px_7px_rgba(217,217,217,0.2)] hover:text-[#111111] font-semibold px-[2px] py-[2px] duration-300 cursor-pointer rounded-full bg-gradient-to-t from-transparent to-[#d9d9d9]">
              <button
                className=" px-6 py-3 rounded-full"
                style={{ backgroundClip: 'padding-box' }}
              >
                Connect Now
              </button>
            </div>
          </div>
        </div>
    </div>
    </div>
  )
}

export default Ourlistener