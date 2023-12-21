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
                <iframe frameborder="0" className='h-28 w-28' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125406.10469901354!2d78.68902800000002!3d10.815844650000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baaf50ff2aecdad%3A0x6de02c3bedbbaea6!2sTiruchirappalli%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1703129205243!5m2!1sen!2sin" >
                </iframe>
            </div>

            {/* row 3 */}
            <div className='mt-2'>
                <h6>Ask a question?</h6>
                <h6>+91 9363389748</h6>
                <h6>airpods@gmail.com</h6>
                <h6>12, North Street</h6>
                <h6>Trichy, TamilNadu</h6>
            </div>

           

        </div>



        <div className='md:hidden sm:hidden text-center flex flex-col gap-2'>

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
