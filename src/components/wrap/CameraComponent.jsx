import React from 'react';
import CameraSection1Component from './camera/CameraSection1Component';
import CameraSection2Component from './camera/CameraSection2Component';
import axios from 'axios';

export default function CameraComponent({setViewProductDetail, dkey}) {

    const [state, setState] = React.useState({
        카메라: [],
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
                    카메라:res.data.camera,
                    n:res.data.camera.length
                })
            }
        })
        .catch((err)=>{
            console.log(err)
        });
        
    },[]);


    return (
        <main id='camera'>
            <CameraSection1Component/>
            <CameraSection2Component 카메라={state.카메라} n={state.n} setViewProductDetail={setViewProductDetail} dkey={dkey}/>
        </main>
    );
}

