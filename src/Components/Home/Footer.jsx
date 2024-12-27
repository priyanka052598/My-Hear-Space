import React from 'react'

function Footer() {
  return (
    <div className='relative'>
        <img className='w-full' src="footer-bg.png" alt="" />
        <div className="content lg:gap-16 md:gap-8 absolute top-0 w-full h-full flex flex-col justify-center items-center">
            <img className='lg:w-40 object-contain' src="Logo.svg" alt="" />
            <div className='flex flex-col justify-between items-center' >
<span className='text-[#d9d9d9] font-semibold lg:text-[40px] md:text-[22px]'>My Hear Space</span>
<div>
<span className=' lg:text-[24px] md:text-[14px] text-[#808080]'> Your safe place to </span><span className='lg:text-[24px] md:text-[14px] text-[#d9d9d9]'> Share, Heal & Transform</span>
</div>

            </div>
            <div className=' text-[#d9d9d9] gap-8 lg:text-[24px] md:text-[18px] flex'>
                <span>Home</span>
                <span>Our Listeners</span>
                <span>Blogs</span>
                <span>Become a Listener</span>
               
            </div>
            {/* <div className="icons flex gap-10">
             
                <img  className='w-12' src="facebook.png" alt="" />
                <img  className='w-12' src="insta.png" alt="" />

                <img  className='w-12' src="twitter.png" alt="" />

                <img  className='w-12' src="wtsp.png" alt="" />

                <img  className='w-12' src="youtube.png" alt="" />
                <img  className='w-12' src="linkdin.png" alt="" />


            </div> */}
             <div className="icons flex gap-10">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <img className='w-12' src="facebook.png" alt="Facebook" />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <img className='w-12' src="insta.png" alt="Instagram" />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <img className='w-12' src="twitter.png" alt="Twitter" />
          </a>
          <a href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer">
            <img className='w-12' src="wtsp.png" alt="WhatsApp" />
          </a>
          <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
            <img className='w-12' src="youtube.png" alt="YouTube" />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <img className='w-12' src="linkdin.png" alt="LinkedIn" />
          </a>
        </div>

        </div>
    </div>
  )
}

export default Footer