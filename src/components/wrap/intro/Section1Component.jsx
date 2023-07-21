import React from 'react';
import './scss/section1.scss';
import $ from 'jquery';

export default function Section1Component(props) {
    React.useEffect(()=>{
        const slideWrap = $('#introSection1 .slide-wrap');
        const slide = $('#introSection1 .slide');
        let cnt = 0;
        let n = slide.length;
        
        slideWrap.css({with:`${100*n}%`})

        function mainSlide(){

            slideWrap.stop().animate({left: `${-100*cnt}%` }, 1000, function(){
                console.log(cnt);
                if(cnt > 3) cnt=0;  
                if(cnt < 0) cnt=3; 

                
                slideWrap.stop().animate({left: `${-100*cnt}%` }, 0); 

                slide.removeClass('on');
                slide.eq(cnt+1).addClass('on'); 
            });   
            
        }
        
        
        function nextCount(){
            cnt++;
            mainSlide();
        }

        function prevCount(){
            cnt--;
            mainSlide();
        }

        slide.on({            
            click(e){
                const halfWidth = $(this).width() / 2;
                if (e.pageX > halfWidth) {
                    nextCount();
                    
                }
            }
            
        })
        
        slide.on({            
            click(e){
                const halfWidth = $(this).width() / 2;
                if (e.pageX < halfWidth) {
                    prevCount();
                    
                }
            }
        })

        slide.on({
            mousemove(e){
                const halfWidth = $(this).width() / 2;
                if (e.pageX > halfWidth) {
                    $(this).css('cursor', 'url(./img/intro/right.png), auto');
                    
                }
                else{
                    $(this).css('cursor', 'url(./img/intro/left.png), auto');
                }
            }
        })
    },[]);
    return (
        <section id='introSection1'>
            <div className="slide-container">
                <div className="slide-view">
                    <ul className="slide-wrap">
                        <li className='slide slide4'>
                            <div className="text-box">                                
                                <h1>프로를 위한</h1>
                                <h2>스튜디오 마이크</h2>
                                <h4>C-80 출시</h4>
                                <a href="!#">자세히 보기 &gt;</a>
                            </div>
                            <img src="./img/intro/01_PC_main_IMG_04.jpg" alt="" />
                        </li>
                        <li className='slide slide1 on'>
                            <div className="text-box">                                
                                <h1>미드나잇 블루 출시</h1>
                                <h3>WH-1000XM5</h3>
                                <h4>블루는 고급지다</h4>
                                <a href="!#">자세히 보기 &gt;</a>
                            </div>
                            <img src="./img/intro/01_PC_main_IMG_01.jpg" alt="" />
                        </li>
                        <li className='slide slide2'>
                            <div className="text-box">                                
                                <h1>첫번째 풀프레임</h1>
                                <h2>브이로그 카메라</h2>
                                <h4>ZV-E1 출시</h4>
                                <a href="!#">자세히 보기 &gt;</a>
                            </div>
                            <img src="./img/intro/01_PC_main_IMG_02.jpg" alt="" />
                        </li>
                        <li className='slide slide3'>
                            <div className="text-box">                                
                                <h1>나를 담는</h1>
                                <h2>브이로그 카메라</h2>
                                <h3>ZV-1F</h3>
                                <h4>초보 크리에이터도 프로 크리에이터 처럼</h4>
                                <a href="!#">자세히 보기 &gt;</a>
                            </div>
                            <img src="./img/intro/01_PC_main_IMG_03.jpg" alt="" />
                        </li>
                        <li className='slide slide4'>
                            <div className="text-box">                                
                                <h1>프로를 위한</h1>
                                <h2>스튜디오 마이크</h2>
                                <h4>C-80 출시</h4>
                                <a href="!#">자세히 보기 &gt;</a>
                            </div>
                            <img src="./img/intro/01_PC_main_IMG_04.jpg" alt="" />
                        </li>
                        <li className='slide slide1'>
                            <div className="text-box">                                
                                <h1>미드나잇 블루 출시</h1>
                                <h3>WH-1000XM5</h3>
                                <h4>블루는 고급지다</h4>
                                <a href="!#">자세히 보기 &gt;</a>
                            </div>
                            <img src="./img/intro/01_PC_main_IMG_01.jpg" alt="" />
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

