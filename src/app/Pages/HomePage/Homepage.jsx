import React from 'react'
import Navbar from '../../Components/Navbar/Navbar';
import Herosection from '../../Components/Herosection/Herosection';
import Featured from '../../Components/Featured/Featured';

function Homepage() {
  return (
    <section className="home">
        <div className="nav">
            <Navbar />
        </div>
        <div className="hero-section">
            <Herosection />
        </div>
        <div className="featured-section">
            <Featured /> 
        </div>
    </section>
  )
}

export default Homepage;
