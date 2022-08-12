import logo from './logo.svg';
import './App2.css';
import React, { useEffect, useState } from 'react';

const Timer =(props) => {
    useEffect(() => {
        const timer=setInterval(()=>{console.log('타이머가 돌아가고 있습니다.')},1000);
        return () => {
            clearInterval(timer);
            console.log('종료되었습니다.');
        }
    },[]);
    return(
        <div>
            <span>타이머가 작동되었습니다. 콘송창을 봐주세요.</span>
        </div>
    );
};  

export default App2;