import React, { useState } from 'react';
import {FaBars, FaTimes} from "react-icons/fa";
import { Link } from 'react-scroll';

const Navbar = () => {

  const [showBuy, setShowBuy] = useState(false);
    
  const closeForm = () =>{
    setShowBuy(!showBuy);
  };

  const isValidEmail = (email) => {
    // Basic email validation regular expression
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
  };

  const isValidPhone = (phone) =>{
    const phoneRegex = /^[\d ()-]*\d{3}[\d ()-]*\d{3}[\d ()-]*\d{4}$/;
    return phoneRegex.test(phone);
  };

  const send = () => {
    const first_name=document.getElementsByName('first_name')[0].value;
    const last_name=document.getElementsByName('last_name')[0].value;
    const username=document.getElementsByName('username')[0].value;
    const email = document.getElementsByName('email')[0].value;
    const address=document.getElementsByName('address')[0].value;
    const phone = document.getElementsByName('phone')[0].value;
    const product_name=document.getElementsByName('product_name')[0].value;
    const quantity=document.getElementsByName('quantity')[0].value;
    

    if (first_name === '' || last_name === '' || username==='' || email === '' || address === '' || phone === ''|| product_name === '' || quantity === '') {
      window.alert('*Please enter the details to place an order...!');
    }
    else if(!isValidEmail(email)){
      window.alert('*Enter a valid email address to buy a product')
    }
    else if(!isValidPhone(phone)){
      window.alert('*Enter a valid phone number to buy a product')
    }
    else {
      window.alert("Request was sent successfully!")
      
    }
  };

  

    const [nav,setNav] = useState(false);
    const links =[
        {
        id: 1,
        link: 'home'
        },
        {
        id: 2,
        link: 'features'
        
        },
        {
        id: 3,
        link: 'specialization'
        },
        {
        id: 4,
        link: 'diversity'
        },
        {
        id: 5,
        link: 'contact'
        },
        
        
      ]
      
      
  return (
    <div className='bg-black w-full h-14 top-0 fixed z-10'>

    <div className="flex justify-between items-center px-4 text-white ">

        <div>
          <h1 id='airpods' className='text-4xl ml-3 mt-2' >AirPods</h1>
        </div>

        <ul className='hidden md:flex '>

            {links.map(({id, link}) => (

                 <li  key={id} className='px-4 cursor-pointer capitalize font-medium  text-white hover:scale-105 duration-200 mt-3'>
                     {link === 'features' ? (
                <Link to={link} smooth duration={500} offset={-200}>
                  {link}
                </Link>
              ) : (
                <Link to={link} smooth duration={500}>
                  {link}
                </Link>
              )}
                  </li>

                  
            ))}

            <button onClick={()=>setShowBuy(!showBuy)}
           
          className='btn btn-primary mt-2' ><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
            </svg>
            </button>



                  {/* signup division... */}

     {showBuy && (
      <div className='absolute inset-0 bg-opacity-70 backdrop-blur-md z-10 '></div>
     )}

    {showBuy && (
        <div className="fixed inset-0 flex  items-center justify-center
         z-20"> 
         
          <div className="bg-white h-5/6 w-9/12 flex flex-col gap-2 rounded-lg shadow-lg ">

            {/* toggle btn */}
            <div className='items-end  text-end mt-1 mr-2'>
            <button className='bg-sky-700 text-white h-8 w-8 rounded-full animate-pulse'></button>
            </div>
            
            <h2 className="text-2xl text-center font-bold font-serif text-black">Send a request to place an order</h2>
           

            {/* row1 */}
            <div className='flex flex-row gap-5 mx-auto '>
            <div>
              <label for="" className='text-black font-semibold  font-serif '>First Name<span className='text-red-600'>*</span></label>
              <br/>
              <br/>
              <input type='text' name='first_name' className='text-black border h-10 w-64 outline outline-offset outline-blue-600 rounded-lg' required></input>
            </div>

            <div>
              <label for="" className='text-black font-semibold  font-serif '>Last Name<span className='text-red-600'>*</span></label>
              <br/>
              <br/>
              <input type='text' name='last_name'className='text-black border h-10 w-64 mx-auto outline outline-offset outline-blue-600 rounded-lg' required></input>
            </div>
            </div>

            

          {/* row2 */}
            <div className='flex flex-row gap-5 mx-auto  mt-2'>
            <div>
              <label for="" className='text-black font-semibold  font-serif '>Username<span className='text-red-600'>*</span></label>
              <br/>
              <br/>
              <input type='text' name='username' className=' text-black border h-10 w-64 outline outline-offset outline-blue-600 rounded-lg' required></input>
            </div>

            <div>
              <label for="" className='text-black font-semibold  font-serif '>Email ID<span className='text-red-600'>*</span></label>
              <br/>
              <br/>
              <input type='email' name='email'className=' text-black border h-10 w-64 mx-auto outline outline-offset outline-blue-600 rounded-lg' required></input>
            </div>
            </div>

            {/* row3 */}
            <div className='flex flex-row gap-5 mx-auto  mt-2'>
            <div>
              <label for="" className='text-black font-semibold  font-serif '>Address<span className='text-red-600'>*</span></label>
              <br/>
              <br/>
              <textarea name='address' className=' text-black border h-10 w-64 outline outline-offset outline-blue-600 rounded-lg' required></textarea>
            </div>

            <div>
              <label for="" className='text-black font-semibold  font-serif '>Phone Number<span className='text-red-600'>*</span></label>
              <br/>
              <br/>
              <input type='number' name='phone' className=' text-black border h-10 w-64 outline outline-offset outline-blue-600 rounded-lg' required></input>
            </div>
            </div>


            {/* row4 */}
            <div className='flex flex-row gap-5 mx-auto  mt-2'>
            <div>
              <label for="" className='text-black font-semibold  font-serif '>Product Name<span className='text-red-600'>*</span></label>
              <br/>
              <br/>
              <input type='text' name='product_name' className='text-black border h-10 w-64 outline outline-offset outline-blue-600 rounded-lg' required></input>
            </div>

            <div>
              <label for="" className='text-black font-semibold  font-serif '>Quantity<span className='text-red-600'>*</span></label>
              <br/>
              <br/>
              <input type='number' name='quantity' className='text-black border h-10 w-64 outline outline-offset outline-blue-600 rounded-lg' required></input>
            </div>
            </div>



           


            
            

            <div className='flex flex-row mx-auto gap-28 mt-3'>
              <button onClick={send}className='btn btn-primary'>Send</button>
              <button onClick={closeForm} className='btn btn-danger'>Cancel</button>
            </div>
          
          </div>
        </div>
    
    )}
     


    
                    
                
            
      
              

        </ul>
    
    <div onClick={() =>setNav(!nav)} className='cursor-pointer pr-4 z-10 text-white md:hidden'>
        {nav ? <FaTimes size={30}/> : <FaBars size={30}/> }
    </div>


    {nav && (
             <ul  className='flex flex-col justify-center items-center absolute top-0  md:hidden left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-white  '>
             {links.map(({id, link}) => (
                  <li key={id} className='px-4 cursor-pointer capitalize py-6 text-2xl hover:scale-105'>
                    {link === 'features' ? (
                <Link onClick={() =>setNav(!nav)} to={link} smooth duration={500} offset={-200}>
                  {link}
                </Link>
              ) : (
                <Link onClick={() =>setNav(!nav)} to={link} smooth duration={500}>
                  {link}
                </Link>
              )}
                  </li>
             ))};
 
     </ul>
    )}

   

    </div>
    </div>
  )
}

export default Navbar;


