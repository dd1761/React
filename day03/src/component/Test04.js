import React, { useState } from 'react';
import Animal from './Animal';

const Test04 = () => {
    const [name, setName] = useState('호랑이');
    //상태값이 있는 곳에 함수도 같이 있어야 한다.
    const onInputName = (e) => {
        const { value } = e.target
        setName(value)
    }
    
    return (
        <div>
              <Animal name={ name } onInputName={ onInputName }/>
        </div>
    );
};

export default Test04;