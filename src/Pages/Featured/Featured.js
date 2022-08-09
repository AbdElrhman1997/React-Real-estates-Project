import React from 'react'
import {MdLocationOn} from 'react-icons/md'
import {FaFacebookF,FaLinkedin,FaTwitter,FaInstagram,FaPhone,FaEnvelope} from 'react-icons/fa'
import imgFea1 from '../../Images/imgFea1.jpg'
import imgFea2 from '../../Images/imgFea2.jpg'
import imgFea3 from '../../Images/imgFea3.jpg'

import './Featured.css'
import FeaturedCard from '../../Components/FeaturedCard/FeaturedCard'

const Featured = () => {
    return (
        <section className='featured my-10 py-6'>
            <div className='lg:grid md:grid grid-cols-12 gap-6'>
                <p data-aos='fade-left' data-aos-delay='1500' className=' text-slate-800 text-5xl mt-12 mb-2 col-span-12'>Our Featured Agents</p>
                <p data-aos='fade-left' data-aos-delay='1500' className=' text-gray-500 text-lg w-2/3 mx-auto col-span-12'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                <FeaturedCard 
                    profileImg={imgFea1}
                    name='Sargam S. Singh'
                    location='Liverpool, Canada'
                    listings='50'
                />
                <FeaturedCard 
                    profileImg={imgFea2}
                    name='Harijeet M. Siller'
                    location='Montreal, Canada'
                    listings='70'
                />
                <FeaturedCard 
                profileImg={imgFea3}
                name='Anna K. Young'
                location='Denever, USA'
                listings='80'
                />
                <FeaturedCard 
                    profileImg={imgFea3}
                    name='Adam K. Jollio'
                    location='Liverpool, Canada'
                    listings='42'
                />
                <FeaturedCard 
                    profileImg={imgFea1}
                    name='Michael P. Grimaldo'
                    location='2272 Briarwood Drive'
                    listings='39'
                />
                <FeaturedCard 
                    profileImg={imgFea2}
                    name='Sargam S. Singh'
                    location='Montreal, USA'
                    listings='45'
                />
            </div>
        </section>
    )
}

export default Featured