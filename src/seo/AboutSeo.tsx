import { Helmet } from "react-helmet-async";

interface SeoProps {
  title: string;
  description: string;
  keywords: string;
}

const AboutSeo: React.FC = () => {
  const seoData: SeoProps = {
    title: "About Us - LearnCode",
    description: "Learn more about LearnCode, our mission, values, and team.",
    keywords: "about, LearnCode, programming, education",
  };

  return (
    <Helmet>
      <title>{seoData.title}</title>
      <meta name="description" content={seoData.description} />
      <meta name="keywords" content={seoData.keywords} />
    </Helmet>
  );
};

export default AboutSeo;
