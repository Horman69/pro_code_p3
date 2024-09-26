import { Statistics } from "./Statistics";
import pilot from "../assets/pilot.png";
import { Card, CardContent } from "@/components/ui/card";

export const About = () => {
  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-black dark:text-white">
          <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
            О школе{" "}
          </span>
          PRO_CODE
        </h2>
        <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 bg-[#F7F7F8] dark:bg-[#1c1917]">
          <CardContent className="p-8">
            <div className="flex flex-col-reverse md:flex-row gap-8 md:gap-12">
              <img
                src={pilot}
                alt="Иллюстрация ученика PRO_CODE"
                className="w-[300px] object-contain rounded-lg"
                width="300"
                height="300"
              />
              <div className="flex flex-col justify-between">
                <div className="pb-6">
                  <p className="text-xl md:text-2xl text-muted-foreground mb-6 leading-relaxed">
                    PRO_CODE — это современная онлайн-школа программирования для детей и подростков 6-16 лет, 
                    которая формирует ключевые навыки для успешной карьеры в IT:
                  </p>
                  <ul className="text-lg md:text-xl text-muted-foreground space-y-3">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✅</span>
                      <span>Практические курсы по востребованным направлениям</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✅</span>
                      <span>Развитие алгоритмического мышления и логики</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✅</span>
                      <span>Индивидуальный подход и поддержка преподавателей из ведущих IT-компаний</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✅</span>
                      <span>Проектная работа: создание игр, веб-сайтов, анимаций</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✅</span>
                      <span>Портфолио готовых проектов для будущей профессии</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✅</span>
                      <span>Доступ к учебным материалам и консультациям</span>
                    </li>
                  </ul>
                </div>
                <Statistics />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};