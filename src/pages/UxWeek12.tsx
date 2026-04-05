import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import { useLanguage } from '../contexts/LanguageContext';

const UxWeek12 = () => {
  const { t } = useLanguage();

  return (
    <>
      <SEOHead
        title="12주차: CMS와 콘텐츠 관리 도구 - UX 디자인 강의"
        description="CMS의 종류와 특성, 콘텐츠 모델링, 콘텐츠 워크플로우 설계, 거버넌스 체계 구축을 학습합니다."
        path="/ux/cms"
      />

      <section className="page-header">
        <div className="container">
          <h1>12주차: CMS와 콘텐츠 관리 도구</h1>
          <p>
            콘텐츠 관리 시스템(CMS)의 종류와 선택 기준, 효과적인 콘텐츠 모델링,
            워크플로우 설계, 그리고 조직 전체의 콘텐츠 거버넌스 체계를 학습합니다.
          </p>
        </div>
      </section>

      <section className="section lesson-content">
        <div className="container">
          <div className="lesson-body">

            <div className="callout-box">
              <h3>학습 목표</h3>
              <ul>
                <li>CMS의 개념과 역할, 주요 유형을 이해한다</li>
                <li>전통적 CMS와 Headless CMS의 차이와 각각의 장단점을 파악한다</li>
                <li>프로젝트에 적합한 CMS를 선택하는 기준을 학습한다</li>
                <li>효과적인 콘텐츠 모델링의 원칙과 방법을 익힌다</li>
                <li>콘텐츠 워크플로우를 설계하고 자동화하는 방법을 이해한다</li>
                <li>콘텐츠 거버넌스 체계를 수립하여 품질을 관리할 수 있다</li>
              </ul>
            </div>

            <h2>1. CMS(콘텐츠 관리 시스템)의 이해</h2>

            <h3>1.1 CMS란 무엇인가</h3>
            <p>
              CMS(Content Management System)는 디지털 콘텐츠의 생성, 편집, 관리, 배포를
              지원하는 소프트웨어 시스템입니다. 기술적 지식이 없는 콘텐츠 담당자도
              웹사이트의 콘텐츠를 쉽게 관리할 수 있도록 하는 것이 핵심 목적입니다.
            </p>
            <p>
              현재 전 세계 웹사이트의 약 65%가 CMS를 사용하고 있으며,
              WordPress만으로도 전체 웹사이트의 약 43%를 차지할 정도로
              CMS는 웹 생태계에서 핵심적인 역할을 합니다.
            </p>

            <h3>1.2 CMS의 핵심 기능</h3>
            <ul>
              <li><strong>콘텐츠 생성:</strong> WYSIWYG 에디터, 마크다운 지원, 미디어 업로드</li>
              <li><strong>콘텐츠 조직화:</strong> 카테고리, 태그, 분류체계(Taxonomy) 관리</li>
              <li><strong>워크플로우:</strong> 초안 → 리뷰 → 승인 → 게시의 프로세스 관리</li>
              <li><strong>버전 관리:</strong> 콘텐츠 수정 이력 추적 및 이전 버전 복원</li>
              <li><strong>권한 관리:</strong> 역할별 접근 권한 설정 (관리자, 편집자, 작성자 등)</li>
              <li><strong>SEO 관리:</strong> 메타 태그, URL 구조, 사이트맵 자동 생성</li>
              <li><strong>다국어 지원:</strong> 다양한 언어로의 콘텐츠 관리 및 번역 워크플로우</li>
              <li><strong>API/연동:</strong> 외부 시스템과의 데이터 연동 및 확장</li>
            </ul>

            <h2>2. CMS의 유형과 비교</h2>

            <h3>2.1 CMS 아키텍처 유형</h3>

            <table className="lesson-table">
              <thead>
                <tr>
                  <th>유형</th>
                  <th>설명</th>
                  <th>장점</th>
                  <th>단점</th>
                  <th>대표 제품</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>전통적 CMS (Coupled)</td>
                  <td>프론트엔드와 백엔드가 결합된 일체형</td>
                  <td>설치/사용 쉬움, 풍부한 테마/플러그인</td>
                  <td>유연성 제한, 성능 이슈 가능</td>
                  <td>WordPress, Drupal, Joomla</td>
                </tr>
                <tr>
                  <td>Headless CMS</td>
                  <td>백엔드(콘텐츠)만 제공, API로 프론트엔드 연결</td>
                  <td>프론트엔드 자유도, 멀티채널 지원</td>
                  <td>프론트엔드 별도 개발 필요</td>
                  <td>Contentful, Strapi, Sanity</td>
                </tr>
                <tr>
                  <td>Hybrid CMS</td>
                  <td>전통적 CMS + API 기능 결합</td>
                  <td>기존 장점 유지하며 유연성 추가</td>
                  <td>복잡도 증가</td>
                  <td>WordPress (REST API), Drupal 9+</td>
                </tr>
                <tr>
                  <td>Static Site Generator</td>
                  <td>빌드 시 정적 파일 생성</td>
                  <td>빠른 성능, 높은 보안, 저렴한 호스팅</td>
                  <td>동적 콘텐츠 제한</td>
                  <td>Next.js, Gatsby, Hugo</td>
                </tr>
                <tr>
                  <td>DXP (디지털 경험 플랫폼)</td>
                  <td>CMS + 개인화 + 분석 + 커머스 통합</td>
                  <td>올인원 솔루션, 고급 개인화</td>
                  <td>고비용, 벤더 종속</td>
                  <td>Adobe Experience Manager, Sitecore</td>
                </tr>
              </tbody>
            </table>

            <h3>2.2 전통적 CMS vs Headless CMS 심층 비교</h3>

            <table className="lesson-table">
              <thead>
                <tr>
                  <th>비교 항목</th>
                  <th>전통적 CMS</th>
                  <th>Headless CMS</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>콘텐츠 전달 방식</td>
                  <td>서버사이드 렌더링으로 HTML 직접 전달</td>
                  <td>API(REST/GraphQL)로 JSON 데이터 전달</td>
                </tr>
                <tr>
                  <td>프론트엔드</td>
                  <td>테마/템플릿 기반 (PHP 등)</td>
                  <td>React, Vue 등 자유로운 기술 선택</td>
                </tr>
                <tr>
                  <td>멀티채널</td>
                  <td>웹 중심, 다른 채널은 별도 개발</td>
                  <td>하나의 API로 웹, 앱, IoT 등 다양한 채널</td>
                </tr>
                <tr>
                  <td>개발 속도</td>
                  <td>빠른 초기 구축 (테마 활용)</td>
                  <td>프론트엔드 별도 개발로 초기 시간 소요</td>
                </tr>
                <tr>
                  <td>편집 경험</td>
                  <td>WYSIWYG, 실시간 미리보기</td>
                  <td>구조화된 편집, 미리보기 별도 구현 필요</td>
                </tr>
                <tr>
                  <td>확장성</td>
                  <td>플러그인 생태계 의존</td>
                  <td>API 기반으로 유연한 확장</td>
                </tr>
                <tr>
                  <td>성능</td>
                  <td>서버 부하에 따라 변동</td>
                  <td>CDN + Static 생성으로 고성능 가능</td>
                </tr>
                <tr>
                  <td>보안</td>
                  <td>공격 표면 넓음 (플러그인 취약점)</td>
                  <td>콘텐츠와 프론트엔드 분리로 보안 향상</td>
                </tr>
                <tr>
                  <td>비용</td>
                  <td>오픈소스 기반 저비용 시작 가능</td>
                  <td>SaaS 구독 비용 + 개발 비용</td>
                </tr>
                <tr>
                  <td>적합한 경우</td>
                  <td>소규모 사이트, 빠른 구축, 비개발 팀</td>
                  <td>멀티채널, 고성능, 개발 팀 보유 조직</td>
                </tr>
              </tbody>
            </table>

            <h3>2.3 주요 CMS 플랫폼 상세 비교</h3>

            <table className="lesson-table">
              <thead>
                <tr>
                  <th>플랫폼</th>
                  <th>유형</th>
                  <th>주요 특징</th>
                  <th>적합 대상</th>
                  <th>가격 모델</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>WordPress</td>
                  <td>전통/하이브리드</td>
                  <td>최대 생태계, 60,000+ 플러그인</td>
                  <td>블로그, 중소규모 사이트</td>
                  <td>무료 (호스팅 별도)</td>
                </tr>
                <tr>
                  <td>Contentful</td>
                  <td>Headless (SaaS)</td>
                  <td>강력한 API, CDN 내장, 다국어 지원</td>
                  <td>엔터프라이즈, 멀티채널 프로젝트</td>
                  <td>무료 tier + 유료</td>
                </tr>
                <tr>
                  <td>Strapi</td>
                  <td>Headless (오픈소스)</td>
                  <td>자체 호스팅, 커스텀 API, 관리 패널</td>
                  <td>개발 팀 보유 스타트업/중소기업</td>
                  <td>무료 (자체 호스팅)</td>
                </tr>
                <tr>
                  <td>Sanity</td>
                  <td>Headless (SaaS)</td>
                  <td>실시간 협업, GROQ 쿼리, Portable Text</td>
                  <td>콘텐츠 중심 프로젝트, 에이전시</td>
                  <td>무료 tier + 유료</td>
                </tr>
                <tr>
                  <td>Shopify</td>
                  <td>커머스 특화</td>
                  <td>이커머스 기능 내장, 결제 연동</td>
                  <td>온라인 쇼핑몰</td>
                  <td>월 구독</td>
                </tr>
                <tr>
                  <td>Webflow</td>
                  <td>비주얼 CMS</td>
                  <td>노코드 디자인, CMS 내장, 호스팅 포함</td>
                  <td>디자이너, 마케터 중심 팀</td>
                  <td>무료 tier + 유료</td>
                </tr>
              </tbody>
            </table>

            <div className="callout-box">
              <h3>CMS 선택 시 핵심 질문</h3>
              <ul>
                <li>콘텐츠를 몇 개의 채널에 배포해야 하는가? (웹만 vs 멀티채널)</li>
                <li>콘텐츠 팀의 기술 역량 수준은 어떤가?</li>
                <li>개발 리소스가 충분한가?</li>
                <li>콘텐츠의 양과 업데이트 빈도는 어느 정도인가?</li>
                <li>다국어/다지역 지원이 필요한가?</li>
                <li>향후 2~3년 내 예상되는 확장 규모는?</li>
                <li>예산과 유지보수 비용의 한계는?</li>
              </ul>
            </div>

            <h2>3. 콘텐츠 모델링</h2>

            <h3>3.1 콘텐츠 모델이란</h3>
            <p>
              콘텐츠 모델(Content Model)은 조직의 콘텐츠를 구조화하는 청사진입니다.
              어떤 유형의 콘텐츠가 있고, 각 유형이 어떤 필드(속성)를 가지며,
              콘텐츠 간에 어떤 관계가 있는지를 정의합니다.
            </p>
            <p>
              좋은 콘텐츠 모델은 콘텐츠의 재사용성을 높이고, 채널 간 일관성을 보장하며,
              관리 효율성을 극대화합니다. 콘텐츠 모델링은 CMS 구축의 가장 중요한
              선행 작업입니다.
            </p>

            <h3>3.2 콘텐츠 타입 설계</h3>
            <p>
              콘텐츠 타입(Content Type)은 특정 유형의 콘텐츠에 대한 구조적 정의입니다.
              예를 들어 "블로그 포스트", "제품", "팀 멤버" 등이 각각 하나의 콘텐츠 타입입니다.
            </p>

            <table className="lesson-table">
              <thead>
                <tr>
                  <th>콘텐츠 타입</th>
                  <th>주요 필드</th>
                  <th>관계(Reference)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>블로그 포스트</td>
                  <td>제목, 슬러그, 본문, 요약, 대표 이미지, 게시일</td>
                  <td>카테고리, 작성자, 태그</td>
                </tr>
                <tr>
                  <td>제품</td>
                  <td>제품명, SKU, 가격, 설명, 이미지 갤러리, 스펙</td>
                  <td>카테고리, 관련 제품, 리뷰</td>
                </tr>
                <tr>
                  <td>이벤트</td>
                  <td>이벤트명, 날짜, 시간, 장소, 설명, 참가비</td>
                  <td>연사, 카테고리, 스폰서</td>
                </tr>
                <tr>
                  <td>FAQ</td>
                  <td>질문, 답변, 정렬 순서</td>
                  <td>카테고리, 관련 페이지</td>
                </tr>
                <tr>
                  <td>팀 멤버</td>
                  <td>이름, 직함, 사진, 약력, 소셜 링크</td>
                  <td>부서, 작성한 글</td>
                </tr>
              </tbody>
            </table>

            <h3>3.3 콘텐츠 모델링 원칙</h3>
            <ul>
              <li>
                <strong>프레젠테이션과 콘텐츠 분리:</strong> 콘텐츠 모델에 디자인 관련 정보
                (색상, 레이아웃 등)를 포함하지 않습니다. 콘텐츠는 구조와 의미만 담고,
                표현은 프론트엔드에서 결정합니다.
              </li>
              <li>
                <strong>적절한 세분화:</strong> 콘텐츠를 재사용 가능한 단위로 분리하되,
                과도한 분리는 관리 복잡성을 높입니다. 실제 재사용 시나리오를 기반으로
                결정합니다.
              </li>
              <li>
                <strong>명확한 명명 규칙:</strong> 필드명은 직관적이고 일관된 규칙을 따릅니다.
                예: camelCase 또는 snake_case를 하나로 통일합니다.
              </li>
              <li>
                <strong>유효성 검증:</strong> 필수 필드, 최대 길이, 형식 등의
                유효성 규칙을 정의하여 콘텐츠 품질을 보장합니다.
              </li>
              <li>
                <strong>확장 가능성:</strong> 향후 새로운 필드나 콘텐츠 타입이 추가될 수 있음을
                고려하여 유연하게 설계합니다.
              </li>
            </ul>

            <div className="exercise-box">
              <h3>실습: 콘텐츠 모델 설계</h3>
              <p>
                온라인 교육 플랫폼의 콘텐츠 모델을 설계해 보세요.
                다음 콘텐츠 타입을 정의하고 각각의 필드와 관계를 명시하세요.
              </p>
              <ul>
                <li><strong>강좌(Course):</strong> 강좌의 기본 정보를 담는 타입</li>
                <li><strong>레슨(Lesson):</strong> 각 강좌를 구성하는 개별 수업</li>
                <li><strong>강사(Instructor):</strong> 강좌를 진행하는 강사 정보</li>
                <li><strong>수강평(Review):</strong> 학습자의 평가와 피드백</li>
              </ul>
              <p>
                각 콘텐츠 타입별로 필드명, 데이터 타입, 필수 여부, 유효성 규칙을
                표로 정리하세요.
              </p>
            </div>

            <h2>4. 콘텐츠 워크플로우</h2>

            <h3>4.1 콘텐츠 라이프사이클</h3>
            <p>
              콘텐츠는 생성부터 폐기까지 명확한 라이프사이클을 거칩니다.
              각 단계에 맞는 워크플로우를 정의하면 품질과 효율성을 모두 확보할 수 있습니다.
            </p>

            <table className="lesson-table">
              <thead>
                <tr>
                  <th>단계</th>
                  <th>주요 활동</th>
                  <th>담당자</th>
                  <th>산출물</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>기획(Plan)</td>
                  <td>콘텐츠 전략 수립, 주제 선정, 캘린더 작성</td>
                  <td>콘텐츠 전략가, 마케터</td>
                  <td>콘텐츠 브리프, 에디토리얼 캘린더</td>
                </tr>
                <tr>
                  <td>생성(Create)</td>
                  <td>콘텐츠 작성, 미디어 제작, 메타데이터 입력</td>
                  <td>콘텐츠 작성자, 디자이너</td>
                  <td>초안(Draft)</td>
                </tr>
                <tr>
                  <td>리뷰(Review)</td>
                  <td>품질 검토, 팩트 체크, 법적 검토</td>
                  <td>편집자, 법무팀</td>
                  <td>수정된 초안</td>
                </tr>
                <tr>
                  <td>승인(Approve)</td>
                  <td>최종 승인, 게시 일정 확정</td>
                  <td>콘텐츠 매니저, 관리자</td>
                  <td>승인된 콘텐츠</td>
                </tr>
                <tr>
                  <td>게시(Publish)</td>
                  <td>CMS에서 게시, 소셜 공유, 알림 발송</td>
                  <td>콘텐츠 운영자</td>
                  <td>게시된 콘텐츠</td>
                </tr>
                <tr>
                  <td>유지(Maintain)</td>
                  <td>성과 모니터링, 업데이트, 오류 수정</td>
                  <td>콘텐츠 운영자</td>
                  <td>업데이트된 콘텐츠</td>
                </tr>
                <tr>
                  <td>보관/폐기(Archive)</td>
                  <td>만료 콘텐츠 보관 또는 삭제</td>
                  <td>콘텐츠 매니저</td>
                  <td>보관된 또는 삭제된 콘텐츠</td>
                </tr>
              </tbody>
            </table>

            <h3>4.2 승인 워크플로우 설계</h3>
            <p>
              콘텐츠의 유형과 중요도에 따라 다른 수준의 승인 워크플로우를 적용합니다.
            </p>

            <table className="lesson-table">
              <thead>
                <tr>
                  <th>콘텐츠 유형</th>
                  <th>위험도</th>
                  <th>승인 단계</th>
                  <th>예상 소요 시간</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>소셜 미디어 포스트</td>
                  <td>낮음</td>
                  <td>작성 → 팀장 승인 → 게시</td>
                  <td>1~2일</td>
                </tr>
                <tr>
                  <td>블로그 글</td>
                  <td>중간</td>
                  <td>작성 → 편집 리뷰 → 팀장 승인 → 게시</td>
                  <td>3~5일</td>
                </tr>
                <tr>
                  <td>제품 설명</td>
                  <td>높음</td>
                  <td>작성 → 편집 → 법무 검토 → 관리자 승인 → 게시</td>
                  <td>5~10일</td>
                </tr>
                <tr>
                  <td>법적 고지/약관</td>
                  <td>매우 높음</td>
                  <td>작성 → 법무 검토 → 경영진 승인 → 게시</td>
                  <td>2~4주</td>
                </tr>
              </tbody>
            </table>

            <h3>4.3 워크플로우 자동화</h3>
            <p>
              반복적인 콘텐츠 관리 작업을 자동화하면 효율성을 크게 높일 수 있습니다.
            </p>
            <ul>
              <li><strong>자동 알림:</strong> 콘텐츠 상태 변경 시 관련 담당자에게 자동 통보</li>
              <li><strong>예약 게시:</strong> 설정된 날짜/시간에 자동으로 콘텐츠 게시</li>
              <li><strong>만료 관리:</strong> 설정된 기간이 지나면 자동으로 비공개 처리</li>
              <li><strong>SEO 검증:</strong> 게시 전 메타 태그, 이미지 alt 텍스트 등 자동 검증</li>
              <li><strong>번역 요청:</strong> 원본 콘텐츠 게시 시 자동으로 번역 태스크 생성</li>
              <li><strong>소셜 공유:</strong> 게시와 동시에 소셜 미디어에 자동 공유</li>
            </ul>

            <h2>5. 콘텐츠 거버넌스</h2>

            <h3>5.1 거버넌스란 무엇인가</h3>
            <p>
              콘텐츠 거버넌스(Content Governance)는 조직의 콘텐츠를 일관되고 효과적으로
              관리하기 위한 정책, 프로세스, 역할, 기준의 체계입니다. 거버넌스 없이는
              콘텐츠의 품질이 들쭉날쭉해지고, 브랜드 일관성이 깨지며,
              비효율적인 중복 작업이 발생합니다.
            </p>

            <h3>5.2 거버넌스 프레임워크 구성 요소</h3>
            <table className="lesson-table">
              <thead>
                <tr>
                  <th>구성 요소</th>
                  <th>내용</th>
                  <th>문서화 항목</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>역할과 책임</td>
                  <td>콘텐츠 관련 각 역할의 명확한 정의</td>
                  <td>RACI 매트릭스, 역할 설명서</td>
                </tr>
                <tr>
                  <td>스타일 가이드</td>
                  <td>브랜드 보이스, 톤, 문법, 용어 규칙</td>
                  <td>에디토리얼 스타일 가이드</td>
                </tr>
                <tr>
                  <td>품질 기준</td>
                  <td>콘텐츠 품질의 최소 기준 정의</td>
                  <td>품질 체크리스트, 리뷰 기준표</td>
                </tr>
                <tr>
                  <td>프로세스</td>
                  <td>생성부터 폐기까지의 워크플로우</td>
                  <td>프로세스 다이어그램, SOP</td>
                </tr>
                <tr>
                  <td>기술 표준</td>
                  <td>CMS 사용 규칙, 메타데이터 표준</td>
                  <td>기술 가이드, 템플릿</td>
                </tr>
                <tr>
                  <td>측정과 보고</td>
                  <td>성과 지표, 보고 주기, 개선 프로세스</td>
                  <td>KPI 대시보드, 보고서 템플릿</td>
                </tr>
              </tbody>
            </table>

            <h3>5.3 콘텐츠 감사(Content Audit)</h3>
            <p>
              콘텐츠 감사는 기존 콘텐츠의 현황을 체계적으로 조사하고 평가하는 과정입니다.
              새로운 CMS 도입이나 사이트 리뉴얼 시 반드시 수행해야 합니다.
            </p>
            <ul>
              <li><strong>정량적 감사:</strong> 콘텐츠의 수, 유형, 형태, 크기, 트래픽 등을 파악</li>
              <li><strong>정성적 감사:</strong> 콘텐츠의 정확성, 관련성, 브랜드 일관성, 접근성 평가</li>
              <li><strong>기술적 감사:</strong> 깨진 링크, SEO 이슈, 성능 문제 점검</li>
            </ul>
            <p>
              감사 결과에 따라 각 콘텐츠에 대해 유지(Keep), 업데이트(Update),
              통합(Merge), 삭제(Delete)의 조치를 결정합니다.
              이를 ROT 분석(Redundant, Outdated, Trivial)이라고도 합니다.
            </p>

            <h3>5.4 콘텐츠 품질 체크리스트</h3>
            <p>
              모든 콘텐츠가 게시 전에 통과해야 하는 품질 기준을 정의합니다.
            </p>
            <ul>
              <li>맞춤법과 문법 오류가 없는가?</li>
              <li>브랜드 스타일 가이드를 준수하는가?</li>
              <li>정보가 정확하고 최신인가?</li>
              <li>SEO 메타 태그(제목, 설명, alt 텍스트)가 작성되었는가?</li>
              <li>모바일에서 올바르게 표시되는가?</li>
              <li>접근성 기준(WCAG)을 충족하는가?</li>
              <li>관련 내부/외부 링크가 정상 작동하는가?</li>
              <li>적절한 카테고리와 태그가 설정되었는가?</li>
              <li>법적으로 문제가 될 소지가 없는가?</li>
            </ul>

            <div className="exercise-box">
              <h3>실습: CMS 선택 의사결정</h3>
              <p>
                다음 시나리오를 읽고, 가장 적합한 CMS를 선택하고 근거를 제시하세요.
              </p>
              <ul>
                <li>
                  <strong>시나리오 A:</strong> 스타트업이 회사 소개 웹사이트를 빠르게 구축해야 합니다.
                  개발자 1명, 마케터 2명으로 구성된 팀입니다. 예산은 제한적이며
                  블로그와 채용 페이지가 필요합니다.
                </li>
                <li>
                  <strong>시나리오 B:</strong> 글로벌 기업이 5개 언어로 된 제품 카탈로그를
                  웹사이트와 모바일 앱에 동시에 제공해야 합니다. 전담 개발 팀이 있으며
                  월 1,000개 이상의 콘텐츠를 관리합니다.
                </li>
                <li>
                  <strong>시나리오 C:</strong> 디자인 에이전시가 포트폴리오 사이트를
                  만들고 싶습니다. 코딩 없이 비주얼 디자인으로 구축하고 싶으며,
                  클라이언트별 사례 연구 페이지가 필요합니다.
                </li>
              </ul>
            </div>

            <div className="callout-box">
              <h3>핵심 정리</h3>
              <ul>
                <li>CMS는 전통적, Headless, Hybrid, Static, DXP 등 다양한 유형이 있으며 각각 장단점이 다르다</li>
                <li>Headless CMS는 멀티채널 환경에서 유연성과 성능 면에서 우수하다</li>
                <li>콘텐츠 모델링은 CMS 구축의 핵심으로, 프레젠테이션과 콘텐츠를 분리해야 한다</li>
                <li>콘텐츠 라이프사이클(기획→생성→리뷰→승인→게시→유지→보관)에 맞는 워크플로우를 정의한다</li>
                <li>워크플로우 자동화는 팀의 생산성을 높이고 오류를 줄인다</li>
                <li>콘텐츠 거버넌스는 역할, 스타일 가이드, 품질 기준, 프로세스를 포괄하는 체계적 관리이다</li>
                <li>정기적인 콘텐츠 감사를 통해 불필요하거나 오래된 콘텐츠를 정리해야 한다</li>
              </ul>
            </div>

            <div className="lesson-nav">
              <Link to="/ux/multichannel" className="lesson-nav-btn prev">
                ← 11주차: 멀티채널 콘텐츠 전략
              </Link>
              <Link to="/ux/analytics" className="lesson-nav-btn next">
                13주차: 콘텐츠 성과 측정과 분석 →
              </Link>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default UxWeek12;
