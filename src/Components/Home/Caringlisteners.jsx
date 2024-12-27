import React from 'react';
import { useNavigate } from 'react-router-dom';

function Caringlisteners() {
  const navigate=useNavigate();
  const handleViewOurListeners=()=>{
    navigate("/OurListeners")

  }
  return (
    <div className="bg-[#111111] flex flex-col items-center py-40">
      {/* Heading Section */}
      <div className="lg:text-[60px] md:text-[40px] flex justify-center items-center gap-4 font-semibold">
        <span className="text-[#808080]">Meet Our Caring </span>
        <span className="text-[#d9d9d9]">Listeners</span>
      </div>

      {/* Card Section */}
      <div className="cards flex justify-center lg:px-0 md:px-8 sm:px-4 gap-[24px] py-[80px]">
        <div className="card relative">
          {/* Cardframe Image */}
          <img
            src="caringlistenerframe.svg"
            alt="Card Frame"
            className="w-full h-full object-cover"
          />

          {/* Feel-1 Image on Top */}
          <div>
            <img
              src="profile.png"
              alt="Feel Image"
              className="absolute top-[8%] left-1/2 transform -translate-x-1/2 w-[50%] h-auto"
            />
            <div className="absolute top-[34%] left-1/2 transform -translate-x-1/2 lg:text-[18px] md:text-[12px] font-normal bg-[#464646] text-[#d9d9d9] lg:px-7 md:px-4 lg:py-2 md:py-1 rounded-[40px]">
              F - 26 yrs
            </div>
          </div>

          {/* Heading and Connect Now Button */}
          <div>
            <h3 className="absolute w-[75%] bottom-[39%] left-1/2 transform -translate-x-1/2 text-[#d9d9d9] lg:text-[32px] md:text-[18px] text-center font-semibold">
              Simran
            </h3>
            <span className="absolute w-[89%] bottom-[18%] left-1/2 transform -translate-x-1/2 font-normal text-[#808080] text-center lg:text-[20px] md:text-[12px]">
              I started dating a guy when I was young it went on for 4 long years. Since the beginning of the relationship, .... Read More
            </span>
            <div className="absolute   bottom-[5%] left-1/2 transform -translate-x-1/2 text-[#111111] lg:text-[18px] md:text-[12px] bg-[#d9d9d9] hover:bg-[#d9d9d9]  hover:shadow-[0_0_28px_13px_rgba(217,217,217,0.2)] shadow-[0_0_17px_7px_rgba(217,217,217,0.2)] hover:text-[#111111] font-semibold px-[2px] py-[2px] duration-300 cursor-pointer rounded-full bg-gradient-to-t from-transparent to-[#d9d9d9]">
              <button
                className=" lg:px-6 md:px-2 lg:py-3 md:py-1 rounded-full"
                style={{ backgroundClip: 'padding-box' }}
              >
                Connect Now
              </button>
            </div>
          </div>
        </div>
        <div className="card relative">
          {/* Cardframe Image */}
          <img
            src="caringlistenerframe.svg"
            alt="Card Frame"
            className="w-full h-full object-cover"
          />

          {/* Feel-1 Image on Top */}
          <div>
            <img
              src="profile.png"
              alt="Feel Image"
              className="absolute top-[8%] left-1/2 transform -translate-x-1/2 w-[50%] h-auto"
            />
            <div className="absolute top-[34%] left-1/2 transform -translate-x-1/2 lg:text-[18px] md:text-[12px] font-normal bg-[#464646] text-[#d9d9d9] lg:px-7 md:px-4 lg:py-2 md:py-1  rounded-[40px]">
              F - 26 yrs
            </div>
          </div>

          {/* Heading and Connect Now Button */}
          <div>
            <h3 className="absolute w-[75%] bottom-[39%] left-1/2 transform -translate-x-1/2 text-[#d9d9d9] lg:text-[32px] md:text-[18px]  text-center font-semibold">
              Simran
            </h3>
            <span className="absolute w-[89%] bottom-[18%] left-1/2 transform -translate-x-1/2 font-normal text-[#808080] text-center  lg:text-[20px] md:text-[12px]">
              I started dating a guy when I was young it went on for 4 long years. Since the beginning of the relationship, .... Read More
            </span>
            <div className="absolute   bottom-[5%] left-1/2 transform -translate-x-1/2 text-[#111111] lg:text-[18px] md:text-[12px] bg-[#d9d9d9] hover:bg-[#d9d9d9]  hover:shadow-[0_0_28px_13px_rgba(217,217,217,0.2)] shadow-[0_0_17px_7px_rgba(217,217,217,0.2)] hover:text-[#111111] font-semibold px-[2px] py-[2px] duration-300 cursor-pointer rounded-full bg-gradient-to-t from-transparent to-[#d9d9d9]">
              <button
                className=" lg:px-6 md:px-2 lg:py-3 md:py-1 rounded-full"
                style={{ backgroundClip: 'padding-box' }}
              >
                Connect Now
              </button>
            </div>
          </div>
        </div>
        <div className="card relative">
          {/* Cardframe Image */}
          <img
            src="caringlistenerframe.svg"
            alt="Card Frame"
            className="w-full h-full object-cover"
          />

          {/* Feel-1 Image on Top */}
          <div>
            <img
              src="profile.png"
              alt="Feel Image"
              className="absolute top-[8%] left-1/2 transform -translate-x-1/2 w-[50%] h-auto"
            />
            <div className="absolute top-[34%] left-1/2 transform -translate-x-1/2 lg:text-[18px] md:text-[12px] font-normal bg-[#464646] text-[#d9d9d9] lg:px-7 md:px-4 lg:py-2 md:py-1  rounded-[40px]">
              F - 26 yrs
            </div>
          </div>

          {/* Heading and Connect Now Button */}
          <div>
            <h3 className="absolute w-[75%] bottom-[39%] left-1/2 transform -translate-x-1/2 text-[#d9d9d9] lg:text-[32px] md:text-[18px]  text-center font-semibold">
              Simran
            </h3>
            <span className="absolute w-[89%] bottom-[18%] left-1/2 transform -translate-x-1/2 font-normal text-[#808080] text-center t lg:text-[20px] md:text-[12px]">
              I started dating a guy when I was young it went on for 4 long years. Since the beginning of the relationship, .... Read More
            </span>
            <div className="absolute   bottom-[5%] left-1/2 transform -translate-x-1/2 text-[#111111] lg:text-[18px] md:text-[12px] bg-[#d9d9d9] hover:bg-[#d9d9d9]  hover:shadow-[0_0_28px_13px_rgba(217,217,217,0.2)] shadow-[0_0_17px_7px_rgba(217,217,217,0.2)] hover:text-[#111111] font-semibold px-[2px] py-[2px] duration-300 cursor-pointer rounded-full bg-gradient-to-t from-transparent to-[#d9d9d9]">
              <button
                className=" lg:px-6 md:px-2 lg:py-3 md:py-1 rounded-full"
                style={{ backgroundClip: 'padding-box' }}
              >
                Connect Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* View All Listeners Button */}
      <div onClick={handleViewOurListeners} className="btn lg:text-[28px] md:text-[16px] bg-[#111111] hover:bg-[#d9d9d9] text-[#d9d9d9] hover:shadow-[0_0_30px_15px_rgba(217,217,217,0.2)] shadow-[0_0_17px_7px_rgba(217,217,217,0.2)] hover:text-[#111111] font-semibold px-[2px] py-[2px] duration-300 cursor-pointer rounded-full bg-gradient-to-t from-transparent to-[#d9d9d9]">
        <div
          className="bg-[#111111] hover:bg-[#d9d9d9] lg:px-10 md:px-4 lg:py-3 md:py-1 rounded-full"
          style={{ backgroundClip: 'padding-box' }}
        >
          View all Listeners
        </div>
      </div>
    </div>
  );
}

export default Caringlisteners;
