import React from 'react'
import imgAbout from '../../Images/immio.jpg'
import './About.css'

const About = () => {
    return (
        <div className='about grid grid-cols-12 gap-5'>
            <div data-aos='fade-right' data-aos-delay='600' className=' lg:col-span-6 col-span-12 text-left w-5/6 m-auto'>
                <p className='text-slate-800 font-bold text-4xl mt-8 mb-3'>Our Agency Story</p>
                <p className='text-gray-500'>Check out our company story and work process</p>
                <p className='my-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <div className='bg-green-500 rounded-full px-5 py-3 w-fit text-xl  btn lg:my-4 my-4'><p className=' text-white font-bold'>More About Us</p></div>
            </div>
            <div data-aos='fade-left' data-aos-delay='600' className=' lg:col-span-6 col-span-12'>
                <img src={imgAbout} className='lg:mt-8  mb-10 mx-auto w-5/6'/>
            </div>
        </div>
    )
}

export default About