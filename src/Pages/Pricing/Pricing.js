import React from 'react'
import {AiOutlineClose,AiOutlineCheck} from 'react-icons/ai';
import PricingCard from '../../Components/PricingCard/PricingCard';
import './Pricing.css'

const Pricing = () => {
    return (
        <section className='pricing'>
            <p data-aos='fade-right' data-aos-delay='200' className=' text-slate-800 text-5xl mt-12 mb-2'>Select Your Package</p>
            <p data-aos='fade-right' data-aos-delay='200' className=' text-gray-500 text-lg w-3/5 mx-auto'>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores.</p>
            <div className='lg:grid md:grid grid-cols-12 gap-6 my-16'>
                <PricingCard 
                    price='29' 
                    state='Basic' 
                    check={[0,0]}
                />
                <PricingCard 
                    price='49' 
                    state='Standard' 
                    check={[1,0]}
                />
                <PricingCard 
                    price='79' 
                    state='Platinum' 
                    check={[1,1]}
                />
            </div>
        </section>
    )
}

export default Pricing