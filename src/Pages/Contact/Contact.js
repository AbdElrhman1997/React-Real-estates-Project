import React from 'react'
import './Contact.css'

const Contact = () => {
    return (
        <section className='contact bg-slate-200'>
            <div className='bg-white rounded-md p-10'>
                <p data-aos='fade-right' className='text-left font-bold'>Fillup The Form</p>
                <div className='lg:flex md:flex block '>
                    <input data-aos='fade-right' type='text' placeholder='Name' className=' lg:w-1/2 w-full mr-10'/>
                    <input data-aos='fade-left' type='text' placeholder='Email' className='lg:w-1/2 w-full'/>
                </div>
                <input data-aos='fade-right' type='text' placeholder='Subject' className='w-full'/>
                <textarea data-aos='fade-bottom' rows='5' cols='120'/>
                <input type='submit' value='Submit Request' className='bg-green-500 mx-auto p-3 rounded-md cursor-pointer text-white w-fit' onClick={()=>{window.location.reload()}}/>
            </div>
        </section>
    )
}

export default Contact