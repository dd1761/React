import React from 'react';

const Test04Sub = ({ color, food }) => {
    return (
        <div>
            <h3>선택한 색 : { color }</h3>
            <h4>당신은 { colorInfo }을 좋아하시는 군요!</h4>

            <h3>선택한 음식 : { food }</h3>
            <h4>당신은 { foodInfo }을 좋아하시는 군요!</h4>
        </div>
    );
};

export default Test04Sub;