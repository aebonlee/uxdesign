import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import { useLanguage } from '../contexts/LanguageContext';

const UxWeek10 = () => {
  const { t } = useLanguage();

  return (
    <>
      <SEOHead
        title="10주차: 콘텐츠 개인화와 A/B 테스팅 - UX 디자인 강의"
        description="사용자 세그멘테이션, 개인화 전략, 추천 시스템 원리, A/B 테스트 설계와 분석, 통계적 유의성의 개념을 학습합니다."
        path="/ux/personalization"
      />

      <section className="page-header">
        <div className="container">
          <h1>10주차: 콘텐츠 개인화와 A/B 테스팅</h1>
          <p>
            사용자 경험을 극대화하기 위한 개인화 전략과 데이터 기반 의사결정의 핵심 도구인
            A/B 테스팅의 원리와 실무 적용 방법을 학습합니다.
          </p>
        </div>
      </section>

      <section className="section lesson-content">
        <div className="container">
          <div className="lesson-body">

            <div className="callout-box">
              <h3>학습 목표</h3>
              <ul>
                <li>콘텐츠 개인화의 개념과 비즈니스 가치를 이해한다</li>
                <li>사용자 세그멘테이션의 기준과 방법론을 학습한다</li>
                <li>추천 시스템의 주요 알고리즘과 동작 원리를 파악한다</li>
                <li>A/B 테스트를 올바르게 설계하고 실행하는 방법을 익힌다</li>
                <li>통계적 유의성의 개념을 이해하고 테스트 결과를 해석할 수 있다</li>
                <li>개인화와 A/B 테스팅을 실무에 적용하는 워크플로우를 구축한다</li>
              </ul>
            </div>

            <h2>1. 콘텐츠 개인화의 이해</h2>

            <h3>1.1 개인화란 무엇인가</h3>
            <p>
              콘텐츠 개인화(Content Personalization)란 사용자의 행동, 선호도, 인구통계학적 정보,
              맥락 등을 기반으로 각 사용자에게 맞춤화된 콘텐츠를 제공하는 전략입니다.
              모든 사용자에게 동일한 경험을 제공하는 것이 아니라, 개별 사용자의 니즈에
              최적화된 경험을 전달하는 것이 핵심입니다.
            </p>
            <p>
              McKinsey의 연구에 따르면, 효과적인 개인화를 구현한 기업은
              매출이 평균 10~15% 증가하며, 고객 획득 비용은 최대 50%까지 절감됩니다.
              개인화는 더 이상 선택이 아닌 필수 전략이 되었습니다.
            </p>

            <h3>1.2 개인화의 수준과 유형</h3>
            <table className="lesson-table">
              <thead>
                <tr>
                  <th>수준</th>
                  <th>설명</th>
                  <th>예시</th>
                  <th>구현 난이도</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>세그먼트 기반</td>
                  <td>사용자 그룹별로 다른 콘텐츠 제공</td>
                  <td>신규 사용자 vs 기존 사용자 구분</td>
                  <td>낮음</td>
                </tr>
                <tr>
                  <td>규칙 기반</td>
                  <td>사전 정의된 조건에 따라 콘텐츠 변경</td>
                  <td>지역별 프로모션, 시간대별 배너</td>
                  <td>중간</td>
                </tr>
                <tr>
                  <td>행동 기반</td>
                  <td>사용자 행동 데이터를 실시간 반영</td>
                  <td>최근 본 상품 기반 추천</td>
                  <td>높음</td>
                </tr>
                <tr>
                  <td>예측 기반</td>
                  <td>머신러닝으로 사용자 니즈 예측</td>
                  <td>구매 가능성 높은 상품 노출</td>
                  <td>매우 높음</td>
                </tr>
                <tr>
                  <td>실시간 1:1</td>
                  <td>모든 데이터를 종합한 완전 개인화</td>
                  <td>Netflix 홈 화면 전체 개인화</td>
                  <td>최고</td>
                </tr>
              </tbody>
            </table>

            <h3>1.3 개인화 가능한 콘텐츠 요소</h3>
            <p>
              개인화는 단순히 이름을 삽입하는 것을 넘어 다양한 요소에 적용될 수 있습니다.
            </p>
            <ul>
              <li><strong>텍스트 콘텐츠:</strong> 헤드라인, 본문, CTA 문구 맞춤화</li>
              <li><strong>이미지/미디어:</strong> 사용자 관심사에 맞는 비주얼 노출</li>
              <li><strong>레이아웃:</strong> 콘텐츠 블록의 순서와 배치 변경</li>
              <li><strong>네비게이션:</strong> 자주 사용하는 메뉴 우선 표시</li>
              <li><strong>추천 콘텐츠:</strong> 관련 상품, 기사, 동영상 추천</li>
              <li><strong>가격/오퍼:</strong> 세그먼트별 프로모션 차별화</li>
              <li><strong>이메일:</strong> 발송 시간, 제목, 본문 개인화</li>
            </ul>

            <h2>2. 사용자 세그멘테이션</h2>

            <h3>2.1 세그멘테이션의 기준</h3>
            <p>
              효과적인 개인화의 첫 단계는 사용자를 의미 있는 그룹으로 분류하는 것입니다.
              세그멘테이션은 단일 기준이 아닌 여러 차원을 결합하여 수행합니다.
            </p>

            <table className="lesson-table">
              <thead>
                <tr>
                  <th>분류 기준</th>
                  <th>세부 항목</th>
                  <th>활용 예시</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>인구통계</td>
                  <td>연령, 성별, 직업, 소득, 학력</td>
                  <td>연령대별 콘텐츠 톤앤매너 조정</td>
                </tr>
                <tr>
                  <td>지리적</td>
                  <td>국가, 도시, 기후, 시간대</td>
                  <td>지역 맞춤 프로모션 및 언어 설정</td>
                </tr>
                <tr>
                  <td>행동적</td>
                  <td>방문 빈도, 구매 이력, 클릭 패턴</td>
                  <td>재방문 사용자에게 연속성 있는 경험 제공</td>
                </tr>
                <tr>
                  <td>심리적</td>
                  <td>가치관, 라이프스타일, 성격 유형</td>
                  <td>프리미엄 지향 사용자에게 고급 라인 노출</td>
                </tr>
                <tr>
                  <td>기술적</td>
                  <td>디바이스, 브라우저, OS, 네트워크</td>
                  <td>모바일 사용자에게 최적화된 UI 제공</td>
                </tr>
                <tr>
                  <td>고객 여정</td>
                  <td>인지, 고려, 결정, 충성 단계</td>
                  <td>단계별 적합한 콘텐츠 유형 매칭</td>
                </tr>
              </tbody>
            </table>

            <h3>2.2 RFM 분석을 활용한 세그멘테이션</h3>
            <p>
              RFM 분석은 고객의 가치를 평가하는 대표적인 방법으로, 세 가지 지표를 기반으로 합니다.
            </p>
            <ul>
              <li><strong>Recency(최근성):</strong> 마지막 구매 또는 방문이 얼마나 최근인가</li>
              <li><strong>Frequency(빈도):</strong> 일정 기간 동안 얼마나 자주 구매/방문했는가</li>
              <li><strong>Monetary(금액):</strong> 총 지출 금액이 얼마인가</li>
            </ul>
            <p>
              각 지표를 1~5점으로 점수화하여 고객을 분류합니다. 예를 들어 (5,5,5) 고객은
              최우수 고객이며, (1,1,1)은 이탈 위험 고객입니다. 이를 기반으로 각 세그먼트에
              맞는 개인화된 커뮤니케이션 전략을 수립합니다.
            </p>

            <div className="callout-box">
              <h3>세그멘테이션 실무 팁</h3>
              <ul>
                <li>처음부터 너무 많은 세그먼트를 만들지 마세요 (3~5개로 시작)</li>
                <li>각 세그먼트의 크기가 통계적으로 유의미한지 확인하세요</li>
                <li>세그먼트는 정기적으로 재검토하고 업데이트해야 합니다</li>
                <li>행동 데이터 기반 세그멘테이션이 인구통계보다 효과적인 경우가 많습니다</li>
              </ul>
            </div>

            <h2>3. 추천 시스템의 원리</h2>

            <h3>3.1 추천 시스템의 주요 알고리즘</h3>
            <p>
              추천 시스템은 개인화의 핵심 기술로, 사용자에게 관련성 높은 콘텐츠나 상품을
              자동으로 제안합니다. 주요 접근 방식은 다음과 같습니다.
            </p>

            <table className="lesson-table">
              <thead>
                <tr>
                  <th>알고리즘</th>
                  <th>원리</th>
                  <th>장점</th>
                  <th>단점</th>
                  <th>적용 사례</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>협업 필터링</td>
                  <td>유사 사용자의 선호도를 기반으로 추천</td>
                  <td>도메인 지식 불필요, 의외의 추천 가능</td>
                  <td>콜드 스타트 문제, 데이터 희소성</td>
                  <td>Netflix, Amazon</td>
                </tr>
                <tr>
                  <td>콘텐츠 기반 필터링</td>
                  <td>아이템의 속성과 사용자 선호 매칭</td>
                  <td>콜드 스타트에 강함, 설명 가능</td>
                  <td>필터 버블, 다양성 부족</td>
                  <td>Spotify, YouTube</td>
                </tr>
                <tr>
                  <td>하이브리드</td>
                  <td>여러 알고리즘의 결합</td>
                  <td>각 방식의 장점 결합</td>
                  <td>구현 복잡도 높음</td>
                  <td>Netflix (현재)</td>
                </tr>
                <tr>
                  <td>지식 기반</td>
                  <td>도메인 전문 규칙 적용</td>
                  <td>초기 데이터 없이도 가능</td>
                  <td>규칙 수동 관리 필요</td>
                  <td>부동산, 자동차</td>
                </tr>
                <tr>
                  <td>딥러닝 기반</td>
                  <td>신경망으로 패턴 학습</td>
                  <td>복잡한 패턴 포착 가능</td>
                  <td>대규모 데이터 필요, 블랙박스</td>
                  <td>TikTok, Pinterest</td>
                </tr>
              </tbody>
            </table>

            <h3>3.2 콜드 스타트 문제 해결</h3>
            <p>
              신규 사용자나 새로운 아이템에 대한 추천 데이터가 부족한 상황을
              콜드 스타트(Cold Start) 문제라 합니다. 이를 해결하기 위한 전략은 다음과 같습니다.
            </p>
            <ul>
              <li><strong>온보딩 설문:</strong> 초기 선호도를 직접 수집 (예: Spotify의 좋아하는 아티스트 선택)</li>
              <li><strong>인기 기반 추천:</strong> 전체 사용자에게 인기 있는 아이템을 우선 노출</li>
              <li><strong>콘텐츠 기반 접근:</strong> 아이템 메타데이터를 활용한 추천으로 시작</li>
              <li><strong>소셜 데이터:</strong> SNS 프로필이나 연결 정보를 활용</li>
              <li><strong>외부 데이터:</strong> 서드파티 데이터를 통한 사용자 프로필 보강</li>
            </ul>

            <h3>3.3 개인화의 윤리적 고려사항</h3>
            <p>
              개인화는 강력한 도구이지만 윤리적 문제를 수반합니다. UX 디자이너는
              다음 사항을 반드시 고려해야 합니다.
            </p>
            <ul>
              <li><strong>투명성:</strong> 어떤 데이터를 수집하고 어떻게 활용하는지 명확히 고지</li>
              <li><strong>동의:</strong> GDPR, 개인정보보호법 등을 준수한 명시적 동의 획득</li>
              <li><strong>필터 버블:</strong> 편향된 콘텐츠만 노출되지 않도록 다양성 보장</li>
              <li><strong>다크 패턴 회피:</strong> 개인화를 조작적 목적으로 사용하지 않기</li>
              <li><strong>옵트아웃:</strong> 사용자가 개인화를 끌 수 있는 옵션 제공</li>
            </ul>

            <h2>4. A/B 테스팅의 기초</h2>

            <h3>4.1 A/B 테스트란</h3>
            <p>
              A/B 테스트(또는 분할 테스트)는 두 가지 이상의 변형(Variant)을 무작위로
              사용자에게 노출하여 어떤 버전이 더 나은 성과를 내는지 데이터로 검증하는
              실험 방법론입니다. 직관이나 의견이 아닌 실제 사용자 행동 데이터에 기반하여
              의사결정을 내리는 과학적 접근법입니다.
            </p>

            <h3>4.2 A/B 테스트의 구성 요소</h3>
            <table className="lesson-table">
              <thead>
                <tr>
                  <th>구성 요소</th>
                  <th>설명</th>
                  <th>예시</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>가설</td>
                  <td>테스트하려는 변화와 기대 효과</td>
                  <td>"CTA 버튼 색상을 파란색에서 녹색으로 변경하면 클릭률이 10% 증가할 것이다"</td>
                </tr>
                <tr>
                  <td>대조군(Control)</td>
                  <td>현재 버전, 변경 없음</td>
                  <td>기존 파란색 CTA 버튼</td>
                </tr>
                <tr>
                  <td>실험군(Variant)</td>
                  <td>변경이 적용된 버전</td>
                  <td>녹색 CTA 버튼 적용 버전</td>
                </tr>
                <tr>
                  <td>핵심 지표(Primary Metric)</td>
                  <td>성공 여부를 판단할 주요 측정 지표</td>
                  <td>CTA 클릭률(CTR)</td>
                </tr>
                <tr>
                  <td>보조 지표(Secondary Metrics)</td>
                  <td>추가적으로 모니터링할 지표</td>
                  <td>전환율, 이탈률, 체류 시간</td>
                </tr>
                <tr>
                  <td>샘플 크기</td>
                  <td>통계적 유의성 확보에 필요한 참여자 수</td>
                  <td>그룹당 최소 1,000명</td>
                </tr>
                <tr>
                  <td>실험 기간</td>
                  <td>충분한 데이터 수집에 필요한 기간</td>
                  <td>최소 2주 (주간 패턴 포함)</td>
                </tr>
              </tbody>
            </table>

            <h3>4.3 A/B 테스트 설계 프로세스</h3>
            <p>성공적인 A/B 테스트를 위한 체계적인 설계 단계를 살펴봅니다.</p>
            <ol>
              <li>
                <strong>문제 정의:</strong> 개선하려는 지표와 현재 수치를 파악합니다.
                "회원가입 페이지의 전환율이 3%로 업계 평균(5%)보다 낮다."
              </li>
              <li>
                <strong>가설 수립:</strong> 구체적이고 측정 가능한 가설을 세웁니다.
                "회원가입 폼의 필드 수를 7개에서 3개로 줄이면 전환율이 5%로 증가할 것이다."
              </li>
              <li>
                <strong>변수 설정:</strong> 한 번에 하나의 변수만 변경합니다.
                여러 변수를 동시에 테스트하면 어떤 변경이 효과를 냈는지 알 수 없습니다.
              </li>
              <li>
                <strong>샘플 크기 계산:</strong> 통계적 유의성을 확보할 수 있는
                최소 샘플 크기를 사전에 산출합니다.
              </li>
              <li>
                <strong>무작위 배정:</strong> 사용자를 대조군과 실험군에 무작위로 배정합니다.
                선택 편향을 방지하기 위해 완전 무작위화가 중요합니다.
              </li>
              <li>
                <strong>실험 실행:</strong> 사전에 정한 기간 동안 테스트를 실행하며,
                중간에 결과를 보고 조기 종료하지 않습니다.
              </li>
              <li>
                <strong>결과 분석:</strong> 통계적 유의성을 검증하고 결과를 해석합니다.
              </li>
              <li>
                <strong>의사결정 및 적용:</strong> 결과를 바탕으로 변경 사항을 적용하거나
                추가 테스트를 설계합니다.
              </li>
            </ol>

            <div className="exercise-box">
              <h3>실습: A/B 테스트 가설 작성</h3>
              <p>다음 시나리오에 대해 A/B 테스트 가설을 작성해 보세요.</p>
              <ul>
                <li>시나리오 1: 이커머스 상품 상세 페이지의 '장바구니 담기' 버튼 위치</li>
                <li>시나리오 2: 뉴스레터 구독 팝업의 노출 타이밍</li>
                <li>시나리오 3: 랜딩 페이지의 히어로 이미지 vs 동영상</li>
              </ul>
              <p>
                각 가설은 "만약 [변경 사항]을 적용하면, [측정 지표]가 [예상 변화]할 것이다.
                왜냐하면 [근거]이기 때문이다." 형식으로 작성하세요.
              </p>
            </div>

            <h2>5. 통계적 유의성의 이해</h2>

            <h3>5.1 통계적 유의성이란</h3>
            <p>
              통계적 유의성(Statistical Significance)은 실험 결과가 우연이 아닌 실제 효과를
              반영하는지를 판단하는 기준입니다. A/B 테스트에서 관찰된 차이가 단순한
              표본 변동이 아닌 진짜 차이인지를 확인하는 데 필수적입니다.
            </p>

            <table className="lesson-table">
              <thead>
                <tr>
                  <th>개념</th>
                  <th>설명</th>
                  <th>일반적 기준</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>p-value</td>
                  <td>대조군과 실험군 간 차이가 우연에 의한 것일 확률</td>
                  <td>p &lt; 0.05 (5% 미만)</td>
                </tr>
                <tr>
                  <td>신뢰 수준(Confidence Level)</td>
                  <td>결과가 실제 효과를 반영한다는 확신의 정도</td>
                  <td>95% 이상</td>
                </tr>
                <tr>
                  <td>통계적 검정력(Power)</td>
                  <td>실제 효과가 있을 때 이를 감지할 확률</td>
                  <td>80% 이상</td>
                </tr>
                <tr>
                  <td>최소 감지 효과(MDE)</td>
                  <td>감지하고자 하는 최소한의 효과 크기</td>
                  <td>비즈니스 맥락에 따라 결정</td>
                </tr>
                <tr>
                  <td>신뢰 구간</td>
                  <td>실제 효과가 존재할 것으로 추정되는 범위</td>
                  <td>95% 신뢰 구간</td>
                </tr>
              </tbody>
            </table>

            <h3>5.2 흔한 통계적 오류</h3>
            <p>A/B 테스트에서 자주 발생하는 통계적 오류와 그 대응 방안입니다.</p>
            <ul>
              <li>
                <strong>Peeking 문제:</strong> 실험 도중 결과를 확인하고 조기에 판단을 내리는 것.
                충분한 샘플이 모이기 전에 유의미한 결과가 나타났다가 사라질 수 있습니다.
                사전에 정한 실험 기간과 샘플 크기를 반드시 준수하세요.
              </li>
              <li>
                <strong>다중 비교 문제:</strong> 여러 지표를 동시에 테스트하면 우연히
                유의미한 결과가 나올 확률이 높아집니다. 핵심 지표를 사전에 하나만
                정의하고, 보조 지표는 탐색적으로만 활용합니다.
              </li>
              <li>
                <strong>심슨의 역설:</strong> 전체 데이터에서의 추세와 세그먼트별 추세가
                반대로 나타나는 현상. 주요 세그먼트별로도 결과를 분석해야 합니다.
              </li>
              <li>
                <strong>노블티 효과:</strong> 새로운 디자인에 대한 호기심으로 일시적인
                성과 상승이 나타나는 것. 충분한 기간 동안 테스트하여 효과가 지속되는지 확인합니다.
              </li>
            </ul>

            <h3>5.3 샘플 크기 계산</h3>
            <p>
              적절한 샘플 크기를 사전에 계산하는 것은 A/B 테스트의 성공을 좌우합니다.
              샘플 크기는 다음 요소에 의해 결정됩니다.
            </p>
            <ul>
              <li>현재 전환율 (기준치, Baseline)</li>
              <li>최소 감지 효과 (MDE: Minimum Detectable Effect)</li>
              <li>통계적 유의 수준 (일반적으로 5%)</li>
              <li>통계적 검정력 (일반적으로 80%)</li>
            </ul>
            <p>
              예를 들어, 현재 전환율이 5%이고 10%의 상대적 변화(0.5%p의 절대적 변화)를
              감지하고 싶다면, 그룹당 약 31,000명의 샘플이 필요합니다.
              Optimizely나 Evan Miller의 샘플 크기 계산기를 활용하면 편리합니다.
            </p>

            <h2>6. 실무에서의 A/B 테스팅</h2>

            <h3>6.1 테스트 우선순위 결정: ICE 프레임워크</h3>
            <p>
              모든 아이디어를 테스트할 수 없으므로, 우선순위를 결정하는 체계적인
              방법이 필요합니다. ICE 프레임워크는 각 아이디어를 세 가지 기준으로
              1~10점 평가합니다.
            </p>
            <table className="lesson-table">
              <thead>
                <tr>
                  <th>기준</th>
                  <th>설명</th>
                  <th>평가 질문</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Impact (영향력)</td>
                  <td>성공 시 비즈니스에 미치는 영향</td>
                  <td>이 변화가 핵심 지표에 얼마나 큰 영향을 줄까?</td>
                </tr>
                <tr>
                  <td>Confidence (확신도)</td>
                  <td>성공에 대한 확신 정도</td>
                  <td>데이터나 사례를 통해 성공 가능성을 뒷받침할 수 있는가?</td>
                </tr>
                <tr>
                  <td>Ease (용이성)</td>
                  <td>구현의 쉬운 정도</td>
                  <td>얼마나 빠르고 쉽게 테스트를 구현할 수 있는가?</td>
                </tr>
              </tbody>
            </table>

            <h3>6.2 멀티배리에이트 테스트(MVT)</h3>
            <p>
              A/B 테스트가 하나의 변수를 테스트하는 것이라면, 멀티배리에이트 테스트는
              여러 변수의 조합을 동시에 테스트합니다. 예를 들어 헤드라인 2종과
              CTA 버튼 2종의 조합으로 총 4가지 변형을 테스트할 수 있습니다.
            </p>
            <ul>
              <li><strong>장점:</strong> 변수 간 상호작용 효과 파악 가능, 최적의 조합 발견</li>
              <li><strong>단점:</strong> 매우 큰 트래픽 필요, 결과 해석 복잡</li>
              <li><strong>적합한 경우:</strong> 높은 트래픽을 가진 사이트에서 여러 요소의 최적 조합을 찾을 때</li>
            </ul>

            <h3>6.3 주요 A/B 테스팅 도구</h3>
            <table className="lesson-table">
              <thead>
                <tr>
                  <th>도구</th>
                  <th>특징</th>
                  <th>가격</th>
                  <th>적합 대상</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Optimizely</td>
                  <td>엔터프라이즈급, 풍부한 기능, 통계 엔진 내장</td>
                  <td>유료 (고가)</td>
                  <td>대기업, 전문 실험 팀</td>
                </tr>
                <tr>
                  <td>VWO</td>
                  <td>비주얼 에디터, 히트맵 통합, 올인원 플랫폼</td>
                  <td>유료 (중간)</td>
                  <td>중소기업~대기업</td>
                </tr>
                <tr>
                  <td>AB Tasty</td>
                  <td>마케터 친화적, 개인화 기능 내장</td>
                  <td>유료</td>
                  <td>마케팅 팀 중심 조직</td>
                </tr>
                <tr>
                  <td>Firebase A/B Testing</td>
                  <td>모바일 앱 특화, Remote Config 연동</td>
                  <td>무료</td>
                  <td>모바일 앱 개발팀</td>
                </tr>
                <tr>
                  <td>PostHog</td>
                  <td>오픈소스, 자체 호스팅, 기능 플래그 통합</td>
                  <td>무료/유료</td>
                  <td>개발 팀 주도 조직</td>
                </tr>
                <tr>
                  <td>LaunchDarkly</td>
                  <td>기능 플래그 전문, 점진적 롤아웃 지원</td>
                  <td>유료</td>
                  <td>DevOps/개발 팀</td>
                </tr>
              </tbody>
            </table>

            <div className="exercise-box">
              <h3>실습: A/B 테스트 결과 분석</h3>
              <p>다음 테스트 결과를 분석하고 의사결정을 내려보세요.</p>
              <table className="lesson-table">
                <thead>
                  <tr>
                    <th>항목</th>
                    <th>대조군 (A)</th>
                    <th>실험군 (B)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>방문자 수</td>
                    <td>12,500</td>
                    <td>12,300</td>
                  </tr>
                  <tr>
                    <td>전환 수</td>
                    <td>375</td>
                    <td>410</td>
                  </tr>
                  <tr>
                    <td>전환율</td>
                    <td>3.00%</td>
                    <td>3.33%</td>
                  </tr>
                  <tr>
                    <td>p-value</td>
                    <td colSpan="2">0.12</td>
                  </tr>
                </tbody>
              </table>
              <p>
                질문: 이 결과를 바탕으로 실험군(B)을 적용해야 할까요?
                p-value가 0.12라는 것은 무엇을 의미하며, 어떤 후속 조치가 적절할까요?
              </p>
            </div>

            <div className="callout-box">
              <h3>핵심 정리</h3>
              <ul>
                <li>콘텐츠 개인화는 세그먼트 기반에서 실시간 1:1까지 다양한 수준으로 구현할 수 있다</li>
                <li>효과적인 세그멘테이션은 인구통계, 행동, 심리, 기술 등 다차원적 기준을 결합한다</li>
                <li>추천 시스템은 협업 필터링, 콘텐츠 기반, 하이브리드 등 다양한 알고리즘을 활용한다</li>
                <li>A/B 테스트는 가설 수립 → 실험 설계 → 실행 → 분석의 과학적 프로세스를 따른다</li>
                <li>통계적 유의성(p &lt; 0.05)은 결과의 신뢰성을 보장하는 필수 기준이다</li>
                <li>Peeking, 다중 비교, 노블티 효과 등 흔한 함정을 인지하고 피해야 한다</li>
                <li>개인화와 테스팅은 윤리적 고려사항을 항상 염두에 두어야 한다</li>
              </ul>
            </div>

            <div className="lesson-nav">
              <Link to="/ux/ui-content" className="lesson-nav-btn prev">
                ← 9주차: UI 콘텐츠 작성
              </Link>
              <Link to="/ux/multichannel" className="lesson-nav-btn next">
                11주차: 멀티채널 콘텐츠 전략 →
              </Link>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default UxWeek10;
