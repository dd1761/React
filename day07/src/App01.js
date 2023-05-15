import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Home from './page01/Home';
import About from './page01/About';
import Ceo from './page01/Ceo';
import Sub01 from './page01/Sub01';
import NotFiles from './page01/NotFiles';

const App01 = () => { //이제부터 App01.js를 메인화면으로 사용
    return (
        <BrowserRouter>
            <>
                <nav>
                    <ul>
                        {/* <a href='' />대신 <Link /> 를 사용.
                        <a href="" /> 를 사용하면 로딩하느라 빙글 빙글 돈다. */}
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/about'>About</Link></li>
                        <li><Link to='/ceo'>Ceo</Link></li>
                        <li><Link to='/sub01'>Sub01</Link></li>
                    </ul>
                </nav>

                {/* 화면에 보이는 영역 */}
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/ceo' element={<Ceo />} />
                    <Route path='/sub01' element={<Sub01 />} />
                    <Route path='*' element={<NotFiles />} />
                </Routes>
            </>
        </BrowserRouter>
    );
};

export default App01;