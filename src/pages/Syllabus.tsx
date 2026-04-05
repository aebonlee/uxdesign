import { useLanguage } from '../contexts/LanguageContext';
import SEOHead from '../components/SEOHead';

const Syllabus = () => {
  const { t } = useLanguage();

  return (
    <>
      <SEOHead title={t('site.cxd.syllabus.title')} path="/cxd/syllabus" />

      <section className="page-header">
        <div className="container">
          <h1>{t('site.cxd.syllabus.title')}</h1>
          <p>{t('site.cxd.syllabus.subtitle')}</p>
        </div>
      </section>

      <section className="section lesson-content">
        <div className="container">
          <div className="lesson-body">

            <div className="syllabus-info-card">
              <h2>교과목 정보</h2>
              <table className="lesson-table">
                <tbody>
                  <tr><th>교과목명</th><td>고객경험디자인 콘텐츠 전략 (CXD Content Strategy)</td></tr>
                  <tr><th>학점/시수</th><td>3학점 / 이론 2시간 + 실습 2시간</td></tr>
                  <tr><th>이수구분</th><td>전공 선택</td></tr>
                  <tr><th>수강대상</th><td>디자인/경영 관련 학과</td></tr>
                  <tr><th>선수과목</th><td>없음</td></tr>
                </tbody>
              </table>
            </div>

            <h2>교과목 개요</h2>
            <p>
              본 교과목은 고객경험디자인(CXD)의 기본 개념을 이해하고,
              콘텐츠 전략(Content Strategy) 수립 및 실행 능력을 기르는 것을 목표로 합니다.
              사용자 리서치부터 콘텐츠 기획, UX 라이팅, 비주얼 디자인, 성과 측정까지
              고객경험의 전 과정을 체계적으로 학습합니다.
            </p>

            <h2>수업 목표</h2>
            <ul>
              <li>고객경험디자인(CXD)의 핵심 개념과 프로세스를 이해한다.</li>
              <li>사용자 리서치를 수행하고 페르소나, 고객 여정 맵을 작성할 수 있다.</li>
              <li>콘텐츠 감사를 실시하고 정보 아키텍처를 설계할 수 있다.</li>
              <li>UX 라이팅 원칙을 이해하고 효과적인 마이크로카피를 작성할 수 있다.</li>
              <li>Figma를 활용하여 비주얼 콘텐츠를 디자인할 수 있다.</li>
              <li>콘텐츠 성과를 측정하고 데이터 기반으로 개선 방안을 도출할 수 있다.</li>
            </ul>

            <h2>교재 및 참고자료</h2>
            <ul>
              <li><strong>주교재:</strong> 강의 슬라이드 및 온라인 학습 자료 (본 사이트 제공)</li>
              <li><strong>참고서:</strong> Content Strategy for the Web (Kristina Halvorson), UX Writing 관련 서적</li>
              <li><strong>온라인:</strong> NN/g (Nielsen Norman Group) Articles</li>
            </ul>

            <h2>평가 방법</h2>
            <table className="lesson-table">
              <thead>
                <tr><th>평가 항목</th><th>비율</th><th>비고</th></tr>
              </thead>
              <tbody>
                <tr><td>중간고사</td><td>30%</td><td>필기 + 실기</td></tr>
                <tr><td>기말고사</td><td>30%</td><td>필기 + 실기</td></tr>
                <tr><td>과제</td><td>20%</td><td>주차별 실습 과제</td></tr>
                <tr><td>출석</td><td>10%</td><td>결석 3회 이상 F</td></tr>
                <tr><td>참여도</td><td>10%</td><td>수업 참여, 질문 등</td></tr>
              </tbody>
            </table>

            <h2>수업 운영 방식</h2>
            <ul>
              <li><strong>이론 (2시간):</strong> 개념 설명, 사례 분석, 질의응답</li>
              <li><strong>실습 (2시간):</strong> 개인/팀 실습, 과제 수행, 크리틱 세션</li>
              <li>매주 실습 과제가 부여되며, 다음 주 수업 전까지 제출</li>
            </ul>

            <h2>수강 시 유의사항</h2>
            <ul>
              <li>개인 노트북 지참 필수 (실습 수업)</li>
              <li>Figma 계정 생성 및 기본 사용법 숙지 권장</li>
              <li>출석은 매 수업 시작 시 확인하며, 지각 3회 = 결석 1회</li>
              <li>과제 표절 적발 시 해당 과제 0점 처리</li>
            </ul>

          </div>
        </div>
      </section>
    </>
  );
};

export default Syllabus;
