import React, { useState } from 'react';
import styles from '../css/Todos.module.css';
import TodoForm from './TodoForm';

const Todos = () => {
    const [data, setData] = useState([]);

    const onAdd = (text) => {
        setData([
            ...data,
            {
                text: text
            }
        ]);
    }

    return (
        <div className={ styles.Todos }>
            <h1>일정관리</h1>
            <TodoForm onAdd={onAdd}/>
        </div>
    );
};

export default Todos;