import React from 'react';
import './scss/ServiceSection1.scss';

export default function ServiceSection1({onClickMenu, data}) {
    return (
        <section id='serviceSection1'>
            <div className="container">
                <div className="gap">
                    <div className="title">
                        <h1>공지사항 & FAQ</h1>
                        <p>소니스토어에 많이 물어보시는 질문과 새로운 소식을 만나보세요.</p>
                    </div>
                    <div className="content">
                        <button onClick={()=>onClickMenu('공지사항')} className={data!=='FAQ'?'on':''}>공지사항</button>
                        <button onClick={()=>onClickMenu('FAQ')} className={data==='FAQ'?'on':''}>FAQ</button>
                    </div>
                </div>
            </div>
        </section>
    );
}

