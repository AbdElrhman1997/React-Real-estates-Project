import React from 'react'
import img1  from '../../Images/Services1.png'
import img2  from '../../Images/Services2.png'
import img3  from '../../Images/Services3.png'
import img4  from '../../Images/Services4.png'
import img5  from '../../Images/Services5.png'

import './Services.css'

const Services = () => {
    return (
        <section className='services'>
            <div className='container mx-auto px-4 grid grid-cols-10 gap-8 mb-20'>
                <p className=' text-slate-800 text-5xl mt-12 mb-2 col-span-10' data-aos='fade-right'>Featured Property Types</p>
                <p className=' text-gray-500 text-lg col-span-10' data-aos='fade-right'>Find All Type of Property.</p>
                <div className=' lg:col-span-2 md:col-span-5 sm:col-span-5 col-span-10 shadow-lg px-4 py-6' data-aos='fade-top'>
                    <img src={img1} width='70' height='70' className='mx-auto'/>
                    <p className='mt-2 text-slate-800'>Family House</p>
                    <p className='mb-6 text-gray-500 text-sm'>122 Property</p>
                </div>
                <div className=' lg:col-span-2 md:col-span-5 sm:col-span-5 col-span-10 shadow-lg px-4 py-6' data-aos='fade-top'>
                    <img src={img2} width='70' height='70' className='mx-auto'/>
                    <p className='mt-2 text-slate-800'>House & Villa</p>
                    <p className='mb-6 text-gray-500 text-sm'>155 Property</p>
                </div>
                <div className=' lg:col-span-2 md:col-span-5 sm:col-span-5 col-span-10 shadow-lg px-4 py-6' data-aos='fade-top'> 
                    <img src={img3} width='70' height='70' className='mx-auto'/>
                    <p className='mt-2 text-slate-800'>Apartment</p>
                    <p className='mb-6 text-gray-500 text-sm'>300 Property</p>
                </div>
                <div className=' lg:col-span-2 md:col-span-5 sm:col-span-5 col-span-10 shadow-lg px-4 py-6' data-aos='fade-top'>
                    <img src={img4} width='70' height='70' className='mx-auto'/>
                    <p className='mt-2 text-slate-800'>Office & Studio</p>
                    <p className='mb-6 text-gray-500 text-sm'>80 Property</p>
                </div>
                <div className=' lg:col-span-2 md:col-span-5 sm:col-span-5 col-span-10 shadow-lg px-4 py-6' data-aos='fade-top'>
                    <img src={img5} width='70' height='70' className='mx-auto'/>
                    <p className='mt-2 text-slate-800'>Villa & Condo</p>
                    <p className='mb-6 text-gray-500 text-sm'>80 Property</p>
                </div>
            </div>
        </section>
    )
}

export default Services