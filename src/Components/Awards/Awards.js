import React from 'react'
import {FaBriefcase ,FaTrophy ,FaLightbulb, FaHeart} from 'react-icons/fa'
import './Awards.css' 

const Awards = () => {
    return (
        <section className='awards bg-slate-800'>
            <div className='container mx-auto text-white py-6'>
                <p className='text-green-500' data-aos='fade-left' data-aos-delay='1000'>Our Awards</p>
                <p className='text-3xl w-3/5 mx-auto leading-10' data-aos='fade-left' data-aos-delay='1000'>Over 1,24,000+ Happy User Bieng With Us Still They Love Our Services</p>
                <div className='grid grid-cols-12 my-20'>
                    <div data-aos='fade-right' data-aos-delay='1300' className='lg:col-span-3 col-span-6 my-5 mx-auto text-left'>
                        <FaTrophy className='bg-slate-600 icon'/>
                        <p className='text-5xl font-bold my-3'>32 M</p>
                        <p className='text-gray-500'>Blue Burmin Award</p>
                    </div>
                    <div data-aos='fade-bottom' data-aos-delay='1300' className='lg:col-span-3 col-span-6 my-5 mx-auto text-left'>
                        <FaBriefcase className='bg-slate-600 icon'/>
                        <p className='text-5xl font-bold my-3'>43 M</p>
                        <p className='text-gray-500'>Mimo X11 Award</p>
                    </div>
                    <div data-aos='fade-top' data-aos-delay='1300' className='lg:col-span-3 col-span-6 my-5 mx-auto text-left'>
                        <FaLightbulb className='bg-slate-600 icon'/>
                        <p className='text-5xl font-bold my-3'>51 M</p>
                        <p className='text-gray-500'>Australian UGC Award</p>
                    </div>
                    <div data-aos='fade-left' data-aos-delay='1300' className='lg:col-span-3 col-span-6 my-5 mx-auto text-left'>
                        <FaHeart className='bg-slate-600 icon'/>
                        <p className='text-5xl font-bold my-3'>42 M</p>
                        <p className='text-gray-500'>IITCA Green Award</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Awards