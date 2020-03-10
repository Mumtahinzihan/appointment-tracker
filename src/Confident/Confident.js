import React, { useState } from 'react';
import './Confident.css';
export default function Confident() {
    const [width, setWidth] = useState(0);
    let number = Math.ceil(Math.random() * 250);
    const blue = () => {
        setWidth(document.getElementById('colour-g').style.width = `${number}px`);
    }
    const green = () => {
        setWidth(document.getElementById('colour-h').style.width = `${number}px`);
    }
    const lime = () => {
        setWidth(document.getElementById('colour-i').style.width = `${number}px`);
    }
    const orange = () => {
        setWidth(document.getElementById('colour-j').style.width = `${number}px`);
    }
    const purple = () => {
        setWidth(document.getElementById('colour-k').style.width = `${number}px`);
    }
    const other = () => {
        setWidth(document.getElementById('colour-l').style.width = `${number}px`);
    }

    return (
            <div className='col'>
                <p>Confident {parseInt(width) > 100 && parseInt(width) < 150 ? parseInt(width) - 100 :
                    parseInt(width) >= 150 && parseInt(width) < 200 ? parseInt(width) - 120 :
                        parseInt(width) >= 200 && parseInt(width) <= 250 ? parseInt(width) - 180 :
                            parseInt(width)}%
                </p>
                <span className='color-layout' id='layout'>
                    <div id='colour-h' onMouseOver={() => green()}>-</div>
                    <div id='colour-i' onMouseOver={() => lime()}>-</div>
                    <div id='colour-j' onMouseOver={() => orange()}>-</div>
                    <div id='colour-g' onMouseOver={() => blue()}>-</div>
                    <div id='colour-k' onMouseOver={() => purple()}>-</div>
                    <div id='colour-l' onMouseOver={() => other()}>-</div>
                </span>
            </div>
    )
}