import React from 'react';
import './FeaturedCard.css';
import {MdLocationOn} from 'react-icons/md'
import {FaFacebookF,FaLinkedin,FaTwitter,FaInstagram,FaPhone,FaEnvelope} from 'react-icons/fa'

const FeaturedCard = ({profileImg,name,location,listings}) => {

    return (
        <>
            <div data-aos='fade-right' data-aos-delay='200' className='card-featured shadow-xl lg:col-span-4 md:col-span-6 flex flex-col items-center'>
                <div className='bg-orange-500 p-2 w-1/2 rounded-full btn-fe'><p className='text-white font-bold'>{listings} Listings</p></div>
                <div className=' w-28 h-28 border-4 border-gray-300 rounded-full flex justify-center items-center mt-4'>
                    <img src={profileImg} className='w-20 h-20 rounded-full'/>
                </div>
                <p className='flex text-gray-500 my-4'><MdLocationOn className='text-xl'/>{location}</p>
                <p className='text-lg'>{name}</p>
                <p className='flex text-gray-500 my-4'><FaFacebookF className='icon-fe'/><FaLinkedin className='icon-fe'/><FaTwitter className='icon-fe'/><FaInstagram className='icon-fe'/></p>
                <div className='flex w-3/4 items-center'>
                    <div className='bg-green-500 p-2 rounded-md mx-auto'><p className='text-white p-1 flex w-full items-center'><FaEnvelope className='mx-2'/>Message</p></div>
                    <div className='bg-black px-6 py-3 rounded-md mx-auto'><FaPhone className='text-white text-2xl'/></div>
                </div>
            </div>
        </>
    )
}

export default FeaturedCard;