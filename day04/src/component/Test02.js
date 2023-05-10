import React, { useState } from 'react';
import Test02Sub from './Test02Sub';

const Test02 = () => {
    const [isShow, setIsShow] = useState(false);

    const onToggle = () => {
        setIsShow(!isShow);
    }
    return (
        <div>
            {/* 누르면 보이기 글자만 아니면 숨기기 글자만 */}
            <button onClick={ onToggle }>{ isShow ? '숨기기' : '보이기' }</button>
            <hr />
            {
                isShow && <Test02Sub />
            }
        </div>
    );
};

export default Test02;