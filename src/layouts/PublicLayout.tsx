import { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import AuthGuard from '../components/AuthGuard';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { LicenseProvider } from '../components/LicenseGuard';
import LockOverlay from '../components/LockOverlay';
import useCodeCopy from '../hooks/useCodeCopy';
import useTableScroller from '../hooks/useTableScroller';

// 페이지 lazy import
const Home = lazy(() => import('../pages/Home'));
const WhatIsCXD = lazy(() => import('../pages/WhatIsCXD'));
const WeeklyPlan = lazy(() => import('../pages/WeeklyPlan'));
const Syllabus = lazy(() => import('../pages/Syllabus'));
const PracticeGuide = lazy(() => import('../pages/PracticeGuide'));
const Login = lazy(() => import('../pages/Login'));
const Register = lazy(() => import('../pages/Register'));
const ForgotPassword = lazy(() => import('../pages/ForgotPassword'));
const MyPage = lazy(() => import('../pages/MyPage'));

// UX 콘텐츠 전략 주차별 학습
const UxLesson = lazy(() => import('../pages/UxLesson'));
const UxWeek1 = lazy(() => import('../pages/UxWeek1'));
const UxWeek2 = lazy(() => import('../pages/UxWeek2'));
const UxWeek3 = lazy(() => import('../pages/UxWeek3'));
const UxWeek4 = lazy(() => import('../pages/UxWeek4'));
const UxWeek5 = lazy(() => import('../pages/UxWeek5'));
const UxWeek6 = lazy(() => import('../pages/UxWeek6'));
const UxWeek7 = lazy(() => import('../pages/UxWeek7'));
const UxWeek8 = lazy(() => import('../pages/UxWeek8'));
const UxWeek9 = lazy(() => import('../pages/UxWeek9'));
const UxWeek10 = lazy(() => import('../pages/UxWeek10'));
const UxWeek11 = lazy(() => import('../pages/UxWeek11'));
const UxWeek12 = lazy(() => import('../pages/UxWeek12'));
const UxWeek13 = lazy(() => import('../pages/UxWeek13'));

// AI Tips
const AiTipsHome = lazy(() => import('../pages/AiTipsHome'));
const AiTipsChatGPT = lazy(() => import('../pages/AiTipsChatGPT'));
const AiTipsClaude = lazy(() => import('../pages/AiTipsClaude'));
const AiTipsGemini = lazy(() => import('../pages/AiTipsGemini'));
const AiTipsCopilot = lazy(() => import('../pages/AiTipsCopilot'));
const AiTipsPrompt = lazy(() => import('../pages/AiTipsPrompt'));
const AiTipsCoding = lazy(() => import('../pages/AiTipsCoding'));
const AiTipsWriting = lazy(() => import('../pages/AiTipsWriting'));
const AiTipsLearning = lazy(() => import('../pages/AiTipsLearning'));

// Community
const Board = lazy(() => import('../pages/Board'));
const BoardDetail = lazy(() => import('../pages/BoardDetail'));
const BoardWrite = lazy(() => import('../pages/BoardWrite'));
const Gallery = lazy(() => import('../pages/Gallery'));
const GalleryDetail = lazy(() => import('../pages/GalleryDetail'));
const GalleryWrite = lazy(() => import('../pages/GalleryWrite'));
const Portfolio = lazy(() => import('../pages/Portfolio'));
const PortfolioDetail = lazy(() => import('../pages/PortfolioDetail'));
const PortfolioWrite = lazy(() => import('../pages/PortfolioWrite'));
const Websites = lazy(() => import('../pages/Websites'));
const WebsiteDetail = lazy(() => import('../pages/WebsiteDetail'));
const WebsiteWrite = lazy(() => import('../pages/WebsiteWrite'));

// Lectures
const LectureMaterials = lazy(() => import('../pages/LectureMaterials'));
const Lectures = lazy(() => import('../pages/Lectures'));
const LectureDetail = lazy(() => import('../pages/LectureDetail'));
const LectureWrite = lazy(() => import('../pages/LectureWrite'));

// Admin & Error
const Admin = lazy(() => import('../pages/Admin'));
const NotFound = lazy(() => import('../pages/NotFound'));

const Loading = () => (
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '60vh' }}>
    <div className="loading-spinner"></div>
  </div>
);

const PublicLayout = () => {
  useCodeCopy();
  useTableScroller();

  return (
    <LicenseProvider>
    <div className="site-wrapper">
      <Navbar />
      <main className="site-main">
        <Suspense fallback={<Loading />}>
          <Routes>
            {/* Home */}
            <Route path="/" element={<Home />} />

            {/* Auth */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/mypage" element={<AuthGuard><MyPage /></AuthGuard>} />

            {/* 과목 소개 (CXD) */}
            <Route path="/cxd/what-is-cxd" element={<WhatIsCXD />} />
            <Route path="/cxd/weekly-plan" element={<WeeklyPlan />} />
            <Route path="/cxd/syllabus" element={<Syllabus />} />
            <Route path="/cxd/practice-guide" element={<PracticeGuide />} />

            {/* UX 콘텐츠 전략 주차별 학습 */}
            <Route path="/ux" element={<UxLesson />} />
            <Route path="/ux/intro" element={<UxWeek1 />} />
            <Route path="/ux/research" element={<UxWeek2 />} />
            <Route path="/ux/journey-map" element={<UxWeek3 />} />
            <Route path="/ux/content-audit" element={<UxWeek4 />} />
            <Route path="/ux/information-architecture" element={<UxWeek5 />} />
            <Route path="/ux/ux-writing" element={<UxWeek6 />} />
            <Route path="/ux/content-strategy" element={<UxWeek7 />} />
            <Route path="/ux/visual-design" element={<UxWeek8 />} />
            <Route path="/ux/ui-content" element={<UxWeek9 />} />
            <Route path="/ux/personalization" element={<UxWeek10 />} />
            <Route path="/ux/multichannel" element={<UxWeek11 />} />
            <Route path="/ux/cms" element={<UxWeek12 />} />
            <Route path="/ux/analytics" element={<UxWeek13 />} />

            {/* AI Tips */}
            <Route path="/ai-tips" element={<AiTipsHome />} />
            <Route path="/ai-tips/chatgpt" element={<AiTipsChatGPT />} />
            <Route path="/ai-tips/claude" element={<AiTipsClaude />} />
            <Route path="/ai-tips/gemini" element={<AiTipsGemini />} />
            <Route path="/ai-tips/copilot" element={<AiTipsCopilot />} />
            <Route path="/ai-tips/prompt" element={<AiTipsPrompt />} />
            <Route path="/ai-tips/coding" element={<AiTipsCoding />} />
            <Route path="/ai-tips/writing" element={<AiTipsWriting />} />
            <Route path="/ai-tips/learning" element={<AiTipsLearning />} />

            {/* Lectures */}
            <Route path="/lectures/materials" element={<LectureMaterials />} />
            <Route path="/lectures" element={<LectureMaterials />} />

            {/* References (주차별 참고자료) */}
            <Route path="/references" element={<Lectures />} />
            <Route path="/references/write" element={<AuthGuard><LectureWrite /></AuthGuard>} />
            <Route path="/references/edit/:id" element={<AuthGuard><LectureWrite /></AuthGuard>} />
            <Route path="/references/:id" element={<LectureDetail />} />

            {/* Community — Board */}
            <Route path="/community/board" element={<Board />} />
            <Route path="/community/board/write" element={<AuthGuard><BoardWrite /></AuthGuard>} />
            <Route path="/community/board/:id" element={<BoardDetail />} />

            {/* Community — Gallery */}
            <Route path="/community/gallery" element={<Gallery />} />
            <Route path="/community/gallery/write" element={<AuthGuard><GalleryWrite /></AuthGuard>} />
            <Route path="/community/gallery/edit/:id" element={<AuthGuard><GalleryWrite /></AuthGuard>} />
            <Route path="/community/gallery/:id" element={<GalleryDetail />} />

            {/* Community — Portfolio */}
            <Route path="/community/portfolio" element={<Portfolio />} />
            <Route path="/community/portfolio/write" element={<AuthGuard><PortfolioWrite /></AuthGuard>} />
            <Route path="/community/portfolio/edit/:id" element={<AuthGuard><PortfolioWrite /></AuthGuard>} />
            <Route path="/community/portfolio/:id" element={<PortfolioDetail />} />

            {/* Community — Websites (웹 추천사이트) */}
            <Route path="/community/websites" element={<Websites />} />
            <Route path="/community/websites/write" element={<AuthGuard><WebsiteWrite /></AuthGuard>} />
            <Route path="/community/websites/edit/:id" element={<AuthGuard><WebsiteWrite /></AuthGuard>} />
            <Route path="/community/websites/:id" element={<WebsiteDetail />} />

            {/* Admin */}
            <Route path="/admin" element={<AuthGuard><Admin /></AuthGuard>} />

            {/* Legacy redirects */}
            <Route path="/board" element={<Navigate to="/community/board" replace />} />
            <Route path="/board/:id" element={<Navigate to="/community/board" replace />} />

            {/* 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
      <LockOverlay />
    </div>
    </LicenseProvider>
  );
};

export default PublicLayout;
