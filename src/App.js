import React from 'react';
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Services from './Pages/Services/Services'
import Blog from './Pages/Blog/Blog'
import Pricing from './Pages/Pricing/Pricing'
import Contact from './Pages/Contact/Contact'
import Navbar from './Pages/Navbar/Navbar'
import Footer from './Pages/Footer/Footer'
import {Routes,Route} from 'react-router-dom'

import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Services' element={<Services/>}/>
        <Route path='/Blog' element={<Blog/>}/>
        <Route path='/Pricing' element={<Pricing/>}/>
        <Route path='/Contact' element={<Contact/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
