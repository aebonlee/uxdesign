import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import { useLanguage } from '../contexts/LanguageContext';

const UxWeek8 = () => {
  const { t } = useLanguage();

  return (
    <>
      <SEOHead title="비주얼 콘텐츠 디자인" path="/ux/visual-design" />

      <section className="page-header">
        <div className="container">
          <h1>8주차: 비주얼 콘텐츠 디자인</h1>
          <p>Visual Content Design - 디자인 원칙과 Figma 활용</p>
        </div>
      </section>

      <section className="section lesson-content">
        <div className="container">
          <div className="lesson-body">

            <div className="callout-box">
              <h3>학습 목표</h3>
              <ul>
                <li>비주얼 디자인의 핵심 원칙을 이해하고 적용할 수 있다.</li>
                <li>디자인 시스템의 개념과 구성 요소를 파악한다.</li>
                <li>Figma의 기본 기능을 활용하여 비주얼 콘텐츠를 제작할 수 있다.</li>
                <li>비주얼 계층구조를 통해 사용자의 시선을 효과적으로 유도할 수 있다.</li>
              </ul>
            </div>

            <h2>1. 비주얼 콘텐츠 디자인이란?</h2>
            <p>
              <strong>비주얼 콘텐츠 디자인</strong>은 시각적 요소를 활용하여 정보를 효과적으로
              전달하고 사용자 경험을 향상시키는 디자인 영역입니다. 텍스트만으로는 전달하기 어려운
              복잡한 정보도 시각적 표현을 통해 직관적으로 이해할 수 있게 만듭니다.
            </p>
            <p>
              좋은 비주얼 디자인은 단순히 "예쁜 것"이 아니라, 명확한 커뮤니케이션 목적을 가지고
              사용자가 정보를 빠르고 정확하게 인식할 수 있도록 돕는 것입니다.
              미학적 가치와 기능적 가치가 조화를 이룰 때 비로소 효과적인 비주얼 콘텐츠가 완성됩니다.
            </p>

            <h3>1.1 비주얼 디자인의 역할</h3>
            <ul>
              <li><strong>정보 전달</strong>: 데이터와 개념을 시각적으로 표현하여 이해도를 높입니다.</li>
              <li><strong>브랜드 아이덴티티</strong>: 일관된 시각 언어로 브랜드를 인식하게 합니다.</li>
              <li><strong>사용자 유도</strong>: 시각적 계층구조로 사용자의 행동을 유도합니다.</li>
              <li><strong>감정적 연결</strong>: 색상, 이미지, 타이포그래피로 감정적 반응을 이끌어냅니다.</li>
            </ul>

            <h2>2. 디자인 원칙</h2>
            <p>
              Robin Williams가 <em>The Non-Designer's Design Book</em>에서 제시한 CRAP 원칙은
              디자인의 기초를 이루는 네 가지 핵심 원칙입니다. 이 원칙들은 서로 독립적이면서도
              함께 작동하여 효과적인 비주얼 디자인을 만들어냅니다.
            </p>

            <table className="lesson-table">
              <thead>
                <tr><th>원칙</th><th>영문</th><th>설명</th><th>적용 예시</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>대비</strong></td>
                  <td>Contrast</td>
                  <td>서로 다른 요소를 명확하게 구분하여 시각적 흥미와 계층을 형성</td>
                  <td>큰 제목 vs 작은 본문, 밝은 배경 vs 어두운 텍스트, 굵은 글씨 vs 가는 글씨</td>
                </tr>
                <tr>
                  <td><strong>정렬</strong></td>
                  <td>Alignment</td>
                  <td>모든 요소를 의도적으로 배치하여 시각적 연결과 질서를 부여</td>
                  <td>좌측 정렬 텍스트, 그리드 시스템, 요소 간 정렬선 일치</td>
                </tr>
                <tr>
                  <td><strong>반복</strong></td>
                  <td>Repetition</td>
                  <td>시각적 요소를 반복하여 일관성과 통일감을 형성</td>
                  <td>동일한 색상 팔레트, 일관된 아이콘 스타일, 반복되는 레이아웃 패턴</td>
                </tr>
                <tr>
                  <td><strong>근접</strong></td>
                  <td>Proximity</td>
                  <td>관련된 항목을 가까이 배치하여 그룹을 형성하고 정보의 구조를 표현</td>
                  <td>관련 메뉴 항목 그룹핑, 라벨과 입력 필드 근접 배치, 섹션 간 여백 활용</td>
                </tr>
              </tbody>
            </table>

            <h3>2.1 비주얼 계층구조(Visual Hierarchy)</h3>
            <p>
              비주얼 계층구조는 디자인 요소의 중요도를 시각적으로 표현하여 사용자의 시선을
              의도한 순서대로 유도하는 기법입니다. 크기, 색상, 대비, 위치, 여백 등의
              시각적 속성을 조합하여 정보의 우선순위를 전달합니다.
            </p>
            <ul>
              <li><strong>크기(Size)</strong>: 큰 요소가 먼저 인식됩니다. 제목은 본문보다 크게 설정합니다.</li>
              <li><strong>색상(Color)</strong>: 강조 색상(Accent Color)으로 주요 요소를 부각시킵니다.</li>
              <li><strong>여백(White Space)</strong>: 충분한 여백은 요소를 돋보이게 하고 가독성을 높입니다.</li>
              <li><strong>위치(Position)</strong>: 상단과 좌측에 배치된 요소가 먼저 인식됩니다(F-패턴, Z-패턴).</li>
            </ul>

            <h2>3. 타이포그래피와 색상</h2>

            <h3>3.1 타이포그래피 기초</h3>
            <p>
              타이포그래피는 텍스트를 읽기 쉽고 아름답게 배치하는 기술입니다.
              웹과 앱에서 콘텐츠의 대부분은 텍스트이므로, 타이포그래피는 UX에 직접적인 영향을 미칩니다.
            </p>
            <ul>
              <li><strong>서체 선택</strong>: 본문에는 가독성이 높은 산세리프(Sans-serif) 서체를 주로 사용합니다. 한글은 Pretendard, Noto Sans KR 등이 대표적입니다.</li>
              <li><strong>글자 크기</strong>: 본문은 16px 이상을 권장하며, 제목은 본문 대비 1.5~3배 크기를 사용합니다.</li>
              <li><strong>줄 간격(Line Height)</strong>: 본문 글자 크기의 1.5~1.8배가 적정합니다.</li>
              <li><strong>줄 길이(Line Length)</strong>: 한 줄에 45~75자(한글 기준 20~35자) 정도가 적절합니다.</li>
              <li><strong>자간(Letter Spacing)</strong>: 한글의 경우 기본값 또는 약간의 자간 조절로 가독성을 확보합니다.</li>
            </ul>

            <h3>3.2 색상 이론</h3>
            <p>
              색상은 사용자의 감정과 행동에 강력한 영향을 미칩니다. 효과적인 색상 사용을 위해
              색상환(Color Wheel)과 색상 조합 원리를 이해해야 합니다.
            </p>
            <ul>
              <li><strong>주 색상(Primary)</strong>: 브랜드를 대표하는 메인 색상입니다.</li>
              <li><strong>보조 색상(Secondary)</strong>: 주 색상을 보완하는 색상으로, 2~3개를 설정합니다.</li>
              <li><strong>강조 색상(Accent)</strong>: CTA 버튼, 알림 등 주의를 끌어야 하는 요소에 사용합니다.</li>
              <li><strong>중립 색상(Neutral)</strong>: 배경, 텍스트, 테두리 등에 사용하는 무채색 계열입니다.</li>
              <li><strong>시맨틱 색상(Semantic)</strong>: 성공(초록), 경고(노랑), 에러(빨강), 정보(파랑) 등 의미를 전달하는 색상입니다.</li>
            </ul>

            <h3>3.3 접근성과 색상</h3>
            <p>
              색상 선택 시 접근성을 반드시 고려해야 합니다. WCAG 2.1 기준으로 일반 텍스트는
              배경과 4.5:1 이상, 큰 텍스트는 3:1 이상의 명도 대비를 유지해야 합니다.
              색각 이상(색맹)이 있는 사용자를 고려하여 색상만으로 정보를 전달하지 않고
              아이콘, 텍스트 레이블 등을 함께 사용합니다.
            </p>

            <h2>4. 디자인 시스템 개요</h2>
            <p>
              <strong>디자인 시스템</strong>은 재사용 가능한 컴포넌트, 패턴, 가이드라인의 모음으로,
              일관된 사용자 경험을 효율적으로 만들기 위한 체계입니다. Google의 Material Design,
              Apple의 Human Interface Guidelines, IBM의 Carbon Design System 등이 대표적입니다.
            </p>

            <h3>4.1 디자인 시스템의 구성 요소</h3>
            <ul>
              <li><strong>디자인 토큰(Design Tokens)</strong>: 색상, 간격, 폰트 크기 등의 기본 값을 변수로 정의합니다.</li>
              <li><strong>컴포넌트 라이브러리</strong>: 버튼, 입력 필드, 카드, 모달 등 재사용 가능한 UI 요소입니다.</li>
              <li><strong>패턴 라이브러리</strong>: 로그인 폼, 검색, 페이지네이션 등 반복되는 UI 패턴입니다.</li>
              <li><strong>사용 가이드라인</strong>: 각 컴포넌트와 패턴의 올바른 사용법과 주의사항입니다.</li>
              <li><strong>브랜드 가이드라인</strong>: 로고, 색상, 타이포그래피, 톤앤매너 등의 브랜드 규칙입니다.</li>
            </ul>

            <h3>4.2 디자인 시스템의 장점</h3>
            <ul>
              <li><strong>일관성</strong>: 모든 제품과 접점에서 통일된 경험을 제공합니다.</li>
              <li><strong>효율성</strong>: 컴포넌트 재사용으로 개발과 디자인 시간을 단축합니다.</li>
              <li><strong>확장성</strong>: 새로운 페이지나 기능을 추가할 때 기존 시스템을 활용할 수 있습니다.</li>
              <li><strong>협업</strong>: 디자이너, 개발자, PM 간의 공통 언어를 제공합니다.</li>
            </ul>

            <h2>5. Figma 기본 활용법</h2>
            <p>
              <strong>Figma</strong>는 웹 기반의 협업 디자인 도구로, 별도의 설치 없이 브라우저에서
              바로 사용할 수 있습니다. 실시간 협업, 프로토타이핑, 디자인 시스템 관리를 하나의
              도구에서 처리할 수 있어 현재 가장 널리 사용되는 UX/UI 디자인 도구입니다.
            </p>

            <h3>5.1 Figma 핵심 기능</h3>
            <ul>
              <li><strong>프레임(Frame)</strong>: 화면의 기본 단위로, 다양한 디바이스 크기의 프레임을 생성합니다.</li>
              <li><strong>오토 레이아웃(Auto Layout)</strong>: 요소의 크기와 간격을 자동으로 조절하는 반응형 레이아웃 기능입니다.</li>
              <li><strong>컴포넌트(Component)</strong>: 재사용 가능한 디자인 요소를 생성하고 인스턴스로 활용합니다.</li>
              <li><strong>스타일(Style)</strong>: 색상, 타이포그래피, 효과를 스타일로 저장하여 일관되게 적용합니다.</li>
              <li><strong>프로토타입(Prototype)</strong>: 클릭, 호버 등의 인터랙션을 설정하여 동작하는 프로토타입을 만듭니다.</li>
              <li><strong>플러그인(Plugin)</strong>: 아이콘, 이미지, 접근성 검사 등 다양한 플러그인으로 기능을 확장합니다.</li>
            </ul>

            <h3>5.2 Figma 협업 기능</h3>
            <p>
              Figma의 가장 큰 강점은 실시간 협업입니다. 여러 사람이 동시에 같은 파일에서 작업할 수 있으며,
              코멘트 기능으로 피드백을 주고받을 수 있습니다. 개발자는 Dev Mode에서 디자인 사양을 확인하고
              CSS 코드를 추출할 수 있어, 디자이너와 개발자 간의 핸드오프가 원활합니다.
            </p>

            <h2>6. 실습: Figma 활용 비주얼 디자인</h2>
            <div className="callout-box">
              <h3>실습 과제</h3>
              <p>Figma를 활용하여 간단한 모바일 앱 또는 웹 페이지의 비주얼 디자인을 제작하세요.</p>
              <ul>
                <li><strong>색상 팔레트</strong>를 정의하세요 (주 색상, 보조 색상, 강조 색상, 중립 색상).</li>
                <li><strong>타이포그래피 스케일</strong>을 설정하세요 (H1~H6, 본문, 캡션).</li>
                <li><strong>CRAP 원칙</strong>을 적용하여 랜딩 페이지 레이아웃을 디자인하세요.</li>
                <li><strong>비주얼 계층구조</strong>를 활용하여 사용자의 시선 흐름을 유도하세요.</li>
                <li><strong>컴포넌트</strong> 최소 3개(버튼, 카드, 입력 필드 등)를 만들어 재사용하세요.</li>
              </ul>
            </div>

            <div className="callout-box">
              <h3>핵심 정리</h3>
              <ul>
                <li><strong>비주얼 디자인</strong>은 시각적 요소로 정보를 효과적으로 전달하는 디자인 영역이다.</li>
                <li><strong>CRAP 원칙</strong>(대비, 정렬, 반복, 근접)은 디자인의 기본 원칙이다.</li>
                <li><strong>타이포그래피와 색상</strong>은 가독성과 브랜드 아이덴티티에 핵심적 역할을 한다.</li>
                <li><strong>디자인 시스템</strong>은 일관된 UX를 효율적으로 구축하기 위한 체계이다.</li>
                <li><strong>Figma</strong>는 실시간 협업이 가능한 대표적인 UX/UI 디자인 도구이다.</li>
              </ul>
            </div>

            <div className="lesson-nav">
              <Link to="/ux/content-strategy" className="lesson-nav-btn prev">← 콘텐츠 전략</Link>
              <Link to="/ux/ui-content" className="lesson-nav-btn next">UI 콘텐츠 →</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default UxWeek8;
