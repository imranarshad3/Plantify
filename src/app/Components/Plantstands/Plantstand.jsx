import React from 'react';
import stand1 from "./plantstands/stand1.png";
import stand2 from "./plantstands/stand2.png";
import stand3 from "./plantstands/stand3.png";
import "./Plantstand.css";

const Stands = [
    { id: 1, image: stand1, title: "Macramé Plant Hanger" },
    { id: 2, image: stand2, title: "Terracotta Pot Hanger" },
    { id: 3, image: stand3, title: "S-Hanger Hooks" },
];

function Plantstand() {
  const handleStandClick = (id) => {
    console.log(`Navigating to plant stand details for ID: ${id}`);
  };

  return (
    <section className="plantstand-section">
        <div className="main">
            <div className="plantstand-header">
                <h2>Plant stands</h2>
            </div>
            <div className="wraper">

            
            <div className="stands-content-wrapper">
                <div className="stands-grid">
                    {
                        Stands.map((item) => (
                            <button 
                                type="button"
                                className="stand-card-btn" 
                                key={item.id}
                                onClick={() => handleStandClick(item.id)}
                            >
                                <img src={item.image} alt={item.title} />
                                <div className="stand-overlay">
                                    <h3>{item.title}</h3>
                                    <span className="more-info">more information &rarr;</span>
                                </div>
                            </button>
                        ))
                    }
                </div>

            </div>
                <a href="#more" className="side-more-link">
                    more &rarr;
                </a>
            </div>
        </div>
    </section>
  );
}

export default Plantstand;
