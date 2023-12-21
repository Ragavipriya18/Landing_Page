import React from 'react'
import {FaMusic} from 'react-icons/fa';
import {BiSolidBatteryCharging} from 'react-icons/bi'
import {BsSoundwave} from 'react-icons/bs'
import {RiWirelessChargingFill} from "react-icons/ri";
import { Carousel } from 'react-responsive-carousel';
import {AiFillAudio} from 'react-icons/ai';
import {MdBluetooth} from 'react-icons/md';



import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Features = () => {

  

  return (
  

   


    <div name='features' className='bg-white w-full h-full md:h-screen'> 
        <h1 className='text-7xl font-bold pt-20 md:text-center' id='airpods'>Features</h1>

        
    <div className='flex flex-row gap-2 justify-center'>
      <FaMusic size={30} color='black' />
      <h4 id='features' className=' text-black font-medium text-2xl '>Elevate your Music Journey</h4>
      <FaMusic  size={30} color='black'/>
    </div>

{/* carousel */}
    <div className=" mx-auto text-white md:hidden">
      <Carousel >

        <div className=' bg-black h-96 w-96 mx-auto flex flex-col my-10 rounded-3xl '>
          <h6 className='text-2xl my-10 '>Immersive Sound</h6>
          <BsSoundwave className='mx-auto hover:animate-ping ' size={90}/>
          <p className=' text-center mt-8'>"Apple AirPods Pro deliver an immersive sound experience with spatial audio, creating a 3D and captivating listening environment."</p>
        </div>

        <div className='bg-black h-96 w-96 mx-auto flex flex-col  my-10 rounded-3xl'>
          <h6 className=' my-10 text-2xl'>Battery Life</h6>
          <BiSolidBatteryCharging  className='mx-auto hover:animate-ping'size={90}/>
          <p className=' text-center mt-8 ml-3 mr-3'>"Apple AirPods Pro offer up to 4.5 hours of listening time with active noise cancellation, ensuring extended usage on a single charge."</p>
        </div>

        <div className='bg-black h-96 w-96 mx-auto flex flex-col  my-10 rounded-3xl'>
          <h6 className='my-10 text-2xl'>Wireless Charging</h6>
          <RiWirelessChargingFill  className='mx-auto hover:animate-ping'size={90}/>
          <p className=' text-center mt-8 ml-3 mr-3'>
          "Apple AirPods Pro support wireless charging, offering convenient and cable-free recharging with compatible Qi chargers." </p>
        </div>

        <div className='bg-black h-96 w-96 mx-auto flex flex-col  my-10 rounded-3xl'>
          <h6 className='my-10 text-2xl'>Audio Sharing</h6>
          <AiFillAudio  className='mx-auto hover:animate-ping'size={90}/>
          <p className=' text-center mt-8 ml-3 mr-3'>
          "Audio Sharing on Apple AirPods Pro allows you to share your audio with a friend by connecting two pairs of AirPods to a single device for a shared listening experience."
           </p>
        </div>

        <div className='bg-black h-96 w-96 mx-auto flex flex-col  my-10 rounded-3xl'>
          <h6 className='my-10 text-2xl'>Bluetooth Pairing </h6>
          <MdBluetooth className='mx-auto hover:animate-ping'size={90}/>
          <p className=' text-center mt-8 ml-3 mr-3'>
          "Apple AirPods Pro offer quick and seamless pairing and connectivity with Apple devices, allowing for a hassle-free and effortless user experience."
           </p>
        </div>

      </Carousel>



      

    </div>

   















<div id='features'  className=' flex-row gap-4 justify-center mt-20 hidden md:flex'>
    {/* card1 */}
    <div className='bg-gradient-to-r from-green-300 to-blue-500 hover:from-pink-500 hover:to-yellow-200  bg-opacity-70  h-80 w-80 flex flex-col  text-white gap-4 items-center rounded-br-3xl hover:scale-105  cursor-pointer'>

      <h6 className=' mt-12 text-xl'>Immersive Sound</h6>
      <BsSoundwave size={50}/>
      <p className=' text-center'>"Apple AirPods Pro deliver an immersive sound experience with spatial audio, creating a 3D and captivating listening environment."</p>
    </div>

    {/* card2 */}
    <div className='bg-gradient-to-r from-green-300 to-blue-500 hover:from-pink-500 hover:to-yellow-200 bg-opacity-70 h-80 w-80 flex flex-col text-white gap-4 items-center rounded-b-3xl hover:scale-105 cursor-pointer'>

      <h6 className='mt-12 text-xl'>Battery Life</h6>
      <BiSolidBatteryCharging  className=''size={50}/>
      <p className=' text-center'>"Apple AirPods Pro offer up to 4.5 hours of listening time with active noise cancellation, ensuring extended usage on a single charge."</p>

    </div>

    {/* card3 */}
    <div className='bg-gradient-to-r from-green-300 to-blue-500 hover:from-pink-500 hover:to-yellow-200 bg-opacity-70  h-80 w-80 flex flex-col  gap-4 text-white items-center rounded-bl-3xl hover:scale-105 cursor-pointer'> 

      <h6 className='mt-12 text-xl'>Wireless Charging</h6>
      <RiWirelessChargingFill  className=''size={50}/>
      <p className=' text-center'>
"Apple AirPods Pro support wireless charging, offering convenient and cable-free recharging with compatible Qi chargers." </p>

      </div>
  </div>

  
 


  


    </div>
  
  )
}

export default Features;








