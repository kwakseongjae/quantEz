import style from "./FinanceSheetCat.module.css";
import classNames from "classnames/bind";
// import "./bootstrap.min.css";
// import "./animated.css";
// import "./owl.css";
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

const cx = classNames.bind(style);
export const FinanceSheetCat = () => {
  return (
    <div className={style["popular-categories"]}>
      <div className={style.container}>
        <div className={style.row}>
          <div className={style["col-lg-12"]}>
            <div className={style["section-heading"]}>
              <h2>재무제표 학습</h2>
              <h6>쉬운 예시와 함께 재무제표를 학습하세요!</h6>
            </div>
          </div>
          <div className={style["col-lg-12"]}>
            <div className={style.naccs}>
              <div className={style.grid}>
                <div className={style.row}>
                  <div className={style["col-lg-3"]}>
                    <div className={style.menu}>
                      <div className={`${style.firstthumb} ${style.active}`}>
                        <div className={style.thumb}>
                          <span className={style.icon}>
                            <img src={searchIcon1} alt="hi1" />
                          </span>
                          재무제표의 기본
                        </div>
                      </div>
                      <div>
                        <div className={style.thumb}>
                          <span className={style.icon}>
                            <img src={searchIcon2} alt="hi2" />
                          </span>
                          창업 1단계
                        </div>
                      </div>
                      <div>
                        <div className={style.thumb}>
                          <span className={style.icon}>
                            <img src={searchIcon3} alt="hi3" />
                          </span>
                          창업 2단계
                        </div>
                      </div>
                      <div>
                        <div className={style.thumb}>
                          <span className={style.icon}>
                            <img src={searchIcon4} alt="hi4" />
                          </span>
                          창업 3단계
                        </div>
                      </div>
                      <div className={style["last-thumb"]}>
                        <div className={style.thumb}>
                          <span className={style.icon}>
                            <img src={searchIcon5} alt="hi5" />
                          </span>
                          창업 4단계
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className={`${style["col-lg-9"]} ${style["align-self-center"]}`}
                  >
                    <ul className={style.nacc}>
                      <li className={style.active}>
                        <div>
                          <div className={style.thumb}>
                            <div className={style.row}>
                              <div
                                className={`${style["col-lg-5"]} ${style["align-self-center"]}`}
                              >
                                <div className={style["left-text"]}>
                                  <h4 className={style["category-head"]}>
                                    반드시 알아야 할 재무제표의 기본 :<br />
                                    구조와 용어 이해하기
                                  </h4>
                                  <p>
                                    1. 재무회계에서 가장 필수적인 열두 가지
                                    기본원칙을 배운다.
                                    <br />
                                    2. 재무제표를 구성하는 3가지 큰 틀 : <br />
                                    대차대조표, 손익계산서, 현금흐름표
                                  </p>
                                  <div className={style["main-white-button"]}>
                                    <Link
                                      className={style.FSstart}
                                      to="/financeSheetlist/financeSheet"
                                    >
                                      <i className={style["fa fa-eye"]}></i>학습
                                      시작하기
                                    </Link>
                                  </div>
                                </div>
                              </div>
                              <div
                                className={`${style["col-lg-7"]} ${style["align-self-center"]}`}
                              >
                                <div className={style["right-image"]}>
                                  <img src={tabImg1} alt="hi6" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div>
                          <div className={style.thumb}>
                            <div className={style.row}>
                              <div
                                className={`${style["col-lg-5"]} ${style["align-self-center"]}`}
                              >
                                <div className={style["left-text"]}>
                                  <h4>거래를 통한 재무제표의 응용</h4>
                                  <p>
                                    애플시드(Appleseed)주식회사 창업과 운영
                                    <br />
                                    창업 1단계: 회사 창업자금을 투자 유치하고
                                    함께 일할 직원을 고용한다.
                                  </p>
                                  <div className={style["main-white-button"]}>
                                    <a href="#">
                                      <i className={style["fa fa-eye"]}></i>학습
                                      시작하기
                                    </a>
                                  </div>
                                </div>
                              </div>
                              <div
                                className={`${style["col-lg-7"]} ${style["align-self-center"]}`}
                              >
                                <div className={style["right-image"]}>
                                  <img src={tabImg2} alt="Foods on the table" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div>
                          <div className={style.thumb}>
                            <div className={style.row}>
                              <div
                                className={`${style["col-lg-5"]} ${style["align-self-center"]}`}
                              >
                                <div className={style["left-text"]}>
                                  <h4>Best car rentals for your trips!</h4>
                                  <p>
                                    Did you know? You can get the best free HTML
                                    templates on Too CSS blog. Visit the blog
                                    pages and explore fresh and latest website
                                    templates.
                                  </p>
                                  <div className={style["main-white-button"]}>
                                    <a href="#">
                                      <i className={style["fa fa-eye"]}></i>{" "}
                                      More Listing
                                    </a>
                                  </div>
                                </div>
                              </div>
                              <div
                                className={`${style["col-lg-7"]} ${style["align-self-center"]}`}
                              >
                                <div className={style["right-image"]}>
                                  <img src={tabImg3} alt="cars in the city" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div>
                          <div className={style.thumb}>
                            <div className={style.row}>
                              <div
                                className={`${style["col-lg-5"]} ${style["align-self-center"]}`}
                              >
                                <div className={style["left-text"]}>
                                  <h4>Shopping List: Images from Unsplash</h4>
                                  <p>
                                    Image credits go to Unsplash website that
                                    provides free stock photos for anyone.
                                    Images used in this Plot Listing template
                                    are from Unsplash.
                                  </p>
                                  <div className={style["main-white-button"]}>
                                    <a href="#">
                                      <i className={style["fa fa-eye"]}></i>{" "}
                                      Discover More
                                    </a>
                                  </div>
                                </div>
                              </div>
                              <div
                                className={`${style["col-lg-7"]} ${style["align-self-center"]}`}
                              >
                                <div className={style["right-image"]}>
                                  <img src={tabImg4} alt="Shopping Girl" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div>
                          <div className={style.thumb}>
                            <div className={style.row}>
                              <div
                                className={`${style["col-lg-5"]} ${style["align-self-center"]}`}
                              >
                                <div className={style["left-text"]}>
                                  <h4>
                                    Information and Safety Tips for Traveling
                                  </h4>
                                  <p>
                                    You are allowed to use this template for
                                    your commercial websites. You are NOT
                                    allowed to redistribute this template ZIP
                                    file on any Free CSS collection websites.
                                  </p>
                                  <div className={style["main-white-button"]}>
                                    <a
                                      rel="nofollow"
                                      href="https://templatemo.com/contact"
                                    >
                                      <i className={style["fa fa-eye"]}></i>{" "}
                                      Read More
                                    </a>
                                  </div>
                                </div>
                              </div>
                              <div
                                className={`${style["col-lg-7"]} ${style["align-self-center"]}`}
                              >
                                <div className={style["right-image"]}>
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
