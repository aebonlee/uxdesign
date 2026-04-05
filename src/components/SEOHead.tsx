import { useLanguage } from '../contexts/LanguageContext';

const SEOHead = ({ title, description, path = '', ogImage, noindex = false }) => {
  const SITE = '고객경험디자인 콘텐츠 전략 | UX Design';
  const BASE = 'https://uxdesign.dreamitbiz.com';
  const DEFAULT_DESC = '고객경험디자인(CXD) 콘텐츠 전략 학습 - UX 리서치, 콘텐츠 전략, 비주얼 디자인까지 한곳에서';
  const fullTitle = title ? `${title} | ${SITE}` : SITE;
  const desc = description || DEFAULT_DESC;
  const image = ogImage || `${BASE}/og-image.png`;

  const { language } = useLanguage();

  return (
    <>
      <title>{fullTitle}</title>
      <meta name="description" content={desc} />
      <link rel="canonical" href={`${BASE}${path}`} />
      {noindex && <meta name="robots" content="noindex,nofollow" />}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={desc} />
      <meta property="og:url" content={`${BASE}${path}`} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="고객경험디자인 콘텐츠 전략" />
      <meta property="og:locale" content="ko_KR" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={desc} />
      <meta name="twitter:image" content={image} />
    </>
  );
};

export default SEOHead;
