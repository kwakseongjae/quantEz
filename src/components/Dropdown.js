import { Link } from "react-router-dom";

export const Dropdown = () => {
  return (
    <>
      <Link className="gnb-depth-1-btn" to="/tutorial">
        튜토리얼
      </Link>
      <Link className="gnb-depth-1-btn" to="/port">
        포트 만들기
      </Link>
    </>
  );
};
