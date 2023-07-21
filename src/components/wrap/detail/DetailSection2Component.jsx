import React from 'react';

export default function DetailSection2Component(props) {
    const [nav, setNav] = React.useState('nav1')

    const onClickNav=(e, value)=>{
        e.preventDefault();
        setNav(value);
    }

    return (
        <section id='detailSection2'>
            <div className="container">
                <div className="gap">
                    <div className="title">
                        <ul className='navi'>
                            <li>
                                <a onClick={(e)=>onClickNav(e, 'nav1')} className={nav==='nav1'?' on':''} href="!#">제품개요</a>
                            </li>
                            <li>
                                <a onClick={(e)=>onClickNav(e, 'nav2')} className={nav==='nav2'?' on':''} href="!#">배송/환불규정</a>
                            </li>
                        </ul>
                    </div>
                    <div className="content">
                        {   nav==='nav1' &&
                            <div  className='nav1'>
                                <div className="row1">
                                    <img src="./img/detail/pc_benefit.jpg" alt="" />
                                </div>
                                <div className="row2">
                                    <iframe width="960" height="540" src="https://www.youtube.com/embed/Deoh0Kw8rY0" title="올인원 브이로그 카메라, ZV-1M2" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                    <img src="./img/detail/230609_ZV-1M2_최종수정-2단계-작업_01.jpg" alt="" />                                    
                                    <img src="./img/detail/230609_ZV-1M2_최종수정-2단계-작업_08.jpg" alt="" />
                                    <img src="./img/detail/230609_ZV-1M2_최종수정-2단계-작업_09.gif" alt="" />
                                    <img src="./img/detail/230609_ZV-1M2_최종수정-2단계-작업_10.gif" alt="" />
                                    <img src="./img/detail/230609_ZV-1M2_최종수정-2단계-작업_12.jpg" alt="" />
                                    <img src="./img/detail/230609_ZV-1M2_최종수정-2단계-작업_13.gif" alt="" />
                                    <img src="./img/detail/230609_ZV-1M2_최종수정-2단계-작업_14.jpg" alt="" />
                                    <img src="./img/detail/230609_ZV-1M2_최종수정-2단계-작업_15.gif" alt="" />
                                    <img src="./img/detail/230609_ZV-1M2_최종수정-2단계-작업_18.jpg" alt="" />
                                    <img src="./img/detail/230609_ZV-1M2_최종수정-2단계-작업_19.gif" alt="" />
                                    <img src="./img/detail/230609_ZV-1M2_최종수정-2단계-작업_20.jpg" alt="" />
                                    <img src="./img/detail/230609_ZV-1M2_최종수정-2단계-작업_21.gif" alt="" />
                                    <img src="./img/detail/230609_ZV-1M2_최종수정-2단계-작업_02.jpg" alt="" />
                                    <img src="./img/detail/230609_ZV-1M2_최종수정-2단계-작업_03.jpg" alt="" />
                                    <img src="./img/detail/230609_ZV-1M2_최종수정-2단계-작업_04.jpg" alt="" />
                                    <img src="./img/detail/230609_ZV-1M2_최종수정-2단계-작업_05.jpg" alt="" />
                                    <img src="./img/detail/230609_ZV-1M2_최종수정-2단계-작업_06.jpg" alt="" />
                                    <img src="./img/detail/230609_ZV-1M2_최종수정-2단계-작업_07.jpg" alt="" />                                
                                    <img src="./img/detail/230609_ZV-1M2_최종수정-2단계-작업_11.jpg" alt="" />
                                    <img src="./img/detail/230609_ZV-1M2_최종수정-2단계-작업_16.jpg" alt="" />
                                    <img src="./img/detail/230609_ZV-1M2_최종수정-2단계-작업_17.jpg" alt="" />                                
                            </div>
                            </div>
                        }
                        {   nav==='nav2' &&
                            <div className='nav2'>
                                <div className="content-header">
                                    <h2>배송/환불 규정</h2>
                                </div>

                                <div className="content-main">
                                    <div className="main-sub main-sub1">
                                        <h3>교환 / 반품 안내 및 보증 조건과 절차</h3>
                                        <dl>
                                            <dt>
                                                <h4>교환 / 반품 기준</h4>
                                            </dt>
                                            <dd>
                                                <p>
                                                    고객 변심으로 인한 교환/반품은 상품을 수령하신 날로부터 7일 이내에 신청 가능합니다.<br/>
                                                    반품 시 제공된 사은품은 모두 회수하며 회수가 되지 않을 경우 교환/반품이 불가능합니다.<br/>
                                                    교환/환불 시 제품 특성에 따라 처리 소요시간이 상이할 수 있습니다.<br/>
                                                    교환은 동일한 상품만 가능하며, 다른 상품으로 교환을 원하실 경우 해당 상품을 주문취소 후 재주문하여 주시기 바랍니다.<br/>
                                                    (색상변경 포함)<br/>
                                                    전자상거래 등에서의 소비자 보호에 관한 법률로 규정되어 있는 소비자 청약철회 가능 범위에 해당하는 경우 신청 가능합니다.<br/>
                                                    퀵배송 등으로 주문하신 상품과 설치상품의 교환/반품 접수는 고객지원센터(1588-0911)로 연락주시기 바랍니다.
                                                </p>
                                            </dd>
                                        </dl>
                                        <dl>
                                            <dt>
                                                <h4>교환 / 반품 불가사유</h4>
                                            </dt>
                                            <dd>
                                                <p>
                                                    포장을 개봉하여 사용하거나 또는 설치가 완료되어 상품들의 가치가 훼손된 경우<br/>
                                                    고객님의 단순변심으로 인한 교환/반품 요청이 상품을 수령한 날로부터 7일을 경과한 경우<br/>
                                                    고객님의 귀책사유로 상품 등의 가치가 파손되거나 훼손된 경우<br/>
                                                    배송된 상품이 하자없음을 확인한 후 설치가 완료된 상품의 경우<br/>
                                                    기타 ‘전자상거래 등에서의 소비자보호에 관한 법률’이 정하는 청약철회 제한 사유에 해당되는 경우
                                                </p>
                                            </dd>
                                        </dl>
                                        <dl>
                                            <dt>
                                                <h4>품질보증기준 및 AS 안내</h4>
                                            </dt>
                                            <dd>
                                                <p>                                                    	
                                                    품질보증기준 : 제품별 별도표기<br/>
                                                    A/S 관련 전화번호 : 고객지원센터 1588-0911
                                                </p>
                                            </dd>
                                        </dl>
                                    </div>
                                    <div className="main-sub main-sub2">
                                        <h3>배송안내</h3>
                                        <dl>
                                            <dt>
                                                <h4>배송방법</h4>
                                            </dt>
                                            <dd>
                                                <p>
                                                    택배 배송 (설치상품일 경우, 업체에서 직접 방문하여 설치해드립니다.)
                                                </p>
                                            </dd>
                                        </dl>
                                        <dl>
                                            <dt>
                                                <h4>배송가능지역</h4>
                                            </dt>
                                            <dd>
                                                <p>전국</p>
                                            </dd>
                                        </dl>
                                        <dl>
                                            <dt>
                                                <h4>배송비</h4>
                                            </dt>
                                            <dd>
                                                <p>
                                                포장을 개봉하여 사용하거나 또는 설치가 완료되어 상품들의 가치가 훼손된 경우<br/>
                                                고객님의 단순변심으로 인한 교환/반품 요청이 상품을 수령한 날로부터 7일을 경과한 경우
                                                </p>
                                            </dd>
                                        </dl>
                                        <dl>
                                            <dt>
                                                <h4>배송기일</h4>
                                            </dt>
                                            <dd>
                                                <p>
                                                결제일 다음날부터 3~5일 이내 (일요일, 공휴일, 정기휴무 제외) 발송됩니다.<br/>
                                                예약판매 상품 등 일부 상품에 대해서는 상품 수급 또는 운송업체의 사정에 따라 배송이 지연될 수 있습니다.
                                                </p>
                                            </dd>
                                        </dl>
                                        <dl>
                                            <dt>
                                                <h4>교환 / 반품 기준</h4>
                                            </dt>
                                            <dd>
                                                <p>
                                                    품질보증기준 : 제품별 별도표기<br/>A/S 관련 전화번호 : 고객지원센터 1588-0911
                                                </p>
                                            </dd>
                                        </dl>
                                    </div>
                                </div>
                                
                                <div className="content-footer">
                                    <h3>거래약관</h3>
                                    <p>웹사이트 하단의 이용약관을 참조하세요.</p>
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </section>
    );
}

