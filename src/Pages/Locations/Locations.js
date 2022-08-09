import React from 'react';
import LocationsCard from '../../Components/LocationsCard/LocationsCard';
import './Locations.css'

const Locations = () => {
    return (
        <section className='location lg:grid md:grid grid-cols-12 gap-6'>
            <p data-aos='fade-right' data-aos-delay='400' className=' text-slate-800 text-4xl font-bold mt-12 mb-2 col-span-12'>Explore By Location</p>
            <p data-aos='fade-right' data-aos-delay='400' className=' text-gray-500 text-lg col-span-12 w-1/2 mx-auto'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <LocationsCard numOfBox='1'/>
            <LocationsCard numOfBox='2'/>
            <LocationsCard numOfBox='3'/>
            <LocationsCard numOfBox='4'/>
            <LocationsCard numOfBox='5'/>
            <LocationsCard numOfBox='6'/>
            
        </section>
    )
}

export default Locations