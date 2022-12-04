import React, { useState } from 'react';

function Colors(props) {
    const [colors, setColors] = useState(['red', 'green', 'blue'])
    const handleClick = () => {
        setColors([...colors ,Math.random()])
        setColors((prev) => [...prev ,Math.random()])
    }
    return (
        <div>
            <h2>Colors</h2>
            {
                colors.map((color,i) => (
                    <div key={i}>{color}</div>
                ))
            }
            <button onClick={handleClick} >Add</button>
        </div>
    );
}

export default Colors;