export const Content0D = () => {
  return (
    <div className="content-0">
      <div className="content-0A">
        <h1> Lesson 4. 대차대조표(Balance sheet, B/S) 주요 포인트</h1>
        <br></br>
        <h3> 1. 부채와 자본의 균형을 확인한다.</h3>
        <p>
          <span style={{ color: "#5400cf" }}>자본 = 부채 + 자본</span> <br></br>
          이 때 부채와 자본의 비중이 적절한지 살펴본다. 부채가 자산을 초과하면
          채무초과 상태이다.
        </p>
        <h3> 2. 유동자산과 유동부채의 균형을 확인한다.</h3>
        <p>
          유동자산이 유동부채보다 크면 단기적인 지불능력에 문제가 없다고 판단할
          수 있다.
        </p>
        <h3> 3. 고정자산을 자본(자기자본)으로 감당할 수 있는 지 확인한다.</h3>
        <ul>
          <li>
            {" "}
            -{" "}
            <span style={{ color: "#5400cf" }}>
              고정자산을 자본 전체로 감당
            </span>{" "}
            : 매우 안전
          </li>
          <li>
            {" "}
            -{" "}
            <span style={{ color: "#5400cf" }}>
              고정자산을 자본과 고정부채로 감당
            </span>{" "}
            : 비교적 안전
          </li>
          <li>
            {" "}
            -{" "}
            <span style={{ color: "#5400cf" }}>
              고정자산의 일부를 유동부채로 감당
            </span>{" "}
            : 그다지 바람직하지 않음
          </li>
        </ul>
      </div>
    </div>
  );
};
