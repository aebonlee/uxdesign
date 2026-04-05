import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import { useLanguage } from '../contexts/LanguageContext';

const lessons = [
  { path: '/ux/intro', week: '1주차', title: 'CXD와 콘텐츠 전략', desc: '고객경험디자인 개요와 콘텐츠 전략 소개' },
  { path: '/ux/research', week: '2주차', title: '사용자 리서치', desc: '리서치 방법론과 페르소나 작성' },
  { path: '/ux/journey-map', week: '3주차', title: '고객 여정 맵핑', desc: 'Customer Journey Map 제작' },
  { path: '/ux/content-audit', week: '4주차', title: '콘텐츠 감사', desc: 'Content Audit와 분석' },
  { path: '/ux/information-architecture', week: '5주차', title: '정보 아키텍처', desc: '사이트맵과 와이어프레임' },
  { path: '/ux/ux-writing', week: '6주차', title: 'UX 라이팅', desc: 'UX Writing과 마이크로카피' },
  { path: '/ux/content-strategy', week: '7주차', title: '콘텐츠 전략', desc: '콘텐츠 전략 프레임워크' },
  { path: '/ux/visual-design', week: '8주차', title: '비주얼 디자인', desc: 'Figma 활용 비주얼 디자인' },
  { path: '/ux/ui-content', week: '9주차', title: 'UI 콘텐츠', desc: 'UI 콘텐츠 디자인 패턴' },
  { path: '/ux/personalization', week: '10주차', title: '개인화와 A/B', desc: '콘텐츠 개인화와 A/B 테스팅' },
  { path: '/ux/multichannel', week: '11주차', title: '멀티채널 전략', desc: '옴니채널 콘텐츠 플랜' },
  { path: '/ux/cms', week: '12주차', title: 'CMS 활용', desc: 'CMS와 콘텐츠 관리' },
  { path: '/ux/analytics', week: '13주차', title: '성과 측정', desc: 'GA/데이터 분석' },
];

const UxLesson = () => {
  const { t } = useLanguage();
  return (
    <>
      <SEOHead title={t('site.ux.title')} path="/ux" />
      <section className="page-header">
        <div className="container">
          <h1>{t('site.ux.title')}</h1>
          <p>{t('site.ux.subtitle')}</p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="curriculum-grid">
            {lessons.map((l) => (
              <Link to={l.path} key={l.path} className="curriculum-card">
                <span className="curriculum-step">{l.week}</span>
                <h3 className="curriculum-card-title">{l.title}</h3>
                <p className="curriculum-card-desc">{l.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default UxLesson;
