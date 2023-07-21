import React from 'react';
import './scss/lensSection2.scss';
import { useNavigate } from 'react-router-dom';

export default function LensSection2Component({렌즈, n, setViewProductDetail, dkey}) {
    const navigate=useNavigate();
    const [sortOrder, setSortOrder] =React.useState('new');
    const [sortDate, setSortData] =React.useState(렌즈);

    React.useEffect(()=>{
        let arr = [...렌즈];

        if(sortOrder==='asc'){
            arr.sort((a,b)=>a.price -b.price);
        }
        else if(sortOrder==='des'){
            arr.sort((a,b)=>b.price -a.price);
        }

        setSortData(arr);

    },[렌즈, sortOrder])


    const onClickSort=(order)=>{
        setSortOrder(order);
    }
    const onClickProductDetailList=(e, item)=>{
        e.preventDefault();

        let obj = {
            상품코드: item.product_code,
            이미지: item.img,
            제품명: item.product,
            품절: item.soldout,
            정보: item.info,
            가격: item.price,
            신제품: item.new
        }
   
        console.log(item);
        setViewProductDetail(obj);
        navigate('/DETAIL');
    }
    return (
        <section id='lensSection2'>
            <div className="container">
                <div className="gap">
                    <div className="title">
                        <div className="left">
                            <h2>제품<em>({n})</em></h2>
                        </div>
                        <div className="right">
                            <ul>
                                <li onClick={()=>onClickSort('new')} className={sortOrder==='new'?'on':''}><span>최신순</span></li>
                                <li onClick={()=>onClickSort('des')} className={sortOrder==='des'?'on':''}><span >높은 가격순</span></li>
                                <li onClick={()=>onClickSort('asc')} className={sortOrder==='asc'?'on':''}><span >낮은 가격순</span></li>
                            </ul>
                        </div>
                    </div>
                    <div className="content">
                        <ul>
                            {
                                sortDate.map((item,idx)=>{
                                    return(
                                        <li key={idx} dkey={idx}>
                                            <a href="!#" onClick={(e)=>onClickProductDetailList(e,item)}>
                                                <div className='img-box'>
                                                    <img src={item.img} alt="" />
                                                </div>
                                                <div className="txt-box">
                                                    <h3>{item.product} <span>{item.soldout}</span></h3>
                                                    <p>{item.info}</p>
                                                </div>
                                                <div className="price">
                                                    <h4>{(item.price).toLocaleString()}<i>원</i></h4>
                                                </div>
                                                <em>{item.new}</em>
                                            </a>                            
                                        </li>
                                    )
                                })
                            }
                            
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

