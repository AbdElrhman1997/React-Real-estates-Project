import React from 'react'
import {MdLocationOn} from 'react-icons/md'
import {FaFacebookF,FaLinkedin,FaTwitter,FaInstagram,FaPhone,FaEnvelope} from 'react-icons/fa'
import imgFea1 from '../../Images/imgFea1.jpg'
import imgFea2 from '../../Images/imgFea2.jpg'
import imgFea3 from '../../Images/imgFea3.jpg'

import './Featured.css'

const Featured = () => {
    return (
        <section className='featured my-10 py-6'>
            <div className='grid grid-cols-12 container mx-auto gap-6'>
                <p data-aos='fade-left' data-aos-delay='1500' className=' text-slate-800 text-5xl mt-12 mb-2 col-span-12'>Our Featured Agents</p>
                <p data-aos='fade-left' data-aos-delay='1500' className=' text-gray-500 text-lg w-2/3 mx-auto col-span-12'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                <div data-aos='fade-right' data-aos-delay='1500' className='card-featured shadow-xl lg:col-span-4 md:col-span-6 sm-col-span-6 col-span-8 flex flex-col items-center lg:translate-x-0 md:translate-x-0 translate-x-1/4'>
                    <div className='bg-orange-500 p-2 w-1/2 rounded-full btn-fe'><p className='text-white font-bold'>50 Listings</p></div>
                    <div className=' w-28 h-28 border-4 border-gray-300 rounded-full flex justify-center items-center mt-4'>
                        <img src={imgFea1} className='w-20 h-20 rounded-full'/>
                    </div>
                    <p className='flex text-gray-500 my-4'><MdLocationOn className='text-xl'/>Liverpool, Canada</p>
                    <p className='text-lg'>Sargam S. Singh</p>
                    <p className='flex text-gray-500 my-4'><FaFacebookF className='icon-fe'/><FaLinkedin className='icon-fe'/><FaTwitter className='icon-fe'/><FaInstagram className='icon-fe'/></p>
                    <div className='flex w-3/4 items-center'>
                        <div className='bg-green-500 p-2 rounded-md mx-auto'><p className='text-white p-1 flex w-full items-center'><FaEnvelope className='mx-2'/>Message</p></div>
                        <div className='bg-black px-6 py-3 rounded-md mx-auto'><FaPhone className='text-white text-2xl'/></div>
                    </div>
                </div>
                <div data-aos='fade-bottom' data-aos-delay='1500' className='card-featured shadow-xl lg:col-span-4 md:col-span-6 sm-col-span-6 col-span-8 flex flex-col items-center lg:translate-x-0 md:translate-x-0 translate-x-1/4'>
                    <div className='bg-orange-500 p-2 w-1/2 rounded-full btn-fe'><p className='text-white font-bold'>70 Listings</p></div>
                    <div className=' w-28 h-28 border-4 border-gray-300 rounded-full flex justify-center items-center mt-4'>
                        <img src={imgFea2} className='w-20 h-20 rounded-full'/>
                    </div>
                    <p className='flex text-gray-500 my-4'><MdLocationOn className='text-xl'/>Montreal, Canada</p>
                    <p className='text-lg'>Harijeet M. Siller</p>
                    <p className='flex text-gray-500 my-4'><FaFacebookF className='icon-fe'/><FaLinkedin className='icon-fe'/><FaTwitter className='icon-fe'/><FaInstagram className='icon-fe'/></p>
                    <div className='flex w-3/4 items-center'>
                        <div className='bg-green-500 p-2 rounded-md mx-auto'><p className='text-white p-1 flex w-full items-center'><FaEnvelope className='mx-2'/>Message</p></div>
                        <div className='bg-black px-6 py-3 rounded-md mx-auto'><FaPhone className='text-white text-2xl'/></div>
                    </div>
                </div>
                <div data-aos='fade-left' data-aos-delay='1500' className='card-featured shadow-xl lg:col-span-4 md:col-span-6 sm-col-span-6 col-span-8 flex flex-col items-center lg:translate-x-0 md:translate-x-0 translate-x-1/4'>
                    <div className='bg-orange-500 p-2 w-1/2 rounded-full btn-fe'><p className='text-white font-bold'>80 Listings</p></div>
                    <div className=' w-28 h-28 border-4 border-gray-300 rounded-full flex justify-center items-center mt-4'>
                        <img src={imgFea3} className='w-20 h-20 rounded-full'/>
                    </div>
                    <p className='flex text-gray-500 my-4'><MdLocationOn className='text-xl'/>Denever, USA</p>
                    <p className='text-lg'>Anna K. Young</p>
                    <p className='flex text-gray-500 my-4'><FaFacebookF className='icon-fe'/><FaLinkedin className='icon-fe'/><FaTwitter className='icon-fe'/><FaInstagram className='icon-fe'/></p>
                    <div className='flex w-3/4 items-center'>
                        <div className='bg-green-500 p-2 rounded-md mx-auto'><p className='text-white p-1 flex w-full items-center'><FaEnvelope className='mx-2'/>Message</p></div>
                        <div className='bg-black px-6 py-3 rounded-md mx-auto'><FaPhone className='text-white text-2xl'/></div>
                    </div>
                </div>
                <div data-aos='fade-right' data-aos-delay='1500' className='card-featured shadow-xl lg:col-span-4 md:col-span-6 sm-col-span-6 col-span-8 flex flex-col items-center lg:translate-x-0 md:translate-x-0 translate-x-1/4'>
                    <div className='bg-orange-500 p-2 w-1/2 rounded-full btn-fe'><p className='text-white font-bold'>42 Listings</p></div>
                    <div className=' w-28 h-28 border-4 border-gray-300 rounded-full flex justify-center items-center mt-4'>
                        <img src={imgFea2} className='w-20 h-20 rounded-full'/>
                    </div>
                    <p className='flex text-gray-500 my-4'><MdLocationOn className='text-xl'/>Liverpool, Canada</p>
                    <p className='text-lg'>Adam K. Jollio</p>
                    <p className='flex text-gray-500 my-4'><FaFacebookF className='icon-fe'/><FaLinkedin className='icon-fe'/><FaTwitter className='icon-fe'/><FaInstagram className='icon-fe'/></p>
                    <div className='flex w-3/4 items-center'>
                        <div className='bg-green-500 p-2 rounded-md mx-auto'><p className='text-white p-1 flex w-full items-center'><FaEnvelope className='mx-2'/>Message</p></div>
                        <div className='bg-black px-6 py-3 rounded-md mx-auto'><FaPhone className='text-white text-2xl'/></div>
                    </div>
                </div>
                <div data-aos='fade-top' data-aos-delay='1500' className='card-featured shadow-xl lg:col-span-4 md:col-span-6 sm-col-span-6 col-span-8 flex flex-col items-center lg:translate-x-0 md:translate-x-0 translate-x-1/4'>
                    <div className='bg-orange-500 p-2 w-1/2 rounded-full btn-fe'><p className='text-white font-bold'>39 Listings</p></div>
                    <div className=' w-28 h-28 border-4 border-gray-300 rounded-full flex justify-center items-center mt-4'>
                        <img src={imgFea1} className='w-20 h-20 rounded-full'/>
                    </div>
                    <p className='flex text-gray-500 my-4'><MdLocationOn className='text-xl'/>2272 Briarwood Drive</p>
                    <p className='text-lg'>Michael P. Grimaldo</p>
                    <p className='flex text-gray-500 my-4'><FaFacebookF className='icon-fe'/><FaLinkedin className='icon-fe'/><FaTwitter className='icon-fe'/><FaInstagram className='icon-fe'/></p>
                    <div className='flex w-3/4 items-center'>
                        <div className='bg-green-500 p-2 rounded-md mx-auto'><p className='text-white p-1 flex w-full items-center'><FaEnvelope className='mx-2'/>Message</p></div>
                        <div className='bg-black px-6 py-3 rounded-md mx-auto'><FaPhone className='text-white text-2xl'/></div>
                    </div>
                </div>
                <div data-aos='fade-left' data-aos-delay='1500' className='card-featured shadow-xl lg:col-span-4 md:col-span-6 sm-col-span-6 col-span-8 flex flex-col items-center lg:translate-x-0 md:translate-x-0 translate-x-1/4'>
                    <div className='bg-orange-500 p-2 w-1/2 rounded-full btn-fe'><p className='text-white font-bold'>45 Listings</p></div>
                    <div className=' w-28 h-28 border-4 border-gray-300 rounded-full flex justify-center items-center mt-4'>
                        <img src={imgFea3} className='w-20 h-20 rounded-full'/>
                    </div>
                    <p className='flex text-gray-500 my-4'><MdLocationOn className='text-xl'/>Montreal, USA</p>
                    <p className='text-lg'>Sargam S. Singh</p>
                    <p className='flex text-gray-500 my-4'><FaFacebookF className='icon-fe'/><FaLinkedin className='icon-fe'/><FaTwitter className='icon-fe'/><FaInstagram className='icon-fe'/></p>
                    <div className='flex w-3/4 items-center'>
                        <div className='bg-green-500 p-2 rounded-md mx-auto'><p className='text-white p-1 flex w-full items-center lg:translate-x-0 md:translate-x-0 translate-x-1/4'><FaEnvelope className='mx-2'/>Message</p></div>
                        <div className='bg-black px-6 py-3 rounded-md mx-auto'><FaPhone className='text-white text-2xl'/></div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Featured