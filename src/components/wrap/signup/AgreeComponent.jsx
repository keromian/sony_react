import React from 'react';
import './scss/agree.scss';
import $ from 'jquery';
import { useNavigate } from 'react-router-dom';

export default function AgreeComponent(props) {
    
    const navigate = useNavigate();

    const onClickNext =(e)=>{
        e.preventDefault();
        navigate('/INFO');
    }

    const [req, setReq] = React.useState(false);
    const [btnOn, setBtnOn] = React.useState(false);
    const [consent, setConsent]=React.useState({
        chk1:false,
        chk2:false,
        chk3:false,
        chk4:false,
        chk5:false,
        chk6:false
    });

    const onChangeAgree=(e)=>{
       const chkName = e.target.name;
       const isChecked = e.target.checked;
       setConsent(prevState=>({
        ...prevState,
        [chkName]: isChecked
       }))
    }

    const onClickAgreeAll=()=>{
        setReq(on=>!on);
        if(req===true){
            setConsent(prevState=>({
                ...prevState,
                chk1:false,
                chk2:false,
                chk3:false,
                chk4:false,
                chk5:false,
                chk6:false
               }))
        }
        else if(req===false){
            
               setConsent(prevState=>({
                ...prevState,
                chk1:true,
                chk2:true,
                chk3:true,
                chk4:true,
                chk5:true,
                chk6:true
               }))
        }
        
    }

    React.useEffect(()=>{
        if(consent.chk1 && consent.chk2 &&consent.chk3 &&consent.chk4 &&consent.chk5 &&consent.chk6){
            setReq(true)
            setBtnOn(true)
        }
        else if(consent.chk1 && consent.chk2 &&consent.chk3 &&consent.chk4){
            setBtnOn(true)
        }
        else{
            setReq(false)
            setBtnOn(false)
        }
    },[consent])


    return (
        <main id='agree'>
            <div className="container">
                <div className="gap">
                    <div className="title">
                        <h1>소니스토어</h1>
                        <p>소니 고객지원 사이트(SCS) 와 소니스토어는 하나의 ID 와 비밀번호로 운영됩니다.</p>
                        <p>소니 고객지원 사이트(SCS)의 이용약관에 함께 동의하시면,</p>
                        <p>하나의 ID로 고객지원 사이트(SCS)를 편리하게 이용하실 수 있습니다.</p>
                        
                    </div>
                    <div className="content">
                        <div className="content-header">
                            <div className="left">
                                <h2>약관전체동의<em>(선택 항목 포함)</em></h2>
                            </div>
                            <div className={`right ${req?'on':''}`} onClick={onClickAgreeAll} >
                                <span className='bar'></span>
                                <span className='circle'></span>
                            </div>
                        </div>
                        <div className="agree-box">
                            <form action="">
                                <ul>
                                    <li>
                                        
                                        <label htmlFor="">
                                        <input onChange={onChangeAgree} name='chk1' checked={consent.chk1} type="checkbox" />
                                            <a href="!#">[필수]소니스토어 쇼핑몰 이용약관 동의</a>
                                        </label>
                                        <span>
                                            <a href="!#">전체보기 <i></i></a>
                                        </span>
                                    </li>
                                    <li>
                                        
                                        <label htmlFor="">
                                        <input onChange={onChangeAgree} name='chk2' checked={consent.chk2} type="checkbox" />
                                         <a href="!#">[필수] 소니 고객지원 사이트(SCS) 이용약관 동의</a>
                                        </label>
                                        <span>
                                            <a href="!#">전체보기 <i></i></a>
                                        </span>
                                    </li>
                                    <li>
                                        
                                        <label htmlFor="">
                                        <input onChange={onChangeAgree} name='chk3' checked={consent.chk3} type="checkbox" />
                                        <a href="!#">[필수] 회원가입 개인정보 수집에 관한 동의</a>
                                        </label>
                                        <span>
                                            <a href="!#">전체보기 <i></i></a>
                                        </span>
                                    </li>
                                    <li>
                                        
                                        <label htmlFor="">
                                        <input onChange={onChangeAgree} name='chk4' checked={consent.chk4} type="checkbox" />
                                        <a href="!#">[필수] 개인정보 위탁에 관한 동의</a>
                                        </label>
                                        <span>
                                            <a href="!#">전체보기 <i></i></a>
                                        </span>
                                    </li>
                                    <li>
                                        
                                        <label htmlFor="">
                                            <input onChange={onChangeAgree} name='chk5' checked={consent.chk5} type="checkbox" />
                                            <a href="!#">[선택] 이벤트 등 프로모션 알림 메일 수신</a>
                                        </label>
                                        <span>
                                            <a href="!#">전체보기 <i></i></a>
                                        </span>
                                    </li>
                                    <li>
                                        
                                        <label htmlFor="">
                                        <input onChange={onChangeAgree} name='chk6' checked={consent.chk6} type="checkbox" />
                                        <a href="!#">[선택] 이벤트 등 프로모션 알림 SMS 수신</a>
                                        </label>
                                        <span>
                                            <a href="!#">전체보기 <i></i></a>
                                        </span>
                                    </li>
                                </ul>
                                <div className="btn-box">
                                    <button className={btnOn?'on':''} onClick={onClickNext}>동의</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

