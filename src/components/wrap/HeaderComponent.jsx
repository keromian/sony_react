import React from 'react';
import $ from 'jquery';
import { Link , Outlet } from 'react-router-dom';

export default function HeaderComponent({loginId, signinKey}) {
    React.useEffect(()=>{
        let newScroll = $(window).scrollTop();  
            let oldScroll = newScroll;             

            $(window).scroll(function(e){
                
                newScroll = $(window).scrollTop();

                
                   if(newScroll-oldScroll > 0 ){
                
                        $('#header').addClass('on');
                        $('#header').removeClass('off');
                   }
                   if(newScroll-oldScroll < 0){
                
                        $('#header').addClass('off');
                        $('#header').removeClass('on');
                   }
                    

                oldScroll = newScroll;
                

            });
    })

    React.useEffect(()=>{
        const headerRow2 = $('.header-row2');
        const headerRow2Ul = $('.header-row2 ul');
        const navLi = $('#header .nav li');
        const headerRow2Li = $('.header-row2 li');
        const header = $('#header');
        const logo = $('.header-left a');
        const sign = $('#header .sign');
        const mypageIn = $('#header .mypage_inner');

        sign.on({
            click(e){
                e.preventDefault();
                mypageIn.toggleClass('on');
            }
        })

        navLi.on({            
            mouseenter(e){
                let index = $(this).index();
                navLi.removeClass('on');
                headerRow2.addClass('on');

                header.addClass('back');

                headerRow2Ul.removeClass('on');
                headerRow2Ul.eq(index).addClass('on');
            }
        })
        logo.on({
            click(){
                headerRow2.removeClass('on');
                header.removeClass('back');
            }
        })
        navLi.on({
            click(){
                headerRow2.removeClass('on');
                header.removeClass('back');
            }
        })

        headerRow2Li.on({
            click(){
                headerRow2.removeClass('on');
                header.removeClass('back');
            }
        })

        headerRow2.on({
            mouseleave(e){
                headerRow2.removeClass('on');

                navLi.removeClass('on')
                
                header.removeClass('back');
            }
        })
        headerRow2Ul.on({
            mouseenter(e){
                let index = $(this).index();

                headerRow2Ul.removeClass('on');
                $(this).addClass('on');

                navLi.removeClass('on')
                navLi.eq(index).addClass('on')
            }
        })
    })

    const onClickLogOut=(e)=>{
        e.preventDefault();
        localStorage.removeItem(signinKey); // 로그인 정보 모두 삭제
        window.location.reload();
    }


    return (
        <>
        <header id='header'>
            <div className="container">
                <div className="gap">
                    <div className="title hide">소니</div>
                    <div className="content">
                        <div className="header-row1">
                            <div className="header-left">
                                <Link to="/MAIN"><img src="./img/header/logo.svg" alt="" /></Link>
                            </div>
                            <div className="header-center">
                                <ul className='nav'>
                                    <li><Link to="/CAMERA">카메라</Link></li>
                                    <li><Link to="/CAMERA">비디오 카메라</Link></li>
                                    <li><Link to="/CAMERA">오디오</Link></li>
                                    <li><Link to="/CAMERA">액세서리</Link></li>
                                    <li><Link to="/CAMERA">PlayStation®</Link></li>
                                    <li><Link to="/SERVICE">고객서비스</Link></li>
                                </ul>
                            </div>
                            <div className="header-right">
                                <ul>
                                    <li>
                                        <Link to="/"><img src="./img/header/search.svg" alt="" /></Link>
                                    </li>
                                    <li >
                                        <a className='sign' href='!#'><img src="./img/header/mypage.svg" alt="" /></a>
                                        <div className='mypage_inner'>
                                            <ul>
                                                {loginId==='' && <li><Link to="/SIGNIN">로그인</Link></li> }
                                                {loginId!=='' && <li><a onClick={onClickLogOut} href='!#'>로그아웃</a></li> }
                                                <li><Link to="/SIGNUP" >회원가입</Link></li>
                                                <li><a  href="!#">주문/배송 조회</a></li>                                                
                                            </ul>
                                        </div>
                                    </li>
                                    <li>
                                        <Link to="/"><img src="./img/header/cart.svg" alt="" /></Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="header-row2">
                            <div className="row2-gap">
                                <ul className='on'>
                                    <li><Link to="/LENS">렌즈교환식 카메라</Link></li>
                                    <li><Link to="/COMPACT">컴팩트 카메라</Link></li>                                    
                                </ul>
                                <ul>
                                    <li><Link to="/LENS">시네마 라인 카메라</Link></li>
                                    <li><Link to="/COMPACT">캠코더</Link></li>                                    
                                </ul>
                                <ul>
                                    <li><Link to="/LENS">헤드폰/이어폰</Link></li>
                                    <li><Link to="/LENS">스피커</Link></li>
                                    <li><Link to="/COMPACT">홈오디오</Link></li>
                                    <li><Link to="/COMPACT">워크맨/녹음기</Link></li>
                                </ul>
                                <ul>
                                    <li><Link to="/LENS">카메라 액세서리</Link></li>
                                    <li><Link to="/COMPACT">오디오 액세서리</Link></li>                                    
                                </ul>
                                <ul>
                                    <li><Link to="/LENS">PlayStation®</Link></li>
                                    <li><Link to="/COMPACT">게임 타이틀 및 주변기기</Link></li>
                                </ul>
                                <ul>
                                    <li><Link to="/SERVICE">FAQ & 공지사항</Link></li>
                                </ul>
                                
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <Outlet/>
        </>
    );
}

