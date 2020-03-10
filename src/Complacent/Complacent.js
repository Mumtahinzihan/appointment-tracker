import React, { useState } from 'react';
import './Complacent.css';

export default function Complacent() {
    const [width, setWidth] = useState(0);
    let number = Math.ceil(Math.random() * 250);
    const blue2 = () => {
        setWidth(document.getElementById('colour-a').style.width = `${number}px`);
    }
    const green2 = () => {
        setWidth(document.getElementById('colour-b').style.width = `${number}px`);
    }
    const lime2 = () => {
        setWidth(document.getElementById('colour-c').style.width = `${number}px`);
    }
    const orange2 = () => {
        setWidth(document.getElementById('colour-d').style.width = `${number}px`);
    }
    const purple2 = () => {
        setWidth(document.getElementById('colour-e').style.width = `${number}px`);
    }
    const other2 = () => {
        setWidth(document.getElementById('colour-f').style.width = `${number}px`);
    }

    return (
        <div className='col'>
            <h4>
                Complacent {parseInt(width) > 100 && parseInt(width) < 150 ? parseInt(width) - 100 :
                    parseInt(width) >= 150 && parseInt(width) < 200 ? parseInt(width) - 120 :
                        parseInt(width) >= 200 && parseInt(width) <= 250 ? parseInt(width) - 180 :
                            parseInt(width)}%
            </h4>

            <span className='color-layout' id='layout1'>
                <div id='colour-b' onMouseOver={() => green2()}>-</div>
                <div id='colour-c' onMouseOver={() => lime2()}>-</div>
                <div id='colour-d' onMouseOver={() => orange2()}>-</div>
                <div id='colour-a' onMouseOver={() => blue2()}>-</div>
                <div id='colour-e' onMouseOver={() => purple2()}>-</div>
                <div id='colour-f' onMouseOver={() => other2()}>-</div>
            </span>
        </div>
    )
}