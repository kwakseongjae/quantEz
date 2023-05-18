export const Sheets = () => {
  return (
    <div className="sheets">
      {/* 손익계산서 */}
      <aside class="sidebar">
        <table class="FStable">
          <thead>
            <tr>
              <th scope="cols" class="r">
                손익계산서
              </th>
              <th scope="cols"></th>
              <th scope="cols" class="r">
                기초
              </th>
              <th scope="cols" class="r">
                거래
              </th>
              <th scope="cols" class="r">
                합
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row" class="r">
                <div>1</div>
              </th>
              <th class="l">순매출</th>
              <th class="r">$0</th>
              <th class="r">-</th>
              <th class="r">$0</th>
            </tr>
            <tr>
              <th scope="row" class="r">
                <div>2</div>
              </th>
              <th class="l">매출원가</th>
              <th class="r">$0</th>
              <th class="r">-</th>
              <th class="r">$0</th>
            </tr>
            <tr class="special">
              <th scope="row" class="r">
                <div>1-2=3</div>
              </th>
              <th class="l">매출총이익</th>
              <th class="r">$0</th>
              <th class="r">-</th>
              <th class="r">$0</th>
            </tr>
            <tr>
              <th scope="row" class="r">
                <div>4</div>
              </th>
              <th class="l">영업 및 마케팅</th>
              <th class="r">$0</th>
              <th class="r">-</th>
              <th class="r">$0</th>
            </tr>
            <tr>
              <th scope="row" class="r">
                <div>5</div>
              </th>
              <th class="l">연구 및 개발</th>
              <th class="r">$0</th>
              <th class="r">-</th>
              <th class="r">$0</th>
            </tr>
            <tr>
              <th scope="row" class="r">
                <div>6</div>
              </th>
              <th class="l">일반 및 관리</th>
              <th class="r">$0</th>
              <th class="r">-</th>
              <th class="r">$0</th>
            </tr>
            <tr class="special">
              <th scope="row" class="r">
                <div>4+5+6=7</div>
              </th>
              <th class="l">영업비용</th>
              <th class="r">$0</th>
              <th class="r">-</th>
              <th class="r">$0</th>
            </tr>
            <tr class="special">
              <th scope="row" class="r">
                <div>3-7=8</div>
              </th>
              <th class="l">영업이익</th>
              <th class="r">$0</th>
              <th class="r">-</th>
              <th class="r">$0</th>
            </tr>
            <tr>
              <th scope="row" class="r">
                <div>9</div>
              </th>
              <th class="l">이자수익</th>
              <th class="r">$0</th>
              <th class="r">-</th>
              <th class="r">$0</th>
            </tr>
            <tr>
              <th scope="row" class="r">
                <div>10</div>
              </th>
              <th class="l">소득세</th>
              <th class="r">$0</th>
              <th class="r">-</th>
              <th class="r">$0</th>
            </tr>
            <tr class="special">
              <th scope="row" class="r">
                <div>8+9-10=11</div>
              </th>
              <th class="l">순이익</th>
              <th class="r">$0</th>
              <th class="r">-</th>
              <th class="r">$0</th>
            </tr>
          </tbody>
        </table>
        {/* 현금흐름표 */}
        <table class="FStable">
          <thead>
            <tr>
              <th scope="cols" class="r">
                현금흐름표
              </th>
              <th scope="cols"></th>
              <th scope="cols" class="r">
                기초
              </th>
              <th scope="cols" class="r">
                거래
              </th>
              <th scope="cols" class="r">
                합
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row" class="r">
                <div>a</div>
              </th>
              <th class="l">기초현금</th>
              <th class="r">$0</th>
              <th class="r">-</th>
              <th class="r">$0</th>
            </tr>
            <tr>
              <th scope="row" class="r">
                <div>b</div>
              </th>
              <th class="l">현금수취</th>
              <th class="r">$0</th>
              <th class="r">-</th>
              <th class="r">$0</th>
            </tr>
            <tr>
              <th scope="row" class="r">
                <div>c</div>
              </th>
              <th class="l">현금지출</th>
              <th class="r">$0</th>
              <th class="r">-</th>
              <th class="r">$0</th>
            </tr>
            <tr class="special">
              <th scope="row" class="r">
                <div>b-c=d</div>
              </th>
              <th class="l">영업활동으로 인한 현금흐름</th>
              <th class="r">$0</th>
              <th class="r">-</th>
              <th class="r">$0</th>
            </tr>
            <tr>
              <th scope="row" class="r">
                <div>e</div>
              </th>
              <th class="l">고정자산 구매</th>
              <th class="r">$0</th>
              <th class="r">-</th>
              <th class="r">$0</th>
            </tr>
            <tr>
              <th scope="row" class="r">
                <div>f</div>
              </th>
              <th class="l">순차입</th>
              <th class="r">$0</th>
              <th class="r">-</th>
              <th class="r">$0</th>
            </tr>
            <tr>
              <th scope="row" class="r">
                <div>g</div>
              </th>
              <th class="l">소득세 지급</th>
              <th class="r">$0</th>
              <th class="r">-</th>
              <th class="r">$0</th>
            </tr>
            <tr>
              <th scope="row" class="r">
                <div>h</div>
              </th>
              <th class="l">신규 주식의 발행</th>
              <th class="r">$0</th>
              <th class="r">-</th>
              <th class="r">$0</th>
            </tr>
            <tr class="special">
              <th scope="row" class="r">
                <div>a+d-e+f-g+h=i</div>
              </th>
              <th class="l">기말현금</th>
              <th class="r">$0</th>
              <th class="r">-</th>
              <th class="r">$0</th>
            </tr>
          </tbody>
        </table>
        {/* 대차대조표 */}
        <table class="FStable">
          <thead>
            <tr>
              <th scope="cols" class="r">
                대차대조표
              </th>
              <th scope="cols"></th>
              <th scope="cols" class="r">
                기초
              </th>
              <th scope="cols" class="r">
                거래
              </th>
              <th scope="cols" class="r">
                합
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row" class="r">
                <div>A</div>
              </th>
              <th class="l">현금</th>
              <th class="r">$0</th>
              <th class="r">-</th>
              <th class="r">$0</th>
            </tr>
            <tr>
              <th scope="row" class="r">
                <div>B</div>
              </th>
              <th class="l">외상매출금</th>
              <th class="r">$0</th>
              <th class="r">-</th>
              <th class="r">$0</th>
            </tr>
            <tr>
              <th scope="row" class="r">
                <div>C</div>
              </th>
              <th class="l">재고</th>
              <th class="r">$0</th>
              <th class="r">-</th>
              <th class="r">$0</th>
            </tr>
            <tr>
              <th scope="row" class="r">
                <div>D</div>
              </th>
              <th class="l">선급비용</th>
              <th class="r">$0</th>
              <th class="r">-</th>
              <th class="r">$0</th>
            </tr>
            <tr class="special">
              <th scope="row" class="r">
                <div>A+B+C+D=E</div>
              </th>
              <th class="l">유동자산</th>
              <th class="r">$0</th>
              <th class="r">-</th>
              <th class="r">$0</th>
            </tr>
            <tr>
              <th scope="row" class="r">
                <div>F</div>
              </th>
              <th class="l">기타자산</th>
              <th class="r">$0</th>
              <th class="r">-</th>
              <th class="r">$0</th>
            </tr>
            <tr>
              <th scope="row" class="r">
                <div>G</div>
              </th>
              <th class="l">고정자산</th>
              <th class="r">$0</th>
              <th class="r">-</th>
              <th class="r">$0</th>
            </tr>
            <tr>
              <th scope="row" class="r">
                <div>H</div>
              </th>
              <th class="l">감가상각누계액</th>
              <th class="r">$0</th>
              <th class="r">-</th>
              <th class="r">$0</th>
            </tr>
            <tr class="special">
              <th scope="row" class="r">
                <div>G-H=I</div>
              </th>
              <th class="l">순고정자산</th>
              <th class="r">$0</th>
              <th class="r">-</th>
              <th class="r">$0</th>
            </tr>
            <tr class="special">
              <th scope="row" class="r">
                <div>E+F+I=J</div>
              </th>
              <th class="l">총자산</th>
              <th class="r">$0</th>
              <th class="r">-</th>
              <th class="r">$0</th>
            </tr>
            <tr class="special2">
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
            </tr>
            <tr>
              <th scope="row" class="r">
                <div>K</div>
              </th>
              <th class="l">외상매입금</th>
              <th class="r">$0</th>
              <th class="r">-</th>
              <th class="r">$0</th>
            </tr>
            <tr>
              <th scope="row" class="r">
                <div>L</div>
              </th>
              <th class="l">미지급비용</th>
              <th class="r">$0</th>
              <th class="r">-</th>
              <th class="r">$0</th>
            </tr>
            <tr class="special">
              <th scope="row" class="r">
                <div>M</div>
              </th>
              <th class="l">유동성부채</th>
              <th class="r">$0</th>
              <th class="r">-</th>
              <th class="r">$0</th>
            </tr>
            <tr>
              <th scope="row" class="r">
                <div>N</div>
              </th>
              <th class="l">미지급법인세</th>
              <th class="r">$0</th>
              <th class="r">-</th>
              <th class="r">$0</th>
            </tr>
            <tr class="special">
              <th scope="row" class="r">
                <div>K+L+M+N=O</div>
              </th>
              <th class="l">유동부채</th>
              <th class="r">$0</th>
              <th class="r">-</th>
              <th class="r">$0</th>
            </tr>
            <tr>
              <th scope="row" class="r">
                <div>P</div>
              </th>
              <th class="l">장기부채</th>
              <th class="r">$0</th>
              <th class="r">-</th>
              <th class="r">$0</th>
            </tr>
            <tr>
              <th scope="row" class="r">
                <div>Q</div>
              </th>
              <th class="l">자본금</th>
              <th class="r">$0</th>
              <th class="r">-</th>
              <th class="r">$0</th>
            </tr>
            <tr>
              <th scope="row" class="r">
                <div>R</div>
              </th>
              <th class="l">이익잉여금</th>
              <th class="r">$0</th>
              <th class="r">-</th>
              <th class="r">$0</th>
            </tr>
            <tr class="special">
              <th scope="row" class="r">
                <div>Q+R=S</div>
              </th>
              <th class="l">자본총계</th>
              <th class="r">$0</th>
              <th class="r">-</th>
              <th class="r">$0</th>
            </tr>
            <tr class="special">
              <th scope="row" class="r">
                <div>O+P+S=T</div>
              </th>
              <th class="l">부채와 자본총계</th>
              <th class="r">$0</th>
              <th class="r">-</th>
              <th class="r">$0</th>
            </tr>
          </tbody>
        </table>
      </aside>
    </div>
  );
};
