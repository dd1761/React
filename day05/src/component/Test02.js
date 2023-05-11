import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Test02 = () => {
    const [id, setId] = useState('1');
    const [dto, setDto] = useState({});
    const [search, setSearch] = useState('1');

    const onSearch = (id) => {
        setSearch(id)
    }

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`) //Spring Boot에서의 ajax안에 url과 똑같은 역할을 한다.
        .then(res => setDto(res.data)) //외부 데이터를 res로 받고 res에 존재하는 data를 setData에 넣어준다.
    // }, [id]) //[id]는 id값이 바뀔 때 마다 함수를 다시 실행해라
    //}, [ search ]) //버튼을 눌렀을 때 마다 함수를 다시 실행해라
    }, [ search, id ]) // 버튼이 눌렸을 때와 id값이 바뀔 때 함수를 다시 실행(별 의미 없음)

    return (
        <div>
            <input type='text' value={ id } onChange={ e => setId(e.target.value) }/>
            <button onClick={ () => onSearch(id) }>검색</button>
            <hr />
            <h3>{dto.id} / {dto.title}</h3>
        </div>
    );
};

export default Test02;