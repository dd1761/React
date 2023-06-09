import React from 'react';
import { useParams } from 'react-router-dom';

const Front = ({ data }) => {
    const { name } = useParams();  //주소로 들어오는 값은 param으로 받아야 한다.
    return (
        <div>
            <h1>Front Page</h1>
            <h2>{name}</h2>
            <hr />
            {
                data.filter(item => item.title === name).map((item, index) => <div key={index}>
                    <h2>{item.title} / {item.info}</h2>
                </div>)


            }
        </div>
    );
};

export default Front;

