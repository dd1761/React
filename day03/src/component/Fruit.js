import React from 'react';
import Output from './Output';

const Fruit = ({fruit, onInputFruit}) => {
    return (
        <div>
            <h2>과일명 입력 : <input type="text" value={fruit} onChange={onInputFruit}></input></h2>
            
        </div>
    );
};

export default Fruit;