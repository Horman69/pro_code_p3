import { Helmet } from "react-helmet";

const HomeSeo = () => {
  return (
    <Helmet>
      <title>LearnCode - Онлайн-школа программирования для детей и взрослых</title>
      <meta
        name="description"
        content="Онлайн-школа LearnCode предлагает курсы по программированию для детей и взрослых. Изучайте JavaScript, Roblox Studio, и другие языки программирования с опытными преподавателями."
      />
      <meta
        name="keywords"
        content="программирование для детей, курсы программирования, JavaScript, Roblox, программирование для начинающих, обучение программированию онлайн"
      />
      <meta name="robots" content="index, follow" />
      <meta property="og:title" content="LearnCode - Онлайн-школа программирования" />
      <meta property="og:description" content="Лучшие курсы программирования для детей и взрослых" />
      <meta property="og:url" content="https://learncode.com" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://learncode.com/images/og-image.jpg" />
      <script type="application/ld+json">
        {`
        {
          "@context": "http://schema.org",
          "@type": "Organization",
          "name": "LearnCode",
          "url": "https://learncode.com",
          "logo": "https://learncode.com/logo.png",
          "sameAs": [
            "https://www.facebook.com/learncode",
            "https://www.instagram.com/learncode"
          ],
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+1-555-555-5555",
            "contactType": "Customer Service"
          }
        }
        `}
      </script>
    </Helmet>
  );
};

export default HomeSeo;
