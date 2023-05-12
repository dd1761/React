import React, { useReducer } from 'react';

const initialState = 'black'

const reducer = (state, action) => {
    switch(action.type) {
        case 'RED' :
            return 'red';
        case 'GREEN':
            return 'green';
        case 'BLUE':
            return 'blue';
        case 'PINK':
            return 'pink';
        case 'RESET':
            return 'reset';
        default:
            return state;
    }
}

const Test02 = () => {
    const [color, dispatch] = useReducer(reducer, initialState)
    return (
        <div>
            <h1 style={{ color: color }}>color : { color }</h1>
            <p>
                <button>빨강</button>
                <button>초록</button>
                <button>파랑</button>
                <button>분홍</button>
                <button>초기화</button>
            </p>
        </div>
    );
};

export default Test02;