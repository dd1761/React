import React, { useRef, useState } from 'react';
import styles from '../css/TodoForm.module.css';

const TodoForm = ({ onAdd }) => {

    const textRef = useRef()

    const [text, setText] = useState('');

    const onInput = (e) => {
        setText(e.target.value);
        // const onInput = (e) => {
        //     const { value } = e.target
        //     setText(value)
    }

    const onSubmit = (e) => {
        e.preventDefault();

        if(!text) return
        
        onAdd(text);

        setText('');

        textRef.current.focus()
    }

    

    return (
        <div>
            <form className={ styles.TodoForm } onSubmit={ onSubmit } >
                <input type='text' value={ text } placeholder='해야 할 일을 입력하시오' onInput={ onInput } ref={textRef}/>
                <button type='submit' onSubmit={ onSubmit } >추가</button>
            </form>
        </div>
    );
};

export default TodoForm;