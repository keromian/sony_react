import React from 'react';
import './scss/cameraSection1.scss';
import { Link } from 'react-router-dom';

export default function CameraSection1Component(props) {
    return (
        <section id='cameraSection1'>
            <div className="container">
                <div className="gap">
                    <div className="title">
                        <h1>카메라</h1>
                    </div>
                    <div className="content">
                        <ul>
                            <li>
                                <Link to='/lens'>
                                    <figure>
                                        <img src="./img/camera/m-category-cam-01.png" alt="" />
                                    </figure>
                                    <span>렌즈교환식 카메라</span>
                                </Link>
                            </li>
                            <li>
                                <Link to='/compact'>
                                    <figure>
                                        <img src="./img/camera/m-category-cam-02.png" alt="" />
                                    </figure>
                                    <span>컴팩트 카메라</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

