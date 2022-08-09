import React, { useState } from 'react';
import {FaBars} from 'react-icons/fa';
import logoImg from '../../Images/logo-dark.png';

import './Navbar.css';

const Navbar = () => {
    const [displayNav,setDisplayNav]=useState(false);

    return (
        <header className='fixed top-0 w-full nav' data-aos='fade-bottom' data-aos-delay='500'>
            <div className='container flex mx-auto items-center grid grid-cols-12 gap-6 px-3'>
                {/*lg screens nav*/}
                <img src={logoImg} className='logo lg:col-span-3 md:col-span-3 col-span-6'/>
                <ul className='flex col-span-6 justify-around lg:flex md:flex hidden'>
                    <li ><a href='/'>Home</a></li>
                    <li ><a href='/About'>About</a></li>
                    <li ><a href='/Services'>Services</a></li>
                    <li ><a href='/Blog'>Blog</a></li>
                    <li ><a href='/Pricing'>Pricing</a></li>
                    <li ><a href='/Contact'>Contact</a></li>
                </ul>
                <div className=' col-span-3 flex gap-6 items-center'>
                    <p className=' lg:block hidden'><span className=' rounded-full bg-green-500 px-2 text-white'>2</span> My List</p>
                    <div className='bg-green-500 rounded-md p-2 w-32 btn lg:block md:block hidden'><p className=' text-white font-bold'>Sign In</p></div>
                </div>

                {/*mobile screens nav*/}
                
                <div 
                    className='bg-green-500 mx-auto p-3 rounded-md lg:hidden md:hidden block col-span-3 cursor-pointer' 
                    onClick={()=>{displayNav?setDisplayNav(false):setDisplayNav(true)}}>
                    <FaBars className='sm:text-2xl text-xl  text-white'/>
                </div>
                <ul className={`bg-green-500 text-white col-span-12 justify-around nav-list lg:hidden md:hidden flex flex-col ${displayNav?'flex':'hidden'}`}>
                    <li ><a href='/'>Home</a></li>
                    <li ><a href='/About'>About</a></li>
                    <li ><a href='/Services'>Services</a></li>
                    <li ><a href='/Blog'>Blog</a></li>
                    <li ><a href='/Pricing'>Pricing</a></li>
                    <li ><a href='/Contact'>Contact</a></li>
                </ul>
            </div>
        </header>
    )
}

export default Navbar
