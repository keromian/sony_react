import React from 'react';

export default function DetailSection1Component({dkey}) {

    const [state, setState] = React.useState({
        camera:{}
    });

    const {camera} = state;

    React.useEffect(()=>{
                
        if(localStorage.getItem(dkey) !== null){
            let result = JSON.parse(localStorage.getItem(dkey));
            setState({
                ...state,
                camera: result[0]
                
            })
            
        }
        
    },[dkey]);

    const [cnt, setCnt] = React.useState(1);

    const [show, setShow] = React.useState('');
    const onClickMinus=(e)=>{
        e.preventDefault();   
        if(cnt<=1) return;
        setCnt(cnt-1);  
    }

    const onClickPlus=(e)=>{
        e.preventDefault();
        setCnt(cnt+1);   
    }

    function resetSelect() {
        const selectElement = document.getElementById('selectbox');
        selectElement.selectedIndex = 0;
      } 

    const onClickDelete=(e)=>{
        e.preventDefault();
        setShow('');  
        resetSelect();
        setCnt(1);
    }

    const onChangeInner=(e)=>{
        setShow(e.target.value)
    }
   
    return (
        <section id='detailSection1'>
            <div className="container">
                <div className="gap">
                    <div className="title hide">상세페이지</div>
                    <div className="content">
                        <div className="left">
                            <figure><img src={camera.이미지} alt="" /></figure>
                        </div>
                                    <div className="right">
                                        <div className="row1">
                                            <span>{camera.신제품}</span>
                                            <h2>{camera.제품명}</h2>
                                            <h4>{camera.정보}</h4>
                                            <p>올인원 브이로그 카메라</p>
                                            <a href='!#'><img src="./img/detail/ico_share.df6b9463.svg" alt="" /></a>
                                        </div>
                                        <div className="row2">
                                            {camera && camera.가격 &&
                                            <h3>{camera.가격.toLocaleString()} <em>원</em></h3>
                                            }
                                            <span>무료배송</span>
                                        </div>
                                        <div className="row3">
                                            <h3>회원별 마일리지 적립혜택</h3>
                                            <div className="sale">
                                                <ul>
                                                    <li>
                                                        <div className="img-box">
                                                            <img src="./img/detail/membership_vip.f6121d1d.svg" alt="" />
                                                        </div>
                                                        <div className="txt-box">
                                                            <i>VIP 4%</i>
                                                            <span>{((camera.가격)*0.04).toLocaleString()}</span>
                                                        </div>
                                                        
                                                    </li>
                                                    <li>    
                                                        <div className="img-box">
                                                            <img src="./img/detail/membership_family.ea303a8f.svg" alt="" />
                                                        </div>
                                                        <div className="txt-box">
                                                            <i>MEMBERSHIP 2%</i>
                                                            <span>{((camera.가격)*0.02).toLocaleString()}</span>
                                                        </div>
                                                        
                                                    </li>
                                                </ul>
                                                
                                                
                                            </div>
                                        </div>
                                        <div className="row4">
                                            <h3>색상</h3>
                                            <ul className="radio-box">
                                                <li>
                                                    <input type="radio" name='color' />
                                                    <span>화이트</span>
                                                </li>
                                                <li>
                                                    <input type="radio" name='color' />
                                                    <span>블랙</span>
                                                </li>                                        
                                            </ul>
                                        </div>
                                        <div className="row5">
                                            <h3>제품선택</h3>
                                            <select name="selectbox" id="selectbox" onChange={onChangeInner}>
                                                <option value="제품을 선택하세요">제품을 선택하세요</option>
                                                <option value={camera.제품명}>{camera.제품명}</option>
                                            </select>
                                            {show === `${camera.제품명}` &&
                                            <div className="row5Inner">
                                                <h4>제품</h4>
                                                <p>제품:{camera.제품명}</p>
                                                <div className='num_trans'>
                                                    <div className="number">
                                                        <a href="!#" onClick={onClickMinus}>-</a>
                                                        <div className="count">{cnt}</div>
                                                        <a href="!#" onClick={onClickPlus}>+</a>
                                                    </div>
                                                    <label htmlFor=""><input type="text" value={(Math.round(cnt*(camera.가격))).toLocaleString('')} /> <i>원</i></label>
                                                </div>
                                                <a className='del-btn' onClick={onClickDelete} href="!#"><img src="./img/detail/del.png" alt="" /></a>
                                            </div>
                                            }
                                        </div>
                                        <div className="row6">
                                            {show !== `${camera.제품명}` &&
                                            <>
                                            <h3>총 상품금액(총 -개)</h3>
                                            <h3>-원</h3>
                                            </>
                                            }
                                            {show === `${camera.제품명}` &&
                                            <>
                                            <h3>총 상품금액(총 {cnt}개)</h3>
                                            <h3>{(Math.round(cnt*(camera.가격))).toLocaleString('')}원</h3>
                                            </>
                                            }
                                        </div>
                                        <div className="row7">
                                            <ul>
                                                <li>
                                                    <button><img src="./img/detail/ico_heart.e9369092.svg" alt="" /></button>
                                                </li>
                                                <li>
                                                    <button><img src="./img/detail/ico_cart.4fe27ebf.svg" alt="" /></button>
                                                </li>
                                                <li>
                                                    <button><img src="./img/detail/ico_gift.7e689393.svg" alt="" /></button>
                                                </li>
                                                <li>
                                                    {camera.품절 &&
                                                        <button className='btn1'>일시품절</button>
                                                    }
                                                    {!camera.품절 &&
                                                        <button className='btn2'>바로 구매하기</button>
                                                    }
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

