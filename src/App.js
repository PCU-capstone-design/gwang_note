import React from 'react'
import Id from './component/Id.js'
import Password from './component/Password.js'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './component/Header.js';

export default function App() {

    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/' element={<Id />} />
                <Route path='/Password' element={<Password />} />
            </Routes>
        </BrowserRouter>
    )
}