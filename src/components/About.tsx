import { Statistics } from "./Statistics";
import pilot from "../assets/pilot.png";
//import { Button } from "./ui/button";

export const About = () => {
  return (
    <section
      id="about"
      className="container py-24 sm:py-32"
    >
      <div className="bg-muted/50 border rounded-lg py-12">
        <div className="px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12">
          <img
            src={pilot}
            alt="Иллюстрация ученика PRO_CODE"
            className="w-[300px] object-contain rounded-lg"
            width="300"
            height="300"
          />
          <div className="flex flex-col justify-between">
            <div className="pb-6">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                  О школе{" "}
                </span>
                PRO_CODE
              </h1>
              <p className="text-xl text-muted-foreground">
                PRO_CODE - инновационная онлайн-школа программирования для детей и подростков от 6 до 16 лет. 
                Мы помогаем ученикам освоить важные навыки для будущей профессии в сфере IT.
              </p>
              <ul className="mt-4 text-muted-foreground">
                <li>✅ Практические курсы по различным направлениям IT</li>
                <li>✅ Развитие логического и алгоритмического мышления</li>
                <li>✅ Индивидуальный подход к каждому ученику</li>
                <li>✅ Опытные преподаватели-практики из ведущих IT-компаний</li>
                <li>✅ Подготовка к успешной карьере в сфере технологий</li>
                <li>✅ Интерактивные уроки и проектная деятельность</li>
                <li>✅ Создание портфолио проектов: игры, веб-сайты, анимации</li>
                <li>✅ Доступ к онлайн-библиотеке и консультациям с преподавателями</li>
              </ul>
            </div>
            <Statistics />
          </div>
        </div>
      </div>

      {/* Центрируем кнопку */}
      {/* <div className="flex justify-center mt-8">
        <Button className="w-full md:w-auto text-lg font-semibold bg-[#2dac5c] hover:bg-[#259d52] text-white transition-colors duration-300 px-6 py-3" onClick={scrollToForm}>
          ЗАПИСАТЬСЯ НА БЕСПЛАТНЫЙ УРОК
        </Button>
      </div> */}
    </section>
  );
};