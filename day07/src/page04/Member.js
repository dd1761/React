import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import MemberDetail from './MemberDetail';

const Member = ({ item }) => {
    const { id, name, email } = item

    const navigate = useNavigate()


    const css = {
        border: '1px solid cyan', margin: '20px', padding: 20
    }

    const onGO = () => {
        navigate(`/member/${id}`)
    }

    return (
        <div style={ css }>
            <p>id : {id}</p>
            <h4>이름 : {name}</h4>
            <h5>이메일 : {email}</h5>

            <p><Link to={`/member/${id}`}>자세히 보기</Link></p>
            <button onClick={ onGO }>상세보기</button>
        </div>
    );
};

export default Member;