import React, { useState } from 'react';
import Test07Input from './Test07Input';
import Test07Print from './Test07Print';
import Test07Output from './Test07Output';
import '../css/Test07.css';

const Test07Main = () => {
    
    const [data, setData] = useState({
        name: '',
        age: '',
        addr: '',
        phone: ''
    })

    const {name, age, addr, phone} = data

    const [count, setCount] = useState(1)

    const onInput = (e) => {
        const { name, value } = e.target // name은 아래의 input의 name, value는 입력한 값
                                        // id값으로 가지고 올 수도 있다. 그럴 때는 id, value로 사용가능
        
        setData({
            ...data, //먼저 객체를 복사하고, 원하는 것만 수정한다.
                    //복사하지 않으면 전에 있던 값이 초기화된다.
            [name]: value //배열 값으로 쥐어줌
            
        })
    }

    const onPrev = () => {
        setCount(count - 1)
    }

    const onNext = () => {
        setCount(count + 1)
   }
   

    return (
        <div className='wrap'>
            {
                count === 1 && <Test07Input data={data} onInput={onInput} onNext={ onNext } />
            }
            {
                count === 2 && <Test07Print {...data} onNext={onNext} onPrev={onPrev} />
            }
            {
                count === 3 && <Test07Output name={name} onPrev={onPrev}/>
            }
        </div>
    );
};

export default Test07Main;