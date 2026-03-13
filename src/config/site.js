/**
 * 사이트 설정 파일
 * 하위 사이트의 브랜드, 메뉴, 푸터 등을 정의합니다.
 * 이 파일만 수정하면 Navbar/Footer가 자동으로 반영됩니다.
 */

const site = {
  // 사이트 기본 정보
  name: 'CXD 콘텐츠 전략',
  nameKo: '고객경험디자인 콘텐츠 전략',
  description: '고객경험디자인(CXD) 콘텐츠 전략 - UX 리서치부터 성과 측정까지',
  url: 'https://uxdesign.dreamitbiz.com',

  // 부모 사이트
  parentSite: {
    name: 'DreamIT Biz',
    url: 'https://www.dreamitbiz.com'
  },

  // 브랜드 로고 텍스트
  brand: {
    parts: [
      { text: 'CXD', className: 'brand-dream' },
      { text: ' Content', className: 'brand-it' },
      { text: ' Strategy', className: 'brand-biz' }
    ]
  },

  // 테마 컬러 (meta theme-color)
  themeColor: '#0046C8',

  // 네비게이션 메뉴
  menuItems: [
    {
      labelKey: 'site.nav.cxd',
      path: '/cxd/what-is-cxd',
      activePath: '/cxd',
      dropdown: [
        { path: '/cxd/what-is-cxd', labelKey: 'site.nav.whatIsCXD' },
        { path: '/cxd/weekly-plan', labelKey: 'site.nav.weeklyPlan' },
        { path: '/cxd/syllabus', labelKey: 'site.nav.syllabus' },
        { path: '/cxd/practice-guide', labelKey: 'site.nav.practiceGuide' },
      ]
    },
    {
      labelKey: 'site.nav.uxStrategy',
      path: '/ux',
      activePath: '/ux',
      dropdown: [
        { path: '/ux/intro', labelKey: 'site.nav.uxWeek1' },
        { path: '/ux/research', labelKey: 'site.nav.uxWeek2' },
        { path: '/ux/journey-map', labelKey: 'site.nav.uxWeek3' },
        { path: '/ux/content-audit', labelKey: 'site.nav.uxWeek4' },
        { path: '/ux/information-architecture', labelKey: 'site.nav.uxWeek5' },
        { path: '/ux/ux-writing', labelKey: 'site.nav.uxWeek6' },
        { path: '/ux/content-strategy', labelKey: 'site.nav.uxWeek7' },
        { path: '/ux/visual-design', labelKey: 'site.nav.uxWeek8' },
        { path: '/ux/ui-content', labelKey: 'site.nav.uxWeek9' },
        { path: '/ux/personalization', labelKey: 'site.nav.uxWeek10' },
        { path: '/ux/multichannel', labelKey: 'site.nav.uxWeek11' },
        { path: '/ux/cms', labelKey: 'site.nav.uxWeek12' },
        { path: '/ux/analytics', labelKey: 'site.nav.uxWeek13' },
      ]
    },
    {
      labelKey: 'site.nav.aiTips',
      path: '/ai-tips',
      activePath: '/ai-tips',
      dropdown: [
        { path: '/ai-tips/chatgpt', labelKey: 'site.nav.aiChatGPT' },
        { path: '/ai-tips/claude', labelKey: 'site.nav.aiClaude' },
        { path: '/ai-tips/gemini', labelKey: 'site.nav.aiGemini' },
        { path: '/ai-tips/copilot', labelKey: 'site.nav.aiCopilot' },
        { path: '/ai-tips/prompt', labelKey: 'site.nav.aiPrompt' },
        { path: '/ai-tips/coding', labelKey: 'site.nav.aiCoding' },
        { path: '/ai-tips/writing', labelKey: 'site.nav.aiWriting' },
        { path: '/ai-tips/learning', labelKey: 'site.nav.aiLearning' },
      ]
    },
    { path: '/lectures', labelKey: 'site.nav.lectures', activePath: '/lectures' },
    { path: '/references', labelKey: 'site.nav.references', activePath: '/references' },
    {
      labelKey: 'site.nav.community',
      path: '/community/board',
      activePath: '/community',
      dropdown: [
        { path: '/community/board', labelKey: 'site.nav.board' },
        { path: '/community/gallery', labelKey: 'site.nav.gallery' },
        { path: '/community/portfolio', labelKey: 'site.nav.portfolio' },
        { path: '/community/websites', labelKey: 'site.nav.websites' },
      ]
    }
  ],

  // 푸터 바로가기 링크
  footerLinks: [
    { path: '/cxd/what-is-cxd', labelKey: 'site.nav.cxd' },
    { path: '/ux', labelKey: 'site.nav.uxStrategy' },
    { path: '/ai-tips', labelKey: 'site.nav.aiTips' },
    { path: '/lectures', labelKey: 'site.nav.lectures' },
    { path: '/references', labelKey: 'site.nav.references' },
    { path: '/community/board', labelKey: 'site.nav.board' },
    { path: '/community/gallery', labelKey: 'site.nav.gallery' },
    { path: '/community/portfolio', labelKey: 'site.nav.portfolio' },
    { path: '/community/websites', labelKey: 'site.nav.websites' }
  ],

  // Family Site 목록
  familySites: [
    { name: 'DreamIT Biz (본사이트)', url: 'https://www.dreamitbiz.com' },
    { name: 'DreamIT Books', url: 'https://books.dreamitbiz.com' },
    { name: 'KoreaTech 컴퓨팅 사고', url: 'https://koreatech.dreamitbiz.com' }
  ]
};

export default site;
