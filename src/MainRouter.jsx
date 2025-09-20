//MainRouter.jsx
//Kristopher Prince 301462555
//September 19th 2025

import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './menu/Home.jsx'
import About from './menu/About.jsx'
import Projects from './menu/Projects.jsx'
import Services from './menu/Services.jsx'
import Contact from './menu/Contact.jsx'
import Layout from './menu/Layout.jsx'


//Returns layout and routes the paths to each menu
const MainRouter = () => {
    return (<div>
        <Layout/>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
    </div>
    )
}

export default MainRouter; 