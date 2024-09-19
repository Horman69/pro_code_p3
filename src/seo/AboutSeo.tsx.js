import { Helmet } from "react-helmet";

const AboutSeo = () => {
  return (
    <Helmet>
      <title>О нас - LearnCode</title>
      <meta
        name="description"
        content="Узнайте больше о школе LearnCode, которая обучает программированию детей и взрослых. Мы предлагаем лучшие курсы для начинающих."
      />
      <meta
        name="keywords"
        content="о нас, LearnCode, онлайн-школа, программирование для детей, обучение программированию"
      />
      <meta property="og:title" content="О нас - LearnCode" />
      <meta property="og:description" content="LearnCode обучает программированию детей и взрослых" />
      <meta property="og:url" content="https://learncode.com/about" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://learncode.com/images/about.jpg" />
    </Helmet>
  );
};

export default AboutSeo;
