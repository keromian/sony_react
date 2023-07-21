import React from 'react';
import './scss/noticeView.scss';
import axios from 'axios';

export default function ViewComponent({setData, item}) {
    const onClickDel =(e)=>{
        e.preventDefault();
        
        
        const confirmed = window.confirm('정말로 삭제하시겠습니까?');
        if (!confirmed) {
            return; // 
        }

        axios({
            url:`http://keromian.cafe24.com/bbs/deleteAction.jsp`,
            method: 'POST',
            data:{},
            params: {
                "subject": item.제목,
                "content": item.내용,
                "bbsId":item.번호
            }
            
        })
        .then((res)=>{
    
            
            
            console.log( res );
            console.log( res.data );
            if(res.status===200){
                const result =res.data.result;
                try {                    
                    if( result === false ){
                        alert('본인이 작성한 글만 삭제 할 수 있습니다.');                                                       
                    }
                    else if( result === true ){
                        alert('삭제할 데이터가 없습니다.');                        
                    }
                    else if( result === -1 ){
                        alert('글 삭제 실패했습니다');                        
                    }
                    else{
                        alert('글 삭제 성공했습니다.');                        
                        window.location.pathname='/SERVICE';                       

                    }
                } catch (error) {
                    console.log( error );
                }
            }

           
            // setMenu('글보기');

        })
        .catch((err)=>{
            console.log(`AXIOS 실패! ${err} `)
        });
    }
    return (
        <div id='noticeView'>
            <div className="container">
                <div className="gap">
                    <div className="title">
                        <h2>{item.제목}</h2>
                    </div>
                    <div className="content">
                        <div className="content-header">
                            <ul>
                                <li>
                                    <h3>등록일</h3>
                                    <span>{item.작성일}</span>
                                </li>
                                <li>
                                    <h3>조회수</h3>
                                    <span>{item.조회수}</span>
                                </li>
                            </ul>
                        </div>
                        <div className="content-main">
                            <p>{item.내용}</p>
                        </div>
                        <div className="content-footer">
                            <div className="left-btn btns">
                                <button onClick={()=>window.location.pathname='/SERVICE'}>목록</button>
                            </div>
                            <div className="right-btn btns">
                                <button onClick={()=>setData('수정')}>수정</button>
                                <button onClick={onClickDel}>삭제</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

