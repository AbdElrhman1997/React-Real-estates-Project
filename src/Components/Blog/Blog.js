import { useState } from 'react'
import imgBlog1 from '../../Images/p-1.png'
import imgBlog2 from '../../Images/p-2.png'
import imgBlog3 from '../../Images/p-4.png'
import imgBlog4 from '../../Images/p-5.png'
import imgBlog5 from '../../Images/p-6.png'
import imgBlog6 from '../../Images/p-7.png'
import {BsHeartFill} from 'react-icons/bs'
import {MdLocationOn} from 'react-icons/md'

import './Blog.css'

const Blog = () => {

    const handleClick=(e)=>{e.target.classList.toggle('love')};
    
    return (
        <section className='blog container mx-auto'>
            <p className=' text-slate-800 text-5xl mt-12 mb-2' data-aos='fade-right'>Recent Property Listed</p>
            <p className=' text-gray-500 text-lg w-3/4 mx-auto' data-aos='fade-right'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
            <div className='grid grid-cols-12 gap-y-10 lg:gap-x-10 md:gap-x-20 sm:gap-x-16 gap-x-20 my-16'>
                <div data-aos='fade-right' data-aos-delay='200' className='card lg:col-span-4 md:col-span-5 sm:col-span-5 col-span-10 lg:translate-x-0 md:translate-x-0 sm:translate-x-0 translate-x-1/3 shadow-xl'>
                    <img src={imgBlog1}></img>
                    <div className='flex justify-between items-center my-6 px-6'>
                        <div className=' bg-yellow-100 font-semibold text-orange-400 px-3 py-1'>For Rent</div>
                        <BsHeartFill className='text-gray-400 cursor-pointer text-2xl' onClick={handleClick} />
                    </div>
                    <p className='text-left px-6 text-slate-800 font-bold'>Red Carpet Real Estate</p>
                    <p className='flex px-6 text-gray-500'><MdLocationOn className='text-xl'/> 210 Zirak Road, Canada</p>
                    <hr className='mt-4'/>
                    <div className='flex justify-between items-center px-6'>
                        <div className='bg-green-500 rounded-full px-5 py-3 w-fit text-xl  btn lg:my-4 my-4'><p className=' text-white font-bold'>$3,700</p></div>
                        <p>/sqft</p>
                        <p className='text-slate-800 font-semibold'>Apartment</p>
                    </div>
                </div>
                <div data-aos='fade-bottom' data-aos-delay='200' className='card lg:col-span-4 md:col-span-5 sm:col-span-5 col-span-10 lg:translate-x-0 md:translate-x-0 sm:translate-x-0 translate-x-1/3 shadow-xl'>
                    <img src={imgBlog2}></img>
                    <div className='flex justify-between items-center my-6 px-6'>
                        <div className=' bg-green-100 font-semibold text-green-400 px-3 py-1'>For Sale</div>
                        <BsHeartFill className='text-gray-400 cursor-pointer text-2xl' onClick={handleClick} />
                    </div>
                    <p className='text-left px-6 text-slate-800 font-bold'>Red Carpet Real Estate</p>
                    <p className='flex px-6 text-gray-500'><MdLocationOn className='text-xl'/> 210 Zirak Road, Canada</p>
                    <hr className='mt-4'/>
                    <div className='flex justify-between items-center px-6'>
                        <div className='bg-green-500 rounded-full px-5 py-3 w-fit text-xl  btn lg:my-4 my-4'><p className=' text-white font-bold'>$9,750</p></div>
                        <p>/sqft</p>
                        <p className='text-slate-800 font-semibold'>Apartment</p>
                    </div>
                </div>
                <div data-aos='fade-left' data-aos-delay='200' className='card lg:col-span-4 md:col-span-5 sm:col-span-5 col-span-10 lg:translate-x-0 md:translate-x-0 sm:translate-x-0 translate-x-1/3 shadow-xl'>
                    <img src={imgBlog3}></img>
                    <div className='flex justify-between items-center my-6 px-6'>
                        <div className=' bg-yellow-100 font-semibold text-orange-400 px-3 py-1'>For Rent</div>
                        <BsHeartFill className='text-gray-400 cursor-pointer text-2xl' onClick={handleClick} />
                    </div>
                    <p className='text-left px-6 text-slate-800 font-bold'>Red Carpet Real Estate</p>
                    <p className='flex px-6 text-gray-500'><MdLocationOn className='text-xl'/> 210 Zirak Road, Canada</p>
                    <hr className='mt-4'/>
                    <div className='flex justify-between items-center px-6'>
                        <div className='bg-green-500 rounded-full px-5 py-3 w-fit text-xl  btn lg:my-4 my-4'><p className=' text-white font-bold'>$5,860</p></div>
                        <p>/sqft</p>
                        <p className='text-slate-800 font-semibold'>Apartment</p>
                    </div>
                </div>
                <div data-aos='fade-right' data-aos-delay='200' className='card lg:col-span-4 md:col-span-5 sm:col-span-5 col-span-10 lg:translate-x-0 md:translate-x-0 sm:translate-x-0 translate-x-1/3 shadow-xl'>
                    <img src={imgBlog4}></img>
                    <div className='flex justify-between items-center my-6 px-6'>
                        <div className=' bg-green-100 font-semibold text-green-400 px-3 py-1'>For Sale</div>
                        <BsHeartFill className='text-gray-400 cursor-pointer text-2xl' onClick={handleClick} />
                    </div>
                    <p className='text-left px-6 text-slate-800 font-bold'>Red Carpet Real Estate</p>
                    <p className='flex px-6 text-gray-500'><MdLocationOn className='text-xl'/> 210 Zirak Road, Canada</p>
                    <hr className='mt-4'/>
                    <div className='flex justify-between items-center px-6'>
                        <div className='bg-green-500 rounded-full px-5 py-3 w-fit text-xl  btn lg:my-4 my-4'><p className=' text-white font-bold'>$7,540</p></div>
                        <p>/sqft</p>
                        <p className='text-slate-800 font-semibold'>Apartment</p>
                    </div>
                </div>
                <div data-aos='fade-top' data-aos-delay='200' className='card lg:col-span-4 md:col-span-5 sm:col-span-5 col-span-10 lg:translate-x-0 md:translate-x-0 sm:translate-x-0 translate-x-1/3 shadow-xl'>
                    <img src={imgBlog5}></img>
                    <div className='flex justify-between items-center my-6 px-6'>
                        <div className=' bg-yellow-100 font-semibold text-orange-400 px-3 py-1'>For Rent</div>
                        <BsHeartFill className='text-gray-400 cursor-pointer text-2xl' onClick={handleClick}/>
                    </div>
                    <p className='text-left px-6 text-slate-800 font-bold'>Red Carpet Real Estate</p>
                    <p className='flex px-6 text-gray-500'><MdLocationOn className='text-xl'/> 210 Zirak Road, Canada</p>
                    <hr className='mt-4'/>
                    <div className='flex justify-between items-center px-6'>
                        <div className='bg-green-500 rounded-full px-5 py-3 w-fit text-xl  btn lg:my-4 my-4'><p className=' text-white font-bold'>$4,850</p></div>
                        <p>/sqft</p>
                        <p className='text-slate-800 font-semibold'>Apartment</p>
                    </div>
                </div>
                <div data-aos='fade-left' data-aos-delay='200' className='card lg:col-span-4 md:col-span-5 sm:col-span-5 col-span-10 lg:translate-x-0 md:translate-x-0 sm:translate-x-0 translate-x-1/3 shadow-xl'>
                    <img src={imgBlog6}></img>
                    <div className='flex justify-between items-center my-6 px-6'>
                        <div className=' bg-green-100 font-semibold text-green-400 px-3 py-1'>For Sale</div>
                        <BsHeartFill className={`text-gray-400 cursor-pointer text-2xl`} onClick={handleClick}/>
                    </div>
                    <p className='text-left px-6 text-slate-800 font-bold'>Red Carpet Real Estate</p>
                    <p className='flex px-6 text-gray-500'><MdLocationOn className='text-xl'/> 210 Zirak Road, Canada</p>
                    <hr className='mt-4'/>
                    <div className='flex justify-between items-center px-6'>
                        <div className='bg-green-500 rounded-full px-5 py-3 w-fit text-xl  btn lg:my-4 my-4'><p className=' text-white font-bold'>$2,742</p></div>
                        <p>/sqft</p>
                        <p className='text-slate-800 font-semibold'>Apartment</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Blog