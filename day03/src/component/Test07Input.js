import React from 'react';

const Test07Input = ({data, onInput, onNext}) => {
    const {name, age, addr, phone} = data
    
    return (
        <>
            
                {/* <tr>
                    <td>이름 <input type="text" name='name' value={name} onChange={onInput}></input></td>
                </tr>
                <tr>
                    <td>나이 <input type="text" name='age' value={age} onChange={onInput}></input></td>
                </tr>
                <tr>
                    <td>주소 <input type="text" name='addr' value={addr} onChange={onInput}></input></td>
                </tr>
                <tr>
                    <td>핸드폰 <input type="text" name='phone' value={phone} onChange={onInput}></input></td>
                </tr> */}

            <p>
                <label>이름</label>
                <input type="text" name="name" value={name} onChange={onInput}/>
            </p>

            <p>
                <label>나이</label>
                <input type="text" name="age" value={age} onChange={onInput}/>
            </p>

            <p>
                <label>주소</label>
                <input type="text" name="addr" value={addr} onChange={onInput}/>
            </p>

            <p>
                <label>핸드폰</label>
                <input type="text" name="phone" value={phone} onChange={onInput}/>
            </p>
                
            <p>
                <td><button onClick={onNext}>다음</button></td>
            </p>
            
        </>
    );
};

export default Test07Input;