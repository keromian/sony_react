import React from 'react';
import './scss/section6.scss';

export default function Section6Component(props) {
    return (
        <section id='introSection6'>
            <div className="container">
                <div className="gap">
                    <div className="title blind">도움</div>
                    <div className="content">
                        <div className="left-box">
                            <h2>무엇을<br />도와드릴까요?</h2>
                        </div>
                        <div className="right-box">
                            <ul>
                                <li>
                                    <a href="!#">
                                        <figure>
                                            <img src="./img/intro/ic_main_help1.ccecec9a.svg" alt="" />
                                        </figure>
                                        <h4>FAQ & 공지사항</h4>
                                    </a>
                                </li>
                                <li>
                                    <a href="!#">
                                        <figure>
                                            <img src="./img/intro/ic_main_help2.13f77931.svg" alt="" />
                                        </figure>
                                        <h4>매장안내</h4>
                                    </a>
                                </li>
                                <li>
                                    <a href="!#">
                                        <figure>
                                            <img src="./img/intro/ic_main_help3.dae50ee5.svg" alt="" />
                                        </figure>
                                        <h4>고객센터</h4>
                                    </a>
                                </li>
                                <li>
                                    <a href="!#">
                                        <figure>
                                            <img src="./img/intro/ic_main_help4.8eb8215d.svg" alt="" />
                                        </figure>
                                        <h4>제품지원</h4>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

