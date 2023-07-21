import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function SigninComponent(props) {
    const navigate = useNavigate();

    const onClickNext =()=>{
        navigate('/AGREE');
    }

    return (
        <main id='signup'>
            <div className="container">
                <div className="gap">
                    <div className="title">
                        <h1>회원가입</h1>
                        <p>소니스토어와 소니 고객지원 사이트는 하나의 아이디와 비밀번호로 운영됩니다. </p>
                        <p>회원가입을 통해 다양한 서비스를 이용하실 수 있습니다.</p>
                        <button onClick={onClickNext}>소니스토어 간편 회원 가입</button>
                    </div>
                    <div className="content">
                        <div className="or">
                            <h4>또는</h4>
                            <span></span>
                        </div>
                        <div className="content-box">
                            <div className="left">
                                <h2>SNS 계정으로 <br/>간편하게 로그인하세요.</h2>
                            </div>
                            <div className="right">
                                <ul>
                                    <li>
                                        <figure><img src="./img/signin/ic_login_naver.5d71532a.svg" alt="" /></figure>
                                        <h3>네이버</h3>
                                    </li>
                                    <li>
                                        <figure><img src="./img/signin/ic_login_kakao.14ac3a26.svg" alt="" /></figure>
                                        <h3>카카오톡</h3>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="bottom">
                            <p>소니코리아 통합 웹회원 정책 상 공식적으로 <strong>만 14세 미만의 경우 회원가입이 불가합니다.</strong></p>
                        </div>
                    </div>
                </div>
            </div>
            
        </main>
    );
}

