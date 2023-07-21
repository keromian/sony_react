import React from 'react';
import './scss/section4.scss';

export default function Section4Component(props) {
    return (
        <section id='introSection4'>
            <div className="container">
                <div className="gap">
                    <div className="title"><h2>PRODUCT</h2></div>
                    <div className="content">
                        <ul>
                            <li>
                                <a href="!#">
                                    <div className="img-box">
                                        <img src="./img/intro/main_prod_camera.24473fcf.png" alt="" />
                                    </div>
                                    <div className="txt-box">
                                        <h3>Camera</h3>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="!#">
                                    <div className="img-box">
                                        <img src="./img/intro/main_prod_vcamera.7e8353a1.png" alt="" />
                                    </div>
                                    <div className="txt-box">
                                        <h3>Video Camera</h3>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="!#">
                                    <div className="img-box">
                                        <img src="./img/intro/main_prod_audio.c1aa7b96.png" alt="" />
                                    </div>
                                    <div className="txt-box">
                                        <h3>Audio</h3>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="!#">
                                    <div className="img-box">
                                        <img src="./img/intro/main_prod_ps.e4346725.png" alt="" />
                                    </div>
                                    <div className="txt-box">
                                        <h3>PlayStation®</h3>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

