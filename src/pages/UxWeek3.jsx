import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import { useLanguage } from '../contexts/LanguageContext';

const UxWeek3 = () => {
  const { t } = useLanguage();

  return (
    <>
      <SEOHead title="3주차: 고객 여정 맵핑" path="/ux/journey-map" />

      <section className="page-header">
        <div className="container">
          <h1>3주차: 고객 여정 맵핑</h1>
          <p>Customer Journey Map을 이해하고 직접 제작합니다</p>
        </div>
      </section>

      <section className="section lesson-content">
        <div className="container">
          <div className="lesson-body">

            <div className="callout-box">
              <h3>학습 목표</h3>
              <ul>
                <li>고객 여정(Customer Journey)의 개념과 중요성을 이해한다.</li>
                <li>Journey Map의 구성요소(단계, 행동, 감정, 터치포인트, Pain Point)를 파악한다.</li>
                <li>고객 여정 맵 작성의 단계별 프로세스를 학습한다.</li>
                <li>실제 서비스를 대상으로 Journey Map을 제작한다.</li>
                <li>Pain Point에서 콘텐츠 개선 기회를 도출한다.</li>
              </ul>
            </div>

            {/* ========== 고객 여정이란? ========== */}
            <h2>1. 고객 여정(Customer Journey)이란?</h2>

            <h3>1.1 정의</h3>
            <p>
              고객 여정(Customer Journey)은 <strong>고객이 브랜드와 처음 접촉하는 순간부터
              최종 목표를 달성하고 이후까지의 전체 경험 흐름</strong>을 의미합니다.
              고객은 제품을 구매하거나 서비스를 이용할 때 단일한 행동을 하는 것이 아니라,
              여러 단계를 거치며 다양한 감정과 행동을 경험합니다.
            </p>
            <p>
              고객 여정 맵(Customer Journey Map, CJM)은 이러한 여정을 <strong>시각적으로 표현한 도구</strong>로,
              고객의 경험을 한눈에 파악하고 개선 기회를 발견하는 데 핵심적인 역할을 합니다.
            </p>

            <h3>1.2 고객 여정 맵이 중요한 이유</h3>
            <ul>
              <li><strong>고객 관점 전환</strong>: 기업 내부 관점이 아닌 고객의 눈으로 서비스를 바라볼 수 있습니다.</li>
              <li><strong>부서 간 협업</strong>: 마케팅, 디자인, 개발, CS 등 여러 부서가 고객 경험에 대한 공유된 이해를 갖게 됩니다.</li>
              <li><strong>Pain Point 발견</strong>: 고객이 불편을 느끼는 지점을 체계적으로 파악할 수 있습니다.</li>
              <li><strong>기회 도출</strong>: 개선이 필요한 영역과 차별화할 수 있는 기회를 발견합니다.</li>
              <li><strong>우선순위 결정</strong>: 어디에 리소스를 집중해야 하는지 데이터에 기반한 결정을 할 수 있습니다.</li>
            </ul>

            <h3>1.3 여정의 기본 단계</h3>
            <table className="lesson-table">
              <thead>
                <tr><th>단계</th><th>영문</th><th>설명</th><th>예시 (온라인 쇼핑)</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>인지</strong></td>
                  <td>Awareness</td>
                  <td>문제를 인식하거나 브랜드를 처음 알게 됨</td>
                  <td>인스타그램 광고에서 신발 브랜드를 발견</td>
                </tr>
                <tr>
                  <td><strong>탐색</strong></td>
                  <td>Exploration</td>
                  <td>정보를 검색하고 옵션을 비교</td>
                  <td>브랜드 웹사이트를 방문하여 제품 탐색</td>
                </tr>
                <tr>
                  <td><strong>결정</strong></td>
                  <td>Decision</td>
                  <td>구매 또는 가입을 결심</td>
                  <td>리뷰를 읽고 사이즈를 선택하여 장바구니 담기</td>
                </tr>
                <tr>
                  <td><strong>구매</strong></td>
                  <td>Purchase</td>
                  <td>실제 거래가 이루어짐</td>
                  <td>결제 완료 및 주문 확인 이메일 수신</td>
                </tr>
                <tr>
                  <td><strong>사용</strong></td>
                  <td>Usage</td>
                  <td>제품/서비스를 실제로 이용</td>
                  <td>신발을 받아 착용하고 만족도 평가</td>
                </tr>
                <tr>
                  <td><strong>옹호</strong></td>
                  <td>Advocacy</td>
                  <td>긍정적 경험을 주변에 공유</td>
                  <td>SNS에 착용 사진을 올리고 추천</td>
                </tr>
              </tbody>
            </table>

            {/* ========== Journey Map 구성요소 ========== */}
            <h2>2. Journey Map 구성요소</h2>

            <h3>2.1 핵심 구성요소</h3>
            <p>
              고객 여정 맵은 여러 레이어(층)으로 구성됩니다. 각 레이어는 여정의 각 단계에서
              고객의 다른 측면을 보여줍니다.
            </p>
            <table className="lesson-table">
              <thead>
                <tr><th>구성요소</th><th>설명</th><th>기록 방법</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>단계 (Stages)</strong></td>
                  <td>고객 여정을 구분하는 큰 단위</td>
                  <td>인지 → 탐색 → 결정 → 구매 → 사용 → 옹호</td>
                </tr>
                <tr>
                  <td><strong>행동 (Actions)</strong></td>
                  <td>각 단계에서 고객이 수행하는 구체적 행동</td>
                  <td>"검색엔진에서 키워드 검색", "제품 비교" 등</td>
                </tr>
                <tr>
                  <td><strong>생각 (Thoughts)</strong></td>
                  <td>각 단계에서 고객이 품는 생각과 질문</td>
                  <td>"이 제품이 나한테 맞을까?", "배송은 얼마나 걸리지?"</td>
                </tr>
                <tr>
                  <td><strong>감정 (Emotions)</strong></td>
                  <td>각 단계에서 느끼는 감정의 변화</td>
                  <td>감정 곡선으로 표현 (높음/중간/낮음)</td>
                </tr>
                <tr>
                  <td><strong>터치포인트 (Touchpoints)</strong></td>
                  <td>고객이 브랜드와 접촉하는 채널/수단</td>
                  <td>웹사이트, 앱, 이메일, 매장, 고객센터 등</td>
                </tr>
                <tr>
                  <td><strong>Pain Point</strong></td>
                  <td>고객이 불편/불만을 느끼는 지점</td>
                  <td>"배송 추적이 안 돼서 불안하다"</td>
                </tr>
                <tr>
                  <td><strong>기회 (Opportunities)</strong></td>
                  <td>개선하거나 차별화할 수 있는 영역</td>
                  <td>"실시간 배송 추적 알림 제공"</td>
                </tr>
              </tbody>
            </table>

            <h3>2.2 감정 곡선 (Emotion Curve)</h3>
            <p>
              감정 곡선은 여정의 각 단계에서 고객의 감정 상태를 시각적으로 표현한 것입니다.
              감정이 높은 지점(긍정적 경험)과 낮은 지점(부정적 경험)을 파악하여,
              <strong>특히 감정이 급격히 떨어지는 지점에 집중적인 개선이 필요</strong>합니다.
            </p>
            <ul>
              <li><strong>최고점(Peak)</strong>: 고객이 가장 만족하는 순간. 이 경험을 강화해야 합니다.</li>
              <li><strong>최저점(Valley)</strong>: 고객이 가장 불만족하는 순간. 가장 먼저 개선해야 합니다.</li>
              <li><strong>마지막 인상(End)</strong>: 여정의 마지막 경험은 전체 인상에 큰 영향을 미칩니다 (Peak-End Rule).</li>
            </ul>

            <h3>2.3 터치포인트 분석</h3>
            <p>
              터치포인트(Touchpoint)는 고객이 브랜드와 직접 또는 간접적으로 접촉하는 모든 지점입니다.
              디지털과 물리적 터치포인트를 모두 포함하여 빠짐없이 파악하는 것이 중요합니다.
            </p>
            <table className="lesson-table">
              <thead>
                <tr><th>채널 유형</th><th>터치포인트 예시</th><th>콘텐츠 유형</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>디지털 (Owned)</strong></td>
                  <td>웹사이트, 모바일 앱, 이메일</td>
                  <td>제품 정보, UX 카피, 뉴스레터</td>
                </tr>
                <tr>
                  <td><strong>디지털 (Earned)</strong></td>
                  <td>SNS 멘션, 블로그 리뷰, 뉴스 기사</td>
                  <td>사용자 리뷰, PR 기사</td>
                </tr>
                <tr>
                  <td><strong>디지털 (Paid)</strong></td>
                  <td>검색 광고, 디스플레이 광고, 인플루언서</td>
                  <td>광고 카피, 랜딩 페이지</td>
                </tr>
                <tr>
                  <td><strong>오프라인</strong></td>
                  <td>매장, 이벤트, 제품 패키지</td>
                  <td>POP, 브로슈어, 패키지 안내문</td>
                </tr>
                <tr>
                  <td><strong>고객 지원</strong></td>
                  <td>고객센터, 챗봇, FAQ</td>
                  <td>응대 스크립트, 도움말 문서</td>
                </tr>
              </tbody>
            </table>

            {/* ========== 여정 맵 작성 단계 ========== */}
            <h2>3. 여정 맵 작성 단계</h2>

            <h3>3.1 준비 단계</h3>
            <ol>
              <li><strong>목적 정의</strong>: 여정 맵을 왜 만드는지, 어떤 문제를 해결하고 싶은지 명확히 합니다.</li>
              <li><strong>범위 설정</strong>: 전체 여정을 다룰 것인지, 특정 단계에 집중할 것인지 결정합니다.</li>
              <li><strong>페르소나 선택</strong>: 어떤 사용자의 여정을 그릴 것인지 대상 페르소나를 정합니다.</li>
              <li><strong>데이터 수집</strong>: 인터뷰, 설문, 분석 데이터 등 여정 맵에 필요한 정보를 수집합니다.</li>
            </ol>

            <h3>3.2 작성 단계</h3>
            <ol>
              <li><strong>단계 정의</strong>: 고객 여정을 4~6개의 큰 단계로 나눕니다.</li>
              <li><strong>행동 나열</strong>: 각 단계에서 고객이 수행하는 구체적 행동을 기록합니다.</li>
              <li><strong>생각/감정 기록</strong>: 각 단계에서의 고객의 생각과 감정 변화를 기록합니다.</li>
              <li><strong>터치포인트 매핑</strong>: 각 단계에서 사용하는 채널과 접점을 연결합니다.</li>
              <li><strong>Pain Point 표시</strong>: 고객이 불편을 느끼거나 이탈하는 지점을 표시합니다.</li>
              <li><strong>기회 도출</strong>: Pain Point를 해결하기 위한 아이디어를 기록합니다.</li>
            </ol>

            <h3>3.3 작성 도구</h3>
            <ul>
              <li><strong>아날로그</strong>: 화이트보드 + 포스트잇 (워크숍에서 가장 효과적)</li>
              <li><strong>Figma / FigJam</strong>: 협업이 용이한 디지털 도구</li>
              <li><strong>Miro / Mural</strong>: 온라인 화이트보드 도구로 원격 워크숍에 적합</li>
              <li><strong>Smaply / UXPressia</strong>: 여정 맵 전용 도구</li>
              <li><strong>Excel / Google Sheets</strong>: 간단한 매트릭스 형태로 작성 가능</li>
            </ul>

            {/* ========== 사례 분석 ========== */}
            <h2>4. 사례 분석: 커피 주문 앱 여정</h2>

            <h3>4.1 시나리오</h3>
            <p>
              직장인 "박현수(32세)"가 출근 전 모바일 앱으로 커피를 주문하는 여정을 분석합니다.
            </p>

            <h3>4.2 여정 맵 요약</h3>
            <table className="lesson-table">
              <thead>
                <tr><th>단계</th><th>행동</th><th>감정</th><th>터치포인트</th><th>Pain Point</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>앱 실행</strong></td>
                  <td>앱을 열고 로그인</td>
                  <td>보통</td>
                  <td>모바일 앱</td>
                  <td>매번 로그인해야 함</td>
                </tr>
                <tr>
                  <td><strong>메뉴 탐색</strong></td>
                  <td>메뉴를 둘러보고 선택</td>
                  <td>약간 긍정</td>
                  <td>앱 메뉴 화면</td>
                  <td>메뉴가 너무 많아 선택이 어려움</td>
                </tr>
                <tr>
                  <td><strong>커스텀/결제</strong></td>
                  <td>옵션 선택 후 결제</td>
                  <td>보통</td>
                  <td>앱 결제 화면</td>
                  <td>쿠폰 적용이 복잡함</td>
                </tr>
                <tr>
                  <td><strong>대기</strong></td>
                  <td>매장으로 이동하며 대기</td>
                  <td>불안/초조</td>
                  <td>알림, 매장</td>
                  <td>준비 완료 알림이 늦게 옴</td>
                </tr>
                <tr>
                  <td><strong>수령</strong></td>
                  <td>커피를 받아 확인</td>
                  <td>만족</td>
                  <td>매장 카운터</td>
                  <td>주문번호 확인이 어려움</td>
                </tr>
              </tbody>
            </table>

            <h3>4.3 분석 결과</h3>
            <ul>
              <li><strong>최고점</strong>: 자주 주문하는 메뉴를 원터치로 재주문할 수 있을 때 만족도가 가장 높습니다.</li>
              <li><strong>최저점</strong>: 대기 시간 중 준비 상태를 알 수 없을 때 불안감이 가장 큽니다.</li>
              <li><strong>개선 기회</strong>: 실시간 준비 상태 알림, 자동 로그인, 최근 주문 메뉴 바로가기 등을 제안할 수 있습니다.</li>
            </ul>

            {/* ========== 실습 ========== */}
            <h2>5. 실습: Customer Journey Map 제작</h2>

            <h3>5.1 실습 주제</h3>
            <p>
              다음 중 하나를 선택하여 Customer Journey Map을 제작합니다.
            </p>
            <ul>
              <li>대학교 수강신청 과정</li>
              <li>온라인 쇼핑몰 첫 구매 경험</li>
              <li>새로운 앱 가입 및 온보딩 경험</li>
              <li>자신이 선택한 서비스의 특정 여정</li>
            </ul>

            <h3>5.2 제작 가이드</h3>
            <ol>
              <li><strong>페르소나 설정</strong>: 2주차에 작성한 페르소나를 활용하거나 새로 정의합니다.</li>
              <li><strong>단계 정의</strong>: 4~6개 단계로 여정을 나눕니다.</li>
              <li><strong>각 단계별 내용 작성</strong>: 행동, 생각, 감정, 터치포인트, Pain Point를 기록합니다.</li>
              <li><strong>감정 곡선 그리기</strong>: 각 단계의 감정을 곡선으로 연결합니다.</li>
              <li><strong>기회 도출</strong>: Pain Point를 해결할 콘텐츠/디자인 개선 아이디어를 3가지 이상 제안합니다.</li>
            </ol>

            <h3>5.3 결과물 형식</h3>
            <p>
              Figma, FigJam, Miro, 또는 PPT를 활용하여 가로형 레이아웃으로 제작합니다.
              각 단계가 왼쪽에서 오른쪽으로 흐르도록 배치하고,
              행동/생각/감정/터치포인트/Pain Point가 세로 레이어로 정렬되도록 합니다.
            </p>

            {/* ========== 핵심 정리 ========== */}
            <div className="callout-box">
              <h3>핵심 정리</h3>
              <ul>
                <li><strong>고객 여정 맵(CJM)</strong>은 고객이 브랜드와 상호작용하는 전체 경험을 시각화한 도구이다.</li>
                <li>CJM의 핵심 구성요소는 <strong>단계, 행동, 생각, 감정, 터치포인트, Pain Point, 기회</strong>이다.</li>
                <li><strong>감정 곡선</strong>을 통해 고객 경험의 최고점과 최저점을 파악하고, 최저점을 우선적으로 개선한다.</li>
                <li><strong>터치포인트</strong>는 디지털과 오프라인을 모두 포함하며, 각 접점에서의 콘텐츠가 경험을 좌우한다.</li>
                <li>CJM은 <strong>팀 협업 도구</strong>로서 부서 간 고객 이해를 공유하고 우선순위를 합의하는 데 효과적이다.</li>
              </ul>
            </div>

            <div className="lesson-nav">
              <Link to="/ux/research" className="lesson-nav-btn prev">← 2주차: 사용자 리서치</Link>
              <Link to="/ux/content-audit" className="lesson-nav-btn next">4주차: 콘텐츠 감사 →</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default UxWeek3;
