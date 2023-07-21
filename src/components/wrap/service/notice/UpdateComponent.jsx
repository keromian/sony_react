import React from 'react';
import axios from 'axios';
import './scss/noticeUpdate.scss';

export default function UpdateComponent({setData, item, setItem}) {
    

   

    const onChangeSubject=(e)=>{
        setItem({
            ...item,
            제목: e.target.value,
        })
    }
    const onChangeContents=(e)=>{
        setItem({
            ...item,
            내용: e.target.value,
        })
    }

    const onSubmitWrite=(e)=>{
        e.preventDefault();
       
        axios({
            url:'http://keromian.cafe24.com/bbs/updateAction.jsp',
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
                        alert('본인이 작성한 글만 수정 할 수 있습니다.');                                                       
                    }
                    else if( result === -1 ){
                        alert('글 수정 실패했습니다');                        
                    }
                    else{
                        alert('글 수정 성공했습니다.');                        
                        setData('글보기');              

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
        <div id='noticeUpdate'>
            <div className='title'>
                <h2>글 수정</h2>
            </div>
            <form  onSubmit={onSubmitWrite}>
                <ul>
                    <li>
                        <label htmlFor="">
                            <span>제목</span>
                            <input 
                                    onChange={onChangeSubject}
                                    type="text" 
                                    name='subject' 
                                    id='subject' 
                                    value={item.제목} 
                                    placeholder='제목을 입력해 주세요' 
                                    autoComplete='off'
                                    />
                        </label>
                    </li>
                    <li>
                        <label htmlFor="">
                            <span>내용</span>
                            <textarea 
                                    onChange={onChangeContents}
                                    name="content" 
                                    id="content"  
                                    placeholder='내용을 입력해 주세요' 
                                    value={item.내용}
                                    ></textarea>
                        </label>
                    </li>
                </ul>
                <div className="btn-box">
                    <button onClick={()=>setData('공지사항')}>취소</button>
                    <button>수정</button>
                </div>
            </form>
        </div>
    );
}

