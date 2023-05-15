import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Home from './page01/Home';
import About from './page01/About';
import Ceo from './page01/Ceo';
import Sub01 from './page01/Sub01';

const App01 = () => { //이제부터 App01.js를 메인화면으로 사용
    return (
        <BrowserRouter>
            <>
                <nav>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/about'>About</Link></li>
                    <li><Link to='/ceo'>Ceo</Link></li>
                    <li><Link to='/sub01'>Sub01</Link></li>
                </nav>

                {/* 화면에 보이는 영역 */}
                <Routes>
                    <Route path='/' element={ <Home /> }/>
                    <Route path='/about' element={ <About />} />
                    <Route path='/ceo' element={ <Ceo />}/>
                    <Route path='/sub01' element={ <Sub01 />}/>
                </Routes>
            </>
        </BrowserRouter>
    );
};

export default App01;