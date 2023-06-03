import "./FinanceSheetCat.css";
import searchIcon1 from "../img1/search-icon-01.png";
import searchIcon2 from "../img1/search-icon-02.png";
import searchIcon3 from "../img1/search-icon-03.png";
import searchIcon4 from "../img1/search-icon-04.png";
import searchIcon5 from "../img1/search-icon-05.png";
import tabImg1 from "../img1/tabs-image-01.jpg";
import tabImg2 from "../img1/tabs-image-02.jpg";
import tabImg3 from "../img1/tabs-image-03.jpg";
import tabImg4 from "../img1/tabs-image-04.jpg";
import tabImg5 from "../img1/tabs-image-05.jpg";
import { Link } from "react-router-dom";

export const FinanceSheetCat = () => {
  return (
    <div class="popular-categories">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="section-heading">
              <h2>재무제표 학습</h2>
              <h6>쉬운 예시와 함께 재무제표를 학습하세요!</h6>
            </div>
          </div>
          <div class="col-lg-12">
            <div class="naccs">
              <div class="grid">
                <div class="row">
                  <div class="col-lg-3">
                    <div class="menu">
                      <div class="first-thumb active">
                        <div class="thumb">
                          <span class="icon">
                            <img src={searchIcon1} alt="hi1" />
                          </span>
                          재무제표의 기본
                        </div>
                      </div>
                      <div>
                        <div class="thumb">
                          <span class="icon">
                            <img src={searchIcon2} alt="hi2" />
                          </span>
                          창업 1단계
                        </div>
                      </div>
                      <div>
                        <div class="thumb">
                          <span class="icon">
                            <img src={searchIcon3} alt="hi3" />
                          </span>
                          창업 2단계
                        </div>
                      </div>
                      <div>
                        <div class="thumb">
                          <span class="icon">
                            <img src={searchIcon4} alt="hi4" />
                          </span>
                          창업 3단계
                        </div>
                      </div>
                      <div class="last-thumb">
                        <div class="thumb">
                          <span class="icon">
                            <img src={searchIcon5} alt="hi5" />
                          </span>
                          창업 4단계
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-9 align-self-center">
                    <ul class="nacc">
                      <li class="active">
                        <div>
                          <div class="thumb">
                            <div class="row">
                              <div class="col-lg-5 align-self-center">
                                <div class="left-text">
                                  <h4 class="category-head">
                                    반드시 알아야 할 재무제표의 기본 :<br />{" "}
                                    구조와 용어 이해하기
                                  </h4>
                                  <p>
                                    1. 재무회계에서 가장 필수적인 열두 가지
                                    기본원칙을 배운다.
                                    <br />
                                    2. 재무제표를 구성하는 3가지 큰 틀 : <br />
                                    대차대조표, 손익계산서, 현금흐름표
                                  </p>
                                  <div class="main-white-button">
                                    <Link
                                      class="FSstart"
                                      to="/financeSheetlist/financeSheet-trade0"
                                    >
                                      <i class="fa fa-eye"></i>학습 시작하기
                                    </Link>
                                  </div>
                                </div>
                              </div>
                              <div class="col-lg-7 align-self-center">
                                <div class="right-image">
                                  <img src={tabImg1} alt="hi6" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div>
                          <div class="thumb">
                            <div class="row">
                              <div class="col-lg-5 align-self-center">
                                <div class="left-text">
                                  <h4>거래를 통한 재무제표의 응용</h4>
                                  <p>
                                    애플시드(Appleseed)주식회사 창업과 운영
                                    <br />
                                    창업 1단계: 회사 창업자금을 투자 유치하고
                                    함께 일할 직원을 고용한다. <br />
                                    창업 2단계: 생산 개시를 위한 시설 확보 및
                                    인력을 충원한다.
                                  </p>
                                  <div class="main-white-button">
                                    <Link
                                      class="FSstart"
                                      to="/financeSheetlist/financeSheet-trade1"
                                    >
                                      <i class="fa fa-eye"></i>학습 시작하기
                                    </Link>
                                  </div>
                                </div>
                              </div>
                              <div class="col-lg-7 align-self-center">
                                <div class="right-image">
                                  <img src={tabImg2} alt="Foods on the table" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div>
                          <div class="thumb">
                            <div class="row">
                              <div class="col-lg-5 align-self-center">
                                <div class="left-text">
                                  <h4>거래를 통한 재무제표의 응용</h4>
                                  <p>
                                    애플시드(Appleseed)주식회사 창업과 운영
                                    <br />
                                    창업 3단계: 본격적인 제품의 제조공정에
                                    들어간다. <br />
                                    창업 4단계: 고객에게 상품을 효과적으로
                                    홍보하고 판매한다.
                                  </p>
                                  <div class="main-white-button">
                                    <Link
                                      class="FSstart"
                                      to="/financeSheetlist/financeSheet-trade2"
                                    >
                                      <i class="fa fa-eye"></i>학습 시작하기
                                    </Link>
                                  </div>
                                </div>
                              </div>
                              <div class="col-lg-7 align-self-center">
                                <div class="right-image">
                                  <img src={tabImg3} alt="cars in the city" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div>
                          <div class="thumb">
                            <div class="row">
                              <div class="col-lg-5 align-self-center">
                                <div class="left-text">
                                  <h4>거래를 통한 재무제표의 응용</h4>
                                  <p>
                                    애플시드(Appleseed)주식회사 창업과 운영
                                    <br />
                                    창업 5단계: 운영 3개월 후, 중요한 관리업무를
                                    실행한다. <br />
                                    창업 6단계: 성공적인 첫 해를 보내고 기업의
                                    성장을 평가한다.
                                  </p>
                                  <div class="main-white-button">
                                    <Link
                                      class="FSstart"
                                      to="/financeSheetlist/financeSheet-trade3"
                                    >
                                      <i class="fa fa-eye"></i>학습 시작하기
                                    </Link>
                                  </div>
                                </div>
                              </div>
                              <div class="col-lg-7 align-self-center">
                                <div class="right-image">
                                  <img src={tabImg4} alt="Shopping Girl" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div>
                          <div class="thumb">
                            <div class="row">
                              <div class="col-lg-5 align-self-center">
                                <div class="left-text">
                                  <h4>성과 창출을 위한 재무제표의 기법</h4>
                                  <p>재무제표의 세부 구성과 분석</p>
                                  <div class="main-white-button">
                                    <Link
                                      class="FSstart"
                                      to="/financeSheetlist/financeSheet-trade4"
                                    >
                                      <i class="fa fa-eye"></i>학습 시작하기
                                    </Link>
                                  </div>
                                </div>
                              </div>
                              <div class="col-lg-7 align-self-center">
                                <div class="right-image">
                                  <img src={tabImg5} alt="Traveling Beach" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
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
