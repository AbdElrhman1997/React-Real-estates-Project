import React from 'react'
import './Contact.css'

const Contact = () => {
    return (
        <section className='contact bg-slate-200'>
            <div className='container mx-auto bg-white rounded-md p-10'>
                <p data-aos='fade-right' data-aos-delay='600' className='text-left font-bold'>Fillup The Form</p>
                <div className='lg:flex md:flex block '>
                    <input data-aos='fade-right' data-aos-delay='700' type='text' placeholder='Name' className=' lg:w-1/2 w-full mr-10'/>
                    <input data-aos='fade-left' data-aos-delay='800' type='text' placeholder='Email' className='lg:w-1/2 w-full'/>
                </div>
                <input data-aos='fade-right' data-aos-delay='900' type='text' placeholder='Subject' className='w-full'/>
                <textarea data-aos='fade-bottom' data-aos-delay='1000' rows='5' cols='120'/>
                <div data-aos='fade-bottom' className='bg-green-500 mx-auto p-3 rounded-md cursor-pointer text-white w-fit'>Submit Request</div>
            </div>
        </section>
    )
}

export default Contact