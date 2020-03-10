import React, { useState } from 'react';
import './ProcessBar.css'
export default function ProcessBar() {
    let coloring = {
        color: 'red',
    }
    const [count, setCount] = useState(0);
    const [color, setColor] = useState('red');
    const increaseCall =() => {
        setCount(count + 1);
    }
    const process= ()=> {
        setColor(document.getElementById('circle').style.borderTop = `15px solid ${count <= 7 ? color : 'null'}`)
    }
    const position= ()=> {
        setColor(document.getElementById('circle').style.borderRight = `15px solid ${count >= 8 && count <= 14 ? 'red' : 'null'}`)
    }
    const position1= ()=> {
        setColor(document.getElementById('circle').style.borderBottom = `15px solid ${count >= 16 && count <= 24 ? 'red': 'null'}`)
    }
    const position2= ()=> {
        setColor(document.getElementById('circle').style.borderLeft = `15px solid ${count >= 24 && count <= 28 ? 'red' : 'null'}`)
    }

    return (
        <div className="info-call">
            <h4>Call this month <strong>{Math.round((count * 100)/28)}%</strong> {(count <= 27) ? count : <p style={coloring}>You have reached your highest number of call!</p>}</h4>
            <div className='circle' id='circle'>
                <h1>{count}</h1><h2>/28</h2>
            </div>
            <button onClick={() => {
                increaseCall();
                process();
                position();
                position1();
                position2();
            } }>click</button>
        </div>
    )
}