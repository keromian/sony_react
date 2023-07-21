import React from 'react';
import './scss/section2.scss';
import $ from 'jquery';

export default function Section2Component(props) {
    React.useEffect(()=>{
        const slideWrap1 = $('.slide-box1 .slide-wrap');
        const slideWrap2 = $('.slide-box2 .slide-wrap');
        let cnt = 0;

        function mainSlide(){

            slideWrap1.stop().animate({left: `${-50*cnt}%` }, 1000, function(){
                console.log(cnt);
                if(cnt > 3) cnt=0;  
                if(cnt < 0) cnt=3; 

                 
                
                slideWrap1.stop().animate({left: `${-50*cnt}%` }, 0); 
            });   
            
        }
        
        

        // 2-1. 다음카운트함수
        function nextCount(){
            cnt++;
            mainSlide();
        }

        function prevCount(){
            cnt--;
            mainSlide();
        }

        slideWrap2.on({            
            click(e){
                const halfWidth = $(this).width() / 4.6;
                if (e.pageX > halfWidth) {
                    nextCount();
                    
                }
            }
            
        })
        
        slideWrap2.on({            
            click(e){
                const halfWidth = $(this).width() / 4.6;
                if (e.pageX < halfWidth) {
                    prevCount();
                    
                }
            }
        })
        
    },[]);

    React.useEffect(()=>{
        const slideWrap2 = $('.slide-box2 .slide-wrap');
        const slide = $('.slide-box2 .slide-wrap .slide');
        const pageBtn = $('.slide-box2 .page-btn')
        let cnt = 0;

        function mainSlide(){

            
            
            slideWrap2.stop().animate({left: `${-72*cnt}%` }, 1000, function(){
                console.log(cnt);
                if(cnt > 3) cnt=0;  
                if(cnt < 0) cnt=3;                 
                slideWrap2.stop().animate({left: `${-72*cnt}%` }, 0); 

                slide.removeClass('on');
                slide.eq(cnt+1).addClass('on'); 
                
                
            });   
            pageBtn.removeClass('on');
            pageBtn.eq(cnt>=4?cnt=0:cnt).addClass('on');
                
            
        }
        
        

        // 2-1. 다음카운트함수
        function nextCount(){
            cnt++;
            mainSlide();
        }

        function prevCount(){
            cnt--;
            mainSlide();
        }

        slideWrap2.on({            
            click(e){
                const halfWidth = $(this).width() / 4.6;
                if (e.pageX > halfWidth) {
                    nextCount();
                    
                }
            }
            
        })
        
        slideWrap2.on({            
            click(e){
                const halfWidth = $(this).width() / 4.6;
                if (e.pageX < halfWidth) {
                    prevCount();
                    
                }
            }
        })

        slideWrap2.on({
            mousemove(e){
                const halfWidth = $(this).width() / 4.6;
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
        <section id='introSection2'>
            <div className="slide-container">
                <div className="slide-view">
                    <div className="slide-box1">
                        <ul className='slide-wrap'>
                            <li className='slide slide4'>
                                <img src="./img/intro/main-woman.jpg" alt="" />
                            </li>
                            <li className='slide slide1'>
                                <img src="./img/intro/main-camera.jpg" alt="" />
                            </li>
                            <li className='slide slide2'>
                                <img src="./img/intro/main-man.jpg" alt="" />
                            </li>
                            <li className='slide slide3'>
                                <img src="./img/intro/main-woman2.jpg" alt="" />
                            </li>
                            <li className='slide slide4'>
                                <img src="./img/intro/main-woman.jpg" alt="" />
                            </li>
                            <li className='slide slide1'>
                                <img src="./img/intro/main-camera.jpg" alt="" />
                            </li>
                        </ul> 
                    </div>
                    <div className="slide-box2">
                        <ul className='slide-wrap'>
                            <li className='slide slide4'>
                                <h2>벗지 않는 편안함</h2>
                                <figure><img src="./img/intro/102284831_1.png" alt="" /></figure>
                                <h3>링크버즈</h3>
                                <h4>정가 229,000원 &gt; 기간한정 3만원 즉시할인 199,000원</h4>
                            </li>
                            <li className='slide slide1 on'>
                                <h2>표준의 초격차</h2>
                                <figure><img src="./img/intro/ILCE-7M4_1.png" alt="" /></figure>
                                <h3>ILCE-7M4</h3>
                                <h4>The Camera</h4>
                            </li>
                            <li className='slide slide2'>
                                <h2>편안하게 몰입하다</h2>
                                <figure><img src="./img/intro/LinkBuds-S_02.png" alt="" /></figure>
                                <h3>링크버즈 S</h3>
                                <h4>편안하게 몰입하다, 링크버즈 S</h4>
                            </li>
                            <li className='slide slide3'>
                                <h2>All New Design</h2>
                                <figure><img src="./img/intro/104580435_1.png" alt="" /></figure>
                                <h3>WH-1000XM5 플래티넘 실버</h3>
                                <h4>All New Design</h4>
                            </li>
                            <li className='slide slide4'>
                                <h2>벗지 않는 편안함</h2>
                                <figure><img src="./img/intro/102284831_1.png" alt="" /></figure>
                                <h3>링크버즈</h3>
                                <h4>정가 229,000원 &gt; 기간한정 3만원 즉시할인 199,000원</h4>
                            </li>
                            <li className='slide slide1'>
                                <h2>표준의 초격차</h2>
                                <figure><img src="./img/intro/ILCE-7M4_1.png" alt="" /></figure>
                                <h3>ILCE-7M4</h3>
                                <h4>The Camera</h4>
                            </li>
                            <li className='slide slide2'>
                                <h2>표준의 초격차</h2>
                                <figure><img src="./img/intro/LinkBuds-S_02.png" alt="" /></figure>
                                <h3>ILCE-7M4</h3>
                                <h4>The Camera</h4>
                            </li>
                        </ul> 
                        <div className="page-nation">
                            <button className='page-btn on'>1</button>
                            <button className='page-btn'>2</button>
                            <button className='page-btn'>3</button>
                            <button className='page-btn'>4</button>
                        </div>
                    </div>
                                      
                </div>
            </div>
        </section>
    );
}
