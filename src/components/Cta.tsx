
import { Button } from "./ui/button";

// Функция для плавной прокрутки к форме записи на пробный урок
const scrollToForm = () => {
  document.getElementById('trial-form')?.scrollIntoView({ behavior: 'smooth' });
};

export const Cta = () => {
  return (
    <section
      id="cta"
      className="bg-muted/50 py-16 my-24 sm:my-32"
    >
      <div className="container lg:grid lg:grid-cols-2 place-items-center">
        {/* Левая колонка с заголовком и описанием */}
        <div className="lg:col-start-1">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Сделайте первый шаг в мир IT на{" "}
            <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
              бесплатном пробном уроке
            </span>
          </h2>
          <p className="text-muted-foreground text-xl mt-4 mb-8 lg:mb-0">
            Создайте свой первый проект и познакомьтесь с увлекательным миром программирования. Наши опытные преподаватели помогут вам начать путь в IT.
          </p>
        </div>

        {/* Правая колонка с кнопкой и дополнительным текстом */}
        <div className="space-y-4 lg:col-start-2">
          <Button className="w-full md:w-auto text-lg font-semibold" onClick={scrollToForm}>
            ЗАПИСАТЬСЯ НА БЕСПЛАТНЫЙ УРОК
          </Button>
        </div>
      </div>
    </section>
  );
};