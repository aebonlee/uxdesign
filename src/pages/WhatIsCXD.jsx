import SEOHead from '../components/SEOHead';

const WhatIsCXD = () => (
  <>
    <SEOHead title="고객경험디자인이란?" path="/cxd/what-is-cxd" />

    <section className="page-header">
      <div className="container">
        <h1>고객경험디자인이란?</h1>
        <p>Customer Experience Design — 고객 중심의 콘텐츠 전략과 디자인 사고</p>
      </div>
    </section>

    <section className="section lesson-content">
      <div className="container">
        <div className="lesson-body">

          <div className="callout-box">
            <h3>학습 목표</h3>
            <ul>
              <li>고객경험디자인(CXD)의 정의와 등장 배경을 설명할 수 있다.</li>
              <li>CXD의 핵심 요소를 구분하고 예시를 들 수 있다.</li>
              <li>콘텐츠 전략이 고객경험에 미치는 영향을 이해한다.</li>
              <li>이 과목에서 배우는 내용과 학습 로드맵을 파악한다.</li>
            </ul>
          </div>

          {/* --- 1. CXD 정의 --- */}
          <h2>1. 고객경험디자인(CXD)이란?</h2>

          <h3>1.1 정의</h3>
          <p>
            <strong>고객경험디자인(Customer Experience Design, CXD)</strong>은 고객이 브랜드, 제품, 서비스와
            상호작용하는 모든 접점에서 긍정적이고 일관된 경험을 설계하는 전략적 접근 방식입니다.
          </p>
          <p>
            단순히 예쁜 화면을 만드는 것이 아니라, 고객의 <strong>니즈를 이해</strong>하고,
            적절한 <strong>콘텐츠를 적시에 제공</strong>하며, 모든 채널에서 <strong>일관된 경험</strong>을
            제공하는 것이 핵심입니다.
          </p>

          <div className="callout-box">
            <p><em>
              "고객경험은 고객이 브랜드와 맺는 모든 상호작용의 총합이다.
              좋은 경험은 우연이 아니라 의도적인 디자인의 결과이다."
            </em></p>
            <p style={{ textAlign: 'right', marginTop: '8px' }}>— Don Norman</p>
          </div>

          <p>
            CXD는 <strong>디자이너만을 위한 것이 아닙니다</strong>. 마케터, 개발자, 기획자, 콘텐츠 전략가 등
            고객 접점에 관여하는 모든 사람이 이해해야 할 핵심 역량입니다.
          </p>

          <h3>1.2 왜 고객경험디자인이 중요한가?</h3>

          <table className="lesson-table">
            <thead>
              <tr><th>관점</th><th>중요성</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>비즈니스 성과</strong></td><td>우수한 CX를 제공하는 기업은 매출과 고객 충성도가 높다</td></tr>
              <tr><td><strong>차별화 전략</strong></td><td>제품/가격 경쟁을 넘어 경험으로 차별화하는 시대</td></tr>
              <tr><td><strong>디지털 전환</strong></td><td>온/오프라인 통합 경험 설계가 필수적인 환경</td></tr>
              <tr><td><strong>고객 기대 상승</strong></td><td>넷플릭스, 쿠팡 등으로 고객 기대 수준이 급격히 상승</td></tr>
              <tr><td><strong>데이터 기반 의사결정</strong></td><td>사용자 데이터를 활용한 경험 최적화가 가능한 시대</td></tr>
            </tbody>
          </table>

          {/* --- 2. CXD 핵심 요소 --- */}
          <h2>2. CXD의 핵심 요소</h2>

          <p>고객경험디자인은 다음 <strong>5가지 핵심 요소</strong>로 구성됩니다:</p>

          <table className="lesson-table">
            <thead>
              <tr><th>핵심 요소</th><th>설명</th><th>주요 활동</th></tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>사용자 리서치</strong></td>
                <td>고객의 니즈, 행동, 동기를 체계적으로 파악</td>
                <td>인터뷰, 설문, 페르소나, 여정 맵</td>
              </tr>
              <tr>
                <td><strong>콘텐츠 전략</strong></td>
                <td>적절한 콘텐츠를 적시에 적소에 제공하는 계획</td>
                <td>콘텐츠 감사, 콘텐츠 모델, 거버넌스</td>
              </tr>
              <tr>
                <td><strong>UX 라이팅</strong></td>
                <td>사용자 인터페이스의 텍스트를 명확하고 유용하게 작성</td>
                <td>마이크로카피, 에러 메시지, CTA 문구</td>
              </tr>
              <tr>
                <td><strong>비주얼 디자인</strong></td>
                <td>시각적 요소를 통해 브랜드 경험을 전달</td>
                <td>UI 디자인, 타이포그래피, 컬러 시스템</td>
              </tr>
              <tr>
                <td><strong>성과 측정</strong></td>
                <td>데이터 기반으로 경험의 효과를 측정하고 개선</td>
                <td>GA 분석, A/B 테스트, 사용성 평가</td>
              </tr>
            </tbody>
          </table>

          {/* --- 3. 콘텐츠 전략의 중요성 --- */}
          <h2>3. 콘텐츠 전략의 중요성</h2>

          <p>
            <strong>콘텐츠 전략(Content Strategy)</strong>은 고객경험의 핵심 축입니다.
            아무리 아름다운 UI를 만들어도, 콘텐츠가 고객의 니즈에 맞지 않으면 좋은 경험이 될 수 없습니다.
          </p>

          <h3>3.1 콘텐츠 전략이란?</h3>
          <p>
            콘텐츠 전략은 <strong>유용하고, 사용 가능하며, 적절한 콘텐츠</strong>를 계획하고, 생성하고,
            전달하고, 관리하는 전체 과정을 아우르는 전략입니다.
          </p>

          <div className="callout-box">
            <p><em>
              "콘텐츠 전략은 올바른 콘텐츠를, 올바른 사람에게, 올바른 장소에서, 올바른 시간에 전달하는 것이다."
            </em></p>
            <p style={{ textAlign: 'right', marginTop: '8px' }}>— Kristina Halvorson, "Content Strategy for the Web"</p>
          </div>

          <h3>3.2 콘텐츠 전략의 4가지 영역</h3>
          <table className="lesson-table">
            <thead>
              <tr><th>영역</th><th>핵심 질문</th><th>활동</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>콘텐츠 기획</strong></td><td>어떤 콘텐츠가 필요한가?</td><td>콘텐츠 감사, 갭 분석, 메시지 아키텍처</td></tr>
              <tr><td><strong>콘텐츠 제작</strong></td><td>누가, 어떻게 만들 것인가?</td><td>스타일 가이드, 톤 앤 보이스, UX 라이팅</td></tr>
              <tr><td><strong>콘텐츠 관리</strong></td><td>어떻게 운영할 것인가?</td><td>CMS 설계, 워크플로우, 거버넌스</td></tr>
              <tr><td><strong>콘텐츠 성과</strong></td><td>효과가 있는가?</td><td>KPI 설정, 분석, A/B 테스트, 최적화</td></tr>
            </tbody>
          </table>

          {/* --- 4. 이 과목에서 배우는 내용 --- */}
          <h2>4. 이 과목에서 배우는 내용</h2>

          <p>본 교과목에서는 고객경험디자인의 핵심 개념을 <strong>콘텐츠 전략</strong> 관점에서 실습 중심으로 학습합니다:</p>

          <table className="lesson-table">
            <thead>
              <tr><th>CXD 핵심 영역</th><th>관련 수업 내용</th><th>주차</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>CXD 개요</strong></td><td>고객경험디자인과 콘텐츠 전략 소개</td><td>1주차</td></tr>
              <tr><td><strong>사용자 리서치</strong></td><td>리서치 방법론, 페르소나, 고객 여정 맵</td><td>2-3주차</td></tr>
              <tr><td><strong>콘텐츠 분석</strong></td><td>콘텐츠 감사, 정보 아키텍처 설계</td><td>4-5주차</td></tr>
              <tr><td><strong>UX 라이팅</strong></td><td>UX Writing, 마이크로카피, 콘텐츠 전략 프레임워크</td><td>6-7주차</td></tr>
              <tr><td><strong>비주얼 & UI</strong></td><td>Figma 활용 비주얼 디자인, UI 콘텐츠 패턴</td><td>8-9주차</td></tr>
              <tr><td><strong>최적화 & 운영</strong></td><td>개인화, A/B 테스트, 멀티채널, CMS, 성과 측정</td><td>10-13주차</td></tr>
            </tbody>
          </table>

          {/* --- 핵심 정리 --- */}
          <div className="callout-box">
            <h3>핵심 정리</h3>
            <ul>
              <li><strong>고객경험디자인(CXD)</strong>은 고객과 브랜드의 모든 접점에서 긍정적 경험을 설계하는 전략적 접근이다.</li>
              <li>CXD의 5가지 핵심 요소: <strong>사용자 리서치, 콘텐츠 전략, UX 라이팅, 비주얼 디자인, 성과 측정</strong></li>
              <li><strong>콘텐츠 전략</strong>은 올바른 콘텐츠를 올바른 사람에게 적시에 전달하는 계획이다.</li>
              <li>좋은 고객경험은 우연이 아닌 <strong>의도적인 디자인</strong>의 결과이다.</li>
              <li>본 과목에서는 CXD를 콘텐츠 전략 관점에서 실습 중심으로 학습한다.</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  </>
);

export default WhatIsCXD;
