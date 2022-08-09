import React from 'react';
import './LocationsCard.css';

const LocationsCard = ({numOfBox}) => {

    return (
        <>
            <div data-aos='fade-right' data-aos-delay='500' className={`box${numOfBox} lg:col-span-4 md:col-span-6`}>
                <div className='bg-gray-700 opacity-50 w-full h-full absolute -z-0 rounded-md'></div>
                <p className='text-white text-xl z-0'>New Orleans, Louisiana</p>
                <p className='text-gray-300 z-0'><span>12 Villas </span><span> 07 Offices</span><span> 10 Apartments</span></p>
            </div>
        </>
    )
}

export default LocationsCard;