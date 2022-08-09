import React from 'react';
import './ServicesCard.css';

const Services = ({ProfileImg,Property,type}) => {
    return (
        <>
            <div className='servicesCard lg:col-span-2 md:col-span-5 shadow-lg px-4 py-6' data-aos='fade-top'>
                <img src={ProfileImg} className='servicesImg mx-auto'/>
                <p className='mt-2 text-slate-800'>{type}</p>
                <p className='text-gray-500 text-sm'>{Property}Property</p>
            </div>
        </>
    )
}

export default Services;