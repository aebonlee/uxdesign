import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import SEOHead from '../components/SEOHead';
import useAOS from '../hooks/useAOS';
import site from '../config/site';

const Home = () => {
  const { t } = useLanguage();
  useAOS();

  const aiTips = [
    { path: '/ai-tips/chatgpt',  title: 'ChatGPT',        desc: 'OpenAI의 대화형 AI 활용법',          icon: '💬' },
    { path: '/ai-tips/claude',   title: 'Claude',          desc: 'Anthropic의 AI 어시스턴트 활용법',    icon: '🤖' },
    { path: '/ai-tips/gemini',   title: 'Gemini',          desc: 'Google의 멀티모달 AI 활용법',         icon: '✨' },
    { path: '/ai-tips/copilot',  title: 'Copilot',         desc: 'GitHub AI 코딩 어시스턴트 활용법',     icon: '👨‍💻' },
    { path: '/ai-tips/prompt',   title: '프롬프트 작성법',   desc: '효과적인 프롬프트 엔지니어링',         icon: '✏️' },
    { path: '/ai-tips/coding',   title: 'AI 코딩 활용',     desc: '코드 생성, 디버깅, 리팩토링',         icon: '💻' },
    { path: '/ai-tips/writing',  title: 'AI 문서 작성',     desc: '보고서, 요약, 번역, 이메일',          icon: '📝' },
    { path: '/ai-tips/learning', title: 'AI 학습 활용',     desc: '개념 설명, 퀴즈, 학습 계획',          icon: '📚' },
  ];

  const chapters = [
    { path: '/ux/intro', title: 'CXD와 콘텐츠 전략', desc: '고객경험디자인 개요와 콘텐츠 전략 소개', icon: '🎯', step: '1주차' },
    { path: '/ux/research', title: '사용자 리서치', desc: '리서치 방법론과 페르소나 작성', icon: '🔍', step: '2주차' },
    { path: '/ux/journey-map', title: '고객 여정 맵핑', desc: 'Customer Journey Map 제작', icon: '🗺️', step: '3주차' },
    { path: '/ux/content-audit', title: '콘텐츠 감사', desc: 'Content Audit 실습', icon: '📋', step: '4주차' },
    { path: '/ux/information-architecture', title: '정보 아키텍처', desc: '사이트맵 & 와이어프레임', icon: '🏗️', step: '5주차' },
    { path: '/ux/ux-writing', title: 'UX 라이팅', desc: 'UX Writing과 마이크로카피', icon: '✏️', step: '6주차' },
    { path: '/ux/content-strategy', title: '콘텐츠 전략', desc: '콘텐츠 전략 프레임워크', icon: '📐', step: '7주차' },
    { path: '/ux/visual-design', title: '비주얼 디자인', desc: 'Figma 활용 비주얼 디자인', icon: '🎨', step: '8주차' },
    { path: '/ux/ui-content', title: 'UI 콘텐츠', desc: 'UI 콘텐츠 디자인 패턴', icon: '📱', step: '9주차' },
    { path: '/ux/personalization', title: '개인화와 A/B', desc: '콘텐츠 개인화와 A/B 테스팅', icon: '🧪', step: '10주차' },
    { path: '/ux/multichannel', title: '멀티채널 전략', desc: '옴니채널 콘텐츠 플랜', icon: '📡', step: '11주차' },
    { path: '/ux/cms', title: 'CMS 활용', desc: 'CMS와 콘텐츠 관리', icon: '⚙️', step: '12주차' },
    { path: '/ux/analytics', title: '성과 측정', desc: 'GA/데이터 분석', icon: '📊', step: '13주차' },
  ];

  return (
    <>
      <SEOHead
        title={`${site.name} | ${site.nameKo}`}
        description={site.description}
      />

      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-content" data-aos="fade-up">
            <h1 className="hero-title">
              <span className="hero-title-line1">고객경험을 디자인하는</span>{' '}
              <span className="hero-title-line2">콘텐츠 전략</span>
            </h1>
            <p className="hero-description">{t('site.home.heroDesc')}</p>
            <div className="hero-actions">
              <Link to="/ux" className="hero-btn primary">{t('site.home.startLearning')}</Link>
              <Link to="/community/board" className="hero-btn secondary">{t('site.home.goToBoard')}</Link>
            </div>
          </div>
        </div>
      </section>

      {/* What is CXD */}
      <section className="section ct-intro-section">
        <div className="container">
          <div className="ct-intro" data-aos="fade-up">
            <h2 className="section-title">{t('site.home.whatIsCXD')}</h2>
            <p className="ct-description">{t('site.home.cxdDescription')}</p>
          </div>
          <div className="learning-goals" data-aos="fade-up" data-aos-delay="200">
            <h3>{t('site.home.learningGoals')}</h3>
            <ul className="goals-list">
              <li>{t('site.home.goal1')}</li>
              <li>{t('site.home.goal2')}</li>
              <li>{t('site.home.goal3')}</li>
              <li>{t('site.home.goal4')}</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Curriculum Cards */}
      <section className="section curriculum-section">
        <div className="container">
          <h2 className="section-title" data-aos="fade-up">{t('site.home.curriculum')}</h2>
          <p className="section-subtitle" data-aos="fade-up">{t('site.home.curriculumDesc')}</p>
          <div className="curriculum-grid">
            {chapters.map((ch, i) => (
              <Link
                to={ch.path}
                key={ch.path}
                className="curriculum-card"
                data-aos="fade-up"
                data-aos-delay={i * 100}
              >
                <span className="curriculum-step">{ch.step}</span>
                <span className="curriculum-icon">{ch.icon}</span>
                <h3 className="curriculum-card-title">{ch.title}</h3>
                <p className="curriculum-card-desc">{ch.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* AI Tips Cards */}
      <section className="section curriculum-section">
        <div className="container">
          <h2 className="section-title" data-aos="fade-up">{t('site.aiTips.title')}</h2>
          <p className="section-subtitle" data-aos="fade-up">{t('site.aiTips.subtitle')}</p>
          <div className="curriculum-grid">
            {aiTips.map((item, i) => (
              <Link
                to={item.path}
                key={item.path}
                className="curriculum-card"
                data-aos="fade-up"
                data-aos-delay={i * 80}
              >
                <span className="curriculum-icon">{item.icon}</span>
                <h3 className="curriculum-card-title">{item.title}</h3>
                <p className="curriculum-card-desc">{item.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
