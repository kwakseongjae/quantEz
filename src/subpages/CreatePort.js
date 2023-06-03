import { BackTest } from '../components/BackTest';
import style from "../components/BackTest.module.css";
import classNames from "classnames/bind";
import arrImg from "../img/icn_arr_r.png";
import undoImg from "../img/icn_undo.png";
import redoImg from "../img/icn_redo.png";
const cx = classNames.bind(style);

export const CreatePort = () => {
    return (
    <>
    <div
      className={cx('pop', 'pop-conditional', 'pop-style-1')}
      id={style.divPopCond}
      style={{ display: "none" }}
    >
      <div className={cx("pop-bg")} />
      <div className={cx("pop-in")}>
        <div className={cx("btn_cls", "pop-close")} onclick="popupCondition()">
          <img src="../img/btn_clsPopup_gray.png" />
        </div>

        <div className={cx("pop-content")}>
          <div className={cx("mb-10")}>
            <input
              type="text"
              placeholder="조건을 단어로 검색해 보세요."
              className={cx("input-srch")}
              style={{ width: "40%" }}
              id={style.ConditionSearch}
              onkeyup="MPortUI.searchPopCondition();"
            />
            <span className={cx("btn button-search mr-10")} />
            <button
              type="button"
              className={cx("btn_small", "btn_white", "mr-5")}
              onclick="window.open('https://docs.google.com/spreadsheets/d/1NFa92_yLFpT0gcN4aWpAEDnnmaJFzneOVlZgn5AH94Y/edit?usp=sharing');"
            >
              조건선택 가이드
            </button>
            <button
              type="button"
              className={cx("btn_small", "btn_white", "mr-5")}
              onclick="window.open('https://docs.google.com/presentation/d/1ACPd4UsVBU7U-X9Hhdk52Yqj5P7aLhxxjY3bTo_sW7U/edit?usp=sharing');"
            >
              조건식작성 가이드
            </button>
          </div>
          {/* 검색박스 */}
          {/* 조건박스 시작 */}
          <div className={cx("input-conditional-content")}>
            {/* 왼쪽 박스 */}
            <div
              className={cx("fl box_condLeft")}
              id={style.ConditionTreeDiv}
              tabindex="0"
              onkeyup="Component.MPortUI.searchPopCondition();"
            >
              <ul id={style.ConditionTree}>
                <li id={style.cmain0} className={cx("depth1")}>
                  <img src="../img/icn_folderOpen.png" />
                  <span className={cx("subtitle_15px")}>종합</span>
                </li>
                <li
                  id={style.csub00}
                  className={cx("depth2")}
                  onclick="Component.MPortUI.openPopConditionTree(0, 0, 2);"
                >
                  <span className={cx("infotxt_15px")}>
                    <img id={style.csubimg00} src="img/icn_folderClose.png" />
                    종합점수
                  </span>
                </li>
                <li
                  id={style.citem000}
                  className={cx("depth3")}
                  onclick="Component.MPortUI.setPopupConditionDetail(1, this, 'depth3');"
                  ondblclick="Component.MPortUI.setPopupConditionDetailAndValue(1, this, 'depth3');"
                  style={{ display: "none" }}
                >
                  <span className={cx("infotxt_15px")}>종합점수</span>
                </li>
                <li
                  id={style.citem001}
                  className={cx("depth3")}
                  onclick="Component.MPortUI.setPopupConditionDetail(2, this, 'depth3');"
                  ondblclick="Component.MPortUI.setPopupConditionDetailAndValue(2, this, 'depth3');"
                  style={{ display: "none" }}
                >
                  <span className={cx("infotxt_15px")}>종합점수순위</span>
                </li>
                <li
                  id={style.csub01}
                  className={cx("depth2")}
                  onclick="Component.MPortUI.openPopConditionTree(0, 1, 3);"
                >
                  <span className={cx("infotxt_15px")}>
                    <img id={style.csubimg01} src="img/icn_folderClose.png" />
                    업종종합점수
                  </span>
                </li>
                <li
                  id={style.citem010}
                  className={cx("depth3")}
                  onclick="Component.MPortUI.setPopupConditionDetail(3, this, 'depth3');"
                  ondblclick="Component.MPortUI.setPopupConditionDetailAndValue(3, this, 'depth3');"
                  style={{ display: "none" }}
                >
                  <span className={cx("infotxt_15px")}>업종종합점수순위</span>
                </li>
                <li
                  id={style.citem011}
                  className={cx("depth3")}
                  onclick="Component.MPortUI.setPopupConditionDetail(4, this, 'depth3');"
                  ondblclick="Component.MPortUI.setPopupConditionDetailAndValue(4, this, 'depth3');"
                  style={{ display: "none" }}
                >
                  <span className={cx("infotxt_15px")}>업종종합점수순위</span>
                </li>
                <li
                  id={style.citem012}
                  className={cx("depth3")}
                  onclick="Component.MPortUI.setPopupConditionDetail(5, this, 'depth3');"
                  ondblclick="Component.MPortUI.setPopupConditionDetailAndValue(5, this, 'depth3');"
                  style={{ display: "none" }}
                >
                  <span className={cx("infotxt_15px")}>업종별종합순위점수</span>
                </li>
                <li id={style.cmain1} className={cx("depth1")}>
                  <img src="../img/icn_folderOpen.png" />
                  <span className={cx("subtitle_15px")}>모멘텀</span>
                </li>
                <li
                  id={style.csub10}
                  className={cx("depth2")}
                  onclick="Component.MPortUI.openPopConditionTree(1, 0, 10);"
                >
                  <span className={cx("infotxt_15px")}>
                    <img id={style.csubimg10} src="../img/icn_folderClose.png" />
                    모멘텀
                  </span>
                </li>
                <li
                  id={style.citem100}
                  className={cx("depth3")}
                  onclick="Component.MPortUI.setPopupConditionDetail(6, this, 'depth3');"
                  ondblclick="Component.MPortUI.setPopupConditionDetailAndValue(6, this, 'depth3');"
                  style={{ display: "none" }}
                >
                  <span className={cx("infotxt_15px")}>모멘텀점수</span>
                </li>
                <li
                  id={style.citem101}
                  className={cx("depth3")}
                  onclick="Component.MPortUI.setPopupConditionDetail(7, this, 'depth3');"
                  ondblclick="Component.MPortUI.setPopupConditionDetailAndValue(7, this, 'depth3');"
                  style={{ display: "none" }}
                >
                  <span className={cx("infotxt_15px")}>모멘텀점수순위</span>
                </li>
                <li
                  id={style.citem102}
                  className={cx("depth3")}
                  onclick="Component.MPortUI.setPopupConditionDetail(8, this, 'depth3');"
                  ondblclick="Component.MPortUI.setPopupConditionDetailAndValue(8, this, 'depth3');"
                  style={{ display: "none" }}
                >
                  <span className={cx("infotxt_15px")}>업종모멘텀점수</span>
                </li>
                <li
                  id={style.citem103}
                  className={cx("depth3")}
                  onclick="Component.MPortUI.setPopupConditionDetail(9, this, 'depth3');"
                  ondblclick="Component.MPortUI.setPopupConditionDetailAndValue(9, this, 'depth3');"
                  style={{ display: "none" }}
                >
                  <span className={cx("infotxt_15px")}>업종모멘텀점수순위</span>
                </li>
                <li
                  id={style.citem104}
                  className={cx("depth3")}
                  onclick="Component.MPortUI.setPopupConditionDetail(10, this, 'depth3');"
                  ondblclick="Component.MPortUI.setPopupConditionDetailAndValue(10, this, 'depth3');"
                  style={{ display: "none" }}
                >
                  <span className={cx("infotxt_15px")}>업종별모멘텀순위점수</span>
                </li>
                <li
                  id={style.citem105}
                  className={cx("depth3")}
                  onclick="Component.MPortUI.setPopupConditionDetail(11, this, 'depth3');"
                  ondblclick="Component.MPortUI.setPopupConditionDetailAndValue(11, this, 'depth3');"
                  style={{ display: "none" }}
                >
                  <span className={cx("infotxt_15px")}>모멘텀첫A</span>
                </li>
                <li
                  id={style.citem106}
                  className={cx("depth3")}
                  onclick="Component.MPortUI.setPopupConditionDetail(12, this, 'depth3');"
                  ondblclick="Component.MPortUI.setPopupConditionDetailAndValue(12, this, 'depth3');"
                  style={{ display: "none" }}
                >
                  <span className={cx("infotxt_15px")}>모멘텀첫A+</span>
                </li>
                <li
                  id={style.citem107}
                  className={cx("depth3")}
                  onclick="Component.MPortUI.setPopupConditionDetail(13, this, 'depth3');"
                  ondblclick="Component.MPortUI.setPopupConditionDetailAndValue(13, this, 'depth3');"
                  style={{ display: "none" }}
                >
                  <span className={cx("infotxt_15px")}>모멘텀A-연속</span>
                </li>
                <li
                  id={style.citem108}
                  className={cx("depth3")}
                  onclick="Component.MPortUI.setPopupConditionDetail(14, this, 'depth3');"
                  ondblclick="Component.MPortUI.setPopupConditionDetailAndValue(14, this, 'depth3');"
                  style={{ display: "none" }}
                >
                  <span className={cx("infotxt_15px")}>모멘텀A+연속</span>
                </li>
                <li
                  id={style.citem109}
                  className={cx("depth3")}
                  onclick="Component.MPortUI.setPopupConditionDetail(15, this, 'depth3');"
                  ondblclick="Component.MPortUI.setPopupConditionDetailAndValue(15, this, 'depth3');"
                  style={{ display: "none" }}
                >
                  <span className={cx("infotxt_15px")}>베타</span>
                </li>
                <li
                  id={style.csub11}
                  className={cx("depth2")}
                  onclick="Component.MPortUI.openPopConditionTree(1, 1, 23);"
                >
                  <span className={cx("infotxt_15px")}>
                    <img id={style.csubimg11} src="../img/icn_folderClose.png" />
                    가격
                  </span>
                </li>
                <li
                  id={style.citem110}
                  className={cx("depth3")}
                  onclick="Component.MPortUI.setPopupConditionDetail(16, this, 'depth3');"
                  ondblclick="Component.MPortUI.setPopupConditionDetailAndValue(16, this, 'depth3');"
                  style={{ display: "none" }}
                >
                  <span className={cx("infotxt_15px")}>가격점수</span>
                </li>
                <li
                  id={style.citem111}
                  className={cx("depth3")}
                  onclick="Component.MPortUI.setPopupConditionDetail(17, this, 'depth3');"
                  ondblclick="Component.MPortUI.setPopupConditionDetailAndValue(17, this, 'depth3');"
                  style={{ display: "none" }}
                >
                  <span className={cx("infotxt_15px")}>상승강도점수</span>
                </li>
                <li
                  id={style.citem112}
                  className={cx("depth3")}
                  onclick="Component.MPortUI.setPopupConditionDetail(18, this, 'depth3');"
                  ondblclick="Component.MPortUI.setPopupConditionDetailAndValue(18, this, 'depth3');"
                  style={{ display: "none" }}
                >
                  <span className={cx("infotxt_15px")}>VRAC점수</span>
                </li>
                <li
                  id={style.citem113}
                  className={cx("depth3")}
                  onclick="Component.MPortUI.setPopupConditionDetail(19, this, 'depth3');"
                  ondblclick="Component.MPortUI.setPopupConditionDetailAndValue(19, this, 'depth3');"
                  style={{ display: "none" }}
                >
                  <span className={cx("infotxt_15px")}>이격도점수</span>
                </li>
                <li
                  id={style.citem114}
                  className={cx("depth3")}
                  onclick="Component.MPortUI.setPopupConditionDetail(20, this, 'depth3');"
                  ondblclick="Component.MPortUI.setPopupConditionDetailAndValue(20, this, 'depth3');"
                  style={{ display: "none" }}
                >
                  <span className={cx("infotxt_15px")}>이격도</span>
                </li>
                <li
                  id={style.citem115}
                  className={cx("depth3")}
                  onclick="Component.MPortUI.setPopupConditionDetail(528, this, 'depth3');"
                  ondblclick="Component.MPortUI.setPopupConditionDetailAndValue(528, this, 'depth3');"
                  style={{ display: "none" }}
                >
                  <span className={cx("infotxt_15px")}>시가</span>
                </li>
                <li
                  id={style.citem116}
                  className={cx("depth3")}
                  onclick="Component.MPortUI.setPopupConditionDetail(529, this, 'depth3');"
                  ondblclick="Component.MPortUI.setPopupConditionDetailAndValue(529, this, 'depth3');"
                  style={{ display: "none" }}
                >
                  <span className={cx("infotxt_15px")}>고가</span>
                </li>
                <li
                  id={style.citem117}
                  className={cx("depth3")}
                  onclick="Component.MPortUI.setPopupConditionDetail(530, this, 'depth3');"
                  ondblclick="Component.MPortUI.setPopupConditionDetailAndValue(530, this, 'depth3');"
                  style={{ display: "none" }}
                >
                  <span className={cx("infotxt_15px")}>저가</span>
                </li>
                <li
                  id={style.citem118}
                  className={cx("depth3")}
                  onclick="Component.MPortUI.setPopupConditionDetail(531, this, 'depth3');"
                  ondblclick="Component.MPortUI.setPopupConditionDetailAndValue(531, this, 'depth3');"
                  style={{ display: "none" }}
                >
                  <span className={cx("infotxt_15px")}>종가</span>
                </li>
                <li
                  id={style.citem119}
                  className={cx("depth3")}
                  onclick="Component.MPortUI.setPopupConditionDetail(22, this, 'depth3');"
                  ondblclick="Component.MPortUI.setPopupConditionDetailAndValue(22, this, 'depth3');"
                  style={{ display: "none" }}
                >
                  <span className={cx("infotxt_15px")}>종가시초가대비율</span>
                </li>
                <li
                  id={style.citem1110}
                  className={cx("depth3")}
                  onclick="Component.MPortUI.setPopupConditionDetail(23, this, 'depth3');"
                  ondblclick="Component.MPortUI.setPopupConditionDetailAndValue(23, this, 'depth3');"
                  style={{ display: "none" }}
                >
                  <span className={cx("infotxt_15px")}>일별주가상승률</span>
                </li>
                <li
                  id={style.citem1111}
                  className={cx("depth3")}
                  onclick="Component.MPortUI.setPopupConditionDetail(25, this, 'depth3');"
                  ondblclick="Component.MPortUI.setPopupConditionDetailAndValue(25, this, 'depth3');"
                  style={{ display: "none" }}
                >
                  <span className={cx("infotxt_15px")}>주간주가상승률1주전</span>
                </li>
                <li
                  id={style.citem1112}
                  className={cx("depth3")}
                  onclick="Component.MPortUI.setPopupConditionDetail(26, this, 'depth3');"
                  ondblclick="Component.MPortUI.setPopupConditionDetailAndValue(26, this, 'depth3');"
                  style={{ display: "none" }}
                >
                  <span className={cx("infotxt_15px")}>월간주가상승률1개월전</span>
                </li>
                <li
                  id={style.citem1113}
                  className={cx("depth3")}
                  onclick="Component.MPortUI.setPopupConditionDetail(27, this, 'depth3');"
                  ondblclick="Component.MPortUI.setPopupConditionDetailAndValue(27, this, 'depth3');"
                  style={{ display: "none" }}
                >
                  <span className={cx("infotxt_15px")}>골든크로스(20일/60일)</span>
                </li>
                <li
                  id={style.citem1114}
                  className={cx("depth3")}
                  onclick="Component.MPortUI.setPopupConditionDetail(28, this, 'depth3');"
                  ondblclick="Component.MPortUI.setPopupConditionDetailAndValue(28, this, 'depth3');"
                  style={{ display: "none" }}
                >
                  <span className={cx("infotxt_15px")}>주가이동평균변화율</span>
                </li>
                <li
                  id={style.citem1115}
                  className={cx("depth3")}
                  onclick="Component.MPortUI.setPopupConditionDetail(29, this, 'depth3');"
                  ondblclick="Component.MPortUI.setPopupConditionDetailAndValue(29, this, 'depth3');"
                  style={{ display: "none" }}
                >
                  <span className={cx("infotxt_15px")}>신고가갱신(52주)</span>
                </li>
                <li
                  id={style.citem1116}
                  className={cx("depth3")}
                  onclick="Component.MPortUI.setPopupConditionDetail(30, this, 'depth3');"
                  ondblclick="Component.MPortUI.setPopupConditionDetailAndValue(30, this, 'depth3');"
                  style={{ display: "none" }}
                >
                  <span className={cx("infotxt_15px")}>신저가갱신(52주)</span>
                </li>
                <li
                  id={style.citem1117}
                  className={cx("depth3")}
                  onclick="Component.MPortUI.setPopupConditionDetail(31, this, 'depth3');"
                  ondblclick="Component.MPortUI.setPopupConditionDetailAndValue(31, this, 'depth3');"
                  style={{ display: "none" }}
                >
                  <span className={cx("infotxt_15px")}>당일고가대비저가변동비율</span>
                </li>
                <li
                  id={style.citem1118}
                  className={cx("depth3")}
                  onclick="Component.MPortUI.setPopupConditionDetail(153, this, 'depth3');"
                  ondblclick="Component.MPortUI.setPopupConditionDetailAndValue(153, this, 'depth3');"
                  style={{ display: "none" }}
                >
                  <span className={cx("infotxt_15px")}>최저가대비상승비율</span>
                </li>
                <li
                  id={style.citem1119}
                  className={cx("depth3")}
                  onclick="Component.MPortUI.setPopupConditionDetail(154, this, 'depth3');"
                  ondblclick="Component.MPortUI.setPopupConditionDetailAndValue(154, this, 'depth3');"
                  style={{ display: "none" }}
                >
                  <span className={cx("infotxt_15px")}>최고가대비하락비율</span>
                </li>
                <li
                  id={style.citem1120}
                  className={cx("depth3")}
                  onclick="Component.MPortUI.setPopupConditionDetail(155, this, 'depth3');"
                  ondblclick="Component.MPortUI.setPopupConditionDetailAndValue(155, this, 'depth3');"
                  style={{ display: "none" }}
                >
                  <span className={cx("infotxt_15px")}>피보나치상승율</span>
                </li>
                <li
                  id={style.citem1121}
                  className={cx("depth3")}
                  onclick="Component.MPortUI.setPopupConditionDetail(156, this, 'depth3');"
                  ondblclick="Component.MPortUI.setPopupConditionDetailAndValue(156, this, 'depth3');"
                  style={{ display: "none" }}
                >
                  <span className={cx("infotxt_15px")}>피보나치하락율</span>
                </li>
                <li
                  id={style.citem1122}
                  className={cx("depth3")}
                  onclick="Component.MPortUI.setPopupConditionDetail(216, this, 'depth3');"
                  ondblclick="Component.MPortUI.setPopupConditionDetailAndValue(216, this, 'depth3');"
                  style={{ display: "none" }}
                >
                  <span className={cx("infotxt_15px")}>일별주가상승율250일변동성</span>
                </li>
                <li
                  id={style.csub12}
                  className={cx("depth2")}
                  onclick="Component.MPortUI.openPopConditionTree(1, 2, 35);"
                >
                  <span className={cx("infotxt_15px")}>
                    <img id={style.csubimg12} src="../img/icn_folderClose.png" />
                    수급
                  </span>
                </li>
                <li
                  id={style.citem120}
                  className={cx("depth3")}
                  onclick="Component.MPortUI.setPopupConditionDetail(32, this, 'depth3');"
                  ondblclick="Component.MPortUI.setPopupConditionDetailAndValue(32, this, 'depth3');"
                  style={{ display: "none" }}
                >
                  <span className={cx("infotxt_15px")}>수급점수</span>
                </li>
                <li
                  id={style.citem121}
                  className={cx("depth3")}
                  onclick="Component.MPortUI.setPopupConditionDetail(33, this, 'depth3');"
                  ondblclick="Component.MPortUI.setPopupConditionDetailAndValue(33, this, 'depth3');"
                  style={{ display: "none" }}
                >
                  <span className={cx("infotxt_15px")}>기관수급점수</span>
                </li>
                <li
                  id={style.citem122}
                  className={cx("depth3")}
                  onclick="Component.MPortUI.setPopupConditionDetail(34, this, 'depth3');"
                  ondblclick="Component.MPortUI.setPopupConditionDetailAndValue(34, this, 'depth3');"
                  style={{ display: "none" }}
                >
                  <span className={cx("infotxt_15px")}>외국인수급점수</span>
                </li>
                <li
                  id={style.citem123}
                  className={cx("depth3")}
                  onclick="Component.MPortUI.setPopupConditionDetail(35, this, 'depth3');"
                  ondblclick="Component.MPortUI.setPopupConditionDetailAndValue(35, this, 'depth3');"
                  style={{ display: "none" }}
                >
                  <span className={cx("infotxt_15px")}>기관누적순매수점수</span>
                </li>
                <li
                  id={style.citem124}
                  className={cx("depth3")}
                  onclick="Component.MPortUI.setPopupConditionDetail(36, this, 'depth3');"
                  ondblclick="Component.MPortUI.setPopupConditionDetailAndValue(36, this, 'depth3');"
                  style={{ display: "none" }}
                >
                  <span className={cx("infotxt_15px")}>외국인누적순매수점수</span>
                </li>
                <li
                  id={style.citem125}
                  className={cx("depth3")}
                  onclick="Component.MPortUI.setPopupConditionDetail(38, this, 'depth3');"
                  ondblclick="Component.MPortUI.setPopupConditionDetailAndValue(38, this, 'depth3');"
                  style={{ display: "none" }}
                >
                  <span className={cx("infotxt_15px")}>거래비율점수2</span>
                </li>
                <li
                  id={style.citem126}
                  className={cx("depth3")}
                  onclick="Component.MPortUI.setPopupConditionDetail(39, this, 'depth3');"
                  ondblclick="Component.MPortUI.setPopupConditionDetailAndValue(39, this, 'depth3');"
                  style={{ display: "none" }}
                >
                  <span className={cx("infotxt_15px")}>거래대금(거래소별)점수</span>
                </li>
                <li
                  id={style.citem127}
                  className={cx("depth3")}
                  onclick="Component.MPortUI.setPopupConditionDetail(40, this, 'depth3');"
                  ondblclick="Component.MPortUI.setPopupConditionDetailAndValue(40, this, 'depth3');"
                  style={{ display: "none" }}
                >
                  <span className={cx("infotxt_15px")}>20일평균거래대금점수</span>
                </li>
                <li
                  id={style.citem128}
                  className={cx("depth3")}
                  onclick="Component.MPortUI.setPopupConditionDetail(41, this, 'depth3');"
                  ondblclick="Component.MPortUI.setPopupConditionDetailAndValue(41, this, 'depth3');"
                  style={{ display: "none" }}
                >
                  <span className={cx("infotxt_15px")}>
                    20일평균거래량대비거래량점수
                  </span>
                </li>
                <li
                  id={style.citem129}
                  className={cx("depth3")}
                  onclick="Component.MPortUI.setPopupConditionDetail(42, this, 'depth3');"
                  ondblclick="Component.MPortUI.setPopupConditionDetailAndValue(42, this, 'depth3');"
                  style={{ display: "none" }}
                >
                  <span className={cx("infotxt_15px")}>거래대금</span>
                </li>
                <li
                  id={style.citem1210}
                  className={cx("depth3")}
                  onclick="Component.MPortUI.setPopupConditionDetail(43, this, 'depth3');"
                  ondblclick="Component.MPortUI.setPopupConditionDetailAndValue(43, this, 'depth3');"
                  style={{ display: "none" }}
                >
                  <span className={cx("infotxt_15px")}>시가총액상위50%이상</span>
                </li>
                <li
                  id={style.citem1211}
                  className={cx("depth3")}
                  onclick="Component.MPortUI.setPopupConditionDetail(44, this, 'depth3');"
                  ondblclick="Component.MPortUI.setPopupConditionDetailAndValue(44, this, 'depth3');"
                  style={{ display: "none" }}
                >
                  <span className={cx("infotxt_15px")}>거래대금상위50%이상</span>
                </li>
                <li
                  id={style.citem1212}
                  className={cx("depth3")}
                  onclick="Component.MPortUI.setPopupConditionDetail(45, this, 'depth3');"
                  ondblclick="Component.MPortUI.setPopupConditionDetailAndValue(45, this, 'depth3');"
                  style={{ display: "none" }}
                >
                  <span className={cx("infotxt_15px")}>거래량</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* 메인 콘텐츠 */}
    <div id={style.content}>
      <div className={cx("area_location")} id={style.locNewPort}>
        <ul>
          <li className={cx("fl")}>
            <p className={cx("fl", "title")}>월봉 백테스팅 포트 만들기</p>
            <p className={cx("fl", "info")}>
              퀀티지가 제공하는 다양한 조건으로 나만의 투자전략을 만들어
              보세요.
            </p>
          </li>
          <li className={cx("fr")}>
            <p className={cx("crumbs")}>
              백테스트
              <span></span>
              월봉 백테스팅 포트 만들기
            </p>
          </li>
        </ul>
      </div>
      {/* real content */}
      <div className={cx("area_content")}>
        {/* flow tab */}
        <div className={cx("section_flowTab")}>
          <ul>
            <li id={style.tabMenu0} style={{ width: "50%" }} className={cx("on")}>
              <p>Step.1 기본 설정</p>
              <span>기본 조건들을 설정하세요.</span>
            </li>
            <li id={style.tabMenu1} style={{ width: "50%" }} class>
              <p>Step 2. 포트 완성!</p>
              <span>백테스팅 포트가 완성되었습니다.</span>
            </li>
          </ul>
        </div>
        {/* flow tab */}
        <div id={style.NewPortSection0}>
          <div className={cx("section_newport")}>
            {/* 포트 제목, 포트 설명 */}
            <div className={cx("port_subBox", "mt-0")}>
              <div className={cx("fl", "box-port-title")}>
                <p className={cx("subtitle_16px")}>포트 제목</p>
                <div>
                  <input
                    type="text"
                    id={style.Name}
                    className={cx("fl")}
                    placeholder="포트폴리오 제목을 입력해주세요."
                    onfocus="inputElBtn('Name');"
                    onblur="inputElBtn('Name');"
                    onkeydown="inputElBtn('Name');"
                  />
                  <span
                    className={cx("fl")}
                    style={{
                      marginLeft: "-25px",
                      width: "15px",
                      marginTop: "10px",
                    }}
                  >
                    <img
                      id={style.btnName}
                      src="../img/icn_delForm.png"
                      className={cx("button-box")}
                      style={{ display: "none" }}
                    />
                  </span>
                </div>
              </div>
              <div className={cx("fr", "box-port-description")}>
                <p className={cx("subtitle_16px")}>
                  포트 설명
                  <span
                    className={cx("infotxt_12px666")}
                    style={{ fontWeight: "normal", paddingLeft: "8px" }}
                  >
                    (선택사항)
                  </span>
                </p>
                <div>
                  <input
                    type="txt"
                    id={style.Description}
                    placeholder="포트폴리오에 대한 설명을 100자 이내로 남겨주세요."
                    className={cx("fl")}
                    style={{ marginTop: "-1px" }}
                    onfocus="inputElBtn('Description');"
                    onblur="inputElBtn('Description');"
                    onkeydown="inputElBtn('Description');"
                  />
                  <div
                    className={cx("fl")}
                    style={{
                      marginLeft: "-5px",
                      width: "15px",
                      marginTop: "10px",
                    }}
                  >
                    <img
                      id={style.btnDescription}
                      src="img/icn_delForm.png"
                      style={{
                        marginLeft: "-25px",
                        cursor: "pointer",
                        display: "none",
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className={cx("box-port-sample")}>
                <p className={cx("subtitle_16px")}>
                  샘플포트 만들기
                  <span
                    className={cx("infotxt_12px666")}
                    style={{ fontWeight: "normal", paddingLeft: "4px" }}
                  >
                    포트? 모르겠다면?
                  </span>
                </p>
                <a
                  id={style.btnSample}
                  className={cx("button-sample")}
                  href="https://genport.newsystock.com/resource/kor_monthly_sample_20220707_v1_8.pdf"
                >
                  따라만 하면 완성! 샘플포트 만들기
                  <img src={arrImg} />
                </a>
              </div>
            </div>
            {/* 포트 제목, 포트 설명 */}
            {/* 기본 조건 */}
            <div className={cx("port_subBox")}>
              <ul>
                <li className={cx("subtitle_16px")}>기본 조건</li>
                <table
                  className={cx("fl", "tbl_vertical")}
                  style={{ width: "220px", marginRight: "13px" }}
                >
                  <colgroup>
                    <col style={{ width: "220px" }} />
                  </colgroup>
                  <thead>
                    <tr>
                      <th>운용자금</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className={cx("new-port-step1", "taC")}>
                        <input
                          type="text"
                          id={style.startAsset}
                          className={cx("text_extrasmall", "taR")}
                          placeholder="5,000"
                          value="5,000"
                          onkeydown="return inputCheckNumOnly(event);"
                          style={{ width: "70px" }}
                        />
                        <span className={cx("bold ml8px")} id={style.StartAssetUnit}>
                          만원
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table
                  className={cx("fl", "tbl_vertical")}
                  style={{ width: "438px", marginRight: "14px" }}
                >
                  <colgroup>
                    <col style={{ width: "500px" }} />
                  </colgroup>
                  <thead>
                    <tr>
                      <th>운용기간</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className={cx("new-port-step1", "taC")}>
                        <div className={cx("port-hight")}>
                          <input
                            type="text"
                            id={style.StartDate}
                            className={cx("text_medium", "taC", "monthpickerSet", "mtz-monthpicker-widgetcontainer")}
                            freedate="20220524"
                          />
                          <span className={cx("bold", "ml8px", "mr8px")}>부터</span>
                          <input
                            type="text"
                            id={style.EndDate}
                            className={cx("text_medium", "taC", "monthpickerSet", "mtz-monthpicker-widgetcontainer")}
                            curdate="2023/05/23"
                            maxdate="2023/05/23"
                          />
                          <span className={cx("bold ml8px")}>까지</span>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table className={cx("fl", "tbl_vertical")} style={{ width: "220px" }}>
                  <colgroup>
                    <col style={{ width: "220px" }} />
                  </colgroup>
                  <thead>
                    <tr>
                      <th>수수료율</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className={cx("new-port-step1", "taC")}>
                        <input
                          type="text"
                          id={style.FeeRate}
                          className={cx("text_extrasmall", "taR")}
                          placeholder="0.100"
                          value="0.100"
                          onkeydown="return inputCheckNumOnly(event);"
                        />
                        <span className={cx("bold ml8px")}>%</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table className={cx("fr", "tbl_vertical")} style={{ width: "220px" }}>
                  <colgroup>
                    <col style={{ width: "220px" }} />
                  </colgroup>
                  <thead>
                    <tr>
                      <th>슬리피지</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className={cx("new-port-step1", "taC")}>
                        <input
                          type="text"
                          id={style.Slippage}
                          className={cx("text_extrasmall", "taR")}
                          placeholder="0.000"
                          value="0.000"
                          onkeydown="return inputCheckNumOnly(event);"
                        />
                        <span className={cx("bold ml8px")}>%</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </ul>
            </div>
            {/* 기본조건 */}
            {/* 매매조건 */}
            <div className={cx("port_subBox")}>
              {/* 매수조건 */}
              <div className={cx("fl", "box_tradeCondition")} style={{ width: "74%" }}>
                <ul>
                  <li className={cx("subtitle_15px")}>
                    <span className={cx("txt_plus")}>매수조건</span>
                  </li>
                  <table
                    className={cx("tbl_vertical")}
                    style={{ marginBottom: "10px" }}
                    id={style.tblBuyPriceTypeNormal}
                  >
                    <thead>
                      <tr>
                        <th className={cx("buy")}>매수 가격기준</th>
                        <th className={cx("buy")}>최대 보유종목 수</th>
                        <th className={cx("buy")}>리밸런싱 기간</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className={cx("taC", "blR")}>
                          <span>전일종가</span>
                          <input
                            type="text"
                            id={style.BuyPriceVal}
                            className={cx("text_extrasmall", "taL", "ml4px")}
                            style={{ borderRadius: "3px 0px 0px 3px" }}
                            value="+5.0"
                            onkeydown="return inputCheckNumOnly(event);"
                          />
                          <span className={cx("bold", "ml4px")}>%</span>
                        </td>
                        <td className={cx("taC", "blR")}>
                          <input
                            type="text"
                            id={style.MaxBuyCount}
                            className={cx("text_extrasmall", "taR")}
                            placeholder="5"
                            value="10"
                            onkeydown="return inputCheckNumOnly(event);"
                          />
                          <span className={cx("bold", "ml4px")}>종목</span>
                        </td>
                        <td className={cx("taC")}>
                          <div className={cx("ml4px")}>
                            <select
                              id={style.ReBalancingCycle}
                              className={cx("select_newport")}
                            >
                              <option value="1" selected="selected">
                                1개월
                              </option>
                              <option value="2">2개월</option>
                              <option value="3">3개월</option>
                              <option value="4">4개월</option>
                              <option value="5">5개월</option>
                              <option value="6">6개월</option>
                              <option value="7">7개월</option>
                              <option value="8">8개월</option>
                              <option value="9">9개월</option>
                              <option value="10">10개월</option>
                              <option value="11">11개월</option>
                              <option value="12">12개월</option>
                            </select>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </ul>
              </div>
              {/* 매수조건 */}
              {/* 매도조건 */}
              <div className={cx("fr", "box_tradeCondition")} style={{ width: "24%" }}>
                <ul>
                  <li className={cx("subtitle_15px")}>
                    <span className={cx("txt_minus")}>매도조건</span>
                  </li>
                  <table
                    className={cx("tbl_vertical")}
                    style={{ marginBottom: "10px" }}
                    id={style.tblStopCondition}
                  >
                    <thead>
                      <tr>
                        <th className={cx("sell")} colspan="2">
                          매도 가격기준
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className={cx("taC")}>
                          <span>전일종가</span>
                          <input
                            type="text"
                            className={cx("text_extrasmall", "taL", "ml4px")}
                            id={style.LogicSellVal}
                            style={{ borderRadius: "3px 0px 0px 3px" }}
                            value="-5.0"
                            onkeydown="return inputCheckNumOnly(event);"
                          />
                          <span className={cx("bold", "ml4px")}>%</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </ul>
              </div>
              {/* 매도조건 */}
            </div>
            {/* 매매조건 */}
            {/* 유니버스 */}
            <div className={cx("port_subBox")}>
              <ul>
                <li>
                  <span className={cx("subtitle_16px", "mr20px")}>유니버스 선택</span>
                  <button type="button" className={cx("btn_small", "btn_white")}>
                    전체선택
                  </button>
                  <button type="button" className={cx("btn_small", "btn_white")}>
                    선택해제
                  </button>
                </li>
                <li id={style.section_univ} className={cx("box_universe")}>
                  <p>
                    <input
                      type="checkbox"
                      id={style['cbUnivKOSPIML-ALL']}
                      className={cx("check_np", "cbuniv")}
                      checked="checked"
                    />
                    <label for="cbUnivKOSPIML-ALL" className={cx("checkbox_label_np")}>
                      코스피 중대형
                    </label>
                  </p>
                  <p>
                    <input
                      type="checkbox"
                      id={style['cbUnivKOSPIMS-ALL']}
                      className={cx("check_np", "cbuniv")}
                      checked="checked"
                    />
                    <label for="cbUnivKOSPIMS-ALL" className={cx("checkbox_label_np")}>
                      코스피 중소형
                    </label>
                  </p>
                  <p>
                    <input
                      type="checkbox"
                      id={style.cbUnivKOSDAQL}
                      className={cx("check_np", "cbuniv")}
                      checked="checked"
                    />
                    <label for="cbUnivKOSDAQL" className={cx("checkbox_label_np")}>
                      코스닥 대형
                    </label>
                  </p>
                  <p>
                    <input
                      type="checkbox"
                      id={style.cbUnivKOSDAQM}
                      className={cx("check_np", "cbuniv")}
                      checked="checked"
                    />
                    <label for="cbUnivKOSDAQM" className={cx("checkbox_label_np")}>
                      코스닥 중형
                    </label>
                  </p>
                  <p>
                    <input
                      type="checkbox"
                      id={style.cbUnivKOSDAQS}
                      className={cx("check_np", "cbuniv")}
                      checked="checked"
                    />
                    <label for="cbUnivKOSDAQS" className={cx("checkbox_label_np")}>
                      코스닥 소형
                    </label>
                  </p>
                  <p>
                    <input
                      type="checkbox"
                      id={style.cbUnivKOSDAQXS}
                      className={cx("check_np", "cbuniv")}
                      checked="checked"
                    />
                    <label for="cbUnivKOSDAQXS" className={cx("checkbox_label_np")}>
                      코스닥 초소형
                    </label>
                  </p>
                  <p>
                    <input
                      type="checkbox"
                      id={style.cbUnivETF}
                      className={cx("check_np", "cbuniv")}
                    />
                    <label for="cbUnivETF" className={cx("checkbox_label_np")}>
                      ETF
                    </label>
                  </p>
                </li>
              </ul>
            </div>
            {/* 유니버스 */}
            {/* 매수조건식 */}
            <div className={cx("port_subBox")}>
              <div className={cx("subtitle_15px", "mb-10")}>
                <span className={cx("txt_plus", "mr-20")}>매수조건식 선택</span>
                <button
                  type="button"
                  className={cx("btn_white", "btn-m")}
                  style={{ lineHeight: "15px", width: "auto" }}
                >
                  불러오기
                </button>
                <button
                  type="button"
                  className={cx("btn_purple", "btn-m")}
                  style={{ lineHeight: "15px", width: "auto" }}
                >
                  저장하기
                </button>
              </div>
              <div className={cx("newport_conditionBox")}>
                <ul id={style.section_buy_condition}>
                  <li className={cx("fl", "addCondition")} onclick="popupCondition()">
                    <p>
                      <span className={cx("button_addCondition")}>+</span>
                      <span className={cx("infotxt_13px333", "bold", "ml8px")}>
                        조건식 추가하기
                      </span>
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            {/* 매수 조건식 */}
            {/* 매수 조건식 설정 */}
            <div className={cx("port_subBox")} style={{ marginTop: "20px" }}>
              <div className={cx("subtitle_15px")}>매수조건식 설정</div>
              <div className={cx("box_padding20")} style={{ overflow: "hidden" }}>
                {/* 조건식 입력 */}
                <div className={cx("box_conditionInput")}>
                  <div className={cx("box-conditionInput-l")}>
                    <div>
                      <input
                        type="text"
                        id={style.BuyCondExp}
                        className={cx("text_small")}
                        placeholder="예) A and B and C and D and E"
                        style={{ width: "90%" }}
                      />
                      <button
                        type="button"
                        id={style.btnBuyUndo}
                        className={cx("button_refresh")}
                      >
                        <img src={undoImg} />
                      </button>
                      <button
                        type="button"
                        id={style.btnBuyRedo}
                        className={cx("button_refresh")}
                      >
                        <img src={redoImg} />
                      </button>
                    </div>
                    <p className={cx("subtitle_14px")} id={style.BuyCondExpTxt}></p>
                  </div>
                  <div className={cx("box-conditionInput-r")}>
                    <div className={cx("mb-5")}>
                      <button
                        type="button"
                        className={cx("ml4px", "btn_medium", "btn_white")}
                      >
                        조건식 설정안내
                      </button>
                      <button type="button" className={cx("btn_medium", "btn_purple")}>
                        조건식 검증하기
                      </button>
                    </div>
                  </div>
                </div>
                {/* 조건식 입력 */}
              </div>
              <table className={cx("tbl_horizon")} style={{ marginTop: "10px" }}>
                <colgroup>
                  <col style={{ width: "160px" }}></col>
                </colgroup>
                <tbody>
                  <tr>
                    <th className={cx("buy")}>매수종목 우선순위</th>
                    <td>
                      <input
                        type="text"
                        id={style.BaseOrderColumn}
                        className={cx("text_medium")}
                        placeholder="조건을 선택해 주세요."
                        style={{
                          width: "300px",
                          marginRight: "30px",
                          cursor: "pointer",
                        }}
                        readonly="readonly"
                      />
                      <button
                        type="button"
                        className={cx("btn_white", "btn_medium")}
                        style={{ lineHeight: "15px", width: "auto" }}
                      >
                        불러오기
                      </button>
                      <button
                        type="button"
                        className={cx("btn_purple", "btn_medium")}
                        style={{ lineHeight: "15px", width: "auto" }}
                      >
                        저장하기
                      </button>
                      <input
                        type="radio"
                        id={style.BaseOrderDirDESC}
                        name="radiog_dark"
                        className={cx("css-radiobtn")}
                        checked="checked"
                      />
                      <label
                        for="BaseOrderDirDESC"
                        className={cx("css-label", "radGroup1", "radGroup2", "mr-10")}
                      >
                        내림차순(높은 값부터)↓
                      </label>
                      <input
                        type="radio"
                        id={style.BaseOrderDirASC}
                        name="radiog_dark"
                        className={cx("css-radiobtn")}
                      />
                      <label
                        for="BaseOrderDirASC"
                        className={cx("css-label", "radGroup1", "radGroup2")}
                      >
                        오름차순(낮은 값부터)↑
                      </label>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table className={cx("tbl_horizon")} style={{ marginTop: "10px" }}>
                <colgroup>
                  <col style={{ width: "160px" }}></col>
                </colgroup>
                <tbody>
                  <tr>
                    <th className={cx("buy")}>매수종목 2차 우선순위</th>
                    <td>
                      <input type="checkbox" id={style.BaseOrder2Use} />
                      <label for="BaseOrder2Use">&nbsp;2차 정렬 사용</label>
                      <input
                        type="text"
                        id={style.BaseOrderColumn2}
                        className={cx("text_medium")}
                        placeholder="조건을 선택해 주세요."
                        style={{
                          width: "300px",
                          marginRight: "30px",
                          cursor: "pointer",
                        }}
                        readonly="readonly"
                      />
                      <button
                        type="button"
                        className={cx("btn_white", "btn_medium")}
                        style={{
                          lineHeight: "15px",
                          width: "auto",
                          display: "none",
                        }}
                      >
                        불러오기
                      </button>
                      <button
                        type="button"
                        className={cx("btn_purple", "btn_medium", "mr-30")}
                        style={{
                          lineHeight: "15px",
                          width: "auto",
                          display: "none",
                        }}
                      >
                        저장하기
                      </button>
                      <input
                        type="radio"
                        id={style.BaseOrderDirDESC2}
                        name="radiog_dark2"
                        className={cx("css-radiobtn")}
                        checked="checked"
                      />
                      <label
                        for="BaseOrderDirDESC2"
                        className={cx("css-label", "radGroup1", "radGroup2", "mr-10")}
                      >
                        내림차순(높은 값부터)↓
                      </label>
                      <input
                        type="radio"
                        id={style.BaseOrderDirASC2}
                        name="radiog_dark2"
                        className={cx("css-radiobtn")}
                      />
                      <label
                        for="BaseOrderDirASC2"
                        className={cx("css-label", "radGroup1", "radGroup2")}
                      >
                        오름차순(낮은 값부터)↑
                      </label>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className={cx("run_backtest_button")} style={{ marginTop: "30px" }}>
            <button
              id={style.btnExecBTE}
              type="button"
              className={cx("btn_extralarge", "btn_purple", "ml8px")}
            >
              <a href="/backTesting_port.html">백테스팅 실행하기</a>
            </button>
          </div>
        </div>
      </div>
    </div>
    </>
    );
  };
  