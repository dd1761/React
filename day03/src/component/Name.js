import React from 'react';
import Output from './Output';

const Name = ({name, onInputName}) => {
    return (
        <div>
            <h2>이름 입력 : <input type='text' value={name} onChange={ onInputName }></input></h2>
            
        </div>
    );
};

export default Name;