import React from 'react';
import axios from 'axios';
import './scss/noticeWrite.scss';

export default function WriteComponent({setData}) {

    

    const [state, setState] = React.useState({
        subject:'',
        content:''
        
    });
    const {subject, content} = state;

   

    const onChangeSubject=(e)=>{
        setState({
            ...state,
            subject: e.target.value,
        })
    }
    const onChangeContents=(e)=>{
        setState({
            ...state,
            content: e.target.value,
        })
    }

    const onSubmitWrite=(e)=>{
        e.preventDefault();
       
        axios({
            url:'http://keromian.cafe24.com/bbs/writeAction.jsp',
            method: 'POST',
            data:{},
            params: {
                "subject": subject,
                "content": content
            }
        })
        .then((res)=>{
    
            console.log( res );
            console.log( res.data );
            window.location.pathname='/SERVICE';

        })
        .catch((err)=>{
            console.log(`AXIOS 실패! ${err} `)
        });   
                 
    }
    return (
        <div id='noticeWrite'>
            <div className='title'>
                <h2>글 작성</h2>
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
                                    value={subject} 
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
                                    value={content}
                                    ></textarea>
                        </label>
                    </li>
                </ul>
                <div className="btn-box">
                    <button onClick={()=>setData('공지사항')}>취소</button>
                    <button>등록</button>
                </div>
            </form>
        </div>
    );
}

