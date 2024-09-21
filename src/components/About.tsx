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
            alt=""
            className="w-[300px] object-contain rounded-lg"
          />
          <div className="bg-green-0 flex flex-col justify-between">
            <div className="pb-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                  О школе {" "}
                </span>
                LearnCode
              </h2>
              <p className="text-xl text-muted-foreground mt-4">
                Мы обучаем детей и подростков от 6 до 16 лет программированию,
                помогая им освоить важные навыки для будущей профессии.
                Наши курсы построены на практике, чтобы учащиеся могли развивать
                логическое и алгоритмическое мышление, изучать различные направления IT 
                и найти свой путь в сфере технологий.
              </p>
            </div>
            <Statistics />
          </div>
        </div>
      </div>

      {/* Центрируем кнопку */}
      {/* <div className="flex justify-center mt-8">
        <Button className="w-full md:w-1/3">БЕСПЛАТНЫЙ УРОК</Button>
      </div> */}
    </section>
  );
};
