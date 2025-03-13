import React from 'react'
import logo from '../assets/logo.png'
import { useState } from 'react'
import { CiMenuFries } from "react-icons/ci";
import { IoIosClose } from "react-icons/io";
import Button from './Button';
import { IoClose } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {

  //state for handling mobile menu opening and closing
  const [isOpen, setIsOpen] = useState(false)
  
  const navigate = useNavigate()

  return (
    
  <nav className='z-50 bg-white shadow-md sticky top-0 px-[5%] pt-[5%] pb-[1%] md:pt-[1%] md:mb-[1%]  w-full'>
    <div className='flex flex-col flex-wrap justify-center md:flex-row md:justify-between md:items-center'>
    <div className='md:basis-[33%]'>
      <img onClick={()=>navigate('/')} className='h-18 mb-6 md:mb-1' src={logo} alt="Communion Space Logo Icon" />
    </div>

    {/* for the desktop view */}
    <ul className='hidden md:flex md:space-x-20 md:text-2xl md:basis-[33%]'>
      <li onClick={()=>navigate('/')} className='cursor-pointer'>Home</li>
      <li onClick={()=>navigate('/events')} className='cursor-pointer'>Events</li>
    </ul>
    <div className='hidden md:flex'>
    <Button text="Become A Member"/>
    </div>

    {/* for the mobile view */}
    <ul className={`${isOpen ? 'block text-xl text-[#2A2A2A]':'hidden'} md:hidden`}> 
      <li className='py-2 cursor-pointer' onClick={()=>navigate('/')}>Home</li>
      <li className='py-2 cursor-pointer' onClick={()=>navigate('/events')}>Events</li>
      <Button text='Become A Member'/>
    </ul>
    <div className='md:hidden'>
      {
        !isOpen?<CiMenuFries onClick={()=>setIsOpen(!isOpen)}  className='absolute top-[25%]  right-[5%] text-4xl'/>:
        <IoClose onClick={()=>setIsOpen(!isOpen)}  className='absolute top-[10%]  right-[5%] text-6xl font-lighter'/>
      }
    </div>
    </div>
  </nav>

  )
}

export default Navbar