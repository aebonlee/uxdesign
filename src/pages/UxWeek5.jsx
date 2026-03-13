import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import { useLanguage } from '../contexts/LanguageContext';

const UxWeek5 = () => {
  const { t } = useLanguage();

  return (
    <>
      <SEOHead title="5주차: 정보 아키텍처(IA) 설계" path="/ux/information-architecture" />

      <section className="page-header">
        <div className="container">
          <h1>5주차: 정보 아키텍처(IA) 설계</h1>
          <p>Information Architecture의 원칙과 설계 방법을 학습합니다</p>
        </div>
      </section>

      <section className="section lesson-content">
        <div className="container">
          <div className="lesson-body">

            <div className="callout-box">
              <h3>학습 목표</h3>
              <ul>
                <li>정보 아키텍처(IA)의 기본 원칙과 중요성을 이해한다.</li>
                <li>IA의 4가지 구성요소(조직 체계, 레이블링, 네비게이션, 검색)를 파악한다.</li>
                <li>카드소팅 방법론을 활용하여 정보 구조를 설계할 수 있다.</li>
                <li>사이트맵을 체계적으로 설계할 수 있다.</li>
                <li>다양한 네비게이션 패턴을 이해하고 적절히 적용할 수 있다.</li>
                <li>와이어프레임의 기초를 이해하고 작성할 수 있다.</li>
              </ul>
            </div>

            {/* ========== IA 정의와 중요성 ========== */}
            <h2>1. 정보 아키텍처(IA) 정의와 중요성</h2>

            <h3>1.1 정보 아키텍처란?</h3>
            <p>
              정보 아키텍처(Information Architecture, IA)란 <strong>콘텐츠와 정보를 효과적으로
              조직, 구조화, 레이블링하여 사용자가 원하는 정보를 쉽게 찾고 이해할 수 있도록
              설계하는 분야</strong>입니다. 건축의 청사진이 건물의 구조를 결정하듯,
              IA는 디지털 제품의 정보 구조를 결정합니다.
            </p>
            <p>
              IA의 아버지로 불리는 <strong>리처드 솔 워먼(Richard Saul Wurman)</strong>은
              1976년 이 용어를 처음 사용했으며, 피터 모빌(Peter Morville)과 루이스 로젠펠드(Louis Rosenfeld)의
              저서 &quot;Information Architecture for the World Wide Web&quot; (일명 &quot;북극곰 책&quot;)을 통해
              웹 분야에서 체계적인 학문으로 자리잡았습니다.
            </p>

            <h3>1.2 IA가 중요한 이유</h3>
            <ul>
              <li><strong>사용성(Usability)</strong>: 잘 설계된 IA는 사용자가 원하는 정보를 빠르고 쉽게 찾을 수 있게 합니다. 연구에 따르면, 사용자의 50% 이상이 원하는 정보를 찾지 못해 사이트를 이탈합니다.</li>
              <li><strong>발견성(Findability)</strong>: 체계적인 구조는 검색 엔진 최적화(SEO)에도 기여하여, 외부에서 콘텐츠를 발견할 가능성을 높입니다.</li>
              <li><strong>확장성(Scalability)</strong>: 초기에 잘 설계된 IA는 콘텐츠가 늘어나도 구조가 무너지지 않습니다. 반면 잘못된 IA는 콘텐츠가 늘어날수록 혼란이 가중됩니다.</li>
              <li><strong>비용 절감</strong>: IA를 초기에 제대로 설계하면, 이후 재설계에 드는 비용을 크게 줄일 수 있습니다.</li>
            </ul>

            <h3>1.3 IA 설계의 3원 모델 (Three Circles of IA)</h3>
            <p>
              효과적인 IA를 설계하기 위해서는 세 가지 요소를 균형 있게 고려해야 합니다.
            </p>
            <table className="lesson-table">
              <thead>
                <tr>
                  <th>요소</th>
                  <th>핵심 질문</th>
                  <th>조사 방법</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>사용자 (Users)</strong></td>
                  <td>누가, 왜, 어떻게 정보를 찾는가?</td>
                  <td>사용자 리서치, 페르소나, 멘탈 모델 분석</td>
                </tr>
                <tr>
                  <td><strong>콘텐츠 (Content)</strong></td>
                  <td>어떤 정보가 있고, 어떤 특성을 가지는가?</td>
                  <td>콘텐츠 인벤토리, 콘텐츠 감사, 메타데이터 분석</td>
                </tr>
                <tr>
                  <td><strong>맥락 (Context)</strong></td>
                  <td>비즈니스 목표, 기술적 제약, 문화적 요소는?</td>
                  <td>이해관계자 인터뷰, 기술 환경 분석</td>
                </tr>
              </tbody>
            </table>

            {/* ========== IA의 4가지 구성요소 ========== */}
            <h2>2. IA의 4가지 구성요소</h2>

            <p>
              피터 모빌과 루이스 로젠펠드는 IA를 네 가지 핵심 시스템으로 분류했습니다.
              이 네 시스템이 유기적으로 작동할 때 사용자는 정보를 효과적으로 찾고 이해할 수 있습니다.
            </p>

            <h3>2.1 조직 체계 (Organization Systems)</h3>
            <p>
              조직 체계는 <strong>콘텐츠를 어떤 기준으로 그룹화하고 분류할 것인지</strong>를
              결정합니다.
            </p>
            <table className="lesson-table">
              <thead>
                <tr>
                  <th>조직 방식</th>
                  <th>설명</th>
                  <th>예시</th>
                  <th>적합한 상황</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>알파벳순</strong></td>
                  <td>가나다/ABC 순서로 정렬</td>
                  <td>사전, 전화번호부, 용어집</td>
                  <td>항목이 많고 이름을 아는 경우</td>
                </tr>
                <tr>
                  <td><strong>시간순</strong></td>
                  <td>시간 흐름에 따른 정렬</td>
                  <td>뉴스, 블로그, 이벤트 캘린더</td>
                  <td>최신성이 중요한 콘텐츠</td>
                </tr>
                <tr>
                  <td><strong>위치 기반</strong></td>
                  <td>지리적 위치에 따른 분류</td>
                  <td>매장 찾기, 지역별 서비스</td>
                  <td>물리적 위치가 의미 있는 경우</td>
                </tr>
                <tr>
                  <td><strong>주제별</strong></td>
                  <td>의미적 유사성에 따른 그룹화</td>
                  <td>쇼핑몰의 카테고리, 뉴스 섹션</td>
                  <td>가장 일반적인 방식</td>
                </tr>
                <tr>
                  <td><strong>태스크 기반</strong></td>
                  <td>사용자의 행동/과제 기준 분류</td>
                  <td>은행 앱의 &quot;이체&quot;, &quot;조회&quot;, &quot;설정&quot;</td>
                  <td>사용자 목표가 명확한 경우</td>
                </tr>
                <tr>
                  <td><strong>대상별</strong></td>
                  <td>사용자 그룹에 따른 분류</td>
                  <td>&quot;개인고객 / 기업고객 / 파트너&quot;</td>
                  <td>사용자 유형별 니즈가 다른 경우</td>
                </tr>
              </tbody>
            </table>

            <h3>2.2 레이블링 시스템 (Labeling Systems)</h3>
            <p>
              레이블링 시스템은 <strong>콘텐츠 그룹이나 개별 항목에 이름을 부여하는 방법</strong>을
              다룹니다. 좋은 레이블은 사용자가 클릭하기 전에 그 안에 무엇이 있을지 예측할 수 있게 합니다.
            </p>
            <table className="lesson-table">
              <thead>
                <tr>
                  <th>원칙</th>
                  <th>설명</th>
                  <th>좋은 예</th>
                  <th>나쁜 예</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>명확성</strong></td>
                  <td>레이블의 의미가 분명해야 함</td>
                  <td>&quot;배송 조회&quot;</td>
                  <td>&quot;트래킹&quot;</td>
                </tr>
                <tr>
                  <td><strong>일관성</strong></td>
                  <td>동일 레벨의 레이블은 같은 형식</td>
                  <td>&quot;제품 소개 / 이용 안내 / 고객 지원&quot;</td>
                  <td>&quot;제품들 / 사용법 / Help&quot;</td>
                </tr>
                <tr>
                  <td><strong>사용자 언어</strong></td>
                  <td>전문 용어보다 사용자가 쓰는 표현</td>
                  <td>&quot;자주 묻는 질문&quot;</td>
                  <td>&quot;FAQ Repository&quot;</td>
                </tr>
                <tr>
                  <td><strong>구체성</strong></td>
                  <td>너무 넓거나 모호하지 않게</td>
                  <td>&quot;여성 러닝화&quot;</td>
                  <td>&quot;기타&quot;</td>
                </tr>
              </tbody>
            </table>

            <h3>2.3 네비게이션 시스템 (Navigation Systems)</h3>
            <p>
              네비게이션 시스템은 <strong>사용자가 사이트 내에서 이동하는 방법</strong>을 제공합니다.
              사용자가 현재 위치를 파악하고, 다음에 갈 곳을 결정하는 데 도움을 줍니다.
            </p>
            <table className="lesson-table">
              <thead>
                <tr>
                  <th>네비게이션 유형</th>
                  <th>설명</th>
                  <th>예시</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>글로벌 네비게이션</strong></td>
                  <td>모든 페이지에서 접근 가능한 최상위 메뉴</td>
                  <td>상단 GNB (Global Navigation Bar)</td>
                </tr>
                <tr>
                  <td><strong>로컬 네비게이션</strong></td>
                  <td>특정 섹션 내에서의 하위 메뉴</td>
                  <td>사이드바 메뉴, 서브 탭</td>
                </tr>
                <tr>
                  <td><strong>문맥 네비게이션</strong></td>
                  <td>콘텐츠 내에 포함된 관련 링크</td>
                  <td>인라인 링크, &quot;관련 글&quot; 섹션</td>
                </tr>
                <tr>
                  <td><strong>보조 네비게이션</strong></td>
                  <td>주요 경로 외 대안적 접근 방법</td>
                  <td>사이트맵, 인덱스, 가이드</td>
                </tr>
                <tr>
                  <td><strong>브레드크럼</strong></td>
                  <td>현재 위치까지의 경로를 표시</td>
                  <td>홈 &gt; 제품 &gt; 노트북 &gt; 삼성</td>
                </tr>
                <tr>
                  <td><strong>패싯 네비게이션</strong></td>
                  <td>다중 필터로 결과를 좁혀가는 방식</td>
                  <td>쇼핑몰의 가격/브랜드/색상 필터</td>
                </tr>
              </tbody>
            </table>

            <h3>2.4 검색 시스템 (Search Systems)</h3>
            <p>
              검색 시스템은 사용자가 <strong>키워드를 입력하여 원하는 정보를 직접 찾는 방법</strong>을
              제공합니다. 네비게이션만으로는 모든 정보를 효율적으로 찾기 어렵기 때문에,
              검색은 IA의 필수적인 보완 수단입니다.
            </p>
            <ul>
              <li><strong>검색 인터페이스</strong>: 검색창의 위치, 크기, 플레이스홀더 텍스트가 사용성에 영향을 줍니다. 일반적으로 상단 우측이나 중앙에 위치합니다.</li>
              <li><strong>검색 알고리즘</strong>: 검색 결과의 정확도와 관련성을 결정합니다. 형태소 분석, 동의어 처리, 오타 보정 등이 포함됩니다.</li>
              <li><strong>검색 결과 페이지</strong>: 결과의 표시 방식, 정렬 기준, 필터 옵션, 페이지네이션 등을 설계합니다.</li>
              <li><strong>자동완성 &amp; 추천</strong>: 사용자가 입력하는 동안 관련 검색어를 실시간으로 제안하여 검색 효율을 높입니다.</li>
            </ul>

            {/* ========== 카드소팅 방법론 ========== */}
            <h2>3. 카드소팅 방법론</h2>

            <h3>3.1 카드소팅이란?</h3>
            <p>
              카드소팅(Card Sorting)은 <strong>사용자가 콘텐츠 항목들을 그룹으로 분류하도록 하는
              사용자 리서치 기법</strong>입니다. 이를 통해 사용자의 멘탈 모델을 파악하고,
              그에 부합하는 정보 구조를 설계할 수 있습니다.
            </p>

            <table className="lesson-table">
              <thead>
                <tr>
                  <th>유형</th>
                  <th>방법</th>
                  <th>장점</th>
                  <th>단점</th>
                  <th>적합한 상황</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>오픈 카드소팅</strong></td>
                  <td>사용자가 자유롭게 그룹을 만들고 이름을 붙임</td>
                  <td>사용자의 멘탈 모델을 직접 파악</td>
                  <td>분석이 복잡, 결과 해석에 전문성 필요</td>
                  <td>새로운 IA를 처음 설계할 때</td>
                </tr>
                <tr>
                  <td><strong>클로즈드 카드소팅</strong></td>
                  <td>미리 정해진 카테고리에 항목을 분류</td>
                  <td>기존 구조의 검증에 효과적</td>
                  <td>사용자의 새로운 아이디어 반영 어려움</td>
                  <td>기존 IA를 검증/개선할 때</td>
                </tr>
                <tr>
                  <td><strong>하이브리드 카드소팅</strong></td>
                  <td>일부 카테고리는 제공, 추가 카테고리 생성 허용</td>
                  <td>유연성과 구조의 균형</td>
                  <td>분석이 가장 복잡</td>
                  <td>부분적 리뉴얼 시</td>
                </tr>
              </tbody>
            </table>

            <h3>3.2 카드소팅 실행 가이드</h3>
            <p>
              <strong>준비 단계:</strong> 카드에 적을 항목을 선정합니다 (보통 30-60개가 적당).
              각 카드에는 콘텐츠 제목과 짧은 설명을 작성합니다. 참여자는 5-15명이 권장됩니다.
            </p>
            <p>
              <strong>실행 단계:</strong> 참여자에게 카드를 나누어 주고, 관련 있다고 생각하는 카드를
              그룹으로 묶도록 합니다. 오픈 방식이면 그룹에 이름도 붙이도록 합니다.
              과정 중 생각을 소리 내어 말해달라고 요청하면 (Think-aloud) 풍부한 인사이트를 얻을 수 있습니다.
            </p>
            <p>
              <strong>분석 단계:</strong> 여러 참여자의 결과를 종합하여 유사성 매트릭스(Similarity Matrix)를
              만들고, 덴드로그램(Dendrogram)으로 시각화합니다. 자주 함께 묶인 항목들은
              같은 카테고리에 배치하는 것이 자연스럽습니다.
            </p>

            <div className="callout-box">
              <h3>온라인 카드소팅 도구</h3>
              <ul>
                <li><strong>Optimal Workshop (OptimalSort)</strong>: 가장 널리 사용되는 카드소팅 도구. 자동 분석 및 덴드로그램 제공.</li>
                <li><strong>UserZoom</strong>: 카드소팅 외 다양한 UX 리서치 기능 통합 제공.</li>
                <li><strong>Maze</strong>: 빠른 설정과 직관적 UI. 프로토타입 테스트도 가능.</li>
                <li><strong>Miro / FigJam</strong>: 화이트보드 도구로 원격 워크숍 방식의 카드소팅 진행 가능.</li>
              </ul>
            </div>

            {/* ========== 사이트맵 설계 ========== */}
            <h2>4. 사이트맵 설계</h2>

            <h3>4.1 사이트맵이란?</h3>
            <p>
              사이트맵은 <strong>웹사이트의 전체 페이지 구조를 시각적으로 표현한 다이어그램</strong>입니다.
              트리 구조 형태로 표현되며, 각 페이지 간의 계층 관계와 연결 구조를 한눈에 파악할 수 있습니다.
              사이트맵은 IA 설계 결과물의 핵심이며, 개발팀, 디자인팀, 콘텐츠팀 간의 소통 도구로
              활용됩니다.
            </p>

            <h3>4.2 사이트맵 설계 원칙</h3>
            <table className="lesson-table">
              <thead>
                <tr>
                  <th>원칙</th>
                  <th>설명</th>
                  <th>권장 사항</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>적절한 깊이</strong></td>
                  <td>계층 구조의 뎁스를 적정하게 유지</td>
                  <td>최대 3-4 레벨 이내 권장 (3클릭 룰)</td>
                </tr>
                <tr>
                  <td><strong>적절한 너비</strong></td>
                  <td>같은 레벨의 항목 수를 적정하게 유지</td>
                  <td>동일 레벨에 5-9개 항목 (밀러의 법칙 7+/-2)</td>
                </tr>
                <tr>
                  <td><strong>논리적 그룹핑</strong></td>
                  <td>관련 있는 항목을 의미 있게 묶기</td>
                  <td>카드소팅 결과를 기반으로 그룹화</td>
                </tr>
                <tr>
                  <td><strong>균형 잡힌 구조</strong></td>
                  <td>특정 섹션만 과도하게 깊지 않게</td>
                  <td>각 섹션의 깊이와 너비를 비슷하게 유지</td>
                </tr>
                <tr>
                  <td><strong>확장 가능성</strong></td>
                  <td>향후 콘텐츠 추가를 고려한 구조</td>
                  <td>새로운 카테고리를 추가하기 쉬운 구조 설계</td>
                </tr>
              </tbody>
            </table>

            <h3>4.3 사이트맵 유형</h3>
            <ul>
              <li><strong>계층형 (Hierarchical)</strong>: 가장 일반적인 형태. 홈페이지를 정점으로 트리 구조를 형성합니다. 대부분의 기업 웹사이트, 쇼핑몰에 적합합니다.</li>
              <li><strong>순차형 (Sequential)</strong>: 단계별로 진행되는 선형 구조. 온보딩 플로우, 결제 과정, 튜토리얼에 적합합니다.</li>
              <li><strong>매트릭스형 (Matrix)</strong>: 여러 기준으로 교차 분류된 구조. 제품 비교 사이트, 다차원 필터링이 필요한 콘텐츠에 적합합니다.</li>
              <li><strong>데이터베이스형 (Database)</strong>: 동적으로 생성되는 콘텐츠 구조. 사용자 프로필, 검색 결과, 개인화 콘텐츠에 적합합니다.</li>
            </ul>

            {/* ========== 와이어프레임 기초 ========== */}
            <h2>5. 와이어프레임 기초</h2>

            <h3>5.1 와이어프레임이란?</h3>
            <p>
              와이어프레임(Wireframe)은 <strong>페이지의 레이아웃과 콘텐츠 배치를 간략하게
              표현한 설계 문서</strong>입니다. 색상, 이미지, 세부 디자인 없이 구조와 기능에
              집중하여 표현합니다. IA 설계 결과를 실제 화면 수준으로 구체화하는 단계입니다.
            </p>

            <h3>5.2 와이어프레임의 충실도(Fidelity) 수준</h3>
            <table className="lesson-table">
              <thead>
                <tr>
                  <th>수준</th>
                  <th>특징</th>
                  <th>용도</th>
                  <th>도구</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Low-fi (저충실도)</strong></td>
                  <td>손그림 수준, 박스와 선으로 표현</td>
                  <td>초기 아이디어 스케치, 빠른 논의</td>
                  <td>종이, 화이트보드, Balsamiq</td>
                </tr>
                <tr>
                  <td><strong>Mid-fi (중충실도)</strong></td>
                  <td>디지털 도구로 정교하게 표현, 실제 레이블 사용</td>
                  <td>구조 확정, 이해관계자 리뷰</td>
                  <td>Figma, Sketch, Axure</td>
                </tr>
                <tr>
                  <td><strong>Hi-fi (고충실도)</strong></td>
                  <td>실제 디자인에 가까운 수준, 인터랙션 포함</td>
                  <td>사용성 테스트, 개발 핸드오프</td>
                  <td>Figma, Adobe XD, Framer</td>
                </tr>
              </tbody>
            </table>

            <h3>5.3 와이어프레임에 포함할 요소</h3>
            <ul>
              <li><strong>헤더/푸터</strong>: 글로벌 네비게이션, 로고, 검색, 주요 링크</li>
              <li><strong>콘텐츠 영역</strong>: 텍스트, 이미지, 동영상의 배치 위치와 크기</li>
              <li><strong>네비게이션</strong>: 메뉴, 브레드크럼, 사이드바의 위치</li>
              <li><strong>인터랙션 요소</strong>: 버튼, 폼, 드롭다운, 탭 등</li>
              <li><strong>주석(Annotation)</strong>: 기능 설명, 상호작용 방식, 예외 상황 등을 별도로 기록</li>
            </ul>

            {/* ========== 실습 ========== */}
            <h2>6. 실습: 사이트맵 &amp; 와이어프레임 제작</h2>

            <div className="exercise-box">
              <h3>실습 과제 A: 카드소팅 &amp; 사이트맵 설계</h3>
              <p>
                가상의 온라인 교육 플랫폼을 위한 정보 아키텍처를 설계합니다.
              </p>

              <h4>Step 1: 콘텐츠 목록 작성 (15분)</h4>
              <ul>
                <li>온라인 교육 플랫폼에 필요한 페이지/콘텐츠를 30개 이상 나열합니다.</li>
                <li>예: 홈, 강좌 목록, 강좌 상세, 수강 후기, 강사 소개, 마이페이지, 학습 대시보드, 결제, FAQ 등</li>
              </ul>

              <h4>Step 2: 카드소팅 실행 (20분)</h4>
              <ul>
                <li>포스트잇이나 Miro를 사용하여 오픈 카드소팅을 진행합니다.</li>
                <li>동료 2-3명에게도 같은 카드로 소팅을 요청합니다.</li>
                <li>결과를 비교하고 공통 패턴을 식별합니다.</li>
              </ul>

              <h4>Step 3: 사이트맵 작성 (25분)</h4>
              <ul>
                <li>카드소팅 결과를 바탕으로 3-4레벨의 계층 구조를 설계합니다.</li>
                <li>각 페이지에 명확한 레이블을 부여합니다.</li>
                <li>Figma, draw.io, 또는 종이에 시각적으로 표현합니다.</li>
              </ul>
            </div>

            <div className="exercise-box">
              <h3>실습 과제 B: 주요 페이지 와이어프레임</h3>
              <p>
                위에서 설계한 사이트맵을 기반으로 주요 페이지의 와이어프레임을 제작합니다.
              </p>

              <h4>제작할 페이지 (각 15분)</h4>
              <ul>
                <li><strong>홈페이지:</strong> 주요 카테고리 진입점, 추천 강좌, CTA 배치</li>
                <li><strong>강좌 목록 페이지:</strong> 필터, 정렬, 카드형 레이아웃, 페이지네이션</li>
                <li><strong>강좌 상세 페이지:</strong> 강좌 정보, 커리큘럼, 수강 후기, 수강 신청 CTA</li>
              </ul>

              <h4>체크포인트</h4>
              <ul>
                <li>글로벌 네비게이션이 일관되게 배치되어 있는가?</li>
                <li>사용자가 현재 위치를 파악할 수 있는가? (브레드크럼 등)</li>
                <li>주요 CTA가 눈에 잘 띄는 위치에 있는가?</li>
                <li>콘텐츠의 우선순위가 시각적 위계로 표현되어 있는가?</li>
              </ul>
            </div>

            {/* ========== 핵심 정리 ========== */}
            <div className="callout-box">
              <h3>핵심 정리</h3>
              <ul>
                <li><strong>정보 아키텍처(IA)</strong>는 콘텐츠를 조직, 구조화, 레이블링하여 사용자가 원하는 정보를 쉽게 찾도록 설계하는 분야이다.</li>
                <li>IA는 <strong>조직 체계, 레이블링, 네비게이션, 검색</strong>의 네 가지 시스템으로 구성된다.</li>
                <li><strong>카드소팅</strong>은 사용자의 멘탈 모델을 파악하여 정보 구조 설계에 반영하는 핵심 리서치 기법이다.</li>
                <li><strong>사이트맵</strong>은 IA 설계 결과를 시각화한 문서로, 3-4레벨 이내의 적절한 깊이와 너비를 유지해야 한다.</li>
                <li><strong>와이어프레임</strong>은 IA를 화면 수준으로 구체화하는 도구이며, 충실도 수준에 따라 목적이 다르다.</li>
                <li>IA 설계 시 <strong>사용자, 콘텐츠, 맥락</strong>의 세 가지 요소를 균형 있게 고려해야 한다.</li>
              </ul>
            </div>

            <div className="lesson-nav">
              <Link to="/ux/content-audit" className="lesson-nav-btn prev">{"← 4주차: 콘텐츠 감사와 분석"}</Link>
              <Link to="/ux/ux-writing" className="lesson-nav-btn next">{"6주차: UX 라이팅과 마이크로카피 →"}</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default UxWeek5;
