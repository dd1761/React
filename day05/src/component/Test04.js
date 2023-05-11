import React, { useState } from 'react';

const Test04 = () => {
    const [food, setFood] = useState()
    const onFood = (e) => {
        const { value } = e.target
        setFood(value)
    }

    const [color, setColor] = useState('')
    const onColor = (e) => {
        const { value } = e.target
        setColor(value)
    }
    return (
        <div style={{ margin: 30 }}>
            <h2>당신이 좋아하는 색은?</h2>
            <div>
                <input type='text' value={ color } onChange={ onColor } />
                <p>선택 : hotpink, magenta, skyblue, tomato</p>
            </div>
            <hr />
            <div>
                <p>
                    <input type='radio' name='food' value='햄버거' onChange={ onFood } />
                    <label>햄버거</label>
                </p>
                <p>
                    <input type='radio' name='food' value='삼겹살' onChange={ onFood } />
                    <label>삼겹살</label>
                </p>
                <p>
                    <input type='radio' name='food' value='치킨' onChange={ onFood } />
                    <label>치킨</label>
                </p>
                <p>
                    <input type='radio' name='food' value='짜장면' onChange={ onFood } />
                    <label>짜장면</label>
                </p>
            </div>
            <hr />
        </div>
    );
};

export default Test04;