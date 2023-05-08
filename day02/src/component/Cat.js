import React, { useState } from 'react';
import dataList from './CatData.js';
import CatList from './CatList.js';
import '../css/style.css';
import '../css/reset.css';

const Cat = () => {
    const [data, setData] = useState(dataList)

    return (
        <>
            <section className='business'>
                <div className='inner'>
                    <h2>고양이들</h2>
                    <p>고양이들</p>
                    <CatList data={ data }/>
                </div>
            </section>   
        </>
    );
};

export default Cat;