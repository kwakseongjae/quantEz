import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div>
      <Link to="/"> 메인화면</Link>
      <Link to="/port"> 포트만들기</Link>
      <Link to="/financeSheet"> 재무제표학습</Link>
    </div>
  );
};
