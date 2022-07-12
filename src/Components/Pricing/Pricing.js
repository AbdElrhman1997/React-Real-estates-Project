import React from 'react'
import {AiOutlineClose,AiOutlineCheck} from 'react-icons/ai'
import './Pricing.css'

const Pricing = () => {
    return (
        <section className='pricing container mx-auto'>
            <p data-aos='fade-right' data-aos-delay='1500' className=' text-slate-800 text-5xl mt-12 mb-2'>Select Your Package</p>
            <p data-aos='fade-right' data-aos-delay='1500' className=' text-gray-500 text-lg w-3/5 mx-auto'>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores.</p>
            <div className='grid grid-cols-12 gap-6 my-16'>
                <div data-aos='fade-left' data-aos-delay='1500' className='card-Price shadow-xl lg:col-span-4 md:col-span-6 sm-col-span-6 col-span-8 lg:translate-x-0 md:translate-x-0 translate-x-1/4'>
                    <p className='font-bold text-3xl'>Basic</p>
                    <p className='font-bold text-4xl'>$<span className='text-7xl'>29</span></p>
                    <p>per user, per month</p>
                    <p className='flex items-center text-lg'><AiOutlineCheck className='true'/>99.5% Uptime Guarantee</p>
                    <p className='flex items-center text-lg'><AiOutlineCheck className='true'/>120GB CDN Bandwidth</p>
                    <p className='flex items-center text-lg'><AiOutlineCheck className='true'/>5GB Cloud Storage</p>
                    <p className='flex items-center text-lg'><AiOutlineClose className='false'/>Personal Help Support</p>
                    <p className='flex items-center text-lg'><AiOutlineClose className='false'/>Enterprise SLA</p>
                    <div className='bg-white rounded-md p-2 w-2/3 mx-auto rounded-full btn-pr border-4 border-green-100'><p className=' text-green-500 text-xl'>Start Basic</p></div>
                </div>
                <div data-aos='fade-bottom' data-aos-delay='1500' className='card-Price shadow-xl lg:col-span-4 md:col-span-6 sm-col-span-6 col-span-8 lg:-translate-y-10 md:-translate-y-10 lg:translate-x-0 md:translate-x-0 translate-x-1/4'>
                    <div className='bg-orange-500 rounded-md p-2 w-1/2 mx-auto rounded-full btn-pr'><p className='text-white font-bold'>Best Value</p></div>
                    <p className='font-bold text-3xl my-2'>Standard</p>
                    <p className='font-bold text-4xl'>$<span className='text-7xl'>49</span></p>
                    <p>per user, per month</p>
                    <p className='flex items-center text-lg'><AiOutlineCheck className='true'/>99.5% Uptime Guarantee</p>
                    <p className='flex items-center text-lg'><AiOutlineCheck className='true'/>120GB CDN Bandwidth</p>
                    <p className='flex items-center text-lg'><AiOutlineCheck className='true'/>5GB Cloud Storage</p>
                    <p className='flex items-center text-lg'><AiOutlineCheck className='true'/>Personal Help Support</p>
                    <p className='flex items-center text-lg'><AiOutlineClose className='false'/>Enterprise SLA</p>
                    <div className='bg-green-500 rounded-md p-2 w-2/3 mx-auto rounded-full btn-pr'><p className='text-white text-xl p-1'>Start Standard</p></div>
                </div>
                <div data-aos='fade-right' data-aos-delay='1500' className='card-Price shadow-xl lg:col-span-4 md:col-span-6 sm-col-span-6 col-span-8 lg:translate-x-0 md:translate-x-0 translate-x-1/4'>
                    <p className='font-bold text-3xl'>Platinum</p>
                    <p className='font-bold text-4xl'>$<span className='text-7xl'>79</span></p>
                    <p>per user, per month</p>
                    <p className='flex items-center text-lg'><AiOutlineCheck className='true'/>99.5% Uptime Guarantee</p>
                    <p className='flex items-center text-lg'><AiOutlineCheck className='true'/>120GB CDN Bandwidth</p>
                    <p className='flex items-center text-lg'><AiOutlineCheck className='true'/>5GB Cloud Storage</p>
                    <p className='flex items-center text-lg'><AiOutlineCheck className='true'/>Personal Help Support</p>
                    <p className='flex items-center text-lg'><AiOutlineCheck className='true'/>Enterprise SLA</p>
                    <div className='bg-white rounded-md p-2 w-2/3 mx-auto rounded-full btn-pr border-4 border-green-100'><p className='text-green-500  text-xl'>Start Platinum</p></div>
                </div>
            </div>
        </section>
    )
}

export default Pricing