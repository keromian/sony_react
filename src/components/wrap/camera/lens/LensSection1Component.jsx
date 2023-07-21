import React from 'react';
import './scss/lensSection1.scss';
import { Link } from 'react-router-dom';

export default function LensSection1Component(props) {
    return (
        <section id='lensSection1'>
            <div className="container">
                <div className="gap">
                    <div className="title">
                        <h1>렌즈교환식 카메라</h1>
                    </div>
                    <div className="content">
                        <ul>
                            <li>
                                <Link to='/camera'>
                                    <figure>
                                        <img src="./img/camera/ic_all_on.83929bcb.svg" alt="" />
                                    </figure>
                                    <span>전체보기</span>
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

