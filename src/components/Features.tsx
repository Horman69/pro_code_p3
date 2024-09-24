import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import image from "../assets/growth.png";
import image3 from "../assets/reflecting.png";
import image4 from "../assets/looking-ahead.png";


const scrollToForm = () => {
  document.getElementById('trial-form')?.scrollIntoView({ behavior: 'smooth' });
};

interface FeatureProps {
  title: string;
  description: string;
  image: string;
}

const features: FeatureProps[] = [
  {
    title: "Основы программирования",
    description:
      "Освоение основ программирования станет увлекательным приключением. Ребенок научатся понимать логику кода и создавать собственные программы в среде Scratch, что даст крепкий фундамент для будущего в мире технологий.",
    image: image4,
  },
  {
    title: "Первый опыт в IT",
    description:
      "Ваш ребенок пройдет весь путь создания креативного проекта, как в реальной IT-индустрии: от идеи и планирования до работы в команде и финальной презентации. Мы научим его мыслить стратегически, взаимодействовать с другими и воплощать идеи в жизнь.",
    image: image3,
  },
  {
    title: "Портфолио проектов",
    description:
      "Создадим портфолио из 20+ проектов, включая анимированную визитку, озвученный мультфильм и захватывающую многоуровневую игру с препятствиями. Каждый проект станет ярким примером навыков и творчества в программировании.",
    image: image,
  },
  
];

const featureList: string[] = [
  "#Разработчик игр",
  "#Программист",
  "#3D-моделлер",
  "#Старт в IT",
  "#Дизайнер в IT",
  "#Мобильная разработка",
  "#Компьютерная грамотность",
  "#Визуальное программирование",
];

export const Features = () => {
  return (
    <section
      id="game_developer"
      className="container py-24 sm:py-32 space-y-8"
    >
      <h2 className="text-3xl lg:text-4xl font-bold md:text-center">
        Изучаем.{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
        Играем.{" "}
        </span>
        Создаем.
      </h2>

      <div className="flex flex-wrap md:justify-center gap-4">
        {featureList.map((feature: string) => (
          <div key={feature}>
            <Badge
              variant="secondary"
              className="text-sm"
            >
              {feature}
            </Badge>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map(({ title, description, image }: FeatureProps) => (
          <Card
            key={title}
            className="hover:shadow-lg transition-shadow duration-300 hover:scale-105 transform transition-transform duration-300 bg-white dark:bg-[#1c1917] dark:text-gray-300"
          >
            <CardHeader>
              <CardTitle>{title}</CardTitle>
            </CardHeader>

            <CardContent className="text-[#71717a] dark:text-gray-300">{description}</CardContent>

            <CardFooter>
              <img
                src={image}
                alt={title}
                className="w-[200px] lg:w-[300px] mx-auto"
              />
            </CardFooter>
          </Card>
        ))}
      </div>
      <div
       className="flex justify-center mt-8">
 <Button className="w-full md:w-auto text-lg font-semibold bg-[#2dac5c] hover:bg-[#259d52] text-white transition-colors duration-300 px-6 py-3" onClick={scrollToForm}>
            ЗАПИСАТЬСЯ НА БЕСПЛАТНЫЙ УРОК
          </Button>
</div>

    </section>
  );
};
