import React from 'react'
import ServicesCard from '../../Components/ServicesCard/ServicesCard';
import img1  from '../../Images/Services1.png'
import img2  from '../../Images/Services2.png'
import img3  from '../../Images/Services3.png'
import img4  from '../../Images/Services4.png'
import img5  from '../../Images/Services5.png'

import './Services.css'

const Services = () => {
    return (
        <section className='services'>
            <div className='px-4 py-10 lg:grid md:grid grid-cols-10 gap-8 mb-20'>
                <p className=' text-slate-800 text-5xl mb-2 col-span-10' data-aos='fade-right'>Featured Property Types</p>
                <p className=' text-gray-500 text-lg col-span-10' data-aos='fade-right'>Find All Type of Property.</p>
                <ServicesCard 
                    ProfileImg={img1} 
                    Property='122' 
                    type='Family House'
                />
                <ServicesCard 
                    ProfileImg={img2} 
                    Property='155' 
                    type='House & Villa'
                />
                <ServicesCard 
                    ProfileImg={img3} 
                    Property='300' 
                    type='Apartment'
                />
                <ServicesCard 
                    ProfileImg={img4} 
                    Property='80' 
                    type='Office & Studio'
                />
                <ServicesCard 
                    ProfileImg={img5} 
                    Property='100' 
                    type='Villa & Condo'
                />                
            </div>
        </section>
    )
}

export default Services