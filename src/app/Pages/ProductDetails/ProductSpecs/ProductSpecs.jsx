import { DropletsIcon, ScalingIcon, ShieldCheckIcon, SunDimIcon } from 'lucide-react'
import React from 'react'
import "./ProductSpecs.css"

function ProductSpecs() {
  return (
    <div className="pd-specs">
        <div className="specs-container">
            <div className="spec-logo">
                <SunDimIcon />
            </div>
            <p className="logo-name">Light</p>
            <h3 className="spec-des">Bright indirect</h3>
        </div>
        
        <div className="specs-container">
            <div className="spec-logo">
                <DropletsIcon />
                
            </div>
            <p className="logo-name">Water</p>
            <h3 className="spec-des">Every 7-10 days</h3>
        </div>

        <div className="specs-container">
            <div className="spec-logo">
                <ScalingIcon />
            </div>
            <p className="logo-name">Height</p>
            <h3 className="spec-des">Bright indirect</h3>
        </div>

        <div className="specs-container">
            <div className="spec-logo">
                <ShieldCheckIcon />
            </div>
            <p className="logo-name">Protact</p>
            <h3 className="spec-des">Bright indirect</h3>
        </div>

    </div>
  )
}

export default ProductSpecs
