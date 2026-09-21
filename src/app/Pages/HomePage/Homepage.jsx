import React from 'react'
import Navbar from '../../Components/Navbar/Navbar';
import Herosection from '../../Components/Herosection/Herosection';
import Featured from '../../Components/Featured/Featured';
import Searchfilter from '../../Components/SearchFilter/Searchfilter';
import Newarrivals from '../../Components/NewArrivals/Newarrivals';
import Plantstand from '../../Components/Plantstands/Plantstand';
import Services from '../../Components/Services/Services';

import "./HomePage.css"
import Location from '../../Components/Location/Location';

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
        <div className="searchfilter-section">
            <Searchfilter />
        </div>
        <div className="newArrivals-section">
            <Newarrivals />
        </div>

        <div className="plantStands-section">
            <Plantstand />
        </div>

        <div className="servies-part">
            <Services />
        </div>

        <div className="location-part">
            <Location />
        </div>
    </section>
  )
}

export default Homepage;

