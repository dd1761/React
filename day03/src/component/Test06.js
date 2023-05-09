import React, { useRef, useState } from 'react';

const Test06 = () => {
    
    const nameRef = useRef()

    const [data, setData] = useState({
        name: '',
        id: '',
        pwd: ''
    })

    //하나로 뭉쳐진 데이터를 name, id, pwd로 나눠서 사용
    const {name, id, pwd} = data

    const onInput = (e) => {
        const { name, value } = e.target // name은 아래의 input의 name, value는 입력한 값
                                        // id값으로 가지고 올 수도 있다. 그럴 때는 id, value로 사용가능
        
        setData({
            ...data, //먼저 객체를 복사하고, 원하는 것만 수정한다.
                    //복사하지 않으면 전에 있던 값이 초기화된다.
            [name]: value //배열 값으로 쥐어줌
            
        })
    }
    const onReset = () => {
        setData({
            name: '',
            id: '',
            pwd: ''
        })

        nameRef.current.focus()
    }
    return (
        <div>
            <table border='1' cellPadding='5' cellSpacing='0' >
                <tr>
                    <th width='100'>이름</th>
                    <td>
                        <input type='text' name='name' value={name} onChange={ onInput } ref={ nameRef }/>
                    </td>
                </tr>

                <tr>
                    <th width='100'>아이디</th>
                    <td>
                        <input type='text' name='id' value={id} onChange={ onInput }/>
                    </td>
                </tr>

                <tr>
                    <th width='100'>비밀번호</th>
                    <td>
                        <input type='password' name='pwd' value={pwd} onChange={ onInput }/>
                    </td>
                </tr>

                <tr>
                    <td colSpan='2' align='center'>
                        <button onClick={ onReset }>초기화</button>
                    </td>
                </tr>
            </table>
            <hr />
            <h3>이름 : {name}</h3>
            <h3>아이디 : {id}</h3>
            <h3>비밀번호 : {pwd}</h3>
        </div>
    );
};

export default Test06;