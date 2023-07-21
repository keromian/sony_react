import React from 'react';
import ServiceSection1 from './service/ServiceSection1';
import ServiceSection2 from './service/ServiceSection2';
import axios from 'axios';
import ViewComponent from './service/notice/ViewComponent';
import WriteComponent from './service/notice/WriteComponent';
import UpdateComponent from './service/notice/UpdateComponent';

export default function ServiceComponent({loginId}) {

    const [data, setData] = React.useState('공지사항');
    const [item, setItem] = React.useState([]);

    const onClickMenu =(value)=>{
        setData(value);
    }


    const [state, setState] = React.useState({
        FAQ: [],
        n:0
    });

    React.useEffect(()=>{
        axios({
            url:'./data/service/faq.json',
            method:'GET'
        })
        .then((res)=>{
            if(res.status===200){
                setState({
                    ...state,
                    FAQ:res.data.faq,
                    Notice:res.data.notice,
                    n:res.data.faq.length
                })
            }
        })
        .catch((err)=>{
            console.log(err)
        });
        
    },[]);

    const [notice, setNotice] = React.useState([]);

    React.useEffect(()=>{

        axios({
            url:'http://keromian.cafe24.com/bbs/bbsNoticeJSON.jsp',
            method:'GET'
        })
        .then((res)=>{
            setNotice(res.data);
            setNotice(res.data.공지사항);

            console.log( res.data )
            console.log( res.data.공지사항 )
            
        })
        .catch((err)=>{
            console.log( err );
        });

    },[]);

    
    return (
        <main id='main'>
            <ServiceSection1 data={data} onClickMenu={onClickMenu} />
            {(data==='공지사항' || data==='FAQ') && <ServiceSection2 setItem={setItem} FAQ={state.FAQ} data={data} notice={notice} setData={setData} loginId={loginId}/>}
            {data==='글보기' && <ViewComponent setData={setData} item={item}/>}
            {data==='글작성' && <WriteComponent setData={setData}/>}
            {data==='수정' && <UpdateComponent setData={setData} setItem={setItem} item={item}/>}            
        </main>
    );
}
