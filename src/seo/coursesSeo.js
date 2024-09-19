import { Helmet } from "react-helmet";

const CoursesSeo = () => {
  return (
    <Helmet>
      <title>Курсы программирования - LearnCode</title>
      <meta
        name="description"
        content="Курсы программирования LearnCode для всех возрастов. Изучайте JavaScript, Roblox Studio, и другие языки программирования с опытными преподавателями."
      />
      <meta
        name="keywords"
        content="курсы программирования, программирование для детей, JavaScript, Roblox Studio, обучение программированию онлайн"
      />
      <meta property="og:title" content="Курсы программирования - LearnCode" />
      <meta property="og:description" content="Лучшие онлайн-курсы программирования для детей и взрослых" />
      <meta property="og:url" content="https://learncode.com/courses" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://learncode.com/images/courses.jpg" />
      <script type="application/ld+json">
        {`
        {
          "@context": "http://schema.org",
          "@type": "Course",
          "name": "Курс по программированию на JavaScript",
          "description": "Научитесь программировать на JavaScript с нуля в LearnCode.",
          "provider": {
            "@type": "Organization",
            "name": "LearnCode",
            "sameAs": "https://learncode.com"
          }
        }
        `}
      </script>
    </Helmet>
  );
};

export default CoursesSeo;
