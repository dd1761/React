import React from 'react';

const Display = ({name}) => { //{name} 대신 props라고 사용해도 된다. {props.name이라고 사용하면 가능}
    return (
        <div>
            <h2>Display 컴포넌트</h2>
            <h1>내가 좋아하는 동물은 {name} 입니다.</h1>
        </div>
    );
};

export default Display;