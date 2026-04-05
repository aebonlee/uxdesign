import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import { useLanguage } from '../contexts/LanguageContext';

const UxWeek2 = () => {
  const { t } = useLanguage();

  return (
    <>
      <SEOHead title="2주차: 사용자 리서치 방법론" path="/ux/research" />

      <section className="page-header">
        <div className="container">
          <h1>2주차: 사용자 리서치 방법론</h1>
          <p>리서치 방법의 이해와 페르소나 작성 실습</p>
        </div>
      </section>

      <section className="section lesson-content">
        <div className="container">
          <div className="lesson-body">

            <div className="callout-box">
              <h3>학습 목표</h3>
              <ul>
                <li>사용자 리서치의 개념과 목적을 이해한다.</li>
                <li>정성적/정량적 리서치 방법의 차이를 구분한다.</li>
                <li>사용자 인터뷰와 설문조사를 설계할 수 있다.</li>
                <li>페르소나(Persona)의 구성요소를 이해하고 직접 작성한다.</li>
                <li>리서치 결과에서 사용자 니즈와 인사이트를 도출한다.</li>
              </ul>
            </div>

            {/* ========== 사용자 리서치란? ========== */}
            <h2>1. 사용자 리서치란?</h2>

            <h3>1.1 정의와 목적</h3>
            <p>
              사용자 리서치(User Research)는 <strong>사용자의 행동, 니즈, 동기를 체계적으로 이해하기 위한
              조사 활동</strong>입니다. "우리가 사용자라고 생각하는 것"과 "실제 사용자가 원하는 것" 사이의
              간극을 메우는 것이 사용자 리서치의 핵심 목적입니다.
            </p>
            <p>
              제품이나 서비스를 설계할 때 가정(Assumption)이 아닌 <strong>데이터와 증거(Evidence)</strong>에
              기반한 의사결정을 할 수 있게 해주며, 개발 후반에 발견되는 문제를 사전에 예방하여
              시간과 비용을 크게 절약합니다.
            </p>

            <h3>1.2 리서치를 하는 이유</h3>
            <ul>
              <li><strong>가정 검증</strong>: 팀의 가정이 실제 사용자의 니즈와 부합하는지 확인합니다.</li>
              <li><strong>기회 발견</strong>: 사용자가 겪는 문제점(Pain Point)에서 새로운 기회를 발견합니다.</li>
              <li><strong>우선순위 결정</strong>: 어떤 기능이나 콘텐츠를 먼저 개발해야 하는지 근거를 제공합니다.</li>
              <li><strong>공감 형성</strong>: 팀 전체가 사용자를 깊이 이해하고 공감하게 됩니다.</li>
            </ul>

            <h3>1.3 정성적 vs 정량적 리서치</h3>
            <p>
              사용자 리서치 방법은 크게 정성적(Qualitative) 방법과 정량적(Quantitative) 방법으로 나뉩니다.
              두 가지를 적절히 조합하여 사용하는 것이 가장 효과적입니다.
            </p>
            <table className="lesson-table">
              <thead>
                <tr><th>구분</th><th>정성적 리서치 (Qualitative)</th><th>정량적 리서치 (Quantitative)</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>목적</strong></td>
                  <td>"왜?"를 이해하기 (동기, 맥락, 감정)</td>
                  <td>"얼마나?"를 측정하기 (빈도, 비율, 규모)</td>
                </tr>
                <tr>
                  <td><strong>데이터 유형</strong></td>
                  <td>인터뷰 녹취, 관찰 노트, 인용문</td>
                  <td>수치, 통계, 그래프</td>
                </tr>
                <tr>
                  <td><strong>참여자 수</strong></td>
                  <td>소수 (5~15명)</td>
                  <td>다수 (100명 이상)</td>
                </tr>
                <tr>
                  <td><strong>대표 방법</strong></td>
                  <td>심층 인터뷰, 관찰, 다이어리 스터디</td>
                  <td>설문조사, A/B 테스트, 웹 분석</td>
                </tr>
                <tr>
                  <td><strong>분석 방법</strong></td>
                  <td>주제 분석, 어피니티 다이어그램</td>
                  <td>통계 분석, 차트/그래프 시각화</td>
                </tr>
                <tr>
                  <td><strong>장점</strong></td>
                  <td>깊은 이해, 예상치 못한 발견 가능</td>
                  <td>객관적, 일반화 가능, 비교 용이</td>
                </tr>
                <tr>
                  <td><strong>단점</strong></td>
                  <td>일반화 어려움, 시간 소요</td>
                  <td>이유 파악 어려움, 맥락 부족</td>
                </tr>
              </tbody>
            </table>

            {/* ========== 인터뷰 기법 ========== */}
            <h2>2. 인터뷰 기법</h2>

            <h3>2.1 인터뷰의 종류</h3>
            <p>
              사용자 인터뷰는 가장 널리 사용되는 정성적 리서치 방법입니다.
              인터뷰의 구조화 정도에 따라 세 가지로 분류할 수 있습니다.
            </p>
            <ul>
              <li><strong>구조화 인터뷰(Structured)</strong>: 미리 정해진 질문을 순서대로 묻는 방식. 일관된 데이터 수집에 유리합니다.</li>
              <li><strong>반구조화 인터뷰(Semi-structured)</strong>: 핵심 질문을 준비하되 상황에 따라 추가 질문이 가능한 방식. 가장 일반적으로 사용됩니다.</li>
              <li><strong>비구조화 인터뷰(Unstructured)</strong>: 주제만 정하고 자유롭게 대화하는 방식. 탐색적 리서치에 적합합니다.</li>
            </ul>

            <h3>2.2 좋은 인터뷰 질문의 원칙</h3>
            <table className="lesson-table">
              <thead>
                <tr><th>원칙</th><th>나쁜 예</th><th>좋은 예</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>개방형 질문하기</strong></td>
                  <td>"이 기능이 좋으세요?" (예/아니오)</td>
                  <td>"이 기능을 사용할 때 어떤 경험을 하셨나요?"</td>
                </tr>
                <tr>
                  <td><strong>유도하지 않기</strong></td>
                  <td>"이 디자인이 불편하지 않으셨나요?"</td>
                  <td>"이 화면을 처음 봤을 때 어떤 생각이 드셨나요?"</td>
                </tr>
                <tr>
                  <td><strong>구체적 경험 묻기</strong></td>
                  <td>"보통 어떻게 하세요?"</td>
                  <td>"가장 최근에 이 앱을 사용한 상황을 말씀해주세요."</td>
                </tr>
                <tr>
                  <td><strong>가설이 아닌 사실 묻기</strong></td>
                  <td>"이런 기능이 있으면 쓰시겠어요?"</td>
                  <td>"비슷한 상황에서 어떻게 해결하셨나요?"</td>
                </tr>
              </tbody>
            </table>

            <h3>2.3 인터뷰 진행 팁</h3>
            <ul>
              <li><strong>라포(Rapport) 형성</strong>: 인터뷰 시작 전 가벼운 대화로 편안한 분위기를 만듭니다.</li>
              <li><strong>경청</strong>: 참여자의 말을 끊지 말고, 침묵도 허용합니다. 침묵 후에 중요한 이야기가 나오는 경우가 많습니다.</li>
              <li><strong>"왜?"라고 묻기</strong>: 표면적인 답변 뒤에 숨겨진 진짜 이유를 파악하기 위해 "왜 그렇게 하셨나요?"를 반복합니다.</li>
              <li><strong>기록</strong>: 참여자의 동의를 받고 녹음하며, 핵심 인용문과 관찰 사항을 메모합니다.</li>
              <li><strong>시간 관리</strong>: 30~60분이 적당하며, 시작과 끝 시간을 미리 안내합니다.</li>
            </ul>

            {/* ========== 설문조사 설계 ========== */}
            <h2>3. 설문조사 설계</h2>

            <h3>3.1 설문조사의 장단점</h3>
            <p>
              설문조사(Survey)는 대규모 사용자로부터 정량적 데이터를 수집하는 대표적인 방법입니다.
              인터뷰에서 발견한 인사이트를 검증하거나, 사용자 그룹의 전반적인 경향을 파악하는 데 유용합니다.
            </p>
            <ul>
              <li><strong>장점</strong>: 대규모 데이터 수집 가능, 비용 효율적, 익명성 보장으로 솔직한 응답 확보</li>
              <li><strong>단점</strong>: 깊이 있는 이해 어려움, 질문 설계에 따라 결과가 크게 달라짐, 응답률 관리 필요</li>
            </ul>

            <h3>3.2 설문 설계 원칙</h3>
            <ul>
              <li><strong>목적 명확화</strong>: 설문을 통해 알고 싶은 것을 먼저 정리합니다.</li>
              <li><strong>간결하게</strong>: 질문 수는 10~15개 이내로, 완료 시간은 5~10분 이내로 설계합니다.</li>
              <li><strong>쉬운 질문부터</strong>: 간단한 질문으로 시작하여 점차 복잡한 질문으로 넘어갑니다.</li>
              <li><strong>한 번에 하나만</strong>: 하나의 질문에 두 가지 내용을 담지 않습니다 (이중 질문 금지).</li>
              <li><strong>척도 사용</strong>: 리커트 척도(5점 또는 7점)를 활용하여 정도를 측정합니다.</li>
            </ul>

            <h3>3.3 질문 유형</h3>
            <table className="lesson-table">
              <thead>
                <tr><th>유형</th><th>설명</th><th>예시</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>선택형 (단일)</strong></td>
                  <td>여러 보기 중 하나만 선택</td>
                  <td>가장 자주 사용하는 기기는? (스마트폰 / 태블릿 / PC)</td>
                </tr>
                <tr>
                  <td><strong>선택형 (복수)</strong></td>
                  <td>여러 보기 중 복수 선택 가능</td>
                  <td>자주 이용하는 SNS는? (인스타그램 / 유튜브 / 틱톡 ...)</td>
                </tr>
                <tr>
                  <td><strong>리커트 척도</strong></td>
                  <td>동의 정도를 점수로 표현</td>
                  <td>이 서비스에 만족한다. (1-매우 불만족 ~ 5-매우 만족)</td>
                </tr>
                <tr>
                  <td><strong>순위형</strong></td>
                  <td>항목을 중요도 순으로 배열</td>
                  <td>다음 기능을 중요한 순서대로 나열해주세요.</td>
                </tr>
                <tr>
                  <td><strong>개방형</strong></td>
                  <td>자유롭게 텍스트 입력</td>
                  <td>개선되었으면 하는 점이 있다면 자유롭게 적어주세요.</td>
                </tr>
              </tbody>
            </table>

            {/* ========== 페르소나 작성법 ========== */}
            <h2>4. 페르소나(Persona) 작성법</h2>

            <h3>4.1 페르소나란?</h3>
            <p>
              페르소나는 <strong>리서치 데이터를 기반으로 만든 가상의 사용자 프로필</strong>입니다.
              실제 사용자 그룹의 행동 패턴, 목표, 동기, 불만을 대표하는 인물로,
              팀 전체가 "누구를 위해 디자인하는가?"에 대한 공유된 이해를 갖게 해줍니다.
            </p>
            <p>
              앨런 쿠퍼(Alan Cooper)가 1999년 저서 "The Inmates Are Running the Asylum"에서 처음 제안한 이후,
              UX 디자인의 핵심 도구로 자리잡았습니다.
            </p>

            <h3>4.2 페르소나 구성요소</h3>
            <table className="lesson-table">
              <thead>
                <tr><th>구성요소</th><th>설명</th><th>예시</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>이름 & 사진</strong></td>
                  <td>가상의 이름과 대표 이미지</td>
                  <td>김지현 (29세, 여성)</td>
                </tr>
                <tr>
                  <td><strong>인구통계</strong></td>
                  <td>나이, 직업, 거주지, 가족 구성</td>
                  <td>서울 거주, 마케터, 미혼</td>
                </tr>
                <tr>
                  <td><strong>목표 (Goals)</strong></td>
                  <td>사용자가 달성하고 싶은 것</td>
                  <td>업무 효율을 높이고 빠르게 퇴근하고 싶다</td>
                </tr>
                <tr>
                  <td><strong>불만 (Pain Points)</strong></td>
                  <td>사용자가 겪는 문제와 좌절</td>
                  <td>여러 도구를 번갈아 사용하느라 시간이 낭비된다</td>
                </tr>
                <tr>
                  <td><strong>행동 패턴</strong></td>
                  <td>일상적인 행동 방식과 습관</td>
                  <td>아침에 출근하자마자 이메일과 슬랙을 확인한다</td>
                </tr>
                <tr>
                  <td><strong>기술 숙련도</strong></td>
                  <td>디지털 기술 사용 능력</td>
                  <td>다양한 SaaS 도구를 능숙하게 사용</td>
                </tr>
                <tr>
                  <td><strong>대표 인용문</strong></td>
                  <td>페르소나의 핵심 생각을 담은 한 문장</td>
                  <td>"하나의 도구에서 모든 업무를 처리하고 싶어요."</td>
                </tr>
              </tbody>
            </table>

            <h3>4.3 좋은 페르소나의 조건</h3>
            <ul>
              <li><strong>데이터 기반</strong>: 상상이 아닌 실제 리서치 결과에서 도출되어야 합니다.</li>
              <li><strong>구체적</strong>: "20대 여성" 같은 범주가 아닌, 특정 행동과 동기를 가진 인물이어야 합니다.</li>
              <li><strong>활용 가능</strong>: 디자인 의사결정에 실제로 참고할 수 있어야 합니다.</li>
              <li><strong>공감 유도</strong>: 팀원들이 이 사람을 위해 무언가를 만들고 싶다는 동기를 느끼게 해야 합니다.</li>
              <li><strong>적절한 수</strong>: 주요 페르소나 2~3명이 적당합니다. 너무 많으면 초점이 흐려집니다.</li>
            </ul>

            <h3>4.4 페르소나 작성 절차</h3>
            <ol>
              <li><strong>리서치 수행</strong>: 인터뷰, 설문, 관찰 등을 통해 사용자 데이터를 수집합니다.</li>
              <li><strong>패턴 식별</strong>: 수집된 데이터에서 행동, 목표, 불만의 공통 패턴을 찾습니다.</li>
              <li><strong>그룹핑</strong>: 유사한 패턴을 보이는 사용자들을 그룹으로 묶습니다.</li>
              <li><strong>페르소나 초안 작성</strong>: 각 그룹을 대표하는 가상의 인물을 만듭니다.</li>
              <li><strong>검증 및 정제</strong>: 팀과 함께 검토하고, 리서치 데이터와 대조하여 수정합니다.</li>
            </ol>

            {/* ========== 실습: 페르소나 작성 ========== */}
            <h2>5. 실습: 페르소나 작성</h2>

            <h3>5.1 실습 시나리오</h3>
            <p>
              "대학생을 위한 학습 플래너 앱"을 기획한다고 가정합니다.
              제공된 가상의 인터뷰 데이터를 분석하여 페르소나를 작성해 봅시다.
            </p>

            <h3>5.2 실습 절차</h3>
            <ol>
              <li>제공된 인터뷰 요약 자료를 꼼꼼히 읽습니다.</li>
              <li>사용자별 목표, 불만, 행동 패턴을 포스트잇(또는 디지털 메모)에 하나씩 기록합니다.</li>
              <li>유사한 포스트잇을 그룹으로 묶어 패턴을 식별합니다 (어피니티 다이어그램).</li>
              <li>2~3개의 사용자 그룹을 정의합니다.</li>
              <li>각 그룹을 대표하는 페르소나를 위 구성요소 표에 따라 작성합니다.</li>
              <li>완성된 페르소나를 팀원들과 공유하고 피드백을 반영합니다.</li>
            </ol>

            <h3>5.3 결과물 형식</h3>
            <p>
              A4 1장 분량으로, 이름/사진/인구통계/목표/불만/행동패턴/대표 인용문을
              포함하여 시각적으로 보기 좋게 정리합니다. Figma, PowerPoint, Canva 등을 활용하세요.
            </p>

            {/* ========== 핵심 정리 ========== */}
            <div className="callout-box">
              <h3>핵심 정리</h3>
              <ul>
                <li><strong>사용자 리서치</strong>는 가정이 아닌 데이터에 기반한 의사결정을 가능하게 하는 핵심 활동이다.</li>
                <li><strong>정성적 리서치</strong>는 "왜?"를, <strong>정량적 리서치</strong>는 "얼마나?"를 파악하며, 두 가지를 조합하면 가장 효과적이다.</li>
                <li>인터뷰에서는 <strong>개방형 질문, 구체적 경험 질문</strong>을 사용하고 유도 질문을 피해야 한다.</li>
                <li>설문조사는 <strong>간결하고 명확한 질문 설계</strong>가 핵심이며, 리커트 척도 등 다양한 질문 유형을 활용한다.</li>
                <li><strong>페르소나</strong>는 리서치 데이터를 기반으로 만든 가상의 사용자 프로필로, 이름/목표/불만/행동패턴/대표 인용문 등으로 구성된다.</li>
              </ul>
            </div>

            <div className="lesson-nav">
              <Link to="/ux/intro" className="lesson-nav-btn prev">← 1주차: CXD와 콘텐츠 전략</Link>
              <Link to="/ux/journey-map" className="lesson-nav-btn next">3주차: 고객 여정 맵핑 →</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default UxWeek2;
