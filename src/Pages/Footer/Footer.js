import React from 'react'
import FooterImg from '../../Images/logo-light.png'
import './Footer.css'

const Footer = () => {
    return (
        <footer className='bg-slate-800 py-5 pt-10 footer'>
            <div className='px-3'>
                <div className=' col-span-8'>
                    <img src={FooterImg} className='footerImg col-span-3'/>
                    <p className=' text-white text-left font-bold text-2xl my-6'>Do You Need Help With Anything?</p>
                    <p className=' text-gray-400 text-left text-lg'>Receive updates, hot deals, tutorials, discounts sent straignt in your inbox every month</p>
                </div>
                <hr className='mb-4 mt-10'/>
                <p className='text-gray-500'>&copy;2022 RentUP. Designd By AbdElrhman Mohamed.</p>
            </div>
        </footer>
    )
}

export default Footer;

// data-aos='fade-top' data-aos-delay='200'