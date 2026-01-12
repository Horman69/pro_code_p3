import { Statistics } from "./Statistics";
import pilot from "../assets/pilot.png";
import { Card, CardContent } from "@/components/ui/card";

export const About = () => {
  const features = [
    "Практические курсы по востребованным направлениям",
    "Развитие алгоритмического мышления и логики",
    "Индивидуальный подход и поддержка преподавателей из ведущих IT-компаний",
    "Проектная работа: создание игр, веб-сайтов, анимаций",
    "Портфолио готовых проектов для будущей профессии",
    "Доступ к учебным материалам и консультациям"
  ];

  return (
    <section id="about" className="py-24 sm:py-32" aria-label="О школе PRO_CODE">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-black dark:text-white">
          <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
            О школе{" "}
          </span>
          PRO_CODE
        </h2>
        <Card className="shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 bg-[#F7F7F8] dark:bg-[#1c1917] dark:text-gray-300">
          <CardContent className="p-8">
            <div className="flex flex-col-reverse md:flex-row gap-8 md:gap-12">
              <img
                src={pilot}
                alt="Ученик PRO_CODE работает над проектом на компьютере"
                className="w-[300px] object-contain rounded-lg"
                width="300"
                height="300"
                loading="lazy"
              />
              <div className="flex flex-col justify-between">
                <article className="pb-6">
                  <p className="text-xl md:text-2xl text-muted-foreground mb-6 leading-relaxed">
                    PRO_CODE — это современная онлайн-школа программирования для детей и подростков 6-16 лет, 
                    которая формирует ключевые навыки для успешной карьеры в IT:
                  </p>
                  <ul className="text-lg md:text-xl text-muted-foreground space-y-3">
                    {features.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-primary mr-2" aria-hidden="true">✅</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </article>
                <Statistics />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "PRO_CODE",
          "description": "Современная онлайн-школа программирования для детей и подростков 6-16 лет",
          "educationalLevel": "Beginner to Intermediate",
          "teaches": [
            "Программирование",
            "Разработка игр",
            "Веб-разработка",
            "Алгоритмическое мышление"
          ]
        })}
      </script>
    </section>
  );
};
