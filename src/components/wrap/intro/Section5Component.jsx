import React from 'react';
import './scss/section5.scss';

export default function Section5Component(props) {
    return (
        <section id='introSection5'>
            <div className="container">
                <div className="gap">
                    <div className="title hide">배너</div>
                    <div className="content">
                        <h2>알파 아카데미 <br />6월 수강신청</h2>
                        <a href="!#">자세히 보기 &gt;</a>
                    </div>
                </div>
            </div>
        </section>
    );
}

