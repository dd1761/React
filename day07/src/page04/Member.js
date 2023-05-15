import React from 'react';
import { Link } from 'react-router-dom';

const Member = ({ item }) => {
    const { id, name, email } = item

    const css = {
        border: '1px solid cyan', margin: '20px', padding: 20
    }

    return (
        <div style={ css }>
            <p>id : {id}</p>
            <h4>이름 : {name}</h4>
            <h5>이메일 : {email}</h5>

            <p><Link to={`/member/${id}`}>자세히 보기</Link></p>
        </div>
    );
};

export default Member;