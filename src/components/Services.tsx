import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { ChartIcon } from "./Icons";
import cubeLeg from "../assets/cube-leg.png";
import { Button } from "./ui/button";

const scrollToForm = () => {
  document.getElementById('trial-form')?.scrollIntoView({ behavior: 'smooth' });
};

interface ServiceProps {
  title: string;
  description: string;
  icon: JSX.Element;
}

const serviceList: ServiceProps[] = [
  {
    title: "Алгоритмическое мышление",
    description:
      "Алгоритмическое мышление развивается через проектную деятельность, решение задач, программирование и пошаговое обучение. Ученики учатся анализировать задачи, разбивать их на части и находить оптимальные решения, что способствует развитию структурного и логического мышления.",
    icon: <ChartIcon />,
  },
  {
    title: "Развитие творческого потенциала",
    description:
      "Творческий потенциал раскрывается через реализацию собственных проектов, эксперименты и нестандартный подход к задачам. Исследование различных методов решения помогает ученикам развивать креативное мышление и уникальные способности.",
    icon: <ChartIcon />,
  },
  {
    title: "Основы программирования",
    description:
      "Основы программирования изучаются через освоение базовых концепций и синтаксиса, с постепенным переходом к сложным темам. Практические задания и создание первых программ способствуют развитию критического мышления и применению знаний на практике.",
    icon: <ChartIcon />,
  },
  {
    title: "Навыки предпринимательства",
    description:
      "Умение создавать и продавать — ключевые навыки предпринимательства. Ученики осваивают процесс разработки идей, создание продуктов и их продвижение на рынке. Эти навыки помогают развивать бизнес-мышление и умение эффективно реализовывать проекты.",
    icon: <ChartIcon />,
  },
];

export const Services = () => {
  return (
    <section className="container py-24 sm:py-32">
      <div className="grid lg:grid-cols-[1fr,1fr] gap-8 place-items-center">
        <div>
          <header>
            <h2 className="text-3xl md:text-4xl font-bold">
              Как {" "}
              <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                PRO_CODE {" "}
              </span>
              помогает развиваться в IT
            </h2>
            <p className="text-muted-foreground text-xl mt-4 mb-8">
              Мы используем лучшие методы обучения, чтобы гарантировать
              качественные и практичные знания для учеников.
            </p>
          </header>

          <div className="flex flex-col gap-8">
            {serviceList.map(({ icon, title, description }: ServiceProps) => (
              <Card key={title} className="hover:shadow-lg transition-shadow duration-300 hover:scale-105 transform transition-transform duration-300 bg-[#F7F7F8] dark:bg-[#1c1917] dark:text-white">
                <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
                  <div className="mt-1 bg-primary/20 p-1 rounded-2xl">{icon}</div>
                  <div>
                    <CardTitle>{title}</CardTitle>
                    <CardDescription className="text-md mt-2 dark:text-gray-300">
                      {description}
                    </CardDescription>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center">
          <img
            src={cubeLeg}
            className="w-[300px] md:w-[500px] lg:w-[600px] object-contain"
            alt="О наших услугах"
          />
          <Button 
            className="w-full md:w-auto text-lg font-semibold bg-[#2dac5c] hover:bg-[#259d52] text-white dark:text-black transition-colors duration-300 px-6 py-3 mt-4 rounded-[10px]" 
            onClick={scrollToForm}
          >
            ЗАПИСАТЬСЯ НА БЕСПЛАТНЫЙ УРОК
          </Button>
        </div>
      </div>
    </section>
  );
};
