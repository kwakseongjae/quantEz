import { Link } from "react-router-dom";
import { ReactComponent as Mainlogo } from "../img/Mainlogo.svg";
import "./Navbar.css";
export const Navbar = () => {
  return (
    <div id="header-con">
      <Link to="/">
        <Mainlogo />
      </Link>
      <nav id="gnb">
        <ul id="MasterMainMenu">
          <li class="gnb-depth-1">
            <Link class="gnb-depth-1-btn" to="/financeSheet">
              {" "}
              재무제표학습
            </Link>
          </li>
          <li class="gnb-depth-1">
            <Link class="gnb-depth-1-btn" to="/port">
              {" "}
              포트만들기
            </Link>
          </li>
          <li class="gnb-depth-1">
            <Link class="gnb-depth-1-btn" to="/aboutus">
              퀀티지란?
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
