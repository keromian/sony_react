import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import HeaderComponent from './wrap/HeaderComponent';
import IntroComponent from './wrap/IntroComponent';
import FooterComponent from './wrap/FooterComponent';
import CameraComponent from './wrap/CameraComponent';
import LensComponent from './wrap/camera/LensComponent';
import CompactComponent from './wrap/camera/CompactComponent';
import ServiceComponent from './wrap/ServiceComponent';
import SignupComponent from './wrap/SignupComponent';
import AgreeComponent from './wrap/signup/AgreeComponent';
import InfoComponent from './wrap/signup/info/InfoComponent';
import SigninComponent from './wrap/SigninComponent';
import ProductDetailComponent from './wrap/ProductDetailComponent';
import GoTopComponent from './wrap/GoTopComponent';

export default function WrapComponent() {

    const [signin, setSigin] = React.useState({
        signinKey: 'SONYUSERLOGIN',
        userId:'',
        expires:''
    });
    const {signinKey, userId, expires} = signin;
    const [loginId, setLoginId]=React.useState('');
    React.useEffect(()=>{
        // 로컬스토레이지 로그인 정보 가져오기
        let result='';
        if( localStorage.getItem(signinKey)!==null ){
             result = JSON.parse(localStorage.getItem(signinKey)); 
             if( new Date() > result.expires){
                alert('만료일이 지났습니다. 로그아웃되었습니다.');
                setSigin({
                    ...signin,
                    userId: '',
                    expires: ''
                })
                localStorage.removeItem(signinKey); // 로그인 정보 모두 삭제
             } 
             else{
                setSigin({
                    ...signin,
                    userId: result.userId,
                    expires: result.expires
                 })                 
                setLoginId(signin.userId);
             }
        }
        
    },[userId, expires, signinKey]);

    const [productDetail, setProductDetail] = React.useState({
        dkey: 'PRODUCTDETAILKEY',
        sign: false,
        getProductDetail : [],
        cartKey:'ABCMARTCART',
    });

    // 비구조화
    const {dkey, sign, getProductDetail, cartKey} = productDetail;

    const setViewProductDetail=(value)=>{
        let arr = [];
        console.log('value  ' +value);
        if(localStorage.getItem(dkey)!==null){

            arr = JSON.parse(localStorage.getItem(dkey));
            arr = [value, ...arr]
            localStorage.setItem(dkey, JSON.stringify(arr));
            setProductDetail({
                ...productDetail,
                sign: !sign,
                getProductDetail: arr
            });
        }
        else{
            arr = [value]
            localStorage.setItem(dkey, JSON.stringify(arr));
            setProductDetail({
                ...productDetail,
                sign: !sign,
                getProductDetail: arr
            });
        }
      
    }

    
    


    return (
        <div id='wrap'>
            <BrowserRouter  basename={process.env.PUBLIC_URL}>
                <Routes>
                    <Route path='/' element={<HeaderComponent loginId={loginId} signinKey={signinKey}/>}>
                        <Route index element={<IntroComponent/>}/>
                        <Route path='MAIN' element={<IntroComponent/>}/>

                        {/* 카메라 */}
                        <Route path='CAMERA' element={<CameraComponent setViewProductDetail={setViewProductDetail} dkey={dkey}/>}/>
                        <Route path='LENS' element={<LensComponent setViewProductDetail={setViewProductDetail} dkey={dkey}/>}/>
                        <Route path='COMPACT' element={<CompactComponent setViewProductDetail={setViewProductDetail} dkey={dkey}/>}/>

                        {/* 제품상세페이지 */}
                        <Route path='DETAIL' element={<ProductDetailComponent dkey={dkey}/>}/>
                        

                        {/* 공지사항 */}
                        <Route path='SERVICE' element={<ServiceComponent loginId={loginId}/>}/>

                        {/* 회원가입 */}
                        <Route path='SIGNUP' element={<SignupComponent/>}></Route>
                        <Route path='AGREE' element={<AgreeComponent/>}></Route>
                        <Route path='INFO' element={<InfoComponent/>}></Route>

                        {/* 로그인 */}
                        <Route path='SIGNIN' element={<SigninComponent setSigin={setSigin} />}/>
                        
                    </Route>
                </Routes>
            </BrowserRouter>
            
            <FooterComponent/>
            <GoTopComponent/>
        </div>
    );
};