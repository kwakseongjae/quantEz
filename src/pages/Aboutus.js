import React, { useState } from 'react';
import { Link } from "react-router-dom";
import "./Aboutus.css";
import { ReactComponent as Logo} from "../img/Mainlogo.svg";
import backtest from "../img/backtestImg.jpg";
import port from "../img/portImg.jpg";
import tax from "../img/taxImg.jpg";

export const Aboutus = () => {
    const [toggle, setToggle] = useState(1)

    function updateToggle(id) {
        setToggle(id)
    }

    return (
        <div className="wrap intro-wrap">
            <div className="intro-container">
                <div className="intro-content">
                    <div className="intro-1">
                        <div className="intro-1-text">
                            <div className="intro-1-text-in">
                                <Link to="/">
                                    <Logo />
                                </Link>
                                <p className="intro-1-text-1">
                                    세상에서 가장 쉬운
                                </p>
                                <p className="intro-1-text-2">
                                    나만의 &nbsp;&nbsp;
                                    <em>퀀트 매니저</em>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="intro-2">
                        <div className='intro-tab'>
                            <ul className='tab-header'>
                                <li className='tab-btn active-tab' onClick={()=> updateToggle(1)}>백테스팅 튜토리얼</li>
                                <li className='tab-btn active-tab' onClick={()=>updateToggle(2)}>포트 만들기</li>
                                <li className='tab-btn active-tab' onClick={()=>updateToggle(3)}>재무제표 학습하기</li>
                            </ul>
                            <div className={toggle === 1 ? "show-contents" : "tabContent"}>
                                <div className='tabConTop'>
                                    <div className='tabConTop-left'>
                                        <p className='text-1'>
                                            <span className='text-1-action'>
                                                퀀티지와 함께하는
                                                <br></br>
                                                백테스팅의 시작!
                                            </span>
                                        </p>
                                        <p className='text-2'>
                                            <span className='text-2-action'>
                                                안내에 따라 포트만들기의 기능을 익히고
                                                <br></br>
                                                다양한 전략을 만들어 보세요
                                            </span>
                                        </p>
                                        <div className='tabCon-btn-box'>
                                            <span className='tabCon-btn'>
                                                <Link to="/tutorial/create-port-tutorial">백테스팅 튜토리얼</Link>
                                            </span>
                                        </div>
                                    </div>
                                    <div className='tabConTop-right'>
                                        <div className='tabConTop-right-bg'>
                                            <img src={backtest} alt=''></img>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={toggle === 2 ? "show-content" : "tabContent"}>
                                <div className='tabConTop'>
                                    <div className='tabConTop-left'>
                                        <p className='text-1'>
                                            <span className='text-1-action'>
                                                나만의 전략을 통해
                                                <br></br>
                                                과거를 분석한다
                                            </span>
                                        </p>
                                        <p className='text-2'>
                                            <span className='text-2-action'>
                                                모멘텀, PER 등 다양한 펙터를 활용해
                                                <br></br>
                                                나만의 투자전략을 만들고 검증해 보세요
                                            </span>
                                        </p>
                                        <div className='tabCon-btn-box'>
                                            <span className='tabCon-btn'>
                                                <Link to="/port/create-port">포트 만들기</Link>
                                            </span>
                                        </div>
                                    </div>
                                    <div className='tabConTop-right'>
                                        <div className='tabConTop-right-bg'>
                                            <img src={port} alt=''></img>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={toggle === 3 ? "show-content" : "tabContent"}>
                                <div className='tabConTop'>
                                    <div className='tabConTop-left'>
                                        <p className='text-1'>
                                            <span className='text-1-action'>
                                                쉽게 배우는
                                                <br></br>
                                                재무제표
                                            </span>
                                        </p>
                                        <p className='text-2'>
                                            <span className='text-2-action'>
                                                투자의 기본 재무제표!
                                                <br></br>
                                                퀀티지와 함께 재무제표 읽는 법에 대해
                                                <br></br>
                                                같이 공부해 보세요
                                            </span>
                                        </p>
                                        <div className='tabCon-btn-box'>
                                            <span className='tabCon-btn'>
                                                <Link to="/financeSheetlist">재무제표</Link>
                                            </span>
                                        </div>
                                    </div>
                                    <div className='tabConTop-right'>
                                        <div className='tabConTop-right-bg'>
                                            <img src={tax} alt=''></img>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='intro-3'>
                        <p className='intro-3-text-1'>
                            <em>튜토리얼부터 실전 포트 만들기까지</em>
                            , 당신의 성공투자 파트너
                            <em> 퀀티지</em>
                        </p>
                        <div className='intro-3-btn-box'>
                            <Link to="/port/create-port" className='intro-3-btn'>퀀티지 시작하기</Link>                        
                        </div>
                    </div>
                </div>
            </div>  
        </div>
    )
}