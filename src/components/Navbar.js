import { Link } from "react-router-dom";
import { useState } from "react";
import { ReactComponent as Mainlogo } from "../img/Mainlogo.svg";
import "./Navbar.css";
export const Navbar = () => {
  const [view, setView] = useState(false);
  const handleHover = () => {
    setView((prevView) => (prevView = !prevView));
  };

  return (
    <div id="header">
      <div id="header-top">
        <div id="header-top-right">
          <ul>
            <li>
              <Link class="login" to="/login">
                로그인
              </Link>
              <span>&nbsp;&nbsp; | &nbsp;&nbsp;</span>
            </li>
            <li>
              <Link class="join" to="/login">
                회원가입
              </Link>
              <span CL>&nbsp;&nbsp; | &nbsp;&nbsp;</span>
            </li>
            <li>
              <span class="login" onclick="">
                고객센터
              </span>
              <span>&nbsp;&nbsp; | &nbsp;&nbsp;</span>
            </li>
            <li class="in-select">
              <select>
                <option>연관 사이트</option>
                <option>삼성증권</option>
                <option>NH증권</option>
                <option>한국투자증권</option>
              </select>
            </li>
          </ul>
        </div>
      </div>
      <div id="header-con">
        <Link to="/">
          <Mainlogo />
        </Link>
        <nav id="gnb">
          <ul id="MasterMainMenu">
            <li class="gnb-depth-1">
              <Link class="gnb-depth-1-btn" to="/financeSheetlist">
                {" "}
                재무제표학습
              </Link>
            </li>
            <li class="gnb-depth-1">
              {" "}
              <li class="gnb-depth-1-btn">
                백테스트
                <li class="gnb-depth-2">
                  <li>
                    <Link class="gnb-depth-2-btn"> 튜토리얼</Link>
                    {/* <Link class="gnb-depth-2-btn" to="/tutorial">
                      튜토리얼
                    </Link> */}
                  </li>
                  <li>
                    <Link class="gnb-depth-2-btn" to="/port">
                      포트 만들기
                    </Link>
                  </li>
                </li>
              </li>
            </li>
            <li class="gnb-depth-1">
              <Link class="gnb-depth-1-btn" to="/aboutus">
                퀀티지란?
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
