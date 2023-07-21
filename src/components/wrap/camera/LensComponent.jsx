import React from 'react';
import LensSection1Component from './lens/LensSection1Component';
import axios from 'axios';
import LensSection2Component from './lens/LensSection2Component';


export default function LensComponent({setViewProductDetail, dkey}) {
    const [state, setState] = React.useState({
        렌즈: [],
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
                    렌즈:res.data.lens,
                    n:res.data.lens.length
                })
            }
        })
        .catch((err)=>{
            console.log(err)
        });
        
    },[]);
    return (
        <main id='lens'>
            <LensSection1Component/>
            <LensSection2Component 렌즈={state.렌즈} n={state.n} setViewProductDetail={setViewProductDetail} dkey={dkey}/>
        </main>
    );
}

