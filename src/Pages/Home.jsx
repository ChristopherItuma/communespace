import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import hero_img from '../assets/hero-img.svg'
import Button from '../components/Button'



const Home = () => {
  const [isCallToAction, setIsCallToAction]= useState(true)
  return (
    <div>
    <Navbar />
      <div className='px-[5%] py-[5%] md:py-[1%] relative w-full'>
        {/*Hero Section */}
        <section className='mt-10 flex flex-col-reverse md:flex-row md:justify-between items-center'>
          <div className='md:basis-[60%]'>
            <h1 className='text-center md:text-left text-[1.7rem] md:text-[4rem] font-semibold mb-5'>Bringing People Together Through Faith & Community</h1>
            <h4 className='text-xl text-center md:text-left'>Join a vibrant community where faith, events, and connections come to life. Discover gatherings that inspire, uplift, and bring people closer.</h4>
            <div className='flex justify-center mt-4 md:justify-start'>
            <Button text="Explore Events" isCallToAction={isCallToAction}/>
            </div>
          </div>
          <div className='basis-50%'>
            <img src={hero_img} alt="" className='h-[40vh] w-full md:h-[60vh]'/>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Home