import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import { useLanguage } from '../contexts/LanguageContext';

const UxWeek6 = () => {
  const { t } = useLanguage();

  return (
    <>
      <SEOHead title="6주차: UX 라이팅과 마이크로카피" path="/ux/ux-writing" />

      <section className="page-header">
        <div className="container">
          <h1>6주차: UX 라이팅과 마이크로카피</h1>
          <p>사용자 경험을 향상시키는 글쓰기 원칙과 기법을 학습합니다</p>
        </div>
      </section>

      <section className="section lesson-content">
        <div className="container">
          <div className="lesson-body">

            <div className="callout-box">
              <h3>학습 목표</h3>
              <ul>
                <li>UX Writing의 개념과 역할을 이해한다.</li>
                <li>좋은 UX Writing의 4가지 원칙(명확, 간결, 유용, 인간적)을 적용할 수 있다.</li>
                <li>마이크로카피의 유형(버튼, 에러, 빈 상태, 온보딩)별 작성법을 익힌다.</li>
                <li>Voice &amp; Tone 가이드를 이해하고 설계할 수 있다.</li>
                <li>효과적인 에러 메시지를 작성할 수 있다.</li>
                <li>전환율을 높이는 CTA(Call to Action)를 작성할 수 있다.</li>
              </ul>
            </div>

            {/* ========== UX Writing 정의 ========== */}
            <h2>1. UX Writing 정의</h2>

            <h3>1.1 UX Writing이란?</h3>
            <p>
              UX Writing은 <strong>디지털 제품 내에서 사용자와 소통하는 모든 텍스트를
              전략적으로 설계하는 분야</strong>입니다. 버튼 레이블, 에러 메시지, 안내 문구,
              알림 텍스트, 온보딩 가이드 등 사용자가 제품을 사용하면서 마주치는 모든 텍스트가
              UX Writing의 범위에 포함됩니다.
            </p>
            <p>
              UX Writer는 단순히 &quot;글을 쓰는 사람&quot;이 아닙니다. 사용자의 맥락을 이해하고,
              적절한 순간에 적절한 정보를 전달하여 <strong>사용자가 목표를 달성하도록 돕는
              디자이너</strong>입니다. Google, Apple, Microsoft, 카카오, 토스 등
              세계 주요 기업들이 전문 UX Writer를 고용하고 있습니다.
            </p>

            <h3>1.2 UX Writing vs. 카피라이팅</h3>
            <table className="lesson-table">
              <thead>
                <tr>
                  <th>구분</th>
                  <th>UX Writing</th>
                  <th>카피라이팅 (Copywriting)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>주요 목적</strong></td>
                  <td>사용자가 제품을 쉽게 사용하도록 안내</td>
                  <td>고객의 관심을 끌고 구매를 유도</td>
                </tr>
                <tr>
                  <td><strong>톤</strong></td>
                  <td>명확하고 실용적</td>
                  <td>설득적이고 감성적</td>
                </tr>
                <tr>
                  <td><strong>측정 지표</strong></td>
                  <td>완료율, 에러율, 만족도</td>
                  <td>클릭률, 전환율, 매출</td>
                </tr>
                <tr>
                  <td><strong>적용 위치</strong></td>
                  <td>UI 내부 (버튼, 폼, 에러, 안내)</td>
                  <td>광고, 랜딩페이지, 마케팅 이메일</td>
                </tr>
                <tr>
                  <td><strong>문체</strong></td>
                  <td>최소한의 단어로 최대한의 정보</td>
                  <td>풍부한 표현으로 감정 유발</td>
                </tr>
              </tbody>
            </table>

            <h3>1.3 UX Writing이 비즈니스에 미치는 영향</h3>
            <p>
              UX Writing의 효과는 실제 수치로 입증되고 있습니다.
            </p>
            <ul>
              <li><strong>Google</strong>: 호텔 예약 버튼의 텍스트를 &quot;Book a room&quot;에서 &quot;Check availability&quot;로 변경했을 때 참여율이 17% 증가했습니다.</li>
              <li><strong>Booking.com</strong>: 에러 메시지를 개선하여 폼 완료율을 크게 향상시켰습니다.</li>
              <li><strong>토스</strong>: 송금 완료 화면의 문구를 개선하여 사용자 만족도가 크게 높아졌습니다.</li>
              <li><strong>당근마켓</strong>: 따뜻하고 친근한 톤의 UX Writing으로 서비스 브랜드 정체성을 강화했습니다.</li>
            </ul>

            {/* ========== 좋은 UX Writing의 4원칙 ========== */}
            <h2>2. 좋은 UX Writing의 4원칙</h2>

            <h3>2.1 명확함 (Clear)</h3>
            <p>
              사용자가 <strong>한 번에 이해할 수 있도록 명확하게</strong> 작성합니다.
              전문 용어, 모호한 표현, 이중 부정을 피하고, 사용자의 관점에서
              어떤 의미인지 즉시 알 수 있어야 합니다.
            </p>
            <table className="lesson-table">
              <thead>
                <tr>
                  <th>상황</th>
                  <th>나쁜 예</th>
                  <th>좋은 예</th>
                  <th>개선 포인트</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>비밀번호 규칙</td>
                  <td>&quot;비밀번호가 정책에 부합하지 않습니다&quot;</td>
                  <td>&quot;비밀번호는 8자 이상, 영문+숫자를 포함해야 합니다&quot;</td>
                  <td>구체적인 조건을 명시</td>
                </tr>
                <tr>
                  <td>권한 요청</td>
                  <td>&quot;위치 서비스를 활성화하시겠습니까?&quot;</td>
                  <td>&quot;주변 맛집을 찾으려면 위치 접근을 허용해 주세요&quot;</td>
                  <td>허용의 이유(혜택)를 설명</td>
                </tr>
                <tr>
                  <td>결제 완료</td>
                  <td>&quot;트랜잭션이 성공적으로 처리되었습니다&quot;</td>
                  <td>&quot;결제가 완료되었습니다. 주문 번호: #12345&quot;</td>
                  <td>기술 용어 대신 일상 언어 사용</td>
                </tr>
              </tbody>
            </table>

            <h3>2.2 간결함 (Concise)</h3>
            <p>
              <strong>불필요한 단어를 제거</strong>하고 핵심만 전달합니다. 모바일 환경에서는
              화면이 제한적이므로 간결함이 특히 중요합니다. 하지만 간결함이 명확함을 해쳐서는
              안 됩니다. 필요한 정보까지 줄이면 오히려 혼란을 초래합니다.
            </p>
            <table className="lesson-table">
              <thead>
                <tr>
                  <th>나쁜 예 (장황함)</th>
                  <th>좋은 예 (간결함)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>&quot;현재 입력하신 이메일 주소가 올바른 형식이 아닌 것으로 판단됩니다&quot;</td>
                  <td>&quot;이메일 형식을 확인해 주세요 (예: name@example.com)&quot;</td>
                </tr>
                <tr>
                  <td>&quot;계속 진행하시려면 아래의 동의 버튼을 클릭해 주시기 바랍니다&quot;</td>
                  <td>&quot;계속하려면 '동의'를 눌러주세요&quot;</td>
                </tr>
                <tr>
                  <td>&quot;지금 바로 무료로 가입하기를 원하시면 여기를 눌러주세요&quot;</td>
                  <td>&quot;무료로 시작하기&quot;</td>
                </tr>
                <tr>
                  <td>&quot;죄송합니다만, 현재 이 기능은 사용하실 수 없는 상태에 있습니다&quot;</td>
                  <td>&quot;이 기능은 현재 사용할 수 없습니다&quot;</td>
                </tr>
              </tbody>
            </table>

            <h3>2.3 유용함 (Useful)</h3>
            <p>
              텍스트가 사용자에게 <strong>실질적으로 도움이 되는 정보를 제공</strong>해야 합니다.
              단순히 상태를 알려주는 것을 넘어, 사용자가 다음에 무엇을 해야 하는지 안내합니다.
            </p>
            <table className="lesson-table">
              <thead>
                <tr>
                  <th>상황</th>
                  <th>유용하지 않은 예</th>
                  <th>유용한 예</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>파일 업로드 실패</td>
                  <td>&quot;업로드 실패&quot;</td>
                  <td>&quot;파일이 10MB를 초과합니다. 크기를 줄이거나 다른 파일을 선택해 주세요&quot;</td>
                </tr>
                <tr>
                  <td>검색 결과 없음</td>
                  <td>&quot;결과가 없습니다&quot;</td>
                  <td>&quot;'UX디자인' 검색 결과가 없습니다. 다른 키워드를 시도하거나 전체 강좌를 둘러보세요&quot;</td>
                </tr>
                <tr>
                  <td>계정 잠김</td>
                  <td>&quot;계정이 잠겼습니다&quot;</td>
                  <td>&quot;보안을 위해 계정이 잠겼습니다. '비밀번호 재설정'으로 잠금을 해제할 수 있습니다&quot;</td>
                </tr>
              </tbody>
            </table>

            <h3>2.4 인간적임 (Human)</h3>
            <p>
              기계적이거나 관료적이지 않고, <strong>사람이 사람에게 말하듯</strong> 자연스럽게
              작성합니다. 브랜드의 성격에 맞는 적절한 친근함을 유지하되, 과하지 않아야 합니다.
            </p>
            <table className="lesson-table">
              <thead>
                <tr>
                  <th>기계적 표현</th>
                  <th>인간적 표현</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>&quot;오류 코드 404: 요청하신 리소스를 찾을 수 없습니다&quot;</td>
                  <td>&quot;페이지를 찾을 수 없어요. 주소를 다시 확인하거나 홈으로 이동해 보세요&quot;</td>
                </tr>
                <tr>
                  <td>&quot;세션이 만료되었습니다. 재인증이 필요합니다&quot;</td>
                  <td>&quot;오래 자리를 비우셨네요. 보안을 위해 다시 로그인해 주세요&quot;</td>
                </tr>
                <tr>
                  <td>&quot;프로세스가 완료되었습니다&quot;</td>
                  <td>&quot;다 했어요! 이제 바로 사용할 수 있습니다&quot;</td>
                </tr>
              </tbody>
            </table>

            {/* ========== 마이크로카피 유형 ========== */}
            <h2>3. 마이크로카피 유형별 작성법</h2>

            <p>
              마이크로카피(Microcopy)는 <strong>UI 내에서 사용자를 안내하는 짧은 텍스트</strong>를
              총칭합니다. 작지만 사용자 경험에 큰 영향을 미치는 핵심 요소입니다.
            </p>

            <h3>3.1 버튼 텍스트</h3>
            <table className="lesson-table">
              <thead>
                <tr>
                  <th>원칙</th>
                  <th>설명</th>
                  <th>나쁜 예</th>
                  <th>좋은 예</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>동사로 시작</strong></td>
                  <td>행동을 명확히 표현</td>
                  <td>&quot;확인&quot; / &quot;예&quot;</td>
                  <td>&quot;결제하기&quot; / &quot;장바구니에 담기&quot;</td>
                </tr>
                <tr>
                  <td><strong>결과 예측 가능</strong></td>
                  <td>클릭 후 무슨 일이 일어나는지 알 수 있게</td>
                  <td>&quot;제출&quot;</td>
                  <td>&quot;리뷰 등록하기&quot;</td>
                </tr>
                <tr>
                  <td><strong>구체적 표현</strong></td>
                  <td>범용적이지 않은 맥락에 맞는 표현</td>
                  <td>&quot;다음&quot;</td>
                  <td>&quot;배송지 입력으로 이동&quot;</td>
                </tr>
                <tr>
                  <td><strong>적절한 길이</strong></td>
                  <td>2-5단어 이내가 이상적</td>
                  <td>&quot;지금 바로 무료 체험을 시작해 보세요&quot;</td>
                  <td>&quot;무료 체험 시작&quot;</td>
                </tr>
              </tbody>
            </table>

            <h3>3.2 에러 메시지</h3>
            <p>
              에러 메시지는 사용자가 가장 좌절하는 순간에 만나는 텍스트입니다.
              잘 작성된 에러 메시지는 좌절감을 줄이고, 문제 해결을 도와줍니다.
            </p>
            <ul>
              <li><strong>무엇이 잘못되었는지</strong> 명확히 설명합니다.</li>
              <li><strong>왜 잘못되었는지</strong> 이유를 알려줍니다.</li>
              <li><strong>어떻게 해결하는지</strong> 구체적인 방법을 제시합니다.</li>
              <li>사용자를 <strong>비난하지 않습니다</strong> (&quot;잘못된 입력&quot; 대신 &quot;입력을 확인해 주세요&quot;).</li>
              <li>기술적 용어나 에러 코드를 <strong>사용자 언어로 번역</strong>합니다.</li>
            </ul>

            <h3>3.3 빈 상태 (Empty State)</h3>
            <p>
              빈 상태는 콘텐츠가 아직 없는 화면(장바구니, 검색 결과, 알림 목록 등)을 말합니다.
              이 순간을 활용하면 사용자의 다음 행동을 자연스럽게 유도할 수 있습니다.
            </p>
            <table className="lesson-table">
              <thead>
                <tr>
                  <th>화면</th>
                  <th>나쁜 빈 상태</th>
                  <th>좋은 빈 상태</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>장바구니</td>
                  <td>&quot;장바구니가 비어 있습니다&quot;</td>
                  <td>&quot;아직 담은 상품이 없어요. 오늘의 추천 상품을 둘러보세요!&quot;</td>
                </tr>
                <tr>
                  <td>알림</td>
                  <td>&quot;알림 없음&quot;</td>
                  <td>&quot;새로운 소식이 없어요. 관심 있는 강좌를 팔로우하면 알림을 받을 수 있습니다&quot;</td>
                </tr>
                <tr>
                  <td>검색 결과</td>
                  <td>&quot;결과 없음&quot;</td>
                  <td>&quot;검색 결과가 없습니다. 맞춤법을 확인하거나 더 짧은 키워드로 검색해 보세요&quot;</td>
                </tr>
                <tr>
                  <td>즐겨찾기</td>
                  <td>&quot;즐겨찾기 목록이 비어 있습니다&quot;</td>
                  <td>&quot;마음에 드는 항목에 하트를 눌러보세요. 여기에서 모아볼 수 있어요&quot;</td>
                </tr>
              </tbody>
            </table>

            <h3>3.4 온보딩 텍스트</h3>
            <p>
              사용자가 제품을 처음 사용할 때 만나는 텍스트입니다. 핵심 기능을 소개하고
              첫 행동을 유도하는 역할을 합니다.
            </p>
            <ul>
              <li><strong>짧고 핵심적</strong>으로: 한 화면에 하나의 메시지만 전달합니다.</li>
              <li><strong>혜택 중심</strong>으로: 기능 설명보다 사용자가 얻는 가치를 강조합니다.</li>
              <li><strong>행동 유도</strong>: 각 단계에서 사용자가 해야 할 구체적 행동을 안내합니다.</li>
              <li><strong>건너뛰기 옵션</strong>: 이미 아는 사용자를 위해 스킵 옵션을 제공합니다.</li>
            </ul>

            {/* ========== Voice & Tone 가이드 ========== */}
            <h2>4. Voice &amp; Tone 가이드</h2>

            <h3>4.1 Voice와 Tone의 차이</h3>
            <p>
              <strong>Voice(보이스)</strong>는 브랜드의 성격이며, 항상 일관됩니다.
              &quot;우리 브랜드가 사람이라면 어떤 성격일까?&quot;에 대한 답입니다.
              <strong>Tone(톤)</strong>은 상황에 따라 조절되는 말투입니다.
              같은 사람도 축하할 때와 위로할 때 다른 톤을 사용하듯, 상황에 맞게 변합니다.
            </p>
            <table className="lesson-table">
              <thead>
                <tr>
                  <th>구분</th>
                  <th>Voice (보이스)</th>
                  <th>Tone (톤)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>정의</strong></td>
                  <td>브랜드의 고유한 성격과 말하기 방식</td>
                  <td>상황에 따른 감정적 뉘앙스</td>
                </tr>
                <tr>
                  <td><strong>일관성</strong></td>
                  <td>항상 동일하게 유지</td>
                  <td>상황에 따라 유연하게 조절</td>
                </tr>
                <tr>
                  <td><strong>비유</strong></td>
                  <td>사람의 성격</td>
                  <td>사람의 기분/말투</td>
                </tr>
                <tr>
                  <td><strong>예시</strong></td>
                  <td>&quot;친근하고 전문적인&quot;</td>
                  <td>성공 시: 밝고 축하하는 / 에러 시: 차분하고 도움 주는</td>
                </tr>
              </tbody>
            </table>

            <h3>4.2 Voice 설계 프레임워크</h3>
            <p>
              브랜드의 Voice를 정의할 때 <strong>4차원 스펙트럼</strong>을 활용할 수 있습니다.
              각 차원에서 브랜드가 어디에 위치하는지 결정합니다.
            </p>
            <table className="lesson-table">
              <thead>
                <tr>
                  <th>차원</th>
                  <th>스펙트럼</th>
                  <th>예시 브랜드</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>격식</strong></td>
                  <td>격식적 --- 캐주얼</td>
                  <td>은행(격식적) vs. 배달 앱(캐주얼)</td>
                </tr>
                <tr>
                  <td><strong>유머</strong></td>
                  <td>진지한 --- 유머러스한</td>
                  <td>의료 서비스(진지) vs. 게임(유머)</td>
                </tr>
                <tr>
                  <td><strong>감정</strong></td>
                  <td>절제된 --- 감성적</td>
                  <td>B2B SaaS(절제) vs. 여행 서비스(감성)</td>
                </tr>
                <tr>
                  <td><strong>권위</strong></td>
                  <td>권위적 --- 동료적</td>
                  <td>정부 서비스(권위) vs. 커뮤니티 앱(동료)</td>
                </tr>
              </tbody>
            </table>

            <h3>4.3 상황별 Tone 가이드</h3>
            <table className="lesson-table">
              <thead>
                <tr>
                  <th>상황</th>
                  <th>사용자 감정</th>
                  <th>적절한 Tone</th>
                  <th>예시</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>성공/완료</strong></td>
                  <td>뿌듯함, 안도</td>
                  <td>축하, 긍정적</td>
                  <td>&quot;주문이 완료되었어요! 내일까지 도착 예정입니다&quot;</td>
                </tr>
                <tr>
                  <td><strong>에러/실패</strong></td>
                  <td>좌절, 불안</td>
                  <td>차분, 도움 제공</td>
                  <td>&quot;결제가 완료되지 않았습니다. 카드 정보를 확인하고 다시 시도해 주세요&quot;</td>
                </tr>
                <tr>
                  <td><strong>대기/로딩</strong></td>
                  <td>지루함, 불확실</td>
                  <td>안심, 진행 상황 공유</td>
                  <td>&quot;잠시만요, 최적의 결과를 찾고 있습니다...&quot;</td>
                </tr>
                <tr>
                  <td><strong>경고/주의</strong></td>
                  <td>긴장, 경각심</td>
                  <td>명확, 진지</td>
                  <td>&quot;이 작업은 되돌릴 수 없습니다. 정말 삭제하시겠습니까?&quot;</td>
                </tr>
                <tr>
                  <td><strong>온보딩</strong></td>
                  <td>호기심, 기대</td>
                  <td>환영, 격려</td>
                  <td>&quot;환영합니다! 3분이면 시작할 수 있어요&quot;</td>
                </tr>
              </tbody>
            </table>

            {/* ========== 에러 메시지 작성법 ========== */}
            <h2>5. 에러 메시지 작성법</h2>

            <h3>5.1 좋은 에러 메시지의 3요소</h3>
            <p>
              효과적인 에러 메시지는 세 가지 정보를 포함해야 합니다:
              <strong> 무엇이 일어났는지, 왜 일어났는지, 어떻게 해결하는지</strong>.
            </p>
            <table className="lesson-table">
              <thead>
                <tr>
                  <th>요소</th>
                  <th>역할</th>
                  <th>나쁜 예</th>
                  <th>좋은 예</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>What (무엇)</strong></td>
                  <td>문제 상황을 명확히 설명</td>
                  <td>&quot;Error&quot;</td>
                  <td>&quot;비밀번호가 일치하지 않습니다&quot;</td>
                </tr>
                <tr>
                  <td><strong>Why (왜)</strong></td>
                  <td>원인을 이해할 수 있게 안내</td>
                  <td>&quot;잘못된 요청&quot;</td>
                  <td>&quot;5회 이상 비밀번호를 잘못 입력하여 계정이 잠겼습니다&quot;</td>
                </tr>
                <tr>
                  <td><strong>How (어떻게)</strong></td>
                  <td>구체적인 해결 방법 제시</td>
                  <td>&quot;다시 시도하세요&quot;</td>
                  <td>&quot;'비밀번호 재설정'을 클릭하여 이메일로 새 비밀번호를 받으세요&quot;</td>
                </tr>
              </tbody>
            </table>

            <h3>5.2 에러 메시지 작성 체크리스트</h3>
            <ul>
              <li>사용자를 탓하지 않는가? (&quot;잘못된 입력&quot; 대신 &quot;입력을 확인해 주세요&quot;)</li>
              <li>기술 용어를 사용하지 않았는가? (&quot;HTTP 500&quot; 대신 &quot;서버에 문제가 생겼습니다&quot;)</li>
              <li>다음 행동을 안내하는가? (&quot;실패&quot; 대신 &quot;다시 시도하거나 고객센터에 문의해 주세요&quot;)</li>
              <li>에러가 발생한 바로 그 위치에 메시지가 표시되는가?</li>
              <li>사용자가 이미 입력한 내용이 유지되는가?</li>
              <li>긍정적 표현을 사용하는가? (&quot;~하면 안 됩니다&quot; 대신 &quot;~해주세요&quot;)</li>
            </ul>

            {/* ========== CTA 최적화 ========== */}
            <h2>6. CTA(Call to Action) 최적화</h2>

            <h3>6.1 CTA란?</h3>
            <p>
              CTA(Call to Action)는 <strong>사용자에게 특정 행동을 유도하는 버튼이나 링크</strong>입니다.
              &quot;가입하기&quot;, &quot;구매하기&quot;, &quot;무료 체험 시작&quot; 등이 대표적인 CTA입니다.
              CTA의 텍스트 하나로 전환율이 크게 달라질 수 있어, UX Writing에서 가장 영향력 있는
              요소 중 하나입니다.
            </p>

            <h3>6.2 효과적인 CTA 작성 원칙</h3>
            <table className="lesson-table">
              <thead>
                <tr>
                  <th>원칙</th>
                  <th>설명</th>
                  <th>예시</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>행동 동사로 시작</strong></td>
                  <td>사용자가 해야 할 행동을 직접적으로 표현</td>
                  <td>&quot;시작하기&quot;, &quot;다운로드&quot;, &quot;신청하기&quot;</td>
                </tr>
                <tr>
                  <td><strong>가치를 강조</strong></td>
                  <td>클릭으로 얻을 수 있는 혜택을 포함</td>
                  <td>&quot;무료로 시작하기&quot;, &quot;30% 할인 받기&quot;</td>
                </tr>
                <tr>
                  <td><strong>긴급성 부여</strong></td>
                  <td>지금 행동해야 하는 이유 제시</td>
                  <td>&quot;오늘만 특별가&quot;, &quot;3자리 남음&quot;</td>
                </tr>
                <tr>
                  <td><strong>부담 줄이기</strong></td>
                  <td>리스크가 없음을 강조</td>
                  <td>&quot;무료 체험&quot;, &quot;언제든 취소 가능&quot;, &quot;카드 정보 불필요&quot;</td>
                </tr>
                <tr>
                  <td><strong>1인칭 활용</strong></td>
                  <td>사용자의 관점에서 표현</td>
                  <td>&quot;내 보고서 받기&quot;, &quot;내 맞춤 플랜 보기&quot;</td>
                </tr>
              </tbody>
            </table>

            <h3>6.3 CTA A/B 테스트 사례</h3>
            <table className="lesson-table">
              <thead>
                <tr>
                  <th>변경 전</th>
                  <th>변경 후</th>
                  <th>결과</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>&quot;구매하기&quot;</td>
                  <td>&quot;장바구니에 담기&quot;</td>
                  <td>전환율 15% 증가 (부담 감소)</td>
                </tr>
                <tr>
                  <td>&quot;회원가입&quot;</td>
                  <td>&quot;무료로 시작하기&quot;</td>
                  <td>가입률 21% 증가 (가치 강조)</td>
                </tr>
                <tr>
                  <td>&quot;더 알아보기&quot;</td>
                  <td>&quot;나에게 맞는 플랜 찾기&quot;</td>
                  <td>클릭률 30% 증가 (개인화 + 구체성)</td>
                </tr>
                <tr>
                  <td>&quot;다운로드&quot;</td>
                  <td>&quot;무료 가이드 받기&quot;</td>
                  <td>다운로드율 25% 증가 (가치 명시)</td>
                </tr>
              </tbody>
            </table>

            {/* ========== 실습 ========== */}
            <h2>7. 실습: UX Writing 실습</h2>

            <div className="exercise-box">
              <h3>실습 과제 A: 마이크로카피 개선</h3>
              <p>
                아래의 기존 마이크로카피를 좋은 UX Writing의 4원칙(명확, 간결, 유용, 인간적)에 따라
                개선해 보세요.
              </p>
              <h4>개선 대상</h4>
              <ul>
                <li><strong>에러 메시지:</strong> &quot;Error 422: Unprocessable Entity. The request was well-formed but was unable to be followed due to semantic errors.&quot;</li>
                <li><strong>빈 상태:</strong> &quot;데이터가 없습니다.&quot;</li>
                <li><strong>권한 요청:</strong> &quot;이 애플리케이션이 카메라에 접근하려고 합니다. 허용하시겠습니까?&quot;</li>
                <li><strong>로딩 화면:</strong> &quot;Loading...&quot;</li>
                <li><strong>탈퇴 확인:</strong> &quot;정말 탈퇴하시겠습니까? 확인 / 취소&quot;</li>
              </ul>
              <h4>각 항목에 대해</h4>
              <ul>
                <li>기존 문제점을 분석합니다 (어떤 원칙을 위반하는지).</li>
                <li>개선된 텍스트를 작성합니다.</li>
                <li>왜 이렇게 개선했는지 근거를 설명합니다.</li>
              </ul>
            </div>

            <div className="exercise-box">
              <h3>실습 과제 B: Voice &amp; Tone 가이드 작성</h3>
              <p>
                가상의 서비스를 하나 선택하여 Voice &amp; Tone 가이드를 작성합니다.
              </p>
              <h4>작성 내용</h4>
              <ul>
                <li><strong>서비스 정의:</strong> 서비스의 핵심 가치와 타겟 사용자를 정의합니다.</li>
                <li><strong>Voice 정의:</strong> 4차원 스펙트럼에서 위치를 결정하고, 3개의 Voice 속성을 선정합니다 (예: &quot;친근하지만 전문적인, 활기찬&quot;).</li>
                <li><strong>Tone 가이드:</strong> 5가지 상황(성공, 에러, 대기, 경고, 온보딩)별 톤과 예시 문구를 작성합니다.</li>
                <li><strong>Do &amp; Don&apos;t:</strong> 각 Voice 속성에 대한 좋은 예시와 나쁜 예시를 3쌍 이상 작성합니다.</li>
              </ul>
            </div>

            <div className="exercise-box">
              <h3>실습 과제 C: CTA 최적화</h3>
              <p>
                자주 사용하는 앱이나 웹사이트에서 CTA를 5개 이상 수집하고, 개선안을 작성합니다.
              </p>
              <ul>
                <li>현재 CTA 텍스트와 그 위치(화면 캡처 또는 스케치)를 기록합니다.</li>
                <li>현재 CTA의 문제점을 분석합니다.</li>
                <li>개선된 CTA 텍스트를 2-3개 대안으로 작성합니다.</li>
                <li>가장 효과적이라고 생각하는 안을 선택하고 이유를 설명합니다.</li>
              </ul>
            </div>

            {/* ========== 핵심 정리 ========== */}
            <div className="callout-box">
              <h3>핵심 정리</h3>
              <ul>
                <li><strong>UX Writing</strong>은 디지털 제품 내 모든 텍스트를 전략적으로 설계하여 사용자 경험을 향상시키는 분야이다.</li>
                <li>좋은 UX Writing의 4원칙은 <strong>명확(Clear), 간결(Concise), 유용(Useful), 인간적(Human)</strong>이다.</li>
                <li><strong>마이크로카피</strong>(버튼, 에러, 빈 상태, 온보딩)는 작지만 사용자 경험에 큰 영향을 미치는 핵심 요소이다.</li>
                <li><strong>Voice</strong>는 브랜드의 일관된 성격이고, <strong>Tone</strong>은 상황에 따라 조절되는 말투이다.</li>
                <li>좋은 에러 메시지는 <strong>무엇(What), 왜(Why), 어떻게(How)</strong>를 포함한다.</li>
                <li><strong>CTA</strong>는 행동 동사로 시작하고, 가치를 강조하며, 부담을 줄여야 효과적이다.</li>
              </ul>
            </div>

            <div className="lesson-nav">
              <Link to="/ux/information-architecture" className="lesson-nav-btn prev">{"← 5주차: 정보 아키텍처(IA) 설계"}</Link>
              <Link to="/ux/content-strategy" className="lesson-nav-btn next">{"7주차: 콘텐츠 전략 →"}</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default UxWeek6;
