export const AnswerSubmit = () => {
  return (
      <div className="answers">
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
  );
};
