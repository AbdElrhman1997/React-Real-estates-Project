import { useState } from 'react'
import imgBlog1 from '../../Images/p-1.png'
import imgBlog2 from '../../Images/p-2.png'
import imgBlog3 from '../../Images/p-4.png'
import imgBlog4 from '../../Images/p-5.png'
import imgBlog5 from '../../Images/p-6.png'
import imgBlog6 from '../../Images/p-7.png'
import {BsHeartFill} from 'react-icons/bs';
import {MdLocationOn} from 'react-icons/md';

import './Blog.css'
import BlogCard from '../../Components/BlogCard/BlogCard'

const Blog = () => {
    
    const handleClick=(e)=>{e.target.classList.toggle('love')};
    

    return (
        <section className='blog'>
            <p className=' text-slate-800 text-5xl mt-12 mb-2' data-aos='fade-right'>Recent Property Listed</p>
            <p className=' text-gray-500 text-lg w-3/4 mx-auto' data-aos='fade-right'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
            <div className='lg:grid md:grid grid-cols-12 gap-5 my-10'>
                <BlogCard 
                    bgImg={imgBlog1} 
                    price='3700' 
                    state='For Rent'
                />
                <BlogCard 
                    bgImg={imgBlog2} 
                    price='9,750' 
                    state='For Sale'
                />
                <BlogCard 
                    bgImg={imgBlog3} 
                    price='5,860' 
                    state='For Rent'
                />
                <BlogCard 
                    bgImg={imgBlog4} 
                    price='7,540' 
                    state='For Sale'
                />
                <BlogCard 
                    bgImg={imgBlog5} 
                    price='2,742' 
                    state='For Rent'
                />
                <BlogCard 
                    bgImg={imgBlog6} 
                    price='4,850' 
                    state='For Sale'
                />
            </div>
        </section>
    )
}

export default Blog