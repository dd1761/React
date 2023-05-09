import React from 'react';
import Test08Item from './Test08Item';

const Test08List = () => {
    return (
        <ul className='list'>
            {/* map으로 반복한다 7번 반복(사진 수)*/}
            <Test08Item />
        </ul>
    );
};

export default Test08List;