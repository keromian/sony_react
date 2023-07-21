import React from 'react';
import './scss/info.scss';
import $ from 'jquery';
import axios from 'axios';

export default function InfoComponent({membership}) {
    const [state, setState] = React.useState(membership);

    React.useEffect(()=>{
        const infoInputs = $('#info .inputs');
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

    const onChangeUserId=(e)=>{

        const {value} = e.target;
        let 아이디;
        let isIdError = false;
        let isIdMsg = '';

        const regExp1 = /^[a-z0-9]*@[a-z0-9]+\.[a-z]{2,3}$/gi;

        if(regExp1.test(value)===false){
            isIdError = true;
            isIdMsg = '이메일 주소 양식에 맞게 작성해주세요.';
        }
        else{
            isIdError = false;
            isIdMsg = '';
        }

        setState({
            ...state,
            아이디: value,
            isEmailError: isIdError,
            isEmailMsg: isIdMsg
        })

        

    }

    const onChangeUserPw=(e)=>{
        const {value} = e.target;
        let 비밀번호 = '';
        let isPwError = false;
        let isPwMsg = '';

        const regExp1 = /^(.){8,12}$/g;
        const regExp2 = /([A-Za-z]+[0-9]+)+|([0-9]+[A-Za-z]+)+|([A-Za-z]+[`~!@#$%^&*\-_|;:'"/?]+)+|([`~!@#$%^&*\-_|;:'"/?]+[A-Za-z]+)+|([0-9]+[`~!@#$%^&*\-_|;:'"/?]+)+|([`~!@#$%^&*\-_|;:'"/?]+[0-9]+)+/g;
        const regExp3 = /[가-힣ㄱ-ㅎㅏ-ㅣ]/g;
        const regExp4 = /(\d)\1\1/g;
        const regExp5 = /(.)\1\1/g;

        if(regExp1.test(value)===false || regExp2.test(value)===false || regExp3.test(value)===true){
            isPwError = true;
            isPwMsg = '8~12자의 영문, 숫자, 특수문자 중 2가지 이상으로만 가능합니다.';
        }
        else if(regExp4.test(value)===true || regExp5.test(value)===true){
            isPwError = true;
            isPwMsg = '동일한 문자를 연속으로 사용할 수 없습니다.';
        }
        else{
            isPwError = false;
            isPwMsg = '';
        }

        setState({
            ...state,
            비밀번호: value,
            isPwError: isPwError,
            isPwMsg: isPwMsg,

        })

    }

    const onChangeUserPwConfirm=(e)=>{

        const {value} = e.target;
        let 비밀번호확인 = '';
        let isPwConfirmError = false;
        let isPwConfirmMsg = '';

        const regExp1 = /^(.){8,12}$/g;
        const regExp2 = /([A-Za-z]+[0-9]+)+|([0-9]+[A-Za-z]+)+|([A-Za-z]+[`~!@#$%^&*\-_|;:'"/?]+)+|([`~!@#$%^&*\-_|;:'"/?]+[A-Za-z]+)+|([0-9]+[`~!@#$%^&*\-_|;:'"/?]+)+|([`~!@#$%^&*\-_|;:'"/?]+[0-9]+)+/g;
        const regExp3 = /[가-힣ㄱ-ㅎㅏ-ㅣ]/g;
        const regExp4 = /(\d)\1\1/g;
        const regExp5 = /(.)\1\1/g;        



        if(regExp1.test(value)===false || regExp2.test(value)===false || regExp3.test(value)===true){
            isPwConfirmError = true;
            isPwConfirmMsg = '8~12자의 영문, 숫자, 특수문자 중 2가지 이상으로만 가능합니다.';
        }
        else if(regExp4.test(value)===true || regExp5.test(value)===true){
            isPwConfirmError = true;
            isPwConfirmMsg = '동일한 문자를 연속으로 사용할 수 없습니다.';
        }
        else if(value !== state.비밀번호){
            isPwConfirmError = true;
            isPwConfirmMsg = '비밀번호가 일치하지 않습니다. 다시 입력해주세요.';
        }
        else{
            isPwConfirmError = false;
            isPwConfirmMsg = '';
        }

        setState({
            ...state,
            비밀번호확인: value,
            isPwConfirmError: isPwConfirmError,
            isPwConfirmMsg: isPwConfirmMsg

        })

    }

    const onChangeUserName=(e)=>{

        const {value} = e.target;
        let 이름 = '';
        let isNameError = false;
        let isNameMsg = '';

        const regExp1 = /[`~!@#$%^&*()\-_=+[{\]}\\|;:'",<.>/?]/g;
        const regExp2 = /[0-9]/g;
        const regExp3 = /\s/g;

        if(regExp1.test(value)===true || regExp2.test(value)===true || regExp3.test(value)===true){
            isNameError = true;
            isNameMsg = '한글과 영문 대,소문자를 사용해주세요'
        }
        else{
            isNameError = false;
            isNameMsg = ''
        }

        setState({
            ...state,
            이름: value,
            isNameError: isNameError,
            isNameMsg: isNameMsg
        })     

    }

    const onChangeBirth=(e)=>{
        const {value}=e.target;
        let isBirthError = false;
        let isBirthMsg = '';
        let 생년월일 = '';
        const regExp = /[^\d]/gi; 

        생년월일 = value.replace(regExp, '');

        if(생년월일===''){
            isBirthError=true;
            isBirthMsg='생년월일을 입력해 주세요.';
        }
        else if(regExp.test(value)===false){
            isBirthError=true;
            isBirthMsg='8자리 숫자 형식으로 입력해 주세요.';
        }
        else{
            isBirthError=false;
            isBirthMsg='';
        }
        
        setState({
            ...state,
            isBirthError: isBirthError,
            isBirthMsg: isBirthMsg,
            생년월일: 생년월일
        })

    }

    const onChangeHp=(e)=>{
        const regExp = /[^0-9]/g;
        let 휴대폰 = '';
        let isHpError = false;
        let isHpMsg = '';
        let isHpdisabled = true;
        const {value} = e.target;


        // 숫자가 아니면 삭제
        휴대폰 = value.replace(regExp, '');

        if(휴대폰===''){
            isHpError=true;
            isHpMsg='휴대폰 번호를 입력해 주세요.'
        }
        else{
            isHpError=false;
            isHpMsg='' 
            if(휴대폰.length >= 1){
                isHpdisabled = false;
            }
            else {
                isHpdisabled = true;
            }
        }

        setState({
            ...state,
            휴대폰: 휴대폰,
            isHpError: isHpError,
            isHpMsg: isHpMsg,
            isHpdisabled: isHpdisabled
        });

    }

    const onChangeGender=(e)=>{
        setState({
            ...state,
            성별: e.target.value
        })
    }

    

    const onSubmitAction=(e)=>{
        e.preventDefault();
        console.log(state.아이디);
        axios({
            url:'http://keromian.cafe24.com/bbs/signupAction.jsp',
            method: 'POST',
            data:{},
            params: {
                "userId": state.아이디,
                "userPw": state.비밀번호,
                "userName": state.이름,
                "userBirth": state.생년월일,
                "userHp": state.휴대폰,
                "userGender": state.성별

            }
        })
        .then((res)=>{
    
            console.log( res );
            console.log( res.data );
            // window.location.pathname='/MAIN';

            if(res.status===200){
                const result =res.data.result;
                console.log( res.data.result );
                try {                    
                    if( result === -1 ){
                        alert('가입오류 이미 입력된 아이디 입니다.');                                  
                    }
                    else if( result === 0 ){
                        alert('아이디, 비밀번호, 이름은 필수 입력사항입니다.');                        
                    }
                    else{
                        
                        alert('회원가입을 축하드립니다.'); 
                        window.location.pathname='/MAIN'

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
        <main id='info'>
            <div className="container">
                <div className="gap">
                    <div className="title">
                        <h1>회원가입</h1>
                        <p>소니코리아 통합 웹회원 정책 상 공식적으로<strong>만 14세 미만의 경우 회원가입이 불가합니다.</strong></p>
                    </div>
                    <div className="content">
                        <form onSubmit={onSubmitAction} action="">
                            <ul>
                                <li  className='inputs'>
                                    <label htmlFor="userId">
                                        <input onChange={onChangeUserId} name='userId' id='userId' type="text" value={state.아이디}/>
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
                                <li className='inputs'>
                                    <label htmlFor="userPw2">
                                        <input type="password" onChange={onChangeUserPwConfirm} name='userPw2' id='userPw2' value={state.비밀번호확인}/>
                                        <span className={`spans${state.비밀번호확인===''?'':' on'}`}>
                                            비밀번호 확인                                            
                                        </span>    
                                    </label>                                    
                                </li>
                                <li className='inputs'>
                                    <label htmlFor="userName">
                                        <input type="text" onChange={onChangeUserName} name='userName' id='userName' value={state.이름}/>
                                        <span className={`spans${state.이름===''?'':' on'}`}>
                                            이름
                                            <em>(띄어쓰기 없이 입력하세요.)</em>
                                        </span>    
                                    </label>  
                                    </li>                                  
                                    <li className='inputs'>
                                    <label htmlFor="userBirth">
                                        <input type="text" maxLength={8} onChange={onChangeBirth} name='userBirth' id='userBirth' value={state.생년월일}/>
                                        <span className={`spans${state.생년월일===''?'':' on'}`}>
                                            생년월일
                                            <em>(예:20210307)</em>
                                        </span>    
                                    </label>                                    
                                </li>
                                
                                <li>
                                    <label htmlFor="userGender">
                                        <input onChange={onChangeGender} type="radio" name='userGender' id='female' value={'여성'} checked={state.성별.includes('여성')}/>
                                        여성                                            
                                        <input onChange={onChangeGender} type="radio" name='userGender' id='male' value={'남성'} checked={state.성별.includes('남성')}/>
                                        남성
                                        <span>
                                            성별
                                        </span>
                                    </label>                                    
                                </li>
                                <li className='inputs'>
                                    <label htmlFor="userHp">
                                        <input type="text" onChange={onChangeHp} name='userHp' id='userHp' value={state.휴대폰} />
                                        <span className={`spans${state.휴대폰===''?'':' on'}`}>
                                            휴대폰 번호
                                            <em>(-없이 입력하세요)</em>
                                        </span>    
                                    </label>                                    
                                </li>
                            </ul>
                            <div className={`btn-box${state.아이디!=='' && state.비밀번호!=='' && state.비밀번호확인!=='' && state.이름!=='' && state.생년월일!=='' && state.휴대폰!==''?' on':''}`}>
                                <button>가입완료</button>
                            </div>                            
                        </form>
                    </div>
                </div>
            </div>
        </main>
    );
}

InfoComponent.defaultProps = {

    membership: {

        아이디:'',
        isIdError: false,
        isIdMsg: '',

        비밀번호:'',
        isPwError: false,
        isPwMsg: '',

        비밀번호확인:'',
        isPwConfirmError: false,
        isPwConfirmMsg: '',

        생년월일:'',
        isBirthError: false,
        isBirthMsg: '',

        이름:'',
        isNameError: false,
        isNameMsg: '',

        이메일:'',
        isEmailError: false,
        isEmailMsg: '',

        메일박스:'',

        성별:'여성',

        휴대폰:'',
        isHpError: false,
        isHpMsg: '',

        발송인증번호:'',
        sendNum: false, // 인증번호가 발송되었는가?
        입력인증번호:'',
        inputConfirm: false, //인증번호를 맞게 입력했는가?
        confirmMsgTime:'',

        isNumber: true, //
        isNumOk: false,
        SMS_Email_info:'',
        under_fourteen:'',
        under_fourteen_state: false,

        confirmMsg: '',
        isConfirmModal: false,

        isHpConfirm: false,

        isButtonActive: false
    }



}

