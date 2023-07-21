import React from 'react';
import './scss/section3.scss';

export default function Section3Component(props) {
    return (
        <section id='introSection3'>
            <div className="container">
                <div className="gap">
                    <div className="title"><h2>EVENT</h2></div>
                    <div className="content">
                        <div className="row1">
                            <a href="!#">                                
                                <div className="text-box1">
                                    <h3>소니 X 잔망루피 <br />몰입의 즐거움 WH-1000XM5</h3>
                                    <p>제품 구매 후 정품등록하면 특별한 사은품을 드립니다.</p>
                                </div>
                                <div className="img-box1">
                                    <img src="./img/intro/104580435_1.png" alt="" />
                                </div>
                            </a>
                        </div>
                        <div className="row2">
                            <ul>
                                <li>
                                    <a href="!#">
                                        <div className="img-box2">
                                            <img src="./img/intro/Main-Event-Banner-S1.jpg" alt="" />
                                        </div>
                                        <div className="text-box2">
                                            <h3>여름에도 시원한 <br />링크버즈 이벤트</h3>
                                            <p>여름 소리와 함께 책을 들어요.</p>
                                        </div>                                        
                                    </a>
                                </li>
                                <li>
                                    <a href="!#">
                                        <div className="img-box2">
                                            <img src="./img/intro/Main-Event-Banner-S2.jpg" alt="" />
                                        </div>
                                        <div className="text-box2">
                                            <h3>소니스토어와 함께하는 6월</h3>
                                            <p>소니스토어 압구정에 방문하시는 분들께 광동제약 비타 500 잔망루피 콜라겐을 드립니다. </p>
                                        </div>                                        
                                    </a>
                                </li>
                                <li>
                                    <a href="!#">
                                        <div className="img-box2">
                                            <img src="./img/intro/Main-Event-Banner-S3.jpg" alt="" />
                                        </div>
                                        <div className="text-box2">
                                            <h3>WH-1000X 무선 헤드폰 <br />특별 선물 이벤트</h3>
                                            <p>잔망 루피 피규어 받는 법, 소니 스토어에서 제품 구매하면 끝!</p>
                                        </div>                                        
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

