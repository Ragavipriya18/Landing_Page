import React from 'react'
import { useState } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';



const Home = () => {

  

    const [showSignUp, setShowSignUp] = useState(false);
    
    const closeForm = () =>{
      setShowSignUp(!showSignUp);
    };

    const isValidEmail = (email) => {
      // Basic email validation regular expression
      const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      return emailRegex.test(email);
    };

    const signup = () => {
      const email = document.getElementsByName('email')[0].value;
      const password = document.getElementsByName('password')[0].value;
      const username = document.getElementsByName('username')[0].value;
    
  
      if (email === '' || password === '' || username === '') {
        window.alert('*Please fill the required details...!');
      }
      else if (!isValidEmail(email)) {
        window.alert('*Enter a valid email address to register...');
    }
      else {
        window.alert("An Account was created successfully!")

      
        
      }
    };

 

    return (

    <div name="home" className='bg-black h-full  md:flex md:h-screen'>


      
      <div className='text-white pt-36 ml-5 mr-5 md:mt-24 md:ml-28 '>
        <h1 className='text-5xl md:text-6xl' id='airpods'>Welcome to the Ultimate Audio Experience!</h1>
        
        <p className='text-justify mt-3 md:mr-32  md:text-xl' id='para1' >Welcome to the future of immersive audio with <span className='text-sky-500 animate-pulse '>Apple AirPods Pro!</span> Discover a new dimension of sound quality and wireless convenience as you delve into a world of premium audio experiences. These cutting-edge, noise-canceling earbuds redefine the way you listen to music, make calls, or enjoy your favorite content. Welcome to a world where technology meets elegance.</p>
        
      <div className='flex gap-2'>
       
       <button onClick={()=>setShowSignUp(!showSignUp)} className='btn btn-primary'>Register</button>

       
      </div>
</div>

      <div className='mt-10 md:mt-48 md:mr-24 '>
        <img src='airpods.jpg' alt='' id='floating-image'></img>
      </div>


        {/* signup division... */}

     {showSignUp && (
      <div className='absolute inset-0 bg-opacity-70 backdrop-blur-md z-10'></div>
     )}

    {showSignUp && (
        <div className="fixed inset-0 flex  items-center justify-center
         z-20"> 
         
          <div className="bg-white h-96 w-96 flex flex-col gap-2 text-center rounded-lg shadow-lg ">

            <div className='items-end  text-end mt-1 mr-2'>
              {/* toggle btn */}
            <button className='bg-sky-700 text-white h-8 w-8 rounded-full animate-pulse'></button>
            </div>
            
            <h2 className="text-2xl  text-black">Register</h2>
           
            
        
            <input type='email' name='email' placeholder='Email' className=' text-black border h-10 w-64 mx-auto outline outline-offset outline-blue-600 rounded-lg' required></input>


            

            <input type='password'  name='password' placeholder='Password' className='text-black border h-10 w-64 mx-auto outline outline-offset outline-blue-600 rounded-lg '  required></input>

            <input type='text' 
              name='username' placeholder='Username' className='text-black border h-10 w-64 mx-auto outline outline-offset outline-blue-600 rounded-lg ' required></input>


            <h6 className='text-black'>----OR----</h6>


            <div className='flex flex-row gap-4 justify-center'>
            <a href=''><FaGoogle className='hover:animate-ping' size={30} color='black'/></a>
            <a href=''><SiGmail className='hover:animate-ping' size={30} color='black'/></a>
            </div>
            

            <div className='flex flex-row mx-auto gap-28'>
              <button onClick={signup}className='btn btn-primary '>SignUp</button>
              <button onClick={closeForm} className='btn btn-danger'>Cancel</button>
            </div>
          
          </div>
        </div>
    
    )}
     


    
                    
                



      

      
    </div>
    
  )
}

export default Home;
































