'use client'; 

import React, { useEffect } from 'react';
import Navbar from './Navbar';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      easing: 'ease-in-out',
      once: true, 
    });
  }, []);

  return (
    <div className='bg-[url("/banner_bgjpg")] lg:bg-cover min-h-screen'>
      <Navbar />
      <div className='container grid lg:grid-cols-2 h-[calc(100vh-60px)]'>
        
       
        <div className='hidden lg:flex justify-center items-center'>
          <img 
            src="/image/WhatsApp_Image_2024-11-19_at_1.57.44_AM-removebg-preview.png" 
            alt="Aisha Tahir" 
            className="object-contain max-w-full max-h-96"  
          />
        </div>

        
        <div className='flex flex-col justify-center items-center text-center text-white'>
          <div
            className='text-[60px] sm:text-[100px] md:text-[130px] font-bold leading-tight'
            data-aos="zoom-in-up"
          >
            <span>I'm</span>
          </div>
          <div
            className='text-[60px] sm:text-[100px] md:text-[130px] font-bold leading-tight'
            data-aos="zoom-in-up"
          >
            <span>Aisha</span>
          </div>
          <div
            className='text-[60px] sm:text-[100px] md:text-[130px] font-bold leading-tight'
            data-aos="zoom-in-up"
          >
            <span>Tahir</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
