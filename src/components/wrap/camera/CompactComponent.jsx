import React from 'react';
import CompactSection1Component from './compact/CompactSection1Component';
import axios from 'axios';
import CompactSection2Component from './compact/CompactSection2Component';

export default function CompactComponent({setViewProductDetail, dkey}) {
    const [state, setState] = React.useState({
        컴팩트: [],
        n:0
    });

    React.useEffect(()=>{
        axios({
            url:'./data/camera/camera.json',
            method:'GET'
        })
        .then((res)=>{
            if(res.status===200){
                setState({
                    ...state,
                    컴팩트:res.data.compact,
                    n:res.data.compact.length
                })
            }
        })
        .catch((err)=>{
            console.log(err)
        });
        
    },[]);

    
    
    return (
        <main id='compact'>
            <CompactSection1Component/>
            <CompactSection2Component 컴팩트={state.컴팩트} n={state.n} setViewProductDetail={setViewProductDetail} dkey={dkey}/>
        </main>
    );
}

