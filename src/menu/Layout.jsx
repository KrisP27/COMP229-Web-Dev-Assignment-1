//Layout.jsx
//Kristopher Prince 301462555
//September 19th 2025

import React from 'react';
import { Link } from 'react-router-dom';


//Navigation menu at the top of the screen
export default function Layout() {
    return (
        <div>
            <h1><img src="/assets/logo.png" alt="Logo" className="logo"/> My Portfolio</h1>
            <nav>
                <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/projects">Projects</Link> | <Link to="/services">Services</Link> | <Link to="/contact">Contact</Link>
            </nav>
                <br/>
            <hr />
        </div>
    );
}