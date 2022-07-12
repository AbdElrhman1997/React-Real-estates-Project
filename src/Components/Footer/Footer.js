import React from 'react'
import FooterImg from '../../Images/logo-light.png'
import './Footer.css'

const Footer = () => {
    return (
        <footer className='bg-slate-800 h-fit py-5 h-fit pt-10 w-full' data-aos='fade-top' data-aos-delay='200'>
            <div className='container mx-auto px-3'>
                <div className=' grid grid-cols-12 gap-16'>
                    <div className=' col-span-6'>
                        <img src={FooterImg} width='150' height='150' className=' col-span-3'/>
                        <p className=' text-white text-left font-bold text-2xl my-6'>Do You Need Help With Anything?</p>
                        <p className=' text-gray-400 text-left text-lg'>Receive updates, hot deals, tutorials, discounts sent straignt in your inbox every month</p>
                    </div>
                    <div className=' lg:col-span-2 md:col-span-6 col-span-12 lg:translate-x-0 md:translate-x-0 -translate-x-24 text-gray-400 grid gap-4'>
                        <p className='text-white font-bold'>LAYOUTS</p>
                        <p>Home Page</p>
                        <p>About Page</p>
                        <p>Service Page</p>
                        <p>Property Page</p>
                        <p>Contact Page</p>
                        <p>Single Blog</p>
                    </div>
                    <div className=' lg:col-span-2 md:col-span-6 col-span-12 lg:translate-x-0 md:translate-x-0 -translate-x-24 text-gray-400 grid gap-4'>
                        <p className='text-white font-bold'>ALL SECTIONS</p>
                        <p>Headers</p>
                        <p>Features</p>
                        <p>Attractive</p>
                        <p>Testimonials</p>
                        <p>Videos</p>
                        <p>Footers</p>
                    </div>
                    <div className=' lg:col-span-2 md:col-span-6 col-span-12 lg:translate-x-0 md:translate-x-0 -translate-x-24 text-gray-400 grid gap-4'>
                        <p className='text-white font-bold'>COMPANY</p>
                        <p>About</p>
                        <p>Blog</p>
                        <p>Pricing</p>
                        <p>Affiliate</p>
                        <p>Login</p>
                        <p>Changelog</p>
                    </div>
                </div>
            </div>
                <hr className='mb-4 mt-10'/>
                <p className='text-gray-500'>&copy;2022 RentUP. Designd By AbdElrhman Mohamed.</p>
        </footer>
    )
}

export default Footer