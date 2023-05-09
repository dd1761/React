import React from 'react';

const Output = (props) => {
    const {name, fruit} = props;
    return (
        <div>
            <h2>{name}님이 좋아하는 과일은 {fruit}입니다.</h2>
        </div>
    );
};

export default Output;