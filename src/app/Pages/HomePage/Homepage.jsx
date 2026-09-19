import React from 'react'
import Navbar from '../../Components/Navbar/Navbar';
import Herosection from '../../Components/Herosection/Herosection';

function Homepage() {
  return (
    <section className="home">
        <div className="nav">
            <Navbar />
        </div>
        <div className="hero-section">
            <Herosection />
        </div>
    </section>
  )
}

export default Homepage;
