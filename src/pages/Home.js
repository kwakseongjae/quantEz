export const Home = () => {
  return (
    <div>
      <ariticle>
        <section class="content">
          <div class="sticky">
            <h1>거래 1</h1>
            <p>
              애플시드 주식회사의 보통주 15만 주(액면가 1달러)를 주당 10달러에
              매각한다.
            </p>
            <p>
              거래: 투자가 그룹이 15만주의 애플시드 보통주에 해당하는 주권을
              현금 150만 달러에 매입하기를 희망하고 있다.
            </p>
            <p>
              1. 투자가 그룹에 돈을 받고 보통주 주권을 발행한다. 그런 후
              은행으로 달려가 애플시드의 기업계좌에 이 돈을 입금한다.
            </p>
            <p>
              2. 현금 150만 달러는 기업의 신규자산이다. 따라서 대차대조표의 현금
              항목에 그만큼의 금액이 늘어난다.
            </p>
            <p>
              3. 신규자산은 그만큼의 부채 또는 자본을 발생시켜야만 한다. 그렇지
              않으면 대차대조표의 균형이 무너지기 때문이다. 따라서 대차대조표의
              자금 항목에 150만 달러를 더한다.
            </p>
            <p>해당 거래 이후 재무제표에서의 변동 사항을 골라보시오.</p>
            <select name="op1">
              <option value="no-change" selected>
                변동없음
              </option>
              <option value="신규주식발행">신규주식발행</option>
            </select>

            <select name="op2">
              <option value="no-change" selected>
                변동없음
              </option>
              <option value="보유현금증가">보유현금증가</option>
            </select>

            <select name="op3">
              <option value="no-change" selected>
                변동없음
              </option>
              <option value="자본금증가">자본금증가</option>
            </select>
          </div>
        </section>
      </ariticle>
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
