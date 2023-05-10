import React, { useState } from 'react';

const Test02Sub = () => {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);
    return (
        <div>
            <h2>마우스 좌표</h2>
            <div style={{ border: '1px solid #000', width: 400, padding: 30, margin: 15}}>
                <h3>X축 : { x }, Y축 { y }</h3>
            </div>
        </div>
    );
};

export default Test02Sub;