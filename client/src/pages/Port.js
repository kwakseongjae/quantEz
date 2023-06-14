import React from 'react';
import "./Port.css";
import { Link } from "react-router-dom";

export const Port = () => {
  return (
    <div className='port-container'>
      <div  className='port-content'>
        <div className='port-enter-wrap'>
          <div className='port-enter-box'>
            <div className='port-enter-box-in'>
              <div className='port-enter-item pei-1'>
                <div className='port-enter-item-in'>
                  <div className='img-box'></div>
                  <p className='p-1'>트레이딩 포트</p>
                  <p className='p-2'>
                    다양한 팩터를 활용한 나만의 전략
                    <br></br>
                    알고리즘 트레이딩 포트 만들기
                  </p>
                  <div className='port-enter-btn-item-wrap'>
                    <Link to="/port/create-port" className='port-enter-btn-item'>
                      <div className='port-enter-btn-item-in'>
                        <p className='text-1'>
                          월봉
                        </p>
                        <p className='text-2'>무료</p>            
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
              <div className='port-enter-item pei-2'>
                <div className='port-enter-item-in'>
                  <div className='img-box'></div>
                  <p className='p-1'>자산배분 포트</p>
                  <p className='p-2'>
                    여러 자산군에 대한 분산투자
                    <br></br>
                    자산배분 포트 만들기
                  </p>
                  <div className='port-enter-btn-item-wrap'>
                    <Link className='port-enter-btn-item'>
                      <div className='port-enter-btn-item-in'>
                        <p className='text-1'>
                          일봉
                        </p>
                        <p className='text-2'>무료</p>            
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
