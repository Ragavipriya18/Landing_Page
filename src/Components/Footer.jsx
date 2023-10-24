import React from 'react'
import { FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import {SiGmail} from 'react-icons/si';

const Footer = () => {
  return (
    <div className='bg-zinc-950 h-36 w-full text-white'>
      
        <div className=' flex-row gap-40 ml-5 mr-5 hidden sm:flex'>

            {/* row 1 */}
            
            <div className='mt-11 md:ml-72'>
            <h1 id='airpods' className='text-4xl text-cyan-600' >AirPods</h1>
            <div className='flex flex-row gap-2 ml-2 text-cyan-600'>
            <FaLinkedin className='hover:animate-ping cursor-pointer' />
            <FaInstagram className='hover:animate-ping cursor-pointer'/>
            <SiGmail className='hover:animate-ping cursor-pointer'/>
            <FaTwitter className='hover:animate-ping cursor-pointer'/>
            </div>
            </div>

            {/* row2 */}
            <div className='flex flex-col mt-2'>
            <a className='text-decoration-none text-white' href=''><h6 className='hover:text-cyan-600'>Home</h6></a>
        <a className='text-decoration-none text-white' href=''><h6 className='hover:text-cyan-600'>Features</h6></a>
        <a className='text-decoration-none text-white' href=''><h6 className='hover:text-cyan-600'>Specialization</h6></a>
        <a className='text-decoration-none text-white' href=''><h6 className='hover:text-cyan-600'>Diversity</h6></a>
        <a className='text-decoration-none text-white' href=''><h6 className='hover:text-cyan-600'>Contact</h6></a>
                
            </div>


             {/* row 4 only for desktop view */}

             <div className='bg-white  h-28 w-28  mt-3 text-black '>
                <iframe frameborder="0" className='h-28 w-28' src="https://www.google.com/maps/embed/v1/place?q=12,+North+Street,+Trichy,+TamilNadu&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8">
                </iframe>
            </div>

            {/* row 3 */}
            <div className='mt-2'>
                <h6>Ask a question?</h6>
                <h6>+91 93******48</h6>
                <h6>airpods@gmail.com</h6>
                <h6>12, North Street</h6>
                <h6>Trichy, TamilNadu</h6>
            </div>

           

        </div>



        <div className='md:hidden  text-center flex flex-col gap-2'>

            <h1 id='airpods' className='text-4xl text-cyan-600  mt-3' >AirPods</h1>
            <div className='flex flex-row gap-2  text-cyan-600 justify-center'>
            <FaLinkedin className='hover:animate-ping cursor-pointer' />
            <FaInstagram className='hover:animate-ping cursor-pointer'/>
            <SiGmail className='hover:animate-ping cursor-pointer'/>
            <FaTwitter className='hover:animate-ping cursor-pointer'/>
            </div>
            <h2 id='airpods' className='text-cyan-500 mt-2'>airpods@gmail.com</h2>

        </div>
      
    </div>
  )
}

export default Footer;
