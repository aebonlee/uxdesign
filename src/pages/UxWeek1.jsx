import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import { useLanguage } from '../contexts/LanguageContext';

const UxWeek1 = () => {
  const { t } = useLanguage();

  return (
    <>
      <SEOHead title="1주차: CXD와 콘텐츠 전략 개요" path="/ux/intro" />

      <section className="page-header">
        <div className="container">
          <h1>1주차: CXD와 콘텐츠 전략 개요</h1>
          <p>고객경험디자인의 개념과 콘텐츠 전략의 역할을 이해합니다</p>
        </div>
      </section>

      <section className="section lesson-content">
        <div className="container">
          <div className="lesson-body">

            <div className="callout-box">
              <h3>학습 목표</h3>
              <ul>
                <li>고객경험디자인(CXD)의 개념과 중요성을 이해한다.</li>
                <li>콘텐츠 전략의 정의와 역할을 파악한다.</li>
                <li>CX(고객경험)와 UX(사용자경험)의 차이를 구분한다.</li>
                <li>CXD에서 콘텐츠가 수행하는 역할을 설명할 수 있다.</li>
                <li>성공적인 CXD 사례를 분석하고 시사점을 도출한다.</li>
              </ul>
            </div>

            {/* ========== CXD란? ========== */}
            <h2>1. 고객경험디자인(CXD)이란?</h2>

            <h3>1.1 정의</h3>
            <p>
              고객경험디자인(Customer Experience Design, CXD)은 <strong>고객이 브랜드와 상호작용하는 모든 접점(Touchpoint)에서
              일관되고 긍정적인 경험을 설계</strong>하는 전략적 접근 방법입니다.
              단순히 제품이나 서비스의 기능을 설계하는 것을 넘어, 고객이 브랜드를 인지하는 순간부터
              구매, 사용, 재구매에 이르는 전체 여정을 포괄적으로 디자인합니다.
            </p>
            <p>
              CXD는 마케팅, 디자인, 기술, 고객 서비스 등 여러 분야가 협력하여 고객 중심의 경험을 만들어내는
              <strong>다학제적(Multidisciplinary) 접근</strong>을 필요로 합니다.
            </p>

            <h3>1.2 CX vs UX: 무엇이 다른가?</h3>
            <p>
              CX(Customer Experience)와 UX(User Experience)는 자주 혼용되지만, 범위와 초점에서 명확한 차이가 있습니다.
              UX가 디지털 제품이나 서비스 내에서의 사용 경험에 집중한다면,
              CX는 브랜드와 고객 간의 모든 상호작용을 아우르는 더 넓은 개념입니다.
            </p>
            <table className="lesson-table">
              <thead>
                <tr><th>구분</th><th>CX (고객경험)</th><th>UX (사용자경험)</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>범위</strong></td>
                  <td>브랜드와의 전체 상호작용 (온/오프라인 전체)</td>
                  <td>특정 제품/서비스 내 사용 경험</td>
                </tr>
                <tr>
                  <td><strong>접점</strong></td>
                  <td>매장, 광고, 고객센터, 웹사이트, 앱 등 전체</td>
                  <td>웹사이트, 모바일 앱, 소프트웨어 등 디지털 제품</td>
                </tr>
                <tr>
                  <td><strong>관점</strong></td>
                  <td>고객(Customer) 관점</td>
                  <td>사용자(User) 관점</td>
                </tr>
                <tr>
                  <td><strong>측정 지표</strong></td>
                  <td>NPS, CSAT, CLV, 이탈률</td>
                  <td>Task Success Rate, SUS, 사용성 테스트 결과</td>
                </tr>
                <tr>
                  <td><strong>담당 부서</strong></td>
                  <td>마케팅, CS, 사업부 등 전사적</td>
                  <td>디자인팀, 프로덕트팀</td>
                </tr>
                <tr>
                  <td><strong>시간축</strong></td>
                  <td>장기적 관계 (인지-구매-충성)</td>
                  <td>특정 태스크 수행 시간</td>
                </tr>
              </tbody>
            </table>

            <h3>1.3 CXD가 중요한 이유</h3>
            <ul>
              <li><strong>차별화 요소</strong>: 제품과 가격이 비슷한 시대에 경험이 핵심 경쟁력이 됩니다. Gartner에 따르면 기업의 89%가 고객경험을 주요 경쟁 기반으로 인식합니다.</li>
              <li><strong>고객 충성도</strong>: 좋은 경험을 한 고객은 반복 구매 가능성이 5배 높고, 경쟁사로 이탈할 확률이 4배 낮습니다.</li>
              <li><strong>매출 영향</strong>: PwC 조사에 따르면 소비자의 73%가 구매 결정에 고객경험을 중요한 요소로 꼽았습니다.</li>
              <li><strong>비용 절감</strong>: 좋은 CX는 고객 문의와 불만을 줄이고, 자연스러운 구전 마케팅을 유발합니다.</li>
            </ul>

            {/* ========== 콘텐츠 전략 ========== */}
            <h2>2. 콘텐츠 전략의 정의와 역할</h2>

            <h3>2.1 콘텐츠 전략이란?</h3>
            <p>
              콘텐츠 전략(Content Strategy)은 <strong>유용하고 사용 가능한 콘텐츠의 생성, 발행, 관리를 위한 계획 수립</strong>을
              의미합니다. 2009년 크리스틴 할버슨(Kristina Halvorson)이 저서 "Content Strategy for the Web"에서
              체계화한 이 개념은, 단순한 콘텐츠 제작을 넘어 비즈니스 목표와 사용자 요구를 연결하는 전략적 프레임워크입니다.
            </p>
            <p>
              콘텐츠 전략가는 <strong>"적절한 콘텐츠를, 적절한 사람에게, 적절한 시점에, 적절한 채널로"</strong> 전달하는 것을 목표로 합니다.
            </p>

            <h3>2.2 콘텐츠 전략의 구성요소</h3>
            <table className="lesson-table">
              <thead>
                <tr><th>구성요소</th><th>설명</th><th>주요 활동</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>콘텐츠 기획</strong></td>
                  <td>어떤 콘텐츠를 왜 만들 것인지 결정</td>
                  <td>목표 설정, 타겟 분석, 콘텐츠 유형 정의</td>
                </tr>
                <tr>
                  <td><strong>콘텐츠 제작</strong></td>
                  <td>실제 콘텐츠를 생성하는 과정</td>
                  <td>카피라이팅, 디자인, 영상 제작, 편집</td>
                </tr>
                <tr>
                  <td><strong>콘텐츠 관리</strong></td>
                  <td>콘텐츠의 발행, 유지보수, 폐기 관리</td>
                  <td>CMS 운영, 콘텐츠 감사, 업데이트 일정 관리</td>
                </tr>
                <tr>
                  <td><strong>콘텐츠 거버넌스</strong></td>
                  <td>콘텐츠 품질과 일관성을 보장하는 체계</td>
                  <td>스타일 가이드, 워크플로우, 역할/책임 정의</td>
                </tr>
                <tr>
                  <td><strong>콘텐츠 분석</strong></td>
                  <td>콘텐츠 성과를 측정하고 개선</td>
                  <td>KPI 설정, 데이터 분석, A/B 테스트</td>
                </tr>
              </tbody>
            </table>

            <h3>2.3 콘텐츠 전략이 중요한 이유</h3>
            <ul>
              <li><strong>일관성 확보</strong>: 브랜드의 메시지와 톤이 모든 채널에서 통일됩니다.</li>
              <li><strong>효율성 향상</strong>: 계획 없이 콘텐츠를 만드는 것보다 체계적으로 접근할 때 리소스를 절약할 수 있습니다.</li>
              <li><strong>사용자 가치 제공</strong>: 사용자가 필요로 하는 정보를 적시에 제공하여 신뢰를 구축합니다.</li>
              <li><strong>비즈니스 목표 달성</strong>: 콘텐츠가 전환, 인지도, 충성도 등 비즈니스 KPI에 직접 기여합니다.</li>
            </ul>

            {/* ========== CXD에서 콘텐츠의 역할 ========== */}
            <h2>3. CXD에서 콘텐츠의 역할</h2>

            <h3>3.1 콘텐츠는 경험의 핵심이다</h3>
            <p>
              고객경험의 대부분은 콘텐츠를 통해 전달됩니다. 웹사이트의 안내 문구, 앱의 버튼 텍스트,
              이메일의 제목, 챗봇의 응답까지 모든 것이 콘텐츠입니다.
              좋은 CXD는 <strong>각 접점에서 고객이 필요로 하는 콘텐츠를 최적의 형태로 제공</strong>하는 것에서 시작합니다.
            </p>

            <h3>3.2 고객 여정별 콘텐츠 역할</h3>
            <table className="lesson-table">
              <thead>
                <tr><th>여정 단계</th><th>고객의 상태</th><th>콘텐츠 역할</th><th>콘텐츠 예시</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>인지(Awareness)</strong></td>
                  <td>문제를 인식하거나 브랜드를 처음 접함</td>
                  <td>관심 유도, 정보 제공</td>
                  <td>블로그, SNS 포스트, 광고 카피</td>
                </tr>
                <tr>
                  <td><strong>고려(Consideration)</strong></td>
                  <td>여러 옵션을 비교하고 탐색</td>
                  <td>신뢰 구축, 차별점 전달</td>
                  <td>제품 비교, 리뷰, 사례 연구</td>
                </tr>
                <tr>
                  <td><strong>전환(Conversion)</strong></td>
                  <td>구매 또는 가입을 결정</td>
                  <td>행동 촉진, 불안 해소</td>
                  <td>CTA 버튼, 가격 안내, FAQ</td>
                </tr>
                <tr>
                  <td><strong>유지(Retention)</strong></td>
                  <td>제품/서비스를 지속적으로 사용</td>
                  <td>가치 재확인, 관계 유지</td>
                  <td>온보딩 가이드, 뉴스레터, 도움말</td>
                </tr>
                <tr>
                  <td><strong>옹호(Advocacy)</strong></td>
                  <td>브랜드를 주변에 추천</td>
                  <td>공유 유도, 커뮤니티 형성</td>
                  <td>리퍼럴 프로그램, UGC, 후기 요청</td>
                </tr>
              </tbody>
            </table>

            <h3>3.3 콘텐츠 경험 설계의 3요소</h3>
            <ul>
              <li><strong>유용성(Useful)</strong>: 고객이 실제로 필요로 하는 정보나 기능을 제공하는가?</li>
              <li><strong>사용성(Usable)</strong>: 콘텐츠를 쉽게 찾고, 이해하고, 활용할 수 있는가?</li>
              <li><strong>매력성(Desirable)</strong>: 콘텐츠가 시각적, 감정적으로 매력적인가?</li>
            </ul>

            {/* ========== 성공 사례 ========== */}
            <h2>4. 성공 사례 분석</h2>

            <h3>4.1 Apple: 일관된 콘텐츠 경험</h3>
            <p>
              Apple은 CXD의 대표적 성공 사례입니다. 제품 패키징부터 웹사이트, 매장(Apple Store),
              고객 지원(Genius Bar)에 이르기까지 <strong>모든 접점에서 일관된 브랜드 경험</strong>을 제공합니다.
            </p>
            <ul>
              <li><strong>미니멀한 디자인 언어</strong>: 제품, 웹사이트, 매장 모두 같은 디자인 철학 적용</li>
              <li><strong>스토리텔링 중심의 제품 페이지</strong>: 스펙 나열 대신 사용자 경험 중심의 서사 구조</li>
              <li><strong>통합적 고객 지원</strong>: Apple Support 앱, Genius Bar, 온라인 커뮤니티가 연결된 경험</li>
              <li><strong>감성적 카피라이팅</strong>: "Shot on iPhone" 캠페인처럼 기술을 경험으로 번역</li>
            </ul>

            <h3>4.2 Airbnb: 사용자 중심 콘텐츠</h3>
            <p>
              Airbnb는 콘텐츠를 통해 <strong>신뢰와 소속감</strong>이라는 가치를 전달합니다.
              "Belong Anywhere"라는 슬로건 아래 모든 콘텐츠가 하나의 메시지를 향합니다.
            </p>
            <ul>
              <li><strong>사용자 생성 콘텐츠(UGC)</strong>: 실제 게스트의 리뷰와 사진이 핵심 콘텐츠</li>
              <li><strong>호스트 스토리</strong>: 호스트의 이야기를 통해 공간에 감정적 가치 부여</li>
              <li><strong>현지 경험 가이드</strong>: 여행지의 로컬 문화를 소개하는 콘텐츠로 차별화</li>
              <li><strong>명확한 UX 라이팅</strong>: 예약 과정에서 불안을 줄이는 안내 메시지</li>
            </ul>

            <h3>4.3 토스(Toss): 금융의 콘텐츠 혁신</h3>
            <p>
              국내 핀테크 기업 토스는 <strong>복잡한 금융 정보를 쉬운 언어로</strong> 전달하여
              사용자 경험을 혁신한 사례입니다.
            </p>
            <ul>
              <li><strong>쉬운 금융 용어</strong>: "연체이자" 대신 "늦게 내면 붙는 이자" 등 일상 언어 사용</li>
              <li><strong>단계적 정보 공개</strong>: 필요한 정보만 적시에 보여주는 설계</li>
              <li><strong>시각적 데이터 표현</strong>: 소비 패턴을 그래프와 아이콘으로 직관적 전달</li>
              <li><strong>일관된 Voice & Tone</strong>: 친근하지만 신뢰감 있는 문체를 전 서비스에 적용</li>
            </ul>

            {/* ========== 실습 ========== */}
            <h2>5. 실습: 콘텐츠 전략 사례 분석</h2>

            <h3>5.1 실습 개요</h3>
            <p>
              자신이 자주 이용하는 브랜드 또는 서비스를 하나 선택하여,
              해당 브랜드의 콘텐츠 전략을 분석해 봅니다.
            </p>

            <h3>5.2 분석 프레임워크</h3>
            <table className="lesson-table">
              <thead>
                <tr><th>분석 항목</th><th>질문</th><th>기록 내용</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>브랜드 개요</strong></td>
                  <td>어떤 브랜드인가?</td>
                  <td>브랜드명, 업종, 주요 서비스</td>
                </tr>
                <tr>
                  <td><strong>접점 분석</strong></td>
                  <td>어떤 채널에서 고객과 만나는가?</td>
                  <td>웹사이트, 앱, SNS, 오프라인 등</td>
                </tr>
                <tr>
                  <td><strong>콘텐츠 유형</strong></td>
                  <td>어떤 종류의 콘텐츠를 제공하는가?</td>
                  <td>텍스트, 이미지, 영상, 인터랙티브 등</td>
                </tr>
                <tr>
                  <td><strong>톤 & 보이스</strong></td>
                  <td>브랜드가 말하는 방식은?</td>
                  <td>친근, 전문적, 유머러스 등</td>
                </tr>
                <tr>
                  <td><strong>강점 & 약점</strong></td>
                  <td>콘텐츠에서 잘하는 점과 부족한 점은?</td>
                  <td>구체적인 사례와 함께 기록</td>
                </tr>
              </tbody>
            </table>

            <h3>5.3 실습 절차</h3>
            <ol>
              <li>분석할 브랜드를 선정합니다.</li>
              <li>해당 브랜드의 웹사이트, 앱, SNS 등을 직접 방문합니다.</li>
              <li>위 분석 프레임워크에 따라 각 항목을 기록합니다.</li>
              <li>CX 관점에서 좋았던 점(Good)과 개선이 필요한 점(Bad)을 정리합니다.</li>
              <li>결과를 발표 자료로 정리하여 공유합니다.</li>
            </ol>

            {/* ========== 핵심 정리 ========== */}
            <div className="callout-box">
              <h3>핵심 정리</h3>
              <ul>
                <li><strong>CXD(고객경험디자인)</strong>는 고객이 브랜드와 상호작용하는 모든 접점에서 일관되고 긍정적인 경험을 설계하는 것이다.</li>
                <li><strong>CX는 UX보다 넓은 개념</strong>으로, UX가 디지털 제품 내 경험에 집중하는 반면 CX는 브랜드와의 전체 상호작용을 포괄한다.</li>
                <li><strong>콘텐츠 전략</strong>은 유용한 콘텐츠의 생성, 발행, 관리를 위한 계획으로, 기획-제작-관리-거버넌스-분석의 5가지 요소로 구성된다.</li>
                <li>고객 여정의 각 단계(인지-고려-전환-유지-옹호)에서 <strong>콘텐츠는 서로 다른 역할</strong>을 수행한다.</li>
                <li>Apple, Airbnb, 토스 등 성공적인 브랜드는 <strong>일관된 콘텐츠 경험</strong>을 통해 고객 충성도를 확보하고 있다.</li>
              </ul>
            </div>

            <div className="lesson-nav">
              <Link to="/ux" className="lesson-nav-btn prev">← 목록으로</Link>
              <Link to="/ux/research" className="lesson-nav-btn next">2주차: 사용자 리서치 →</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default UxWeek1;
