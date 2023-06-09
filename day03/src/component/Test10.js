import React, { useRef, useState } from 'react';

const Test10 = () => {
    const seq = useRef(1);
    const nameRef = useRef();
    const [data, setData] = useState([]);
    const [form, setForm] = useState({
        name: '',
        age: ''
    });

    const { name, age } = form;

    const onInput = (e) => {
        const { name, value } = e.target

        setForm({
            ...form,
            [name]: value
        })
    }

    const onAdd = (e) => {
        e.preventDefault(); //브라우저 고유의 동작을 중단시키는 역할을 한다.
        if( !name || !age ) {
            return;
        }

        setData([
            ...data, // []배열에서 ...data는 추가, {}객체에서 ...data는 복사
            {
                seq: seq.current++, 
                name, // name: name => key와 value가 같으면 1번만 써도 된다.  
                age // age: age => key와 value가 같으면 1번만 써도 된다.
            }
        ])

        //초기화
        setForm({
            name: '',
            age: ''
        })
        
        nameRef.current.focus(); //nameRef에 포커스를 준다.

    }



    return (
        <div>
            <form onSubmit={ onAdd }>
                이름 : <input type="text" name='name' value={ name } onChange={ onInput } ref={ nameRef }/>
                <br />
                나이 : <input type="text" name='age' value={ age } onChange={ onInput } />
                <br />
                <button type='submit'>추가</button>
            </form>
            <hr />
            <ul>
                {
                    data.map(item => <li>
                       { item.seq } / { item.name } / {item.age}
                    </li>)
                }
            </ul>
        </div>
    );
};

export default Test10;