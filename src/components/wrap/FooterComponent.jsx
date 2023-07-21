import React from 'react';
import $ from 'jquery';

export default function FooterComponent(props) {
    React.useEffect(()=>{
        const innerBtn = $('#footer .inner-btn');
        const inner = $('#footer .inner');

        

        $(document).on({
            click(e){
                if(!innerBtn.is(e.target) && !inner.is(e.target)){
                    inner.removeClass('on');
                }
            }
        })

        innerBtn.on({
            click(e){
                e.preventDefault();
                inner.toggleClass('on');
            }
        })

    });
    return (
        <footer id='footer'>
            <div className="container">
                <div className="gap">
                    <div className="title blind">푸터영역</div>
                    <div className="content">
                        <div className="left-box">
                            <div className="row1">
                                <ul>
                                    <li><a href="!#">이용약관</a></li>
                                    <li>|</li>
                                    <li><a href="!#" className='on'>개인정보처리방침</a></li>
                                    <li>|</li>
                                    <li><a href="!#">소비자 피해 보상보험</a></li>
                                    <li>|</li>
                                    <li><a href="!#">사이트맵</a></li>
                                </ul>
                            </div>
                            <div className="row2">
                                <p>* 본 사이트의 컨텐츠는 저작권법의 보호를 받는 바, 상업적 목적의 무단전재, 복사, 배포 등을 금합니다.</p>
                                <p>* 소비자피해보상보험 고객님은 안전거래를 위해 현금 등으로 결제 시 저희 쇼핑몰에서 가입한 구매안전서비스를 이용하실 수 있습니다.</p>
                                <ul>
                                    <li><a href="!#"><h4>서비스 가입 사실 확인</h4> &gt;</a></li>
                                    <li><a href="!#"><h4>구매상품 보험가입 확인</h4> &gt;</a></li>
                                </ul>
                            </div>
                            <div className="row3">
                                <p>사업장주소 : 서울특별시 영등포구 국제금융로 10 원아이에프씨 24F사업자 등록번호 : 106-81-23810 통신판매번호 2012-서울영등포-1038 소니코리아㈜</p>
                                <p>대표이사 : Okura Kikuo개인정보관리책임자 : Okura KikuoTEL : 소니코리아 고객센터 1588-0911E-MAIL : cshelp@sony.co.kr</p>
                                <p>&copy;Sony Korea Corporation. All rights reserved.</p>
                            </div>
                        </div>
                        <div className="right-box">
                            <div className="row1">
                                <div className="row1-title">FOLLOW US</div>
                                <ul>
                                    <li><a href="!#"><img src="./img/intro/ic_facebook.415de282.svg" alt="" /></a></li>
                                    <li><a href="!#"><img src="./img/intro/ic_instagram.12a710ab.svg" alt="" /></a></li>
                                    <li><a href="!#"><img src="./img/intro/ic_youtube.e6733965.svg" alt="" /></a></li>
                                    <li><a href="!#"><img src="./img/intro/ic_blog.75c8bb6d.svg" alt="" /></a></li>
                                </ul>
                            </div>
                            <div className="row2">
                                <div className="btn-box">
                                    <button className='inner-btn'>Sony Family<span className='arrow1'></span></button>
                                    <button>Sony Global<span className='arrow2'></span></button>
                                </div>
                                
                                <div className="inner">
                                    <div className="inner-top">
                                        <h3>Sony Family</h3>
                                        <ul>
                                            <li><a href="!#">소니코리아</a></li>
                                            <li><a href="!#">소니코리아 고객지원</a></li>
                                            <li><a href="!#">소니 알파 α</a></li>
                                            <li><a href="!#">소니 방송/업무용 솔루션</a></li>
                                            <li><a href="!#">소니 방송 업무용 솔루션 고객지원</a></li>
                                        </ul>
                                    </div>
                                    <div className="inner-bottom">
                                        <h3>Family Company</h3>
                                        <ul>
                                            <li><a href="!#">소니 인터렉티브 엔터테인먼트 코리아</a></li>
                                            <li><a href="!#">소니 뮤직 엔터테인먼트 코리아</a></li>
                                            <li><a href="!#">소니 ATV 뮤직 퍼블리싱 코리아</a></li>
                                            <li><a href="!#">소니 픽쳐스 엔터테인먼트 코리아</a></li>
                                            <li><a href="!#">소니 픽쳐스 텔레비전 코리아</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

