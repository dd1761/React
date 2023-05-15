import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const MemberDetail = () => {
    const { memberId } = useParams()
    const [member, setMember] = useState({});
    const { name, email, phone, website } = member;

    useEffect(() => {
        axios
            .get(`https://jsonplaceholder.typicode.com/users/${memberId}`)
            .then(res => setMember(res.data));
    }, []);

    const css = {
        border: '1px solid cyan', margin: 20, padding: 20
    }
    return (
        <div style={css}>
            <h2>MemberDetail Page : {memberId}</h2>
            <h4>이름 :  {name}</h4>
            <ul>
                <li>이메일 : {email}</li>
                <li>전화번호 : {phone}</li>
                <li>웹사이트 : {website}</li>
            </ul>
        </div>
    );
};

export default MemberDetail;