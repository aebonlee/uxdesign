import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import { useLanguage } from '../contexts/LanguageContext';

const UxWeek13 = () => {
  const { t } = useLanguage();

  return (
    <>
      <SEOHead
        title="13주차: 콘텐츠 성과 측정과 분석 - UX 디자인 강의"
        description="KPI 설정, GA4 활용법, 콘텐츠 성과 지표, ROI 분석, 데이터 기반 의사결정 방법을 학습합니다."
        path="/ux/analytics"
      />

      <section className="page-header">
        <div className="container">
          <h1>13주차: 콘텐츠 성과 측정과 분석</h1>
          <p>
            콘텐츠의 비즈니스 가치를 데이터로 입증하는 방법을 학습합니다.
            KPI 설정부터 GA4 활용, ROI 분석, 데이터 기반 의사결정까지 다룹니다.
          </p>
        </div>
      </section>

      <section className="section lesson-content">
        <div className="container">
          <div className="lesson-body">

            <div className="callout-box">
              <h3>학습 목표</h3>
              <ul>
                <li>콘텐츠 성과 측정의 프레임워크를 이해하고 KPI를 설정할 수 있다</li>
                <li>Google Analytics 4(GA4)의 핵심 기능과 보고서를 활용할 수 있다</li>
                <li>콘텐츠 퍼널 단계별 핵심 성과 지표를 정의하고 측정할 수 있다</li>
                <li>콘텐츠 ROI를 산출하고 투자 대비 효과를 분석할 수 있다</li>
                <li>데이터 기반 의사결정 프로세스를 수립하고 실행할 수 있다</li>
                <li>성과 대시보드를 구성하고 정기 보고 체계를 구축할 수 있다</li>
              </ul>
            </div>

            <h2>1. 콘텐츠 성과 측정의 기초</h2>

            <h3>1.1 왜 측정해야 하는가</h3>
            <p>
              "측정할 수 없으면 관리할 수 없다"는 피터 드러커의 원칙은 콘텐츠 전략에도
              그대로 적용됩니다. 콘텐츠 성과 측정은 단순히 숫자를 확인하는 것이 아니라,
              데이터에서 인사이트를 도출하고 이를 바탕으로 콘텐츠를 지속적으로
              개선하는 과정입니다.
            </p>
            <p>
              효과적인 성과 측정을 통해 다음을 달성할 수 있습니다.
            </p>
            <ul>
              <li>콘텐츠 투자의 정당성을 데이터로 입증</li>
              <li>고성과 콘텐츠와 저성과 콘텐츠를 구분하여 리소스 최적 배분</li>
              <li>사용자의 실제 행동 패턴을 이해하여 전략 수정</li>
              <li>조직 내 데이터 기반 의사결정 문화 구축</li>
              <li>콘텐츠 팀의 성과를 객관적으로 평가</li>
            </ul>

            <h3>1.2 성과 측정 프레임워크</h3>
            <p>
              체계적인 성과 측정을 위해 다음 5단계 프레임워크를 따릅니다.
            </p>
            <ol>
              <li><strong>비즈니스 목표 정의:</strong> 콘텐츠가 기여해야 할 비즈니스 목표를 명확히 합니다</li>
              <li><strong>KPI 선정:</strong> 목표 달성 여부를 판단할 핵심 지표를 선정합니다</li>
              <li><strong>데이터 수집 체계 구축:</strong> 분석 도구를 설정하고 추적 코드를 배포합니다</li>
              <li><strong>분석 및 인사이트 도출:</strong> 수집된 데이터를 분석하여 의미 있는 패턴을 발견합니다</li>
              <li><strong>행동 및 개선:</strong> 인사이트를 바탕으로 콘텐츠를 개선하고 반복합니다</li>
            </ol>

            <h2>2. KPI 설정</h2>

            <h3>2.1 콘텐츠 퍼널별 KPI</h3>
            <p>
              콘텐츠의 성과는 마케팅 퍼널의 각 단계에 따라 다른 지표로 측정합니다.
              모든 지표를 추적하기보다는 비즈니스 목표와 직접 연결된 핵심 지표에
              집중하는 것이 효과적입니다.
            </p>

            <table className="lesson-table">
              <thead>
                <tr>
                  <th>퍼널 단계</th>
                  <th>목적</th>
                  <th>주요 KPI</th>
                  <th>측정 도구</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>인지(Awareness)</td>
                  <td>브랜드/콘텐츠의 도달 범위 측정</td>
                  <td>페이지뷰, 순 방문자 수, 노출 수, 도달 범위, 검색 순위</td>
                  <td>GA4, Search Console, 소셜 인사이트</td>
                </tr>
                <tr>
                  <td>참여(Engagement)</td>
                  <td>콘텐츠에 대한 관심과 상호작용</td>
                  <td>평균 체류 시간, 스크롤 깊이, 이탈률, 소셜 공유, 댓글 수</td>
                  <td>GA4, Hotjar, 소셜 분석</td>
                </tr>
                <tr>
                  <td>전환(Conversion)</td>
                  <td>목표 행동으로의 전환 측정</td>
                  <td>전환율, 리드 생성 수, 가입률, 다운로드 수, CTA 클릭률</td>
                  <td>GA4(전환 설정), CRM, 마케팅 자동화</td>
                </tr>
                <tr>
                  <td>유지(Retention)</td>
                  <td>사용자의 재방문과 지속적 참여</td>
                  <td>재방문율, 뉴스레터 유지율, 고객 생애 가치(LTV), NPS</td>
                  <td>GA4, 이메일 플랫폼, 고객 설문</td>
                </tr>
                <tr>
                  <td>수익(Revenue)</td>
                  <td>콘텐츠의 직접/간접적 수익 기여</td>
                  <td>콘텐츠 기여 매출, 거래당 가치, 콘텐츠 ROI</td>
                  <td>GA4 이커머스, CRM, BI 도구</td>
                </tr>
              </tbody>
            </table>

            <h3>2.2 SMART KPI 설정 원칙</h3>
            <p>
              효과적인 KPI는 SMART 기준을 충족해야 합니다.
              모호한 목표가 아닌 구체적이고 측정 가능한 지표를 설정합니다.
            </p>
            <table className="lesson-table">
              <thead>
                <tr>
                  <th>SMART 요소</th>
                  <th>설명</th>
                  <th>나쁜 예</th>
                  <th>좋은 예</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Specific (구체적)</td>
                  <td>무엇을, 어디서, 어떻게 달성할지 명확</td>
                  <td>"트래픽을 늘린다"</td>
                  <td>"블로그 유기 트래픽을 증가시킨다"</td>
                </tr>
                <tr>
                  <td>Measurable (측정 가능)</td>
                  <td>정량적으로 측정할 수 있는 수치</td>
                  <td>"많이 늘린다"</td>
                  <td>"월 10,000 세션에서 15,000 세션으로"</td>
                </tr>
                <tr>
                  <td>Achievable (달성 가능)</td>
                  <td>현실적으로 달성 가능한 범위</td>
                  <td>"트래픽 10배 증가"</td>
                  <td>"전분기 대비 50% 증가"</td>
                </tr>
                <tr>
                  <td>Relevant (관련성)</td>
                  <td>비즈니스 목표와 직접 연결</td>
                  <td>"좋아요 수 증가"</td>
                  <td>"콘텐츠를 통한 리드 생성 증가"</td>
                </tr>
                <tr>
                  <td>Time-bound (기한)</td>
                  <td>달성 기한이 명확하게 설정</td>
                  <td>"언젠가 달성"</td>
                  <td>"2025년 Q2까지 달성"</td>
                </tr>
              </tbody>
            </table>

            <h3>2.3 허영 지표 vs 실질 지표</h3>
            <p>
              모든 수치가 의미 있는 것은 아닙니다. 보기에는 좋아 보이지만
              실제 비즈니스 성과와 연결되지 않는 '허영 지표(Vanity Metrics)'와
              실질적 의사결정에 도움이 되는 '실질 지표(Actionable Metrics)'를 구분해야 합니다.
            </p>
            <table className="lesson-table">
              <thead>
                <tr>
                  <th>허영 지표</th>
                  <th>왜 문제인가</th>
                  <th>대체 실질 지표</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>총 페이지뷰</td>
                  <td>봇 트래픽, 바운스 포함, 질적 판단 불가</td>
                  <td>참여 세션 비율, 세션당 이벤트 수</td>
                </tr>
                <tr>
                  <td>소셜 팔로워 수</td>
                  <td>실제 참여와 무관할 수 있음</td>
                  <td>참여율(Engagement Rate), 공유 수</td>
                </tr>
                <tr>
                  <td>이메일 발송 수</td>
                  <td>양 자체는 성과를 보장하지 않음</td>
                  <td>오픈율, 클릭률, 전환율</td>
                </tr>
                <tr>
                  <td>앱 다운로드 수</td>
                  <td>설치 후 사용하지 않을 수 있음</td>
                  <td>DAU/MAU 비율, 7일 유지율</td>
                </tr>
                <tr>
                  <td>콘텐츠 발행 수</td>
                  <td>양보다 질이 중요</td>
                  <td>콘텐츠당 평균 전환, 참여 시간</td>
                </tr>
              </tbody>
            </table>

            <h2>3. Google Analytics 4(GA4) 활용</h2>

            <h3>3.1 GA4의 핵심 개념</h3>
            <p>
              GA4는 이벤트 기반 데이터 모델을 채택한 최신 분석 플랫폼입니다.
              기존 Universal Analytics의 세션/페이지뷰 중심 모델과 달리,
              모든 사용자 상호작용을 이벤트로 수집합니다.
            </p>
            <ul>
              <li><strong>이벤트(Event):</strong> GA4의 모든 데이터는 이벤트로 수집됩니다. 페이지뷰, 클릭, 스크롤 등이 모두 이벤트입니다</li>
              <li><strong>매개변수(Parameter):</strong> 이벤트에 추가 정보를 제공하는 속성입니다 (예: page_title, link_url)</li>
              <li><strong>사용자 속성(User Property):</strong> 사용자에 대한 지속적 속성을 정의합니다 (예: 멤버십 등급)</li>
              <li><strong>전환(Conversion):</strong> 비즈니스 목표와 연결된 주요 이벤트를 전환으로 설정합니다</li>
              <li><strong>잠재고객(Audience):</strong> 특정 조건을 만족하는 사용자 그룹을 정의합니다</li>
            </ul>

            <h3>3.2 GA4 이벤트 유형</h3>
            <table className="lesson-table">
              <thead>
                <tr>
                  <th>이벤트 유형</th>
                  <th>설명</th>
                  <th>예시</th>
                  <th>설정 방법</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>자동 수집 이벤트</td>
                  <td>GA4가 기본으로 수집하는 이벤트</td>
                  <td>page_view, first_visit, session_start</td>
                  <td>설정 불필요 (자동)</td>
                </tr>
                <tr>
                  <td>향상된 측정 이벤트</td>
                  <td>관리자에서 토글로 활성화</td>
                  <td>scroll, click, file_download, video_start</td>
                  <td>GA4 관리자에서 활성화</td>
                </tr>
                <tr>
                  <td>권장 이벤트</td>
                  <td>Google이 권장하는 표준 이벤트</td>
                  <td>login, sign_up, purchase, add_to_cart</td>
                  <td>개발자가 코드로 구현</td>
                </tr>
                <tr>
                  <td>맞춤 이벤트</td>
                  <td>비즈니스에 특화된 이벤트</td>
                  <td>article_read_complete, cta_click, form_submit</td>
                  <td>개발자가 코드로 구현</td>
                </tr>
              </tbody>
            </table>

            <h3>3.3 주요 GA4 보고서</h3>
            <ul>
              <li><strong>실시간 보고서:</strong> 현재 사이트에서 활동 중인 사용자와 행동을 실시간으로 확인</li>
              <li><strong>획득 보고서:</strong> 사용자가 어떤 경로(검색, 소셜, 직접, 리퍼럴)로 유입되었는지 분석</li>
              <li><strong>참여 보고서:</strong> 페이지별 성과, 이벤트 발생, 체류 시간 등 사용자 참여도 분석</li>
              <li><strong>수익 창출 보고서:</strong> 이커머스 매출, 구매 행동, 수익 관련 데이터 분석</li>
              <li><strong>유지 보고서:</strong> 사용자의 재방문 패턴과 코호트별 유지율 분석</li>
              <li><strong>탐색 보고서:</strong> 자유 형식, 퍼널 탐색, 경로 탐색 등 맞춤형 심층 분석</li>
            </ul>

            <h3>3.4 UTM 파라미터를 활용한 캠페인 추적</h3>
            <p>
              UTM(Urchin Tracking Module) 파라미터는 URL에 추가하여 트래픽 소스를
              정확하게 추적하는 태그입니다. 캠페인별, 채널별 콘텐츠의 성과를
              정밀하게 측정할 수 있습니다.
            </p>
            <table className="lesson-table">
              <thead>
                <tr>
                  <th>파라미터</th>
                  <th>용도</th>
                  <th>예시 값</th>
                  <th>필수 여부</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>utm_source</td>
                  <td>트래픽 소스 (유입 출처)</td>
                  <td>google, newsletter, instagram</td>
                  <td>필수</td>
                </tr>
                <tr>
                  <td>utm_medium</td>
                  <td>마케팅 매체</td>
                  <td>organic, email, social, cpc</td>
                  <td>필수</td>
                </tr>
                <tr>
                  <td>utm_campaign</td>
                  <td>캠페인 이름</td>
                  <td>spring_sale, product_launch_2025</td>
                  <td>필수</td>
                </tr>
                <tr>
                  <td>utm_content</td>
                  <td>콘텐츠 구분 (A/B 테스트 등)</td>
                  <td>banner_a, text_link, hero_image</td>
                  <td>선택</td>
                </tr>
                <tr>
                  <td>utm_term</td>
                  <td>검색 키워드</td>
                  <td>ux_design_course, content_strategy</td>
                  <td>선택</td>
                </tr>
              </tbody>
            </table>

            <div className="callout-box">
              <h3>UTM 파라미터 명명 규칙</h3>
              <ul>
                <li>소문자만 사용합니다 (GA4는 대소문자를 구분합니다)</li>
                <li>공백 대신 언더스코어(_) 또는 하이픈(-)을 사용합니다</li>
                <li>조직 전체에서 일관된 명명 규칙을 정의하고 공유합니다</li>
                <li>UTM 관리 스프레드시트를 만들어 팀이 참조하도록 합니다</li>
                <li>Google Campaign URL Builder를 활용하면 오류를 줄일 수 있습니다</li>
              </ul>
            </div>

            <h2>4. 콘텐츠 ROI 분석</h2>

            <h3>4.1 ROI 계산 공식</h3>
            <p>
              콘텐츠 ROI(Return on Investment)는 콘텐츠에 투자한 비용 대비
              얻은 수익이나 가치를 측정하는 지표입니다.
            </p>
            <p>
              <strong>콘텐츠 ROI = (콘텐츠로 인한 수익 - 콘텐츠 제작 비용) / 콘텐츠 제작 비용 x 100%</strong>
            </p>
            <p>
              직접적인 수익 측정이 어려운 경우, 리드 생성 단가, 고객 획득 비용(CAC),
              유기 트래픽의 광고비 환산 가치 등 간접 지표를 활용할 수 있습니다.
            </p>

            <h3>4.2 콘텐츠 비용 요소</h3>
            <table className="lesson-table">
              <thead>
                <tr>
                  <th>비용 항목</th>
                  <th>세부 내용</th>
                  <th>산출 방법</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>인건비</td>
                  <td>기획, 작성, 편집, 디자인, 개발 인력</td>
                  <td>투입 시간 x 시간당 인건비</td>
                </tr>
                <tr>
                  <td>도구 비용</td>
                  <td>CMS, 분석 도구, 디자인 도구, SEO 도구</td>
                  <td>월 구독비 / 콘텐츠 수로 배분</td>
                </tr>
                <tr>
                  <td>배포 비용</td>
                  <td>광고비, 이메일 플랫폼, 소셜 프로모션</td>
                  <td>캠페인별 직접 비용</td>
                </tr>
                <tr>
                  <td>외주 비용</td>
                  <td>프리랜서, 에이전시, 번역 서비스</td>
                  <td>계약 금액</td>
                </tr>
                <tr>
                  <td>간접 비용</td>
                  <td>교육, 회의, 관리 오버헤드</td>
                  <td>총 간접비 / 프로젝트 수로 배분</td>
                </tr>
              </tbody>
            </table>

            <h3>4.3 ROI 측정이 어려운 경우의 대안</h3>
            <p>
              B2B나 브랜딩 콘텐츠처럼 직접적인 수익 추적이 어려운 경우,
              다음과 같은 대안적 가치 산출 방법을 활용합니다.
            </p>
            <ul>
              <li>
                <strong>유기 트래픽 가치:</strong> 유기 검색 트래픽을 유료 광고(CPC)로
                획득했다면 지불했을 비용을 산출합니다. 예: 월 50,000 유기 세션 x
                평균 CPC 500원 = 월 2,500만원의 가치
              </li>
              <li>
                <strong>리드 가치:</strong> 콘텐츠를 통해 생성된 리드의 가치를 역산합니다.
                예: 콘텐츠 리드 100건 x 리드당 가치 50,000원 = 500만원
              </li>
              <li>
                <strong>브랜드 인지도 가치:</strong> 동일한 노출을 유료 미디어로
                달성했을 때의 비용으로 환산합니다.
              </li>
              <li>
                <strong>고객 교육 가치:</strong> 콘텐츠가 고객 지원 비용을 절감시킨
                효과를 측정합니다. 예: FAQ 콘텐츠로 지원 문의 20% 감소
              </li>
            </ul>

            <div className="exercise-box">
              <h3>실습: 콘텐츠 ROI 계산</h3>
              <p>다음 데이터를 활용하여 콘텐츠 ROI를 계산해 보세요.</p>
              <table className="lesson-table">
                <thead>
                  <tr>
                    <th>항목</th>
                    <th>수치</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>블로그 콘텐츠 제작 비용 (3개월)</td>
                    <td>1,500만원</td>
                  </tr>
                  <tr>
                    <td>유기 트래픽 (3개월)</td>
                    <td>120,000 세션</td>
                  </tr>
                  <tr>
                    <td>평균 CPC (유사 키워드)</td>
                    <td>800원</td>
                  </tr>
                  <tr>
                    <td>콘텐츠를 통한 리드 수</td>
                    <td>240건</td>
                  </tr>
                  <tr>
                    <td>리드 → 고객 전환율</td>
                    <td>5%</td>
                  </tr>
                  <tr>
                    <td>고객당 평균 매출</td>
                    <td>200만원</td>
                  </tr>
                </tbody>
              </table>
              <p>
                질문 1: 유기 트래픽의 광고비 환산 가치는 얼마인가요?
                질문 2: 콘텐츠를 통한 직접 매출은 얼마인가요?
                질문 3: 콘텐츠 ROI는 몇 %인가요?
              </p>
            </div>

            <h2>5. 데이터 기반 의사결정</h2>

            <h3>5.1 데이터 해석의 원칙</h3>
            <p>
              데이터를 올바르게 해석하고 의미 있는 의사결정으로 연결하기 위한
              핵심 원칙을 살펴봅니다.
            </p>
            <ul>
              <li>
                <strong>상관관계와 인과관계 구분:</strong> 두 지표가 함께 변한다고 해서
                하나가 다른 하나를 유발한 것은 아닙니다. 인과관계를 주장하려면
                A/B 테스트 등 통제된 실험이 필요합니다.
              </li>
              <li>
                <strong>맥락 제공:</strong> 숫자만으로는 의미가 없습니다. 전월 대비, 전년 대비,
                업계 벤치마크 등 비교 기준을 함께 제시합니다.
              </li>
              <li>
                <strong>세그먼트별 분석:</strong> 전체 평균에 숨겨진 패턴을 발견하기 위해
                사용자 세그먼트별로 데이터를 분석합니다.
              </li>
              <li>
                <strong>충분한 데이터 확보:</strong> 짧은 기간이나 적은 표본으로
                성급한 결론을 내리지 않습니다. 최소 2주, 가능하면 한 달 이상의
                데이터를 기반으로 판단합니다.
              </li>
              <li>
                <strong>"So What?" 질문:</strong> 모든 데이터 포인트에 대해
                "그래서 어떻게 해야 하는가?"를 질문합니다.
                행동으로 연결되지 않는 분석은 가치가 없습니다.
              </li>
            </ul>

            <h3>5.2 데이터 기반 의사결정 프로세스</h3>
            <table className="lesson-table">
              <thead>
                <tr>
                  <th>단계</th>
                  <th>활동</th>
                  <th>산출물</th>
                  <th>도구</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1. 질문 정의</td>
                  <td>답을 찾고자 하는 질문을 명확히 정의</td>
                  <td>분석 질문 목록</td>
                  <td>팀 브레인스토밍</td>
                </tr>
                <tr>
                  <td>2. 데이터 수집</td>
                  <td>질문에 답할 수 있는 데이터를 수집</td>
                  <td>원시 데이터셋</td>
                  <td>GA4, CRM, 설문</td>
                </tr>
                <tr>
                  <td>3. 데이터 분석</td>
                  <td>패턴, 추세, 이상치를 발견</td>
                  <td>분석 결과 요약</td>
                  <td>Looker Studio, Excel</td>
                </tr>
                <tr>
                  <td>4. 인사이트 도출</td>
                  <td>데이터에서 의미 있는 결론을 도출</td>
                  <td>인사이트 문서</td>
                  <td>팀 토론</td>
                </tr>
                <tr>
                  <td>5. 행동 계획</td>
                  <td>인사이트를 실행 가능한 액션으로 전환</td>
                  <td>액션 플랜</td>
                  <td>프로젝트 관리 도구</td>
                </tr>
                <tr>
                  <td>6. 실행 및 측정</td>
                  <td>액션을 실행하고 효과를 다시 측정</td>
                  <td>결과 보고서</td>
                  <td>GA4, A/B 테스트 도구</td>
                </tr>
              </tbody>
            </table>

            <h2>6. 대시보드와 보고 체계</h2>

            <h3>6.1 성과 대시보드 구성</h3>
            <p>
              콘텐츠 성과 대시보드는 핵심 KPI를 실시간으로 모니터링할 수 있는
              시각적 보고 도구입니다. Google Looker Studio(구 Data Studio),
              Tableau, Power BI 등을 활용하여 자동화된 대시보드를 구축합니다.
            </p>
            <table className="lesson-table">
              <thead>
                <tr>
                  <th>대시보드 섹션</th>
                  <th>포함 내용</th>
                  <th>시각화 유형</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>핵심 요약</td>
                  <td>KPI 현재값, 전 기간 대비 변화율, 목표 달성률</td>
                  <td>스코어카드, 게이지 차트</td>
                </tr>
                <tr>
                  <td>추세 분석</td>
                  <td>주요 지표의 시간별 추이</td>
                  <td>선 그래프, 영역 차트</td>
                </tr>
                <tr>
                  <td>채널별 성과</td>
                  <td>유입 소스별 트래픽, 전환, 참여 비교</td>
                  <td>막대 그래프, 파이 차트</td>
                </tr>
                <tr>
                  <td>콘텐츠별 성과</td>
                  <td>상위/하위 성과 콘텐츠 랭킹</td>
                  <td>테이블, 히트맵</td>
                </tr>
                <tr>
                  <td>사용자 행동</td>
                  <td>사용자 흐름, 이탈 지점, 전환 경로</td>
                  <td>퍼널 차트, 산키 다이어그램</td>
                </tr>
                <tr>
                  <td>인사이트/액션</td>
                  <td>데이터에서 도출한 발견과 권장 행동</td>
                  <td>텍스트 블록, 주석</td>
                </tr>
              </tbody>
            </table>

            <h3>6.2 데이터 시각화 원칙</h3>
            <ul>
              <li><strong>목적에 맞는 차트 선택:</strong> 추세는 선 그래프, 비교는 막대 그래프, 비율은 파이 차트</li>
              <li><strong>핵심 인사이트 강조:</strong> 가장 중요한 발견을 시각적으로 부각</li>
              <li><strong>맥락 제공:</strong> 이전 기간 비교, 목표선, 벤치마크를 함께 표시</li>
              <li><strong>단순하게 유지:</strong> 불필요한 장식 제거, 데이터 잉크 비율 최대화</li>
              <li><strong>정확한 표현:</strong> 축 범위, 단위, 비율을 정확하게 표현하여 오해 방지</li>
            </ul>

            <h3>6.3 정기 보고서 체계</h3>
            <p>
              정기적인 보고를 통해 콘텐츠 성과를 체계적으로 추적하고
              조직 전체와 공유합니다.
            </p>
            <table className="lesson-table">
              <thead>
                <tr>
                  <th>보고 주기</th>
                  <th>대상</th>
                  <th>포함 내용</th>
                  <th>분량</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>주간</td>
                  <td>콘텐츠 팀 내부</td>
                  <td>주요 지표 현황, 발행 콘텐츠 성과, 이슈 사항</td>
                  <td>1~2페이지</td>
                </tr>
                <tr>
                  <td>월간</td>
                  <td>마케팅 리더십</td>
                  <td>KPI 달성 현황, 추세 분석, 인사이트, 다음 달 계획</td>
                  <td>5~10페이지</td>
                </tr>
                <tr>
                  <td>분기</td>
                  <td>경영진</td>
                  <td>전략 목표 달성도, ROI, 경쟁 분석, 전략 조정 제안</td>
                  <td>10~15페이지</td>
                </tr>
                <tr>
                  <td>연간</td>
                  <td>전사</td>
                  <td>연간 성과 총괄, 학습 사항, 차년도 전략 방향</td>
                  <td>20~30페이지</td>
                </tr>
              </tbody>
            </table>

            <div className="exercise-box">
              <h3>실습: 콘텐츠 성과 대시보드 설계</h3>
              <p>
                다음 조건을 고려하여 콘텐츠 성과 대시보드의 와이어프레임을 설계해 보세요.
              </p>
              <ul>
                <li>비즈니스 목표: 블로그를 통한 리드 생성 증가</li>
                <li>핵심 KPI 4~6개를 선정하세요</li>
                <li>대시보드에 포함할 위젯 6개 이상을 설계하세요</li>
                <li>각 위젯의 데이터 소스와 시각화 유형을 명시하세요</li>
                <li>월간 보고서 템플릿을 1페이지로 요약 작성하세요</li>
                <li>데이터에서 도출 가능한 개선 제안 3가지를 포함하세요</li>
              </ul>
            </div>

            <div className="callout-box">
              <h3>핵심 정리</h3>
              <ul>
                <li>콘텐츠 성과 측정은 목표 설정 → KPI 선정 → 데이터 수집 → 분석 → 개선의 순환 과정이다</li>
                <li>KPI는 퍼널 단계(인지→참여→전환→유지→수익)별로 적합한 지표를 선정한다</li>
                <li>허영 지표와 실질 지표를 구분하고, 행동으로 연결되는 지표에 집중한다</li>
                <li>GA4는 이벤트 기반 데이터 모델로 유연한 콘텐츠 분석이 가능하다</li>
                <li>UTM 파라미터로 캠페인과 채널별 성과를 정밀하게 추적한다</li>
                <li>콘텐츠 ROI를 직접/간접 방법으로 산출하여 투자 효과를 입증한다</li>
                <li>자동화된 대시보드와 정기 보고 체계로 데이터 기반 의사결정 문화를 구축한다</li>
              </ul>
            </div>

            <div className="lesson-nav">
              <Link to="/ux/cms" className="lesson-nav-btn prev">
                ← 12주차: CMS와 콘텐츠 관리 도구
              </Link>
              <Link to="/ux" className="lesson-nav-btn next">
                UX 학습 목록 →
              </Link>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default UxWeek13;
