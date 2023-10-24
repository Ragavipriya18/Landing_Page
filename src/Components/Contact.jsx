import React from 'react'
import {FaInstagram, FaLinkedin, FaTwitter} from 'react-icons/fa'
import {SiGmail} from 'react-icons/si'

const Contact = () => {

    const isValidEmail = (email) => {
        // Basic email validation regular expression
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return emailRegex.test(email);
      };
   
    const submit = ()=>{
        const subscribe=document.getElementsByName('subscribe')[0].value;
    

        if(subscribe === ''){
            window.alert("*Enter a email id to subscribe...")
        }
        else if (!isValidEmail(subscribe)) {
            window.alert('*Enter a valid email address to subscribe...');
        }
       else{
        window.alert("Successfully subscribed our page")
       }
    }
    return (

    

    <div name='contact' className='bg-white w-full h-screen'> 
        <div>
        <h1 className='text-7xl font-bold pt-20 md:text-center' id='airpods'>Contact</h1>
        </div>

        


                <div className='md:-mb-28'>
                    <img className='md:ml-44 md:h-3/12 md:w-3/12'src='spec5.jpg' alt=''></img>
                </div>

                <div className='ml-20'>
                    <h2 className='text-black text-xl justify-end md:text-end md:mr-40'>For further updates, subscribe through Email...!</h2>

                    <div className='flex flex-row gap-1 mt-8 md:justify-end md:mr-40'>
                        
                        <input name='subscribe' className='rounded bg-gray-950 text-center text-white md:w-3/12'  type='text' placeholder='Email Address...' required></input>
                        <button type='submit' onClick={submit} className='btn btn-danger'>Subscribe</button>
                        
                    </div>

                    <div className='flex flex-row gap-2 mt-8 ml-5 text-center md:justify-end md:mr-40'>
                        <FaLinkedin size={30} color='black' className='hover:animate-ping cursor-pointer'/>
                        <FaInstagram  size={30} color='black' className='hover:animate-ping cursor-pointer' />
                        <SiGmail  size={30} color='black' className='hover:animate-ping cursor-pointer'/>
                        <FaTwitter size={30} color='black' className='hover:animate-ping cursor-pointer'/>
                    </div>
                </div>
            </div>

    
  )
}

export default Contact;
