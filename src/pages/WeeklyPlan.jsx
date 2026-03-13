import { useLanguage } from '../contexts/LanguageContext';
import SEOHead from '../components/SEOHead';

const weeklyData = [
  { week: 1,  theory: '고객경험디자인(CXD)과 콘텐츠 전략 개요', practice: '콘텐츠 전략 사례 분석' },
  { week: 2,  theory: '사용자 리서치 방법론', practice: '페르소나 작성 실습' },
  { week: 3,  theory: '고객 여정 맵핑', practice: 'Customer Journey Map 제작' },
  { week: 4,  theory: '콘텐츠 감사와 분석', practice: 'Content Audit 실습' },
  { week: 5,  theory: '정보 아키텍처(IA) 설계', practice: '사이트맵 & 와이어프레임 제작' },
  { week: 6,  theory: 'UX 라이팅과 마이크로카피', practice: 'UX Writing 실습' },
  { week: 7,  theory: '콘텐츠 전략 프레임워크', practice: '콘텐츠 모델 설계' },
  { week: 8,  theory: '중간고사', practice: '중간고사' },
  { week: 9,  theory: '비주얼 콘텐츠 디자인', practice: 'Figma 활용 비주얼 디자인' },
  { week: 10, theory: 'UI 콘텐츠 디자인 패턴', practice: 'UI 콘텐츠 가이드라인 작성' },
  { week: 11, theory: '콘텐츠 개인화와 A/B 테스팅', practice: 'A/B 테스트 설계 실습' },
  { week: 12, theory: '멀티채널 콘텐츠 전략', practice: '옴니채널 콘텐츠 플랜 수립' },
  { week: 13, theory: 'CMS와 콘텐츠 관리 도구', practice: 'CMS 활용 실습' },
  { week: 14, theory: '콘텐츠 성과 측정과 분석', practice: 'GA/데이터 분석 실습' },
  { week: 15, theory: '최종 프로젝트 발표', practice: '최종 프로젝트 발표' },
];

const WeeklyPlan = () => {
  const { t } = useLanguage();

  return (
    <>
      <SEOHead title={t('site.cxd.weeklyPlan.title')} path="/cxd/weekly-plan" />

      <section className="page-header">
        <div className="container">
          <h1>{t('site.cxd.weeklyPlan.title')}</h1>
          <p>{t('site.cxd.weeklyPlan.subtitle')}</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="board-table-wrapper">
            <table className="board-table weekly-plan-table">
              <thead>
                <tr>
                  <th style={{ width: '70px', textAlign: 'center' }}>{t('site.cxd.weeklyPlan.week')}</th>
                  <th>{t('site.cxd.weeklyPlan.theory')} (2{t('site.cxd.weeklyPlan.hours')})</th>
                  <th>{t('site.cxd.weeklyPlan.practice')} (2{t('site.cxd.weeklyPlan.hours')})</th>
                </tr>
              </thead>
              <tbody>
                {weeklyData.map((row) => (
                  <tr key={row.week} className={row.week === 8 || row.week === 15 ? 'exam-row' : ''}>
                    <td style={{ textAlign: 'center', fontWeight: 600 }}>{row.week}</td>
                    <td>{row.theory}</td>
                    <td>{row.practice}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
};

export default WeeklyPlan;
