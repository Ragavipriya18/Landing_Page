import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { useState } from 'react';
 import { FaGoogle } from 'react-icons/fa';
 import { SiGmail } from 'react-icons/si';

const Diversity = () => {

    
   
  return (
    <div name='diversity' id='diversity' className='bg-black w-full h-screen'> 
        <h1 className='text-5xl text-center md:text-7xl font-bold pt-20 md:text-center text-white' id='airpods'>Which AirPods are right for you??</h1>

    <Carousel className='md:h-96 md:w-96 md:mx-auto md:mt-20'>
        <div>
            <img src='air3.jpg'></img>
            {/* <p className='text-white'>₹18,499</p> */}
        </div>
        <div>
            <img src='2nd_gen.jpg'></img>
            {/* <p className='text-white'>₹26,900</p> */}
        </div>
        <div>
            <img src='air4.jpg'></img>
            {/* <p className='text-white'>₹24,399</p> */}
        </div>
        <div>
            <img src='air5.jpg'></img>
            {/* <p className='text-white'>₹24,900</p> */}
        </div>
        <div>
            <img src='air6.jpg'></img>
            {/* <p className='text-white'>₹23,900</p> */}
        </div>
        <div>
            <img src='air7.jpg'></img>
            {/* <p className='text-white'>₹30,499</p> */}
        </div>
        <div>
            <img src='spec8.jpg'></img>
            {/* <p className='text-white'>₹32,000</p> */}
        </div>
        <div>
            <img src='air9.jpg'></img>
            {/* <p className='text-white'>₹35,999</p> */}
        </div>

    </Carousel>

   


    






    </div>
  )
}

export default Diversity;
