import React from 'react';
import Services from '../Services/Services';
import Blog from '../Blog/Blog';
import Awards from '../Awards/Awards'; 
import Pricing from '../Pricing/Pricing';
import Featured from '../Featured/Featured';
import Locations from '../Locations/Locations';
import './Home.css';

const Home = () => {
    return (
        <section className='home'>
            <section className='homeSec relative flex flex-col justify-center' data-aos='fade-top' data-aos-delay='700'>
                <p className=' font-bold text-6xl text-white lg:w-1/2 w-4/5 mx-auto mb-6'>Search Your Next Home</p>
                <p className=' text-gray-300 w-3/4 mx-auto'>Find new & featured property located in your local city.</p>
            </section>
            <Services/>
            <Blog/>
            <Awards/>
            <Locations/>
            <Featured/>
            <Pricing/>
        </section>
        
    )
}

export default Home