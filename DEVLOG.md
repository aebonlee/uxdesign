# 개발일지 - 고객경험디자인 콘텐츠 전략 학습 사이트

## 프로젝트 개요
- **프로젝트명**: CXD 콘텐츠 전략 학습 사이트
- **URL**: https://uxdesign.dreamitbiz.com
- **GitHub**: https://github.com/aebonlee/uxdesign
- **기술 스택**: React 19 + Vite 7 + Supabase
- **참조 프로젝트**: KoreaTech 컴퓨팅 사고 (D:\koreatech)

---

## 2026-03-13 (Day 1) - 프로젝트 초기 구축

### Phase 1: 프로젝트 초기화
- Vite 7 + React 19 프로젝트 생성
- `package.json` 설정 (react 19.2, react-router-dom 7.13, @supabase/supabase-js 2.96)
- `vite.config.js` 설정 (port 5175, copy-404 plugin for SPA routing)
- `index.html` 작성 (OG 태그, 메타 정보, 파란색 #0046C8 테마)
- `.env.example`, `.gitignore` 생성
- `public/favicon.svg` 생성 (파란색 UX 로고)
- npm install 완료

### Phase 2: 공유 인프라 복사 (koreatech → uxdesign)
koreatech 프로젝트에서 다음 파일들을 복사:
- **Entry**: `src/main.jsx`, `src/App.jsx`
- **Contexts** (4개): ThemeContext, LanguageContext, AuthContext, ToastContext
- **Utils** (3개): supabase.js, auth.js, searchStorage.js
- **Hooks** (3개): useAOS.js, useCodeCopy.js, useTableScroller.js
- **Components** (3개): AuthGuard.jsx, SearchModal.jsx, Pagination.jsx

### Phase 3: 사이트별 설정 (신규 작성)
- `src/config/site.js` - 새 과목 메뉴 구조 정의
  - 과목 소개 (CXD): what-is-cxd, weekly-plan, syllabus, practice-guide
  - UX 콘텐츠 전략: 13개 주차별 학습 경로
  - AI Tips: 8개 서브 페이지
  - 강의안, 참고자료, 커뮤니티 (게시판/갤러리/포트폴리오/웹사이트)
  - 브랜드: "CXD Content Strategy"
  - Family Sites: DreamIT Biz, DreamIT Books, KoreaTech
- `src/config/admin.js` - 관리자 이메일 설정
- `src/components/SEOHead.jsx` - uxdesign.dreamitbiz.com 전용 SEO
- `src/utils/translations.js` - CXD 과목 전용 다국어 번역 키 (한/영)
- `src/layouts/PublicLayout.jsx` - 전체 라우트 구성 (40+ 라우트)

### Phase 4: 스타일 복사 (13개 CSS 파일)
- `src/index.css` (import 매니페스트)
- `src/styles/base.css` (파란색 #0046C8 기본 테마)
- `src/styles/navbar.css`, `hero.css`, `footer.css`
- `src/styles/shop.css`, `auth.css`, `animations.css`
- `src/styles/search.css`, `toast.css`, `dark-mode.css`
- `src/styles/responsive.css`, `site.css`

### Phase 5: 레이아웃 컴포넌트 복사
- `src/components/layout/Navbar.jsx` - site.js 기반 동적 메뉴
- `src/components/layout/Footer.jsx` - site.js 기반 동적 푸터

### Phase 6: 페이지 컴포넌트

#### A) 과목 소개 페이지 (5개, 신규 작성)
- `Home.jsx` - 히어로 섹션, 커리큘럼 카드 그리드, AI Tips 카드
- `WhatIsCXD.jsx` - 고객경험디자인이란?
- `WeeklyPlan.jsx` - 15주차 강의계획표
- `Syllabus.jsx` - 강의계획서
- `PracticeGuide.jsx` - 실습안내

#### B) UX 콘텐츠 전략 주차별 학습 (14개, 신규 작성)
- `UxLesson.jsx` - 허브 페이지 (13주차 목록)
- `UxWeek1.jsx` - 1주차: CXD와 콘텐츠 전략 개요
- `UxWeek2.jsx` - 2주차: 사용자 리서치 방법론
- `UxWeek3.jsx` - 3주차: 고객 여정 맵핑
- `UxWeek4.jsx` - 4주차: 콘텐츠 감사와 분석
- `UxWeek5.jsx` - 5주차: 정보 아키텍처(IA) 설계
- `UxWeek6.jsx` - 6주차: UX 라이팅과 마이크로카피
- `UxWeek7.jsx` - 7주차: 콘텐츠 전략 프레임워크
- `UxWeek8.jsx` - 8주차: 비주얼 콘텐츠 디자인
- `UxWeek9.jsx` - 9주차: UI 콘텐츠 디자인 패턴
- `UxWeek10.jsx` - 10주차: 콘텐츠 개인화와 A/B 테스팅
- `UxWeek11.jsx` - 11주차: 멀티채널 콘텐츠 전략
- `UxWeek12.jsx` - 12주차: CMS와 콘텐츠 관리 도구
- `UxWeek13.jsx` - 13주차: 콘텐츠 성과 측정과 분석

#### C) AI Tips (9개, 복사)
- AiTipsHome, AiTipsChatGPT, AiTipsClaude, AiTipsGemini
- AiTipsCopilot, AiTipsPrompt, AiTipsCoding, AiTipsWriting, AiTipsLearning

#### D) 강의/참고자료 (4개, 복사)
- LectureMaterials, Lectures, LectureDetail, LectureWrite

#### E) 커뮤니티 (12개, 복사)
- Board, BoardDetail, BoardWrite
- Gallery, GalleryDetail, GalleryWrite
- Portfolio, PortfolioDetail, PortfolioWrite
- Websites, WebsiteDetail, WebsiteWrite

#### F) 인증/관리 (6개, 복사)
- Login, Register, ForgotPassword, MyPage
- Admin, NotFound

### 빌드 검증
- `npm run build` 성공
- 149 modules transformed
- 56개 output files (CSS 1개 + JS 55개)
- Total CSS: 96.89 kB (gzip: 16.93 kB)
- Main JS bundle: 287.35 kB (gzip: 90.28 kB)

---

## 파일 구조

```
D:\uxdesign/
├── public/
│   ├── favicon.svg
│   ├── og-image.png
│   └── CNAME
├── src/
│   ├── main.jsx
│   ├── App.jsx
│   ├── index.css
│   ├── config/
│   │   ├── site.js
│   │   └── admin.js
│   ├── contexts/
│   │   ├── ThemeContext.jsx
│   │   ├── LanguageContext.jsx
│   │   ├── AuthContext.jsx
│   │   └── ToastContext.jsx
│   ├── utils/
│   │   ├── supabase.js
│   │   ├── auth.js
│   │   ├── searchStorage.js
│   │   └── translations.js
│   ├── hooks/
│   │   ├── useAOS.js
│   │   ├── useCodeCopy.js
│   │   └── useTableScroller.js
│   ├── components/
│   │   ├── SEOHead.jsx
│   │   ├── AuthGuard.jsx
│   │   ├── SearchModal.jsx
│   │   ├── Pagination.jsx
│   │   └── layout/
│   │       ├── Navbar.jsx
│   │       └── Footer.jsx
│   ├── layouts/
│   │   └── PublicLayout.jsx
│   ├── styles/
│   │   ├── base.css
│   │   ├── navbar.css
│   │   ├── hero.css
│   │   ├── footer.css
│   │   ├── shop.css
│   │   ├── auth.css
│   │   ├── animations.css
│   │   ├── search.css
│   │   ├── toast.css
│   │   ├── dark-mode.css
│   │   ├── responsive.css
│   │   └── site.css
│   └── pages/
│       ├── Home.jsx
│       ├── WhatIsCXD.jsx
│       ├── WeeklyPlan.jsx
│       ├── Syllabus.jsx
│       ├── PracticeGuide.jsx
│       ├── UxLesson.jsx
│       ├── UxWeek1.jsx ~ UxWeek13.jsx
│       ├── AiTipsHome.jsx ~ AiTipsLearning.jsx
│       ├── LectureMaterials.jsx
│       ├── Lectures.jsx
│       ├── LectureDetail.jsx
│       ├── LectureWrite.jsx
│       ├── Board.jsx, BoardDetail.jsx, BoardWrite.jsx
│       ├── Gallery.jsx, GalleryDetail.jsx, GalleryWrite.jsx
│       ├── Portfolio.jsx, PortfolioDetail.jsx, PortfolioWrite.jsx
│       ├── Websites.jsx, WebsiteDetail.jsx, WebsiteWrite.jsx
│       ├── Login.jsx, Register.jsx, ForgotPassword.jsx
│       ├── MyPage.jsx
│       ├── Admin.jsx
│       └── NotFound.jsx
├── package.json
├── vite.config.js
├── index.html
├── .env.example
├── .gitignore
└── DEVLOG.md
```

---

## 2026-03-14 (Day 2) - UI 개선 및 Supabase 연동

### 네비게이션 바 개선
- **'홈' 메뉴 삭제**: 로고 클릭으로 홈 이동 가능하므로 중복 메뉴 제거 (site.js menuItems, footerLinks)
- **메뉴 1줄 표시 최적화**:
  - 로고 폰트: 28px → 22px, `white-space: nowrap` 적용
  - 메뉴 링크 패딩: 14px → 10px, `white-space: nowrap` 적용
  - 메뉴 폰트 크기: 14px → 15px (가독성 향상)
  - `nav-wrapper`, `nav-menu`: `flex-wrap: nowrap` 적용
  - `nav-actions` 간격: 12px → 8px
  - `nav-link::after` 밑줄 위치: 14px → 10px

### Supabase 환경변수 연동
- `.env` 파일 생성 (koreatech과 동일한 Supabase 프로젝트 공유)
- 빌드 시 Supabase 클라이언트 포함 (JS 번들: 287KB → 470KB)

### 빌드 & 배포
- `npm run build` 성공: 149 modules, 56 output files
- Total CSS: 96.96 kB (gzip: 16.94 kB)
- Main JS bundle: 470.16 kB (gzip: 138.46 kB)
- GitHub Pages 배포 완료 (`npx gh-pages -d dist`)

---

## 2026-03-15 (Day 3) - OG 이미지 생성 및 메타 태그 최적화

### Open Graph 미리보기 이미지 생성
- `public/og-image.png` 생성 (1200×630px, 92KB)
  - 파란색 그라디언트 배경 (#0046C8 → #002E8A → #1E3A5F)
  - 타이틀: "고객경험을 디자인하는 콘텐츠 전략"
  - 서브: UX 리서치 · 콘텐츠 전략 · UX 라이팅 · 비주얼 디자인 · 성과 측정
  - 브랜드: CXD Content Strategy / uxdesign.dreamitbiz.com / DreamIT Biz
  - sharp 라이브러리를 사용하여 SVG → PNG 변환

### OG 메타 태그 수정
- `index.html`: og:image:width 400→1200, og:image:height 302→630
- `src/components/SEOHead.jsx`: 동일 크기 수정
- 카카오톡/페이스북/트위터 공유 미리보기 최적화

### OG 태그 현황
```
og:url         https://uxdesign.dreamitbiz.com
og:title       고객경험디자인 콘텐츠 전략 | UX Design
og:description 고객경험디자인(CXD) 콘텐츠 전략 학습 - UX 리서치, 콘텐츠 전략, 비주얼 디자인까지 한곳에서
og:type        website
og:image       https://uxdesign.dreamitbiz.com/og-image.png (1200×630)
og:site_name   고객경험디자인 콘텐츠 전략
```

---

## 총 파일 수
- **복사**: ~50개 (인프라, 스타일, AI Tips, 강의, 커뮤니티, 인증)
- **신규 작성/수정**: ~25개 (설정, 과목 소개, UX 주차별 학습)
- **합계**: ~75개 소스 파일
