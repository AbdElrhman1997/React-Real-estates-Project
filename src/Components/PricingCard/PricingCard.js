import React from 'react';
import {AiOutlineClose,AiOutlineCheck} from 'react-icons/ai';
import './PricingCard.css';

const PricingCard = ({price,state,check}) => {

    return (
        <>
            <div data-aos='fade-left' data-aos-delay='300' className='card-Price shadow-xl lg:col-span-4 md:col-span-6 sm-col-span-6 col-span-8 lg:translate-x-0 md:translate-x-0 translate-x-1/4'>
                <p className='font-bold text-3xl'>{state}</p>
                <p className='font-bold text-4xl'>$<span className='text-7xl'>{price}</span></p>
                <p>per user, per month</p>
                <p className='flex items-center text-lg'><AiOutlineCheck className='true'/>99.5% Uptime Guarantee</p>
                <p className='flex items-center text-lg'><AiOutlineCheck className='true'/>120GB CDN Bandwidth</p>
                <p className='flex items-center text-lg'><AiOutlineCheck className='true'/>5GB Cloud Storage</p>
                <p className='flex items-center text-lg'>{check[0]?<AiOutlineCheck className='true'/>:<AiOutlineClose className='false'/>}Personal Help Support</p>
                <p className='flex items-center text-lg'>{check[1]?<AiOutlineCheck className='true'/>:<AiOutlineClose className='false'/>}Enterprise SLA</p>
                <div className='bg-white rounded-md p-2 w-2/3 mx-auto rounded-full btn-pr border-4 border-green-100'><p className=' text-green-500 text-xl'>Start {state}</p></div>
            </div>
        </>
    )
}

export default PricingCard;