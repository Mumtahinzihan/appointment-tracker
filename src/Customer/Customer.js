import React, { useState } from 'react';
import Complacent from '../Complacent/Complacent';
import Confident from '../Confident/Confident';
import './Customer.css';
export default function Customer() {
    const [width, setWidth] = useState(0);
    let number = Math.ceil(Math.random() * 250);
    const blue = () => {
        setWidth(document.getElementById('colour').style.width = `${number}px`);
    }
    const green = () => {
        setWidth(document.getElementById('colour1').style.width = `${number}px`);
    }
    const lime = () => {
        setWidth(document.getElementById('colour2').style.width = `${number}px`);
    }
    const orange = () => {
        setWidth(document.getElementById('colour3').style.width = `${number}px`);
    }
    const purple = () => {
        setWidth(document.getElementById('colour4').style.width = `${number}px`);
    }
    const other = () => {
        setWidth(document.getElementById('colour5').style.width = `${number}px`);
    }

    return (
        <div className='customer-type'>
            <h2>Key message breakdown by customer type (vs target)</h2>
            <div className='col'>
                <p>Cautious {parseInt(width) > 100 && parseInt(width) < 150 ? parseInt(width) - 100 :
                    parseInt(width) >= 150 && parseInt(width) < 200 ? parseInt(width) - 120 :
                        parseInt(width) >= 200 && parseInt(width) <= 250 ? parseInt(width) - 180 :
                            parseInt(width)}%
                </p>
                <span className='color-layout' id='layout'>
                    <div id='colour1' onMouseOver={() => green()}>-</div>
                    <div id='colour2' onMouseOver={() => lime()}>-</div>
                    <div id='colour3' onMouseOver={() => orange()}>-</div>
                    <div id='colour' onMouseOver={() => blue()}>-</div>
                    <div id='colour4' onMouseOver={() => purple()}>-</div>
                    <div id='colour5' onMouseOver={() => other()}>-</div>
                </span>
            </div>
            <Complacent />
            <Confident />
        </div>
    )
}