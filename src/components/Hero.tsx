import { Button } from "./ui/button";
import { HeroCards } from "./HeroCards";

// Функция для плавной прокрутки к форме записи на пробный урок
const scrollToForm = () => {
  document.getElementById('trial-form')?.scrollIntoView({ behavior: 'smooth' });
};

export const Hero = () => {
  return (
    <section className="container flex flex-col lg:flex-row items-center justify-between py-20 md:py-32 gap-10">
      <div className="text-center lg:text-start space-y-6">
        <header className="text-4xl sm:text-5xl md:text-6xl font-bold">
          <h1 className="mb-2">
            <span className="inline bg-gradient-to-r from-[#f596d3] to-[#D247BF] text-transparent bg-clip-text">
            PRO_CODE
            </span>{" "}
            <p>детская онлайн-школа</p>
          </h1>
          <h2 className="inline">
            <span className="inline bg-gradient-to-r from-[#61DAFB] via-[#1fc0f1] to-[#03a3d7] text-transparent bg-clip-text">
              IT-профессий
            </span>
          </h2>
        </header>

        <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
          Раскройте интересы и способности Вашего ребенка через мир IT-технологий. Обучение программированию, дизайну и 3D-моделированию для детей от 6 до 16 лет.
        </p>

        <div className="space-y-4 md:space-y-0 md:space-x-4">
          <Button 
            className="w-full md:w-auto text-lg font-semibold bg-[#2dac5c] hover:bg-[#259d52] text-white dark:text-black transition-colors duration-300 px-6 py-3 rounded-[10px]" 
            onClick={scrollToForm}
          >
            ЗАПИСАТЬСЯ НА БЕСПЛАТНЫЙ УРОК
          </Button>
        </div>
      </div>

      <div className="z-10">
        <HeroCards />
      </div>

      {/* Тень для визуального эффекта */}
      <div className="shadow"></div>
    </section>
  ); 
};

