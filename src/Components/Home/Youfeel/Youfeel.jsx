
// import React, { useEffect, useState } from 'react';
// import { motion } from "motion/react"
// import "./Youfeel.css"


// function Youfeel() {

  

//   return (
//     <div 
//      className="bg-[#111111]   py-40">
//       {/* Heading Section */}
//       <div className="lg:text-[60px] md:text-[40px] flex flex-col justify-between items-center font-semibold">
//         <span className="text-[#808080]">Do you feel you are the</span>
//         <span className="text-[#d9d9d9]">Only One?</span>
//       </div>

//       {/* Card Section */}
//       <div className="cards lg:px-0 md:px-8 sm:px-4  flex justify-center gap-[24px] pt-[80px] ">
        
//         <motion.div 
        
//         transition={{
//           duration: 1.1 // Specify the duration of the animation
//         }}
//         initial={{
//           x: 300 // Starting position
//         }}
//         whileInView={{
//           x: 0, // Target position
//         }}
//         viewport={{
//           once:true,
//          // Trigger animation only once
//           amount: 0.2, // Specifies the amount of the element that must be in view (0.5 means 50%)
//         }}
//         className="card relative ">
//           {/* Cardframe Image */}
//           <img
//             src="Cardframe.png"
//             alt="Card Frame"
//             className="w-full h-full object-cover"
//           />
          
//           {/* Feel-1 Image on Top */}
//           <div className=''>
//           <img
//             src="feel-1-image.png"
//             alt="Feel Image"
//             className="absolute top-[8%] left-1/2 transform -translate-x-1/2 w-[80%] h-auto"
//           />
//           </div>
          

//           {/* Heading on Top */}
//           <h3 className="absolute w-[75%]  bottom-[15%]  left-1/2 transform -translate-x-1/2 text-[#d9d9d9] lg:text-[28px] md:text-[18px]  text-center font-semibold">
//             43% of Indians are Facing Loneliness!
//           </h3>
//         </motion.div>
//         <div className="card relative ">
//           {/* Cardframe Image */}
//           <img
//             src="Cardframe.png"
//             alt="Card Frame"
//             className="w-full h-full object-cover"
//           />
          
//           {/* Feel-1 Image on Top */}
//           <div className=''>
//           <img
//             src="feel-1-image.png"
//             alt="Feel Image"
//             className="absolute top-[8%] left-1/2 transform -translate-x-1/2 w-[80%] h-auto"
//           />
//           </div>
          

//           {/* Heading on Top */}
//           <h3 className="absolute w-[75%]  bottom-[15%]  left-1/2 transform -translate-x-1/2 text-[#d9d9d9] lg:text-[28px] md:text-[18px] text-center font-semibold">
//             43% of Indians are Facing Loneliness!
//           </h3>
//         </div>
//         <motion.div   transition={{
//           duration: 1.1 // Specify the duration of the animation
//         }}
//         initial={{
//           x: -300 // Starting position
//         }}
//         whileInView={{
//           x: 0, // Target position
//         }}
//         viewport={{
//           once:true,
//          // Trigger animation only once
//           amount: 0.2, // Specifies the amount of the element that must be in view (0.5 means 50%)
//         }}
//          className="card relative ">
//           {/* Cardframe Image */}
//           <img
//             src="Cardframe.png"
//             alt="Card Frame"
//             className="w-full h-full object-cover"
//           />
          
//           {/* Feel-1 Image on Top */}
//           <div className=''>
//           <img
//             src="feel-1-image.png"
//             alt="Feel Image"
//             className="absolute top-[8%] left-1/2 transform -translate-x-1/2 w-[80%] h-auto"
//           />
//           </div>
          

//           {/* Heading on Top */}
//           <h3 className="absolute w-[75%]  bottom-[15%]  left-1/2 transform -translate-x-1/2 text-[#d9d9d9] lg:text-[28px] md:text-[18px]  text-center font-semibold">
//             43% of Indians are Facing Loneliness!
//           </h3>
//         </motion.div>
//       </div>
//     </div>
//   );
// }

// export default Youfeel;



import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion"; // Ensure you have this library installed
import "./Youfeel.css";
import Slider from "react-slick";


function Youfeel() {
  const [isLgScreen, setIsLgScreen] = useState(window.innerWidth >= 1024);
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      text: "43% of Indian’s are Facing Loneliness!",
      img: "feel-1-img.svg",
    },
    {
      text: "46.45% of Indian’s are Facing Breakups",
      img: "feel-2-img.svg",
    },
    {
      text: "68% of Indian’s are Facing Relationship issues",
      img: "feel-3-img.svg",
    },
    // Add more testimonials if needed
  ];

  useEffect(() => {
    const handleResize = () => setIsLgScreen(window.innerWidth >= 1024);
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (!isLgScreen) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      }, 3000); // Change testimonial every 3 seconds

      return () => clearInterval(interval); // Cleanup interval on component unmount
    }
  }, [isLgScreen, testimonials.length]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };


  

  const renderCards = () => {
    if (isLgScreen) {
      // Render all cards for large screens
      return testimonials.map((testimonial, index) => (
        <motion.div
          key={index}
          transition={{ duration: 1.3 }}
          initial={{ x: index === 0 ? 100 : -100 }}
          whileInView={{ x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          className="card relative"
        >
          <img src="Cardframe.png" alt="Card Frame" className="w-full h-full object-cover" />
          <div>
            <img
              src={testimonial.img}
              alt="Feel Image"
              className="absolute top-[8%] left-1/2 transform -translate-x-1/2 w-[80%] h-auto"
            />
          </div>
          <h3 className="absolute w-[80%] top-[72%] left-1/2 transform -translate-x-1/2 text-[#d9d9d9] lg:text-[28px] md:text-[18px] text-center font-semibold">
            {testimonial.text}
          </h3>
        </motion.div>
      ));
    } else {
      // Render a single card for small screens with transition
      const currentTestimonial = testimonials[currentIndex];
      return (
        <motion.div
          key={currentIndex}
          transition={{ duration: 0.6 }}
          initial={{ x: "px" }} // Start off-screen to the right
          animate={{ x: "0" }} // Slide to the center
          exit={{ x: "-" }} // Slide off-screen to the left
          className="card relative mx-auto"
          // className="card relative"
        >
          <img src="sm-youfeel.png" alt="Card Frame" className="w-[80%] self-center mx-auto h-[100%] object-cover" />
          <div>
            <img
              src={currentTestimonial.img}
              alt="Feel Image"
              className="absolute top-[6%] left-[50%] transform -translate-x-1/2 w-[50%] h-auto"
            />
          </div>
          <h3 className="absolute w-[75%] bottom-[7%] px-3 left-[50%] transform -translate-x-1/2 text-[#d9d9d9] text-[18px] text-center font-semibold">
            {currentTestimonial.text}
          </h3>
        </motion.div>
      );
    }
  };

  return (
    <div className={`bg-[#111111] ${
      isLgScreen ? " py-40" : "py-20" }
    } `}>
      {/* Heading Section */}
      <div className={` ${
        isLgScreen ? "text-[60px] pb-[80px]" : "text-[26px] pb-10" }  flex  flex-col justify-between items-center font-semibold`}>
        <span className="text-[#808080]">Do you feel you are the</span>
        <span className="text-[#d9d9d9]">Only One?</span>
      </div>

      {/* Card Section */}
      <div className="cards  flex justify-center gap-[24px]">
        {renderCards()}
      </div>
    </div>
  );
}

export default Youfeel;





