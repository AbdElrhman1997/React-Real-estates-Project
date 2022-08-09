import React from 'react';
import {BsHeartFill} from 'react-icons/bs';
import {MdLocationOn} from 'react-icons/md';
import './BlogCard.css';

const BlogCard = ({bgImg,price,state}) => {

    const handleClick=(e)=>{e.target.classList.toggle('love')};

    return (
        <>
            <div data-aos='fade-right' className='card lg:col-span-4 md:col-span-6 shadow-xl'>
                <img src={bgImg} className='blogImg'></img>
                <div className='flex justify-between items-center my-6 px-6'>
                    <div className=' bg-yellow-100 font-semibold text-orange-400 px-3 py-1'>{state}</div>
                    <BsHeartFill className='text-gray-400 cursor-pointer text-2xl' onClick={handleClick} />
                </div>
                <p className='text-left px-6 text-slate-800 font-bold'>Red Carpet Real Estate</p>
                <p className='flex px-6 text-gray-500'><MdLocationOn className='text-xl'/> 210 Zirak Road, Canada</p>
                <hr className='mt-4'/>
                <div className='flex justify-between items-center px-6'>
                    <div className='bg-green-500 rounded-full px-5 py-3 w-fit text-xl  btn lg:my-4 my-4'><p className=' text-white font-bold'>${price}</p></div>
                    <p>/sqft</p>
                    <p className='text-slate-800 font-semibold'>Apartment</p>
                </div>
            </div>
        </>
    )
}

export default BlogCard;