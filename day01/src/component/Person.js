import React from 'react';

const Person = ({ name, age }) => {
    return (
        <div>
            <h1>나의 이름은 {name}이고, 나이는 {age}살 입니다.</h1>
        </div>
    );
};

export default Person;