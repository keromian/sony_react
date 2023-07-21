import React from 'react';
import $ from 'jquery';
import axios from 'axios';

export default function SigninComponent({setSigin}) {
    const [member, setMember]=React.useState('회원');
    

    React.useEffect(()=>{
        const infoInputs = $('#signin .inputs');
        infoInputs.on({
            click(){
                infoInputs.removeClass('on');
                $(this).addClass('on');
            }
        })

        

        $(document).on({            
            click(e){
                if(!$(e.target).closest(infoInputs).length){
                    infoInputs.removeClass('on');
                }
            }
        })

    })

    const [state, setState]=React.useState({
        아이디:'',
        비밀번호:''
    })

    const onChangeUserId=(e)=>{
        setState({
            ...state,
            아이디:e.target.value
        })
    }

    const onChangeUserPw=(e)=>{
        setState({
            ...state,
            비밀번호:e.target.value
        })
        
    }
    const onSubmitAction=(e)=>{
        e.preventDefault();
        axios({
            url:'http://keromian.cafe24.com/bbs/loginAction.jsp',
            method: 'POST',
            data:{},
            params: {
                "userId": state.아이디,
                "userPw": state.비밀번호
            }
        })
        .then((res)=>{
            console.log( res );
            console.log( res.data );
            
            if(res.status===200){
                const result =res.data.result;
                console.log( res.data.result );
                try {                    
                    if( result === -1 ){
                        alert('가입회원이 아닙니다. 회원가입하세요');
                        setTimeout(function(){
                            window.location.pathname = `/SIGNUP`;
                        }, 1000);                                                       
                    }
                    else if( result === 0 ){
                        alert('비밀번호를 확인하고 다시 시도해주세요');                        
                    }
                    else{
                        
                        let toDay = new Date();
                        toDay.setDate(toDay.getDate()+3); //로그인이 3일 만료일
                        const obj = {
                            userId: state.아이디,
                            expires: toDay.getTime()
                        }
                        localStorage.setItem('SONYUSERLOGIN', JSON.stringify(obj) );                            
                        setSigin({
                            userId: state.아이디,
                            expires: toDay.getTime()
                        })
                        alert('로그인이 되었습니다.');
                        
                        window.location.pathname='/MAIN'
                        // window.location.reload();
                        // window.location.pathname='/MAIN'

                    }
                } catch (error) {
                    console.log( error );
                }
            }
            
        })
        .catch((err)=>{
            console.log(`AXIOS 실패! ${err} `)
        }); 
    }
    
    return (
        <main id='signin'>
            <div className="container">
                <div className="gap">
                    <div className="title">
                        <ul>
                            <li>
                                <button onClick={()=>setMember('회원')} className={member==='회원'?'on':''}>회원 로그인</button>
                            </li>
                            <li>
                                <button onClick={()=>setMember('비회원')} className={member==='비회원'?'on':''}>비회원 로그인</button>
                            </li>
                        </ul>
                       
                        
                    </div>
                    <div className="content">
                        <div className="row1">
                            <form onSubmit={onSubmitAction} action="">
                                <ul>
                                    <li  className='inputs'>
                                        <label htmlFor="userId">
                                            <input onChange={onChangeUserId} name='userId' id='userId' type="text" value={state.아이디} autoComplete='off'/>
                                            <span className={`spans${state.아이디===''?'':' on'}`}>
                                                이메일 아이디
                                                <em>(예:sony@sony.co.kr)</em>
                                            </span>    
                                        </label>                                    
                                    </li>
                                    <li className='inputs'>
                                        <label htmlFor="userPw">
                                            <input type="password" onChange={onChangeUserPw} name='userPw' id='userPw' value={state.비밀번호}/>
                                            <span className={`spans${state.비밀번호===''?'':' on'}`}>
                                                비밀번호
                                                <em>(대/소문자, 숫자, 특수문자 3종 포함 12~15자리 미만)</em>
                                            </span>    
                                        </label>                                    
                                    </li>
                                </ul>
                                <div className={`btn-box${state.아이디!=='' && state.비밀번호!==''?' on':''}`}>
                                    <button>로그인</button>
                                </div> 
                            </form>
                            
                        </div>                        
                        <div className="row2">
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
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

